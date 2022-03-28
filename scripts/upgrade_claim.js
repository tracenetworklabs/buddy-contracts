async function main() {
    const Claim = await ethers.getContractFactory("Claim")
    let proxy = await upgrades.upgradeProxy("Fill me", Claim)
    console.log("Your upgraded proxy is done!", proxy.address)
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error)
        process.exit(1)
    })
