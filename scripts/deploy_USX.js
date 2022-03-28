async function main() {
    // We get the contract to deploy
    const Usx = await ethers.getContractFactory("USX");
    const USX = await Usx.deploy();

    await USX.deployed();

    console.log("USX deployed to:", USX.address);

    await USX.initialize("USX", "USX", 18, "1000000000000000000000000");
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });