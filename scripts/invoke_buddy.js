const { ethers } = require("hardhat")

async function main() {

    const accounts = await ethers.provider.listAccounts();
    console.log("Accounts", accounts[0]);

    //// ************ DEPLOY TREASURY **************/////

    const conversion = "0x0069d9D3c4d62273611AB06D79825ECFd8D393BF"
    const Treasury = "0xd350854f1ca77ec5a2f151f5162121feacc679f0"
    const MATIC = "0x0000000000000000000000000000000000000000"

    const USDT = "0xc2132D05D31c914a87C6611C10748AEb04B58e8F"
    const USDC = "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174"
    const erc721 = "0x4682d8fbd1c136d7bdf67abb3cbf5c35bf1e8f96" //NFT FIED BUDDY Mint Pass

    const Buddy = await ethers.getContractFactory("BuddyV4")
    // const buddyProxy = await Buddy.deploy();
    // await buddyProxy.deployed();
    // const buddyProxy = await upgrades.deployProxy(Buddy, [Treasury, "TRACE BUDDY", "BUDDY", conversion], { initializer: 'initialize' })
    const buddyProxy = await Buddy.attach("0x016263918C053490aeb2399E85860E8f9665040B");
    // await new Promise(res => setTimeout(res, 5000));
    console.log("Buddy Proxy:", buddyProxy.address);

    // await new Promise(res => setTimeout(res, 5000));
    // await buddyProxy.adminUpdateDeviation(5);

    // await buddyProxy.mint("QmZbwom1K41GQoAwKPQfwaMK49wCrXwMBCkBvHx4vJAZSh", "0x0000000000000000000000000000000000000000", "12779080747049725", ["0"], ["0x0000000000000000000000000000000000000000"], ["test"], ["test"], "ERC20", {
    //     value: "12779080747049725",
    // });

    // await buddyProxy.adminUpdateFeeAmount(1000000, 1000000); // Update mint and update fee
    // await new Promise(res => setTimeout(res, 5000));
    // await new Promise(res => setTimeout(res, 5000));
    await buddyProxy.adminUpdateFeeToken(MATIC, true, 0); // Matic

    await new Promise(res => setTimeout(res, 5000));
    await buddyProxy.adminUpdateFeeToken(USDT, true, 0); // USDT

    await new Promise(res => setTimeout(res, 5000));
    await buddyProxy.adminUpdateFeeToken(USDC, true, 0); // USDC

    await new Promise(res => setTimeout(res, 5000));
    await buddyProxy.adminUpdateFeeToken(erc721, true, 0); // USDC

}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error)
        process.exit(1)
    })
