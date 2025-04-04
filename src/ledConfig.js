import ws281x from 'rpi-ws281x';

const NUM_LEDS = 300;
const pixelData = new Uint32Array(NUM_LEDS);

ws281x.configure({
    leds: NUM_LEDS,
    dma: 10,
    brightness: 255,
    gpio: 18,
    type: 'grb',
});

// Define uma cor para LEDs específicos
export const setIndicesColor = (indices, color) => {
    indices.forEach((index) => {
        if (index >= 0 && index < NUM_LEDS) {
            pixelData[index] = parseInt(color, 16); // Converte a cor hexadecimal para RGB
        }
    });
    ws281x.render(pixelData);
};

// Apaga todos os LEDs
export const turnOff = () => {
    pixelData.fill(0x000000);
    ws281x.render(pixelData);
};

