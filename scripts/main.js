/*TIPPING*/

const inputField = document.getElementById('input-field');
const mensajeDiv = document.getElementById('mensaje');
let typingTimer;
const doneTypingInterval = 500;


inputField.addEventListener('keydown', function () {

    mensajeDiv.style.display = 'block';
    clearTimeout(typingTimer);
    typingTimer = setTimeout(hideDiv, doneTypingInterval);
});


inputField.addEventListener('blur', function () {

    mensajeDiv.style.display = 'none';
});


function hideDiv() {
    mensajeDiv.style.opacity = 0;

    setTimeout(() => {
        mensajeDiv.style.display = 'none';
        mensajeDiv.style.opacity = 1;
    }, 0);
}


/*TEMAS*/

/*OPTIONS*/

var themesMenuOpen = false

function showThemes() {

    var themesMenu = document.getElementsByClassName('themes-menu')[0];

    if (!themesMenuOpen) {
        themesMenu.style.display = 'flex';

        themesMenuOpen = true;

        /*CRUELTY*/


        document.getElementsByClassName('cruelty')[0].addEventListener('click', function () {
            document.documentElement.style.setProperty('--theme-back', '#13FF00');
            document.documentElement.style.setProperty('--theme-front', '#ff00c8');
            document.documentElement.style.setProperty('--theme-third', '#00A000');
            document.documentElement.style.setProperty('--theme-fourth', '#A50055');
            document.documentElement.style.setProperty('--theme-static', 'url("static green.gif")');
            document.documentElement.style.setProperty('--theme-bg', 'url("bg green.gif")');
            /*document.documentElement.style.setProperty('--oni-status', 'url(ao_oni_dance.gif)');*/

            var logo = document.getElementById('logo');
            logo.src = 'logo green.png';

            var megaSatan = document.getElementById('megaSatan');
            megaSatan.src = 'brimstone green.gif';

            megaSatan.style.display = 'block';
            setTimeout(function () {
                megaSatan.style.display = 'none';
            }, 1180);

            var brimstoneSfx = document.getElementById('brimstoneSfx');
            brimstoneSfx.play();

            localStorage.setItem('theme-back', '#13FF00');
            localStorage.setItem('theme-front', '#ff00c8');
            localStorage.setItem('theme-third', '#00A000');
            localStorage.setItem('theme-static', 'url("static green.gif")');
            localStorage.setItem('theme-bg', 'url("bg green.gif")');

            var logo = document.getElementById('logo');
            logo.src = 'logo green.png';
            localStorage.setItem('theme-logo', 'logo green.PNG');
        });

        /*NEWELLS*/

        document.getElementsByClassName('newells')[0].addEventListener('click', function () {
            document.documentElement.style.setProperty('--theme-back', '#F42121');
            document.documentElement.style.setProperty('--theme-front', '#000');
            document.documentElement.style.setProperty('--theme-third', '#A00000');
            document.documentElement.style.setProperty('--theme-static', 'url("static red.gif")');
            document.documentElement.style.setProperty('--theme-bg', 'url("bg red.gif")');

            var logo = document.getElementById('logo');
            logo.src = 'logo red.gif';

            var megaSatan = document.getElementById('megaSatan');
            megaSatan.src = 'brimstone red.gif';

            megaSatan.style.display = 'block';
            setTimeout(function () {
                megaSatan.style.display = 'none';
            }, 1180);

            var brimstoneSfx = document.getElementById('brimstoneSfx');
            brimstoneSfx.play();

            localStorage.setItem('theme-back', '#F42121');
            localStorage.setItem('theme-front', '#000');
            localStorage.setItem('theme-third', '#A00000');
            localStorage.setItem('theme-static', 'url("static red.gif")');
            localStorage.setItem('theme-bg', 'url("bg red.gif")');

            var logo = document.getElementById('logo');
            logo.src = 'logo red.gif';
            localStorage.setItem('theme-logo', 'logo red.gif');
        });

        /*SEAPUNK*/

        document.getElementsByClassName('seapunk')[0].addEventListener('click', function () {
            document.documentElement.style.setProperty('--theme-back', '#7700ff');
            document.documentElement.style.setProperty('--theme-front', '#00c3ff');
            document.documentElement.style.setProperty('--theme-third', '#008DB8');
            document.documentElement.style.setProperty('--theme-static', 'url("static purple.gif")');
            document.documentElement.style.setProperty('--theme-bg', 'url("bg purple.gif")');

            var logo = document.getElementById('logo');
            logo.src = 'logo purple.png';

            var megaSatan = document.getElementById('megaSatan');
            megaSatan.src = 'brimstone purple.gif';

            megaSatan.style.display = 'block';
            setTimeout(function () {
                megaSatan.style.display = 'none';
            }, 1180);

            var brimstoneSfx = document.getElementById('brimstoneSfx');
            brimstoneSfx.play();

            localStorage.setItem('theme-back', '#7700ff');
            localStorage.setItem('theme-front', '#00c3ff');
            localStorage.setItem('theme-third', '#008DB8');
            localStorage.setItem('theme-static', 'url("static purple.gif")');
            localStorage.setItem('theme-bg', 'url("bg purple.gif")');

            var logo = document.getElementById('logo');
            logo.src = 'logo purple.png';
            localStorage.setItem('theme-logo', 'logo purple.png');
        });

        /*DUALITY*/

        document.getElementsByClassName('duality')[0].addEventListener('click', function () {
            document.documentElement.style.setProperty('--theme-back', '#FFF');
            document.documentElement.style.setProperty('--theme-front', '#000');
            document.documentElement.style.setProperty('--theme-third', '#9A9A9A');
            document.documentElement.style.setProperty('--theme-static', 'url("static white.gif")');
            document.documentElement.style.setProperty('--theme-bg', 'url("bg white.gif")');

            var logo = document.getElementById('logo');
            logo.src = 'logo black.png';

            var megaSatan = document.getElementById('megaSatan');
            megaSatan.src = 'brimstone white.gif';

            megaSatan.style.display = 'block';
            setTimeout(function () {
                megaSatan.style.display = 'none';
            }, 1180);

            var brimstoneSfx = document.getElementById('brimstoneSfx');
            brimstoneSfx.play();

            localStorage.setItem('theme-back', '#FFF');
            localStorage.setItem('theme-front', '#000');
            localStorage.setItem('theme-third', '#9A9A9A');
            localStorage.setItem('theme-static', 'url("static white.gif")');
            localStorage.setItem('theme-bg', 'url("bg white.gif")');

            var logo = document.getElementById('logo');
            logo.src = 'logo black.png';
            localStorage.setItem('theme-logo', 'logo black.png');
        });

    }

    else {
        themesMenu.style.display = 'none';

        themesMenuOpen = false;
    }

}


