import React from 'react';
import Header from './components/Header';
import Footer from './components/footer/Footer';
import PasteList from './components/pastes/PasteList';
import "./index.scss"

function App() {
  return (
    <div className="App">
       <Header/>
       <PasteList/>
       <Footer/>
    </div>
  );
}

export default App;
