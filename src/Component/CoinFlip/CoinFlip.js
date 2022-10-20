import React, { useState } from "react";
import { Button, Image, Modal } from "react-bootstrap";
import MainCoin from "../../Assets/Images/main-coin.png";
import Coin from "../../Assets/Images/coin-icon-01.jpg";
import "./coinflip.css";
import { Link } from "react-router-dom";
import Web3 from "web3";

const CoinFlip = () => {

const walletConnector = () => {
  alert('Hi');
};

return(
<div class="btn-group">
  <button id="walletConnect" onClick={walletConnector}>Connect your wallet you degen</button>

</div>

);



};

export default CoinFlip;