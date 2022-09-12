import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import CoinWallet from "./Component/Coinwallet/coinwallet";
import CoinConnect from "./Component/CoinConnect/CoinConnect";
import Header from "./Component/Header/header";
import Footer from "./Component/Footer/Footer";
import web3 from './Component/web3/web3'
import multitest from './Component/web3/multitest'

function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={ <CoinWallet /> } />
        <Route path="/coin-connect" element={ <CoinConnect/> } />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
  
}

export default App;
