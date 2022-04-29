const { ethers } = require("hardhat")

async function main() {
    const accounts = await ethers.provider.listAccounts();
    console.log("Accounts", accounts[0]);

    const USDT = "0xf2fe21e854c838c66579f62ba0a60ca84367cd8f"
    const USDC = "0xb0040280a0c97f20c92c09513b8c6e6ff9aa86dc"
    const MATIC = "0x0000000000000000000000000000000000000000"

    const PRICE_MATIC_USD = "0xd0D5e3DB44DE05E9F294BB0a3bEEaF030DE24Ada"
    const PRICE_USDT_USD = "0x92C09849638959196E976289418e5973CC96d645";
    const PRICE_USDC_USD = "0x572dDec9087154dC5dfBB1546Bb62713147e0Ab0";

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

    // await new Promise(res => setTimeout(res, 5000));
    // await conversion.adminUpdate("0xBE72D7FDDB9d7969507beF69f439840957E0b47c", "0x9c3C9283D3e44854697Cd22D3Faa240Cfb032889", "0x8954AfA98594b838bda56FE4C12a09D7739D179b", "0x5757371414417b8c6caad45baef941abc7d3ab32");
    // console.log("here");
    // await new Promise(res => setTimeout(res, 5000));
    // console.log((await conversion.getSwapPrice("0x3813e82e6f7098b9583FC0F33a962D02018B6803", "0x9c3C9283D3e44854697Cd22D3Faa240Cfb032889")) / (100000000));

    // console.log((await conversion.getTraceAmount(2500000000)) / 1000000000000000000);
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error)
        process.exit(1)
    })