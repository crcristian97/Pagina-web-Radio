const typed = new Typed('.typed',{
    strings: [
        '<i class="mascota">Radio<i>' ,
        '<i class="mascota">Musica<i>'
    ],
    stringsElement: '#cadenas-texto',
    typeSpeed: 75,
    startDelay:300,
    backSpeed: 75,
    smartBackspace: true,
    shuffle: false,
    backDelay: 1500,
    loop: true,
    loopCount:false,
    showCursor: true,
    cursorChar: '|',
    contentType: 'html',
}) ;

var audio = document.getElementById('myAudio');
var butn = document.getElementById('demo');


function Play(){
    if(audio.paused){
        audio.play()
        $('button').addClass("active")
    } else{
        audio.pause()
        $('button').removeClass("active");
    }
};

