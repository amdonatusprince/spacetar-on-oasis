
const hre = require("hardhat");

async function main() {
  const Spacetar = await ethers.getContractFactory('SpacetarContract');
  // const spacetar = await Spacetar.deploy();
  const spacetar = await Spacetar.attach("0x1f6A37FECCB212859Cd4184BdD059b304885f8b5")
  // console.log('Spacetar deployed to:', spacetar.address);

  console.log("################## Interacting with Spacetar Contract ###################")
  console.log("Interacting with Spacetar Contract")
  // Send the transaction
  const tx = await spacetar.sendGroupChatMessage(
      "Congratulation!!! ",
      'Empowerment Circle'
  );
  console.log("interacting...")
  const receipt = await tx.wait();
  console.log(receipt)
  console.log('Send Message to Spacetar Group in', tx.hash);
  console.log("Done!")

}

// Contract Address
// 0x1f6A37FECCB212859Cd4184BdD059b304885f8b5

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
