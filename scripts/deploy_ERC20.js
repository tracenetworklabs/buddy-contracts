async function main() {
    // We get the contract to deploy
    const token = await ethers.getContractFactory("Buddy721");
    const USDToken = await token.deploy();
    await USDToken.deployed();
    console.log(USDToken.address);

    // console.log("Token Contract:", USDToken.address);
    // await USDToken.initialize("Token-721", "Token-721", 500);

    //// ************ DEPLOY BUDDY **************/////
    // const Buddy = await ethers.getContractFactory("Buddy721")
    // const buddyProxy = await upgrades.deployProxy(Buddy, ["Bitinning BUDDY Mint Pass", "Bitinning", 500], { initializer: 'initialize' })
    // console.log("Buddy Proxy:", buddyProxy.address);

    }

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });