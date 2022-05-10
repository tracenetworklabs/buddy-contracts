async function main() {
    const Buddy = await ethers.getContractFactory("BuddyV1")
    let buddyProxy = await upgrades.upgradeProxy("0xD2bB6483fCc9415ee668066FB65BE827fB36E51A", Buddy, {
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
