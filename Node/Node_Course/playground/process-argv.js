const yargs = require('yargs')

// File system and command Line
const command = process.argv[2]

if (command === 'add') {
    console.log('Adding notes! from PROCESS ARGV..')
} else {
    console.log('Nothing...')
}

//Argument parsing with YARGS
yargs.version('1.1.0')

yargs.command({
    command: 'add',
    describe: 'Adding a new note!',
    handler: function () {
        console.log('Adding a new note from console log.')
    }
})

console.log(yargs.argv)