const process = [
  {
    posX: 1,
    posY: 1,
    faz: 0,
    fez: 5,
    ps: "A",
    pn: "",
    pd: 5,
    gp: 0,
    fp: 0,
    saz: 0,
    sez: 5,
    // arrowTo: ["D"]
    arrowTo: [{
      id: "D",
      pathCoords: {
        start: [97, 224],
        breakpoints: [
          [50, 200],
          [200, 200],
        ],
        end: [378, 574]
      }
    }]
  },
  {
    posX: 1,
    posY: 2,
    faz: 0,
    fez: 12,
    ps: "B",
    pn: "",
    pd: 12,
    gp: 10,
    fp: 10,
    saz: 10,
    sez: 22,
    // arrowTo: ["I"]
    // arrowTo: [{
    //   id: "III",
    //   pathCoords: {
    //     start: [150, 250],
    //     breakpoints: [
    //       [150, 300],
    //       [300, 300],
    //     ],
    //     end: [200, 300]
    //   }
    // }]
  },
  {
    posX: 1,
    posY: 3,
    faz: 0,
    fez: 3,
    ps: "C",
    pn: "",
    pd: 3,
    gp: 4,
    fp: 0,
    saz: 4,
    sez: 7,
    // arrowTo: ["E"]
  },
  {
    posX: 2,
    posY: 1,
    faz: 5,
    fez: 14,
    ps: "D",
    pn: "",
    pd: 9,
    gp: 0,
    fp: 0,
    saz: 5,
    sez: 14,
    // arrowTo: ["G", "H"]
  },
  {
    posX: 2,
    posY: 3,
    faz: 3,
    fez: 7,
    ps: "E",
    pn: "",
    pd: 4,
    gp: 4,
    fp: 0,
    saz: 7,
    sez: 11,
    // arrowTo: ["F", "G"]
  },
  {
    posX: 3,
    posY: 3,
    faz: 7,
    fez: 11,
    ps: "F",
    pn: "",
    pd: 4,
    gp: 4,
    fp: 3,
    saz: 11,
    sez: 15,
    // arrowTo: ["H"]
  },
  {
    posX: 3,
    posY: 1,
    faz: 14,
    fez: 22,
    ps: "G",
    pn: "",
    pd: 8,
    gp: 0,
    fp: 0,
    saz: 14,
    sez: 22,
    // arrowTo: ["I"]
  },
  {
    posX: 4,
    posY: 3,
    faz: 14,
    fez: 24,
    ps: "H",
    pn: "",
    pd: 10,
    gp: 1,
    fp: 0,
    saz: 15,
    sez: 25,
    // arrowTo: ["J"]
  },
  {
    posX: 3,
    posY: 2,
    faz: 22,
    fez: 31,
    ps: "I",
    pn: "",
    pd: 9,
    gp: 0,
    fp: 0,
    saz: 22,
    sez: 31,
    // arrowTo: ["K"]
  },
  {
    posX: 5,
    posY: 3,
    faz: 24,
    fez: 30,
    ps: "J",
    pn: "",
    pd: 6,
    gp: 1,
    fp: 1,
    saz: 25,
    sez: 31,
    // arrowTo: ["K"]
  },
  {
    posX: 5,
    posY: 2,
    faz: 31,
    fez: 48,
    ps: "K",
    pn: "",
    pd: 17,
    gp: 0,
    fp: 0,
    saz: 31,
    sez: 48,
  },
];

export default process;