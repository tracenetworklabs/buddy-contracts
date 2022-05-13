async function main() {
    const Claim = await ethers.getContractFactory("ClaimV1")
    let proxy = await upgrades.upgradeProxy("0x9cA714BcC6f1620B4C6FFd3931e1967193B1Ca47", Claim)
    console.log("Your upgraded proxy is done!", proxy.address)
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error)
        process.exit(1)
    })
