# Dark Web Scraping Challenge By Intsights 

 A project assignment that was given by Intsigts .
 The root folder contains client dir, server dir (scraper) .
 All the project is packed in docker compose enviorment that contains 5 microservices .
 When the site is uploaded it immediately openes an SSE connection between the front and the server , scrapes StrongHold Pastebin site (through tor proxy) saves the the data into the DB .
 The data is used in the site in various different uses .
 The scraping , saving and rendering of the site happens every 2 minutes throght the SSE connection .
 
 ## Features
  - Typescript
  - React
  - MongoDB
  - Docker
  - Jsdom
  - Chartjs
  - Mongoose
  - Scss
  - Mui 
 ## Pages
  ### Pastelist 
  - Displays all the pastes that were scraped and entered the db .
  - In the upper section of the page you can see different analytics and stats on the patses data . 
  - You can use the search bar in the header to filter the pastelist with debounce .
  
 ### Keywords
  - Gives the abbility the add or remove key words you want to find pastes that contains the specific words you chose .
  
 ### Alerts
  - Displays an alert when one of the keywords was found in the pastelist .
  
 ### Notifications 
  #### Creates and displays a new notification for every of the following events :
    - scrape finished successfully
    - scrape failed
    - key word found in one of the pastes (similar to alert)
    
- To run the project you need to run docker tor proxy container 
- npm i
- in scraper "npm run dev"
- in client "npm start"
