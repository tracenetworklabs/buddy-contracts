const { ethers } = require("hardhat")

async function main() {
    const accounts = await ethers.provider.listAccounts();
    console.log("Accounts", accounts[0]);

    const USDT = "0xD46e4D407bCb67E34a0AD161AEf235e2788C0206"
    const USDC = "0x9bb96cD894E18a8C73c5c9Cf8F3221eDD295ef0C"

    const buddyTreasury = await ethers.getContractFactory("BuddyTreasury");
    const treasuryProxy = await upgrades.deployProxy(buddyTreasury, [accounts[0]], { initializer: 'initialize' })
    await new Promise(res => setTimeout(res, 5000));
    console.log("Treasury proxy", treasuryProxy.address);
    console.log("Is admin", await treasuryProxy.isAdmin(accounts[0]));

    //// **************************/////

    const Buddy = await ethers.getContractFactory("BuddyV1")
    const buddyProxy = await upgrades.deployProxy(Buddy, [treasuryProxy.address, "AVATAR", "AVT"], { initializer: 'initialize' })
    await new Promise(res => setTimeout(res, 5000));
    console.log("Buddy Proxy:", buddyProxy.address)
    await buddyProxy.adminUpdateToken("0x0000000000000000000000000000000000000000", true); // Matic

    // await new Promise(res => setTimeout(res, 5000));
    // await buddyProxy.adminUpdateToken(USDT, true); // USDT

    // await new Promise(res => setTimeout(res, 5000));
    // await buddyProxy.adminUpdateToken(USDC, true); // USDC

    await new Promise(res => setTimeout(res, 5000));
    await buddyProxy.adminUpdateFees(1, 1);

    // await new Promise(res => setTimeout(res, 5000));
    // await buddyProxy.transferOwnership(accounts[0]);

    // await new Promise(res => setTimeout(res, 5000));
    // console.log("New admin Buddy", await buddyProxy.owner());

    await new Promise(res => setTimeout(res, 5000));
    console.log("Mint fee", await buddyProxy.mintFee());

    await new Promise(res => setTimeout(res, 5000));
    console.log("Mint fee Price", await buddyProxy.getLatestPrice1(1));

    await new Promise(res => setTimeout(res, 5000));
    console.log("Price", await buddyProxy.price());

    await new Promise(res => setTimeout(res, 5000));
    //Test Mint
    console.log("Next token ID", await buddyProxy.getNextTokenId());
    await buddyProxy.mint("QmQh36CsceXZoqS7v9YQLUyxXdRmWd8YWTBUz7WCXsiVty", "0x0000000000000000000000000000000000000000", ["0"], ["0x0000000000000000000000000000000000000000"], ["test"], ["test"], {
        value:  await ethers.utils.parseEther('1'),
    });
    await new Promise(res => setTimeout(res, 5000));
    console.log("Next token ID", await buddyProxy.getNextTokenId());
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error)
        process.exit(1)
    })
