# 由於交通部觀光景點提供的API沒有stop這個參數可以設定
# 所以我簡單的寫了一個後端，讓前端可以每次只撈30筆資料
# 本專案需要同時啟動前端跟後端才可以正常運作
# 啟動方式
1. 請在本地環境安裝NodeJS

2. clone repository

3. open terminal, cd into backend and frontend directory

4. npm install

5. npm start

6. http://localhost/ScenicSpot

前端後端預設跑在同一台電腦，並且後端預設使用port = 3000，如果跑在不同電腦，或是不同port，請到 frontend > src > APISource > url.js 修改後端的url

架構設計：

![image](https://github.com/samuel871211/DcardFrontend/blob/master/frontend/components1.png?raw=true)
![image](https://github.com/samuel871211/DcardFrontend/blob/master/frontend/components2.png?raw=true)
