async function main() {
    const Buddy = await ethers.getContractFactory("BuddyV1")
    let buddyProxy = await upgrades.upgradeProxy("0xf7c8913DF28B004F5C16DcC9ba021D03d76DEEF0", Buddy)
    console.log("Your upgraded proxy is done!", buddyProxy.address);
    console.log(await buddyProxy.owner());
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error)
        process.exit(1)
    })
