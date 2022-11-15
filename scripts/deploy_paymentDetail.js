const { ethers } = require("hardhat")

async function main() {
    const accounts = await ethers.provider.listAccounts();
    console.log("Accounts", accounts[0]);

    const buddyTokenId = [970,
        979,
        980,
        994,
        1028,
        1038,
        1044,
        1089,
        1099,
        1199,
        1201,
        1202,
        1203,
        1204,
        1205
    ]
    const paymentToken = ["0x79D9dca73917d268c7C80ba27d4c555C903305dF",
        "0xD25075799434030692c8091324349545CC16A220",
        "0xD25075799434030692c8091324349545CC16A220",
        "0x17b66009Af459Dc8EbF37acF8a8b355379BE2FE5",
        "0x79D9dca73917d268c7C80ba27d4c555C903305dF",
        "0x79D9dca73917d268c7C80ba27d4c555C903305dF",
        "0x56abCdD00Dd165700C15b6d3f29593b8F0cCAD37",
        "0x56abCdD00Dd165700C15b6d3f29593b8F0cCAD37",
        "0x56abCdD00Dd165700C15b6d3f29593b8F0cCAD37",
        "0x56abCdD00Dd165700C15b6d3f29593b8F0cCAD37",
        "0x56abCdD00Dd165700C15b6d3f29593b8F0cCAD37",
        "0x56abCdD00Dd165700C15b6d3f29593b8F0cCAD37",
        "0x56abCdD00Dd165700C15b6d3f29593b8F0cCAD37",
        "0x56abCdD00Dd165700C15b6d3f29593b8F0cCAD37",
        "0x56abCdD00Dd165700C15b6d3f29593b8F0cCAD37"
    ]

    const feeAmount = [482,
        1,
        2,
        1465,
        659,
        193,
        25,
        52,
        38,
        49,
        44,
        55,
        43,
        54,
        39,
    ]


    const DataFeed = await ethers.getContractFactory("DataFeed");
    const DataFeedInstance = await DataFeed.deploy();
    await DataFeedInstance.deployed();
    await new Promise(res => setTimeout(res, 5000));
    console.log("DataFeed Contract:", DataFeedInstance.address);

    for (var i = 0; i < buddyTokenId.length; i++) {
        await new Promise(res => setTimeout(res, 10000));
        console.log(buddyTokenId[i], paymentToken[i], feeAmount[i]);
        await DataFeedInstance.paymentDetail(buddyTokenId[i], paymentToken[i], feeAmount[i]);
    }
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });