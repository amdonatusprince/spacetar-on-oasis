
const hre = require("hardhat");

async function main() {
  const Spacetar = await ethers.getContractFactory('SpacetarContract');
  const spacetar = await Spacetar.deploy();
  console.log('Spacetar deployed to:', spacetar.address);

  console.log("################## Interacting with Spacetar Contract ###################")

  const tx = await spacetar.sendGroupChatMessage(
    'There is still always light at the end of the tunnel!',
    'Hope & Healing Hub'
  );
  console.log('Send Message to Spacetar Group in', tx.hash);

}

// Contract Address
// 0x1f6A37FECCB212859Cd4184BdD059b304885f8b5

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
