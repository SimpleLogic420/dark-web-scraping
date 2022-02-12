import React, { useState } from "react";
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import PasteList from "./components/pastes/PasteList";
import KeyWord from "./pages/KeyWord";
import "./index.scss";

function App() {
  // const myContext = React.createContext(0)
  const [pastelist, setPasteList] = useState([]);
  const [search, setSearch] = useState([]);
  const [stats, setStats] = useState({
    General: 0,
    Crypto: 0,
    Hacking: 0,
    DrugsAndWeapons: 0,
    AdultsContent: 0,
  });
  return (
    <div className="App">
      <BrowserRouter>
      <Header pastelist={pastelist} setSearch={setSearch} />
      <main>
        <Routes>
        <Route path="/" element={<PasteList
    stats={stats}
    // @ts-ignore
    setStats={setStats}
      search={search}
      pastelist={pastelist}
      setPasteList={setPasteList}
    />}/>
        <Route path="/views" element={<KeyWord/>}/>
      
        </Routes>
      </main>
      
    
    
    <Footer />
      </BrowserRouter>
     
      
    </div>
  );
}

export default App;
