const { ethers } = require("hardhat")

async function main() {
    // const buddyTreasury = await ethers.getContractFactory("BuddyTreasury");
    // const treasuryProxy = await upgrades.deployProxy(buddyTreasury, ["0x40a124c4849A25B9b19b2e7aFC4f07302fBb67B1"],{ initializer: 'initialize' })
    // console.log("Treasury proxy", treasuryProxy.address);
    // console.log("Is admin", await treasuryProxy.isAdmin("0x40a124c4849A25B9b19b2e7aFC4f07302fBb67B1"));

    //// **************************/////

    const Usx = await ethers.getContractFactory("USX");
    const USX = await Usx.attach("0x107065A122F92636a1358A70A0efe0F1A080a7e5");
    // const USX = await Usx.deploy();
    // await USX.deployed();

    // console.log("USX Contract:", USX.address);
    // await USX.initialize("USX", "USX", 18, "1000000000000000000000000");

    // console.log("Old admin", await USX.owner());
    
    // await USX.transferOwnership("0x40a124c4849A25B9b19b2e7aFC4f07302fBb67B1");

    //// **************************/////

    const Buddy = await ethers.getContractFactory("Buddy")
    const buddyProxy = await Buddy.attach("0xb7531662174615f125D5Dc6F68a274294a0acd22");
    // const buddyProxy = await upgrades.deployProxy(Buddy, ["0x08B1b86228dBD4e60C16ca8892CE3378dFAbF415", "AVATAR", "AVT"],{ initializer: 'initialize' })
    // console.log("Buddy Proxy:", buddyProxy.address)
    // await buddyProxy.adminUpdateToken("0x107065A122F92636a1358A70A0efe0F1A080a7e5", true, "25000000000000000000", "10000000000000000000");
    await buddyProxy.transferOwnership("0x8E9f0b9E549f0c9d1E996996b482eee10c8B980a");

    
    
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
