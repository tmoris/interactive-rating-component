 const cardButton =  document.querySelector('.card-btn'); // Get element from DOM
 const ratingCard = document.querySelector('.rating-section');
 const thanksCard = document.querySelector('.thanks-section');
 thanksCard.classList.add('invisible');
//  ratingCard.classList.add('invisible');
cardButton.addEventListener('click', () => {
cardChanger();
});
function cardChanger () {
  if(thanksCard === thanksCard.classList.contains('invisible')) {
    thanksCard.classList.remove('invicible');
  }
  
}
