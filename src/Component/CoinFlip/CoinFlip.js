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
  var walletadr = document.getElementById("wallet_address").value 
  console.log(walletadr);
  };

const getData = () => {
  multiepoch.methods.epoch().call(function (err,res) {
    if (err) {
      console.log("an error occured", err)
      return
    }
    console.log("the epoch is: ", res)
    document.getElementById('output').innerHTML = res;

  })
  
};

return(
  

<div class="body">
<p id="output"></p>
</div>
  


);



};

export default CoinFlip;

