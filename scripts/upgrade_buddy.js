async function main() {
    const Buddy = await ethers.getContractFactory("Buddy")
    let proxy = await upgrades.upgradeProxy("Fill me", Buddy)
    console.log("Your upgraded proxy is done!", proxy.address)
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error)
        process.exit(1)
    })
