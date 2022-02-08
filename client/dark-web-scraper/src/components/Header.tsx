import React, {useRef, useState,useCallback} from "react";
import { FullPasteType } from "../types/paste";
// import ButtonComp from "./ButtonComp";
function Header({pastelist,setSearch}:{pastelist:FullPasteType[],setSearch:React.Dispatch<React.SetStateAction<never[]>>}) {
  
  function filterFunc(filter:string, pastelist:FullPasteType[]) {
    console.log(filter)
const filteredArray:FullPasteType[]=[]
    for (let i = 0; i < pastelist.length; i++) {
      const title = pastelist[i].title;
      const content = pastelist[i].content;
      const category = pastelist[i].category;
      if (title.toLowerCase().includes(filter) ||
      content.toLowerCase().includes(filter)||
      category.toLowerCase().includes(filter)) {
        filteredArray.push(pastelist[i]);
      } else {
        continue
      }
    }
    return filteredArray
  }
  const handleChange=(event:any)=>{
    const value= event.target.value
    const filteredArray=filterFunc(value,pastelist);
    // @ts-ignore
    setSearch(filteredArray)
  }
  return (
    <div className="header">
        <div className="rightDiv">
          <div className="superRightDiv">
          <h1 className="pageTitle">Dark-Web-pastes</h1>
      <p>Posts from strongHold site</p>
          </div>
        <div className="leftRightDiv"></div>
        </div>
     
      <div className="searchDiv">
          <br/>
          <br/>
        <form action="submit" className="searchForm">
          <span>Search:</span>
          <input
            type="text"
            id="searchInput"
            name="searchInput"
            className="searchInput"
            placeholder="search for paste"
             onChange={handleChange}
            // value={searchText}
          />
          <section className="searchBtnSection">
              <button  type="submit" className="searchBtn" onClick={(e)=>{e.preventDefault() }}>Search</button>
              
          </section>
        </form>
      </div>
    </div>
  );
}

export default Header;
  