const { ethers } = require("hardhat")

async function main() {
    const accounts = await ethers.provider.listAccounts();
    console.log("Accounts", accounts[0]);

    const treasury = await ethers.getContractFactory("BuddyTreasury")
    let treasuryProxy = await upgrades.upgradeProxy("0x8099ce938AceB379b48E377f17a12E332aa85941", treasury, {
        // unsafeSkipStorageCheck: true
    })
    console.log("Your upgraded proxy is done!", treasuryProxy.address);
    // console.log(await treasuryProxy.owner());

}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error)
        process.exit(1)
    })
