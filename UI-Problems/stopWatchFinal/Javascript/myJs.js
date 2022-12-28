(function() {
    let lastTick;
    let totalTime = 0;
    let timer;

    let dom = {
      $startEl: document.getElementById('start-button'),
      $stopEl: document.getElementById('stop-button'),
      $resetEl: document.getElementById('reset-button'),
      $timerEl: document.getElementById('timer'),
    }
    
    // adding event listener
    dom.$startEl.addEventListener('click', handleStart);
    dom.$stopEl.addEventListener('click', handleStop);
    dom.$resetEl.addEventListener('click', handleReset);
    
    
    //functions
    function handleStart() {
      dom.$stopEl.disabled = false;
      dom.$resetEl.disabled = false;
      dom.$startEl.disabled = true;
      
      animationFrame = requestAnimationFrame(display);
      dom.$stopEl.disabled = false;
      dom.$resetEl.disabled = true;
      lastTick  = new Date();
      timer = setInterval(function() {
        var newTick = new Date();
        totalTime = totalTime + (newTick - lastTick);
        lastTick = newTick;
        display(totalTime)
      }, 1000);
    }
    
    function handleStop() {
      clearInterval(timer);
      dom.$stopEl.disabled = true;
      dom.$resetEl.disabled = false;
      dom.$startEl.disabled = false;
      
    }
    
    function handleReset() {
      clearInterval(timer);
      totalTime = 0;
      display();
      dom.$stopEl.disabled = true;
      dom.$resetEl.disabled = true;
      dom.$startEl.disabled = false;
    }
    
    function pad(val, paddingCount) {
      val = String(val);
      return val.padStart(paddingCount, '0'); // 0 will be used to fill padding
    }
    
    function display() {
     let milli = totalTime;
     let totalTimeInSec = Math.floor(totalTime / 1000);
     let min = Math.floor(totalTimeInSec / 60);
     let hour = Math.floor(min / 60);
    
     milli = pad(totalTime % 1000, 3);
     sec = pad(totalTimeInSec % 60, 2);
     min = pad(min % 60, 2);
     hour = pad(hour % 12,2);
     dom.$timerEl.textContent = `${min}:${sec}:${milli}`;
    }
    })(); // iffi