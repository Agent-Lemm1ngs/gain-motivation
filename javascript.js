let progressBar = 5;
let quoteNumber = 0;
 const tips = [
    "Stare at the wall until you are motivated.",
    "Count your fingers and toes.",
    "Try to lick your elbow.",
    "Watch paint dry. Literally.",
    "Stand still and soak up the 'sun'. Pretend to be a plant. Photosynthesis might just kick in!",
    "Rearrange your sock drawer. Alphabetically, by color, or even by size!",
    "Sing motivational songs to your houseplants. They need encouragement too!",
    "Attempt to telepathically move objects. Start small, like a pencil.",
    "Draw stick figures doing extreme sports. They don't have fear!",
    "Alphabetize your canned goods. It's an A-Z kind of day!",
    "Create a list of lists. Then list the lists on your list.",
    "Watch grass grow. It's thrilling in slow motion.",
    "Pretend to be a statue. Hold that pose!",
    "Try to telepathically communicate with animals. They might respond.",
    "Count the number of tiles in your house. Twice, for accuracy.",
    "Read the dictionary for fun. Start with 'A' for adventure!",
    "Make shadow puppets on the wall. Give them a backstory.",
    "Invent your own language. Write a motivational speech in it.",
    "Write a poem about your refrigerator. It’s cooler than you think.",
    "Pretend to be a ninja and move silently around your house. Stealth is key!",
    "Host a staring contest with yourself in the mirror. Don't blink!",
    "Balance a spoon on your nose. It's harder than it looks!",
    "Try to clap with one hand. Feel the sound of silence.",
    "Imagine you're a superhero. What's your useless power?",
    "Plan an expedition to the living room. Prepare snacks.",
    "Write a letter to your future self. Warn them about today.",
    "Invent a new dance move. Name it after your favorite vegetable.",
    "Have a conversation with your reflection. See who wins the debate.",
    "Create a motivational poster using macaroni art.",
    "Try to catch your shadow. It's a slippery one!",
    "Recreate famous movie scenes using household items.",
    "Do push-ups... mentally. Feel the burn in your imagination!",
    "Build a fort out of pillows. Defend it against imaginary foes.",
    "Count all the blue things in your house. Make a chart."
  ];
function change_quote(way){
  if (way==="left"){
    if (quoteNumber === 0){
      quoteNumber = (tips.length) - 1;
    } else {
      quoteNumber-=1;
    }
    
    
  } else{
    if (quoteNumber === tips.length-1){
      quoteNumber = 0
    } else {
      quoteNumber+=1
    }
  }
  document.getElementById("quoteNumber").innerHTML = `${quoteNumber+1}`;
    document.getElementById("quoteText").innerHTML = tips[quoteNumber];
}

function upgrade_motivation(){
  if (progressBar >=100){
    progressBar = -5;
  }
  progressBar+=5
  document.getElementById("progressBar").value=progressBar;
}

