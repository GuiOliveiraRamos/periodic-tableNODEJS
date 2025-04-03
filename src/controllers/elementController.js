const { setColor, turnOff } = require('../ledConfig');

// Exemplo simples com elementos químicos
const elements = {
    H: 'ff0000',     // vermelho
    He: '00ffff',    // ciano
    Li: '00ff00',    // verde
    Be: '0000ff',    // azul
    B: 'ffff00',     // amarelo
    off: '000000'
    // ...adicione os outros aqui
};

const handleElement = (req, res) => {
    const symbol = req.params.symbol;
    const color = elements[symbol];

    if (!color) {
        return res.status(404).send(`Elemento '${symbol}' não encontrado.`);
    }

    setColor(color);
    res.send(`LEDs acesos com a cor do elemento ${symbol} (#${color})`);
};

const handleOff = (req, res) => {
    turnOff();
    res.send('LEDs desligados');
};

module.exports = { handleElement, handleOff };
