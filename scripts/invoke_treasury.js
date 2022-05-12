const { ethers } = require("hardhat")

async function main() {
    const accounts = await ethers.provider.listAccounts();
    console.log("Accounts", accounts[0]);

    const treasury = await ethers.getContractFactory("Treasury")
    let treasuryProxy = await upgrades.upgradeProxy("0xef826f3d34aeEE6fbAc1796D6AbF354d90fD6360", treasury, {
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
