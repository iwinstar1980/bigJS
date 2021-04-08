const { app, BrowserWindow } = require('electron');

function createWindow () {
    let win = new BrowserWindow ({
        width: 600,
        height: 400,
        backgroundColor: '#666666',
        webPreferences: {
            nodeIntegration: true
        }
    });
    win.loadFile('index.html');
    // win.loadURL('https://www.yahoo.co.jp');
}

app.whenReady().then(createWindow);