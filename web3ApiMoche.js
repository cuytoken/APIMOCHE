
//Funcaion para conectar con metamask y obtener la cuenta
async function getAccount() {
    const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
    const account = accounts[0];
    console.log(account);
}

//MIntea NFT para whitelist
async function mintMoche() {

    const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
    const account = accounts[0];
    window.web3 = new Web3(window.ethereum);
    const contract = new web3.eth.Contract(minABI, contractMocheAddress);
    txInstancia = contract.methods.claimFreeNftByWhitelist(); /*input: methodo  */
    encodedABI = txInstancia.encodeABI();
    var tx = {
        from: account,
        to: contractAddress,
        data: encodedABI
    };

    const rpta = await web3.eth.sendTransaction(tx);

    console.log(rpta);


}


//MIntea NFT para whitelist
async function nftMochePriceBase() {

    const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
    const account = accounts[0];
    window.web3 = new Web3(window.ethereum);
    const contract = new web3.eth.Contract(minABI, contractMocheAddress);
    rpta = await contract.methods.nftCurrentPrice().call(); /*input: methodo  */
  
    console.log(rpta);


}
