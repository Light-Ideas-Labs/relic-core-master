const hre = require("hardhat");

async function main() {
    // Get the contract to deploy
    const RelicswapV1Factory = await hre.ethers.getContractFactory("RelicswapV1Factory");

    // Deploy the contract
    const feeToSetter = "0x99680b10Ce654634f19c98D95aF2018D25DC81c5"; // Change this to the desired feeToSetter address
    const relicsFactory = await RelicswapV1Factory.deploy(feeToSetter);
    console.log("RelicswapV1Factory deployed to:", relicsFactory.address);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});