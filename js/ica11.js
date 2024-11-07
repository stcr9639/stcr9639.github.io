// Function to display fortune
function tellFortune(numChildren, partnerName, location, jobTitle) {
    const fortuneMessage = `You will be a ${jobTitle} in ${location}, and married to ${partnerName} with ${numChildren} kids.`;
    document.getElementById("fortune-output").innerHTML += `<p>${fortuneMessage}</p>`;
  }
  
  // Calling the tellFortune function three times with different values
  tellFortune(3, "Alice", "New York", "Software Engineer");
  tellFortune(2, "Bob", "Paris", "Artist");
  tellFortune(1, "Charlie", "Tokyo", "Teacher");
  
  // Function to calculate dog age
  function calculateDogAge(puppyAge) {
    const dogAge = puppyAge * 7;
    const dogAgeMessage = `Your doggie is ${dogAge} years old in dog years!`;
    document.getElementById("dog-age-output").innerHTML += `<p>${dogAgeMessage}</p>`;
  }
  
  // Calling the calculateDogAge function three times with different values
  calculateDogAge(1);
  calculateDogAge(3);
  calculateDogAge(5);


  // 1. Function to reverse a number
  function reverseNumber(num) {
    return parseInt(num.toString().split('').reverse().join(''));
  }

  // Call the function twice and write the output
  const reverseOutput1 = reverseNumber(32243);
  const reverseOutput2 = reverseNumber(12345);
  document.getElementById('reverseNumberOutput').innerHTML = `
    Original: 32243 => Reversed: ${reverseOutput1} <br>
    Original: 12345 => Reversed: ${reverseOutput2}
  `;

  // 2. Function to sort letters of a string in alphabetical order
  function alphabeticalOrder(str) {
    return str.split('').sort().join('');
  }

  // Call the function twice and write the output
  const alphabeticalOutput1 = alphabeticalOrder('webmaster');
  const alphabeticalOutput2 = alphabeticalOrder('javascript');
  document.getElementById('alphabeticalOrderOutput').innerHTML = `
    Original: webmaster => Alphabetical Order: ${alphabeticalOutput1} <br>
    Original: javascript => Alphabetical Order: ${alphabeticalOutput2}
  `;

  // 3. Function to capitalize the first letter of each word
  function capitalizeFirstLetter(str) {
    return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  }

  // Call the function twice and write the output
  const capitalizeOutput1 = capitalizeFirstLetter('the quick brown fox');
  const capitalizeOutput2 = capitalizeFirstLetter('hello world from javascript');
  document.getElementById('capitalizeOutput').innerHTML = `
    Original: the quick brown fox => Capitalized: ${capitalizeOutput1} <br>
    Original: hello world from javascript => Capitalized: ${capitalizeOutput2}
  `;