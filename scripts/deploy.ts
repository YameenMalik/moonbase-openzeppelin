const { ethers, upgrades } = require("hardhat");

// scripts/deploy.js
async function main () {
    const Box = await ethers.getContractFactory('Box');
    console.log('Deploying Box...');
    const box = await upgrades.deployProxy(Box, [42]);
    await box.deployed();
    console.log('Box deployed to:', box.address);
  }
  
main()