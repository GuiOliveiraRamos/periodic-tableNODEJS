import { readChannel } from './mcp3008config.js'; // ou o caminho correto do seu arquivo

const channel = 0; // canal do sensor (0 a 7)

setInterval(async () => {
    try {
        const value = await readChannel(channel);
        console.log(`Valor do canal ${channel}:`, value);
    } catch (error) {
        console.error('Erro ao ler MCP3008:', error);
    }
}, 10); 
