const fs = require('fs');

//writes to file
fs.writeFile('index.html', '${process.argv[2]}/n', (err) => err ? console.error(err) : console.log('Success!'));

const inquirer = require("inquirer");

inquirer.prompt([{
    name:"what's your name?",
    location:"where are you?",
    bio:"something about you",
    linkedIn:"your linkedin",
    github:"your github",
    projects:"project links",
    email:"what's your email?"
}])