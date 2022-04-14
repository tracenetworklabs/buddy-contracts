async function main() {
    const Buddy = await ethers.getContractFactory("BuddyV1")
    let buddyProxy = await upgrades.upgradeProxy("0x5a11B3d6a2aD6a5cad39A9A84154bA95bD248Da1", Buddy)
    console.log("Your upgraded proxy is done!", buddyProxy.address);
    console.log(await buddyProxy.owner());
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error)
        process.exit(1)
    })
