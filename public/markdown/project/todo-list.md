## 緣起

　　某間公司透過徵才網站的訊息提出一個作業，要我根據需求文件和 Swagger API 文件，串接公司提供的 API，實作一個只有 CRUD 的待辦清單網站，完成後公司會根據專案內容決定是否要請我去面試。我在期限之內實作完成後，用訊息告知上線網站和原始碼的網址，之後沒有收到任何回覆。

　　因為公司提供的 API 隨時可能消失，加上我最近有想要藉由實作一個小規模但是功能完整的專案，來培養基礎後端開發能力，於是參考公司提供的文件，自行實作資料庫和後端 API，再回到前端網頁，把公司 API 路徑更換成自己開發的 API 路徑，再製作 API 文件。

---

## 專案開發流程

### 需求分析

列出使用者需要的各項功能。

![需求分析](/image/project/todo-list-user-story.png)

### 流程規劃

列出各項功能的位置和操作流程。

![流程規劃](/image/project/todo-list-flow-chart.png)

### 介面設計

製作各頁面的線框圖，會重複使用的部分做成元件。任務卡片有做成可操作的原型。

![線框圖](/image/project/todo-list-wireframes.png)

![元件](/image/project/todo-list-components.png)

---

## 前端開發

使用 Next.js (App Router) + TypeScript + Tailwind CSS + Material Symbols 製作頁面與功能邏輯。

使用 Headless UI 製作可以摺疊的新增任務表單、篩選和排序的下拉選單。

使用 Server Actions 串接自行實作的 REST API。

![任務頁面](/image/project/todo-list-task.png)

### 後端開發

使用 TypeScript 撰寫 SQL 腳本，連接 Neon Serverless PostgreSQL 執行腳本，建立資料表並新增初始資料。

![tasks 資料表](/image/project/todo-list-table.png)

使用 Next.js route handler 實作 REST API。

![API 文件頁面](/image/project/todo-list-api-doc.png)

### 版本控制與部署

使用 GitHub 管理版本與專案開發流程。

透過 Vercel 部署專案，並自動取得 GitHub 提交紀錄進行 CI/CD 部署。

[GitHub repo 原始碼](https://github.com/TzuHanChen/todo-list)
