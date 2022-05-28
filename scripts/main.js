 // Get element from DOM

const cardButton =  document.querySelector('.card-btn'); 
const ratingCard = document.querySelector('.rating-section');
const thanksCard = document.querySelector('.thanks-section');
const rates = document.querySelectorAll('.rates');
const backWardPage = document.querySelector('.backward-link');

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
  backWardPage.classList.remove('invisible');
}

backWardPage.addEventListener('click', () => {

ratingPageChanger();

});

function ratingPageChanger() {

  ratingCard.classList.remove('invisible');
  thanksCard.classList.add('invisible');
  backWardPage.classList.add('invisible');
}


rates.forEach(element => {

  rates.addEventListener('click', () => {
    document.querySelector('.rate-choice') = rates.values;
  });
});
