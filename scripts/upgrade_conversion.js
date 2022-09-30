async function main() {

    const Conversion = await ethers.getContractFactory("Conversion")
    let conversionProxy = await upgrades.upgradeProxy("0x7C6C2EAa88389E6aB48be96006F2a46c4027d8AB", Conversion)
    console.log("Your upgraded proxy is done!", conversionProxy.address);
    console.log(await conversionProxy.owner());
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error)    
        process.exit(1)
    })
