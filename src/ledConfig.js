const ws281x = require('rpi-ws281x');

const NUM_LEDS = 30;
const pixelData = new Uint32Array(NUM_LEDS);

ws281x.configure({
    leds: NUM_LEDS,
    dma: 10,
    brightness: 255,
    gpio: 18,
    type: 'grb',
});

const setColor = (color) => {
    pixelData.fill(parseInt(color, 16));
    ws281x.render(pixelData);
};

const turnOff = () => {
    pixelData.fill(0x000000);
    ws281x.render(pixelData);
};

module.exports = { setColor, turnOff };
