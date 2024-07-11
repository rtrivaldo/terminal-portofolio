import chalk from 'chalk';
import inquirer from 'inquirer';
import fs from 'fs';

const config = fs.readFileSync('config.json', 'utf-8');
const data = JSON.parse(config);

let theme;

if (data.theme === "ocean") {
    theme = {
        header: chalk.bold.blue,
        secondary: chalk.cyan,
        body: chalk.white
    }
} else if (data.theme === "forest") {
    theme = {
        header: chalk.bold.green,
        secondary: chalk.green,
        body: chalk.white
    }
} else if (data.theme === "sunset") {
    theme = {
        header: chalk.bold.red,
        secondary: chalk.yellow,
        body: chalk.hex('#FFA500')
    }
} else if (data.theme === "sunrise") {
    theme = {
        header: chalk.bold.magenta,
        secondary: chalk.yellow,
        body: chalk.hex('#FF69B4')
    }
} else if (data.theme === "autumn") {
    theme = {
        header: chalk.bold.hex('#FF8C00'),
        secondary: chalk.hex('#FF4500'),
        body: chalk.hex('#FFD700')
    }
}

async function changeTheme() {
    const answers = await inquirer.prompt({
        name: 'theme',
        type: 'list',
        message: 'Choose theme',
        choices: ['ocean', 'forest', 'sunset', 'sunrise', 'autumn']
    });

    if (answers.theme === 'ocean') {
        const config = fs.readFileSync('config.json', 'utf-8');
        const data = JSON.parse(config);

        data.theme = "ocean";

        fs.writeFileSync('config.json', JSON.stringify(data));
    } else if (answers.theme === 'forest') {
        const config = fs.readFileSync('config.json', 'utf-8');
        const data = JSON.parse(config);

        data.theme = "forest";

        fs.writeFileSync('config.json', JSON.stringify(data));
    } else if (answers.theme === 'sunset') {
        const config = fs.readFileSync('config.json', 'utf-8');
        const data = JSON.parse(config);

        data.theme = "sunset";

        fs.writeFileSync('config.json', JSON.stringify(data));
    } else if (answers.theme === 'sunrise') {
        const config = fs.readFileSync('config.json', 'utf-8');
        const data = JSON.parse(config);    

        data.theme = "sunrise";

        fs.writeFileSync('config.json', JSON.stringify(data));
    } else if (answers.theme === 'autumn') {
        const config = fs.readFileSync('config.json', 'utf-8');
        const data = JSON.parse(config);

        data.theme = "autumn";
        fs.writeFileSync('config.json', JSON.stringify(data));
    }
}

export { theme, changeTheme };

