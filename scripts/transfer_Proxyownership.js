const { ethers } = require("hardhat")

async function main() {
    const accounts = await ethers.provider.listAccounts();
    console.log("Accounts", accounts[0]);
    // console.log(await upgrades.admin.changeProxyAdmin("0xC974eEeB25F89AA53be1D450210a2BA58D3626C8", "0x325bE92739624dcECd4C97112DF3Ab22259b7B2c"));

    await upgrades.admin.transferProxyAdminOwnership(accounts[0]);
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error)
        process.exit(1)
    })
