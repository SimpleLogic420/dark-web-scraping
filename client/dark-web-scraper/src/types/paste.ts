

export interface PasteType {
  id:string;
    author: string;
    title: string;
    content: string;
    date: string;
  }
  export interface FullPasteType {
    id:string;
    author: string;
    title: string;
    content: string;
    date: string;
    category:string
  }
  
  export interface Percentage{
    General:number,
    Crypto:number,
    Hacking:number,
    DrugsAndWeapons:number,
    AdultsContent:number
  }
