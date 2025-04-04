import { setIndicesColor, turnOff } from "../ledConfig.js";
import { readChannel } from "../mcp3008config.js";
import { elements } from "./arrayElements.js";

export const handleElement = async (req, res) => {
    const symbol = req.params.symbol;
    const element = elements[symbol];

    if (!element) {
        return res.status(404).json({ error: `Elemento '${symbol}' não encontrado.` });
    }

    const { color, indices } = element;

    try {
        turnOff();        // Ler o valor do canal 0 do MCP3008
        const sensorValue = await readChannel(0); // Substitua 0 pelo canal desejado
        console.log(`Valor do sensor no canal 0: ${sensorValue}`);

        // Ajustar o brilho com base no valor do sensor (exemplo)
        const brightness = Math.floor((sensorValue / 1023) * 255);
        console.log(`Brilho ajustado: ${brightness}`);

        // Acender os LEDs
        setIndicesColor(indices, color);
        res.json({
            message: `LEDs ${indices} acesos com a cor do elemento ${symbol}`,
            color,
            sensorValue,
            brightness
        });
    } catch (error) {
        console.error('Erro ao ler o MCP3008:', error);
        res.status(500).json({ error: 'Erro ao ler o sensor.' });
    }
};

export const handleOff = (req, res) => {
    turnOff();
    console.log('TESTE LEDs desligados');
    res.json({ message: 'LEDs desligados' });
};

