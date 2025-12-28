## 資料庫簡介

### 什麼是資料庫

資料寫入資料庫、資料庫回傳資料

日常生活中我們都需要資料庫來儲存資料

資料庫都長什麼形式呢？

* 關聯式資料庫 (RDBMS, Relational Database Management System)
* 非關聯式資料庫 (NoSQL, Not only SQL)

這門課程介紹的是關聯式資料庫

資料庫的運作流程

* 資料庫
* Server 伺服器端
  * 應用伺服器、網頁伺服器、API 伺服器
* Client 客戶端
  * 桌上型電腦、筆記型電腦、平板電腦、智慧型手機

### 什麼是 SQL？

該如何操作資料庫？透過SQL！

SQL 全名是"Structured Query Language" 中文是「結構化查詢語言」

支援 SQL 指令的關聯式資料庫：PostgreSQL, MySQL, MS SQL Server, Oracle

透過 SQL 指令回傳搜尋結果

* Client 客戶端送出 SQL 指令給資料庫
* 資料庫回傳查詢結果給 Client 客戶端

常見指令：新增 Create、讀取 Read、更新 Update、刪除 Delete，簡稱 CRUD

## 建立 SQL 資料表

### 資料庫三劍客：table, row, column

* 資料表 (Table) 是整體資料，包含了所有相關的資料
* 欄位 (Columns) 定義資料的屬性和類型 (Data Type)
* 資料列 (Rows) 是橫向的資料集合，代表一筆完整資料

資料庫設計順序

* Table (資料表) 要儲存什麼資料？
* Columns (欄位) 這張資料表有哪些欄位？
* Data Type (資料類型) 設定每個欄位的資料類型

新增一張資料表

1 定義資料表結構

範例情境：新增一個 users 資料表

```sql
CREATE TABLE users (
  name VARCHAR(50),
  email VARCHAR(108),
  age INTEGER
);
```

建議：語法關鍵字 (例如 CREATE, TABLE) 用大寫，自訂資料表名稱和欄位名稱 (例如 users, name) 用小寫

2 各欄位用途

* name: 會員姓名(字串型別,最長50個字元)
* email: 會員電子郵件(字串型別,最長100個字元)
* age: 會員年齡(整數型別)

各欄位之間要用逗號 , 分開

3 完成建立資料表

最後加上分號 ; 來結束整個 SQL 指令。

