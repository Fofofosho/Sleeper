// require node process stuff so I can call my script.
const exec = require("child_process").exec;
const os = require("os");
const notification = require("./notification.js");

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
    let updates = document.getElementById("wordage");
    let timer = document.getElementById("timer");
    let textNode = document.createTextNode("");

    updates.classList.toggle("hidden");
    timer.classList.toggle("hidden");
    timer.appendChild(textNode);

    timer.addEventListener("timeEnded", function() {
        setTimeout(function() {
            console.log("ending event fired");
            document.getElementById("sleep-text").innerText = "SLEEp!";
            executeSleep();
        }, 1000);
    });

    let milliVal = convertToMilli(val, sel);
    let seconds = milliVal / 1000;
    let notificationFired = false;
    let interval = setInterval(function() {
        timer.innerHTML = `<p>${seconds}</p>`;
        console.log(`Sleeping in ${seconds} ${sel}`);
        if ( !notificationFired )
        {
            if ( seconds <= 30 )
            {
                /* TEST 1 */
                // notification.notify(seconds);
                /* END TEST 1 */

                /* TEST 2 */
                // notify(seconds);
                /* END TEST 2 */

                /* TEST 3 */
                // process.nextTick(notify(seconds));
                /* END TEST 3 */

                /* TEST 4 */
                let options = [
                    {
                        title: "Sleeper Notification",
                        body: `Computer is going to sleep in ${seconds} SECONDS`
                    }
                ]

                new Notification(options[0].title, options[0]);
                /* END TEST 4 */

                console.log("TEST");
                notificationFired = true;
            }
        }

        if ( seconds == 0 )
            timer.dispatchEvent(event);

        seconds--;
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

function executeSleep() {
    //Specifically for windows
    if (os.type() === "Windows_NT")
    {
        exec('assets\\test.bat',
            function (error, stdout, stderr) {
                if (error) {
                    console.log('exec error: ' + error);
                    return;
                }

                console.log('stdout: ' + stdout);
                console.log('stderr: ' + stderr);
            });
    }
    else
    {
        exec('assets\\sleep-UNIX.sh',
            function (error, stdout, stderr) {
                if (error) {
                    console.log('exec error: ' + error);
                    return;
                }

                console.log('stdout: ' + stdout);
                console.log('stderr: ' + stderr);
            });
    }
}

function notify(time) {
    let path = require("path");
    let options = [
        {
            title: "Sleeper Notification",
            body: `Computer is going to sleep in ${time} SECONDS`
        }
    ]

    new Notification(options[0].title, options[0]);
}
