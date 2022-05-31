const { ethers } = require("hardhat")

async function main() {
    const accounts = await ethers.provider.listAccounts();
    console.log("Accounts", accounts[0]);

    const buddy721 = await ethers.getContractFactory("Buddy721")
    let Buddy721 = await buddy721.attach("0x4682D8fBd1c136d7bDF67abb3cBF5c35bf1E8F96");

    function sleep(ms) {
        return new Promise((resolve) => {
            setTimeout(resolve, ms);
        });
    }

    console.log(await Buddy721.getNextTokenId());

    for (let i = 41; 1 <= 200; i++) {

        console.log(await Buddy721.mint("0xE8408313fe1C8Ad8292B5550Da5c88b97437DddA"));
        await sleep(10000);
        console.log(await Buddy721.getNextTokenId());

    }

}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error)
        process.exit(1)
    })
