## JOIN 資料關聯

### JOIN 資料關聯 - 組合資料表關鍵語法

可將兩個資料表 (Table) 組合在一起

JOIN 語法種類

* inner join
* outer join : left join, right join, full join

範例資料

users 員工資料表

| 員工編號 id | 姓名 name | 薪資 salary | 部門編號 team_id FK |
| - | - | - | - |
| 1 | 張小明 | 45000 | 1 |
| 2 | 王大明 | 48000 | 1 |
| 3 | 李小華 | 52000 | 2 |
| 4 | 陳小玉 | 55000 | 2 |
| 5 | 林小豪 | 47000 | 1 |
| 6 | 陳小明 | 42000 | null |
| 7 | 王小美 | 41000 | null |

teams 部門資料表

| 部門編號 id PK | 名稱 name |
| - | - |
| 1 | 開發部 |
| 2 | 人事部 |
| 3 | 行銷部 |
| 4 | 研發部 |

### inner join - 查詢有部門的員工

![INNER JOIN 文氏圖](/image/article/database-camp-inner-join.png)

```sql
SELECT
  users.id, users.name AS user_name, users.salary,
  teams.name AS team_name
FROM users
INNER JOIN teams ON users.team_id = teams.id;
```

SQL 處理順序：「先進行 JOIN，然後在 SELECT 階段選取所需欄位」

| 員工編號 id PK | 姓名 name | 薪資 salary | 部門編號 team_id FK | 部門編號 id PK | 名稱 name |
| - | - | - | - | - | - |
| 1 | 張小明 | 45000 | 1 | 1 | 開發部 |
| 2 | 王大明 | 48000 | 1 | 1 | 開發部 |
| 3 | 李小華 | 52000 | 2 | 2 | 人事部 |
| 4 | 陳小玉 | 55000 | 2 | 2 | 人事部 |
| 5 | 林小豪 | 47000 | 1 | 1 | 開發部 |

最終呈現結果

| 員工編號 id | user_name | salary | team_name |
| - | - | - | - |
| 1 | 張小明 | 45000 | 開發部 |
| 2 | 王大明 | 48000 | 開發部 |
| 3 | 李小華 | 52000 | 人事部 |
| 4 | 陳小玉 | 55000 | 人事部 |
| 5 | 林小豪 | 47000 | 開發部 |

### left join - 顯示未分配部門的員工資料

![LEFT JOIN 文氏圖](/image/article/database-camp-left-join.png)

```sql
SELECT
  users.name AS user_name,
  teams.name AS team_name
FROM users
LEFT JOIN teams ON users.team_id = teams.id;
```

SQL 處理順序：「先進行 JOIN，然後在 SELECT 階段選取所需欄位」

| 員工編號 id PK | 姓名 name | 薪資 salary | 部門編號 team_id FK | 部門編號 id PK | 名稱 name |
| - | - | - | - | - | - |
| 1 | 張小明 | 45000 | 1 | 1 | 開發部 |
| 2 | 王大明 | 48000 | 1 | 1 | 開發部 |
| 3 | 李小華 | 52000 | 2 | 2 | 人事部 |
| 4 | 陳小玉 | 55000 | 2 | 2 | 人事部 |
| 5 | 林小豪 | 47000 | 1 | 1 | 開發部 |
| 6 | 陳小明 | 42000 | null | null | null |
| 7 | 王小美 | 41000 | null | null | null |

最終呈現結果

| user_name | team_name |
| - | - |
| 張小明 | 開發部 |
| 王大明 | 開發部 |
| 李小華 | 人事部 |
| 陳小玉 | 人事部 |
| 林小豪 | 開發部 |
| 陳小明 | null |
| 王小美 | null |

### right join + 搭配 where 篩選空部門

![RIGHT JOIN 文氏圖](/image/article/database-camp-right-join.png)

```sql
SELECT
  teams.name AS team_name,
  users.name AS user_name
FROM users
RIGHT JOIN teams ON users.team_id = teams.id;
```

SQL 處理順序：「先進行 JOIN，然後在 SELECT 階段選取所需欄位」

| 員工編號 id PK | 姓名 name | 薪資 salary | 部門編號 team_id FK | 部門編號 id PK | 名稱 name |
| - | - | - | - | - | - |
| 1 | 張小明 | 45000 | 1 | 1 | 開發部 |
| 2 | 王大明 | 48000 | 1 | 1 | 開發部 |
| 3 | 李小華 | 52000 | 2 | 2 | 人事部 |
| 4 | 陳小玉 | 55000 | 2 | 2 | 人事部 |
| 5 | 林小豪 | 47000 | 1 | 1 | 開發部 |
| null | null | null | null | 3 | 行銷部 |
| null | null | null | null | 4 | 研發部 |

最終呈現結果

| user_name | team_name |
| - | - |
| 開發部 | 張小明 |
| 開發部 | 王大明 |
| 人事部 | 李小華 |
| 人事部 | 陳小玉 |
| 開發部 | 林小豪 |
| 行銷部 | null |
| 研發部 | null |

```sql
SELECT
  teams.name AS team_name,
  users.name AS user_name
FROM users
RIGHT JOIN teams ON users.team_id = teams.id
WHERE users.name IS NULL;
```

最終呈現結果

| user_name | team_name |
| - | - |
| 行銷部 | null |
| 研發部 | null |

### full join - 部門配置與新進人員總覽

![FULL JOIN 文氏圖](/image/article/database-camp-full-join.png)

```sql
SELECT
  teams.name AS team_name,
  users.name AS user_name
FROM users
FULL JOIN teams ON users.team_id = teams.id;
```

SQL 處理順序：「先進行 JOIN，然後在 SELECT 階段選取所需欄位」

| 員工編號 id PK | 姓名 name | 薪資 salary | 部門編號 team_id FK | 部門編號 id PK | 名稱 name |
| - | - | - | - | - | - |
| 1 | 張小明 | 45000 | 1 | 1 | 開發部 |
| 2 | 王大明 | 48000 | 1 | 1 | 開發部 |
| 3 | 李小華 | 52000 | 2 | 2 | 人事部 |
| 4 | 陳小玉 | 55000 | 2 | 2 | 人事部 |
| 5 | 林小豪 | 47000 | 1 | 1 | 開發部 |
| 6 | 陳小明 | 42000 | null | null | null |
| 7 | 王小美 | 41000 | null | null | null |
| null | null | null | null | 3 | 行銷部 |
| null | null | null | null | 4 | 研發部 |

最終呈現結果

| user_name | team_name |
| - | - |
| 開發部 | 張小明 |
| 開發部 | 王大明 |
| 人事部 | 李小華 |
| 人事部 | 陳小玉 |
| 開發部 | 林小豪 |
| null | 陳小明 |
| null | 王小美 |
| 行銷部 | null |
| 研發部 | null |

### JOIN 搭配 COALESCE 設計

有些後端語言遇到 null 會出錯

```sql
SELECT
  COALESCE(teams.name, '未分配') AS team_name,
  COALESCE(users.name, '無員工') AS user_name
FROM users
FULL JOIN teams ON users.team_id = teams.id;
```

最終呈現結果

| user_name | team_name |
| - | - |
| 開發部 | 張小明 |
| 開發部 | 王大明 |
| 人事部 | 李小華 |
| 人事部 | 陳小玉 |
| 開發部 | 林小豪 |
| 未分配 | 陳小明 |
| 未分配 | 王小美 |
| 行銷部 | 無員工 |
| 研發部 | 無員工 |
