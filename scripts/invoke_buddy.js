const { ethers } = require("hardhat")

async function main() {

    const USX = "0xBE72D7FDDB9d7969507beF69f439840957E0b47c"
    const Trace = "0xb0A2D971803e74843f158B22c4DAEc154f038515"

    const accounts = await ethers.provider.listAccounts();
    console.log("Accounts", accounts[0]);

    const Buddy = await ethers.getContractFactory("BuddyV1")
    const buddyProxy = await Buddy.attach("0xf7c8913DF28B004F5C16DcC9ba021D03d76DEEF0")

    console.log("Next token ID", await buddyProxy.getNextTokenId());

    const token721 = await ethers.getContractFactory("Token721");
    const Token721 = await token721.attach("0x2fAd792b99Ca771CF9eBAB6564eD70Da5EF017e4");
    // const Token721 = await token721.deploy();
    // await Token721.deployed();

    // console.log("ERC721 Token Contract:", Token721.address);
    // await Token721.initialize("Test721", "Test721");

    // await Token721.safeTransferFrom(accounts[0], "0x8099ce938AceB379b48E377f17a12E332aa85941", 1);

    // await new Promise(res => setTimeout(res, 5000));
    // await Token721.mint(accounts[0], 11);
    // console.log("here");

    // await new Promise(res => setTimeout(res, 5000));
    // await Token721.approve(buddyProxy.address, 11);

    // await new Promise(res => setTimeout(res, 10000));
    // await buddyProxy.adminUpdateFeeToken(Token721.address, true); // USDC

    // await buddyProxy.mint("QmSYVzbrU5VwNXb6aYJNzFCpTziCCxTK8LXzeJtGaEvKim", Token721.address, 11, ["0"], ["0x0000000000000000000000000000000000000000"], ["test"], ["test"], {
    //     // value: await ethers.utils.parseEther('2'),
    // });

    await buddyProxy.mint("QmP31LNr3J56HaWinxZaK29RN2YcRLQToDVFaHdta9pLYz", "0x0000000000000000000000000000000000000000", 0, ["0"], ["0x0000000000000000000000000000000000000000"], ["test"], ["test"], "ERC20", {
        value: await ethers.utils.parseEther('0.018'),
    });


    // //await new Promise(res => setTimeout(res, 5000));
    // await buddyProxy.adminUpdateFeeToken(Trace, true); // USDC

    // //await new Promise(res => setTimeout(res, 5000));
    // await buddyProxy.adminUpdateFeeToken(USX, true); // USDC

    // await buddyProxy.adminUpdateConversion("");
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error)
        process.exit(1)
    })
