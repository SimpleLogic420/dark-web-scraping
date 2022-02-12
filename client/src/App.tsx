import React, { useState } from "react";
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import PasteList from "./components/pastes/PasteList";
import KeyWord from "./pages/keywords/KeyWord";
import Alerts from "./pages/alerts/Alerts";
import "./index.scss";
import { Alert, FullPasteType } from "./types/paste";

function App() {
  
  const [pastelist, setPasteList] = useState<FullPasteType[]>([]);
  const [keywords, setKeywords] = useState<string[]>([]);
  const [alerts,setAlerts]=useState<Alert[]>([]);
  const [search, setSearch] = useState<FullPasteType[]>([]);
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
        <Route path="/keyword" element={<KeyWord
        keywords={keywords}
        setKeywords={setKeywords}
        pastelist={pastelist}
        setPasteList={setPasteList}
        setAlerts={setAlerts}
        alerts={alerts}
        />}/>
        <Route path="/alerts" element={<Alerts
        alerts={alerts}
        />}/>
      
        </Routes>
      </main>
      
    
    
    <Footer />
      </BrowserRouter>
     
      
    </div>
  );
}

export default App;
