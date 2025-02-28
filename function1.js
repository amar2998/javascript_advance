const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  function add(num1, num2, callback) {
      if (num1 !== undefined && num2 !== undefined) {
          callback(num1 + num2);
          readline.close();
      } else {
          if (num1 === undefined) {
              readline.question("Enter num1: ", (n1) => {
                  num1 = Number(n1);
                  if (num2 === undefined) {
                      readline.question("Enter num2: ", (n2) => {
                          num2 = Number(n2);
                          callback(num1 + num2);
                          readline.close();
                      });
                  }
              });
          } else {
              readline.question("Enter num2: ", (n2) => {
                  num2 = Number(n2);
                  callback(num1 + num2);
                  readline.close();
              });
          }
      }
  }
  
  // Call the function and handle the result inside a callback
  add(2, undefined, (result) => {
      console.log("Result:", result);
  });
  