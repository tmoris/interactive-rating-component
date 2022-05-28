 const cardButton =  document.querySelector('.card-btn'); // Get element from DOM
 const ratingCard = document.querySelector('.rating-section');
 const thanksCard = document.querySelector('.thanks-section');
 thanksCard.classList.add('invisible');
cardButton.addEventListener('click', () => {
cardChanger();
});
function cardChanger () {
ratingCard.classList.add('invisible');
thanksCard.classList.remove('invisible');
}
