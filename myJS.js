const urenWijzer = document.getElementById('urenWijzer');
const minutenWijzer = document.getElementById('minutenWijzer');
const secondenWijzer = document.getElementById('secondenWijzer');
const pTags = document.getElementsByTagName('p');

function tijdWeergave(){
    var huidigeTijd = new Date();

    const dagenNamen = ['Zon', 'Maa', 'Din', 'Woe', 'Don', 'Vri', 'Zat'];

    var dagen = dagenNamen[huidigeTijd.getDay()];
    document.getElementById('dag').innerHTML = "<p>" + dagen + '</p>';

    if (modes == 0){
        i = 0;
        while (i < pTags.length) {
            pTags[i].style.color = '#1d1d1d';
            i++;
        }
    }
    else{
        i = 0;
        while (i < pTags.length) {
            pTags[i].style.color = '#E3EDF7';
            i++;
        }
    }

    const seconden = huidigeTijd.getSeconds();
    const secondenHoek = ((seconden / 60) * 360) + 90;
    secondenWijzer.style.transform = `rotate(${secondenHoek}deg)`;

    const minuten = huidigeTijd.getMinutes();
    const minutenHoek = ((minuten / 60) * 360) + ((seconden/60)*6) + 90;
    minutenWijzer.style.transform = `rotate(${minutenHoek}deg)`;

    const uren = huidigeTijd.getHours();
    const urenHoek = ((uren / 12) * 360) + ((minuten/60)*30) + 90;
    urenWijzer.style.transform = `rotate(${urenHoek}deg)`;
    dagDeel();
}
setInterval(tijdWeergave, 1000);
tijdWeergave();


var modes = 0;

function colorswitch() {
    var bgShade;
    var shadow;
    var image;

    if (modes == 0){
        //dark modes aan
        bgShade = '#1d1d1d';
        shadow = "-20px -20px 30px rgba(255, 255, 255, 0.02), 20px 20px 30px rgba(0, 0, 0, 0.27)";
        image = "img/icons/light/Night.png";
        modes = 1;
    }
    else{
        //lightmodes aan
        bgShade = '#E3EDF7';
        shadow = "-20px -20px 30px rgba(255, 255, 255, 0.24), 20px 20px 30px rgba(0, 0, 0, 0.13)";
        image = "img/icons/dark/Daytime.png";
        modes = 0;
    }

    document.getElementById('binnenRandKlok').style.backgroundColor = bgShade;
    document.getElementById('klok').style.backgroundColor = bgShade;
    document.getElementById('klok').style.boxShadow = shadow;
    document.getElementById("modesSwitch").src = image;

    document.body.style.backgroundColor = bgShade;
}

function dagDeel(){
    var huidigeTijd = new Date();
    var dagDeel = huidigeTijd.getHours();
    console.log(dagDeel);

    if (dagDeel >= 6 && dagDeel < 8){
        document.getElementById("dagDeel").style.backgroundImage = "url('img/morning.jpg')";
        document.getElementById("tijdIcoon").style.backgroundImage = "url('img/icons/light/Sunrise.png')";
    }
    else if (dagDeel >= 8 && dagDeel < 18){
        document.getElementById("dagDeel").style.backgroundImage = "url('img/day.jpg')";
        document.getElementById("tijdIcoon").style.backgroundImage = "url('img/icons/dark/Daytime.png')";
    }
    else if (dagDeel >= 18 && dagDeel < 20){
        document.getElementById("dagDeel").style.backgroundImage = "url('img/sunset.jpg')";
        document.getElementById("tijdIcoon").style.backgroundImage = "url('img/icons/light/Sunset.png')";
    }
    else { //nacht
        document.getElementById("dagDeel").style.backgroundImage = "url('img/night.jpg')";
        document.getElementById("tijdIcoon").style.backgroundImage = "url('img/icons/light/Night.png')";
    }
}