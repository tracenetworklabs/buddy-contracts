async function main() {
    const Buddy = await ethers.getContractFactory("BuddyV1")
    let buddyProxy = await upgrades.upgradeProxy("0x922613f26d1d7fD3e4674D967738d3bAc63A35Ca", Buddy)
    console.log("Your upgraded proxy is done!", buddyProxy.address);
    console.log(await buddyProxy.owner());
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error)
        process.exit(1)
    })
