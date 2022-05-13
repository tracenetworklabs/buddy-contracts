async function main() {

    const Conversion = await ethers.getContractFactory("ClaimConversion")
    let conversionProxy = await upgrades.upgradeProxy("0xDa7d531946381D37c1c52B12955253BbEe3e6bc9", Conversion)
    console.log("Your upgraded proxy is done!", conversionProxy.address);
    console.log(await conversionProxy.owner());
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error)    
        process.exit(1)
    })
