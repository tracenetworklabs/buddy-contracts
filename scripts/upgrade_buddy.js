async function main() {
    const Buddy = await ethers.getContractFactory("BuddyV3")
    let buddyProxy = await upgrades.upgradeProxy("0xB249361c2Bef9f75b32E13ca6171897E11Bb737D", Buddy, {
        // unsafeSkipStorageCheck: true
    })
    console.log("Your upgraded proxy is done!", buddyProxy.address);
    console.log(await buddyProxy.owner());
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error)
        process.exit(1)
    })
