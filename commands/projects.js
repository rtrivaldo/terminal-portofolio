import { theme } from "../theme.js";
import open from "open";

function projects(){
    console.log(theme.body(`${theme.header("Here are some of my projects!")}

${theme.header("[1] GUI Portfolio: https://rivaldotandoko.vercel.app/")}
    My personal portfolio website built with React.js. Provides an overview of
    my skills and experience.

    ${theme.header("Technologies used:")} 
    [+] TailwindCSS
    [+] React.js

${theme.header("[2] Expense Tracker: https://github.com/rtrivaldo/expense-tracker")}
    An expense tracking application built using the Laravel framework enables 
    users to effortlessly record and manage their expenses. Key features include 
    transaction logging, monthly expense reporting, and an integrated authentication 
    system to ensure user data security.

    ${theme.header("Technologies used:")}
    [+] TailwindCSS
    [+] Laravel
    [+] SQLite

${theme.header("[3] Tic Tac Toe: https://tic-tac-toe-alpha-two-29.vercel.app/")}
    Developing a Tic Tac Toe game using the React library allows two players to 
    compete on a 3x3 game board. Key features include interactive move selection, 
    real-time game status updates like player turns and winner announcements, 
    and a responsive, user-friendly interface.

    ${theme.header("Technologies used:")} 
    [+] TailwindCSS
    [+] React.js

${theme.header("[4] Omah: https://rtrivaldo.github.io/Omah")}
    Omah is a challenge from Codedesign.dev that tasked me with coding a project 
    based on a Figma design. The challenge involved translating the visual design 
    into a functional, responsive website, showcasing my skills in front-end development 
    and design implementation.

    ${theme.header("Technologies used:")} 
    [+] HTML
    [+] CSS
    [+] TailwindCSS
    [+] JavaScript

${theme.header("[5] Landscapio: https://rtrivaldo.github.io/landscapio")}
    Landscapio is a challenge from Codedesign.dev where I was required to code a project 
    from a Figma design. This task involved transforming the provided visual layout into 
    a functional and responsive website, demonstrating my ability to accurately implement 
    design specifications using front-end development skills.

    ${theme.header("Technologies used:")} 
    [+] HTML
    [+] CSS
    [+] JavaScript

Use 'portfolio', 'expense-tracker', 'tic-tac-toe', 'omah' or 'landscapio' to open the respective profile
eg: 'portfolio'`));
}

function portfolio(){
    console.log("Opening Portfolio...");
    open('https://rivaldotandoko.vercel.app/');
}

function expenseTracker(){
    console.log("Opening Expense Tracker...");
    open('https://github.com/rtrivaldo/expense-tracker');
}

function ticTacToe(){
    console.log("Opening Tic Tac Toe...");
    open('https://tic-tac-toe-alpha-two-29.vercel.app/');
}

function omah(){
    console.log("Opening Omah...");
    open('https://rtrivaldo.github.io/Omah');
}

function landscapio(){
    console.log("Opening Landscapio...");
    open('https://rtrivaldo.github.io/landscapio');
}

export { projects, portfolio, expenseTracker, ticTacToe, omah, landscapio };