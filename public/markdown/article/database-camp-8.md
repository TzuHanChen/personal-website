## 任務二：健身教練線上直播課平台

### 任務二 - 影音順序觀看解說

* 練習方式一：使用 pg-sql 網站練習
* 練習方式二：使用 DBeaver 連結 Docker，並在 DBeaver 進行練習

可依照自己想要的練習方式觀看後續教學

### 安裝 VSCode 程式編輯器

![VSCode](/image/article/database-camp-vscode.png)

[Visual Studio Code - The open source AI code editor](https://code.visualstudio.com)

選擇自己電腦作業系統對應的安裝程式下載並安裝

左下角齒輪圖示 Manage > Themes > Color Theme 可以切換色彩主題

### 安裝 Node.js 流程

![Node.js](/image/article/database-camp-nodejs.png)

[Node.js — Run JavaScript Everywhere](https://nodejs.org/zh-tw)

選擇自己電腦作業系統對應的安裝程式下載並安裝

* LTS (Long time support) 長期維護版本，建議初學者優先選擇此版本
* Current 是正在開發中的版本

安裝完成後使用終端 (例如 Windows Command 命令提示字元、VSCode 上方 Terminal > New Terminal) 執行 `node --version` 或 `node -v` 如果有列出 Node.js 版本編號就表示安裝成功

### 安裝 Git 教學

![Git](/image/article/database-camp-git.png)

[Git](https://git-scm.com/)

選擇自己電腦作業系統對應的安裝程式下載並安裝

安裝完成後使用終端 (例如 Windows Command 命令提示字元、VSCode 上方 Terminal > New Terminal) 執行 `git --version` 或 `git -v` 如果有列出 Git 版本編號就表示安裝成功

### 註冊 GitHub 服務

![GitHub](/image/article/database-camp-github.png)

[GitHub · Change is constant. GitHub keeps you ahead. · GitHub](https://github.com/)

點擊 Sign Up 按鈕註冊帳號，輸入電子郵件、密碼、使用者名稱，選擇是否要接收產品更新與公告的電子郵件，輸入已寄到電子信箱的驗證碼，完成註冊

回答幾個簡短問題（可跳過），例如有幾位團隊成員、是否有學生或老師身分、有興趣使用的特定功能

選擇免費或付費方案，初始化儀表板，第一次登入完成

### 讓 VSCode 綁定你的 GitHub 帳號，準備部署網站嘍

VSCode 左下角人頭圖示 Accounts > Turn on cloud changes > Sign in with GitHub

VSCode 會自動開啟網頁 Authorize GitHub for VS Code，確定要授權 VSCode 存取 GitHub 個人資料就按下 Authorize Visual-Studio-Code 按鈕，成功之後就回到 VSCode

再次點擊 VSCode 左下角人頭圖示 Accounts 就會有剛才授權的 GitHub 帳號

### 將作業資料庫環境下載到自己電腦

1. 先將[專案模板](https://github.com/hexschool/backend-database-camping-task-startkit) fork 到自己的 GitHub 帳號下
2. 將專案複製到自己的電腦（本地）：`git clone https://github.com/my-username/backend-database-camping-task-startkit.git`
3. 將專案移動到下一層：`cd 專案資料夾名稱`
4. 可以使用以下兩種方式之一來進行練習
5. 練習後將答案貼至專案中的 /migrations/task/sqls/20241021064214-task-up.sql

## 【適合新手】任務二 - 練習方式一教學

### 建立資料表初始環境在 pg-sql

1. 資料表建立指令複製貼上到 [PG SQL](https://pg-sql.com)
2. 依照每個題目的描述撰寫 SQL 指令並執行
3. 確定沒問題再把 SQL 指令複製貼上到專案中的 .sql 檔案中
4. 提交作業之後會用自動化的方式驗證答案是否正確

## 【適合想要挑戰中等難度】任務二 - 練習方式二教學

### 作業架構介紹

* Dbeaver：資料庫管理介面、新增連線設定
* Docker：PostgreSQL 容器

### 使用 DBeaver 開啟 Docker 環境

Docker

1. 安裝所需套件指令：`npm i`
2. 執行 Docker 開啟 PostgreSQL 容器指令：`npm run start`
3. 執行成功之後會出現
    * 一個 Network db-network
    * 一個 Volume pgData
    * 兩個 Container 分別是 postgres-1 和 db_migrate-1
4. 檢查 Docker Desktop 的 Container
    * postgres-1 運作中，Logs 最後一行應該是 LOG: database system is ready to accept connections，可以連線到資料庫
    * db_migrate-1 已關閉，Logs 最後一行應該是 [INFO] Done，因為已執行建立資料表的指令

Dbeaver

1. 開啟 Dbeaver，左上角新建連接按鈕 > 連線到資料庫彈出視窗 > 選擇 PostgreSQL 再按 Next
2. 連線設定，輸入 Database 名稱：test，Username：testHexschool，Password：pgStartkit4test
3. 左下角測試連線按鈕 > 連線測試，確認沒問題再按 Finish
4. 左側項目清單會出現 test localhost:5432，就是正在運作中的 PostgreSQL 資料庫
5. 展開 test localhost:5432 > 資料庫 > test > 按滑鼠右鍵 > SQL 編輯器 > 開啟 SQL 腳本，可輸入 SQL 指令
6. 指令左邊會有執行 SQL 語句按鈕（單行）、執行 SQL 腳本按鈕（全部），執行 SQL 語句或腳本之後下方會列出所有資料表

### 如何清空資料庫並重啟

還原資料庫指令：`npm run clean`

重啟資料庫環境指令：`npm run start`

執行上述指令後可檢查 Docker Desktop 確認 Container 是否正常運作

執行上述指令後要在 Dbeaver 左側項目清單 test localhost:5432 按滑鼠右鍵 > Refresh 重新整理

## 任務二 - 提交作業教學

### 提交任務二作業流程

啟用自動化測試

1. 開啟 GitHub 專案頁面 <https://github.com/my-username/backend-database-camping-task-startkit>
2. 點擊上方 Actions 會出現 Workflows aren't being run on this forked repository，點擊 I understand my workflows, go ahead and enable them
3. 上方出現 Actions Enabled 代表開啟 workflow 成功

更新版控

1. 在 VSCode 的 Primary Side Bar (通常在左側) > Source Control > Changes 會列出修改過的檔案清單
2. 點擊 .sql 檔案右邊的 + 按鈕 Stage Chages
3. 上方輸入 commit message 再按 Commit 建立提交紀錄
4. 按 Sync Changes 同步變更，上傳更新內容到 GitHub

執行自動化測試

1. 回到 GitHub 專案頁面
2. 點擊上方 Actions 會出現 1 workflow run
3. 點擊 workflow 可看到 check.yml on: push 會執行一個 Job 名稱是 Run Migrate Test
4. 點擊 Run Migrate Test 可看到自動化測試的所有步驟
5. 自動化測試腳本在 /.github/workflows/check.yml
6. 只有驗證程式碼格式是否正確，沒有驗證答案是否正確

實務上可能會有資料庫測試、前後端測試、單元測試、資安測試等等

提交作業時只要提供 GitHub 專案網址 <https://github.com/my-username/backend-database-camping-task-startkit.git> 即可

---

## 任務二 健身教練線上直播課平台

![任務二 資料表設計圖](/image/article/database-camp-database-design.png)

圖片來源：六角學院【後端工程師 - 資料庫體驗營】進入後端前的必備知識

**完成條件**

1. 回報時務必完整提交繳交內容項目
2. 需至少完成 Lv1 作業等級
3. 請透過 GitHub 提交作業，以方便助教與講師檢視
4. 需自行撰寫，若有參考同學作業，請附上參考來源
5. 以上需符合規定，否則會審核失敗

**此任務你會獲得以下技能**

1. 資料表設計

**任務描述**

請依照我們提供的資料表，參考[線稿圖](https://miro.com/app/board/uXjVLbiDml0=/?share_link_id=404709829822)來完成以下題目答案

### 開始答題前，請先了解以下內容

為了提高任務的體驗，我們在資料表和欄位的設計上有些調整，所以這份任務的資料表內容並不適合直接用於實務喔！

下面將為各位說明調整的內容：

1. 使用者的資料表通常會有密碼欄位：
    * 這個任務並沒有伺服器來做密碼驗證，因此此資料表設計將密碼欄位先移除，直接由 email 來取得使用者 id。
2. 權限設計除了角色 (Role) 以外，還會包含可用的細部權限功能：
    * 為了讓同學可以快速體驗角色區分，這個任務的角色權限設計只有簡單的角色 Role 欄位。
    * 實務上除了角色 (Role) 以外，還會包含可用的細部權限功能以及可操作的行爲。
3. 統計資料通常會透過排程功能統計後，記錄到另一張表
    * 在部分基於統計與計算行為的題目中，你會發現都是即時運算。
    * 而在實務上，這些不變的統計資料，他們通常會被獨立在另外一張資料表，並由一個排程功能來統計後，記錄至資料表
4. 不會直接刪除資料庫的資料，而使用軟刪除
    * 基於 DELETE 語法練習，題目中有直接刪除資料庫資料的操作。
    * 實務上通常我們不會直接刪除資料庫的資料，而是使用欄位或資料表來實作刪除標記，避免意外刪除導致無法挽回的結果，這種刪除被稱為軟刪除，而直接將資料完全刪除的行為，則稱為硬刪除
5. 資料表與欄位需搭配伺服器的商業邏輯，有更複雜的設計
    * 在關於課程相關（包括購買，預約等行為），是特別被大幅度的簡化的資料表。
    * 在實務上他需要更多的資料表與欄位，並且搭配伺服器的商業邏輯，來確保使用者每一步驟的狀態變化都被留下紀錄
6. 資料庫紀錄的時間會以UTC為準。
    * 這次任務在時間的欄位上，大部分的時間都已經設定好自動產生。
    * 在實務上，資料庫紀錄的時間大多也是使用UTC時間。

### 答題方式說明

請先將 [此專案模板](https://github.com/hexschool/backend-database-camping-task-startkit) fork 到自己的 GitHub 帳號下

可以使用以下兩種方式來進行練習，練習後請將答案貼至專案中的 /migrations/task/sqls/20241021064214-task-up.sql

一、練習方式一：使用 pg-sql 網站練習

* 網站網址：<https://pg-sql.com/>
* [資料表建立指令](https://hackmd.io/fsxK8JJXRtaMml_e3bD2Xg)

二、練習方式二：使用 DBeaver 連結 Docker，並在 DBeaver 進行練習

⚠️ 專案模板已經完成 建立資料表，同學不需要再次建立

參照「環境建立：任務二：健身教練線上直播課平台」影片說明，成功運行後可看到以下畫面，可以圖片圈選位置練習 SQL 指令

可以將模板 /migrations/task/sqls/20241021064214-task-up.sql 中的題目註解貼到 DBeaver，方便對照題目練習

![資料庫體驗營 任務二 在 Dbeaver 進行練習](/image/article/database-camp-mission-2-DBeaver.png)

圖片來源：六角學院程式勇者村任務系統

使用以上兩種方式之一，完成 SQL 指令後，再請貼回專案內，並 push 到自己的 GitHub Repo 繳交任務。

### 資料表

![資料庫體驗營 任務二 資料表](/image/article/database-camp-mission-2-data-table.png)

圖片來源：六角學院程式勇者村任務系統

### 題目

請看後續提交紀錄

### 繳交內容

* 您的 Discord 使用者名稱
* 您的提交等級
* 您的 GitHub Repo 連結，並確認 /migrations/task/sqls/20241021064214-task-up.sql 檔案完成以上題目 SQL 指令答案

挑戰等級

* LV 1｜完成題目 1.用戶資料 到 4.課程管理
* LV 2｜完成全部題目（不含挑戰題）
* LV 3｜完成全部題目（含挑戰題）

### 提交紀錄

內容包括題目與答案

<https://github.com/TzuHanChen/backend-database-camping-task-startkit/blob/main/migrations/task/sqls/20241021064214-task-up.sql>
