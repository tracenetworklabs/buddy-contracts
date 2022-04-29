async function main() {
    const Conversion = await ethers.getContractFactory("ConversionV1")
    let conversionProxy = await upgrades.upgradeProxy("0x31DF8dc3261f6913d2Da145188eCE2d4F8Dc193F", Conversion)
    console.log("Your upgraded proxy is done!", conversionProxy.address);
    await new Promise(res => setTimeout(res, 5000));
    // await conversionProxy.adminUpdate("0x107065A122F92636a1358A70A0efe0F1A080a7e5", "0x4287F07CBE6954f9F0DecD91d0705C926d8d03A4", "0xa5E0829CaCEd8fFDD4De3c43696c57F7D7A678ff");
    console.log(await buddyProxy.owner());
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error)    
        process.exit(1)
    })
