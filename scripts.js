(function () {

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
        this.setHours(this.getHours()-h);
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

//buttons
function fun1() {
    document.getElementById("frame").src = "https://liveopen.siliconweb.com/openTvLive/OpenLive2/chunklist.m3u8"; //open
    alert("here should be open!");
} 

function fun2() {
    document.getElementById("frame").src = "https://ert-live-bcbs15228.siliconweb.com/media/ert_1_ww/ert_1_wwmedium.m3u8"; //ertflix
} 

function fun3() {
    document.getElementById("hls-example").src = "https://www.youtube.com/embed/sbPPORGpMfI"; //random live from youtube
} 