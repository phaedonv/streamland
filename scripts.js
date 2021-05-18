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


