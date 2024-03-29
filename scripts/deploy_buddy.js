const { ethers } = require("hardhat")

async function main() {
    const accounts = await ethers.provider.listAccounts();
    console.log("Accounts", accounts[0]);

    // Mainnet
    // const USDT = "0xc2132D05D31c914a87C6611C10748AEb04B58e8F"
    // const USDC = "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174"
    // const MATIC = "0x0000000000000000000000000000000000000000"

    // Mainnet
    // const PRICE_MATIC_USD = "0xAB594600376Ec9fD91F8e885dADF0CE036862dE0"
    // const PRICE_USDT_USD = "0x0A6513e40db6EB1b165753AD52E80663aeA50545";
    // const PRICE_USDC_USD = "0xfE4A8cc5b5B2366C1B58Bea3858e81843581b2F7";

    // Mainnet
    // const treasuryOwner = "0x40a124c4849A25B9b19b2e7aFC4f07302fBb67B1";
    // const buddyOwner = "0x8e9f0b9e549f0c9d1e996996b482eee10c8b980a";
    // const Trace = "0x4287F07CBE6954f9F0DecD91d0705C926d8d03A4"
    // const USX = "0x107065A122F92636a1358A70A0efe0F1A080a7e5"

    // const Treasury = ""
    // const erc721 = ""

    const USDT = "0xf2fe21e854c838c66579f62ba0a60ca84367cd8f"
    const USDC = "0xb0040280a0c97f20c92c09513b8c6e6ff9aa86dc"
    const MATIC = "0x0000000000000000000000000000000000000000"

    const PRICE_MATIC_USD = "0xd0D5e3DB44DE05E9F294BB0a3bEEaF030DE24Ada"
    const PRICE_USDT_USD = "0x92C09849638959196E976289418e5973CC96d645";
    const PRICE_USDC_USD = "0x572dDec9087154dC5dfBB1546Bb62713147e0Ab0";

    const USX = "0xBE72D7FDDB9d7969507beF69f439840957E0b47c"
    const Trace = "0xb0A2D971803e74843f158B22c4DAEc154f038515"
    const router = "0x8954AfA98594b838bda56FE4C12a09D7739D179b"
    const factory = "0x5757371414417b8c6caad45baef941abc7d3ab32"
    const erc721 = "0x2fAd792b99Ca771CF9eBAB6564eD70Da5EF017e4"
    
    const Treasury = "0x83Ef7A00E4520a3821317fc8dCF779616f2aBD06"

    const treasuryOwner = accounts[0];
    const buddyOwner = accounts[0];

    const mintFee = 1000000;

    const updateFee = 0;

    //// ************ DEPLOY TREASURY **************/////

    const buddyTreasury = await ethers.getContractFactory("BuddyTreasury");
    const treasuryProxy = await buddyTreasury.attach(Treasury);
    // const treasuryProxy = await upgrades.deployProxy(buddyTreasury, [treasuryOwner], { initializer: 'initialize' })
    await new Promise(res => setTimeout(res, 5000));
    console.log("Treasury proxy", treasuryProxy.address);
    console.log("Treasury admin", await treasuryProxy.isAdmin(treasuryOwner));

    //// ************ DEPLOY CONVERSION **************/////

    const Conversion = await ethers.getContractFactory("ConversionV1");
    const conversion = await upgrades.deployProxy(Conversion, { initializer: 'initialize' })
    await new Promise(res => setTimeout(res, 5000));
    console.log("conversion proxy", conversion.address);

    //// ************ ADD PRICE FEED ADDRESS **************/////

    await new Promise(res => setTimeout(res, 5000));
    await conversion.addToken(MATIC, PRICE_MATIC_USD);

    await new Promise(res => setTimeout(res, 5000));
    await conversion.addToken(USDC, PRICE_USDC_USD);

    await new Promise(res => setTimeout(res, 5000));
    await conversion.addToken(USDT, PRICE_USDT_USD);

    await new Promise(res => setTimeout(res, 5000));
    await conversion.addToken(USX, router);

    await new Promise(res => setTimeout(res, 5000));
    await conversion.addToken(Trace, router);

    await new Promise(res => setTimeout(res, 5000));
    await conversion.adminUpdate(USX, Trace, router, factory);

    //// ************ DEPLOY BUDDY **************/////
    const Buddy = await ethers.getContractFactory("BuddyV3")
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
    await buddyProxy.adminUpdateFeeToken(erc721, true); // USDC

    await new Promise(res => setTimeout(res, 5000));
    await buddyProxy.adminUpdateFeeToken(Trace, true); // USDC

    await new Promise(res => setTimeout(res, 5000));
    await buddyProxy.adminUpdateFeeToken(USX, true); // USDC

    // const token721 = await ethers.getContractFactory("Token721");
    // const Token721 = await token721.deploy();
    // await Token721.deployed();

    // console.log("ERC721 Token Contract:", Token721.address);
    // await Token721.initialize("Test", "Test721");

    // await new Promise(res => setTimeout(res, 5000));
    // await Token721.mint(accounts[0], 1);

    // await new Promise(res => setTimeout(res, 5000));
    // await Token721.approve(buddyProxy.address, 1);

    // await new Promise(res => setTimeout(res, 5000));
    // await buddyProxy.adminUpdateFeeToken(Token721.address, true); // erc721

    await new Promise(res => setTimeout(res, 5000));
    await buddyProxy.adminUpdateDeviation(5);

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
    // console.log("Next token ID", await buddyProxy.getNextTokenId());

    // await buddyProxy.mint("QmQh36CsceXZoqS7v9YQLUyxXdRmWd8YWTBUz7WCXsiVty", Token721.address, 1, ["0"], ["0x0000000000000000000000000000000000000000"], ["test"], ["test"], {
    //     // value: await ethers.utils.parseEther('2'),
    // });

    console.log("Next token ID", await buddyProxy.getNextTokenId());

    await buddyProxy.mint("QmQ9w553N7jSjcFD827BqC22H8Zd8sfi2GX2SZYhe72y1q", "0x0000000000000000000000000000000000000000", "12779080747049725", ["0"], ["0x0000000000000000000000000000000000000000"], ["test"], ["test"], "ERC20", {
        value: "12779080747049725",
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
