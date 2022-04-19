const { ethers } = require("hardhat")

async function main() {
    const accounts = await ethers.provider.listAccounts();
    console.log("Accounts", accounts[0]);

    const treasuryOwner = accounts[0];

    //// ************ DEPLOY TREASURY **************/////

    // const buddyTreasury = await ethers.getContractFactory("BuddyTreasury");
    // const treasuryProxy = await upgrades.deployProxy(buddyTreasury, [treasuryOwner], { initializer: 'initialize' })
    // await new Promise(res => setTimeout(res, 5000));
    // console.log("Treasury proxy", treasuryProxy.address);
    // console.log("Treasury admin", await treasuryProxy.isAdmin(treasuryOwner));

    const conversion = "0xda7d531946381d37c1c52b12955253bbee3e6bc9";
    const claimFee = 200000000;

    const Treasury = "0x26684a3925f0e585947a003bc80778c95815d729"; //mumbai

    const USDT = "0xF2fE21E854c838C66579f62Ba0a60CA84367cd8F"
    const USDC = "0xb0040280A0C97F20C92c09513b8C6e6Ff9Aa86DC"
    const MATIC = "0x0000000000000000000000000000000000000000"

    const Claim = await ethers.getContractFactory("Claim")
    console.log("Deploying Claim, ProxyAdmin, and then Proxy...")
    const claimProxy = await upgrades.deployProxy(Claim, [Treasury, conversion, claimFee], { initializer: 'initialize' })
    console.log("Proxy of Claim deployed to:", claimProxy.address);
    await claimProxy.transferOwnership(accounts[0]);

    //// ************ ADD TOKEN TO BUDDY **************/////
    await new Promise(res => setTimeout(res, 5000));
    await claimProxy.adminUpdateFeeToken(MATIC, true); // Matic

    await new Promise(res => setTimeout(res, 5000));
    await claimProxy.adminUpdateFeeToken(USDT, true); // USDT

    await new Promise(res => setTimeout(res, 5000));
    await claimProxy.adminUpdateFeeToken(USDC, true); // USDC

    await new Promise(res => setTimeout(res, 5000));
    const Buddy = await ethers.getContractFactory("BuddyV1");
    const buddyProxy = await Buddy.attach("0x922613f26d1d7fd3e4674d967738d3bac63a35ca");
    await buddyProxy.approve(claimProxy.address, 1);

    // const Claim = await ethers.getContractFactory("Claim");
    // const claimProxy = await Claim.attach("0xaa828f6c31722d1a9991f86dc1681bf2fa3b1e98");

    await new Promise(res => setTimeout(res, 5000));
    await claimProxy.payFees("0x922613f26d1d7fd3e4674d967738d3bac63a35ca", 1, MATIC, 0);
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error)
        process.exit(1)
    })
