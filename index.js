// Import core module
import fs from "fs";
import inquirer from "inquirer";

const promptUser = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is your name",
    },
    {
      type: "input",
      name: "location",
      message: "Where are you from ?",
    },
    {
      type: "input",
      name: "hubby",
      message: "What are your hubbies",
    },
    {
      type: "input",
      name: "food",
      message: "What is your favorite food",
    },
    {
      type: "input",
      name: "github",
      message: "What is your Github username",
    },
    {
      type: "input",
      name: "linkedin",
      message: "What is your LinkedIn handle",
    },
  ]);
};

const generateHTML = (answers) => `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div class="jumbotron jumbotron-fluid">
        <div class="container">
            <h1 class="display-4">My name is ${answers.name}</h1>
            <p class="lead">I am from ${answers.location}</p>
            <h3>Example heading <span class="badge badge-secondary"></span></h3>
        <ul class="list-group">
            <li class="list-group-item">My github username is ${answers.github}</li>
            <li class="list-group-item">LinkedIn: ${answers.linkedin}</li>
        </ul>
        </div>
    </div>
</body>
</html>
`;

promptUser()
  .then((answers) => {
    fs.writeFileSync("index.html", generateHTML(answers));
    console.log("Successfully wrote to index.html");
  })
  .catch((err) => console.error(err));
