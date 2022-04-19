async function main() {
    const Claim = await ethers.getContractFactory("ClaimV1")
    let proxy = await upgrades.upgradeProxy("0xaa828f6c31722d1a9991f86dc1681bf2fa3b1e98", Claim)
    console.log("Your upgraded proxy is done!", proxy.address)
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error)
        process.exit(1)
    })
