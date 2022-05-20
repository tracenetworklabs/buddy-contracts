const { ethers } = require("hardhat")

async function main() {
    const accounts = await ethers.provider.listAccounts();
    console.log("Accounts", accounts[0]);

    const claimOwner = "0x40a124c4849a25b9b19b2e7afc4f07302fbb67b1";
    // Testnet
    // const conversion = "0x703dd648c5a13a0c33b3a09054e540b743a6108f";
    // const claimFee = 10000000;
    // const Treasury = "0xef826f3d34aeee6fbac1796d6abf354d90fd6360"; //mumbai
    // const USDT = "0xF2fE21E854c838C66579f62Ba0a60CA84367cd8F"
    // const USDC = "0xb0040280A0C97F20C92c09513b8C6e6Ff9Aa86DC"
    // const MATIC = "0x0000000000000000000000000000000000000000"

    // Mainnet
    const conversion = "0x0069d9D3c4d62273611AB06D79825ECFd8D393BF";
    const claimFee = 2500000000;
    const Treasury = "0xd350854f1cA77EC5a2F151F5162121FEacc679F0"; // mainnet
    const USDT = "0xc2132D05D31c914a87C6611C10748AEb04B58e8F"
    const USDC = "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174"
    const MATIC = "0x0000000000000000000000000000000000000000"

    const Claim = await ethers.getContractFactory("ClaimV1")
    console.log("Deploying Claim, ProxyAdmin, and then Proxy...")
    const claimProxy = await upgrades.deployProxy(Claim, [Treasury, conversion, claimFee], { initializer: 'initialize' })
    console.log("Proxy of Claim deployed to:", claimProxy.address);

    //// ************ ADD TOKEN TO BUDDY **************/////
    await new Promise(res => setTimeout(res, 5000));
    await claimProxy.adminUpdateFeeToken(MATIC, true); // Matic

    await new Promise(res => setTimeout(res, 5000));
    await claimProxy.adminUpdateFeeToken(USDT, true); // USDT

    await new Promise(res => setTimeout(res, 5000));
    await claimProxy.adminUpdateFeeToken(USDC, true); // USDC

    await new Promise(res => setTimeout(res, 5000));
    await claimProxy.adminUpdateDeviation(5);

    await new Promise(res => setTimeout(res, 5000));
    await claimProxy.transferOwnership(claimOwner);

}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error)
        process.exit(1)
    })
