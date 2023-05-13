const chalk = require("chalk");



class Logger {
    constructor(options) {
        this.options = options;
    }

    log(message, level) {
        if (!level) level = "Web";
        console.log(
            `[${chalk.blueBright(new Date().toLocaleString())}] [${chalk.greenBright(
                level.toUpperCase()
            )}] ${message}`
        );
    }

    logCustom(message, level, color) {
        if (!level) level = "Web";
        console.log(
            `[${chalk.blueBright(new Date().toLocaleString())}] [${chalk[color](
                level.toUpperCase()
            )}] ${message}`
        );
    }


}

module.exports = Logger;