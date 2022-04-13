const { ethers } = require("hardhat")

async function main() {
    const accounts = await ethers.provider.listAccounts();
    console.log("Accounts", accounts[0]);

    const USDT = "0xD46e4D407bCb67E34a0AD161AEf235e2788C0206"
    const USDC = "0x9bb96cD894E18a8C73c5c9Cf8F3221eDD295ef0C"
    const MATIC = "0x0000000000000000000000000000000000000000"

    const PRICE_MATIC_USD = "0xd0D5e3DB44DE05E9F294BB0a3bEEaF030DE24Ada"
    const PRICE_USDT_USD = "0x92C09849638959196E976289418e5973CC96d645";
    const PRICE_USDC_USD = "0x572dDec9087154dC5dfBB1546Bb62713147e0Ab0";

    //// ************ DEPLOY TREASURY **************/////

    const buddyTreasury = await ethers.getContractFactory("BuddyTreasury");
    const treasuryProxy = await upgrades.deployProxy(buddyTreasury, [accounts[0]], { initializer: 'initialize' })
    await new Promise(res => setTimeout(res, 5000));
    console.log("Treasury proxy", treasuryProxy.address);
    console.log("Treasury admin", await treasuryProxy.isAdmin(accounts[0]));

    //// ************ DEPLOY CONVERSION **************/////

    const Conversion = await ethers.getContractFactory("Conversion");
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

    //// ************ DEPLOY BUDDY **************/////
    const Buddy = await ethers.getContractFactory("BuddyV1")
    const buddyProxy = await upgrades.deployProxy(Buddy, [treasuryProxy.address, "AVATAR", "AVT", conversion.address], { initializer: 'initialize' })
    await new Promise(res => setTimeout(res, 5000));
    console.log("Buddy Proxy:", buddyProxy.address);

    await buddyProxy.adminUpdateFeeAmount(2,2); // Update mint and update fee

    //// ************ ADD TOKEN TO BUDDY **************/////
    await new Promise(res => setTimeout(res, 5000));
    await buddyProxy.adminUpdateFeeToken(MATIC, true); // Matic

    await new Promise(res => setTimeout(res, 5000));
    await buddyProxy.adminUpdateFeeToken(USDT, true); // USDT

    await new Promise(res => setTimeout(res, 5000));
    await buddyProxy.adminUpdateFeeToken(USDC, true); // USDC

    await new Promise(res => setTimeout(res, 5000));
    await buddyProxy.transferOwnership(accounts[0]);

    await new Promise(res => setTimeout(res, 5000));
    console.log("New admin Buddy", await buddyProxy.owner());

    await new Promise(res => setTimeout(res, 5000));
    console.log("Mint fee", await buddyProxy.getMintFee());

    await new Promise(res => setTimeout(res, 5000));
    //Test Mint
    console.log("Next token ID", await buddyProxy.getNextTokenId());
    await buddyProxy.mint("QmQh36CsceXZoqS7v9YQLUyxXdRmWd8YWTBUz7WCXsiVty", "0x0000000000000000000000000000000000000000", ["0"], ["0x0000000000000000000000000000000000000000"], ["test"], ["test"], {
        value: await ethers.utils.parseEther('2'),
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
