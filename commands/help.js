import { theme } from "../theme.js";

function help() {    
    console.log(theme.body(`${theme.header("USAGE:")}
    app [command]

${theme.header("COMMANDS:")}
    ${theme.secondary("about")}            - information about me
    ${theme.secondary("banner ")}          - display the banner
    ${theme.secondary("educations")}       - my educational background
    ${theme.secondary("email")}            - send an email
    ${theme.secondary("expense-tracker")}  - open my expense tracker repository
    ${theme.secondary("github")}           - open my github profile
    ${theme.secondary("help, h")}          - show this help message
    ${theme.secondary("landscapio")}       - open "landscapio" live preview 
    ${theme.secondary("linkedin")}         - open my linkedin profile
    ${theme.secondary("omah")}             - open "omah" live preview 
    ${theme.secondary("portfolio")}        - head to my GUI portfolio 
    ${theme.secondary("projects")}         - display some of my projects  
    ${theme.secondary("socials")}          - my social links
    ${theme.secondary("tic-tac-toe")}      - open my tic tac toe game
    ${theme.secondary("theme")}            - change the theme
    ${theme.secondary("version, v")}       - show the version of the app`));
}

export default help