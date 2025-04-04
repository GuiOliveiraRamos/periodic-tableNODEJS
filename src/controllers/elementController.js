const { setIndicesColor, turnOff } = require('../ledConfig');

// Exemplo simples com elementos químicos e LEDs associados
const elements = {
    H: { color: 'ff0000', indices: [0, 1] },
    He: { color: '00ffff', indices: [2, 3] },
    Li: { color: '00ff00', indices: [4, 5] },
    Be: { color: '0000ff', indices: [6, 7] },
    B: { color: 'ffff00', indices: [8, 9] },
    C: { color: 'ff00ff', indices: [10, 11] },
    N: { color: 'ff8000', indices: [12, 13] },
    O: { color: '8000ff', indices: [14, 15] },
    F: { color: '800000', indices: [16, 17] },
    Ne: { color: '008000', indices: [18, 19] },
    Na: { color: '808000', indices: [20, 21] },
    Mg: { color: '000080', indices: [22, 23] },
    Al: { color: '808080', indices: [24, 25] },
    Si: { color: 'c0c0c0', indices: [26, 27] },
    P: { color: 'ff8080', indices: [28, 29] },
    S: { color: '80ff80', indices: [30, 31] },
    Cl: { color: '8080ff', indices: [32, 33] },
    Ar: { color: 'ffff80', indices: [34, 35] },
    K: { color: 'ff80ff', indices: [36, 37] },
    Ca: { color: '80ffff', indices: [38, 39] },
    Sc: { color: 'ff8080', indices: [40, 41] },
    Ti: { color: '80ff80', indices: [42, 43] },
    V: { color: '8080ff', indices: [44, 45] },
    Cr: { color: 'ffff80', indices: [46, 47] },
    Mn: { color: 'ff80ff', indices: [48, 49] },
    Fe: { color: '80ffff', indices: [50, 51] },
    Co: { color: 'ff8080', indices: [52, 53] },
    Ni: { color: '80ff80', indices: [54, 55] },
    Cu: { color: '8080ff', indices: [56, 57] },
    Zn: { color: 'ffff80', indices: [58, 59] },
    Ga: { color: 'ff80ff', indices: [60, 61] },
    Ge: { color: '80ffff', indices: [62, 63] },
    As: { color: 'ff8080', indices: [64, 65] },
    Se: { color: '80ff80', indices: [66, 67] },
    Br: { color: '8080ff', indices: [68, 69] },
    Kr: { color: 'ffff80', indices: [70, 71] },
    Rb: { color: 'ff80ff', indices: [72, 73] },
    Sr: { color: '80ffff', indices: [74, 75] },
    Y: { color: 'ff8080', indices: [76, 77] },
    Zr: { color: '80ff80', indices: [78, 79] },
    Nb: { color: '8080ff', indices: [80, 81] },
    Mo: { color: 'ffff80', indices: [82, 83] },
    Tc: { color: 'ff80ff', indices: [84, 85] },
    Ru: { color: '80ffff', indices: [86, 87] },
    Rh: { color: 'ff8080', indices: [88, 89] },
    Pd: { color: '80ff80', indices: [90, 91] },
    Ag: { color: '8080ff', indices: [92, 93] },
    Cd: { color: 'ffff80', indices: [94, 95] },
    In: { color: 'ff80ff', indices: [96, 97] },
    Sn: { color: '80ffff', indices: [98, 99] },
    Sb: { color: 'ff8080', indices: [100, 101] },
    Te: { color: '80ff80', indices: [102, 103] },
    I: { color: '8080ff', indices: [104, 105] },
    Xe: { color: 'ffff80', indices: [106, 107] },
    Cs: { color: 'ff80ff', indices: [108, 109] },
    Ba: { color: '80ffff', indices: [110, 111] },
    La: { color: 'ff8080', indices: [112, 113] },
    Ce: { color: '80ff80', indices: [114, 115] },
    Pr: { color: '8080ff', indices: [116, 117] },
    Nd: { color: 'ffff80', indices: [118, 119] },
    Pm: { color: 'ff80ff', indices: [120, 121] },
    Sm: { color: '80ffff', indices: [122, 123] },
    Eu: { color: 'ff8080', indices: [124, 125] },
    Gd: { color: '80ff80', indices: [126, 127] },
    Tb: { color: '8080ff', indices: [128, 129] },
    Dy: { color: 'ffff80', indices: [130, 131] },
    Ho: { color: 'ff80ff', indices: [132, 133] },
    Er: { color: '80ffff', indices: [134, 135] },
    Tm: { color: 'ff8080', indices: [136, 137] },
    Yb: { color: '80ff80', indices: [138, 139] },
    Lu: { color: '8080ff', indices: [140, 141] },
    Hf: { color: 'ffff80', indices: [142, 143] },
    Ta: { color: 'ff80ff', indices: [144, 145] },
    W: { color: '80ffff', indices: [146, 147] },
    Re: { color: 'ff8080', indices: [148, 149] },
    Os: { color: '80ff80', indices: [150, 151] },
    Ir: { color: '8080ff', indices: [152, 153] },
    Pt: { color: 'ffff80', indices: [154, 155] },
    Au: { color: 'ff80ff', indices: [156, 157] },
    Hg: { color: '80ffff', indices: [158, 159] },
    Tl: { color: 'ff8080', indices: [160, 161] },
    Pb: { color: '80ff80', indices: [162, 163] },
    Bi: { color: '8080ff', indices: [164, 165] },
    Po: { color: 'ffff80', indices: [166, 167] },
    At: { color: 'ff80ff', indices: [168, 169] },
    Rn: { color: '80ffff', indices: [170, 171] },
    Fr: { color: 'ff8080', indices: [172, 173] },
    Ra: { color: '80ff80', indices: [174, 175] },
    Ac: { color: '8080ff', indices: [176, 177] },
    Th: { color: 'ffff80', indices: [178, 179] },
    Pa: { color: 'ff80ff', indices: [180, 181] },
    U: { color: '80ffff', indices: [182, 183] },
    Np: { color: 'ff8080', indices: [184, 185] },
    Pu: { color: '80ff80', indices: [186, 187] },
    Am: { color: '8080ff', indices: [188, 189] },
    Cm: { color: 'ffff80', indices: [190, 191] },
    Bk: { color: 'ff80ff', indices: [192, 193] },
    Cf: { color: '80ffff', indices: [194, 195] },
    Es: { color: 'ff8080', indices: [196, 197] },
    Fm: { color: '80ff80', indices: [198, 199] },
    Md: { color: '8080ff', indices: [200, 201] },
    No: { color: 'ffff80', indices: [202, 203] },
    Lr: { color: 'ff80ff', indices: [204, 205] },
    Rf: { color: '80ffff', indices: [206, 207] },
    Db: { color: 'ff8080', indices: [208, 209] },
    Sg: { color: '80ff80', indices: [210, 211] },
    Bh: { color: '8080ff', indices: [212, 213] },
    Hs: { color: 'ffff80', indices: [214, 215] },
    Mt: { color: 'ff80ff', indices: [216, 217] },
    Ds: { color: '80ffff', indices: [218, 219] },
    Rg: { color: 'ff8080', indices: [220, 221] },
    Cn: { color: '80ff80', indices: [222, 223] },
    Nh: { color: '8080ff', indices: [224, 225] },
    Fl: { color: 'ffff80', indices: [226, 227] },
    Mc: { color: 'ff80ff', indices: [228, 229] },
    Lv: { color: '80ffff', indices: [230, 231] },
    Ts: { color: 'ff8080', indices: [232, 233] },
    Og: { color: '80ff80', indices: [234, 235] },
    off: { color: '000000', indices: [] }
};

const handleElement = (req, res) => {
    const symbol = req.params.symbol;
    const element = elements[symbol];

    if (!element) {
        return res.status(404).json({ error: `Elemento '${symbol}' não encontrado.` });
    }

    const { color, indices } = element;

    if (indices.length > 0) {
        setIndicesColor(indices, color);
        res.json({ message: `LEDs ${indices} acesos com a cor do elemento ${symbol}`, color });
    } else {
        turnOff();
        res.json({ message: 'LEDs desligados' });
    }
};

const handleOff = (req, res) => {
    turnOff();
    res.json({ message: 'LEDs desligados' });
};

module.exports = { handleElement, handleOff };