// CARGAR TEMA GUARDADO

window.addEventListener('load', function () {
    var themeBack = localStorage.getItem('theme-back');
    var themeFront = localStorage.getItem('theme-front');
    var themeThird = localStorage.getItem('theme-third');
    var themeStatic = localStorage.getItem('theme-static');
    var themeBg = localStorage.getItem('theme-bg');
    var themeLogo = localStorage.getItem('theme-logo');

    document.documentElement.style.setProperty('--theme-back', themeBack);
    document.documentElement.style.setProperty('--theme-front', themeFront);
    document.documentElement.style.setProperty('--theme-third', themeThird);
    document.documentElement.style.setProperty('--theme-static', themeStatic);
    document.documentElement.style.setProperty('--theme-bg', themeBg);

    var logo = document.getElementById('logo');
    if (themeLogo) {
        logo.src = themeLogo;
    }
});

/* MUTEAR PÁGINA */

function mutePage() {
    var allMediaElements = document.querySelectorAll("audio, video");
    allMediaElements.forEach(function (mediaElement) {
        mediaElement.muted = !mediaElement.muted; // Toggle mute state
    });
}

/*SALUDO*/

function mostrarHallo() {
    var divHi = document.getElementById("divHi");
    divHi.style.display = "block";

    var audioHi = document.getElementById("audioHi");
    audioHi.play();

    setTimeout(function () {
        divHi.style.display = "none";
    }, 1200);
};

