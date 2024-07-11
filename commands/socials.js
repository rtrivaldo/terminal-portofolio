import chalk from "chalk";
import { theme } from "../theme.js";
import open from "open";

function socials(){
    console.log(theme.body(`${theme.header("Here are my social links!")}
        
${theme.header("[+] Email:")} rtrivaldo05@gmailcom
${theme.header("[+] LinkedIn:")} ${chalk.underline("https://www.linkedin.com/in/rivaldo-tandoko/")}
${theme.header("[+] Github:")} ${chalk.underline("https://github.com/rtrivaldo")}

Use 'email', 'linkedin', or 'github' to open the respective profile
eg: 'linkedin'`));
}

function email() {
    console.log(chalk.green('Opening Email...'));
    open('mailto:rtrivaldo05@gmailcom');
}

function linkedin() {
    console.log(chalk.green('Opening LinkedIn profile...'));
    open('https://www.linkedin.com/in/rivaldo-tandoko/');
}

function github() {
    console.log(chalk.green('Opening GitHub profile...'));
    open('https://github.com/rtrivaldo');
}

export { socials, email, linkedin, github };