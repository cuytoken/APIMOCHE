
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
        to: contractMocheAddress,
        data: encodedABI
    };

    const rpta = await web3.eth.sendTransaction(tx);

    console.log(rpta);

}


//Ontiene el precio Base del NFT
async function nftMochePriceBase() {

    const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
    const account = accounts[0];
    window.web3 = new Web3(window.ethereum);
    const contract = new web3.eth.Contract(minABI, contractMocheAddress);
    rpta = await contract.methods.nftCurrentPrice().call(); /*input: methodo  */
    rpta = rpta.substring(0, (rpta.length - 18));
    console.log(rpta);


}



//Aprueba la cantidad de BUSD a retirar de su cuenta
async function approveBUSD(monto) {
    const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
    const account = accounts[0];
    window.web3 = new Web3(window.ethereum);
    const contract = new web3.eth.Contract(abi_BUSD, BUSD_Address);
    txInstancia = contract.methods.approve(contractMocheAddress, monto + zero18); /*input: methodo  */
    encodedABI = txInstancia.encodeABI();
    var tx = {
        from: account,
        to: BUSD_Address,
        data: encodedABI
    };
    const rpta = await web3.eth.sendTransaction(tx);
    console.log(rpta);

}




//Aprueba la cantidad de BUSD a retirar de su cuenta
async function purchaseNftWithBusd() {
   
    const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
    const account = accounts[0];
    window.web3 = new Web3(window.ethereum);
    const contract = new web3.eth.Contract(minABI, contractMocheAddress);
    txInstancia = contract.methods.purchaseNftWithBusd(); /*input: methodo  */
    encodedABI = txInstancia.encodeABI();
    var tx = {
        from: account,
        to: contractMocheAddress,
        data: encodedABI
    };

    const rpta = await web3.eth.sendTransaction(tx);

    console.log(rpta);


}
