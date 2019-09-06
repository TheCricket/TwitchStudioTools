const { app, BrowserWindow } = require('electron');
const fs = require('fs');
const uuid = require('uuidv4');
const OBS = require('./obs');
const TwitchStudio = require('./twitch_studio');
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
        //TODO: Figure out positioning
        let game = TwitchStudio.createGameCapture(source.name, false, true, source.name, 0, 0, 0, 0, 0);
        break;
      case "ffmpeg_source":
        //Twitch does not support video sources yet
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
