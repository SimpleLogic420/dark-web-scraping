import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/footer/Footer";
import PasteList from "./components/pastes/PasteList";
import "./index.scss";

function App() {
  // const myContext = React.createContext(0)
  const [pastelist, setPasteList] = useState([]);
  const [search, setSearch] = useState([]);
  return (
    <div className="App">
      {/* <myContext.Provider value={900} > */}
      <Header pastelist={pastelist} setSearch={setSearch} />
      <PasteList
        search={search}
        pastelist={pastelist}
        setPasteList={setPasteList}
      />
      <Footer />
      {/* </myContext.Provider> */}
    </div>
  );
}

export default App;
