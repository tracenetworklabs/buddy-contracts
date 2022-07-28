const { ethers } = require("hardhat")

async function main() {

    const accounts = await ethers.provider.listAccounts();
    console.log("Accounts", accounts[0]);

    //// ************ DEPLOY TREASURY **************/////

    // const buddyTreasury = await ethers.getContractFactory("BuddyTreasury");
    // //  const treasuryProxy = await buddyTreasury.attach(Treasury);
    // const treasuryProxy = await upgrades.deployProxy(buddyTreasury, [accounts[0]], { initializer: 'initialize' })
    // //await new Promise(res => setTimeout(res, 5000));
    // console.log("Treasury proxy", treasuryProxy.address);
    // console.log("Treasury admin", await treasuryProxy.isAdmin(accounts[0]));

    // //// ************ DEPLOY CONVERSION **************/////

    // const Conversion = await ethers.getContractFactory("Conversion");
    // const conversion = await upgrades.deployProxy(Conversion, { initializer: 'initialize' })
    // //await new Promise(res => setTimeout(res, 5000));
    // console.log("conversion proxy", conversion.address);

    const Buddy = await ethers.getContractFactory("Buddy")
    const buddyProxy = await upgrades.deployProxy(Buddy, ["0x9b5c6E084F5432A46749754BC36B83f038FCbC3A", "TRACE BUDDY", "BUDDY", "0x94EE01F14927eeF4C4d6eA95f64Fd769Ec6e75aD"], { initializer: 'initialize' })

    console.log("Buddy", buddyProxy.address);

    // const blockNumBefore = await ethers.provider.getBlockNumber();
    // const blockBefore = await ethers.provider.getBlock(blockNumBefore);
    // const startTime = blockBefore.timestamp;
    // const thirtyDays = 30 * 24 * 60 * 60;
    // const endTime = startTime + thirtyDays;

    // const LimitedCollection = await ethers.getContractFactory("LCMasterFlat")
    // const LimitedCollectionProxy = await upgrades.deployProxy(LimitedCollection, { initializer: 'initialize' });
    // // await new Promise(res => setTimeout(res, 10000));

    // console.log("Owner", await LimitedCollectionProxy.owner());
    // console.log("LimitedCollectionProxy:", LimitedCollectionProxy.address);

    // //First Collection
    // await LimitedCollectionProxy.createCollection("Wardrobe-101");
    // // await new Promise(res => setTimeout(res, 10000));

    // const Collection = await LimitedCollectionProxy.getCollection(accounts[0], "Wardrobe-101");
    // console.log("First Collection Address", Collection);

    // //Second Collection
    // await LimitedCollectionProxy.createCollection("Stance-101");
    // // await new Promise(res => setTimeout(res, 10000));

    // const CollectionTwo = await LimitedCollectionProxy.getCollection(accounts[0], "Stance-101");
    // console.log("Second Collection Address", CollectionTwo);

    // //First Collection
    // const collection = await ethers.getContractFactory('DropsCollection');
    // const collectionInstance = await collection.attach(Collection);

    // await collectionInstance.initialize(treasuryProxy.address, "Wardrobe Collection", "Wardrobe-101", 20, startTime, endTime, false, conversion.address, ["Size", "Color", "Gender", "Category", "Theme", "Style"], ["Male", "Wardrobe Collection - NFT", "https://ipfs.io/ipfs/QmRRJFxfnys7Rf7DCWVwmU29EeArTJjghjn2vSQqoFtQ44/_thumbnail.png", "Casual Wear", "Casual", "prime", "drops", "true", "outfit"]);

    // //Second Collection
    // const collectionInstanceTwo = await collection.attach(CollectionTwo);

    // await collectionInstanceTwo.initialize(treasuryProxy.address, "Stance Collection", "Stance-101", 40, startTime, endTime, false, conversion.address, ["Size", "Color", "Gender", "Category", "Theme", "Style"], ["Male", "Wardrobe Collection - NFT", "https://ipfs.io/ipfs/QmRRJFxfnys7Rf7DCWVwmU29EeArTJjghjn2vSQqoFtQ44/_thumbnail.png", "Casual Wear", "Casual", "prime", "drops", "true", "outfit"]);

    // await collectionInstanceTwo.adminUpdateERC20FeeToken("0x0000000000000000000000000000000000000000", true); // Matic

    // await collectionInstanceTwo.mint("0x0000000000000000000000000000000000000000", 0, "ERC20", {
    //     value: 0
    // });

    // await collectionInstanceTwo.mint("0x0000000000000000000000000000000000000000", 0, "ERC20", {
    //     value: 0
    // });

    // await collectionInstance.adminUpdateERC20FeeToken("0x0000000000000000000000000000000000000000", true); // Matic

    // await collectionInstance.mint("0x0000000000000000000000000000000000000000", 0, "ERC20", {
    //     value: 0
    // });

    // await collectionInstance.mint("0x0000000000000000000000000000000000000000", 0, "ERC20", {
    //     value: 0
    // });

    // await collectionInstance.mint("0x0000000000000000000000000000000000000000", 0, "ERC20", {
    //     value: 0
    // });

    // await buddyProxy._lock([1,0], [Collection, Collection], 1);

    // console.log(await buddyProxy.getIsLocked(0, Collection,1));

    // await buddyProxy._release([0], [Collection], 1);

    // await buddyProxy._lock([2, 3], [Collection, Collection], 1);

    // await buddyProxy._release([2, 3], [Collection, Collection], 1);

    // await buddyProxy._lock([2,2], [Collection, CollectionTwo], 2);

    // await buddyProxy._release([2], [Collection], 2);

    // await buddyProxy._lock([1,1], [Collection, CollectionTwo], 2);

    // await buddyProxy._release([2,1,0], [CollectionTwo, CollectionTwo,Collection], 2);

}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error)
        process.exit(1)
    })
