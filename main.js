var i = 0;
var txt = `



    Hey Harshita, 
    Do you know the difference between 'But I love You' and 'I Love You' ? 
    First one gives you an unconditional love and the second one drives you towards lots of condition. My love for you is that says no matter what happens, I will always be with you...💗
    I think soo much and i made this after all i am programmer 😜 It took fucking so many lines of code to make this haha 😂, 
    I propose you to be my lifetime without any condition I promise you that you will find no complaints in this relation. I want to be your true love and you can have me always by your side..
    
    I LOVE YOU!! 💝`
var speed = 120;

function typeWriter() {
    if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
    }
}

document.querySelector(".play").addEventListener('click' , hello);
function hello(){
    document.querySelector('.start').classList.add("fadeOut");
    document.querySelector(".play").classList.add("fadeOut")
    typeWriter()
};
document.addEventListener('click', musicPlay);
function musicPlay() {
    document.getElementById('playAudio').play();
    document.removeEventListener('click', musicPlay);
}
