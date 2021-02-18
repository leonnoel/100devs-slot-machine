document.querySelector('#wallet').innerText = 500;
// function loadWallet() {
//   document.querySelector('#wallet').innerText = 500
// }
let myWallet = Number(document.querySelector('#wallet').innerText)
console.log(myWallet)

// alert(myWallet)

let bet = Number("");

  // Grab the bet amount

  document.querySelector('#min').addEventListener('click', minBetValue) 
  document.querySelector('#max').addEventListener('click', maxBetValue) 
  
    // Subtract bet
  
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

// Calculate Bet function

document.querySelector('button').addEventListener("click", calculateBet);

function calculateBet() {

  let newWallet = myWallet - bet;
  if (myWallet > 0) {
  document.querySelector('#wallet').innerText = newWallet
  myWallet = newWallet
  return myWallet
  } else {
    document.querySelector('span').style.display = "none"
    document.querySelector('h2').innerText = `You are out of money!`
  }
}




// bet again button

document.querySelector('#betAgain').addEventListener("click", betAgain)

function betAgain() {
  document.querySelector('#min').disabled =false
  document.querySelector('#max').disabled = false;
}


// document.querySelector('#wallet').addEventListener('onchange', makeVisible);
// function makeVisible() {

//   console.log("working")
// document.querySelector('#min').style.visibility="visible";  
// document.querySelector('#max').style.visibility="visible";  
// }


// function calculateBet(two) {
//   let newWallet = myWallet - bet;
//   document.querySelector('#wallet').innerText = newWallet
//   return newWallet;
// }


// function calculateBet(three) {
//   let newWallet = myWallet - bet;
//   document.querySelector('#wallet').innerText = newWallet
//   return newWallet;


// }




// document.querySelector('#col2-coins').style.display="none";
// document.querySelector('button').addEventListener('click', getCard)
// one main function that fires on PLAY
// generate a random number between 1 and 10
// create conditionals that targets images to "display: none" or "display: line-item" in each column:
  // default is coins
  // targeted querySelector('co1>ul>li#coins)






// function getFetch(){
//   const choice = document.querySelector('input').value
//   console.log(choice)
//   const url = `https://api.nasa.gov/planetary/apod?api_key=iJy0Nd4wZZzfW2HFgBkNV4DDUsZ6PxL3RqQRgFfI&date=${choice}`

//   fetch(url)
//       .then(res => res.json()) // parse response as JSON
//       .then(data => {
//         console.log(data)
//         if(data.media_type === "image"){
//           document.querySelector('img').src = data.hdurl
//         }else if(data.media_type === 'video'){
//           document.querySelector('iframe').src = data.url
//         }else{
//           alert('Media Not Supported - Contact NASA IMMEDIATLY')
//         }
       
//         document.querySelector('h3').innerText = data.explanation
//       })
//       .catch(err => {
//           console.log(`error ${err}`)
//       });
// }

