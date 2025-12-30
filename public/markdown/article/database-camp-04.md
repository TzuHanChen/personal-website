## Tables 資料表管理

### 簡介：從單張資料表升級到多張資料表的管理流程

這章節老師會教同學

1. 該如何管理自己的資料表
2. 什麼時候需要拆出另外一張資料表

### 關鍵欄位介紹，主鍵、外來鍵

主鍵和外來鍵的差異

主鍵 (Primary Key，簡稱 PK)

1. 每個資料表都要有一個主鍵
2. 每個資料表最多只能有一個主鍵
3. 主鍵的值必須是唯一的，不能重複
4. 主鍵不能是 Null 值，但外來鍵可以是 Null 值
5. 大部分情況會命名為 'id'，使用整數或 UUID 格式
6. 設定後就不應該再更動

外來鍵 (Foreign Key, 簡稱 FK)

1. 當資料需要關聯到其他表格時才會用到
2. 同一個資料表中，可以有多筆資料使用相同的外來鍵
3. 命名通常會用 '參考資料表_id' 的格式
4. 外來鍵必須對應到被參考資料表的主鍵

### 如何規劃外來鍵與資料表拆分

| 員工編號 id PK | 姓名 name | 薪資 salary | 部門名稱 team |
| - | - | - | - |
| 1 | 張小明 | 45000 | 開發部 |
| 2 | 王大明 | 48000 | 開發部 |
| 3 | 李小華 | 52000 | 人事部 |
| 4 | 陳小玉 | 55000 | 人事部 |
| 5 | 林小豪 | 47000 | 開發部 |

口訣：「多的要設定成外來鍵」

流程：從欄位角度去規劃

1. 以員工角度：一個員工會有 1 個部門
2. 以部門角度：一個部門會有多個員工

| 部門編號 id PK | 部門名稱 name |
| - | - |
| 1 | 開發部 |
| 2 | 資訊部 |

| 員工編號 id PK | 姓名 name | 薪資 salary | 部門編號 team_id FK |
| - | - | - | - |
| 1 | 張小明 | 45000 | 1 |
| 2 | 王大明 | 48000 | 1 |
| 3 | 李小華 | 52000 | 2 |
| 4 | 陳小玉 | 55000 | 2 |
| 5 | 林小豪 | 47000 | 1 |

### 主鍵設定方式、ID 自動遞增方法

SERIAL 自動遞增，PRIMARY KEY 設定主鍵

```sql
CREATE TABLE users(
  id SERIAL PRIMARY KEY,
  name VARCHAR(50)
);
```

加入資料時不需要寫有設定 SERIAL 的欄位

```sql
INSERT INTO users (name) VALUES
  ('張小明'), ('王大明');
```

讀取資料

```sql
SELECT * FROM users;
```

| id | name |
| - | - |
| 1 | 張小明 |
| 2 | 王大明 |

### 建立完整資料庫流程

```sql
CREATE TABLE teams (
  id SERIAL PRIMARY KEY,
  name VARCHAR(50)
);

CREATE TABLE users(
  id SERIAL PRIMARY KEY,
  name VARCHAR(50),
  salary INTEGER,
  team_id INTEGER,
  FOREIGN KEY (team_id) REFERENCES teams(id)
);
```

```sql
INSERT INTO teams (name) VALUES
  ('開發部'), ('人事部');

SELECT * FROM teams;
```

| id | name |
| - | - |
| 1 | 開發部 |
| 2 | 人事部 |

```sql
INSERT INTO users (name, salary, team_id) VALUES
  ('張小明',45000,1),
  ('王大明',48000,1),
  ('李小華',52000,2),
  ('陳小玉',55000,2),
  ('林小豪',47000,1);

SELECT * FROM users;
```

| id | name | salary | team_id |
| - | - | - | - |
| 1 | 張小明 | 45000 | 1 |
| 2 | 王大明 | 48000 | 1 |
| 3 | 李小華 | 52000 | 2 |
| 4 | 陳小玉 | 55000 | 2 |
| 5 | 林小豪 | 47000 | 1 |

