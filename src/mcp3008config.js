import spi from 'spi-device';

// Configuração do SPI para o MCP3008
const mcp3008 = spi.openSync(0, 0); // Bus 0, Chip Select 0

/**
 * Lê o valor de um canal específico do MCP3008.
 * @param {number} channel - O canal (0 a 7) para ler.
 * @returns {Promise<number>} - O valor lido (0 a 1023).
 */
export const readChannel = (channel) => {
    return new Promise((resolve, reject) => {
        if (channel < 0 || channel > 7) {
            return reject(new Error('Canal inválido. Deve estar entre 0 e 7.'));
        }

        // Configuração do buffer de envio e recepção
        const message = [{
            sendBuffer: Buffer.from([1, (8 + channel) << 4, 0]), // Configuração do MCP3008
            receiveBuffer: Buffer.alloc(3), // Buffer para armazenar a resposta
            byteLength: 3, // Tamanho da mensagem
            speedHz: 50000 // Velocidade do SPI
        }];

        // Enviar e receber dados via SPI
        mcp3008.transfer(message, (err, message) => {
            if (err) {
                return reject(err);
            }

            // Processar o valor recebido
            const rawValue = ((message[0].receiveBuffer[1] & 3) << 8) + message[0].receiveBuffer[2];
            resolve(rawValue);
        });
    });
};

