import React, { useState } from "react";
import { Button, Image, Modal } from "react-bootstrap";
import MainCoin from "../../Assets/Images/main-coin.png";
import Coin from "../../Assets/Images/coin-icon-01.jpg";
import "./coinflip.css";
import { Link } from "react-router-dom";
import Web3 from "web3";

const CoinFlip = () => {

function walletconnect () {
    console.log("ii");
  };
  
return(
<div class="btn-group">
  <button onclick="walletconnect()">0.05 ETH</button>
  <button>0.1 ETH </button>
  <button>0.25 ETH</button>
</div>
);
};

export default CoinFlip;