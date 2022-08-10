function init () {
    const takeOff = document.getElementById("takeoff");
    const shuttleBackground = document.getElementById("shuttleBackground");
    

    takeOff.addEventListener('click', event => {
     let response = window.confirm('Confirm that the shuttle is ready for takeoff');
     if (response === true) {
        paragraph.innerHTML = ('Shuttle in flight.');
        shuttleBackground.target.style.backgroundColor = "blue";
     }
    });
    
    
    
}

window.addEventListener("load", init);
