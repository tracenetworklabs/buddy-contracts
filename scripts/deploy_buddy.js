const { ethers } = require("hardhat")

async function main() {
    const buddyTreasury = await ethers.getContractFactory("BuddyTreasury");
    const treasuryProxy = await upgrades.deployProxy(buddyTreasury, ["0x40a124c4849A25B9b19b2e7aFC4f07302fBb67B1"],{ initializer: 'initialize' })
    console.log("Treasury proxy", treasuryProxy.address);
    console.log("Is admin", await treasuryProxy.isAdmin("0x40a124c4849A25B9b19b2e7aFC4f07302fBb67B1"));

    //// **************************/////

    const Usx = await ethers.getContractFactory("USX");
    const USX = await Usx.deploy();
    await USX.deployed();

    console.log("USX Contract:", USX.address);
    await USX.initialize("USX", "USX", 18, "1000000000000000000000000");
    console.log("Old admin", await USX.owner());
    
    
    await USX.transferOwnership("0x40a124c4849A25B9b19b2e7aFC4f07302fBb67B1");

    //// **************************/////

    const Buddy = await ethers.getContractFactory("Buddy")
    const buddyProxy = await upgrades.deployProxy(Buddy, [treasuryProxy.address, "AVATAR", "AVT"],{ initializer: 'initialize' })
    console.log("Buddy Proxy:", buddyProxy.address)
    await buddyProxy.adminUpdateToken(USX.address, true, "25000000000000000000", "10000000000000000000");
    await buddyProxy.transferOwnership("0xdC4A5fC7A3C2dd304F7B44a7954fD4E5cB64c076");
    
    await USX.transfer("0x40a124c4849A25B9b19b2e7aFC4f07302fBb67B1", "1000000000000000000000000");

    console.log("New admin USX", await USX.owner());

    console.log("New admin Buddy", await buddyProxy.owner());
    
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error)
        process.exit(1)
    })
