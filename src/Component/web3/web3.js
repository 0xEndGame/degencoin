import Web3 from "web3";
     
async function connectWallet() {


window.ethereum.request({ method: "eth_requestAccounts" });
 
const web3 = new Web3(window.ethereum);

}
 
export default web3;