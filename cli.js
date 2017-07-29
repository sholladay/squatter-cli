#!/usr/bin/env node

'use strict';

const meow = require('meow');
const squatter = require('squatter');
const ora = require('ora');

const cli = meow(`
    Usage
      $ squatter <...packages>

    Example
      $ squatter foo
      $ squatter foo bar
`);

const pkgNames = cli.input;
const numPackages = pkgNames.length;
if (numPackages === 0) {
    console.error('A package name is required.');
    process.exit(1);
}

const subject = numPackages > 1 ? 'packages' : 'package';
const spinner = ora(`Checking ${subject}...`);
spinner.start();
Promise.all(pkgNames.map(async (pkgName) => {
    return squatter(pkgName);
})).then((results) => {
    const someFailed = results.reduce((previous, isSquatter, index) => {
        const pkgName = pkgNames[index];
        if (isSquatter) {
            spinner.fail(pkgName + ' is squatted');
            return true;
        }
        spinner.succeed(pkgName + ' is not squatted');
        return previous;
    }, false);

    if (someFailed) {
        process.exit(1);
    }
}).catch((err) => {
    spinner.fail(err.message);
    process.exit(1);
});
