window.onload = display_ct();

function voegNulToe(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

function display_c(){
    var timeout = 1000; // Refresh rate in milli seconds
    tijd = setTimeout('display_ct()',timeout);
}
var i = 0;

function display_ct() {
    var d = new Date();

    var dagen = ['Zon', 'Maa', 'Din', 'Woe', 'Don', 'Vri', 'Zat'];

    var dd = dagen[d.getDay()];
    var hh = voegNulToe(d.getHours());
    var mm = voegNulToe(d.getMinutes());
    var ss = voegNulToe(d.getSeconds());


    if(i==0){
        document.getElementById('dag').innerHTML = '<p id="dag" class="jello animated">' + dd + '</p>';
        document.getElementById('hh').innerHTML = '<p id="hh" class="jello animated">' + hh + '</p>';
        document.getElementById('mm').innerHTML = '<p id="mm" class="jello animated">' + mm + '</p>';
        i++;
    }

    if (ss == 0){
        document.getElementById('mm').innerHTML = '<p id="mm" class="jello animated">' + mm + '</p>';
    }
    document.getElementById('ss').innerHTML = '<p id="ss" class="jello animated">' + ss + '</p>';

    //timeout
    display_c();
}



if (modes == 0){
    //dark modes aan
    bgShade = '#1d1d1d';
    shadow = "-20px -20px 30px rgba(255, 255, 255, 0.02), 20px 20px 30px rgba(0, 0, 0, 0.27)";
    /*urenWijzersShade = '#520000';
    minutenWijzersShade = '#a3a3a3';
    secondenWijzersShade = '#ff4914';* /
    tijdPuntenShade = '#04004c';*/
    modes = 1;
}
else{
    //lightmodes aan
    bgShade = '#E3EDF7';
    shadow = "-20px -20px 30px rgba(255, 255, 255, 0.24), 20px 20px 30px rgba(0, 0, 0, 0.13)";
    /*urenWijzersShade = '#ff0000';
    minutenWijzersShade = '#a3a3a3';
    secondenWijzersShade = '#ff4914';* /
    tijdPuntenShade = '#0d00ff';*/
    modes = 0;
}

/*wijzers[0].style.backgroundColor = wijzersShade1;
   wijzers[1].style.backgroundColor = wijzersShade2;
   wijzers[2].style.backgroundColor = wijzersShade3;*/

for (let i = 0; i < tijdPunten.length; i++) {
    tijdPunten[i].style.backgroundColor = tijdPuntenShade;
}

if(hulpmiddelencheck == 0){
    document.getElementById("HulpmiddelenButton").style.backgroundColor = shade3;
}

document.getElementById("logo").src = "img/logo.png";
document.getElementById("modesSwitch").src = "img/day.png";

var shade1;
var shade2;
var shade3;


const tijdPunten = document.getElementsByClassName('tijdsAanduiding');
const wijzers = document.getElementsByClassName('hand');
const dagAanduiding = document.getElementById('dag');