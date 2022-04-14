async function main() {
    const Buddy = await ethers.getContractFactory("BuddyV1")
    // let buddyProxy = await upgrades.upgradeProxy("0x5a11B3d6a2aD6a5cad39A9A84154bA95bD248Da1", Buddy)
    const buddyProxy = await Claim.attach("0x68d029Af1130E1Dc7fC82869aAa2188d664CE1f2")
    await buddyProxy.mint("QmQh36CsceXZoqS7v9YQLUyxXdRmWd8YWTBUz7WCXsiVty", "0x0000000000000000000000000000000000000000", 0, ["0"], ["0x0000000000000000000000000000000000000000"], ["test"], ["test"], {
        value: await ethers.utils.parseEther('2'),
    });
    // console.log("Your upgraded proxy is done!", buddyProxy.address);
    console.log(await buddyProxy.owner());
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error)
        process.exit(1)
    })
