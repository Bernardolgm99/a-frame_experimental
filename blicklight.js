AFRAME.registerComponent('blicklight', {
  schema: {
    min_intensity: { type: 'number', default: 0 },
    max_intensity: { type: 'number', default: 1 },
  },

  init: function () {
    let turn_on = true
    delay(turn_on, this.el, this.data.max_intensity, this.data.min_intensity)
  }
});
  
async function delay(turn_on, el, max, min) {
  if (turn_on) {
    turn_on = false;
    el.setAttribute('light', { intensity: max });
  }
  else {
    turn_on = true
    el.setAttribute('light', { intensity: min });
  }
  await sleep(getRandom(600, 100))
  delay(turn_on, el, max, min)
}

function getRandom(min, max) {
  return Math.random() * (max - min) + min;
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}