:root {
    --noseHeight: 60px;
    --noseWidth: 100px;
  }
  body {
    background-color: black;
  }
  
  .head {
    position: relative;
    background-color: #ffc0cb;
    width: 200px;
    height: 200px;
    margin-top: 20px;
    border-radius: 50%;
    border: 4px solid black;
  }
  
  .ear {
    position: absolute;
    width: 50px;
    height: 50px;
    background-color: #ffc0cb;
    border-radius: 50%;
    z-index: -1;
  }
  
  .ear:last-child {
      right: 0px;
  }
  
  .nose {
    position: absolute;
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100px;
    height: 60px;
    background-color: #f57187;
    border-radius: 35%;
    bottom: 30px;
    left: 50px;
    border: 2px solid black;
  }
  
  .nose .nostril {
    height: calc(var(--noseHeight)/2);
    width: calc(var(--noseWidth)/4);
    background-color: black;
    border-radius: 50%;
    margin: 10px;
  }
  
  .eye {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    border: 2px solid black;
    background-color: white;
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
  
  .eye:first-child {
    top: 40px;
    left: 30px;
  }
  
  .eye:last-child {
    top: 40px;
    right: 30px;
  }
  
  .eye .pupil {
    position: absolute;
    width: 25px;
    height: 25px;
    background-color: black;
    border-radius: 50px;
  }
  
  :root {
    --noseHeight: 60px;
    --noseWidth: 100px;
  }
  body {
    background-color: black;
  }
  
  .head {
    position: relative;
    background-color: #ffc0cb;
    width: 200px;
    height: 200px;
    margin-top: 20px;
    border-radius: 50%;
    border: 4px solid black;
  }
  
  .ear {
    position: absolute;
    width: 50px;
    height: 50px;
    background-color: #ffc0cb;
    border-radius: 50%;
    z-index: -1;
  }
  
  .ear:last-child {
      right: 0px;
  }
  
  .nose {
    position: absolute;
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100px;
    height: 60px;
    background-color: #f57187;
    border-radius: 35%;
    bottom: 30px;
    left: 50px;
    border: 2px solid black;
  }
  
  .nose .nostril {
    height: calc(var(--noseHeight)/2);
    width: calc(var(--noseWidth)/4);
    background-color: black;
    border-radius: 50%;
    margin: 10px;
  }
  
  .eye {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    border: 2px solid black;
    background-color: white;
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
  
  .eye:first-child {
    top: 40px;
    left: 30px;
  }
  
  .eye:last-child {
    top: 40px;
    right: 30px;
  }
  
  .eye .pupil {
    position: absolute;
    width: 25px;
    height: 25px;
    background-color: black;
    border-radius: 50px;
  }
  
    