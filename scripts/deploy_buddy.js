const { ethers } = require("hardhat")

async function main() {
    const accounts = await ethers.provider.listAccounts();
    console.log("Accounts", accounts[0]);

    const USDT = "0xc2132D05D31c914a87C6611C10748AEb04B58e8F"
    const USDC = "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174"
    const MATIC = "0x0000000000000000000000000000000000000000"

    // Mainnet
    // const PRICE_MATIC_USD = "0xAB594600376Ec9fD91F8e885dADF0CE036862dE0"
    // const PRICE_USDT_USD = "0x0A6513e40db6EB1b165753AD52E80663aeA50545";
    // const PRICE_USDC_USD = "0xfE4A8cc5b5B2366C1B58Bea3858e81843581b2F7";

    const PRICE_MATIC_USD = "0xd0D5e3DB44DE05E9F294BB0a3bEEaF030DE24Ada"
    const PRICE_USDT_USD = "0x92C09849638959196E976289418e5973CC96d645";
    const PRICE_USDC_USD = "0x572dDec9087154dC5dfBB1546Bb62713147e0Ab0";

    const treasuryOwner = "0x40a124c4849A25B9b19b2e7aFC4f07302fBb67B1";

    const buddyOwner = "0x8e9f0b9e549f0c9d1e996996b482eee10c8b980a";

    const mintFee = 2500000000;

    const updateFee = 1000000000;

    //// ************ DEPLOY TREASURY **************/////

    const buddyTreasury = await ethers.getContractFactory("BuddyTreasury");
    const treasuryProxy = await upgrades.deployProxy(buddyTreasury, [treasuryOwner], { initializer: 'initialize' })
    await new Promise(res => setTimeout(res, 5000));
    console.log("Treasury proxy", treasuryProxy.address);
    console.log("Treasury admin", await treasuryProxy.isAdmin(treasuryOwner));

    //// ************ DEPLOY CONVERSION **************/////

    const Conversion = await ethers.getContractFactory("Conversion");
    const conversion = await upgrades.deployProxy(Conversion, { initializer: 'initialize' })
    await new Promise(res => setTimeout(res, 5000));
    console.log("conversion proxy", conversion.address);

    //// ************ ADD PRICE FEED ADDRESS **************/////

    await new Promise(res => setTimeout(res, 10000));
    await conversion.addToken(MATIC, PRICE_MATIC_USD);

    await new Promise(res => setTimeout(res, 5000));
    await conversion.addToken(USDC, PRICE_USDC_USD);

    await new Promise(res => setTimeout(res, 5000));
    await conversion.addToken(USDT, PRICE_USDT_USD);

    //// ************ DEPLOY BUDDY **************/////
    const Buddy = await ethers.getContractFactory("Buddy")
    const buddyProxy = await upgrades.deployProxy(Buddy, [treasuryProxy.address, "TRACE BUDDY", "BUDDY", conversion.address], { initializer: 'initialize' })
    await new Promise(res => setTimeout(res, 5000));
    console.log("Buddy Proxy:", buddyProxy.address);

    await buddyProxy.adminUpdateFeeAmount(mintFee, updateFee); // Update mint and update fee

    //// ************ ADD TOKEN TO BUDDY **************/////
    await new Promise(res => setTimeout(res, 5000));
    await buddyProxy.adminUpdateFeeToken(MATIC, true); // Matic

    await new Promise(res => setTimeout(res, 5000));
    await buddyProxy.adminUpdateFeeToken(USDT, true); // USDT

    await new Promise(res => setTimeout(res, 5000));
    await buddyProxy.adminUpdateFeeToken(USDC, true); // USDC

    await new Promise(res => setTimeout(res, 5000));
    console.log("Deviation percent", await buddyProxy.adminUpdateDeviation(5));

    await new Promise(res => setTimeout(res, 5000));
    await buddyProxy.transferOwnership(buddyOwner);

    await new Promise(res => setTimeout(res, 5000));
    console.log("New admin Buddy", await buddyProxy.owner());

    await new Promise(res => setTimeout(res, 5000));
    console.log("Mint fee", await buddyProxy.getMintFee());

    await new Promise(res => setTimeout(res, 5000));
    console.log("Matic price", await conversion.convertMintFee(MATIC, mintFee));

    await new Promise(res => setTimeout(res, 5000));
    //Test Mint
    console.log("Next token ID", await buddyProxy.getNextTokenId());
    // await buddyProxy.mint("QmQh36CsceXZoqS7v9YQLUyxXdRmWd8YWTBUz7WCXsiVty", "0x0000000000000000000000000000000000000000", 0, ["0"], ["0x0000000000000000000000000000000000000000"], ["test"], ["test"], {
    //     value: await ethers.utils.parseEther('2'),
    // });
    // await new Promise(res => setTimeout(res, 5000));
    // console.log("Next token ID", await buddyProxy.getNextTokenId());
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error)
        process.exit(1)
    })
