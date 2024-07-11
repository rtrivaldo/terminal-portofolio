import chalk from "chalk";
import { theme } from "../theme.js";

function about(){
    console.log(theme.body(`Hi, I'm ${theme.header("Rivaldo Tandoko")}, a ${theme.header("full-stack developer")} on a mission to conquer the coding world!
An undergraduate student at Telkom University majoring in ${theme.header("Informatics")}.

I'm open to new opportunities and would love to chat and share my latest coding adventures.
Feel free to contact me:

${theme.header("Email:")} ${chalk.underline("rtrivaldo05@gmail.com")}
${theme.header("Github:")} ${chalk.underline("https://github.com/rtrivaldo")}
${theme.header("LinkedIn:")} ${chalk.underline("https://www.linkedin.com/in/rivaldo-tandoko/")}

Thank you!`));
}

export default about