import Paste from "../db/models/Schema";

async function getList(){
    const pasteList = await Paste.find({});
    
    return pasteList;
}

export default getList