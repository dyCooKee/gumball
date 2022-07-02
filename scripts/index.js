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
    var element = document.getElementById("gum2");
    var elem_display = "none";
    while (True) {
      if (element.style.display !== elem_display)
          break;
    }
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
