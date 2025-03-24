// Retrieve command-line arguments
const args = process.argv.slice(2);

// Check if the name argument is provided
if (args.length === 0) {
  console.log("Please provide your name as an argument. Example: node name.js John");
} else {
  const name = args[0];
  console.log(`Hello, ${name}!`);
}
