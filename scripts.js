(function () {

    var localClock = document.getElementById( "local-clock" );
  
    function updateClock ( clock ) {
      clock.innerHTML = new Date().toLocaleTimeString();
    }
  
    setInterval(function () {
        updateClock( localClock );
    }, 1000);
  
  }());

  ////////////////

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