/*DESPEDIDA*/

function mostrarByebye() {
    var divBye = document.getElementById("divBye");
    divBye.style.display = "block";

    var audioBye = document.getElementById("audioBye");
    audioBye.play();

    setTimeout(function () {
        divBye.style.display = "none";
    }, 1200);
};

/*FECHA Y HORA*/

function updateTime() {
    var now = new Date();
    var days = ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY'];
    var dayOfWeek = days[now.getDay()];
    var dateTime = dayOfWeek + '<br/>' + now.toLocaleString();
    document.getElementById("dateTime").innerHTML = dateTime;

    var dayPic = document.getElementById('dayPic');
    dayPic.src = 'days/' + dayOfWeek + '.jpg';
}

setInterval(updateTime, 1000);


/*DIVS ARRASTRABLES*/

var draggableDiv = document.querySelector(".draggableDiv");

var initialX, initialY;


draggableDiv.addEventListener('mousedown', function (e) {

    //OBTENER COORDENADAS ACTUALES DEL DIV

    var rect = draggableDiv.getBoundingClientRect();
    var offsetX = rect.left + 250 - window.pageXOffset;
    var offsetY = rect.top + 300 - window.pageYOffset;

    //POSICIÓN INICIAL DEL MOUSE

    initialX = e.clientX - offsetX;
    initialY = e.clientY - offsetY;

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
});


function onMouseMove(e) {

    //CALCULAR NUEVAS COORDENADAS

    var newX = e.clientX - initialX;
    var newY = e.clientY - initialY;

    //POSICIONAR EL DIV

    draggableDiv.style.left = newX + 'px';
    draggableDiv.style.top = newY + 'px';
}


function onMouseUp() {

    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseup', onMouseUp);
}


/*DISPLAY GODS MOUTH*/

document.querySelector("#ride-talk").addEventListener("click", function () {

    var godsMouth = document.querySelector("#gods-mouth");

    if (godsMouth.style.display === "none" || godsMouth.style.display === "") {
        godsMouth.style.display = "flex";
    }

    var marquees = document.querySelectorAll("#gm-marquees");
    marquees.forEach(function (marquee) {
        marquee.start();
    });

});

function gmClose() {
    var godsMouth = document.querySelector("#gods-mouth");
    godsMouth.style.display = "none";
}


const tolkienQuotes = [
    "“It's the job that's never started as takes longest to finish.”",
    "“Moonlight drowns out all but the brightest stars.”",
    "“Home is behind, the world ahead, and there are many paths to tread through shadows to the edge of night, until the stars are all alight.”",
    "“I want to be a healer, and love all things that grow and are not barren.”",
    "“A hunted man sometimes wearies of distrust and longs for friendship.”",
    "“Deeds will not be less valiant because they are unpraised.”",
    "“Yet such is oft the course of deeds that move the wheels of the world: small hands do them because they must, while the eyes of the great are elsewhere.”",
    "“Fear nothing! Have peace until the morning! Heed no nightly noises!”",
    "“Fantasy is escapist, and that is its glory. If a soldier is imprisoned by the enemy, don't we consider it his duty to escape?”",
    "“Real names tell you the story of the things they belong to”.",
    "“Let us remember that a traitor may betray himself and do good that he does not intend.”",
    "“I wished to be loved by another, but I desire no man's pity.”",
    "“Be bold, but wary! Keep up your merry hearts, and ride to meet your fortune!”",
    "“Yet it is not our part to master all the tides of the world, but to do what is in us for the succour of those years wherein we are set, uprooting the evil in the fields that we know, so that those who live after may have clean earth to till. What weather they shall have is not ours to rule.”",
    "“Memory is not what the heart desires. That is only a mirror,”",
    "“But do not despise the lore that has come down from distant years; for oft it may chance that old wives keep in memory word of things that once were needful for the wise to know.”",
    "“...and all the stars flowered in the sky.”"
];

