import React ,{useEffect,useState} from 'react';
import axios from 'axios'; 
import PasteType from '../../types/paste';
function PasteList() {
    const [pastelist,setPasteList]= useState([]);
    // const getPasteList=async()=>{ //gets the pastelist from server

    // }
    useEffect( ()=> {
        async function getList() {
            const sickPastesList= await axios.get("http://localhost:3010/list")
            const reversedList = sickPastesList.data.reverse();
            setPasteList(reversedList)
        }
        getList()

    },[])
  return <div className='pasteList'>
      {pastelist.map((paste :PasteType, i)=>{
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
    </div>
</div>
          )

      })}
  </div>;
}

export default PasteList;
