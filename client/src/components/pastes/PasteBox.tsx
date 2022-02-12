import React from 'react'
import { FullPasteType } from '../../types/paste'
function PasteBox({paste,i}:{paste :FullPasteType, i:number}) {
  return (
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
  )
}

export default PasteBox