function init () {
    const takeOff = document.getElementById("takeoff");
    const shuttleBackground = document.getElementById("shuttleBackground");
    const landButton = document.getElementById("landing");
    const abortMission = document.getElementById("missionAbort");
    const paragraph = document.getElementById("flightStatus");
    const spaceShuttleHgt = document.getElementById("spaceShuttleHeight");
    

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
          window.location = paragraph.innerHTML = ('The shuttle has landed.');
           shuttleBackground.target.style.backgroundColor = "blue";
       });

    abortMission.addEventListener('click', event => {
        let res = window.confirm('Confirm that you want to abort the mission.');
        if (res === true) {
           paragraph.innerHTML = ('Mission aborted.');
           shuttleBackground.target.style.backgroundColor = "green";
        }
       });   
    
}

window.addEventListener("load", init);