### 搭配 Where 條件，進行合併資料表查詢

```sql
SELECT users.id, users.name, users.salary, teams.name AS 部門名稱
FROM users, teams
WHERE users.team_id = teams.id;
```

| id | name | salary | 部門名稱 |
| - | - | - | - |
| 1 | 張小明 | 45000 | 開發部 |
| 2 | 王大明 | 48000 | 開發部 |
| 3 | 李小華 | 52000 | 人事部 |
| 4 | 陳小玉 | 55000 | 人事部 |
| 5 | 林小豪 | 47000 | 開發部 |

### 使用 inner join，進行合併資料表

```sql
SELECT users.id, users.name, users.salary, teams.name AS 部門名稱
FROM users
INNER JOIN teams ON users.team_id = teams.id;
```

| id | name | salary | 部門名稱 |
| - | - | - | - |
| 1 | 張小明 | 45000 | 開發部 |
| 2 | 王大明 | 48000 | 開發部 |
| 3 | 李小華 | 52000 | 人事部 |
| 4 | 陳小玉 | 55000 | 人事部 |
| 5 | 林小豪 | 47000 | 開發部 |

### 主鍵、外來鍵 constraint 約束提醒

新資料和舊資料的主鍵重複時會出現錯誤

`duplicate key value violates unique constraint "資料表名稱_pkey"`

新資料的外來鍵不存在時會出現錯誤

`insert or update on table "資料表名稱" violates foreign key constraint "資料表名稱_外來鍵名稱_fkey"`

### 主鍵、外來鍵、inner join 小節作業

作業一：拯救明華國小的資料庫，哪個欄位適合變成外來鍵？

| 學生編號 | 姓名 | 班級 | 性別 | 年齡 |
| - | - | - | - | - |
| 1 | 小明 | 三年一班 | 男 | 8 |
| 2 | 小華 | 三年二班 | 女 | 9 |
| 3 | 小美 | 三年一班 | 男 | 8 |
| 4 | 小強 | 三年一班 | 女 | 8 |
| 5 | 小智 | 三年二班 | 男 | 9 |

班級欄位可以改成班級編號欄位外來鍵

作業二：第一題的延伸，多了一個班級老師

| 學生編號 | 姓名 | 班級 | 班級老師 | 性別 | 年齡 |
| - | - | - | - | - | - |
| 1 | 小明 | 三年一班 | 廖洧杰 | 男 | 8 |
| 2 | 小華 | 三年二班 | 卡斯伯 | 女 | 9 |
| 3 | 小美 | 三年一班 | 查理 | 男 | 8 |
| 4 | 小強 | 三年一班 | 麥可 | 女 | 8 |
| 5 | 小智 | 三年二班 | 李燕容 | 男 | 9 |

班級老師欄位可以改成班級老師編號欄位外來鍵

作業三：小孩的家庭歸類資料庫，父母資料一直重複實在討厭！

| 小孩編號 | 姓名 | 父母名稱 | 父母電話 | 父母性別 |
| - | - | - | - | - |
| 1 | 小明 | 王大祥 | 0973254254 | 男 |
| 2 | 小華 | 王曉如 | 0955717855 | 女 |
| 3 | 小美 | 王大祥 | 0973254254 | 男 |
| 4 | 小強 | 王曉如 | 0955717855 | 女 |
| 5 | 小智 | 王大祥 | 0973254254 | 男 |

可以新增父母編號欄位外來鍵，再合併父母資料表

## postgres 函式

### NULL 欄位解析

什麼是 null?

NULL 在資料庫中表示「未知」或「沒有值」。和零 (0) 或空字串 ('') 是不同的概念

null 的使用時機

用來表示資料庫中某個欄位尚未填入資料。在實際應用中，並不是所有資料在一開始就具備，例如表單的某些欄位可能會被使用者選擇性填寫。例如：

* 社群網站的個人大頭照
* 新員工尚未被指派部門，需先顯示為 null

NULL 預設為沒有值，NOT NULL 必須要有值

