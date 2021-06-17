// We require the Hardhat Runtime Environment explicitly here. This is optional 
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile 
  // manually to make sure everything is compiled
  // await hre.run('compile');

  let token1Address, token2Address;

  const Token1 = await hre.ethers.getContractFactory("Token1");
  const Token2 = await hre.ethers.getContractFactory("Token2");
  const token1Factory = await Token1.deploy();
  const token2Factory = await Token2.deploy();
  token1Address = token1Factory.address
  token2Address = token2Factory.address

  console.log("Token 1 is deployed to address: ", token1Address)
  console.log("Token 2 is deployed to address: ", token2Address)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
