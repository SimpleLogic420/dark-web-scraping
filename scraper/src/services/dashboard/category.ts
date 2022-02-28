import PasteType, { FullPasteType } from "../../types/types";



export const addCategory = (pasteObj: PasteType) => {
  let title = pasteObj.title.toLowerCase();
  let content = pasteObj.content.toLowerCase();
  const category = getCategory(title);
  if(category==="general"){
   const categoryByContent=getCategory(content)
   const fullPasteObj:FullPasteType=pasteObj
   fullPasteObj.category=categoryByContent
   return fullPasteObj;
  }
const fullPasteObj:FullPasteType=pasteObj
fullPasteObj.category=category;
return fullPasteObj
  
};
let counter =0
const getCategory = (text: string) => {
    let response = "general"
    const adultsContentKeyWords= ["porn","sex","xxx","taboo","child","teen","c.p","s3x","hot"]
    const cryptoKeyWords= ["crypto","bitcoin","ethereum","mining","coin","binance","mine"]
    const hackingKeyWords= ["database","hack","leak","users","data","injection","brut"]
    const drugsAndWeaponsKeyWords= ["drug","weapon","gun","pistol","rifle","psychedelic","cocaine","mushrooms","lsd","hashish","weed","molly","dmt"]
    for(let word of adultsContentKeyWords){
        if(text.includes(word)){
            response="adultsContent";
    return response;
        }
    }
    for(let word of cryptoKeyWords){
        if(text.includes(word)){
            response="crypto";
            return response
        }
    }
    for(let word of hackingKeyWords){
        if(text.includes(word)){
            response="hacking";
            return response
        }
    }
    for(let word of drugsAndWeaponsKeyWords){
        if(text.includes(word)){
            response="drugsAndWeapons";
            return response
        }
    }
 return response;
};
