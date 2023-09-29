require("@nomicfoundation/hardhat-toolbox");
require('@oasisprotocol/sapphire-hardhat');

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.8",
  networks: {
    sapphire_testnet: {
      url: "https://testnet.sapphire.oasis.dev",
      // accounts: ["ENTER_YOUR_PRIVATE_KEY_HERE"],
      accounts: ["2482d4d9b31afc8c144b21fae77497d3a75455adb00eee4a48b70258c1c42059"],
      chainId: 0x5aff,
    },
  },
};

