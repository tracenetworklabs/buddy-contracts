const { ethers } = require("hardhat")

async function main() {
    const Claim = await ethers.getContractFactory("Claim")
    console.log("Deploying Claim, ProxyAdmin, and then Proxy...")
    const proxy = await upgrades.deployProxy(Claim, { initializer: 'initialize' })
    console.log("Proxy of Claim deployed to:", proxy.address)
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error)
        process.exit(1)
    })
