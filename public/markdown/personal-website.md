## 緣起

　　製作此網站的目標有兩個，第一個是對於來到此網站的任何人，展示我的學習歷程、技術能力與專案開發流程；第二個是為了自己，撰寫技術學習筆記、應用最近學到的新技術、實作各種小作品。

---

## 專案開發流程

### 設計概要 Design Overview

先設定目的地再開始走路，寫下網站設計的方向、資源與限制。

![設計概要](/image/personal-website-design-overview.png)

### 資訊架構 Information Architecture

觀察別人的個人 / 公司網站，每個頁面都有的共用區塊，以及個別頁面的內容，列出自己有要製作的區塊、頁面與內容。

![資訊架構](/image/personal-website-information-architecture.png)

### 使用者故事 User Story

列出網站使用者可以做的事。

![使用者故事](/image/personal-website-user-story.png)

### 功能規劃 Functions

列出網站使用者會用到的功能。

![功能規劃](/image/personal-website-functions.png)

### 功能流程圖 Flow Chart

列出網站使用者在每個頁面或區塊中可以透過哪些行為前往其他頁面。

![功能流程圖](/image/personal-website-flow-chart.png)

### 介面流程圖 UI Flow

列出每個頁面或區塊之間的關聯。

![介面流程圖](/image/personal-website-ui-flow.png)

### 線框圖 Wireframe、原型 Prototype

製作每個頁面的線框圖，把各種會重複使用的部分做成元件。頁首直接使用 Material Design 3 的元件，手機是 Navigation Bar，平板和電腦則是 Navigation Rail。跳過設計稿 (Mockup) 步驟，後續色彩配置直接使用 Tailwind CSS 預設調色盤的 Gray 和 Teal 相關色階。完成線框圖之後串連每個按鈕與點擊按鈕後要前往的頁面，做成可以操作的原型，確保每個網頁區塊的位置和操作流程都正確。

![元件](/image/personal-website-components.png)

![線框圖](/image/personal-website-wireframe.png)

---

## 前端開發

使用 Next.js App router 作為網站框架。

製作畫面時使用 Tailwind CSS。圖示選用 Heroicons，根據狀態去改變圖示的外觀。如果需要管理較複雜的 className 再用 clsx。

使用 TypeScript 管理資料型別。

利用 route handler 實作 API，在網頁中呼叫 API、取得專案的資料、產生畫面。

使用 Vercel 部署網站，同一個 GitHub repository 的兩個分支會分別產生測試網站和正式網站。