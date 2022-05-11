const { ethers } = require("hardhat")

async function main() {
    const accounts = await ethers.provider.listAccounts();
    console.log("Accounts", accounts[0]);

    const Buddy = await ethers.getContractFactory("Buddy")
    const buddyProxy = await Buddy.attach("0xD2bB6483fCc9415ee668066FB65BE827fB36E51A")

    console.log("Next token ID", await buddyProxy.getNextTokenId());

    const token721 = await ethers.getContractFactory("Token721");
    const Token721 = await token721.attach("0x2fAd792b99Ca771CF9eBAB6564eD70Da5EF017e4");
    // const Token721 = await token721.deploy();
    // await Token721.deployed();

    // console.log("ERC721 Token Contract:", Token721.address);
    // await Token721.initialize("Test721", "Test721");

    // await Token721.safeTransferFrom(accounts[0], "0x8099ce938AceB379b48E377f17a12E332aa85941", 1);

    await new Promise(res => setTimeout(res, 5000));
    await Token721.mint("0x6d4c72d6b441f004295aDca13B550fDF880aC994", 9);
    console.log("here");

    // await new Promise(res => setTimeout(res, 10000));
    // await Token721.approve(buddyProxy.address, 4);

    // await new Promise(res => setTimeout(res, 10000));
    // await buddyProxy.adminUpdateFeeToken(Token721.address, true); // USDC

    // await buddyProxy.mint("QmSYVzbrU5VwNXb6aYJNzFCpTziCCxTK8LXzeJtGaEvKim", Token721.address, 4, ["0"], ["0x0000000000000000000000000000000000000000"], ["test"], ["test"], {
    //     // value: await ethers.utils.parseEther('2'),
    // });
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error)
        process.exit(1)
    })