let textIndex = 0;
let textTimeout;
let gmVoice = document.getElementById("gmVoice");
let isGeneratingText = false;
var talkButton = document.getElementById("gm-talk-order");

function startDialog() {
    if (isGeneratingText) {
        return;
    }

    isGeneratingText = true;
    const gmBox = document.querySelector(".gm-box");
    const textElement = document.getElementById("gmText");
    const gmPic = document.getElementById("gmPic");

    gmBox.style.display = "flex";
    gmBox.style.animation = "fadeIn 0.5s ease";

    gmPic.src = "saurons-mouth-pa.gif";

    textIndex = Math.floor(Math.random() * tolkienQuotes.length);

    gmVoice.currentTime = 0;
    gmVoice.volume = 0.5;
    gmVoice.play();
    talkButton.style.display = "none";

    displayTextLetterByLetter(tolkienQuotes[textIndex], textElement);
}

//MOSTRAR TEXTO

function displayTextLetterByLetter(text, element) {
    element.textContent = "";
    let i = 0;
    const speed = 40;
    const interval = setInterval(() => {
        if (i < text.length) {
            element.textContent += text[i];
            i++;
        } else {
            clearInterval(interval);
            isGeneratingText = false;
            gmVoice.pause();
            gmPic.src = "saurons-mouth-still.png";
            talkButton.style.display = "block";
        }
    }, speed);
}

let isSoundOn = true;

function toggleSound() {
    var gmVoice = document.getElementById("gmVoice");

    if (isSoundOn) {
        gmVoice.muted = true;

        var gmMute = document.querySelector('.fa-volume-high');
        gmMute.classList.remove('fa-volume-high');
        gmMute.classList.add('fa-volume-xmark');

    } else {
        gmVoice.muted = false;

        var gmMute = document.querySelector('.fa-volume-xmark');
        gmMute.classList.remove('fa-volume-xmark');
        gmMute.classList.add('fa-volume-high');
    }

    isSoundOn = !isSoundOn;
}


/*MASCARAS*/

var maskElements = document.getElementsByClassName('mask');
for (var i = 0; i < maskElements.length; i++) {
    maskElements[i].addEventListener('click', function () {

        var soukaSfx = document.getElementById('soukaSfx');
        soukaSfx.play();
    });
}

/*SHELL*/

var leftActive = false;
var rightActive = false;

document.getElementsByClassName('shell-left-display')[0].addEventListener('click', function () {

    if (!leftActive && !rightActive) {

        document.documentElement.style.setProperty('--overlay-direction', 'linear-gradient(90deg, var(--theme-front) 0%, var(--theme-front) 25%, rgba(0,0,0,0) 75%)');
        document.documentElement.style.setProperty('--left-bg', 'url(close1.png)');


        var ShellLeftContent = document.getElementById("shell-left-content");
        var ShellRightContent = document.getElementById("shell-right-content");

        ShellLeftContent.style.display = "flex";
        ShellRightContent.style.display = "none"

        leftActive = true;
    }

    else if (!leftActive && rightActive) {

        document.documentElement.style.setProperty('--overlay-direction', 'linear-gradient(90deg, var(--theme-front) 0%, var(--theme-front) 25%, rgba(0,0,0,0) 75%)');
        document.documentElement.style.setProperty('--left-bg', 'url(close1.png)');
        document.documentElement.style.setProperty('--right-bg', 'url(hand1.gif)');


        var ShellLeftContent = document.getElementById("shell-left-content");
        var ShellRightContent = document.getElementById("shell-right-content");

        ShellLeftContent.style.display = "flex";
        ShellRightContent.style.display = "none"

        leftActive = true;
        rightActive = false;

    }

    else if (leftActive && !rightActive) {

        document.documentElement.style.setProperty('--overlay-direction', '0');
        document.documentElement.style.setProperty('--left-bg', 'url(eye8.gif)');


        var ShellLeftContent = document.getElementById("shell-left-content");
        var ShellRightContent = document.getElementById("shell-right-content");

        ShellLeftContent.style.display = "none";
        ShellRightContent.style.display = "none"

        leftActive = false;
        rightActive = false;
    }

});

