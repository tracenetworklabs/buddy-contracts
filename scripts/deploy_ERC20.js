async function main() {
    // We get the contract to deploy
    const token = await ethers.getContractFactory("Token");
    const USDToken = await token.deploy();
    await USDToken.deployed();

    console.log("Token Contract:", USDToken.address);
    await USDToken.initialize(" (PoS) Tether USD", "USDT", 6, "100000000000");

    const USDCToken = await token.deploy();
    await USDCToken.deployed();

    console.log("Token Contract:", USDCToken.address);
    await USDCToken.initialize("USD Coin (PoS)", "USDC", 6, "100000000000");

    }

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });