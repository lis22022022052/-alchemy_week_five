const { ethers } = require("hardhat");

//Deploed to rinkeby 0x86B450550049c5A63ab40FA89080D477F2184EC4
//Successfully verified contract BullBear on Etherscan.
//https://rinkeby.etherscan.io/address/0x86B450550049c5A63ab40FA89080D477F2184EC4#code

async function main() {
  const bullBearFactory = await ethers.getContractFactory("BullBear");
  const bullBear = await bullBearFactory.deploy(
    10,
    "0xECe365B379E1dD183B20fc5f022230C044d51404", // BTCUSD (Rinkeby)
    "0x6168499c0cFfCaCD319c818142124B7A15E857ab" //https://docs.chain.link/docs/vrf-contracts/#configurations VRF Coordinator
  );

  await bullBear.deployed();

  console.log("BullBear deployed to:", bullBear.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
