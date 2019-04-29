var pjson = require('../package.json');
var program = require('commander');
var chalk = require('chalk');
var Inko = require('inko');
var inko = new Inko();

exports.inkocli = function () {
    program
        .version(pjson.version)
        .option('-k, --korean <input>', 'convert Korean into English')
        .option('-e, --english <input>', 'convert English into Korean')
        .parse(process.argv);

    if (program.korean) console.log(chalk.cyan(inko.ko2en(program.korean)));
    else if (program.english) console.log(chalk.green(inko.en2ko(program.english)));
};
