require("@nomicfoundation/hardhat-toolbox");
require('@oasisprotocol/sapphire-hardhat');

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.8",
  networks: {
    sapphire_testnet: {
      url: "https://testnet.sapphire.oasis.dev",
      accounts: ["ENTER_YOUR_PRIVATE_KEY_HERE"],
      chainId: 0x5aff,
    },
  },
};

