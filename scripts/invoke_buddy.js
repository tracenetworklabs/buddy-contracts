async function main() {
    const USX = "0xBE72D7FDDB9d7969507beF69f439840957E0b47c"
    const Trace = "0x9c3C9283D3e44854697Cd22D3Faa240Cfb032889"
    
    const Buddy = await ethers.getContractFactory("Buddy")
    const buddyProxy = await Buddy.attach("0xD2bB6483fCc9415ee668066FB65BE827fB36E51A")

    console.log("Next token ID", await buddyProxy.getNextTokenId());

    // await buddyProxy.mint("QmQh36CsceXZoqS7v9YQLUyxXdRmWd8YWTBUz7WCXsiVty", "0x0000000000000000000000000000000000000000", 0, ["0"], ["0x0000000000000000000000000000000000000000"], ["test"], ["test"], {
    //     value: await ethers.utils.parseEther('0.01'),
    // });

    // await new Promise(res => setTimeout(res, 5000));
    // console.log("Next token ID", await buddyProxy.getNextTokenId());
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error)
        process.exit(1)
    })
