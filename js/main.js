let logged = false;

document.getElementById('connect-button').addEventListener('click', event => {
  if(!logged) {
    let account;
    let button = event.target;
    ethereum.request({method: 'eth_requestAccounts'}).then(accounts => {
      account = accounts[0];

      button.textContent = 'Log off';

      document.getElementById("account-id").textContent = 'Account id: ' + account;
      ethereum.request({method: 'eth_getBalance', params: [account, 'latest']}).then(result => {
        // console.log(result);
        let wei = parseInt(result, 16);
        let balance = wei / (10 ** 18);

        document.getElementById("account-balance").textContent = 'Balance: ' + balance + " ETH"

      });
    });
    logged = true;
  }
  else {
    // ethereum.on('disconnect', handler: (error: ProviderRpcError) => void);

  }
});
