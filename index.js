const { app, BrowserWindow } = require("electron");

const { BrowserView } = require("electron/main");

let mainWindow;

app.on("ready", () => {
  mainWindow = new BrowserWindow({});

  mainWindow.loadURL(`file://${__dirname}/index.html`);
});