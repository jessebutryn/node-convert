#!/usr/bin/env node

const yargs = require('yargs');
const _ = require('lodash');
const convert = require('convert-units');

const argv = yargs
	.command('convert', 'Convert from one unit to another', {
		value: {
		describe: 'Value to convert',
		demand: true,
		alias: 'v'
		},
		from: {
			describe: 'Unit to convert from',
			demand: true,
			alias: 'f'
		},
		to: {
			describe: 'Unit to convert to',
			demand: true,
			alias: 't'
		}
	})
	.help()
	.argv;

var command = argv._[0]

if (command === 'convert') {
	try {
		const fromLong = convert().describe(argv.from).plural;
		const toLong = convert().describe(argv.to).plural;
		const result = convert(argv.value).from(argv.from).to(argv.to);
		
		console.log(`Converting ${argv.value} ${fromLong} to ${toLong}`)
		console.log(`${result} ${argv.to}`)
	
	} catch (e) {
		console.error(e);
	}
} else {
	console.log('Command ', command, ' not recognized');
}

