//set initial wallet value
document.querySelector('#wallet').innerText = 500;

window.addEventListener('load', showCoinsOnLoad);

function showCoinsOnLoad() {
    document.querySelector('#col1-coins').style.display = "inline-flex";
    document.querySelector('#col1-rooster').style.display = "none";
    document.querySelector('#col1-lily').style.display = "none";
    document.querySelector('#col1-car').style.display = "none";
    document.querySelector('#col1-cash').style.display = "none";
    
    document.querySelector('#col2-coins').style.display = "inline-flex";        
    document.querySelector('#col2-rooster').style.display = "none";        
    document.querySelector('#col2-lily').style.display = "none";        
    document.querySelector('#col2-car').style.display = "none";        
    document.querySelector('#col2-cash').style.display = "none";
    
    document.querySelector('#col3-coins').style.display = "inline-flex";
    document.querySelector('#col3-rooster').style.display = "none";
    document.querySelector('#col3-lily').style.display = "none";
    document.querySelector('#col3-car').style.display = "none";
    document.querySelector('#col3-cash').style.display = "none";
    }


//create variable to hold the wallet value
let myWallet = Number(document.querySelector('#wallet').innerText)
console.log(myWallet)


//create bet variable to hold the bet value
let bet = Number("");

  //Set click event to push bet amount to bet function

  document.querySelector('#min').addEventListener('click', minBetValue) 
  document.querySelector('#max').addEventListener('click', maxBetValue) 
  
    //Calculate bet amount & disable unused bet button
  
  function minBetValue() {
    bet = Number(document.querySelector('#min').value)
    document.querySelector('#max').disabled=true;
    return bet; 
  }
  
  function maxBetValue() {
    bet = Number(document.querySelector('#max').value)
    document.querySelector('#min').disabled = true;
    return bet;
  }

//Set click event to push the calculated bet amount to function

document.querySelector('button').addEventListener("click", calculateBet);

