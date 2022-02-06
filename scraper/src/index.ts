console.log("Project setup correctly!");

import axios from "axios";
// import cheerio from 'cheerio'
import jsdom from "jsdom";
const { JSDOM } = jsdom;
const url =
  "http://strongerw2ise74v3duebgsvug4mehyhlpa7f6kfwnas7zofs3kov7yd.onion/all"; // URL we're scraping

const start = async () => {
  const res = await axios.get(url, {
    proxy: {
      host: "localhost",
      port: 8118,
    },
  });
  const dom = new JSDOM(res.data);
  const document = dom.window.document;
  const containers = document.querySelectorAll("#list .row:not(:first-child):not(:last-child) .col-sm-12");
  const pastesArray = [];
  for (let container of containers) {
    const title =getTitle(container)
    
    const content = getContent(container);
  
    const author = container.querySelector(".col-sm-6")
const authorText=cropAuthor(author.textContent);
    
    const dateText=cropDate(author.textContent,authorText)
    const pasteObj={
        title:title,
        content:content,
        author:author,
        date:dateText
    }
    pastesArray.push(pasteObj);
  }
  return pastesArray;
};
start();

 const getTitle= (container:Element)=>{
    const title = container.querySelector(".col-sm-5");
    if (title === null) {
      return Error("not a paste")
    }else{
        const titleText = title.textContent;
        return titleText
    }
    
 }
 const getContent= (container:Element)=>{
    const content = container.getElementsByTagName("ol");
    if (content === null) {
      return;
    }
    let contentText = "";
    for (let li of content) {
      contentText=li.textContent;
    }
    return contentText
 }
const cropAuthor = (str: string | null | undefined) => {
    if (str == null) return '';
    const startAuthor = str.trim().replace('Posted by ', '');
    return startAuthor.substring(0, startAuthor.indexOf(' '));
  };
  const cropDate = (str: string | null | undefined,author:string) => {
    if (str == null) return '';
    const startAuthor = str.trim().replace(`Posted by ${author} at`, '');
    return startAuthor;
  };
  
