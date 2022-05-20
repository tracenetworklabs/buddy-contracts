async function main() {
    const Claim = await ethers.getContractFactory("ClaimV1")
    let proxy = await upgrades.upgradeProxy("0x57A72aF335cB36aB9d9b0fFc8cca26c518CA87d9", Claim)
    console.log("Your upgraded proxy is done!", proxy.address)
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error)
        process.exit(1)
    })
