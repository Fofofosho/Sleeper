module.exports = {
    notify: function(time) {
        let path = require("path");
        let options = [
            {
                title: "Sleeper Notification",
                body: `Computer is going to sleep in ${time} SECONDS`
                // icon: path.join(__dirname, "icon.png")
            }
        ]

        new Notification(options[0].title, options[0]);
    }
}