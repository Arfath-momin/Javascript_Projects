const cars = ['./images/Ford-Mustang-bg.jpg','./images/Audi-bg.jpg','./images/McLaren-bg.jpg','./images/Rimac-bg.jpg','./images/Aston-Martin-bg.jpg','./images/Ferrari-bg.jpg','./images/Tuthill-bg.jpg']
const cards = document.querySelectorAll('.cards');
const text = document.querySelector('.card h3');
const span = document.querySelector('.card span');
const pre = document.querySelector('.pre');
const next = document.querySelector('.next');
let preIndex = 0;
let nextIndex = 0;
const section = document.querySelector('#section');

section.style.transition = 'all 0.6s linear'

setTimeout(()=>
{
    section.style.backgroundImage = `url(${cars[0]})`;
    cards[0].style.animation = 'upword 0.4s linear forwards'
    cards[0].children[0].style.animation = 'text-up 0.4s linear forwards'
    cards[0].children[1].style.animation = 'downwords 0.4s linear forwards'
},1000)

pre.addEventListener('click',()=>
{
   
        if(preIndex == 0)
    {
        preIndex = 0;
        nextIndex = 0;
    }
    else
    {
        preIndex--;
        nextIndex--;
        section.style.backgroundImage = `url(${cars[preIndex]})`;
        cards[preIndex].style.animation = 'upword 0.4s linear forwards'
        cards[preIndex].children[0].style.animation = 'text-up 0.4s linear forwards'
        cards[preIndex].children[1].style.animation = 'downwords 0.4s linear forwards'


        cards[preIndex+1].style.animation = 'upword-rev 0.4s linear forwards'
        cards[preIndex+1].children[0].style.animation = 'none'
        cards[preIndex+1].children[1].style.animation = 'none'
    }
    console.log(preIndex)
    console.log(nextIndex)
  
    
})

next.addEventListener('click',()=>
{
   
    if(nextIndex == cars.length-1)
    {
        nextIndex = cars.length-1;
        preIndex = cars.length-1;
    }
    else
    {
        nextIndex++;
        preIndex++;
    }
    section.style.backgroundImage = `url(${cars[nextIndex]})`;
    
    console.log(cars[nextIndex])
    cards[nextIndex].style.animation = 'upword 0.4s linear forwards'
    cards[nextIndex].children[0].style.animation = 'text-up 0.4s linear forwards'
    cards[nextIndex].children[1].style.animation = 'downwords 0.4s linear forwards'
   
    cards[preIndex-1].style.animation = 'upword-rev 0.4s linear forwards'
        cards[preIndex-1].children[0].style.animation = 'none'
        cards[preIndex-1].children[1].style.animation = 'none'
})

