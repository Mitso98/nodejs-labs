// Sample input: node greetings.js -n ahmed -a 30 -c Egypt

// steps
// from process.argv
// get the options -n -a -c
// get the options' values
// print the message Hello, <name> <age> from <country>!

// Get the command-line arguments
const args = process.argv.slice(2);

// Initialize variables to hold the option values
let username, age, country;

// Loop through the arguments to find the options and their values
for (let i = 0; i < args.length; i++) {
  if (args[i] === "-n" && i < args.length - 1) {
    username = args[i + 1];
  } else if (args[i] === "-a" && i < args.length - 1) {
    age = args[i + 1];
  } else if (args[i] === "-c" && i < args.length - 1) {
    country = args[i + 1];
  }
}

// Print the greeting message
console.log(
  `Hello, ${username || "usage: -n <name>"} ${age || "usage: -a <age>"} from ${
    country || "usage: -c <country>"
  }!`
);
