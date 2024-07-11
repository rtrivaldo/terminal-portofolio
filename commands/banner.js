import figlet from "figlet";
import { theme } from "../theme.js";

function banner(){
    console.log(theme.header(
    figlet.textSync(`Rivaldo Tandoko`, {
        font: "Big Money-ne",
    }))
    );

    console.log(theme.body('Welcome to my terminal portfolio!'));
    console.log(theme.body('Here you can get some information about me.'));

    console.log();

    console.log(theme.body('-------------------------------------------'));
    console.log(theme.body(`Type ${theme.header("\'help\'")} to see the list of commands.`));
}

export default banner