//Add or subtract calculated bet from the current wallet amount
function calculateBet() {

    //enable both betting buttons
    document.querySelector('#min').disabled =false;
    document.querySelector('#max').disabled = false;

    // fire random selections for columns 1, 2, & 3 on play-click
    // generate random number between 1 & 100  
    let random = Math.round(Math.random() * 100);
    random;
    console.log(random)

    //select images to display based on random number

    if (random < 3) {
        console.log("less than 33")

        document.querySelector('#col1-coins').style.display = "none";
        document.querySelector('#col1-rooster').style.display = "none";
        document.querySelector('#col1-lily').style.display = "inline-flex";
        document.querySelector('#col1-car').style.display = "none";
        document.querySelector('#col1-cash').style.display = "none";

        document.querySelector('#col2-coins').style.display = "none";        
        document.querySelector('#col2-rooster').style.display = "inline-flex";        
        document.querySelector('#col2-lily').style.display = "none";        
        document.querySelector('#col2-car').style.display = "none";        
        document.querySelector('#col2-cash').style.display = "none";
        
        document.querySelector('#col3-coins').style.display = "none";
        document.querySelector('#col3-rooster').style.display = "none";
        document.querySelector('#col3-lily').style.display = "none";
        document.querySelector('#col3-car').style.display = "inline-flex";
        document.querySelector('#col3-cash').style.display = "none";        
    }
    else if (random < 5) {
        console.log("less than 33")

        document.querySelector('#col1-coins').style.display = "inline-flex";
        document.querySelector('#col1-rooster').style.display = "none";
        document.querySelector('#col1-lily').style.display = "none";
        document.querySelector('#col1-car').style.display = "none";
        document.querySelector('#col1-cash').style.display = "none";

        document.querySelector('#col2-coins').style.display = "none";        
        document.querySelector('#col2-rooster').style.display = "inline-flex";        
        document.querySelector('#col2-lily').style.display = "none";        
        document.querySelector('#col2-car').style.display = "none";        
        document.querySelector('#col2-cash').style.display = "none";
        
        document.querySelector('#col3-coins').style.display = "none";
        document.querySelector('#col3-rooster').style.display = "none";
        document.querySelector('#col3-lily').style.display = "none";
        document.querySelector('#col3-car').style.display = "inline-flex";
        document.querySelector('#col3-cash').style.display = "none";        
    } 
    else if (random < 8) {
        console.log("less than 33")

        document.querySelector('#col1-coins').style.display = "none";
        document.querySelector('#col1-rooster').style.display = "none";
        document.querySelector('#col1-lily').style.display = "inline-flex";
        document.querySelector('#col1-car').style.display = "none";
        document.querySelector('#col1-cash').style.display = "none";

        document.querySelector('#col2-coins').style.display = "inline-flex";        
        document.querySelector('#col2-rooster').style.display = "none";        
        document.querySelector('#col2-lily').style.display = "none";        
        document.querySelector('#col2-car').style.display = "none";        
        document.querySelector('#col2-cash').style.display = "none";
        
        document.querySelector('#col3-coins').style.display = "none";
        document.querySelector('#col3-rooster').style.display = "none";
        document.querySelector('#col3-lily').style.display = "none";
        document.querySelector('#col3-car').style.display = "none";
        document.querySelector('#col3-cash').style.display = "inline-flex";        
    } 
    else if (random <11) {
        console.log("less than 33")

        document.querySelector('#col1-coins').style.display = "none";
        document.querySelector('#col1-rooster').style.display = "inline-flex";
        document.querySelector('#col1-lily').style.display = "none";
        document.querySelector('#col1-car').style.display = "none";
        document.querySelector('#col1-cash').style.display = "none";

        document.querySelector('#col2-coins').style.display = "none";        
        document.querySelector('#col2-rooster').style.display = "none";        
        document.querySelector('#col2-lily').style.display = "none";        
        document.querySelector('#col2-car').style.display = "inline-flex";        
        document.querySelector('#col2-cash').style.display = "none";
        
        document.querySelector('#col3-coins').style.display = "inline-flex";
        document.querySelector('#col3-rooster').style.display = "none";
        document.querySelector('#col3-lily').style.display = "none";
        document.querySelector('#col3-car').style.display = "none";
        document.querySelector('#col3-cash').style.display = "none";        
    } 
    else if (random < 13) {
        console.log("less than 33")

        document.querySelector('#col1-coins').style.display = "none";
        document.querySelector('#col1-rooster').style.display = "none";
        document.querySelector('#col1-lily').style.display = "none";
        document.querySelector('#col1-car').style.display = "none";
        document.querySelector('#col1-cash').style.display = "inline-flex";

        document.querySelector('#col2-coins').style.display = "none";        
        document.querySelector('#col2-rooster').style.display = "inline-flex";        
        document.querySelector('#col2-lily').style.display = "none";        
        document.querySelector('#col2-car').style.display = "none";        
        document.querySelector('#col2-cash').style.display = "none";
        
        document.querySelector('#col3-coins').style.display = "none";
        document.querySelector('#col3-rooster').style.display = "none";
        document.querySelector('#col3-lily').style.display = "none";
        document.querySelector('#col3-car').style.display = "inline-flex";
        document.querySelector('#col3-cash').style.display = "none";        
    } 
    else if (random < 16) {
        console.log("less than 33")

        document.querySelector('#col1-coins').style.display = "none";
        document.querySelector('#col1-rooster').style.display = "none";
        document.querySelector('#col1-lily').style.display = "none";
        document.querySelector('#col1-car').style.display = "inline-flex";
        document.querySelector('#col1-cash').style.display = "none";

        document.querySelector('#col2-coins').style.display = "none";        
        document.querySelector('#col2-rooster').style.display = "inline-flex";        
        document.querySelector('#col2-lily').style.display = "none";        
        document.querySelector('#col2-car').style.display = "none";        
        document.querySelector('#col2-cash').style.display = "none";
        
        document.querySelector('#col3-coins').style.display = "none";
        document.querySelector('#col3-rooster').style.display = "none";
        document.querySelector('#col3-lily').style.display = "inline-flex";
        document.querySelector('#col3-car').style.display = "none";
        document.querySelector('#col3-cash').style.display = "none";        
    } 
    else if (random < 19) {
        console.log("less than 33")

        document.querySelector('#col1-coins').style.display = "inline-flex";
        document.querySelector('#col1-rooster').style.display = "none";
        document.querySelector('#col1-lily').style.display = "none";
        document.querySelector('#col1-car').style.display = "none";
        document.querySelector('#col1-cash').style.display = "none";

        document.querySelector('#col2-coins').style.display = "none";        
        document.querySelector('#col2-rooster').style.display = "none";        
        document.querySelector('#col2-lily').style.display = "none";        
        document.querySelector('#col2-car').style.display = "inline-flex";        
        document.querySelector('#col2-cash').style.display = "none";
        
        document.querySelector('#col3-coins').style.display = "none";
        document.querySelector('#col3-rooster').style.display = "none";
        document.querySelector('#col3-lily').style.display = "none";
        document.querySelector('#col3-car').style.display = "none";
        document.querySelector('#col3-cash').style.display = "inline-flex";        
    } 
    else if (random < 21) {
        console.log("less than 33")

        document.querySelector('#col1-coins').style.display = "none";
        document.querySelector('#col1-rooster').style.display = "inline-flex";
        document.querySelector('#col1-lily').style.display = "none";
        document.querySelector('#col1-car').style.display = "none";
        document.querySelector('#col1-cash').style.display = "none";

        document.querySelector('#col2-coins').style.display = "none";        
        document.querySelector('#col2-rooster').style.display = "none";        
        document.querySelector('#col2-lily').style.display = "none";        
        document.querySelector('#col2-car').style.display = "none";        
        document.querySelector('#col2-cash').style.display = "inline-flex";
        
        document.querySelector('#col3-coins').style.display = "none";
        document.querySelector('#col3-rooster').style.display = "none";
        document.querySelector('#col3-lily').style.display = "inline-flex";
        document.querySelector('#col3-car').style.display = "none";
        document.querySelector('#col3-cash').style.display = "none";        
    } 
    else if (random < 24) {
        console.log("less than 33")

        document.querySelector('#col1-coins').style.display = "none";
        document.querySelector('#col1-rooster').style.display = "none";
        document.querySelector('#col1-lily').style.display = "none";
        document.querySelector('#col1-car').style.display = "inline-flex";
        document.querySelector('#col1-cash').style.display = "none";

        document.querySelector('#col2-coins').style.display = "none";        
        document.querySelector('#col2-rooster').style.display = "none";        
        document.querySelector('#col2-lily').style.display = "inline-flex";        
        document.querySelector('#col2-car').style.display = "none";        
        document.querySelector('#col2-cash').style.display = "none";
        
        document.querySelector('#col3-coins').style.display = "inline-flex";
        document.querySelector('#col3-rooster').style.display = "none";
        document.querySelector('#col3-lily').style.display = "none";
        document.querySelector('#col3-car').style.display = "none";
        document.querySelector('#col3-cash').style.display = "none";        
    } 
    else if (random < 27) {
        console.log("less than 33")

        document.querySelector('#col1-coins').style.display = "none";
        document.querySelector('#col1-rooster').style.display = "inline-flex";
        document.querySelector('#col1-lily').style.display = "none";
        document.querySelector('#col1-car').style.display = "none";
        document.querySelector('#col1-cash').style.display = "none";

        document.querySelector('#col2-coins').style.display = "inline-flex";        
        document.querySelector('#col2-rooster').style.display = "none";        
        document.querySelector('#col2-lily').style.display = "none";        
        document.querySelector('#col2-car').style.display = "none";        
        document.querySelector('#col2-cash').style.display = "none";
        
        document.querySelector('#col3-coins').style.display = "none";
        document.querySelector('#col3-rooster').style.display = "none";
        document.querySelector('#col3-lily').style.display = "inline-flex";
        document.querySelector('#col3-car').style.display = "none";
        document.querySelector('#col3-cash').style.display = "none";        
    } 
    else if (random < 30) {
        console.log("less than 33")

        document.querySelector('#col1-coins').style.display = "none";
        document.querySelector('#col1-rooster').style.display = "none";
        document.querySelector('#col1-lily').style.display = "none";
        document.querySelector('#col1-car').style.display = "none";
        document.querySelector('#col1-cash').style.display = "inline-flex";

        document.querySelector('#col2-coins').style.display = "none";        
        document.querySelector('#col2-rooster').style.display = "none";        
        document.querySelector('#col2-lily').style.display = "none";        
        document.querySelector('#col2-car').style.display = "inline-flex";        
        document.querySelector('#col2-cash').style.display = "none";
        
        document.querySelector('#col3-coins').style.display = "none";
        document.querySelector('#col3-rooster').style.display = "inline-flex";
        document.querySelector('#col3-lily').style.display = "none";
        document.querySelector('#col3-car').style.display = "none";
        document.querySelector('#col3-cash').style.display = "none";        
    } 
    else if (random < 33) {
        console.log("less than 33")

        document.querySelector('#col1-coins').style.display = "none";
        document.querySelector('#col1-rooster').style.display = "none";
        document.querySelector('#col1-lily').style.display = "inline-flex";
        document.querySelector('#col1-car').style.display = "none";
        document.querySelector('#col1-cash').style.display = "none";

        document.querySelector('#col2-coins').style.display = "none";        
        document.querySelector('#col2-rooster').style.display = "none";        
        document.querySelector('#col2-lily').style.display = "none";        
        document.querySelector('#col2-car').style.display = "none";        
        document.querySelector('#col2-cash').style.display = "inline-flex";
        
        document.querySelector('#col3-coins').style.display = "inline-flex";
        document.querySelector('#col3-rooster').style.display = "none";
        document.querySelector('#col3-lily').style.display = "none";
        document.querySelector('#col3-car').style.display = "none";
        document.querySelector('#col3-cash').style.display = "none";        
    }
    else if (random < 35) {
        console.log("less than 33")

        document.querySelector('#col1-coins').style.display = "none";
        document.querySelector('#col1-rooster').style.display = "none";
        document.querySelector('#col1-lily').style.display = "none";
        document.querySelector('#col1-car').style.display = "none";
        document.querySelector('#col1-cash').style.display = "inline-flex";

        document.querySelector('#col2-coins').style.display = "none";        
        document.querySelector('#col2-rooster').style.display = "none";        
        document.querySelector('#col2-lily').style.display = "none";        
        document.querySelector('#col2-car').style.display = "inline-flex";        
        document.querySelector('#col2-cash').style.display = "none";
        
        document.querySelector('#col3-coins').style.display = "none";
        document.querySelector('#col3-rooster').style.display = "none";
        document.querySelector('#col3-lily').style.display = "inline-flex";
        document.querySelector('#col3-car').style.display = "none";
        document.querySelector('#col3-cash').style.display = "none";        
    }
    else if (random < 37) {
        console.log("less than 33")

        document.querySelector('#col1-coins').style.display = "none";
        document.querySelector('#col1-rooster').style.display = "none";
        document.querySelector('#col1-lily').style.display = "none";
        document.querySelector('#col1-car').style.display = "inline-flex";
        document.querySelector('#col1-cash').style.display = "none";

        document.querySelector('#col2-coins').style.display = "none";        
        document.querySelector('#col2-rooster').style.display = "none";        
        document.querySelector('#col2-lily').style.display = "none";        
        document.querySelector('#col2-car').style.display = "none";        
        document.querySelector('#col2-cash').style.display = "inline-flex";
        
        document.querySelector('#col3-coins').style.display = "none";
        document.querySelector('#col3-rooster').style.display = "inline-flex";
        document.querySelector('#col3-lily').style.display = "none";
        document.querySelector('#col3-car').style.display = "none";
        document.querySelector('#col3-cash').style.display = "none";        
    }
    else if (random < 39) {
        console.log("less than 33")

        document.querySelector('#col1-coins').style.display = "inline-flex";
        document.querySelector('#col1-rooster').style.display = "none";
        document.querySelector('#col1-lily').style.display = "none";
        document.querySelector('#col1-car').style.display = "none";
        document.querySelector('#col1-cash').style.display = "none";

        document.querySelector('#col2-coins').style.display = "none";        
        document.querySelector('#col2-rooster').style.display = "none";        
        document.querySelector('#col2-lily').style.display = "inline-flex";        
        document.querySelector('#col2-car').style.display = "none";        
        document.querySelector('#col2-cash').style.display = "none";
        
        document.querySelector('#col3-coins').style.display = "none";
        document.querySelector('#col3-rooster').style.display = "none";
        document.querySelector('#col3-lily').style.display = "none";
        document.querySelector('#col3-car').style.display = "none";
        document.querySelector('#col3-cash').style.display = "inline-flex";        
    }
    else if (random < 42) {
        console.log("less than 42")

        document.querySelector('#col1-coins').style.display = "none";
        document.querySelector('#col1-rooster').style.display = "inline-flex";
        document.querySelector('#col1-lily').style.display = "none";
        document.querySelector('#col1-car').style.display = "none";
        document.querySelector('#col1-cash').style.display = "none";

        document.querySelector('#col2-coins').style.display = "none";        
        document.querySelector('#col2-rooster').style.display = "none";        
        document.querySelector('#col2-lily').style.display = "none";        
        document.querySelector('#col2-car').style.display = "none";        
        document.querySelector('#col2-cash').style.display = "inline-flex";
        
        document.querySelector('#col3-coins').style.display = "none";
        document.querySelector('#col3-rooster').style.display = "none";
        document.querySelector('#col3-lily').style.display = "inline-flex";
        document.querySelector('#col3-car').style.display = "none";
        document.querySelector('#col3-cash').style.display = "none";        
    }
    else if (random < 45) {
        console.log("less than 33")

        document.querySelector('#col1-coins').style.display = "none";
        document.querySelector('#col1-rooster').style.display = "none";
        document.querySelector('#col1-lily').style.display = "none";
        document.querySelector('#col1-car').style.display = "inline-flex";
        document.querySelector('#col1-cash').style.display = "none";

        document.querySelector('#col2-coins').style.display = "inline-flex";        
        document.querySelector('#col2-rooster').style.display = "none";        
        document.querySelector('#col2-lily').style.display = "none";        
        document.querySelector('#col2-car').style.display = "none";        
        document.querySelector('#col2-cash').style.display = "none";
        
        document.querySelector('#col3-coins').style.display = "none";
        document.querySelector('#col3-rooster').style.display = "none";
        document.querySelector('#col3-lily').style.display = "inline-flex";
        document.querySelector('#col3-car').style.display = "none";
        document.querySelector('#col3-cash').style.display = "none";        
    }

    // RANDOM NUMBERS BETWEEN 46 AND 82 (ONE PAIR)

    else if (random < 48) {
        console.log("between 33 and 67")
        document.querySelector('#col1-coins').style.display = "none";
        document.querySelector('#col1-rooster').style.display = "none";
        document.querySelector('#col1-lily').style.display = "none";
        document.querySelector('#col1-car').style.display = "none";
        document.querySelector('#col1-cash').style.display = "inline-flex";

        document.querySelector('#col2-coins').style.display = "none";        
        document.querySelector('#col2-rooster').style.display = "none";        
        document.querySelector('#col2-lily').style.display = "none";        
        document.querySelector('#col2-car').style.display = "none";        
        document.querySelector('#col2-cash').style.display = "inline-flex";
        
        document.querySelector('#col3-coins').style.display = "none";
        document.querySelector('#col3-rooster').style.display = "none";
        document.querySelector('#col3-lily').style.display = "inline-flex";
        document.querySelector('#col3-car').style.display = "none";
        document.querySelector('#col3-cash').style.display = "none";
    }

    else if (random < 50) {
        console.log("between 33 and 67")
        document.querySelector('#col1-coins').style.display = "none";
        document.querySelector('#col1-rooster').style.display = "none";
        document.querySelector('#col1-lily').style.display = "inline-flex";
        document.querySelector('#col1-car').style.display = "none";
        document.querySelector('#col1-cash').style.display = "none";

        document.querySelector('#col2-coins').style.display = "none";        
        document.querySelector('#col2-rooster').style.display = "none";        
        document.querySelector('#col2-lily').style.display = "inline-flex";        
        document.querySelector('#col2-car').style.display = "none";        
        document.querySelector('#col2-cash').style.display = "none";
        
        document.querySelector('#col3-coins').style.display = "none";
        document.querySelector('#col3-rooster').style.display = "inline-flex";
        document.querySelector('#col3-lily').style.display = "none";
        document.querySelector('#col3-car').style.display = "none";
        document.querySelector('#col3-cash').style.display = "none";
    }
    else if (random < 54) {
        console.log("between 33 and 67")
        document.querySelector('#col1-coins').style.display = "inline-flex";
        document.querySelector('#col1-rooster').style.display = "none";
        document.querySelector('#col1-lily').style.display = "none";
        document.querySelector('#col1-car').style.display = "none";
        document.querySelector('#col1-cash').style.display = "none";

        document.querySelector('#col2-coins').style.display = "none";        
        document.querySelector('#col2-rooster').style.display = "inline-flex";        
        document.querySelector('#col2-lily').style.display = "none";        
        document.querySelector('#col2-car').style.display = "none";        
        document.querySelector('#col2-cash').style.display = "none";
        
        document.querySelector('#col3-coins').style.display = "none";
        document.querySelector('#col3-rooster').style.display = "inline-flex";
        document.querySelector('#col3-lily').style.display = "none";
        document.querySelector('#col3-car').style.display = "none";
        document.querySelector('#col3-cash').style.display = "none";
    }
    else if (random < 58) {
        console.log("between 33 and 67")
        document.querySelector('#col1-coins').style.display = "none";
        document.querySelector('#col1-rooster').style.display = "none";
        document.querySelector('#col1-lily').style.display = "inline-flex";
        document.querySelector('#col1-car').style.display = "none";
        document.querySelector('#col1-cash').style.display = "none";

        document.querySelector('#col2-coins').style.display = "none";        
        document.querySelector('#col2-rooster').style.display = "inline-flex";        
        document.querySelector('#col2-lily').style.display = "none";        
        document.querySelector('#col2-car').style.display = "none";        
        document.querySelector('#col2-cash').style.display = "none";
        
        document.querySelector('#col3-coins').style.display = "none";
        document.querySelector('#col3-rooster').style.display = "inline-flex";
        document.querySelector('#col3-lily').style.display = "none";
        document.querySelector('#col3-car').style.display = "none";
        document.querySelector('#col3-cash').style.display = "none";
    }
    else if (random < 62) {
        console.log("between 33 and 67")
        document.querySelector('#col1-coins').style.display = "none";
        document.querySelector('#col1-rooster').style.display = "none";
        document.querySelector('#col1-lily').style.display = "none";
        document.querySelector('#col1-car').style.display = "inline-flex";
        document.querySelector('#col1-cash').style.display = "none";

        document.querySelector('#col2-coins').style.display = "none";        
        document.querySelector('#col2-rooster').style.display = "none";        
        document.querySelector('#col2-lily').style.display = "inline-flex";        
        document.querySelector('#col2-car').style.display = "none";        
        document.querySelector('#col2-cash').style.display = "none";
        
        document.querySelector('#col3-coins').style.display = "none";
        document.querySelector('#col3-rooster').style.display = "none";
        document.querySelector('#col3-lily').style.display = "none";
        document.querySelector('#col3-car').style.display = "inline-flex";
        document.querySelector('#col3-cash').style.display = "none";
    }
    else if (random < 66) {
        console.log("between 33 and 67")
        document.querySelector('#col1-coins').style.display = "inline-flex";
        document.querySelector('#col1-rooster').style.display = "none";
        document.querySelector('#col1-lily').style.display = "none";
        document.querySelector('#col1-car').style.display = "none";
        document.querySelector('#col1-cash').style.display = "none";

        document.querySelector('#col2-coins').style.display = "none";        
        document.querySelector('#col2-rooster').style.display = "none";        
        document.querySelector('#col2-lily').style.display = "none";        
        document.querySelector('#col2-car').style.display = "none";        
        document.querySelector('#col2-cash').style.display = "inline-flex";
        
        document.querySelector('#col3-coins').style.display = "none";
        document.querySelector('#col3-rooster').style.display = "none";
        document.querySelector('#col3-lily').style.display = "none";
        document.querySelector('#col3-car').style.display = "none";
        document.querySelector('#col3-cash').style.display = "inline-flex";
    }
    else if (random < 70) {
        console.log("between 33 and 67")
        document.querySelector('#col1-coins').style.display = "none";
        document.querySelector('#col1-rooster').style.display = "inline-flex";
        document.querySelector('#col1-lily').style.display = "none";
        document.querySelector('#col1-car').style.display = "none";
        document.querySelector('#col1-cash').style.display = "none";

        document.querySelector('#col2-coins').style.display = "none";        
        document.querySelector('#col2-rooster').style.display = "none";        
        document.querySelector('#col2-lily').style.display = "none";        
        document.querySelector('#col2-car').style.display = "inline-flex";        
        document.querySelector('#col2-cash').style.display = "none";
        
        document.querySelector('#col3-coins').style.display = "none";
        document.querySelector('#col3-rooster').style.display = "none";
        document.querySelector('#col3-lily').style.display = "none";
        document.querySelector('#col3-car').style.display = "inline-flex";
        document.querySelector('#col3-cash').style.display = "none";
    }
    else if (random < 74) {
        console.log("between 33 and 67")
        document.querySelector('#col1-coins').style.display = "none";
        document.querySelector('#col1-rooster').style.display = "none";
        document.querySelector('#col1-lily').style.display = "inline-flex";
        document.querySelector('#col1-car').style.display = "none";
        document.querySelector('#col1-cash').style.display = "none";

        document.querySelector('#col2-coins').style.display = "none";        
        document.querySelector('#col2-rooster').style.display = "none";        
        document.querySelector('#col2-lily').style.display = "none";        
        document.querySelector('#col2-car').style.display = "none";        
        document.querySelector('#col2-cash').style.display = "inline-flex";
        
        document.querySelector('#col3-coins').style.display = "none";
        document.querySelector('#col3-rooster').style.display = "none";
        document.querySelector('#col3-lily').style.display = "none";
        document.querySelector('#col3-car').style.display = "none";
        document.querySelector('#col3-cash').style.display = "inline-flex";
    }
    else if (random < 78) {
        console.log("between 33 and 67")
        document.querySelector('#col1-coins').style.display = "none";
        document.querySelector('#col1-rooster').style.display = "none";
        document.querySelector('#col1-lily').style.display = "none";
        document.querySelector('#col1-car').style.display = "none";
        document.querySelector('#col1-cash').style.display = "inline-flex";

        document.querySelector('#col2-coins').style.display = "none";        
        document.querySelector('#col2-rooster').style.display = "inline-flex";        
        document.querySelector('#col2-lily').style.display = "none";        
        document.querySelector('#col2-car').style.display = "none";        
        document.querySelector('#col2-cash').style.display = "none";
        
        document.querySelector('#col3-coins').style.display = "none";
        document.querySelector('#col3-rooster').style.display = "inline-flex";
        document.querySelector('#col3-lily').style.display = "none";
        document.querySelector('#col3-car').style.display = "none";
        document.querySelector('#col3-cash').style.display = "none";
    }
    else if (random < 82) {
        console.log("between 33 and 67")
        document.querySelector('#col1-coins').style.display = "none";
        document.querySelector('#col1-rooster').style.display = "none";
        document.querySelector('#col1-lily').style.display = "none";
        document.querySelector('#col1-car').style.display = "inline-flex";
        document.querySelector('#col1-cash').style.display = "none";

        document.querySelector('#col2-coins').style.display = "none";        
        document.querySelector('#col2-rooster').style.display = "none";        
        document.querySelector('#col2-lily').style.display = "none";        
        document.querySelector('#col2-car').style.display = "none";        
        document.querySelector('#col2-cash').style.display = "inline-flex";
        
        document.querySelector('#col3-coins').style.display = "none";
        document.querySelector('#col3-rooster').style.display = "none";
        document.querySelector('#col3-lily').style.display = "none";
        document.querySelector('#col3-car').style.display = "inline-flex";
        document.querySelector('#col3-cash').style.display = "none";
    }

    // RANDOM NUMBERS BETWEEN 80 & 100 (ALL 3 MATCHES)

    else if (random < 84) {
        console.log("between 67 and 100")
        document.querySelector('#col1-coins').style.display = "inline-flex";
        document.querySelector('#col1-rooster').style.display = "none";
        document.querySelector('#col1-lily').style.display = "none";
        document.querySelector('#col1-car').style.display = "none";
        document.querySelector('#col1-cash').style.display = "none";

        document.querySelector('#col2-coins').style.display = "inline-flex";        
        document.querySelector('#col2-rooster').style.display = "none";        
        document.querySelector('#col2-lily').style.display = "none";        
        document.querySelector('#col2-car').style.display = "none";        
        document.querySelector('#col2-cash').style.display = "none";
        
        document.querySelector('#col3-coins').style.display = "inline-flex";
        document.querySelector('#col3-rooster').style.display = "none";
        document.querySelector('#col3-lily').style.display = "none";
        document.querySelector('#col3-car').style.display = "none";
        document.querySelector('#col3-cash').style.display = "none";
    }
    else if (random < 88) {
        console.log("between 67 and 100")
        document.querySelector('#col1-coins').style.display = "none";
        document.querySelector('#col1-rooster').style.display = "inline-flex";
        document.querySelector('#col1-lily').style.display = "none";
        document.querySelector('#col1-car').style.display = "none";
        document.querySelector('#col1-cash').style.display = "none";

        document.querySelector('#col2-coins').style.display = "none";        
        document.querySelector('#col2-rooster').style.display = "inline-flex";        
        document.querySelector('#col2-lily').style.display = "none";        
        document.querySelector('#col2-car').style.display = "none";        
        document.querySelector('#col2-cash').style.display = "none";
        
        document.querySelector('#col3-coins').style.display = "none";
        document.querySelector('#col3-rooster').style.display = "inline-flex";
        document.querySelector('#col3-lily').style.display = "none";
        document.querySelector('#col3-car').style.display = "none";
        document.querySelector('#col3-cash').style.display = "none";
    }
    else if (random < 92) {
        console.log("between 67 and 100")
        document.querySelector('#col1-coins').style.display = "none";
        document.querySelector('#col1-rooster').style.display = "none";
        document.querySelector('#col1-lily').style.display = "inline-flex";
        document.querySelector('#col1-car').style.display = "none";
        document.querySelector('#col1-cash').style.display = "none";

        document.querySelector('#col2-coins').style.display = "none";        
        document.querySelector('#col2-rooster').style.display = "none";        
        document.querySelector('#col2-lily').style.display = "inline-flex";        
        document.querySelector('#col2-car').style.display = "none";        
        document.querySelector('#col2-cash').style.display = "none";
        
        document.querySelector('#col3-coins').style.display = "none";
        document.querySelector('#col3-rooster').style.display = "none";
        document.querySelector('#col3-lily').style.display = "inline-flex";
        document.querySelector('#col3-car').style.display = "none";
        document.querySelector('#col3-cash').style.display = "none";
    }

    else if (random < 96) {
        console.log("between 67 and 100")
        document.querySelector('#col1-coins').style.display = "none";
        document.querySelector('#col1-rooster').style.display = "none";
        document.querySelector('#col1-lily').style.display = "none";
        document.querySelector('#col1-car').style.display = "inline-flex";
        document.querySelector('#col1-cash').style.display = "none";

        document.querySelector('#col2-coins').style.display = "none";        
        document.querySelector('#col2-rooster').style.display = "none";        
        document.querySelector('#col2-lily').style.display = "none";        
        document.querySelector('#col2-car').style.display = "inline-flex";        
        document.querySelector('#col2-cash').style.display = "none";
        
        document.querySelector('#col3-coins').style.display = "none";
        document.querySelector('#col3-rooster').style.display = "none";
        document.querySelector('#col3-lily').style.display = "none";
        document.querySelector('#col3-car').style.display = "inline-flex";
        document.querySelector('#col3-cash').style.display = "none";
    }
    else if (random < 100) {
        console.log("between 67 and 100")
        document.querySelector('#col1-coins').style.display = "none";
        document.querySelector('#col1-rooster').style.display = "none";
        document.querySelector('#col1-lily').style.display = "none";
        document.querySelector('#col1-car').style.display = "none";
        document.querySelector('#col1-cash').style.display = "inline-flex";

        document.querySelector('#col2-coins').style.display = "none";        
        document.querySelector('#col2-rooster').style.display = "none";        
        document.querySelector('#col2-lily').style.display = "none";        
        document.querySelector('#col2-car').style.display = "none";        
        document.querySelector('#col2-cash').style.display = "inline-flex";
        
        document.querySelector('#col3-coins').style.display = "none";
        document.querySelector('#col3-rooster').style.display = "none";
        document.querySelector('#col3-lily').style.display = "none";
        document.querySelector('#col3-car').style.display = "none";
        document.querySelector('#col3-cash').style.display = "inline-flex";
    }


        if (random <= 46) {
        let newWallet = myWallet - bet;
        if (myWallet > 0) {
        document.querySelector('#wallet').innerText = newWallet
        myWallet = newWallet
        console.log(newWallet)
        return myWallet
            } else if (myWallet <= 0) {
        //   document.querySelector('span').style.display = "none"
          document.querySelector('#reloadWallet').addEventListener('click', reloadWallet);
          document.querySelector('p').innerText = `You are out of money!`
          document.querySelector('#min').disabled = true;
          document.querySelector('#max').disabled = true;
          document.querySelector('#play').disabled = true;
          }
    
        } else if (random <= 82) {
            let newWallet = myWallet;
            if (myWallet > 0) {
            document.querySelector('#wallet').innerText = newWallet
            myWallet = newWallet
            console.log(newWallet)
            return myWallet
            } else if (myWallet <= 0) {
        //   document.querySelector('span').style.display = "none"
          document.querySelector('#reloadWallet').addEventListener('click', reloadWallet);
          document.querySelector('p').innerText = `You are out of money!`
          document.querySelector('#min').disabled = true;
          document.querySelector('#max').disabled = true;
          document.querySelector('#play').disabled = true;
          }
        } else if (random <= 100) {
            let newWallet = myWallet + bet*2;
            if (myWallet > 0) {
            document.querySelector('#wallet').innerText = newWallet
            myWallet = newWallet
            console.log(newWallet)
            return myWallet
            } else if (myWallet <= 0) {
        // document.querySelector('span').style.display = "none"
        console.log(myWallet);
        document.querySelector('#reloadWallet').addEventListener('click', reloadWallet);
        document.querySelector('p').innerText = `You are out of money!`
        document.querySelector('#min').disabled = true;
        document.querySelector('#max').disabled = true;
        document.querySelector('#play').disabled = true;
        }
        }
    }
    // END OF CALCULATE BET FUNCTION        

    // RELOAD WALLET
    document.querySelector('#reloadWallet').addEventListener('click', reloadWallet);

    function reloadWallet() {
        window.location.reload();
    }





