import React from "react";
import { Button, Image } from "react-bootstrap";
import MainCoin from "../../Assets/Images/main-coin.png";
import Coin from "../../Assets/Images/coin-icon-01.jpg";
import "./CoinConnect.css";
import { Link } from "react-router-dom";

const CoinConnect = () => {
  return (
    <div className="coinwallet connect-wallet">
      <div className="coin-icon">
        <Image src={MainCoin} alt="MainCoin" />
      </div>
      <h5>I LIKE</h5>
      <div className="head-tail-wrap">
        <label for="heads" className="custom-radio-btn">
          <input type="radio" name="heads" id="heads" value="heads" />
          <div className="radio-yellow">
            <h6>HEADS</h6>
          </div>
        </label>
        <label for="tails" className="custom-radio-btn">
          <input type="radio" name="heads" id="tails" value="tails" />
          <div className="radio-yellow">
            <h6>TAILS</h6>
          </div>
        </label>
      </div>
      <h5>FOR</h5>
      <div className="sol-wrap">
        <label for="sol-01" className="custom-radio-btn">
          <input type="radio" name="sol" value="" id="sol-01" />
          <div className="sol-btn radio-yellow">
            <span>
              <Image src={MainCoin} />
            </span>
            <div>
              <h6>05sol</h6>
              <i>BABY BET</i>
            </div>
          </div>
        </label>
        <label for="sol-02" className="custom-radio-btn">
          <input type="radio" name="sol" value="" id="sol-02" />
          <div className="sol-btn radio-yellow">
            <h5>0.1 SOL</h5>
          </div>
        </label>
        <label for="sol-03" className="custom-radio-btn">
          <input type="radio" name="sol" value="" id="sol-03" />
          <div className="sol-btn radio-yellow">
            <h5>.25 SOL</h5>
          </div>
        </label>
        <label for="sol-04" className="custom-radio-btn">
          <input type="radio" name="sol" value="" id="sol-04" />
          <div className="sol-btn radio-yellow">
            <h5>0.5 SOL</h5>
          </div>
        </label>
        <label for="sol-05" className="custom-radio-btn">
          <input type="radio" name="sol" value="" id="sol-05" />
          <div className="sol-btn radio-yellow">
            <h5>1 SOL</h5>
          </div>
        </label>
        <label for="sol-06" className="custom-radio-btn">
          <input type="radio" name="sol" value="" id="sol-06" />
          <div className="sol-btn radio-yellow">
            <h5>2 SOL</h5>
            <span>
              <Image src={Coin} />
            </span>
          </div>
        </label>
      </div>
      <hr />
      <Button variant="" className="btn-yellow">
        DOUBLE OR NOTHING
      </Button>
    </div>
  );
};

export default CoinConnect;
