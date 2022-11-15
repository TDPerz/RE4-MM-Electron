const path = require('path')
const { app, BrowserWindow, ipcMain, ipcRenderer } = require('electron')

function createWindow() {
    const win = new BrowserWindow({
        width: 1200,
        height: 800,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        },
        minHeight:600,
        minWidth:800,
        titleBarStyle: 'hidden'
    })

    win.loadURL("http://localhost:3000/")

    ipcMain.on('minimize', ()=>{
        win.minimize()
    })

    ipcMain.on('maximize', (event, data)=>{
        if(win.isMaximized()){
            win.unmaximize()
        }
        else{
            win.maximize()
        }
        win.webContents.send("statussize", {maxi:win.isMaximized()})
    })

    ipcMain.on('close', () => {
        win.close()
    })

}

app.whenReady().then(() => {
    createWindow()

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})