const { ethers } = require("hardhat")

async function main() {
    const accounts = await ethers.provider.listAccounts();
    console.log("Accounts", accounts[0]);

    // testnet 
    // const USDT = "0xf2fe21e854c838c66579f62ba0a60ca84367cd8f"
    // const USDC = "0xb0040280a0c97f20c92c09513b8c6e6ff9aa86dc"
    // const MATIC = "0x0000000000000000000000000000000000000000"

    // const PRICE_MATIC_USD = "0xd0D5e3DB44DE05E9F294BB0a3bEEaF030DE24Ada"
    // const PRICE_USDT_USD = "0x92C09849638959196E976289418e5973CC96d645";
    // const PRICE_USDC_USD = "0x572dDec9087154dC5dfBB1546Bb62713147e0Ab0";

    // const USX = "0xBE72D7FDDB9d7969507beF69f439840957E0b47c"
    // const Trace = "0xb0A2D971803e74843f158B22c4DAEc154f038515"
    // const router = "0x8954AfA98594b838bda56FE4C12a09D7739D179b"
    // const factory = "0x5757371414417b8c6caad45baef941abc7d3ab32"
    // const StableToken = USDC

    // const NFTToken = "0x2fAd792b99Ca771CF9eBAB6564eD70Da5EF017e4";


    // Mainnet
    const USDT = "0xc2132D05D31c914a87C6611C10748AEb04B58e8F"
    const USDC = "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174"
    const MATIC = "0x0000000000000000000000000000000000000000"

    const PRICE_MATIC_USD = "0xAB594600376Ec9fD91F8e885dADF0CE036862dE0"
    const PRICE_USDT_USD = "0x0A6513e40db6EB1b165753AD52E80663aeA50545";
    const PRICE_USDC_USD = "0xfE4A8cc5b5B2366C1B58Bea3858e81843581b2F7";

    const USX = "0x107065A122F92636a1358A70A0efe0F1A080a7e5"
    const Trace = "0x4287F07CBE6954f9F0DecD91d0705C926d8d03A4"
    const router = "0xa5E0829CaCEd8fFDD4De3c43696c57F7D7A678ff"
    const factory = "0x5757371414417b8c6caad45baef941abc7d3ab32"
    // const StableToken = USDC

    //// ************ DEPLOY CONVERSION **************/////

    const Conversion = await ethers.getContractFactory("Conversion");
    //const conversion = await upgrades.deployProxy(Conversion, { initializer: 'initialize' })
    const conversion = await Conversion.deploy(Conversion);
    // await new Promise(res => setTimeout(res, 5000));
    // const conversion = await Conversion.attach("0x460F02340B2001a2498C439d3187fc551e39bcAa");
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

    // await new Promise(res => setTimeout(res, 5000));
    // await conversion.addToken(NFTToken, router);

    await new Promise(res => setTimeout(res, 5000));
    await conversion.adminUpdate(USX, Trace, router, factory);
    
    await new Promise(res => setTimeout(res, 5000));
    await conversion.getERC20Details(MATIC);

    await new Promise(res => setTimeout(res, 5000));
    await conversion.getERC20Details(USDC);

    await new Promise(res => setTimeout(res, 5000));
    await conversion.getERC20Details(USDT);

    await new Promise(res => setTimeout(res, 5000));
    await conversion.getERC20Details(USX);

    await new Promise(res => setTimeout(res, 5000));
    await conversion.getERC20Details(Trace);

    await new Promise(res => setTimeout(res, 5000));
    await conversion.getERC721Details("0xCe84fdE7c35CdFab56daf8f12208720917845d49");

    await new Promise(res => setTimeout(res, 5000));
    await conversion.getERC721Details("0x0E4721B6e54d11B640Da53a6b3C364759Ae76522");

    await new Promise(res => setTimeout(res, 5000));
    await conversion.getERC721Details("0x4682D8fBd1c136d7bDF67abb3cBF5c35bf1E8F96");

    await new Promise(res => setTimeout(res, 5000));
    await conversion.getERC721Details("0x798Df33C5a46C069D90cd82997e2B14B8f273Cca");
    
    await new Promise(res => setTimeout(res, 5000));
    await conversion.getERC721Details("0x79D9dca73917d268c7C80ba27d4c555C903305dF");

    await conversion.getERC721Details("0x17b66009Af459Dc8EbF37acF8a8b355379BE2FE5");

}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error)
        process.exit(1)
    })