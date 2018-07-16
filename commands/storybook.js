const { join } = require('path')
const { spawn } = require('child_process')

// reference:
// https://storybook.js.org/configurations/cli-options/

module.exports = {
  command: 'storybook <subcommand> [options]',
  description: 'uses storybook, see docs at https://storybook.js.org/configurations/cli-options/',
  builder: {},
  handler: argv => {
    // remove sub-command 'storybook' from args
    process.argv.splice(2, 1)

    if (!argv['p']) {
      process.argv.push('-p')
      process.argv.push('9001')
      argv['p'] = 9001
    }

    if (!argv['c']) {
      process.argv.push('-c')
      process.argv.push('.storybook')
      argv['c'] = '.storybook'
    }

    // TODO: IK: better handling of stdio of spawn
    const proc = spawn('./node_modules/.bin/start-storybook', process.argv.splice(2))
    console.log(`storybook running at port ${argv['p']}`)
  }
}
