const { ethers } = require("hardhat")

async function main() {
    const accounts = await ethers.provider.listAccounts();
    console.log("Accounts", accounts[0]);
    // We get the contract to deploy
    const token = await ethers.getContractFactory("BuddyV3");
    const instance721 = await token.deploy();
    await instance721.deployed();

    console.log("Token Contract:", instance721.address);
    // await instance721.initialize("NFT FIED BUDDY Mint Pass", "NFTFIED", 200);

    // await new Promise(res => setTimeout(res, 5000));
    // await instance721.adminUpdateBaseURI("https://ipfs.io/ipfs/QmNuifCBxyPDXf5wgC3ZzbstYZfar2fkQhPteg7jKkXNKi/")

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