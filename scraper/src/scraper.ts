import axios from "axios";
import Paste from "./db/models/Schema";
import PasteType, { FullPasteType } from "./types/types";
import jsdom from "jsdom";
import { addCategory } from "./services/dashboard/category";
const { JSDOM } = jsdom;
const url =
  "http://strongerw2ise74v3duebgsvug4mehyhlpa7f6kfwnas7zofs3kov7yd.onion/all"; // URL we're scraping
const start = async (siteUrl: string) => {
  try {
    const res = await axios.get(siteUrl, {
      proxy: {
        host: "localhost",
        port: 8118,
      },
    });
    const dom = new JSDOM(res.data);
    const document = dom.window.document;
    const containers = document.querySelectorAll(
      "#list .row:not(:first-child):not(:last-child) .col-sm-12"
    );
    buildPasteList(containers);
  } catch (error) {
    console.log("failed in START "+error);
  }
  
};

const buildPasteList=(containers)=>{
  const pastesArray = [];
  try {
    for (let container of containers) {
      const title = getTitle(container);
  
      const content = getContent(container);
  
      const author = container.querySelector(".col-sm-6");
      const authorText = cropAuthor(author.textContent);
  
      const dateText = cropDate(author.textContent, authorText);
      if (author === "Guest" || author === "Unknown" || author === "Anonymous") { //happens after the we getting the date because it depends on the author name
          author=== "@";
     }
      const urlId = (
        container.querySelectorAll(
          ".col-sm-7.text-right a"
        )[0] as HTMLAnchorElement
      ).href;
      const id = urlId.substring(urlId.lastIndexOf("/") + 1);
  
      const pasteObj = {
        id: id,
        title: title,
        content: content,
        author: authorText,
        date: dateText,
      };
      const fullPasteObj = addCategory(pasteObj);
      pastesArray.push(fullPasteObj);
    }
    enterDataToDb(pastesArray.reverse());
  } catch (error) {
    console.log("failed in build paste list "+error);
  }
  
  
  
}
const enterDataToDb = async (pastesArray: FullPasteType[]) => {
  try {
    
    for (let i = 0; i < pastesArray.length; i++) {
      try {
        await Paste.insertMany(pastesArray[i]);
      } catch (error) {
        continue;
      }
    }
    console.log("pastes added to DB successfully");
  } catch (error) {
    console.log("failed in get content "+error.data);
  }
  
};

const getTitle = (container: Element) => {
  try {
    const title = container.querySelector(".col-sm-5");
  const titleText = title.textContent;
  return titleText.replace(/[ \n\t\r]\s+/g, "").trim();
  } catch (error) {
    console.log("failed in get title "+error.data);
  }
  
};
const getContent = (container: Element) => {
  try {
    const content = container.getElementsByTagName("ol");
  if (content === null) {
    return;
  }
  let contentText = "";
  for (let li of content) {
    contentText = li.textContent;
  }
  return contentText.replace(/[ \n\t\r]\s+/g, "").trim();
  } catch (error) {
    console.log("failed in get content " +error.data);
  }
  
};
const cropAuthor = (str: string | null | undefined) => {
  try {
    if (str == null) return "";
  const startAuthor = str.trim().replace("Posted by ", "");
  const author = startAuthor.substring(0, startAuthor.indexOf(" "));
  // if (author === "Guest" || author === "Unknown" || author === "Anonymous") {
  //   return "@";
  // } else {
    return author;
  // }
  } catch (error) {
    console.log("failed in crop author" +error.data);
  }
  
};
const cropDate = (str: string | null | undefined, author: string) => {
  try {
    if (str == null) return "";
  const date = str.trim().replace(`Posted by ${author} at `, "");
  console.log(date);
  return date;
  } catch (error) {
    console.log("failed in crop date" +error.data);
  }
  
};

export default start;
