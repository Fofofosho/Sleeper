# Getting started..
Any development work will require you to have nodejs and electron
1. Use the `npm install electron-prebuilt` package to setup electron.
2. `npm start` will launch the program. Voilà!

To build:
1. Use the [electron-packager](https://github.com/electron-userland/electron-packager) tool. I installed via command line with `npm install electron-packager -g`.
    * CLI input for Windows: `electron-packager . Sleeper --platform=win32 --arch=x64 --version=1.0.0`