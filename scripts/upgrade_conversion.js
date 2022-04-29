async function main() {
    const Conversion = await ethers.getContractFactory("ConversionV1")
    let conversionProxy = await upgrades.upgradeProxy("0x341A5418c0F58189b48f29031f8A21f5F7927425", Conversion)
    console.log("Your upgraded proxy is done!", conversionProxy.address);
    await new Promise(res => setTimeout(res, 5000));
    // await conversionProxy.adminUpdate("0xBE72D7FDDB9d7969507beF69f439840957E0b47c", "0x9c3C9283D3e44854697Cd22D3Faa240Cfb032889", "0x8954AfA98594b838bda56FE4C12a09D7739D179b", "0x5757371414417b8c6caad45baef941abc7d3ab32");
    console.log(await conversionProxy.owner());
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error)    
        process.exit(1)
    })
