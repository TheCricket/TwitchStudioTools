const uuid = require('uuidv4');

exports.IconTypes = {
  CONTROLLER: "Controller",
  MULTISCREEN: "Multiscreen",
  PICTURE: "Picture",
  OP: "OP",
  WEBCAM: "Webcam",
  TEXT_TOOL: "TextTool"
};

exports.createLayers = (audioOutput, displayName) => {
  return {
    "audioOutput": audioOutput,
    "displayName": displayName,
    "id": uuid(),
    "videoOutput": uuid()
  };
};

exports.createWebcam = (name, isAspectUnlocked, isShared, pluginName, posBottom, posLeft, posTop, posRight, rot) => {
  return this.createLayer(name, isAspectUnlocked, isShared, IconTypes.WEBCAM, "windowsVideoCapture", "video", pluginName, 0, "source", posBottom, posLeft, posTop, posRight, rot);
};

exports.createGameCapture = (name, isAspectUnlocked, isShared, pluginName, posBottom, posLeft, posTop, posRight, rot) => {
  return this.createLayer(name, isAspectUnlocked, isShared, IconTypes.CONTROLLER, "primaryScreenShare", "video", pluginName, 0, "source", posBottom, posLeft, posTop, posRight, rot);
};

exports.createImage = (name, isAspectUnlocked, isShared, pluginName, posBottom, posLeft, posTop, posRight, rot) => {
  return this.createLayer(name, isAspectUnlocked, isShared, IconTypes.PICTURE, "imageSource", "video", pluginName, 0, "source", posBottom, posLeft, posTop, posRight, rot);
};

exports.createBackgroundColor = (name, isAspectUnlocked, isShared, pluginName, posBottom, posLeft, posTop, posRight, rot) => {
  return this.createLayer(name, isAspectUnlocked, isShared, IconTypes.MULTISCREEN, "colorInput", "video", pluginName, 0, "source", posBottom, posLeft, posTop, posRight, rot);
};

exports.createLayer = (name, isAspectUnlocked, isShared, iconType, pluginId, mediaType, pluginName, numInputs, pluginType, posBottom, posLeft, posTop, posRight, rot) => {
  let id = uuid();
  return {
    "clip": {
      "bottom": 0.0,
      "left": 0.0,
      "right": 0.0,
      "top": 0.0
    },
    "id": id,
    "isAspectUnlocked": isAspectUnlocked,
    "isErrored": false,
    "isHidden": false,
    "isLocked": false,
    "isShared": isShared,
    "name": name,
    "plugin": {
      "defaultPosition": {
        "bottom": 0.0,
        "left": 0.0,
        "right": 0.0,
        "top": 0.0
      },
      "icon": iconType,
      "id": pluginId,
      "media": mediaType,
      "name": pluginName,
      "numInputs": numInputs,
      "type": pluginType,
    },
    "position": {
      "bottom": posBottom,
      "left": posLeft,
      "top": posTop,
      "right": posRight
    },
    "rotation": rot,
  };
};

exports.createScene = (layers, width, height) => {
  const json = {
    "filters": [],
    "hidden": false,
    "id": uuid(),
    "inputs": [],
    "pluginId": "compositor",
    "pluginSettings": {
      "layers": {
      },
      "outputSize": {
        "height": height,
        "width": width
      }
    },
    "type": "transform"
  };

  layers.forEach(layer => {
    json.layers[layer.id] = layer;
  });
};
