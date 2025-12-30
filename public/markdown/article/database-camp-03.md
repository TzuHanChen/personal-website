## 作業一

小節作業：家具店的菜雞銷售奇遇記

### 故事情境

剛進入『築夢家居』當銷售顧問的小美，第一天上班就遇到系統大當機，需要用 SQL 指令存取資料庫

### 模擬資料

```sql
CREATE TABLE products (
  name VARCHAR(100),        -- 商品名稱
  price INTEGER,            -- 原價
  discount_price INTEGER,   -- 優惠價
  stock INTEGER,            -- 庫存數量
  category VARCHAR(50),     -- 商品分類
  status VARCHAR(20)        -- 商品狀態
);

INSERT INTO products (name, price, discount_price, stock, category, status) VALUES
  ('北歐風雙人沙發', 39900, 35900, 3, '沙發', 'active'),
  ('貓抓皮L型沙發', 58900, 52900, 1, '沙發', 'active'),
  ('典雅三人座沙發', 42800, 42800, 5, '沙發', 'active'),
  ('工業風電視櫃', 5900, 4900, 12, '櫃子', 'active'),
  ('簡約書櫃', 3500, 3500, 8, '櫃子', 'active'),
  ('玄關鞋櫃', 2900, 2900, 15, '櫃子', 'active'),
  ('日式雙人床架', 12000, 11200, 6, '床架', 'active'),
  ('掀床五尺雙人床', 19900, 18900, 2, '床架', 'active'),
  ('兒童床架', 8900, 8900, 0, '床架', 'inactive'),
  ('電腦辦公椅', 4500, 3900, 20, '椅子', 'active'),
  ('餐椅四入組', 6000, 5200, 8, '椅子', 'active'),
  ('北歐風餐桌', 15800, 14800, 4, '桌子', 'active'),
  ('實木咖啡桌', 3200, 2900, 10, '桌子', 'active'),
  ('電競書桌', 8900, 8900, 0, '桌子', 'inactive');
```

可利用 [PG SQL](https://pg-sql.com) 執行上述指令，建立資料表、新增模擬資料，再回答下列題目

### 題目與答案

### 基礎比較運算

情境 1：單品查詢

客人：「這張北歐風雙人沙發多少錢？」

小美想查：想找到這張沙發的價格和庫存

```sql
SELECT name, price, stock FROM products
WHERE name = '北歐風雙人沙發';
```

情境 2：價格比較

客人：「請列出 5000 元以下的櫃子有哪些？」

小美想查：找出櫃子類且價格在 5000 以下的商品

```sql
SELECT name, price FROM products
WHERE category = '櫃子' AND price < 5000;
```

情境 3：庫存確認

客人：「日式雙人床架還有貨嗎？」

小美想查：確認日式雙人床架的庫存狀況

```sql
SELECT name, stock FROM products
WHERE name = '日式雙人床架';
```

### 邏輯運算 AND

情境 4：預算內的商品

客人：「想找 4 萬以下，而且有現貨的沙發」

小美想查：要同時符合：是沙發、4萬以下、有庫存

```sql
SELECT name, price, stock FROM products
WHERE category = '沙發' AND price < 40000 AND stock > 0;
```

情境 5：特價且有貨

客人：「沙發有哪些特價且現貨的品項？」

小美想查：要找到沙發類且有特價（原價大於優惠價）且還有庫存的商品

```sql
SELECT name, price, discount_price, stock FROM products
WHERE category = '沙發' AND price > discount_price AND stock > 0;
```

### 邏輯運算 OR

情境 6：多分類查詢

客人：「我要找櫃子或桌子」

小美想查：要找出櫃子類或桌子類的商品

```sql
SELECT name, category FROM products
WHERE category = '櫃子' OR category = '桌子';
```

情境 7：指定商品

客人：「北歐風雙人沙發和貓抓皮L型沙發哪個還有貨？」

小美想查：要找出這兩張特定沙發的庫存狀況

```sql
SELECT name, stock FROM products
WHERE name = '北歐風雙人沙發' OR name = '貓抓皮L型沙發';
```

### IN 運算

情境 8：多分類查詢

客人：「客廳的家具有哪些？我要看沙發、櫃子跟桌子」

小美想查：要找出沙發、櫃子和桌子這三種分類的商品

```sql
SELECT name, category FROM products
WHERE category IN ('沙發', '櫃子', '桌子');
```

情境 9：特定商品

客人：「電腦辦公椅和餐椅四入組的價格是多少？」

小美想查：要找出這兩款椅子的價格

```sql
SELECT name, price FROM products
WHERE name IN ('電腦辦公椅', '餐椅四入組');
```

### BETWEEN

情境 10：價格區間

客人：「想找 10000 到 20000 之間的商品有哪些？」

小美想查：列出這個價格區間的所有商品

```sql
SELECT name, price FROM products
WHERE price BETWEEN 10000 AND 20000;
```

情境 11：庫存區間

主管：「請列出庫存在 5 到 15 之間的商品」

小美想查：列出庫存數量在這個範圍的商品

```sql
SELECT name, stock FROM products
WHERE stock BETWEEN 5 AND 15;
```

### NOT IN

情境 12：排除商品

主管：「列出除了沙發和床架以外的商品」

小美想查：要找出不是沙發和床架的商品

```sql
SELECT name, category FROM products
WHERE category NOT IN ('沙發', '床架');
```

### 更新和刪除

情境 13：調整價格

主管：「北歐風雙人沙發要調降 2000 元」

小美想查：要如何更新這張沙發的價格

```sql
UPDATE products
SET price = price - 2000
WHERE name = '北歐風雙人沙發';
```

情境 14：更新庫存

主管：「電腦辦公椅進了 5 張」

小美想查：要如何增加這款椅子的庫存數量

```sql
UPDATE products
SET stock = stock + 5
WHERE name = '電腦辦公椅';
```

情境 15：清除資料

主管：「要清掉兒童床架和電競書桌的資料」

小美想查：要如何刪除這兩項商品

```sql
DELETE FROM products
WHERE name IN ('兒童床架', '電競書桌');
```
