/* JavaScript code for memory game TP8-JS */

window.onload = function() {
  
  cardList = document.querySelectorAll(".card"); //collection of cards 
  
  cardCount = cardList.length; //how many cards are on the table
  
  for (c = 0; c < cardCount; c++) {
    cardList[c].onclick = function() {
      this.classList.toggle("clicked");
    }
  }
  
}