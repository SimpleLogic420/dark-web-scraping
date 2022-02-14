import React, { useState } from "react";
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import PasteList from "./components/pastes/PasteList";
import KeyWord from "./pages/keywords/KeyWord";
import Alerts from "./pages/alerts/Alerts";
import Notifications from "./pages/notifications/Notifications";
import "./index.scss";
import { Alert, FullPasteType } from "./types/paste";
function App() {
  
  const [pastelist, setPasteList] = useState<FullPasteType[]>([]);
  const [keywords, setKeywords] = useState<string[]>([]);
  const [alerts,setAlerts]=useState<Alert[]>([]);
  const [search, setSearch] = useState<FullPasteType[]>([]);
  const [notifications, setNotifications] = useState<string[]>([]);
  const [newAlerts, setNewAlerts] = useState(0);
  const [stats, setStats] = useState({
    General: 0,
    Crypto: 0,
    Hacking: 0,
    DrugsAndWeapons: 0,
    AdultsContent: 0,
  });
  const deleteAllNotif=()=>{
    setNotifications([]);
  }
  const zeroNewAlerts=()=>{
    setNewAlerts(0);
  }
  return (
    <div className="App">
      <BrowserRouter>
      <Header pastelist={pastelist} setSearch={setSearch} notifications={notifications}
        setNotifications={setNotifications} newAlerts={newAlerts} zeroNewAlerts={zeroNewAlerts} />
      <main>
        <Routes>
        <Route path="/" element={<PasteList
    stats={stats}
    // @ts-ignore
    setStats={setStats}
      search={search}
      pastelist={pastelist}
      setPasteList={setPasteList}
      notifications={notifications}
      setNotifications={setNotifications}
      newAlerts={newAlerts}
      setNewAlerts={setNewAlerts}
    />}/>
        <Route path="/keyword" element={<KeyWord
        keywords={keywords}
        setKeywords={setKeywords}
        setAlerts={setAlerts}
        alerts={alerts}
        notifications={notifications}
        setNotifications={setNotifications}
        setNewAlerts={setNewAlerts}
        newAlerts={newAlerts}
        />}/>
        <Route path="/alerts" element={<Alerts
        alerts={alerts}
        />}/>
        <Route path="/notifications" element={<Notifications
        notifications={notifications}
        deleteNotif={deleteAllNotif}
        />}/>
      
        </Routes>
      </main>
      
    
    
    <Footer />
      </BrowserRouter>
     
      
    </div>
  );
}

export default App;