document.getElementsByClassName('shell-right-display')[0].addEventListener('click', function () {

    if (!rightActive && !leftActive) {
        document.documentElement.style.setProperty('--overlay-direction', 'linear-gradient(90deg, rgba(0,0,0,0) 25%, var(--theme-front) 70%, var(--theme-front) 100%)');
        document.documentElement.style.setProperty('--right-bg', 'url(close1.png)');

        var ShellRightContent = document.getElementById("shell-right-content");
        var ShellLeftContent = document.getElementById("shell-left-content");

        ShellRightContent.style.display = "flex";
        ShellLeftContent.style.display = "none";

        rightActive = true;
    }

    else if (!rightActive && leftActive) {
        document.documentElement.style.setProperty('--overlay-direction', 'linear-gradient(90deg, rgba(0,0,0,0) 25%, var(--theme-front) 70%, var(--theme-front) 100%)');
        document.documentElement.style.setProperty('--right-bg', 'url(close1.png)');
        document.documentElement.style.setProperty('--left-bg', 'url(eye8.gif)');

        var ShellRightContent = document.getElementById("shell-right-content");
        var ShellLeftContent = document.getElementById("shell-left-content");

        ShellRightContent.style.display = "flex";
        ShellLeftContent.style.display = "none";

        rightActive = true;
        leftActive = false;
    }

    else if (rightActive && !leftActive) {
        document.documentElement.style.setProperty('--overlay-direction', '0');
        document.documentElement.style.setProperty('--right-bg', 'url(hand1.gif)');

        var ShellRightContent = document.getElementById("shell-right-content");
        var ShellLeftContent = document.getElementById("shell-left-content");

        ShellRightContent.style.display = "none";
        ShellLeftContent.style.display = "none";

        rightActive = false;
        leftActive = false;
    }

});

/*HOVER SOUND*/

const leftSigils = document.querySelectorAll('.leftSigil');
const rightSigils = document.querySelectorAll('.rightSigil');
const hoverSfx1 = document.getElementById('hoverSfx1');

function hoverSound() {
    hoverSfx1.currentTime = 0;
    hoverSfx1.play();
}

leftSigils.forEach(function (leftSigil) {

    leftSigil.addEventListener('mouseenter', function () {
        hoverSound();
    });

    leftSigil.addEventListener('mouseleave', function () {
        hoverSfx1.pause();
    });

});

rightSigils.forEach(function (rightSigil) {

    rightSigil.addEventListener('mouseenter', function () {
        hoverSound();
    });

    rightSigil.addEventListener('mouseleave', function () {
        hoverSfx1.pause();
    });

});

/*OJOS*/

document.addEventListener("DOMContentLoaded", function () {

    document.querySelectorAll('[id^="eye"]').forEach(function (img) {
        img.addEventListener("click", function () {
            var num = this.getAttribute("data-num");
            mostrarPlaylist(num);
        });
    });
});

function mostrarPlaylist(num) {

    document.querySelectorAll('.playlist').forEach(function (playlist) {
        playlist.style.display = 'none';
    });

    document.getElementById("playlist" + num).style.display = 'block';


    var texto = obtenerTexto(num);
    document.getElementById("texto").innerText = texto;
}

function obtenerTexto(num) {

    switch (num) {
        case '1':
            return "DEAN BLUNT";

    }
}

/*GRIMOIRE OF MARISA*/

