import React ,{useEffect,useState} from 'react';
import { FullPasteType } from '../../types/paste';

import ReactPaginate from "react-paginate"
function PasteList({pastelist,setPasteList,search}:{pastelist:FullPasteType[],setPasteList:React.Dispatch<React.SetStateAction<never[]>>,search:FullPasteType[]}) {
    // const [pastelist,setPasteList]= useState([]);
    const [pageNumber,setPageNumber]=useState(0)

    const pastesPerPage=20
    const pagesVisited = pageNumber * pastesPerPage

    const displayPastes =pastelist
    .slice(pagesVisited,pagesVisited+pastesPerPage)
    .map((paste :FullPasteType, i:number)=>{
          return(
<div className="pasteBox" key={i}>
    <h3 className="pasteTitle">{paste.title}</h3>
    <div className="pasteContent">
        <p className="pasteActualContent">
{paste.content}
        </p>
    </div>
    <div className="pasteBoxBottom">
        <span className="pasteAuthor">By : {paste.author}</span>
        <span className="pasteDate"><small> At {paste.date}</small></span>
        <div className="categoryDiv">
            <span className="category">{paste.category}</span>
        </div>
    </div>
</div>

          );
  
    });
    const displaySearch =search
    .slice(pagesVisited,pagesVisited+pastesPerPage)
    .map((paste :FullPasteType, i:number)=>{
          return(
<div className="pasteBox" key={i}>
    <h3 className="pasteTitle">{paste.title}</h3>
    <div className="pasteContent">
        <p className="pasteActualContent">
{paste.content}
        </p>
    </div>
    <div className="pasteBoxBottom">
        <span className="pasteAuthor">By : {paste.author}</span>
        <span className="pasteDate"><small> At {paste.date}</small></span>
        <div className="categoryDiv">
            <span className="category">{paste.category}</span>
        </div>
    </div>
</div>

          );
  
    });

    const pageCount=Math.ceil(pastelist.length/pastesPerPage)
    const changePage=({selected}:{selected:number})=>{
     setPageNumber(selected)
    }
    useEffect( ()=> {
       const dataSource = new EventSource("http://localhost:3010/list/scrape")
       dataSource.onmessage=(event)=>{
           console.log(`${JSON.parse(event.data).length} pastes have been scraped at ${new Date()}`);
           setPasteList(JSON.parse(event.data));
       }
       dataSource.onerror=(event)=>{
           console.log("BIG ERROR");
           console.log(event);
           
       }
    },[])
  return <div className='pasteList'>
      {/* <Stats/> */}
     {search.length>0?displaySearch:displayPastes}
     <ReactPaginate
     previousLabel={"Previous"}
     nextLabel={"Next"}
      pageCount={pageCount}
       onPageChange={changePage}
    //   declare classNames
      containerClassName={"paginationBtn"}
      pageClassName={"pageBtn"}
      previousClassName={"previousBtn"}
      nextClassName={"nextBtn"}
      disabledClassName={"paginationDisabled"}
      activeClassName={"paginationActive"}
      />
      
  </div>;
}

export default PasteList;
