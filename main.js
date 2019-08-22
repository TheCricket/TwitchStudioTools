const { app, BrowserWindow } = require('electron');
const fs = require('fs');
const uuid = require('uuid/v4');
let win;

function createWindow () {
  win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  });

  // noinspection JSIgnoredPromiseFromCall
  win.loadFile('index.html');

  win.on('closed', () => {
    win = null;
  })
}

function createGameCapture(source) {
  let name = source.name;
  let gameSource = source.settings.window; //TODO: May not be feasible. Will see
}

function createVideoSource(source) {
  let name = source.name;
  let videoSource = source.settings.local_file;
  let doesLoop = source.settings.looping;
}

function createImagesSource(source) {
  let name = source.name;
  let imageSource = source.settings.file;
}

function createMonitorCapture(source) {
  let name = source.name;
  //TODO: Figure out which monitor is being captured
}

function buildScene(source, objects) {

}

app.on('ready', () => {
  createWindow();
  let obs_file = fs.readFileSync('test/obs.json');
  let studio_file = fs.readFileSync('test/twitch_studios.json');

  let obs = JSON.parse(obs_file);
  let twitch_studio = JSON.parse(studio_file);

  let scenes = obs.scene_order;
  let sources = obs.sources;

  sources.forEach(source => {
    switch(source.id) {
      case "scene":
        break;
      case "game_capture":
        break;
      case "ffmpeg_source":
        break;
      case "image_source":
        break;
      case "monitor_capture":
        break;
      default:
        console.log(`Please let Cricket know about ${source.id}`);
    }
  });

  console.log(obs);
  console.log(twitch_studio);
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (win === null) {
    createWindow()
  }
});
