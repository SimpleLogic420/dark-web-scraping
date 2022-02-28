import PasteType, { FullPasteType } from "../../types/types";

export const getStats=(pastelist:FullPasteType[])=>{
const stats={
    General: 0,
    Crypto: 0,
    Hacking: 0,
    DrugsAndWeapons: 0,
    AdultsContent: 0,
}
const percentPerPaste= 100/pastelist.length
for(let paste of pastelist){
    switch (paste.category) {
        case "general":
            stats.General+=1
            break;
        case "crypto":
            stats.Crypto+=1
            break;
        case "hacking":
            stats.Hacking+=1
            break;
        case "drugsAndWeapons":
            stats.DrugsAndWeapons+=1
            break;
        case "adultsContent":
            stats.AdultsContent+=1
            break;
    
        default:
            break;
    }
}
stats.General*=percentPerPaste
stats.Crypto*=percentPerPaste
stats.Hacking*=percentPerPaste
stats.DrugsAndWeapons*=percentPerPaste
stats.AdultsContent*=percentPerPaste
return stats
}