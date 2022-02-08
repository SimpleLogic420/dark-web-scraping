interface PasteType {
  id: string;
  author: string;
  title: string;
  content: string;
  date: string;
  
}
export interface FullPasteType {
  id: string;
  author: string;
  title: string;
  content: string;
  date: string;
  category?: string;
}

export interface Categorys {
  adultsContent: number;
  crypto: number;
  general: number;
  hacking: number;
  drugsAndWeapons: number;
}
interface AuthorAndDate {
  author: string;
  date: Date;
}
export default PasteType;
