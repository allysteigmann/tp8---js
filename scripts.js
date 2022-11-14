/* JavaScript code for memory game TP8-JS */

// set up card tracker
cardsClicked = 0;



function cardClicked(what) {
  
  // make sure the card hasn't been removed 
   if ( !what.classList.contains("matched") ) {
  
    if ( what.classList.contains("clicked") ) {
      // its already clicked, act appropriately
      what.classList.remove("clicked");
      cardsClicked--;

    } else {
      // its not already clicked
      what.classList.add("clicked");
      cardsClicked++;

      if (cardsClicked == 2) {
        // compare card values
        cardCompare();
      } 
    } 
   }
}

function cardCompare() {
  
  clickedCards = document.querySelectorAll(".clicked"); //collection of cards 
  
  // first clicked element is clickedCards[0]
  // second clicked element is clickedCards[1]
  
  matched = false; // track if the cards matched 
  
  if ( clickedCards[0].classList.contains("pic 1") && clickedCards[1].classList.contains("pic 1") ) {
    matched = true; // they matched pic1 
    
  } else if ( clickedCards[0].classList.contains("pic 2") && clickedCards[1].classList.contains("pic 2") ) {
    matched = true; // they matched pic2
}
  
 if (matched) {
   // hide cards 
   removeCards(clickedCards[0], clickedCards[1]);
   
 } else {
   // unflip cards 
   unflipCards(clickedCards[0], clickedCards[1]);
 }
  
}

function removeCards(cardA, cardB) {
  
  pause = setTimeout(function() {
  
  cardA.classList.remove("clicked");
  cardB.classList.remove("clicked");
  
  cardA.classList.add("matched");
  cardB.classList.add("matched");
  
  cardsClicked = 0;
    
  checkWinning();
    
  }, 1000);
}

function unflipCards(cardA, cardB) {
  
  pause = setTimeout(function() {
  
    cardA.classList.remove("clicked");
    cardB.classList.remove("clicked");
    cardsClicked = 0;
  }, 1000);
}

function checkWinning() {
  remainingCards = document.querySelectorAll(".card"); // get all cards
  
  // cycle through all cards and check for matched class 
  for (c = 0; c < remainingCards.length; c++) {
     if ( !remainingCards[c].classList.contains("matched")) {
       return;
     }
  }
  
  document.getElementById("mainTable").innerHTML = "You won!";
  
} 

function shuffleCards() {
  table = document.querySelector("#mainTable");
  cardCount = table.children.length;
  
  cardToMove = table.children[0];
  table.appendChild( cardToMove );
  
  for (c = 0; c < cardCount; c++); {
    randomCard = Math.floor( Math.random() * cardCount );
    cardToMove = table.children[randomCard];
    table.appendChild( cardToMove );
  }
  
}


// stuff to do when page loads
window.onload = function() {
  
  shuffleCards();
  
  cardList = document.querySelectorAll(".card"); //collection of cards 
  
  cardCount = cardList.length; //how many cards are on the table
  
  for (c = 0; c < cardCount; c++) {
    cardList[c].onclick = function() {
     cardClicked(this);
    }
  }
  
}