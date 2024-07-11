#!/usr/bin/env node
import { argv } from "process";

import { theme, changeTheme } from "./theme.js";

import banner from "./commands/banner.js";
import about from "./commands/about.js";
import educations from "./commands/educations.js";
import help from "./commands/help.js";
import { socials, email, linkedin, github } from "./commands/socials.js"; 
import { projects, portfolio, expenseTracker, ticTacToe, omah, landscapio } from "./commands/projects.js";


switch (argv[2] || "banner") {
    case "banner":
        banner();
        break;

    case "about":
        about();
        break;

    case "educations":
        educations();
        break;

    case "help":
        help();
        break;

    case "version":
    case "v":
        console.log(theme.header('v1.0.0'));
        break;

    case "socials":
        socials();
        break;

    case "email":
        email();
        break;
        
    case "linkedin":
        linkedin();
        break;

    case "github":
        github();
        break;

    case "projects":
        projects();
        break;

    case "theme":
        changeTheme();
        break;

    case "portfolio":
        portfolio();
        break;

    case "expense-tracker":
        expenseTracker();
        break;

    case "tic-tac-toe":
        ticTacToe();
        break;

    case "omah":
        omah();
        break;

    case "landscapio":
        landscapio();
        break;

    default:
        help();
        break;
}

