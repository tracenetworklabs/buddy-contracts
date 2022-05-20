const { ethers } = require("hardhat")

async function main() {
    const accounts = await ethers.provider.listAccounts();
    console.log("Accounts", accounts[0]);

    // const treasury = await ethers.getContractFactory("Buddy721")
    // let treasuryProxy = await upgrades.upgradeProxy("0x00958eD0DC8a8842081040d1CF3d8043b56d25dA", treasury, {
    //     // unsafeSkipStorageCheck: true
    // })
    console.log("Your upgraded proxy is done!", treasuryProxy.address);
    // console.log(await treasuryProxy.owner());

    // const buddy721 = await ethers.getContractFactory("Buddy721")
    // let Buddy721 = await buddy721.attach("0x00958eD0DC8a8842081040d1CF3d8043b56d25dA");

    // function sleep(ms) {
    //     return new Promise((resolve) => {
    //       setTimeout(resolve, ms);
    //     });
    //   }

    // for (let i = 1; 1 <= await Buddy721.getNextTokenId(); i++) {

    //     console.log(await Buddy721.mint("0xC794015D6Fd0eDA03014c7400dc59E77f85E9E82"));
    //     await sleep(20000);

    // }

}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error)
        process.exit(1)
    })
