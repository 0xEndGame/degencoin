import React, { useState } from "react";
import { Button, Image, Modal } from "react-bootstrap";
import MainCoin from "../../Assets/Images/main-coin.png";
import Coin from "../../Assets/Images/coin-icon-01.jpg";
import "./coinflip.css";
import { Link } from "react-router-dom";
import Web3 from "web3";
import multiepoch from "../web3/multitest";


const CoinFlip = () => {

const walletConnector = () => {
  window.ethereum.request({ method: "eth_requestAccounts" });
};

const getData = () => {
  multiepoch.methods.epoch().call(function (err,res) {
    if (err) {
      console.log("an error occured", err)
      return
    }
    console.log("the epoch is: ", res)
  })
  }
};

return(
<div class="btn-group">
  <button id="walletConnect" onClick={walletConnector}>Connect your wallet you degen</button>

  <button id="scTest" onClick={getData}> Request Data</button>

</div>

);



};

export default CoinFlip;