```sql
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  email VARCHAR(100) NOT NULL,
  salary INTEGER NULL
);

INSERT INTO users (name, email) VALUES
  ('王小明', 'ejnje@gmail.com');

SELECT * FROM users;
```

| id | name | email | salary |
| - | - | - | - |
| 1 | 王小明 | <wang@gmail.com> | null |

```sql
INSERT INTO users (name) VALUES('王小明');
```

`null value in column "email" of relation "users" violates not-null constraint`

### COALESCE 函數

用來檢查並處理 NULL 結果，會依序檢查傳入的參數，回傳參數列表中第一個不是 NULL 的值

```sql
SELECT id, name, email, team_name, salary
FROM users;
```

| id | name | email | team_name | salary |
| - | - | - | - | - |
| 8 | 黃小凱 | <huang@example.com> | null | null |

```sql
SELECT id, name, email,
  COALESCE(team_name, '待分配') as team_name,
  COALESCE(salary, 0) as salary
FROM users;
```

| id | name | email | team_name | salary |
| - | - | - | - | - |
| 8 | 黃小凱 | <huang@example.com> | 待分配 | 0 |

### DISTINCT 不重複函數

SQL 中用於去除重複資料的關鍵字

```sql
SELECT team_name FROM users;
```

| team_name |
| - |
| 開發部 |
| 開發部 |
| 開發部 |
| 人事部 |
| 人事部 |

```sql
SELECT DISTINCT team_name FROM users;
```

| team_name |
| - |
| 人事部 |
| 開發部 |

### count 函數

* COUNT 是一個計數函數
* 用來計算資料表中的資料筆數
* 最常用的集合函數 (Aggregate Function) 之一

```sql
SELECT COUNT(*) AS 員工總數 FROM users;
```

| 員工總數 |
| - |
| 5 |

```sql
SELECT COUNT(*) AS 開發部人數 FROM users
WHERE team_name = '開發部';
```

| 開發部人數 |
| - |
| 3 |

```sql
SELECT COUNT(*) AS 高薪員工數 FROM users
WHERE salary > 45000;
```

| 高薪員工數 |
| - |
| 4 |

### Sum 加總、AVG 平均函數

AVG、SUM、MAX、MIN函數

1. AVG (Average) 計算一組數值的「平均值」
2. SUM (Summary) 計算一組數值的「總和」
3. MAX (Maximum) 找出一組數值中的「最大值」
4. MIN (Minimum) 找出一組數值中的「最小值」

```sql
SELECT
  AVG(salary) AS 員工平均薪資,
  SUM(salary) AS 員工總薪資
FROM users;
```

| 員工平均薪資 | 員工總薪資 |
| - | - |
| 51800 | 259000 |

```sql
SELECT
  MAX(salary) AS 最高薪水,
  MIN(salary) AS 最低薪水
FROM users;
```

| 最高薪水 | 最低薪水 |
| - | - |
| 68000 | 42000 |

```sql
SELECT
  AVG(salary) as 開發部平均薪資,
  SUM(salary) as 開發部總薪資
FROM users
WHERE team_name = '開發部';
```

| 開發部平均薪資 | 開發部總薪資 |
| - | - |
| 56333 | 169000 |

### UUID 介紹

SERIAL 跟 UUID 差異

| 特性 | SERIAL | UUID |
| - | - | - |
| 格式 | 整數 (1, 2, 3...) | 8-4-4-4-12 隨機字元 |
| 生成方式 | 自動遞增 | 隨機生成 |
| 空間使用 | 小 | 大 |
| 優點 | 簡單、易讀、節省空間 | 全球唯一、安全性高 |
| 可預測性 | 容易預測下一個值 | 完全隨機，無法預測 |

資料庫開啟 UUID 功能：PostgreSQL 13 版本以上不需要此指令

```sql
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
```

SERIAL 建立語法

```sql
id SERIAL PRIMARY KEY
```

UUID 建立語法

```sql
id UUID PRIMARY KEY DEFAULT gen_random_uuid()
```
