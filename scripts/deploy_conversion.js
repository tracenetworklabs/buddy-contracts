const { ethers } = require("hardhat")

async function main() {
    const accounts = await ethers.provider.listAccounts();
    console.log("Accounts", accounts[0]);

    // const USDT = "0xc2132D05D31c914a87C6611C10748AEb04B58e8F"
    // const USDC = "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174"
    // const MATIC = "0x0000000000000000000000000000000000000000"

    // const PRICE_MATIC_USD = "0xAB594600376Ec9fD91F8e885dADF0CE036862dE0"
    // const PRICE_USDT_USD = "0x0A6513e40db6EB1b165753AD52E80663aeA50545";
    // const PRICE_USDC_USD = "0xfE4A8cc5b5B2366C1B58Bea3858e81843581b2F7";

    //// ************ DEPLOY CONVERSION **************/////

    const Conversion = await ethers.getContractFactory("ConversionV1");
    const conversion = await upgrades.deployProxy(Conversion, { initializer: 'initialize' })
    // await new Promise(res => setTimeout(res, 5000));
    console.log("conversion proxy", conversion.address);

    //// ************ ADD PRICE FEED ADDRESS **************/////

    // await new Promise(res => setTimeout(res, 5000));
    // await conversion.addToken(MATIC, PRICE_MATIC_USD);

    // await new Promise(res => setTimeout(res, 5000));
    // await conversion.addToken(USDC, PRICE_USDC_USD);

    // await new Promise(res => setTimeout(res, 5000));
    // await conversion.addToken(USDT, PRICE_USDT_USD);

    await new Promise(res => setTimeout(res, 5000));
    await conversion.adminUpdate("0xBE72D7FDDB9d7969507beF69f439840957E0b47c", "0x9c3C9283D3e44854697Cd22D3Faa240Cfb032889", "0x8954AfA98594b838bda56FE4C12a09D7739D179b", "0x5757371414417b8c6caad45baef941abc7d3ab32");
    console.log("here");
    await new Promise(res => setTimeout(res, 5000));
    console.log((await conversion.getSwapPrice("0x3813e82e6f7098b9583FC0F33a962D02018B6803", "0x9c3C9283D3e44854697Cd22D3Faa240Cfb032889")) / (100000000));

    console.log((await conversion.getTraceAmount(2500000000)) / 1000000000000000000);
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error)
        process.exit(1)
    })