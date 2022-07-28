async function main() {
    const Buddy = await ethers.getContractFactory("Buddy")
    let buddyProxy = await upgrades.forceImport("0x2DCda82fae61f31378B58955C1C65993B319047A", Buddy, {
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
