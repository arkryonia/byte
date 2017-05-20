// Import app and BrowserWindow
const { app, BrowserWindow } = require('electron')

// Setting up the window
let win
let appURL = `file://${__dirname}/app/index.html`

console.log(appURL)

function createWindow(){
    win = new BrowserWindow({
        width: 800,
        height: 600
    })

    win.loadURL(appURL)

    win.on('close', () => {
        win = null
    })

    win.webContents.openDevTools()
}

app.on('ready', createWindow)

app.on('window-all-closeed', () => {
    if ( process.plateform !== 'darwin')
        app.quit()
})

app.on('activate', () => {
    if (win == null) 
        createWindow()
})



