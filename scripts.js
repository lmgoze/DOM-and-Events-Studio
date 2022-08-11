function init () {
    const takeOff = document.getElementById("takeoff");
    const shuttleBackground = document.getElementById("shuttleBackground");
    const landButton = document.getElementById("landing");
    const abortMission = document.getElementById("missionAbort");
    const paragraph = document.getElementById("flightStatus");
    const spaceShuttleHgt = document.getElementById("spaceShuttleHeight");
    const upButton = document.getElementById("up");
    const downButton = document.getElementById("down");
    const rightButton = document.getElementById("right");
    const leftButton = document.getElementById("left");
    const moveRocket = document.getElementById("rocket");
    

    takeOff.addEventListener('click', event => {
     let response = window.confirm('Confirm that the shuttle is ready for takeoff');
     if (response === true) {
        paragraph.innerHTML = ('Shuttle in flight.');
        shuttleBackground.style.backgroundColor = "blue";
        spaceShuttleHgt.innerHTML = parseInt(spaceShuttleHgt.innerHTML) + 10000;
     }
    });

    landButton.addEventListener('click', event => {
        let resp = window.alert('Confirm that the shutThe shuttle is landing. Landing gear engaged.');
          paragraph.innerHTML = ('The shuttle has landed.');
          shuttleBackground.style.backgroundColor = "green";
          spaceShuttleHgt.innerHTML -= parseInt(spaceShuttleHgt.innerHTML);
       });

    abortMission.addEventListener('click', event => {
        let res = window.confirm('Confirm that you want to abort the mission.');
        if (res === true) {
           paragraph.innerHTML = ('Mission aborted.');
           shuttleBackground.style.backgroundColor = "green";
           spaceShuttleHgt.innerHTML -= parseInt(spaceShuttleHgt.innerHTML)
        }
    });   
    
    upButton.addEventListener('click', event => {
        spaceShuttleHgt.innerHTML = parseInt(spaceShuttleHgt.innerHTML) + 10000;
    });
    
    downButton.addEventListener('click', event => {
        spaceShuttleHgt.innerHTML = parseInt(spaceShuttleHgt.innerHTML) - 10000;
    });

    rightButton.addEventListener('click', event => {
        moveRocket.style.position = 'absolute';
        moveRocket.style.right = moveRocket.style.right + 10;
    });

    leftButton.addEventListener('click', event => {
        moveRocket.style.position = 'absolute';
        moveRocket.style.left = moveRocket.style.left + 10;
    });
       
       
}

window.addEventListener("load", init);
