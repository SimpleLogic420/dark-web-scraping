import React from "react";
import { FullPasteType } from "../../types/paste";
import Linklist from "./Linklist";

interface props{
  pastelist: FullPasteType[];
  setSearch:React.Dispatch<React.SetStateAction<FullPasteType[]>>
  notifications:string[],
  setNotifications:React.Dispatch<React.SetStateAction<string[]>>;
  newAlerts:number,
  zeroNewAlerts:() => void
}
function Header({pastelist,setSearch,notifications,setNotifications,newAlerts,zeroNewAlerts}:props) {
  
  function filterFunc(filter:string, pastelist:FullPasteType[]) {
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
    setTimeout(() => {
    setSearch(filteredArray)
    }, 1000);
    
  }
  return (
    <div className="header">
        <div className="rightDiv">
          <div className="superRightDiv">
          <h1 className="pageTitle">Dark-Web-Pastes</h1>
      <p>Posts from strongHold site</p>
          </div>
        <div className="leftRightDiv"></div>
        </div>
       
      <div className="searchDiv">
          <br/>
          <br/>
         
        <form action="submit" className="searchForm">
          
          <input
            type="text"
            id="searchInput"
            name="searchInput"
            className="searchInput"
            placeholder="search for pastes"
             onChange={handleChange}
          />
        </form>
      </div>
        <Linklist newAlerts={newAlerts} zeroNewAlerts={zeroNewAlerts}/>
    </div>
  );
}

export default Header;
  