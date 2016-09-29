// require node process stuff so I can call my script.

var button = document.getElementById("setBtn");
button.addEventListener("click", function() {
    // get value user input
    let userInput = document.getElementById("inputVal").value;
    if ( userInput === "" )
    {
        return undefined;
    }

    // get increments selected
    let selectedVal = document.getElementById("increments");
    let text = selectedVal.options[selectedVal.selectedIndex].text;

    updateField(userInput, text);
});

function updateField(val, sel) {
    let event = new Event("timeEnded");
    let textNode = document.createTextNode(`${val} ${sel}`);
    let updates = document.getElementById("wordage");
    let timer = document.getElementById("timer");
    updates.classList.toggle("hidden");
    timer.classList.toggle("hidden");
    timer.appendChild(textNode);

    timer.addEventListener("timeEnded", function() {
        setTimeout(function() {
            console.log("ending event fired");
            document.getElementById("sleep-text").innerText = "SLEEp!";
        }, 1000);
    });

    let milliVal = convertToMilli(val, sel);
    let newVal = milliVal / 1000;
    var interval = setInterval(function() {
        timer.innerHTML = `<p>${newVal} seconds</p>`;
        console.log(`Sleeping in ${newVal} ${sel}`);
        if ( newVal == 0 )
            timer.dispatchEvent(event);

        newVal--;
    }, 1000);

    setTimeout(function() {
        console.log("cleared interval");
        clearInterval(interval);
    }, milliVal + 1000 );
}

function convertToMilli(val, sel) {
    switch(sel)
    {
        case "seconds":
            return val * 1000;
        case "minutes":
            return val * 60 * 1000;
        case "hours":
            return val * 3600 * 1000;
    }
}