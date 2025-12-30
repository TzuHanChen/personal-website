## order by 排序資料

### order by 排序方法

ASC 從小到大、DESC 從大到小、LIMIT 筆數設定

範例：薪資從大到小，最多兩筆

```sql
SELECT name AS 姓名, salary AS 薪資
FROM users ORDER BY salary DESC LIMIT 2;
```

### 多條件排序方法

範例：先依照部門 id 從小到大排序，再依照薪資從小到大排序

```sql
SELECT name AS 姓名, salary AS 薪資, team_id AD 部門ID
FROM users ORDER BY team_id ASC, salary ASC;
```

### Join 組合+排序技巧

範例：先找出人事部的資料，再依照薪資從小到大排序

```sql
SELECT
  users.name AS 姓名, users.salary AS 薪資,
  teams.name AS 部門名稱
FROM users
INNER JOIN teams ON users.team_id = teams.id
WHERE teams.name = '人事部'
ORDER BY salary ASC;
```

## group by 分組資料

### 為什麼要學 group by 分組？

實務上可能會需要每幾筆資料分成一組，每個組別分開計算並輸出查詢結果

### group by 語法教學

GROUP BY 適合將資料進行分組

範例：查詢所有部門 ID

```sql
SELECT team_id AS 部門ID FROM users;
```

查詢結果

| 部門id |
| - |
| 1 |
| 1 |
| 2 |
| 2 |
| 1 |

範例：查詢不重複部門 ID

```sql
SELECT team_id AS 部門ID
FROM users GROUP BY team_id;
```

查詢結果

| 部門id |
| - |
| 2 |
| 1 |

搭配聚合函數 (Aggregate Functions) (COUNT、SUM、AVG、MAX、MIN) 來進行分組計算

範例：查詢各部門人數

```sql
SELECT team_id AS 部門ID, COUNT(*) AS 人數
FROM users GROUP BY team_id;
```

查詢結果

| 部門id | 人數 |
| - | - |
| 2 | 2 |
| 1 | 3 |

### group by + join 整合教學

範例：查詢不重複部門名稱

```sql
SELECT teams.name AS 部門名稱, COUNT(*) AS 人數
FROM users
JOIN teams ON users.team_id = teams.id
GROUP BY teams.name;
```

查詢結果

| 部門名稱 | 人數 |
| - | - |
| 人事部 | 2 |
| 開發部 | 3 |

### group by 延伸運用

範例：查詢各部門薪資數據

```sql
SELECT
  teams.name AS 部門名稱,
  COUNT(*) AS 人數,
  SUM(users.salary) AS 薪資總和,
  AVG(users.salary) AS 平均薪資,
  MAX(users.salary) AS 最高薪資,
  MIN(users.salary) AS 最低薪資,
FROM users
JOIN teams ON users.team_id = teams.id
GROUP BY teams.name;
```

查詢結果

| 部門名稱 | 人數 | 薪資總和 | 平均薪資 | 最高薪資 | 最低薪資 |
| - | - | - | - | - | - |
| 人事部 | 2 | 98000 | 49000 | 55000 | 43000 |
| 開發部 | 3 | 140000 | 46666 | 48000 | 45000 |

## 子查詢 (Subquery)

### 為什麼要學子查詢？

* 可在一個 SQL 指令使用多個 SELECT
* 在開頭使用的 SELECT 是主要的部分，所以稱為「主查詢」，其餘 SELECT 稱為「子查詢」

實務上可能會需要將第一次查詢取得的資料用在第二次查詢，轉換成 SQL 指令就會變成先執行子查詢再執行主查詢

### where 子查詢應用

範例：查詢高於平均值的薪資

```sql
SELECT name, salary
FROM users
WHERE salary > (SELECT AVG(salary) FROM users);
```

查詢結果

| name | salary |
| - | - |
| 王大明 | 48000 |
| 陳小玉 | 55000 |

### 多個子查詢應用方式

範例：用 email 找薪水，用部門名稱來找 teams.id

```sql
INSERT INTO users (name, email, salary, team_id) VALUES
(
  '新同事',
  'new1@gmail.com',
  (SELECT salary FROM users WHERE email = 'a@gmail.com'),
  (SELECT id FROM teams WHERE name = '開發部')
);
```
