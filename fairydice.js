function rollFairyDice(numberOfSides) {
  const roll = Math.floor(Math.random() * numberOfSides) + 1; 

  let fairyName = "";
  switch (roll) {
    case 1: fairyName = "Shimmerwing"; break;
    case 2: fairyName = "Dewdrop"; break;
    case 3: fairyName = "Blossomheart"; break;
    case 4: fairyName = "Moonbeam"; break;
    case 5: fairyName = "Thistlebloom"; break;
    case 6: fairyName = "Willowwisp"; break;
    case 7: fairyName = "Stardust"; break;
    case 8: fairyName = "Riverwhisper"; break;
    case 9: fairyName = "Sunsparkle"; break;
    case 10: fairyName = "Lilypetal"; break;
    case 11: fairyName = "Brightsong"; break;
    case 12: fairyName = "Flutterby"; break;
    case 13: fairyName = "Shadowflight"; break;
    case 14: fairyName = "Hazelheart"; break;
    case 15: fairyName = "Rainsong"; break;
    case 16: fairyName = "Dawndancer"; break;
    case 17: fairyName = "Goldenleaf"; break;
    case 18: fairyName = "Twinkletoes"; break;
    case 19: fairyName = "Firespirit"; break;
    case 20: fairyName = "Dreamweaver"; break; 
  }

  return { roll, fairyName };
}

const roll1 = rollFairyDice(20);
const roll2 = rollFairyDice(20);
const roll3 = rollFairyDice(20);

console.log("Your fairy dice rolls are:");
console.log("Roll 1:", roll1);
console.log("Roll 2:", roll2);
console.log("Roll 3:", roll3);
