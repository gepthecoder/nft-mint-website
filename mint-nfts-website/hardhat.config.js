require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");

const dotenv = require("dotenv");

dotenv.config(); // to use it

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});


module.exports = {
  solidity: "0.8.4",
  networks: {
    rinkeby: {
      url: process.env.REACT_APP_RINKEBY_RPC_URL,
      accounts: [process.env.REACT_APP_KEY],
    },
  },
  etherscan: {
    apiKey: process.env.REACT_APP_ETHERSCAN_KEY,
  },
};
