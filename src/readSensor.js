import { readChannel } from './mcp3008config.js';

const channel = 0; // Canal onde está conectado o sensor touch

const readSensorEverySecond = async () => {
    try {
        const value = await readChannel(channel);
        console.log(`[${new Date().toLocaleTimeString()}] Valor do sensor (canal ${channel}): ${value}`);
    } catch (err) {
        console.error('Erro na leitura do sensor:', err);
    }
};

// Executa a leitura a cada 1 segundo
setInterval(readSensorEverySecond, 100);
