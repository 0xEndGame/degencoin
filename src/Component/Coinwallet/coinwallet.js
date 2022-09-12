import React, { useState } from "react";
import { Button, Image, Modal } from "react-bootstrap";
import MainCoin from "../../Assets/Images/main-coin.png";
import Coin from "../../Assets/Images/coin-icon-01.jpg";
import "./coinwallet.css";
import { Link } from "react-router-dom";
import Web3 from "web3";

const CoinWallet = () => {
  const [show, setShow] = useState(false);

  const ConnectWallet = () => {
    window.ethereum.request({ method: "eth_requestAccounts" });
  }

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [Secondshow, SecondsetShow] = useState(false);

  const SecondhandleClose = () => SecondsetShow(false);
  const SecondhandleShow = () => SecondsetShow(true);

  const [Thirdshow, ThirdsetShow] = useState(false);

  const ThirdhandleClose = () => ThirdsetShow(false);
  const ThirdhandleShow = () => ThirdsetShow(true);


  return (
    <div className="coinwallet">
      <h1>#1 MOST TRUSTED PLACE TO FLIP</h1>
      <div>
        <h2> test </h2>
      </div>
      <div className="coin-icon">
        <Image src={MainCoin} alt="MainCoin" />
      </div>
      <Link to="/coin-connect" className="btn btn-purple" onClick={ConnectWallet}>
        Select Wallet
      </Link>
      <h4>RECENT PLAYS</h4>
      <ul className="coin-list-wrap">
        <li>
          <span>
            <Image src={MainCoin} />
          </span>
          <p>pdgasman flipped 0.05 and got rugged.</p>
          <i>16 seconds ago</i>
        </li>
        <li>
          <span>
            <Image src={Coin} />
          </span>
          <p>
            Flofae flipped 0.05 and <strong>doubled 5 times.</strong>
          </p>
          <i>16 seconds ago</i>
        </li>
        <li>
          <span>
            <Image src={MainCoin} />
          </span>
          <p className="text-gold">
            U got rugged flipped 2 and doubled 2 times.
          </p>
          <i>16 seconds ago</i>
        </li>
        <li>
          <span>
            <Image src={Coin} />
          </span>
          <p>pdgasman flipped 0.05 and got rugged.</p>
          <i>16 seconds ago</i>
        </li>
        <li>
          <span>
            <Image src={MainCoin} />
          </span>
          <p>
            Flofae flipped 0.05 and <strong>doubled 5 times.</strong>
          </p>
          <i>16 seconds ago</i>
        </li>
        <li>
          <span>
            <Image src={Coin} />
          </span>
          <p className="text-gold">
            U got rugged flipped 2 and doubled 2 times.
          </p>
          <i>16 seconds ago</i>
        </li>
        <li>
          <span>
            <Image src={MainCoin} />
          </span>
          <p className="text-gold">
            U got rugged flipped 2 and doubled 2 times.
          </p>
          <i>16 seconds ago</i>
        </li>
        <li>
          <span>
            <Image src={Coin} />
          </span>
          <p>pdgasman flipped 0.05 and got rugged.</p>
          <i>16 seconds ago</i>
        </li>
        <li>
          <span>
            <Image src={MainCoin} />
          </span>
          <p className="text-gold">
            U got rugged flipped 2 and doubled 2 times.
          </p>
          <i>16 seconds ago</i>
        </li>
        <li>
          <span>
            <Image src={Coin} />
          </span>
          <p>pdgasman flipped 0.05 and got rugged.</p>
          <i>16 seconds ago</i>
        </li>
      </ul>
      <ul className="nav-link-wrap">
        <li>
          <a target="_blank" href="https://about.degencoinflip.com/">
            ABOUT
          </a>
        </li>
        <li>
          <a onClick={handleShow} href="javascript:void(0)">
            FAQ
          </a>
        </li>
        <li>
          <a onClick={SecondhandleShow} href="javascript:void(0)">
            HOW TO PLAY
          </a>
        </li>
        <li>
          <a onClick={ThirdhandleShow} href="javascript:void(0)">
            FLIP RESPONSIBLY
          </a>
        </li>
        <li>
          <a target="_blank" href="https://degencoinflip.com/bug-bounty">
            BUG BOUNTY
          </a>
        </li>
      </ul>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Body>
          <div className="modal-info">
            <h3>Frequently Asked Questions</h3>
            <h5>What is Degen Coin Flip (DCF)?</h5>
            <p>
              Degen Coin Flip is a smart contract that allows users to play
              Double or Nothing with their Solana tokens. Odds are 50/50 with a
              3.5% fee.
            </p>
            <h5 className="mt-4">How do I know I can Trust DCF?</h5>
            <p>
              DCF has over +5m flips since we started and we are the #1 most
              trusted platform on Solana.
            </p>
            <p>
              The DCF Team and DCF community have aligned incentives for the
              game to have exactly 50/50 odds.
            </p>
            <p>
              Our House and Fee wallets are all public and every transaction can
              be reviewed by anyone.
            </p>
            <h5 className="mt-4">Where can I track transactions?</h5>
            <p>
              House Wallet: <br />{" "}
              https://solscan.io/account/D6X9pm65p7NuWrgrYQUNU1M4qvAA7ASz4GWymGuPYrtw
            </p>
            <p>
              Fee Wallet: <br />{" "}
              https://solscan.io/account/DAdbcE5SdqoQArf7V87pYR6jPNmTtEUbR2XeC1kAzZjh
            </p>
            <h5 className="mt-4">Where can I learn more?</h5>
            <p>
              Join us on discord, there will always be someone to help you out.{" "}
              <br /> https://discord.gg/degenfatcats.
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="" className="btn btn-yellow" onClick={handleClose}>
            GOT IT
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={Secondshow} onHide={SecondhandleClose} centered>
        <Modal.Body>
          <div className="modal-info">
            <h3>How To Play</h3>
            <ul>
              <li>
                Connect your Phantom Wallet. (Get Phantom @ <a target="_blank" href="https://phantom.app/">   phantom.app
                </a>
                )
              </li>
              <li>Pick either heads or tails.</li>
              <li>Select your desired flip amount.</li>
              <li>Click “Double or Nothing”.</li>
              <li>Click approve and wait for coin to spin</li>
              <li>Congrats, you’re now a degenerate.</li>
            </ul>
            <h5>What is a Phantom Wallet?</h5>
            <p>
              Phantom wallet is a browser extension to manage your digital
              assets on the Solana blockchain network. Visit 
              <a href="https://phantom.app/"> phantom.app</a>, add the wallet to
              chrome, and follow the instructions to create a wallet.
            </p>
            <h5>How Do I fund my Phantom Wallet?</h5>
            <p>
              Use a central exchange such as Coinbase, Binance, or FTX to fund
              your wallet. Purchase Solana using fiat currency. Then withdraw
              Solana to your Phantom wallet.
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant=""
            className="btn btn-yellow"
            onClick={SecondhandleClose}
          >
            GOT IT
          </Button>
        </Modal.Footer>
      </Modal>



      <Modal show={Thirdshow} onHide={ThirdhandleClose} centered>
        <Modal.Body>
          <div className="modal-info">
            <h5>FLIP RESPONSIBLY</h5>
            <p>
              DCF is a fun game on Solana and we want all of our players to play
              responsibly. Please only play with Sol you are comfortable parting
              with that won’t impact your well-being.
            </p>
            <h5 className="mt-4">RESOURCES</h5>
            <p>
              Call <a href="tel:1-800-522-4700">1-800-522-4700</a> <br /> Chat <a href="https://ncpgambling.org/chat">ncpgambling.org/chat</a> <br /> Text 1-800-522-4700
            </p>
            <h5 className="mt-4">DO I HAVE A FLIPPING PROBLEM?</h5>
            <p>Flipping problem includes all behavior patterns that compromise, disrupt, or damage any personal, family, or vocational pursuits. Symptoms include increasing preoccupation with flipping, a need to flip more and more frequently, restlessness or irritability when attempting to stop, “chasing” losses, and loss of control manifested by continuation of the flipping behavior in spite of mounting, serious, and/or negative consequence.</p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant=""
            className="btn btn-yellow"
            onClick={ThirdhandleClose}
          >
            GOT IT
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};


export default CoinWallet;