線上 SQL 指令練習網站：[PG SQL](https://pg-sql.com)

![PG SQL 截圖](/image/article/database-camp-pg-sql.png)

### 透過 excel 深入了解資料庫設計三劍客

概念對照

| Excel | 資料庫 |
| - | - |
| 工作表名稱 | 資料表名稱 |
| 欄位名稱 | 欄位名稱 |
| 儲存格格式 | 資料類型 |

### 常用資料庫資料型態

| 資料型態 | 描述 | 使用情境 |
| - | - | - |
| INTEGER | 整數 | ID、年齡、數量 |
| VARCHAR(n) | 可變長度字串 | 名稱、描述 |
| TIMESTAMP | 日期時間 | 建立 / 更新時間 |
| DECIMAL(p,s) | 精確小數 | 金額計算 |
| BOOLEAN | 真 / 假值 | 狀態、開關 |
| JSON | JSON 資料 | 彈性資料結構 |

### INSERT：加入一筆資料到 table 吧

新增資料 (insert)

範例情境：新增一筆或多筆資料

```sql
INSERT INTO users (name, email, age) VALUES
  ('張小明', 'xiaoming@gmail.com', 25);
-- 一次新增多筆資料
INSERT INTO users (name, email, age) VALUES
  ('張小明', 'xiaoming@gmail.com', 25),
  ('王大華', 'dahua@gmail.com', 30),
  ('林美玲', 'meiling@gmail.com', 28);
```

1. INSERT INTO 此關鍵字是用來告訴資料庫要新增資料。
2. users 資料表名稱,要新增資料到這個資料表中。
3. (name, email, age) 列出我們要新增的欄位名稱，分別是姓名、Email 和年齡。
4. VALUES 這個關鍵字是用來告訴資料庫要新增的具體資料值。
5. ('張小明', '<xiaoming@gmail.com>', 25) 這裡就是要新增的資料，分別是姓名、 Email 和年齡。資料順序和欄位順序必須相同。每筆資料之間要用逗號 , 分開。

### SELECT：查找資料方法

範例情境：查詢資料

```sql
-- 查詢所有欄位
SELECT * FROM users;
-- 查詢特定欄位 (只要姓名和年齡)
SELECT name, age FROM users;
```

### 新增 AS 別名

查找資料時可用 AS 使回傳資料改用自訂欄位名稱

範例情境：查詢現有資料或運算過的資料

```sql
SELECT
  name AS 姓名,
  age AS 現在年齡,
  65 - age AS 距離退休年數
FROM users;
```

### 增加 SQL 註解

```sql
-- 使用兩個減號 - 可撰寫單行註解
/*
使用斜線 / 和星號 * 可撰寫多行註解
*/
```

## SQL 語法教學

### WHERE：篩選資料

範例情境：我想查找 3C 類別的產品

```sql
SELECT name, price
FROM products
WHERE category = '3C';
```

SQL 執行順序

1. FROM 資料表名稱
2. WHERE 篩選條件
3. SELECT 欄位名稱

### 比較運算子： >、≤、=

| 運算子 | 意義 |
| - | - |
| = | 等於 |
| > | 大於 |
| < | 小於 |
| >= | 大於等於 |
| <= | 小於等於 |

範例情境：想知道哪些商品快沒貨了，有沒有庫存小於 50 的產品？

```sql
SELECT name, stock
FROM products
WHERE stock < 50;
```

### 邏輯運算子：AND、OR

| 運算子 | 意義 |
| - | - |
| AND | 且，兩個條件都要成立 |
| OR | 或，其中一個條件成立 |

範例情境：已上架的 3C 商品

```sql
SELECT name, price, stock
FROM products
WHERE status = 'active' AND category = '30';
```

範例情境：下架或無庫存商品

```sql
SELECT name, status, stock
FROM products
WHERE status = 'inactive' OR stock = 0;
```

### 集合與範圍運算子：IN、NOT IN、BETWEEN

| 運算子 | 意義 |
| - | - |
| BETWEEN | 在指定的範圍內 |
| IN | 包含在列出的值中 |
| NOT IN | 不包含在列出的值中 |

範例情境：想幫家人買生日禮物，預算在 500 ~ 1000 元

```sql
SELECT * FROM products
WHERE discount_price BETWEEN 500 AND 1000;
```

範例情境：找出特定類別商品

```sql
SELECT * FROM products
WHERE category IN ('3C', '配件');
```

範例情境：排除特定商品 (充電線、手機殼、螢幕保護貼)

```sql
SELECT * FROM products
WHERE name NOT IN ('充電線', '手機殼', '螢幕保護貼');
```

### UPDATE：更新欄位

1. UPDATE 資料表名稱
2. SET 欄位名稱修改的數值
3. WHERE 篩選條件

範例情境：調整特定商品的價格

```sql
UPDATE products
SET price = 28000
WHERE name = 'iPhone 16';
```

範例情境：更新庫存，增加庫存數量

```sql
UPDATE product
SET stock = stock + 50
WHERE name = '充電線';

-- 也可以同時修改多個欄位
UPDATE product
SET stock = stock + 50, name = '充電線-修正'
WHERE name = '充電線';
```

### DELETE：刪除欄位

1. DELETE 刪除資料
2. FROM 資料表名稱
3. WHERE 篩選條件

範例情境：單筆刪除，刪除特定商品

```sql
DELETE FROM products
WHERE name = 'iPhone 15';
```

範例情境：條件刪除，刪除類別為3C的商品

```sql
DELETE FROM products
WHERE category = '3C';
```

範例情境：多重條件刪除，刪除沒庫存且已下架的商品

```sql
DELETE FROM products
WHERE stock = 0 AND status = 'inactive';
```
