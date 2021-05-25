/*(function () {

    var localClock = document.getElementById( "local-clock" );

    function updateClock ( clock ) {
      clock.innerHTML = new Date().toLocaleTimeString();
    }

    setInterval(function () {
        updateClock( localClock );
    }, 1000);

  }());

//local-clock + 1 hour (have to fix it somehow to UTC+03:00)

  (function () {

    Date.prototype.grHours = function(h){
        this.setHours(this.getHours()+h);
        return this;
    }

    var greekClock = document.getElementById( "greece-clock" );

    function updateClock ( clock ) {
      clock.innerHTML = new Date().grHours(1).toLocaleTimeString();
    }

    setInterval(function () {
        updateClock( greekClock );
    }, 1000);

  }());

*/
//testing code
//better to use luxon | much cleaner code ;)
const locations = document.querySelectorAll('section.times div')

const updateTimes = function () {
    locations.forEach(location => {
        const output = location.querySelector("output")

        const timezone = location.getAttribute("data-timezone")

        const now = luxon.DateTime.now().setZone(timezone)

        output.innerHTML = now.toFormat("HH:mm:ss")
    })
}

updateTimes()

setInterval(function () {
    updateTimes()
}, 1000)


//volume of background music

var kitRadio = document.getElementById("kit");
kitRadio.volume = 0.6;


/*another one play btn*/
const kit = document.getElementById("kit");
const box = document.querySelector('.box');

function togglePlay() {
  return kit.paused ? kit.play() : kit.pause();
};

box.addEventListener('click', (e)=>{
  e.target.classList.toggle('pause');
  togglePlay();
})

kit.onplaying = function() {
    box.classList.add('pause');
};

//volume control
var video = document.getElementById('kit');
var volumeControl = document.getElementById('vol-control');

var setVolume = function(){
    video.volume = this.value / 200;
};

volumeControl.addEventListener('change',setVolume);
volumeControl.addEventListener('input',setVolume);
