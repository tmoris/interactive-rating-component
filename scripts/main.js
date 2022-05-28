 // Get element from DOM

const cardButton =  document.querySelector('.card-btn'); 
const ratingCard = document.querySelector('.rating-section');
const thanksCard = document.querySelector('.thanks-section');
const rateNumber = document.querySelectorAll('.rates');

//  removing the tahnks card from the DOM
thanksCard.classList.add('invisible');
//  adding a click envent listener on the rating card button 
cardButton.addEventListener('click', () => {
  
  cardChanger();
});
// creating a funtion that changes cards in the DOM
function cardChanger () {
  ratingCard.classList.add('invisible');
  thanksCard.classList.remove('invisible');
}