var grimoire = document.querySelector("#grimoire-of-marisa");
var grimoireMusic = document.getElementById("grimoireMusic");
grimoireMusic.volume = 0.3;
var overlay = document.getElementById("overlay");

document.getElementById("grimoireDisplay").addEventListener("click", function () {

    if (grimoire.style.display === "none" || grimoire.style.display === "") {

        grimoire.style.display = "flex";
        overlay.style.display = "block"
        grimoireMusic.play();

    }
    else {

        grimoire.style.display = "none";
        grimoireMusic.pause();
        overlay.style.display = "none";

    }

});

var grimoireMusicStatus = true;
var grimoireMusicSymbol = document.getElementById("grimoireMusicSymbol");

function grimoireMusicVol() {

    if (grimoireMusicStatus) {

        grimoireMusic.pause();
        grimoireMusicStatus = false;
        grimoireMusicSymbol.src = "grimoire-music-off.png"
    }
    else {
        grimoireMusic.play();
        grimoireMusicStatus = true;
        grimoireMusicSymbol.src = "grimoire-music-on.png"
    }

}

function hideGrimoire() {

    grimoire.style.display = "none";
    overlay.style.display = "none"
    grimoireMusic.pause();
    grimoireMusic.currentTime = 0;
    grimoireMusicStatus = true;
    grimoireMusicSymbol.src = "grimoire-music-on.png"

}

var pageLeft = 0;
var pageRight = 1;

var currentLeftPage = document.querySelector(".grimoire-page-left");
var currentRightPage = document.querySelector(".grimoire-page-right");

var pageSfx = document.getElementById("pageSfx");

var previousPage = document.getElementById("previousPage");
var openGrimoire = document.getElementById("openGrimoire");
var closeGrimoire = document.getElementById("closeGrimoire");
var nextPage = document.getElementById("nextPage");

nextPage.addEventListener("click", function () {

    pageLeft = pageLeft + 2;
    pageRight = pageRight + 2;

    pageSfx.play();
    currentLeftPage.src = "page" + pageLeft + ".png"
    currentRightPage.src = "page" + pageRight + ".png"

    if (currentLeftPage.src.endsWith("page0.png") && currentRightPage.src.endsWith("page1.png")) {

        previousPage.style.display = "none";
        closeGrimoire.style.display = "block";

    }

    else {

        previousPage.style.display = "block";
        closeGrimoire.style.display = "none";

    }

});


previousPage.addEventListener("click", function () {

    pageLeft = pageLeft - 2;
    pageRight = pageRight - 2;

    pageSfx.play();
    currentLeftPage.src = "page" + pageLeft + ".png"
    currentRightPage.src = "page" + pageRight + ".png"

    if (currentLeftPage.src.endsWith("page0.png") && currentRightPage.src.endsWith("page1.png")) {

        previousPage.style.display = "none";
        closeGrimoire.style.display = "block";

    }

    else {

        previousPage.style.display = "block";
        closeGrimoire.style.display = "none";

    }

});

var grimoirePages = document.getElementById("grimoire-pages");

openGrimoire.addEventListener("click", function () {

    document.documentElement.style.setProperty('--grimoire-open', 'url(grimoire-open.png)');

    grimoirePages.style.display = "flex";

    openGrimoire.style.display = "none";
    closeGrimoire.style.display = "block";
    previousPage.style.display = "none";
    nextPage.style.display = "block";

    var grimoireNav = document.getElementById("grimoire-navigation");

    grimoireNav.style.justifyContent = "space-between"

});

closeGrimoire.addEventListener("click", function () {

    document.documentElement.style.setProperty('--grimoire-open', 'url(grimoire-closed.png)');

    grimoirePages.style.display = "none";

    openGrimoire.style.display = "block";
    closeGrimoire.style.display = "none";
    previousPage.style.display = "none";
    nextPage.style.display = "none";

    var grimoireNav = document.getElementById("grimoire-navigation");

    grimoireNav.style.justifyContent = "flex-end"

});
