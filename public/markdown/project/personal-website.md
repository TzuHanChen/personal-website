## 緣起

　　製作此網站的目標有兩個，第一個是對於來到此網站的任何人，展示我的學習歷程、技術能力與專案開發流程；第二個是為了自己，撰寫技術學習筆記、應用最近學到的新技術、實作各種小作品。

---

## 專案開發流程

### 設計概要 Design Overview

先設定目的地再開始走路，寫下網站設計的方向、資源與限制。

![設計概要](/image/project/personal-website-design-overview.png)

### 資訊架構 Information Architecture

觀察別人的個人 / 公司網站，每個頁面都有的共用區塊，以及個別頁面的內容，列出自己有要製作的區塊、頁面與內容。

![資訊架構](/image/project/personal-website-information-architecture.png)

### 使用者故事 User Story

列出網站使用者可以做的事。

![使用者故事](/image/project/personal-website-user-story.png)

### 功能規劃 Functions

列出網站使用者會用到的功能。

![功能規劃](/image/project/personal-website-functions.png)

### 功能流程圖 Flow Chart

列出網站使用者在每個頁面或區塊中可以透過哪些行為前往其他頁面。

![功能流程圖](/image/project/personal-website-flow-chart.png)

### 介面流程圖 UI Flow

列出每個頁面或區塊之間的關聯。

![介面流程圖](/image/project/personal-website-ui-flow.png)

### 線框圖 Wireframe、原型 Prototype

製作每個頁面的線框圖，把各種會重複使用的部分做成元件。頁首直接使用 Material Design 3 的元件，手機是 Navigation Bar，平板和電腦則是 Navigation Rail。跳過設計稿 (Mockup) 步驟，後續色彩配置直接使用 Tailwind CSS 預設調色盤的 Gray 和 Teal 相關色階。完成線框圖之後串連每個按鈕與點擊按鈕後要前往的頁面，做成可以操作的原型，確保每個網頁區塊的位置和操作流程都正確。

![元件](/image/project/personal-website-components.png)

![線框圖](/image/project/personal-website-wireframe.png)

---

## 前後端開發

### 畫面切版、功能實作

使用 Next.js App router + TypeScript + Tailwind CSS + Material Symbols 製作網頁畫面。

### 資料串接

使用 TypeScript 撰寫 SQL 腳本，連接 Neon Serverless PostgreSQL 執行腳本，建立資料表並加入資料。

使用 Next.js route handler 實作 REST API，在網頁中呼叫 API、取得專案的資料、產生畫面。

* /api/project/list 取得所有專案的清單
* /api/project/content 取得一個專案的內容

[API 文件](/api-doc)

### 優化

針對響應式網頁設計、無障礙網頁設計、搜尋引擎優化、效能優化等議題，我使用 Lighthouse、PageSpeed Insights、metatags.io、Vercel Speed Insights 和 Vercel Toolbar 等工具進行測試、分析和優化。

### 流量分析

使用 Google Analytics 和 Vercel Web Analytics 進行流量追蹤和使用者行為分析，同時利用 Google Search Console 監測搜尋曝光、排名與點閱率。

### 版本控制與部署

使用 GitHub 管理版本，使用 Vercel 自動部署網站。

[GitHub repo 原始碼](https://github.com/TzuHanChen/personal-website)
