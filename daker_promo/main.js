
const contact__block1 = document.getElementById('contact__block1');
const contact__block2 = document.getElementById('contact__block2');

const arrow__form = document.getElementById('arrow__form');
const arrow__contact = document.getElementById('arrow__contact');

const number__counter = document.getElementById('number__counter');
arrow__form.addEventListener('click', ()=>{
  contact__block1.style.animationName = 'slideLeft';
  contact__block2.style.animationName = 'slideRight';
  number__counter.innerText = "02";
});
arrow__contact.addEventListener('click', ()=>{
  number__counter.innerText = "01";
  contact__block2.style.animationName = 'slideRightBack';
  contact__block1.style.animationName = 'slideLeftBack';
} );

