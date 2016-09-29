const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

let mainWindow;

app.on("ready", function() {
    mainWindow = new BrowserWindow(
        {
            width: 300, 
            height: 300,
            title: "Sleeper",
            autoHideMenuBar: true
        });

    mainWindow.loadURL(`file://${__dirname}/index.html`);

    // On close, deref window
    mainWindow.on("closed", function() {
        mainWindow = null;
    });

});