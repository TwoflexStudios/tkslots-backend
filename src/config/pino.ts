
import chalk from 'chalk';
import moment from 'moment';

const logger = {
    info: (message: string) => console.log(`${chalk.bgBlue.white(' INFO ')} ${chalk.blue(moment().format('YYYY-MM-DD HH:mm:ss'))} ${message}`),
    error: (message: string) => console.error(`${chalk.bgRed.white(' ERROR ')} ${chalk.red(moment().format('YYYY-MM-DD HH:mm:ss'))} ${message}`),
    warn: (message: string) => console.warn(`${chalk.bgYellow.black(' WARN ')} ${chalk.yellow(moment().format('YYYY-MM-DD HH:mm:ss'))} ${message}`),
    debug: (message: string) => console.debug(`${chalk.bgMagenta.white(' DEBUG ')} ${chalk.magenta(moment().format('YYYY-MM-DD HH:mm:ss'))} ${message}`),
    success: (message: string) => console.log(`${chalk.bgGreen.black(' SUCCESS ')} ${chalk.green(moment().format('YYYY-MM-DD HH:mm:ss'))} ${message}`),
}

export default logger;