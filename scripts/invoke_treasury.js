const { ethers } = require("hardhat")

async function main() {
    const accounts = await ethers.provider.listAccounts();
    console.log("Accounts", accounts[0]);

    const treasuryOwner = "0x40a124c4849A25B9b19b2e7aFC4f07302fBb67B1";

    //// ************ DEPLOY TREASURY **************/////

    const buddyTreasury = await ethers.getContractFactory("BuddyTreasury");
    const treasuryProxy = await upgrades.deployProxy(buddyTreasury, [treasuryOwner], { initializer: 'initialize' })
    await new Promise(res => setTimeout(res, 5000));
    console.log("Treasury proxy", treasuryProxy.address);
    console.log("Treasury admin", await treasuryProxy.isAdmin(treasuryOwner));

}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error)
        process.exit(1)
    })
