async function main() {
    const Claim = await ethers.getContractFactory("ClaimV1")
    let proxy = await upgrades.upgradeProxy("0x68d029Af1130E1Dc7fC82869aAa2188d664CE1f2", Claim)
    console.log("Your upgraded proxy is done!", proxy.address)
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error)
        process.exit(1)
    })
