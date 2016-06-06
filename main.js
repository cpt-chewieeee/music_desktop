var electron = require('electron');
var electronApp = {};

electronApp.app =electron.app;
electronApp.BrowserWindow = electron.BrowserWindow;
electronApp.mainWindow = null;

function createWindow(){
	electronApp.mainWindow = new electronApp.BrowserWindow ({
		width: 1000,
		height: 625
	});
	electronApp.mainWindow.loadURL('file://' + __dirname + '/index.html');
	electronApp.mainWindow.webContents.openDevTools();
	electronApp.mainWindow.on('closed', function(){
		electronApp.mainWindow = null;
	});
}
function allClosed(){
	electronApp.app.quit();
}
function activate(){
	if(electronApp.mainWindow === null){
		createWindow();
	}
}

electronApp.app.on('ready', createWindow);
electronApp.app.on('window-all-closed', allClosed);
electronApp.app.on('activate', activate);

