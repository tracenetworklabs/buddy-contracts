async function main() {
    // We get the contract to deploy
    const Usx = await ethers.getContractFactory("USX");
    const USX = await Usx.deploy();
    await USX.deployed();

    console.log("USX Contract:", USX.address);
    await USX.initialize("USX", "USX", 18, "1000000000000000000000000");

    console.log("Old admin", await USX.owner());
    
    await USX.transferOwnership("0x40a124c4849A25B9b19b2e7aFC4f07302fBb67B1");
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });