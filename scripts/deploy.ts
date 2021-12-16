// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
import { ethers } from 'hardhat'

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy
  // const Greeter = await ethers.getContractFactory("Greeter");
  // const greeter = await Greeter.deploy("Hello, Hardhat!");

  // await greeter.deployed();

  // console.log("Greeter deployed to:", greeter.address);
  // const NFTMarket = await ethers.getContractFactory('NFTMarket')
  // const nftMarket = await NFTMarket.deploy()

  // await nftMarket.deployed()
  // console.log('Market deployed to:', nftMarket.address)

  // const NFT = await ethers.getContractFactory('NFT')
  // const nft = await NFT.deploy(nftMarket.address)
  // await nft.deployed()
  // console.log('nft deployed to:', nft.address)
  const FairHomeBills = await ethers.getContractFactory('FairHomeBills')
  const fairHomeBills = await FairHomeBills.deploy(
    100,
    '0x7812B090d1a3Ead77B5D8F470D3faCA900A6ccB9'
  )
  await fairHomeBills.deployed()
  console.log('New HomeBill deployed to: ', fairHomeBills.address)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
