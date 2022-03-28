const { ethers } = require("hardhat")

async function main() {
    const blingTreasury = await ethers.getContractFactory("BlingTreasury");
    const BlingTreasury = await blingTreasury.deploy();
    console.log("Treasury contract address", BlingTreasury.address);
    const Buddy = await ethers.getContractFactory("Buddy")
    console.log("Deploying Buddy, ProxyAdmin, and then Proxy...")
    const proxy = await upgrades.deployProxy(Buddy, [BlingTreasury.address, "AVATAR", "AVT"],{ initializer: 'initialize' })
    console.log("Proxy of Buddy deployed to:", proxy.address)
    console.log(await proxy.owner());
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error)
        process.exit(1)
    })
