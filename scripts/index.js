function cleanForm() {
    var x = document.getElementsByClassName("form");
    for (var i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
}

function playGif() {
    var gum = document.getElementById("gum");
    var gum2 = document.getElementById("gum2");
    gum.style.display = "none";
    gum2.style.display = "flex";
}

function playAudio() {
    var audio = document.getElementById("gumball-theme");
    audio.volume = 0.25;
    audio.play();
}

function submit(){
    var username = document.getElementById("myIn1").value;
    var age = document.getElementById("myIn2").value; age = Number(age);
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
    cleanForm();
    playGif();
    playAudio();
    document.getElementById("myOut1").innerHTML = "Hello "+username+"!";
    document.getElementById("myOut2").innerHTML = "Your are "+age+" years old.";
}
