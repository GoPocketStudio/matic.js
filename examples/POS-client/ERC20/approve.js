const config = require('../config')
const utils = require('../utils')
const maticPOSClient = utils.getMaticPOSClient()

const execute = async () => {
  try {
    const tx = await maticPOSClient.approveERC20ForDeposit(config.root.DERC20, config.user.amount, {
      from: config.user.address,
      gasPrice: '900000000000',
      gas: '250000',
    })

    console.log(tx) // eslint-disable-line
  } catch (e) {
    console.error(e) // eslint-disable-line
  }
}
execute().then(() => process.exit(0))