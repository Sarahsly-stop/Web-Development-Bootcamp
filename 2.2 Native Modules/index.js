const fs = require("fs");

fs.writeFile("message.text", "Hello from NodeJS!", (err) => {
    if (err) throw err;
    console.log("This file has been saved!")
});