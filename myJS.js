const urenWijzer = document.getElementById('urenWijzer');
const minutenWijzer = document.getElementById('minutenWijzer');
const secondenWijzer = document.getElementById('secondenWijzer');

function tijdWeergave(){
    const huidigeTijd = new Date();

    var dagenNamen = ['Zon', 'Maa', 'Din', 'Woe', 'Don', 'Vri', 'Zat'];

    var dagen = dagenNamen[huidigeTijd.getDay()];
    document.getElementById('dag').innerHTML = '<p>' + dagen + '</p>';

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
    if (modes == 0){
        //dark modes aan
        bgShade = '#1d1d1d';
        shadow = "-20px -20px 30px rgba(255, 255, 255, 0.02), 20px 20px 30px rgba(0, 0, 0, 0.27)";
        text = '#E3EDF7';

        modes = 1;
    }
    else{
        //lightmodes aan
        bgShade = '#E3EDF7';
        text = '#1d1d1d';
        shadow = "-20px -20px 30px rgba(255, 255, 255, 0.24), 20px 20px 30px rgba(0, 0, 0, 0.13)";
        modes = 0;
    }

    //er moet [0] bij omdat hij anders niet weet welke nav er gebruikt moet worden ook al is er maar eentje

    // document.getElementsByTagName('p')[0].style.color = colorlight1;;
    document.getElementById('binnenRandKlok').style.backgroundColor = bgShade;
    document.getElementById('klok').style.backgroundColor = bgShade;
    document.getElementById('klok').style.boxShadow = shadow;
    document.getElementById('dag').style.color = text;


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

