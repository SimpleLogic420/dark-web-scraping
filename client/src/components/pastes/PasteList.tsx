import React, { useEffect, useState } from "react";
import { FullPasteType, Percentage } from "../../types/paste";
import Dashboard from "../dashboard/Dashboard";
import PasteBox from "./PasteBox";
import ReactPaginate from "react-paginate";
interface props{
  pastelist: FullPasteType[];
  setPasteList: React.Dispatch<React.SetStateAction<FullPasteType[]>>;
  search: FullPasteType[];
  stats:Percentage;
  setStats:React.Dispatch<React.SetStateAction<never[]>>
}

function PasteList({
  pastelist,
  setPasteList,
  search,
  stats,
  setStats
}: props) {
 
  const [pageNumber, setPageNumber] = useState(0);

  const pastesPerPage = 20;
  const pagesVisited = pageNumber * pastesPerPage;

  const displayPastes = pastelist
    .slice(pagesVisited, pagesVisited + pastesPerPage)
    .map((paste: FullPasteType, i: number) => {
      return <PasteBox paste={paste} i={i} />;
    });
  const displaySearch = search
    .slice(pagesVisited, pagesVisited + pastesPerPage)
    .map((paste: FullPasteType, i: number) => {
      return <PasteBox paste={paste} i={i} />;
    });

  const pageCount = Math.ceil(pastelist.length / pastesPerPage);
  const changePage = ({ selected }: { selected: number }) => {
    setPageNumber(selected);
  };
  useEffect(() => {
    const dataSource = new EventSource("http://localhost:3010/list/scrape");
    dataSource.onmessage = (event) => {
      console.log(
        `${
          JSON.parse(event.data).pastes.length
        } pastes have been scraped at ${new Date()}`
      );
      setPasteList(JSON.parse(event.data).pastes);
      setStats(JSON.parse(event.data).stats);
      
    };
    dataSource.onerror = (event) => {
      console.log(event.type);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="pasteList">
      <Dashboard pastelist={pastelist} percentage={stats} />
      {search.length > 0 ? displaySearch : displayPastes}
      {/* ALL THE CODE BELOW IS FOR THE PAGINATE BUTTONS */}
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
    </div>
  );
}

export default PasteList;
