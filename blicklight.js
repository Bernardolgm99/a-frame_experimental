AFRAME.registerComponent('blicklight', {
  schema: {
    min_intensity: { type: 'number', default: 0 },
    max_intensity: { type: 'number', default: 1 },
    on_max: { type: 'number', default: 1200},
    on_min: { type: 'number', default: 400},
    off_max: { type: 'number', default: 300},
    off_min: { type: 'number', default: 200},
  },

  init: function () {
    let turn_on = true
    delay(turn_on, this.el, this.data.max_intensity, this.data.min_intensity, this.data.on_max, this.data.on_min, this.data.off_max, this.data.off_min)
  }
});
  
async function delay(turn_on, el, max_intensity, min_intensity, on_max, on_min, off_max, off_min) {
  if (turn_on) {
    turn_on = false;
    el.setAttribute('light', { intensity: max_intensity });
    await sleep(getRandom(on_max, on_min))
  }
  else {
    turn_on = true
    el.setAttribute('light', { intensity: min_intensity });
    await sleep(getRandom(off_max, off_min))
  }
  delay(turn_on, el, max_intensity, min_intensity, on_max, on_min, off_max, off_min)
}

function getRandom(min, max) {
  return Math.random() * (max - min) + min;
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}