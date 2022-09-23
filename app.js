let answer1 = document.querySelector('.answer1')
let answer2 = document.querySelector('.answer2')
let answer3 = document.querySelector('.answer3')
let answer4 = document.querySelector('.answer4')
let answer5 = document.querySelector('.answer5')
let question1 = document.querySelector('.question1')
let question2 = document.querySelector('.question2')
let question3 = document.querySelector('.question3')
let question4 = document.querySelector('.question4')
let question5 = document.querySelector('.question5')
let arrow = document.querySelector('.arrow')
let arrow2 = document.querySelector('.arrow2')
let arrow3 = document.querySelector('.arrow3')
let arrow4 = document.querySelector('.arrow4')
let arrow5 = document.querySelector('.arrow5')

question1.addEventListener('click', ()=>{
    if(answer1.style.display == "none"){
        answer1.style.display = "block";
        question1.style.fontWeight = 700;
        arrow.style.transform = "rotate(180deg)";
    }
    else{
        answer1.style.display = "none";
        arrow.style.transform = "rotate(360deg)";
        question1.style.fontWeight = 400;
        
    }
})

question2.addEventListener('click', ()=>{
    if(answer2.style.display == "none"){
        answer2.style.display = "block"
        question2.style.fontWeight = 700
        arrow2.style.transform = 'rotate(180deg)'
    }
    else{
        answer2.style.display = "none"
        arrow2.style.transform = 'rotate(360deg)'
        question2.style.fontWeight = 400;
    }
})

question3.addEventListener('click', ()=>{
    if(answer3.style.display == "none"){
        answer3.style.display = "block"
        question3.style.fontWeight = 700
        arrow3.style.transform = 'rotate(180deg)'
    }
    else{
        answer3.style.display = "none";
        arrow3.style.transform = "rotate(360deg)";
        question3.style.fontWeight = 400;
        
    }
})

question4.addEventListener('click', ()=>{
    if(answer4.style.display == "none"){
        answer4.style.display = "block";
        question4.style.fontWeight = 700;
        arrow4.style.transform = 'rotate(180deg)';
        
    }
    else{
        answer4.style.display = "none";
        arrow4.style.transform = 'rotate(360deg)';
        question4.style.fontWeight = 400;
        
    }
})

question5.addEventListener('click', ()=>{
    if(answer5.style.display == "none"){
        answer5.style.display = "block";
        question5.style.fontWeight = 700;
        arrow5.style.transform = 'rotate(180deg)';
    }
    else{
        answer5.style.display = "none";
        arrow5.style.transform = 'rotate(360deg)';
        question5.style.fontWeight = 400;
    }
})