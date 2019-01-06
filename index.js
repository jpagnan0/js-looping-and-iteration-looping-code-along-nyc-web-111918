// Code your solutions in this file
function printBadges(badgesArray) {
  for(let i=0; i < badgesArray.length; i++) {
    console.log(`Welcome ${badgesArray[i]}! You are employee #${i+1}.`);
  }
  return badgesArray
}


function tailsNeverFails() {
  let tails = 0;

  while (Math.random() >= 0.5) {
    tails++;
  }

  return `You got ${tails} tails in a row!`;
}
