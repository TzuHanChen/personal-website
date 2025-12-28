## 任務一：資料庫與 Docker 環境建立

### 任務一 - 初心者環境任務介紹

安裝 DBeaver 和 Docker，在任務回報區繳交 Discord 使用者名稱和安裝工具完成截圖，即可完成任務

### DBeaver 安裝流程

![DBeaver](/image/article/database-camp-dbeaver.png)

[DBeaver Community | Free Open-Source Database Management Tool](https://dbeaver.io/)

選擇自己電腦作業系統對應的安裝程式下載並安裝

左上角 Dbeaver > Settings > User Interface 可以切換語言

### 安裝 Docker Desktop 流程

![Docker](/image/article/database-camp-docker.png)

[Docker: Accelerated Container Application Development](https://www.docker.com/)

選擇自己電腦作業系統對應的安裝程式下載並安裝

### windows 安裝失敗時，四個常見檢核點

1. Windows 作業系統版本是否為 win10 或以上？
2. 工作管理員 > 效能 > CPU > 模擬，是否為「已啟用」
3. 到 控制台 > 程式集 > 程式與功能 > 開啟或關閉 windows 功能，開啟兩個服務
    * 服務一：Windows Hypervisor 平台
    * 服務二：Windows 子系統 Linux 版
4. 上面做完後，是否有重新開機？開機完 CPU 模擬是否為「已啟用」

### windows 線上諮詢管道、常見問題分享

1. 出現 wsl 錯誤的話，開啟 power shell 指令視窗，輸入 `wsl --install`
2. 出現需要更新，就請先更新完再重新開機，並執行 docker desktop
3. 若上述四點做完，CPU 模擬都沒變成「已啟用」，那就需進入到 BIOS 來進行啟用

---

## 任務一 初心者環境任務

**完成條件**

1. 回報時務必完整提交繳交內容項目

**此任務你會獲得以下技能**

1. 基本環境建立

**任務描述**

請參考影音課程中「任務一：資料庫與 Docker 環境建立」完成工具下載。

### 繳交內容

1. 您的 Discord 使用者名稱
2. 安裝工具完成截圖

* [DBeaver](https://dbeaver.io/)（必要安裝）
* [Docker](https://www.docker.com/)（非必要安裝）

### 提交紀錄

![資料庫體驗營 任務一 初心者環境任務](/image/article/database-camp-mission-1-beginner-environment.png)
