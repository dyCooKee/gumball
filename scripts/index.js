// JavaScript

let x;
console.log(x); // undefined
// console.clear();
// window.alert("THIS IS AN ALERT!");
// window.prompt("How old are you?");
// window.open('https://www.youtube.com/watch?v=I6vi-jhq3ac', '_blank');
// window.location.href = 'https://www.youtube.com/watch?v=I6vi-jhq3ac';

let username;
let age;
let clicks = Number();

function cleanErr() {
    document.getElementById("err1").style.display = "none";
    document.getElementById("err2").style.display = "none";
}

function cleanInputs() {
    var x = document.getElementsByClassName("form");
    for (var i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
}

function changeImage() {
    var x = document.getElementById("gum");
    x.id = "gum2";
    x.src = "images/gumball-theme.webp";
}

function playAudio() {
    var audio = document.getElementById("gumball-theme");
    audio.volume = 0.25;
    audio.play();
}

// first way
function submit(){
    cleanErr();
    username = document.getElementById("myIn1").value;
    age = document.getElementById("myIn2").value; age = Number(age);
    if (!username && !age) { 
        document.getElementById("err1").style.display = "inline-block";
        document.getElementById("err2").style.display = "inline-block";
        return;
    }
    if (!username) { 
        document.getElementById("err1").style.display = "inline-block";
        return;
    }
    if (!age) { 
        document.getElementById("err2").style.display = "inline-block";
        return;
    }
    cleanErr();
    cleanInputs();
    changeImage();
    playAudio();
    document.getElementById("myOut1").innerHTML = "Hello "+username+"!";
    document.getElementById("myOut2").innerHTML = "Your are "+age+" years old.";
    document.getElementById("date").innerHTML = "You have submitted on date:<br>"+Date();
    console.log(username, typeof username);
    console.log(age, typeof age);
}

// second way
document.getElementById("gum").onclick = function(){
    var x = document.getElementById("gum");
    clicks++;
    if (clicks > 4){
        x.src = "images/angry-gumball.gif";
        clicks-=2;
        return
    }
    x.src = "images/gumball.png";
}


//gumball jump
// function zjump() {
//     let zac = document.getElementById("zac");
//     let style = getComputedStyle(zac);
//     let bottom = parseInt(style.bottom);

//     if (bottom > 20) {return;}
//     x = 100;

//     document.getElementById("zac").style.bottom = x+bottom+"px";
//     setTimeout(() => { document.getElementById("zac").style.bottom = "0px"; }, 500);
    
//   }

// document.addEventListener("keydown", event => {
//     if (event.key === "w") {
//         zjump();
//       }
//     });
