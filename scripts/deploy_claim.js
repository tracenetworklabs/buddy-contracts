const { ethers } = require("hardhat")

async function main() {
    const Claim = await ethers.getContractFactory("Claim")
    console.log("Deploying Claim, ProxyAdmin, and then Proxy...")
    const claimProxy = await upgrades.deployProxy(Claim, { initializer: 'initialize' })
    console.log("Proxy of Claim deployed to:", claimProxy.address);
    await claimProxy.transferOwnership("0x8E9f0b9E549f0c9d1E996996b482eee10c8B980a");
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error)
        process.exit(1)
    })
