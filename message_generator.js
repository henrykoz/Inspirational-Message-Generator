//Inspirational Message Generator by HO

// Define function with arrays containing different parts of the message
const messageGenerator = {
  starters: ["You can do it! \uD83D\uDE00", "Keep pushing forward! \uD83D\uDC4D", "Believe in yourself!"],
  middles: ["Anything is possible. ", "You are stronger than you think.", "You have what it takes."],
  endings: ["Stay focused and motivated! 💪", "Keep up the good work! 👍", "Success is just around the corner! 🌟"], 
}


// Store the generated output message
let inspirationalMessage = [];

//Function that returns a random integer between 0 and the length of the array minus 1
function generateRandomNumber(num) {
    return Math.floor(Math.random() * num)
  }

//   console.log(generateRandomNumber(3));

// Iterate over the object
  for(let prop in messageGenerator) {
    let optionIdx = generateRandomNumber(messageGenerator[prop].length)
  
    // Use the object's properties to customize the message being added to inspirationalMessage
    // Switch statement is used to determine which property the current iteration is on (starters, middles, or endings). 
    //Based on the property, the code pushes a random message from the corresponding array onto the inspirationalMessage array. 
    switch(prop) {
      case 'starters':
        inspirationalMessage.push(`${messageGenerator[prop][optionIdx]}`)
        break
      case 'middles':
        inspirationalMessage.push(`${messageGenerator[prop][optionIdx]}`)
        break
      case 'endings':
        inspirationalMessage.push(`${messageGenerator[prop][optionIdx]}`)
        break
      default:
        inspirationalMessage.push('There is not enough info.')
    }
  }

function formatMessage(message) {
    const formatted = inspirationalMessage.join('\n')
    console.log(formatted)
  }
  
  formatMessage(inspirationalMessage);