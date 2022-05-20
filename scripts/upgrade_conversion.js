async function main() {

    const Conversion = await ethers.getContractFactory("Conversion")
    let conversionProxy = await upgrades.upgradeProxy("0x0069d9D3c4d62273611AB06D79825ECFd8D393BF", Conversion)
    console.log("Your upgraded proxy is done!", conversionProxy.address);
    console.log(await conversionProxy.owner());
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error)    
        process.exit(1)
    })
