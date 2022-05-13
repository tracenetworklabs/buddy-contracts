async function main() {
    const USX = "0xBE72D7FDDB9d7969507beF69f439840957E0b47c"
    const Trace = "0xD028C2a5156069c7eFaeA40acCA7d9Da6f219A5f"
    const router = "0x8954AfA98594b838bda56FE4C12a09D7739D179b"

    const Conversion = await ethers.getContractFactory("Conversion")
    let conversionProxy = await upgrades.upgradeProxy("0x703dD648C5A13a0C33b3A09054E540b743a6108F", Conversion)
    console.log("Your upgraded proxy is done!", conversionProxy.address);
    console.log(await conversionProxy.owner());
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error)    
        process.exit(1)
    })
