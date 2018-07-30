var pjson = require('../package.json');
var program = require('commander');
var chalk = require('chalk');
var Inko = require('inko');
var inko = new Inko();

exports.inkocli = function () {
    program
        .version(pjson.version)
        .option('-k, --korean <input>', 'convert English into Korean')
        .option('-e, --english <input>', 'convert Korean into English')
        .parse(process.argv);

    if (program.korean) console.log(chalk.cyan(inko.en2ko(program.korean)));
    else if (program.english) console.log(chalk.green(inko.ko2en(program.english)));
};
