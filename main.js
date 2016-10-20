const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const path = require('path');

let mainWindow;

app.on("ready", function() {
    mainWindow = new BrowserWindow(
        {
            width: 800,
            height: 600,
            title: "Sleeper",
            autoHideMenuBar: true,
            //only impacts Windows/Linux
            //http://stackoverflow.com/questions/31529772/setting-app-icon-for-electron-atom-shell-app
            icon: path.join(__dirname, "icon.png")
        });

    mainWindow.loadURL(`file://${__dirname}/index.html`);

    // On close, deref window
    mainWindow.on("closed", function() {
        mainWindow = null;
    });

});