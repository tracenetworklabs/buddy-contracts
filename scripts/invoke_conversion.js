const { ethers } = require("hardhat")

async function main() {
    const accounts = await ethers.provider.listAccounts();
    console.log("Accounts", accounts[0]);

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

    const Conversion = await ethers.getContractFactory("Conversion")
    const conversion = await Conversion.attach("0x0069d9D3c4d62273611AB06D79825ECFd8D393BF");

    await new Promise(res => setTimeout(res, 5000));
    await conversion.addToken(USX, router);

    await new Promise(res => setTimeout(res, 5000));
    await conversion.addToken(Trace, router);

    // await new Promise(res => setTimeout(res, 5000));
    // await conversion.addToken(NFTToken, router);

    await new Promise(res => setTimeout(res, 5000));
    await conversion.adminUpdate(USX, Trace, router, factory);

}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error)
        process.exit(1)
    })
