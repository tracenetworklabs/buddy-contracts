async function main() {
    const USX = "0xBE72D7FDDB9d7969507beF69f439840957E0b47c"
    const Trace = "0x9c3C9283D3e44854697Cd22D3Faa240Cfb032889"
    
    const Buddy = await ethers.getContractFactory("BuddyV1")
    const buddyProxy = await Buddy.attach("0xf7c8913DF28B004F5C16DcC9ba021D03d76DEEF0")

    await new Promise(res => setTimeout(res, 5000));
    await buddyProxy.adminUpdateConversion("0x4b91e74485f7213Fa9310124a1933e47635c7FD1"); // USX

//     await new Promise(res => setTimeout(res, 5000));
//     await buddyProxy.adminUpdateFeeToken(Trace, true); // Trace
//     console.log(await buddyProxy.owner());
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error)
        process.exit(1)
    })
