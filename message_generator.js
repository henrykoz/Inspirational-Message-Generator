//Inspirational Message Generator by HO

// Define function with arrays containing different parts of the message
const messageGenerator = {
    starters: ["You can do it!", "Keep pushing forward!", "Believe in yourself!"],
    middles: ["anything is possible.", "you are stronger than you think.", "you have what it takes."],
    endings: ["Stay focused and motivated!", "Keep up the good work!", "Success is just around the corner!"], 
}

// Store the generated output message
let inspirationalMessage = [];

//Generate random number
function generateRandomNumber(num) {
    // Gets # from 0 -> num - 1
    return Math.floor(Math.random() * num)
  }

//   console.log(generateRandomNumber(3));

// Iterate over the object
  for(let prop in messageGenerator) {
    let optionIdx = generateRandomNumber(messageGenerator[prop].length)
  
    // use the object's properties to customize the message being added to personalWisdom  
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

function formatMessage(meaasage) {
    // Add some ASCII here?
    // Add in more symbols to the array? like emojies or what not?
    const formatted = inspirationalMessage.join('\n')
    console.log(formatted)
  }
  
  formatMessage(inspirationalMessage);