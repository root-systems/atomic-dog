const { join } = require('path')
const { spawn } = require('child_process')

// reference:
// https://codecept.io/commands/

module.exports = {
  command: 'codeceptjs <subcommand> [options]',
  description: 'uses codeceptjs, see docs at https://codecept.io/commands/',
  builder: {},
  handler: argv => {
    // remove sub-command 'storybook' from args
    process.argv.splice(2, 1)

    // TODO: IK: better handling of stdio of spawn
    const proc = spawn('./node_modules/.bin/codeceptjs', process.argv.splice(2))
    console.log(`codeceptjs running...`)
  }
}
