async function main() {
    const Buddy = await ethers.getContractFactory("Buddy")
    let buddyProxy = await upgrades.upgradeProxy("0x223352b25b3Fd974a5c9E8b675F127E187756D55", Buddy)
    console.log("Your upgraded proxy is done!", buddyProxy.address);
    // const buddyProxy = await Buddy.attach("0x016506702D2e1B441ca661615EE929F798931B7e");
    await buddyProxy.adminUpdateToken("0x54790d4503bf557e53EfF34A449929ee21DD9583", true, "25000000000000000000", "10000000000000000000");
    await buddyProxy.transferOwnership("0x8E9f0b9E549f0c9d1E996996b482eee10c8B980a");
    console.log(await buddyProxy.owner());
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error)
        process.exit(1)
    })
