exports.createGameCapture = (source) => {
  let name = source.name;
  let gameSource = source.settings.window; //TODO: May not be feasible. Will see
};

exports.createVideoSource = (source) => {
  let name = source.name;
  let videoSource = source.settings.local_file;
  let doesLoop = source.settings.looping;
};

exports.createImagesSource = (source) => {
  let name = source.name;
  let imageSource = source.settings.file;
};

exports.createMonitorCapture = (source) => {
  let name = source.name;
  //TODO: Figure out which monitor is being captured
};
