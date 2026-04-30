// --------------------------------------------------------------
  // CORREÇÃO: Aplicar tema salvo IMEDIATAMENTE antes de qualquer renderização
  // --------------------------------------------------------------
  (function () {
    // Verificar tema salvo e aplicar ANTES de tudo
    const savedTheme = localStorage.getItem("themePreference");
    if (savedTheme === "dark") {
      document.body.classList.add("dark-mode");
    } else if (savedTheme === "light") {
      document.body.classList.remove("dark-mode");
    }
  })();

  // --------------------------------------------------------------
  // Resto do código principal
  // --------------------------------------------------------------
  (function () {
    // Lista completa de dispositivos (472 itens, mesmo conteúdo)
    const devices = [
      { model: "Galaxy S25", variants: "SM-S931BE", status: "Supported" },
      {
        model: "Galaxy S25 Ultra",
        variants: "SM-S938BE, SM-S938N, SM-S938U",
        status: "Supported",
      },
      { model: "Galaxy S25+", variants: "SM-S936BE", status: "Supported" },
      {
        model: "Galaxy A04s",
        variants: "SM-A047M, SM-A047F",
        status: "Supported",
      },
      {
        model: "Galaxy A06",
        variants: "SM-A065M, SM-A065F",
        status: "Supported",
      },
      {
        model: "Galaxy A13",
        variants: "SM-A137F, SM-A135N, SM-A135M, SM-A135F, SM-A135U1, SM-A135U",
        status: "Supported",
      },
      {
        model: "Galaxy A13 5G",
        variants: "SM-A136M, SM-A136B, SM-A136S",
        status: "Supported",
      },
      {
        model: "Galaxy A14",
        variants: "SM-A145MB, SM-A145FB",
        status: "Supported",
      },
      {
        model: "Galaxy A15",
        variants: "SM-A155F, SM-A155M, SM-A155N",
        status: "Supported",
      },
      {
        model: "Galaxy A15 5G",
        variants:
          "SM-A1560, SM-A156E, SM-A156M, SM-S156V, SM-A156U, SM-A156W, SM-A156U1, SM-A156B, SM-A156L",
        status: "Supported",
      },
      {
        model: "Galaxy A16",
        variants: "SM-A165M, SM-A165F, SM-A165N",
        status: "Supported",
      },
      {
        model: "Galaxy A16 5G",
        variants:
          "SM-A166M, SM-A1660, SM-A166E, SM-A166P, SM-A166B, SM-S166V, SM-A166U1, SM-A166U, SM-A166W",
        status: "Supported",
      },
      {
        model: "Galaxy A23",
        variants: "SM-A235F, SM-A235M, SM-A235N",
        status: "Supported",
      },
      {
        model: "Galaxy A23 5G",
        variants:
          "SM-A2360, SM-A236B, SM-A236M, SM-A236E, SM-A236V, SM-A236U1, SM-S236DL, SM-A236U, SM-S237VL",
        status: "Supported",
      },
      {
        model: "Galaxy A23e 5G",
        variants: "SC-56C, SM-A233C, SCG18",
        status: "Supported",
      },
      {
        model: "Galaxy A24",
        variants: "SM-A245M, SM-A245F, SM-A245N",
        status: "Supported",
      },
      {
        model: "Galaxy A25 5G",
        variants:
          "SM-A2560, SM-A256N, SM-A256E, SM-S256VL, SM-A256U1, SM-A256U, SM-A256B",
        status: "Supported",
      },
      {
        model: "Galaxy A33 5G",
        variants: "SM-A336B, SM-A3360, SM-A336M, SM-A336N, SM-A336E",
        status: "Supported",
      },
      {
        model: "Galaxy A34 5G",
        variants: "SM-A346B, SM-A346M, SM-A3460, SM-A346N, SM-A346E",
        status: "Supported",
      },
      {
        model: "Galaxy A35 5G",
        variants:
          "SM-A356B, SM-A356E, SM-A3560, SM-A356W, SM-A356U, SM-A356U1, SM-S356V, SM-A356N",
        status: "Supported",
      },
      {
        model: "Galaxy A52",
        variants: "SM-A525F, SM-A525M",
        status: "Supported",
      },
      {
        model: "Galaxy A52 5G",
        variants: "SM-A526B, SM-A5260, SM-A526U, SM-A526U1, SM-A526W, SC-53B",
        status: "Supported",
      },
      {
        model: "Galaxy A52s 5G",
        variants: "SM-A528B, SM-A528N",
        status: "Supported",
      },
      {
        model: "Galaxy A53 5G",
        variants:
          "SM-A536B, SM-A536E, SM-A5360, SM-A536W, SM-A536N, SCG15, SC-53C, SM-A536U, SM-A536V, SM-S536DL, SM-A536U1",
        status: "Supported",
      },
      {
        model: "Galaxy A54 5G",
        variants:
          "SM-A546B, SM-A5460, SC-53D, SM-A546W, SM-A546S, SM-A546E, SCG21, SM-E546B, SM-A546V, SM-A546U1, SM-A546U, SM-S546VL",
        status: "Supported",
      },
      {
        model: "Galaxy A55 5G",
        variants: "SM-A556B, SM-A556E, SM-A5560, SC-53E, SCG27, SM-A556S",
        status: "Supported",
      },
      {
        model: "Galaxy A72",
        variants: "SM-A725M, SM-A725F",
        status: "Supported",
      },
      { model: "Galaxy A73 5G", variants: "SM-A736B", status: "Supported" },
      { model: "Galaxy A82 5G", variants: "SM-A826S", status: "Supported" },
      { model: "Galaxy C55 5G", variants: "SM-C5560", status: "Supported" },
      { model: "Galaxy F13", variants: "SM-E135F", status: "Supported" },
      { model: "Galaxy F14 5G", variants: "SM-E146B", status: "Supported" },
      { model: "Galaxy F15 5G", variants: "SM-E156B", status: "Supported" },
      { model: "Galaxy F34 5G", variants: "SM-E346B", status: "Supported" },
      { model: "Galaxy F55 5G", variants: "SM-E556B", status: "Supported" },
      {
        model: "Galaxy M13",
        variants: "SM-M135F, SM-M135FU, SM-M135M",
        status: "Supported",
      },
      { model: "Galaxy M13 5G", variants: "SM-M136B", status: "Supported" },
      { model: "Galaxy M14 5G", variants: "SM-M146B", status: "Supported" },
      {
        model: "Galaxy M15 5G",
        variants: "SM-M156B, SM-M156S",
        status: "Supported",
      },
      {
        model: "Galaxy M23 5G",
        variants: "SM-E236B, SM-M236B, SM-M236L, SM-M236Q",
        status: "Supported",
      },
      {
        model: "Galaxy M33 5G",
        variants: "SM-M336B, SM-M336BU, SM-M336K",
        status: "Supported",
      },
      {
        model: "Galaxy M34 5G",
        variants: "SM-M346B, SM-M346B2, SM-M346B1",
        status: "Supported",
      },
      { model: "Galaxy M35 5G", variants: "SM-M356B", status: "Supported" },
      { model: "Galaxy M44 5G", variants: "SM-M446K", status: "Supported" },
      {
        model: "Galaxy M53 5G",
        variants: "SM-M536B, SM-M536S",
        status: "Supported",
      },
      { model: "Galaxy M54 5G", variants: "SM-M546B", status: "Supported" },
      {
        model: "Galaxy M55 5G",
        variants: "SM-M556B, SM-M556E",
        status: "Supported",
      },
      {
        model: "Galaxy M55s 5G",
        variants: "SM-M558B",
        status: "Supported",
      },
      {
        model: "Galaxy S21 5G",
        variants:
          "SM-G991W, SM-G991B, SM-G991N, SM-G9910, SCG09, SM-G991U, SM-G991U1, SC-51B",
        status: "Supported",
      },
      {
        model: "Galaxy S21 FE 5G",
        variants:
          "SM-G990B, SM-G990W2, SM-G990W, SM-G9900, SM-G990B2, SM-G990E, SM-G990U, SM-G990U2, SM-G990U1, SM-G990U3",
        status: "Supported",
      },
      {
        model: "Galaxy S21 Ultra 5G",
        variants:
          "SM-G998W, SM-G998B, SM-G998N, SM-G9980, SM-G998U, SM-G998U1, SC-52B",
        status: "Supported",
      },
      {
        model: "Galaxy S21+ 5G",
        variants:
          "SM-G996W, SM-G996B, SM-G996N, SM-G9960, SCG10, SM-G996U, SM-G996U1",
        status: "Supported",
      },
      {
        model: "Galaxy S22",
        variants:
          "SM-S901B, SM-S901W, SM-S901N, SC-51C, SCG13, SM-S901E, SM-S901U, SM-S901U1, SM-S9010",
        status: "Supported",
      },
      {
        model: "Galaxy S22 Ultra",
        variants:
          "SM-S908B, SM-S908W, SC-52C, SM-S908N, SM-S908E, SM-S908U, SM-S908U1, SM-S9080, SCG14",
        status: "Supported",
      },
      {
        model: "Galaxy S22+",
        variants:
          "SM-S906B, SM-S906W, SM-S906N, SM-S906E, SM-S906U, SM-S906U1, SM-S9060",
        status: "Supported",
      },
      {
        model: "Galaxy S23",
        variants:
          "SM-S911BE, SM-S911B, SM-S911N, SM-S9110, SM-S911W, SM-S911U, SM-S911C, SC-51D, SCG19, SM-S911U1",
        status: "Supported",
      },
      {
        model: "Galaxy S23 FE",
        variants:
          "SM-S711B, SM-S711N, SM-S711BE, SM-S711U, SM-S7110, SM-S711W, SM-S711U1, SCG24",
        status: "Supported",
      },
      {
        model: "Galaxy S23 Ultra",
        variants:
          "SM-S918BE, SM-S918B, SM-S918N, SM-S918U1, SM-S9180, SM-S918W, SM-S918Q, SC-52D, SM-S918U, SCG20",
        status: "Supported",
      },
      {
        model: "Galaxy S23+",
        variants:
          "SM-S916B, SM-S916BE, SM-S916N, SM-S9160, SM-S916W, SM-S916U1, SM-S916U",
        status: "Supported",
      },
      {
        model: "Galaxy S24",
        variants:
          "SM-S921N, SM-S9210, SM-S921BE, SM-S921U1, SM-S921U, SM-S921W, SM-S921B, SM-S921Q, SC-51E, SCG25",
        status: "Supported",
      },
      {
        model: "Galaxy S24 FE",
        variants:
          "SM-S721U, SM-S721U1, SM-S7210, SM-S721B, SM-S721BE, SM-S721W, SM-S721N, SCG30, SM-S721Q",
        status: "Supported",
      },
      {
        model: "Galaxy S24 Ultra",
        variants:
          "SM-S928U, SM-S928B, SM-S928N, SM-S9280, SM-S928BE, SM-S928U1, SM-S928W, SM-S928Q, SCG26, SC-52E",
        status: "Supported",
      },
      {
        model: "Galaxy S24+",
        variants:
          "SM-S926U, SM-S926N, SM-S9260, SM-S926BE, SM-S926U1, SM-S926W, SM-S926B",
        status: "Supported",
      },
      {
        model: "Galaxy Tab A7 Lite",
        variants: "SM-T225C, SM-T225N, SM-T225, SM-T220, SM-T227, SM-T227U",
        status: "Supported",
      },
      {
        model: "Galaxy Tab A8",
        variants: "SM-X205, SM-X205C, SM-X200, SM-X207, SM-X205N",
        status: "Supported",
      },
      {
        model: "Galaxy Tab A9",
        variants: "SM-X110, SM-X115N, SM-X117",
        status: "Supported",
      },
      {
        model: "Galaxy Tab A9 LTE",
        variants: "SM-X115",
        status: "Supported",
      },
      { model: "Galaxy Tab A9+", variants: "SM-X210", status: "Supported" },
      {
        model: "Galaxy Tab A9+ 5G",
        variants: "SM-X216C, SM-X218B, SM-X216B, SM-X216N, SM-X218U",
        status: "Supported",
      },
      {
        model: "Galaxy Tab Active4 Pro",
        variants: "SM-T630, SM-T638B",
        status: "Supported",
      },
      {
        model: "Galaxy Tab Active4 Pro 5G",
        variants: "SM-T636B, SM-T636N, SM-T638U",
        status: "Supported",
      },
      {
        model: "Galaxy Tab Active5",
        variants: "SM-X300",
        status: "Supported",
      },
      {
        model: "Galaxy Tab Active5 5G",
        variants: "SM-X306B, SM-X308B, SM-X308U, SM-X306N",
        status: "Supported",
      },
      {
        model: "Galaxy Tab S10 Ultra",
        variants: "SM-X920",
        status: "Supported",
      },
      {
        model: "Galaxy Tab S10 Ultra 5G",
        variants: "SM-X926N, SM-X926B, SM-X926C",
        status: "Supported",
      },
      {
        model: "Galaxy Tab S10+",
        variants: "SM-X820",
        status: "Supported",
      },
      {
        model: "Galaxy Tab S10+ 5G",
        variants: "SM-X828U, SM-X826N, SM-X826B",
        status: "Supported",
      },
      {
        model: "Galaxy Tab S6 Lite",
        variants: "SM-P619N, SM-P613, SM-P619, SM-P625, SM-P620",
        status: "Supported",
      },
      {
        model: "Galaxy Tab S7 FE",
        variants: "SM-T735C, SM-T737, SM-T735N, SM-T735, SM-T738U, SM-T733",
        status: "Supported",
      },
      {
        model: "Galaxy Tab S7 FE 5G",
        variants: "SM-T736N, SM-T736B",
        status: "Supported",
      },
      {
        model: "Galaxy Tab S8",
        variants: "SM-X706N, SM-X706C, SM-X700, SM-X706B",
        status: "Supported",
      },
      {
        model: "Galaxy Tab S8 Ultra",
        variants: "SM-X906N, SM-X906C, SM-X906B, SM-X900",
        status: "Supported",
      },
      {
        model: "Galaxy Tab S8+",
        variants: "SM-X806N, SM-X806C, SM-X800, SM-X806E, SM-X806B, SM-X808U",
        status: "Supported",
      },
      { model: "Galaxy Tab S9", variants: "SM-X710", status: "Supported" },
      {
        model: "Galaxy Tab S9 5G",
        variants: "SM-X716B, SM-X716N",
        status: "Supported",
      },
      {
        model: "Galaxy Tab S9 FE",
        variants: "SM-X510",
        status: "Supported",
      },
      {
        model: "Galaxy Tab S9 FE 5G",
        variants: "SM-X516C, SM-X516B, SM-X516N, SM-X518U",
        status: "Supported",
      },
      {
        model: "Galaxy Tab S9 FE+",
        variants: "SM-X610",
        status: "Supported",
      },
      {
        model: "Galaxy Tab S9 FE+ 5G",
        variants: "SM-X616C, SM-X616B, SCT22, SM-X616N",
        status: "Supported",
      },
      {
        model: "Galaxy Tab S9 Ultra",
        variants: "SM-X910",
        status: "Supported",
      },
      {
        model: "Galaxy Tab S9 Ultra 5G",
        variants: "SM-X916N, SM-X916C, SM-X916B",
        status: "Supported",
      },
      { model: "Galaxy Tab S9+", variants: "SM-X810", status: "Supported" },
      {
        model: "Galaxy Tab S9+ 5G",
        variants: "SM-X816N, SM-X816B, SM-X818U",
        status: "Supported",
      },
      {
        model: "Galaxy XCover5",
        variants: "SM-G525F, SM-G525N",
        status: "Supported",
      },
      {
        model: "Galaxy XCover6 Pro",
        variants: "SM-G736B, SM-G736U, SM-G736W, SM-G736U1",
        status: "Supported",
      },
      {
        model: "Galaxy XCover7",
        variants: "SM-G556B",
        status: "Supported",
      },
      {
        model: "Galaxy Z Flip3 5G",
        variants:
          "SM-F711N, SM-F711W, SM-F711B, SM-F711U, SM-F711U1, SM-F7110, SC-54B, SCG12",
        status: "Supported",
      },
      {
        model: "Galaxy Z Flip4 5G",
        variants:
          "SM-F721BE, SM-F721W, SM-F721U, SM-F721N, SM-F7210, SCG17, SC-54C, SM-F721B, SM-F721C, SM-F721U1",
        status: "Supported",
      },
      {
        model: "Galaxy Z Flip5",
        variants:
          "SM-F731Q, SC-54D, SM-F731W, SCG23, SM-F731U, SM-F731U1, SM-F731N, SM-F731B, SM-F731BE, SM-F7310",
        status: "Supported",
      },
      {
        model: "Galaxy Z Flip6",
        variants:
          "SM-F741N, SM-F741BE, SM-F741U, SM-F741B, SM-F741U1, SM-F741W, SM-F741Q, SCG29, SC-54E, SM-F7410",
        status: "Supported",
      },
      {
        model: "Galaxy Z Fold Special Edition",
        variants: "SM-F958N",
        status: "Supported",
      },
      {
        model: "Galaxy Z Fold3 5G",
        variants:
          "SM-F926N, SM-F926W, SCG11, SC-55B, SM-F926B, SM-F926U, SM-F926U1, SM-F9260",
        status: "Supported",
      },
      {
        model: "Galaxy Z Fold4 5G",
        variants:
          "SM-F936N, SM-F9360, SM-F936W, SM-F936U, SM-F936U1, SM-F936BE, SM-F936B, SCG16, SC-55C",
        status: "Supported",
      },
      {
        model: "Galaxy Z Fold5",
        variants:
          "SM-F946Q, SC-55D, SM-F946N, SM-F9460, SM-F946W, SM-F946BE, SM-F946B, SM-F946U1, SM-F946U, SCG22",
        status: "Supported",
      },
      {
        model: "Galaxy Z Fold6",
        variants:
          "SM-F956N, SM-F956BE, SM-F956U, SM-F956B, SM-F956W, SCG28, SC-55E, SM-F9560, SM-F956Q, SM-F956U1",
        status: "Supported",
      },
      { model: "W22 5G", variants: "SM-W2022", status: "Supported" },
      { model: "W23", variants: "SM-W9023", status: "Supported" },
      { model: "W23 Flip", variants: "SM-W7023", status: "Supported" },
      { model: "W24", variants: "SM-W9024", status: "Supported" },
      { model: "W24 Flip", variants: "SM-W7024", status: "Supported" },
      { model: "W25", variants: "SM-W9025", status: "Supported" },
      { model: "W25 Flip", variants: "SM-W7025", status: "Supported" },
      {
        model: "Galaxy A12",
        variants: "SM-A127M, SM-A127F",
        status: "Supported",
      },
      {
        model: "Galaxy A13 5G",
        variants: "SM-A136U, SM-A136W, SM-A136U1, SM-S136DL",
        status: "Supported",
      },
      {
        model: "Galaxy A22",
        variants: "SM-A225M, SM-A225F",
        status: "Supported",
      },
      { model: "Galaxy A22e 5G", variants: "SC-56B", status: "Supported" },
      {
        model: "Galaxy A32",
        variants: "SM-A325M, SM-A325F, SM-A325N",
        status: "Supported",
      },
      {
        model: "Galaxy A32 5G",
        variants:
          "SM-A326K, SM-A326BR, SM-A326B, SM-A326U, SM-A326W, SCG08, SM-S326DL, SM-A326U1",
        status: "Supported",
      },
      {
        model: "Galaxy A42 5G",
        variants: "SM-A426N, SM-S426DL, SM-A426U1, SM-A426U",
        status: "Supported",
      },
      {
        model: "Galaxy A51",
        variants: "SM-A515F, SM-A515U, SM-A515W, SM-A515U1, SM-S515DL",
        status: "Supported",
      },
      {
        model: "Galaxy A51 5G",
        variants:
          "SM-A516N, SM-A516B, SM-A5160, SM-A516V, SCG07, SC-54A, SM-A516U, SM-A516U1",
        status: "Supported",
      },
      {
        model: "Galaxy A71",
        variants: "SM-A715F, SM-A715W",
        status: "Supported",
      },
      {
        model: "Galaxy A71 5G",
        variants: "SM-A716B, SM-A7160, SM-A716S, SM-A716U, SM-A716V, SM-A716U1",
        status: "Supported",
      },
      { model: "Galaxy F12", variants: "SM-F127G", status: "Supported" },
      { model: "Galaxy F22", variants: "SM-E225F", status: "Supported" },
      { model: "Galaxy F62", variants: "SM-E625F", status: "Supported" },
      {
        model: "Galaxy M12",
        variants: "SM-M127G, SM-M127N, SM-M127F",
        status: "Supported",
      },
      { model: "Galaxy M22", variants: "SM-M225FV", status: "Supported" },
      {
        model: "Galaxy M32",
        variants: "SM-M325F, SM-M325FV",
        status: "Supported",
      },
      { model: "Galaxy M32 5G", variants: "SM-M326B", status: "Supported" },
      { model: "Galaxy M42 5G", variants: "SM-M426B", status: "Supported" },
      {
        model: "Galaxy M52 5G",
        variants: "SM-M526BR, SM-M526B",
        status: "Supported",
      },
      { model: "Galaxy M62", variants: "SM-M625F", status: "Supported" },
      {
        model: "Galaxy Note10 Lite",
        variants: "SM-N770F",
        status: "Supported",
      },
      { model: "Galaxy Note20", variants: "SM-N980F", status: "Supported" },
      {
        model: "Galaxy Note20 5G",
        variants:
          "SM-N981W, SM-N981N, SM-N981U, SM-N981BR, SM-N981B, SM-N9810, SM-N981U1",
        status: "Supported",
      },
      {
        model: "Galaxy Note20 Ultra 5G",
        variants: "SM-N9860, SM-N985F",
        status: "Supported",
      },
      {
        model: "Galaxy Note20 Ultra 5G",
        variants:
          "SM-N986N, SM-N986BR, SM-N986U, SM-N986B, SCG06, SM-N986W, SM-N986U1, SC-53A",
        status: "Supported",
      },
      {
        model: "Galaxy S10 Lite",
        variants: "SM-G770F, SM-G770U1",
        status: "Supported",
      },
      { model: "Galaxy S20", variants: "SM-G980F", status: "Supported" },
      {
        model: "Galaxy S20 5G",
        variants: "SC51Aa, SC-51A",
        status: "Supported",
      },
      {
        model: "Galaxy S20 5G",
        variants:
          "SM-G981U, SM-G981N, SM-G981B, SM-G981V, SM-G981W, SM-G9810, SM-G981U1, SCG01",
        status: "Supported",
      },
      {
        model: "Galaxy S20 FE",
        variants: "SM-G780F, SM-G780G",
        status: "Supported",
      },
      {
        model: "Galaxy S20 FE 5G",
        variants:
          "SM-G781V, SM-G781U, SM-G781N, SM-G781B, SM-G781W, SM-G7810, SM-G781U1",
        status: "Supported",
      },
      {
        model: "Galaxy S20 Ultra",
        variants: "SM-G988U, SM-G988N, SM-G988B",
        status: "Supported",
      },
      {
        model: "Galaxy S20 Ultra",
        variants: "SM-G988BR, SM-G9880, SM-G988W, SM-G988U1, SCG03",
        status: "Supported",
      },
      { model: "Galaxy S20+", variants: "SM-G985F", status: "Supported" },
      {
        model: "Galaxy S20+ 5G",
        variants:
          "SM-G986U, SM-G986N, SM-G986BR, SM-G986B, SM-G986W, SM-G986U1, SM-G9860, SCG02, SC-52A",
        status: "Supported",
      },
      {
        model: "Galaxy Tab Active3",
        variants: "SM-T577, SM-T575N, SM-T570, SM-T575, SM-T577U",
        status: "Supported",
      },
      {
        model: "Galaxy Tab S6 Lite",
        variants: "SM-P610, SM-P615, SM-P617, SM-P615N, SM-P615C",
        status: "Supported",
      },
      {
        model: "Galaxy Tab S7",
        variants: "SM-T875N, SM-T875, SM-T870, SM-T878U",
        status: "Supported",
      },
      {
        model: "Galaxy Tab S7+",
        variants: "SM-T975N, SM-T976N, SM-T975, SM-T976B, SM-T970, SM-T978U",
        status: "Supported",
      },
      {
        model: "Galaxy XCover Pro",
        variants: "SM-G715U1, SM-G715U, SM-G715W, SM-G715FN, SM-G715A",
        status: "Supported",
      },
      {
        model: "Galaxy Z Flip",
        variants:
          "SM-F700J, SM-F700N, SM-F700U, SM-F700U1, SM-F700F, SM-F7000, SM-F700W, SCV47",
        status: "Supported",
      },
      {
        model: "Galaxy Z Flip 5G",
        variants:
          "SM-F707N, SM-F707U, SM-F707B, SM-F7070Y, SM-F7070, SM-F707W, SM-F707U1, SCG04",
        status: "Supported",
      },
      {
        model: "Galaxy Z Fold2",
        variants: "SM-F916B",
        status: "Supported",
      },
      {
        model: "Galaxy Z Fold2 5G",
        variants:
          "SM-F916N, SM-F916U, SM-F9160, SM-F916W, SM-F916Q, SCG05, SM-F916U1",
        status: "Supported",
      },
      { model: "W21 5G", variants: "SM-W2021", status: "Supported" },
      {
        model: "Galaxy A12",
        variants:
          "SM-A125M, SM-A125F, SM-A125W, SM-A125N, SM-A125U, SM-S127DL, SM-A125U1",
        status: "Supported",
      },
      {
        model: "Galaxy A21",
        variants: "SM-A217N, SM-A217M",
        status: "Supported",
      },
      { model: "Galaxy A21s", variants: "SM-A217F", status: "Supported" },
      {
        model: "Galaxy A31",
        variants: "SM-A315N, SM-A315F, SM-A315G",
        status: "Supported",
      },
      {
        model: "Galaxy A41",
        variants: "SM-A415F, SCV48, SC-41A",
        status: "Supported",
      },
      {
        model: "Galaxy A42 5G",
        variants: "SM-A4260, SM-A426B",
        status: "Supported",
      },
      {
        model: "Galaxy A90 5G",
        variants: "SM-A908B, SM-A908N, SM-A9080",
        status: "Supported",
      },
      {
        model: "Galaxy Fold",
        variants:
          "SM-F900F, SM-F900U, SM-F9000, SCV44, SM-F900U1, SM-F907N, SM-F900W",
        status: "Supported",
      },
      {
        model: "Galaxy Fold 5G",
        variants: "SM-F907B",
        status: "Supported",
      },
      { model: "Galaxy M31s", variants: "SM-M317F", status: "Supported" },
      { model: "Galaxy M51", variants: "SM-M515F", status: "Supported" },
      {
        model: "Galaxy Note10",
        variants: "SM-N9700, SM-N970W, SM-N970U1",
        status: "Supported",
      },
      {
        model: "Galaxy Note10",
        variants: "SM-N970U, SM-N970F",
        status: "Supported",
      },
      {
        model: "Galaxy Note10 5G",
        variants: "SM-N971N",
        status: "Supported",
      },
      {
        model: "Galaxy Note10+",
        variants:
          "SM-N975U, SM-N975F, SM-N975W, SM-N975U1, SC-01M, SM-N975C, SCV45, SM-N9750",
        status: "Supported",
      },
      {
        model: "Galaxy Note10+ 5G",
        variants: "SM-N976V, SM-N976B, SM-N976U, SM-N976N, SM-N976Q",
        status: "Supported",
      },
      {
        model: "Galaxy Note10+ 5G",
        variants: "SM-N9760",
        status: "Supported",
      },
      {
        model: "Galaxy S10",
        variants:
          "SM-G973F, SM-G973U, SM-G973N, SM-G9738, SM-G973W, SM-G973C, SM-G973U1, SC-03L, SCV41",
        status: "Supported",
      },
      { model: "Galaxy S10", variants: "SM-G9730", status: "Supported" },
      {
        model: "Galaxy S10 5G",
        variants: "SM-G977B,SM-G977P,SM-G977T, SM-G977N, SM-G977U",
        status: "Supported",
      },
      {
        model: "Galaxy S10+",
        variants:
          "SM-G975F, SM-G975FC, SM-G975U, SM-G975UC, SM-G975N, SM-G975NC, SM-G9750C, SM-G9758, SM-G975WC, SM-G975W, SM-G975U2, SM-G975U1, SC-05L, SCV42, SC-04L",
        status: "Supported",
      },
      { model: "Galaxy S10+", variants: "SM-G9750", status: "Supported" },
      {
        model: "Galaxy S10e",
        variants: "SM-G970F, SM-G970N, SM-G970U, SM-G9708, SM-G970W, SM-G970U1",
        status: "Supported",
      },
      { model: "Galaxy S10e", variants: "SM-G9700", status: "Supported" },
      {
        model: "Galaxy Tab A7",
        variants: "SM-T503, SM-T509",
        status: "Supported",
      },
      {
        model: "Galaxy Tab A7",
        variants: "SM-T507, SM-T505N, SM-T505C, SM-T500, SM-T505",
        status: "Supported",
      },
      {
        model: "Galaxy Tab Motor",
        variants: "SM-T260",
        status: "Supported",
      },
      {
        model: "Galaxy Tab S6",
        variants: "SM-T860, SM-T865, SM-T867, SM-T867V",
        status: "Supported",
      },
      {
        model: "Galaxy Tab S6",
        variants: "SM-T865N, SM-T867U, SM-T867R4",
        status: "Supported",
      },
      {
        model: "Galaxy Tab S6 5G",
        variants: "SM-T866N",
        status: "Supported",
      },
      { model: "W20 5G", variants: "SM-W2020", status: "Supported" },
      {
        model: "Galaxy Tab Active Pro",
        variants: "SM-T545, SM-T540, SM-T547, SM-T547U",
        status: "Supported",
      },
      {
        model: "Galaxy XCover4s",
        variants: "SM-G398FN",
        status: "Supported",
      },
      {
        model: "Galaxy A10",
        variants: "SM-A105N,SM-A105FN,SM-A105F,SM-A105G,SM-A105M",
        status: "Supported",
      },
      {
        model: "Galaxy A10e",
        variants:
          "SCV49, SC-42A, SM-A102N, SM-A102U, SM-A102W, SC-02M, SCV46, SM-A102U1, SM-S102DL",
        status: "Supported",
      },
      {
        model: "Galaxy A20",
        variants:
          "SM-A205FN, SM-A205S, SM-A205YN, SM-A205G, SM-A205GN, SM-A205F, SM-A205U, SM-A205W, SM-A205U1, SM-S205DL",
        status: "Supported",
      },
      {
        model: "Galaxy A20e",
        variants: "SM-A202F, SM-A202K",
        status: "Supported",
      },
      {
        model: "Galaxy A30",
        variants:
          "SM-A305FN, SM-A305GT, SM-A305YN, SM-A3058, SM-A3050, SM-A305G, SM-A3051, SM-A305F, SM-A305GN, SM-A305N",
        status: "Supported",
      },
      {
        model: "Galaxy A30s",
        variants: "SM-A307FN, SM-A307G, SM-A307GN, SM-A307GT",
        status: "Supported",
      },
      {
        model: "Galaxy A40",
        variants: "SM-A405FN, SM-A405FM, SM-A405S",
        status: "Supported",
      },
      {
        model: "Galaxy A50",
        variants:
          "SM-A505GT, SM-A505G, SM-A505GN, SM-A505YN, SM-A505F, SM-A505FM, SM-A505FN, SM-A505U, SM-A505N, SM-A505W, SM-S506DL, SM-A505U1",
        status: "Supported",
      },
      {
        model: "Galaxy A50s",
        variants: "SM-A507FN, SM-A5070",
        status: "Supported",
      },
      {
        model: "Galaxy A60",
        variants: "SM-A6060, SM-A606Y",
        status: "Supported",
      },
      {
        model: "Galaxy A70",
        variants:
          "SM-A705FN, SM-A705U, SM-A705YN, SM-A705W, SM-A705GM, SM-A7050, SM-A705F, SM-A705MN",
        status: "Supported",
      },
      {
        model: "Galaxy A70s",
        variants: "SM-A7070, SM-A707F",
        status: "Supported",
      },
      {
        model: "Galaxy A80",
        variants: "SM-A805N, SM-A8050, SM-A805F",
        status: "Supported",
      },
      { model: "Galaxy Haechi", variants: "SM-G889G", status: "Supported" },
      { model: "Galaxy M10s", variants: "SM-M107F", status: "Supported" },
      {
        model: "Galaxy Tab A 10.1 (2019)",
        variants: "SM-T510, SM-T515, SM-T517, SM-T515N, SM-T517P",
        status: "Supported",
      },
      {
        model: "Galaxy Tab A 8 Plus (2019)",
        variants: "SM-P200",
        status: "Supported",
      },
      {
        model: "Galaxy Tab A 8.4 (2020)",
        variants: "SM-T307U",
        status: "Supported",
      },
      {
        model: 'Galaxy Tab A Plus 8" (2019)',
        variants: "SM-P205",
        status: "Supported",
      },
      {
        model: "Galaxy Tab S5e",
        variants:
          "SM-T725N, SM-T727A, SM-T727, SM-T720, SM-T725, SM-T725C, SM-T727V, SM-T727U, SM-T727R4",
        status: "Supported",
      },
      {
        model: "Galaxy Tab S7 FE",
        variants: "SM-T730",
        status: "Supported",
      },
      {
        model: "Galaxy A01",
        variants:
          "SM-S111DL, SM-A015V, SM-A015U1, SM-A015U, SM-A015T1, SM-A015AZ, SM-A015A, SM-A015F, SM-A015G, SM-A015M",
        status: "Not Supported",
      },
      {
        model: "Galaxy A02",
        variants: "SM-M022G, SM-M022M, SM-A022G, SM-M022F, SM-A022F, SM-A022M",
        status: "Not Supported",
      },
      {
        model: "Galaxy A02s",
        variants:
          "SM-A025M, SM-M025F, SM-A025F, SM-A025G, SM-E025F, SM-A025U1, SM-A025V, SM-A025AZ, SM-A025U, SM-A025A, SM-S124DL",
        status: "Not Supported",
      },
      {
        model: "Galaxy A03",
        variants: "SM-A035F, SM-A035M, SM-A035G",
        status: "Not Supported",
      },
      {
        model: "Galaxy A03s",
        variants:
          "SM-A037F, SM-A037M, SM-A037G,SM-A037U,SM-A037U1,SM-A037W, SM-S134DL, SM-S135DL",
        status: "Not Supported",
      },
      {
        model: "Galaxy A04",
        variants: "SM-A045M, SM-A045F",
        status: "Not Supported",
      },
      {
        model: "Galaxy A04e",
        variants: "SM-A042M, SM-A042F",
        status: "Not Supported",
      },
      {
        model: "Galaxy A05",
        variants: "SM-A055M, SM-A055F",
        status: "Not Supported",
      },
      {
        model: "Galaxy A05s",
        variants: "SM-A057F, SM-A057G, SM-A057M",
        status: "Not Supported",
      },
      {
        model: "Galaxy A10s",
        variants: "SM-A107F, SM-A107M, SM-M017F",
        status: "Not Supported",
      },
      {
        model: "Galaxy A11",
        variants:
          "SM-A115M, SM-A115F, SM-A115W, SM-A115AP, SM-A115A, SM-A115AZ, SM-A115U1, SM-A115U, SM-S115DL",
        status: "Not Supported",
      },
      {
        model: "Galaxy A14",
        variants: "SM-A145M, SM-A145F, SM-A145P, SM-A145R",
        status: "Not Supported",
      },
      {
        model: "Galaxy A14 5G",
        variants:
          "SM-A146W, SM-A146U, SM-A146U1, SM-A146M, SM-A146B, SM-A146P, SM-S146VL",
        status: "Not Supported",
      },
      {
        model: "Galaxy A20s",
        variants: "SM-A2070, SM-A207M, SM-A207F",
        status: "Not Supported",
      },
      {
        model: "Galaxy A21",
        variants: "SM-A215W, SM-S215DL, SM-A215U1, SM-A215U",
        status: "Not Supported",
      },
      {
        model: "Galaxy A22 5G",
        variants: "SM-A226B, SM-A226L, SM-A226BR",
        status: "Not Supported",
      },
      {
        model: "Galaxy A6s",
        variants: "SM-G6200",
        status: "Not Supported",
      },
      {
        model: "Galaxy F04",
        variants: "SM-E045F",
        status: "Not Supported",
      },
      {
        model: "Galaxy F05",
        variants: "SM-E055F",
        status: "Not Supported",
      },
      {
        model: "Galaxy F14",
        variants: "SM-E145F",
        status: "Not Supported",
      },
      {
        model: "Galaxy F42 5G",
        variants: "SM-E426S, SM-E426B",
        status: "Not Supported",
      },
      {
        model: "Galaxy F52 5G",
        variants: "SM-E5260",
        status: "Not Supported",
      },
      { model: "Galaxy Haechi", variants: "SM-G889F", status: "Supported" },
      {
        model: "Galaxy J1 Mini Prime",
        variants: "SM-J106F",
        status: "Not Supported",
      },
      {
        model: "Galaxy J2 (2018)",
        variants: "SM-J250N",
        status: "Not Supported",
      },
      {
        model: "Galaxy J3 (2016)",
        variants: "SM-J320F",
        status: "Not Supported",
      },
      {
        model: "Galaxy M01",
        variants: "SM-M015G, SM-M015F",
        status: "Not Supported",
      },
      {
        model: "Galaxy M04",
        variants: "SM-M045F",
        status: "Not Supported",
      },
      {
        model: "Galaxy M05",
        variants: "SM-M055F",
        status: "Not Supported",
      },
      {
        model: "Galaxy M10",
        variants: "SM-M105F, SM-M105G, SM-M105M, SM-M105Y",
        status: "Not Supported",
      },
      {
        model: "Galaxy M11",
        variants: "SM-M115M, SM-M115F",
        status: "Not Supported",
      },
      {
        model: "Galaxy M14",
        variants: "SM-M145F",
        status: "Not Supported",
      },
      {
        model: "Galaxy M20",
        variants: "SM-M205F, SM-M205FN, SM-M205G, SM-M205M, SM-M205N",
        status: "Not Supported",
      },
      {
        model: "Galaxy M21",
        variants: "SM-M215F",
        status: "Not Supported",
      },
      {
        model: "Galaxy M21 (2021)",
        variants: "SM-M215G",
        status: "Not Supported",
      },
      {
        model: "Galaxy M30",
        variants: "SM-M305F, SM-M305M",
        status: "Not Supported",
      },
      {
        model: "Galaxy M30s",
        variants: "SM-M3070, SM-M307F, SM-M307FN",
        status: "Not Supported",
      },
      {
        model: "Galaxy M31",
        variants: "SM-M315F, SM-F415F",
        status: "Not Supported",
      },
      {
        model: "Galaxy M40",
        variants: "SM-M405F",
        status: "Not Supported",
      },
      {
        model: "Galaxy On5 (2015)",
        variants: "SM-G550FY",
        status: "Not Supported",
      },
      {
        model: "Galaxy Tab A 7 (2016)",
        variants: "SM-T285",
        status: "Not Supported",
      },
      {
        model: "Galaxy Tab A8 (2019)",
        variants: "SM-T295N, SM-T290, SM-T295, SM-T295C, SM-T297",
        status: "Not Supported",
      },
      {
        model: "Galaxy XCover FieldPro",
        variants: "SM-G889YB",
        status: "Supported",
      },
      {
        model: "Gear 360 (2017)",
        variants: "SM-R210",
        status: "Not Supported",
      },
      {
        model: "Gear 360 Pro",
        variants: "SM-R260",
        status: "Not Supported",
      },
      {
        model: "Gear Fit2 Pro",
        variants: "SM-R365",
        status: "Not Supported",
      },
      {
        model: "Watch FE",
        variants: "SM-R861, SM-R866U",
        status: "Not Supported",
      },
      {
        model: "Watch Ultra",
        variants: "SM-L7050, SM-L705U, SM-L705N, SM-L705F, SM-L700",
        status: "Not Supported",
      },
      {
        model: "Watch4 40mm",
        variants: "SM-R860, SM-R865F, SM-R865U, SM-R865N",
        status: "Not Supported",
      },
      {
        model: "Watch4 44mm",
        variants: "SM-R870, SM-R875F, SM-R875N, SM-R875U",
        status: "Not Supported",
      },
      {
        model: "Watch4 Classic 42mm",
        variants: "SM-R880, SM-R885F, SM-R885N, SM-R885U",
        status: "Not Supported",
      },
      {
        model: "Watch4 Classic 46mm",
        variants: "SM-R895F, SM-R895N, SM-R895U, SM-R8950, SM-R890",
        status: "Not Supported",
      },
      {
        model: "Watch5 40mm",
        variants: "SM-R905N, SM-R900, SM-R905U, SM-R905F",
        status: "Not Supported",
      },
      {
        model: "Watch5 44mm",
        variants: "SM-R915N, SM-R910, SM-R9150, SM-R915U, SM-R915F",
        status: "Not Supported",
      },
      {
        model: "Watch5 Pro",
        variants: "SM-R925N, SM-R925U, SM-R925F, SM-R920",
        status: "Not Supported",
      },
      {
        model: "Watch6 40mm",
        variants: "SM-R935N, SM-R935U, SM-R935F, SM-R930",
        status: "Not Supported",
      },
      {
        model: "Watch6 44mm",
        variants: "SM-R945N, SM-R9450, SM-R945F, SM-R940, SM-R945U",
        status: "Not Supported",
      },
      {
        model: "Watch6 Classic 43mm",
        variants: "SM-R955N, SM-R955U, SM-R955F, SM-R950",
        status: "Not Supported",
      },
      {
        model: "Watch6 Classic 47mm",
        variants: "SM-R965N, SM-R965U, SM-R9650, SM-R960, SM-R965F",
        status: "Not Supported",
      },
      {
        model: "Watch7 40mm",
        variants: "SM-L300, SM-L305U, SM-L305N, SM-L305F",
        status: "Not Supported",
      },
      {
        model: "Watch7 44mm",
        variants: "SM-L310, SM-L3150, SM-L315U, SM-L315N, SM-L315F",
        status: "Not Supported",
      },
      {
        model: "Galaxy A6",
        variants:
          "SM-A600FN, SM-A600F, SM-A600G, SM-A600GN, SM-A600N, SM-A600P, SM-A600A, SM-A600AZ, SM-A600T, SM-A600T1, SM-A600U",
        status: "Supported",
      },
      {
        model: "Galaxy A6+",
        variants:
          "SM-A605FN, SM-A6050, SM-A605F, SM-A605G, SM-A605GN, SM-A605K, SM-A6058",
        status: "Supported",
      },
      {
        model: "Galaxy A7 (2018)",
        variants: "SM-A750F, SM-A750FN, SM-A750G, SM-A750GN, SM-A750N, SM-A750C",
        status: "Supported",
      },
      {
        model: "Galaxy A8 (2018)",
        variants: "SC-02L",
        status: "Supported",
      },
      {
        model: "Galaxy A8 Star",
        variants: "SM-G8850, SM-G8858, SM-G885F, SM-G885S, SM-G885Y",
        status: "Supported",
      },
      {
        model: "Galaxy A8s",
        variants: "SM-G8870, SM-G887F",
        status: "Supported",
      },
      {
        model: "Galaxy A9 (2018)",
        variants: "SM-A920F, SM-A9200, SM-A920N",
        status: "Supported",
      },
      { model: "Galaxy A9 Pro", variants: "SM-G887N", status: "Supported" },
      {
        model: "Galaxy J4",
        variants: "SM-J400M, SM-J400G, SM-J400F",
        status: "Supported",
      },
      { model: "Galaxy J4+", variants: "SM-J415N", status: "Supported" },
      {
        model: "Galaxy J6",
        variants:
          "SM-J600F, SM-J600FN, SM-J600G, SM-J600GT, SM-J600GF, SM-J600L, SM-J600N",
        status: "Supported",
      },
      {
        model: "Galaxy J6+",
        variants: "SM-J610G, SM-J610F, SM-J610FN",
        status: "Supported",
      },
      {
        model: "Galaxy J7 Duo",
        variants: "SM-J720F, SM-J720M",
        status: "Supported",
      },
      { model: "Galaxy J7 Top", variants: "SM-J737S", status: "Supported" },
      {
        model: "Galaxy J8",
        variants: "SM-J810F, SM-J810M, SM-J810Y, SM-J810GF, SM-J810G",
        status: "Supported",
      },
      {
        model: "Galaxy S8 Lite",
        variants: "SM-G8750",
        status: "Supported",
      },
      {
        model: 'Galaxy Tab A 10.5"',
        variants:
          "SM-T595C, SM-T595N, SM-T597, SM-T597V, SM-T597P, SM-T597W, SM-T590, SM-T595",
        status: "Supported",
      },
      {
        model: "Galaxy Tab A 8 (2018)",
        variants: "SM-T387P, SM-T387V, SM-T387AA, SM-T387T, SM-T387R4",
        status: "Supported",
      },
      {
        model: 'Galaxy Tab A 8.0"',
        variants: "SM-T387W",
        status: "Supported",
      },
      {
        model: "Galaxy Tab S4",
        variants:
          "SM-T835N, SM-T837, SM-T830, SM-T835, SM-T837A, SM-T837P, SM-T837V, SM-T837R4, SM-T837T, SM-T835C",
        status: "Supported",
      },
      { model: "W2019", variants: "SM-W2019", status: "Supported" },
      {
        model: "Galaxy A30",
        variants: "SCV43, SCV43-j, SCV43-u",
        status: "Supported",
      },
      {
        model: "Galaxy Note9",
        variants:
          "SM-N960F, SM-N9600, SM-N960N, SM-N960U, SM-N960W, SM-N960U1, SC-01L, SCV40",
        status: "Supported",
      },
      {
        model: "Galaxy S9",
        variants:
          "SM-G9600, SM-G9608, SM-G960U, SM-G960U1, SM-G960W, SM-G960N, SM-G960F, SCV38, SC-02K",
        status: "Supported",
      },
      {
        model: "Galaxy S9+",
        variants:
          "SM-G965F, SM-G965N, SM-G9650, SM-G965U, SM-G965U1, SM-G965W, SCV39, SC-03K",
        status: "Supported",
      },
      {
        model: "Galaxy J2 Core",
        variants: "SM-J260A, SM-S260DL, SM-J260AZ",
        status: "Supported",
      },
      {
        model: "Galaxy J5 (2017)",
        variants:
          "SM-J530G, SM-J530GM, SM-J530K, SM-J530L, SM-J530S, SM-J530Y, SM-J530YM, SM-J530F, SM-J530FM",
        status: "Supported",
      },
      {
        model: "Galaxy A7 (2017)",
        variants: "SM-A720S",
        status: "Supported",
      },
      {
        model: "Galaxy A8 (2018)",
        variants: "SM-A530F, SM-A530N, SM-A530W",
        status: "Supported",
      },
      {
        model: "Galaxy A8+ (2018)",
        variants: "SM-A730F",
        status: "Supported",
      },
      {
        model: "Galaxy J3 (2017)",
        variants:
          "SM-J330L, SM-J330N, SM-J3308, SM-J330F, SM-J330FN, SM-J330G, SM-J3300",
        status: "Supported",
      },
      {
        model: "Galaxy J3 Top",
        variants:
          "SM-J337P, SM-J337V, SM-J337VPP, SM-J337U, SM-J337W, SM-S357BL, SM-S367VL, SM-J337R4, SM-J337R7, SM-J337A",
        status: "Supported",
      },
      {
        model: "Galaxy J4+",
        variants: "SM-J415GN, SM-J415FN, SM-J415G, SM-J415F",
        status: "Supported",
      },
      {
        model: "Galaxy J7 (2017)",
        variants: "SM-J730K, SM-J730G, SM-J730GM, SM-J730F, SM-J730FM",
        status: "Supported",
      },
      {
        model: "Galaxy J7 Neo",
        variants: "SM-J701F, SM-J701M, SM-J701MT",
        status: "Supported",
      },
      { model: "Galaxy J7 Pop", variants: "SM-J727S", status: "Supported" },
      {
        model: "Galaxy J7 Top",
        variants:
          "SM-J737T, SM-J737V, SM-J737VPP, SM-J737R4, SM-J737U, SM-J737T1, SM-S767VL, SM-S757BL, SM-J737A, SM-J737P",
        status: "Supported",
      },
      {
        model: "Galaxy Note FE",
        variants: "SM-N935F, SM-N935S",
        status: "Supported",
      },
      {
        model: "Galaxy On7 (2018)",
        variants:
          "SM-G611F, SM-G611K, SM-G611L, SM-G611S, SM-G611FF, SM-G611M, SM-G611MT",
        status: "Supported",
      },
      {
        model: "Galaxy S8 Active",
        variants: "SM-G892U, SM-G892A",
        status: "Supported",
      },
      {
        model: "Galaxy Tab A 8 (2017)",
        variants: "SM-T385K, SM-T385L, SM-T385M, SM-T385S, SM-T380, SM-T385",
        status: "Supported",
      },
      {
        model: "Galaxy Tab A 8 (2018)",
        variants: "SM-T387VK",
        status: "Supported",
      },
      {
        model: "Galaxy Tab Active2",
        variants: "SM-T395, SM-T395N, SM-T397U, SM-T390",
        status: "Supported",
      },
      {
        model: "Galaxy Tab S3",
        variants:
          "SM-T825C, SM-T825Y, SM-T827, SM-T827V, SM-T827R4, SM-T820, SM-T825N0, SM-T825",
        status: "Supported",
      },
      {
        model: "Galaxy XCover4",
        variants: "SM-G390W, SM-G390Y, SM-G390F",
        status: "Supported",
      },
      { model: "W2018", variants: "SM-W2018", status: "Supported" },
      {
        model: "Galaxy Note8",
        variants:
          "SM-N950F, SM-N950N, SM-N950U1, SM-N9500, SM-N9508, SM-N950U, SM-N950W, SC-01K, SCV37",
        status: "Supported",
      },
      {
        model: "Galaxy S8",
        variants:
          "SM-G950F, SM-G950FD, SM-G950N, SM-G9500, SM-G9508, SM-G950U, SM-G950U1, SM-G950W, SC-02J, SCV36",
        status: "Supported",
      },
      {
        model: "Galaxy S8+",
        variants:
          "SM-G955F, SM-G955FD, SM-G955N, SM-G9550, SM-G955U, SM-G955U1, SM-G955W, SC-03J",
        status: "Supported",
      },
      {
        model: "Galaxy C8",
        variants: "SM-C7108, SM-C710F, SM-C7100",
        status: "Supported",
      },
      {
        model: "Galaxy J2 Core",
        variants: "SM-J260T1",
        status: "Supported",
      },
      {
        model: "Galaxy J3 Pop",
        variants:
          "SM-J327A, SM-J327R4, SM-J327R6, SM-J327R7, SM-J327U, SM-J327V, SM-J327VPP, SM-J327W",
        status: "Supported",
      },
      {
        model: "Galaxy J7 (2016)",
        variants: "SM-J710MN, SM-J710F, SM-J710FN, SM-J710GN, SM-J710K",
        status: "Supported",
      },
      {
        model: "Galaxy J7 Max",
        variants: "SM-G615F, SM-G615FU",
        status: "Supported",
      },
      {
        model: "Galaxy J7 Pop",
        variants:
          "SM-J727U, SM-J727T, SM-J727T1, SM-J727V, SM-J727VPP, SM-S737TL, SM-J727A, SM-J727AZ, SM-J727P, SM-J727R4",
        status: "Supported",
      },
      {
        model: "Galaxy On5 (2016)",
        variants: "SM-G5510, SM-G5520, SM-G5528",
        status: "Supported",
      },
      {
        model: "Galaxy On7 (2016)",
        variants: "SM-G610F, SM-G610K, SM-G610L, SM-G610M, SM-G610S",
        status: "Supported",
      },
      {
        model: "Galaxy Tab A 10.1 (2016)",
        variants: "SM-T580, SM-T585, SM-T585C, SM-T585N0, SM-T587, SM-T587P",
        status: "Supported",
      },
      {
        model: "Galaxy Tab A 10.1 Plus (2016)",
        variants: "SM-P580, SM-P585, SM-P585M, SM-P585N0, SM-P585Y, SM-P587",
        status: "Supported",
      },
      {
        model: 'Galaxy Tab A 10.1" w/ S-Pen',
        variants: "SM-P583, SM-P588C",
        status: "Supported",
      },
      {
        model: "Galaxy Tab A 8 (2017)",
        variants: "SM-T380C, SM-T385C",
        status: "Supported",
      },
      {
        model: 'Galaxy Tab E 8.0"',
        variants: "SM-T378V",
        status: "Supported",
      },
      { model: "Galaxy View2", variants: "SM-T927A", status: "Supported" },
      {
        model: "Galaxy A3 (2016)",
        variants: "SC-04J",
        status: "Supported",
      },
      {
        model: "Galaxy A3 (2017)",
        variants: "SM-A320F, SM-A320FL, SM-A320Y",
        status: "Supported",
      },
      {
        model: "Galaxy A5 (2017)",
        variants: "SM-A520F, SM-A520K, SM-A520L, SM-A520S, SM-A520W",
        status: "Supported",
      },
      {
        model: "Galaxy A7 (2017)",
        variants: "SM-A720F",
        status: "Supported",
      },
      {
        model: "Galaxy A8 (2016)",
        variants: "SM-A810F, SM-A810YZ, SM-A810S",
        status: "Supported",
      },
      {
        model: "Galaxy A9 Pro (2016)",
        variants: "SM-A9100, SM-A910F",
        status: "Supported",
      },
      { model: "Galaxy C5", variants: "SM-C5000", status: "Supported" },
      {
        model: "Galaxy C5 Pro",
        variants: "SM-C5010, SM-C5018",
        status: "Supported",
      },
      { model: "Galaxy C7", variants: "SM-C7000", status: "Supported" },
      {
        model: "Galaxy C7 Pro",
        variants: "SM-C7010, SM-C7018, SM-C701F",
        status: "Supported",
      },
      {
        model: "Galaxy C9 Pro",
        variants: "SM-C9000, SM-C9008, SM-C900F, SM-C900Y",
        status: "Supported",
      },
      {
        model: "Galaxy J3 Top",
        variants: "SM-J337AZ, SM-J336AZ, SM-J337T",
        status: "Supported",
      },
      {
        model: "Galaxy On5 (2016)",
        variants: "SM-G570F, SM-G570M, SM-G570Y",
        status: "Supported",
      },
      {
        model: "Galaxy On7 (2016)",
        variants: "SM-G6100",
        status: "Supported",
      },
      {
        model: "Galaxy S7",
        variants:
          "SM-G930F, SM-G930FD, SM-G930K, SM-G930L, SM-G930S, SM-G9300, SM-G9308, SM-G930A, SM-G930AZ, SM-G930P, SM-G930R4, SM-G930R6, SM-G930R7, SM-G930T, SM-G930T1, SM-G930V, SM-G930VL, SM-G930W8, SM-G930U",
        status: "Supported",
      },
      {
        model: "Galaxy S7 Active",
        variants: "SM-G891A",
        status: "Supported",
      },
      {
        model: "Galaxy S7 Edge",
        variants:
          "SM-G935F, SM-G935K, SM-G935L, SM-G935S, SM-G9350, SM-G935A, SM-G935P, SM-G935R4, SM-G935T, SM-G935U, SM-G935V, SM-G935VC, SM-G935W8, SM-G935FD",
        status: "Supported",
      },
      {
        model: "Galaxy Tab A 10.1 (2016)",
        variants: "SM-T583",
        status: "Supported",
      },
      {
        model: "Galaxy Tab4 7",
        variants: "SM-T230NZ",
        status: "Supported",
      },
      {
        model: "Samsung Galaxy J5 Prime (2016)",
        variants: "SM-G5700",
        status: "Supported",
      },
      {
        model: "Galaxy A5 (2015)",
        variants: "SM-A5100",
        status: "Supported",
      },
      {
        model: "Galaxy A5 (2016)",
        variants: "SM-A5108",
        status: "Supported",
      },
      {
        model: "Galaxy A7 (2016)",
        variants: "SM-A7100, SM-A7108",
        status: "Supported",
      },
      {
        model: "Galaxy Folder 2",
        variants: "SM-G1650",
        status: "Supported",
      },
      {
        model: "Galaxy J2 (2018)",
        variants: "SM-J250F, SM-J250G, SM-J250M, SM-J250Y",
        status: "Supported",
      },
      {
        model: "Galaxy J3 (2016)",
        variants: "SM-J320A, SM-J320AZ, SM-J320V, SM-J320W8",
        status: "Supported",
      },
      {
        model: "Galaxy J5 (2016)",
        variants:
          "SM-J510F, SM-J510FN, SM-J510FQ, SM-J510GN, SM-J510H, SM-J510L, SM-J510MN, SM-J510S",
        status: "Supported",
      },
      {
        model: "Galaxy On7 (2015)",
        variants: "SM-G600S",
        status: "Supported",
      },
      {
        model: "Galaxy A3 (2016)",
        variants: "SM-A310F, SM-A310M, SM-A310N0, SM-A310Y",
        status: "Supported",
      },
      {
        model: "Galaxy A5 (2016)",
        variants: "SM-A510F, SM-A510FD, SM-A510M, SM-A510Y",
        status: "Supported",
      },
      {
        model: "Galaxy A7 (2016)",
        variants: "SM-A710F, SM-A710FD, SM-A710K, SM-A710L, SM-A710M, SM-A710S",
        status: "Supported",
      },
      {
        model: "Galaxy J7 (2015)",
        variants: "SM-J700P, SM-J700T1, SM-J700T",
        status: "Supported",
      },
      {
        model: "Galaxy On7 (2016)",
        variants: "SM-G610Y",
        status: "Supported",
      },
      { model: "Galaxy S5 Neo", variants: "SM-G903W", status: "Supported" },
      {
        model: 'Galaxy Tab A 8" w/ S-Pen',
        variants: "SM-P355, SM-P355M",
        status: "Supported",
      },
      {
        model: 'Galaxy Tab A 8.0"',
        variants: "SM-T355, SM-T355Y, SM-T350",
        status: "Supported",
      },
      {
        model: 'Galaxy Tab A 9.7"',
        variants: "SM-T555, SM-T550",
        status: "Supported",
      },
      {
        model: 'Galaxy Tab A 9.7" w/ S-Pen',
        variants: "SM-P555, SM-P555M, SM-P550",
        status: "Supported",
      },
      {
        model: "Galaxy Tab A Plus 9.7",
        variants: "SM-P555S",
        status: "Supported",
      },
      {
        model: "Galaxy Tab Active2",
        variants: "SM-T395C",
        status: "Supported",
      },
      {
        model: 'Galaxy Tab E 8.0"',
        variants: "SM-T377A, SM-T377P, SM-T377R4, SM-T377T, SM-T377V, SM-T377W",
        status: "Supported",
      },
      {
        model: 'Galaxy Tab E 9.6"',
        variants: "SM-T560NU, SM-T567V",
        status: "Supported",
      },
      {
        model: "Galaxy J3 Pop",
        variants: "SM-J326AZ, SM-J327AZ, SM-J327T, SM-J327T1, SM-S337TL",
        status: "Supported",
      },
      {
        model: "Galaxy Note5",
        variants:
          "SM-N9200, SM-N9208, SM-N920A, SM-N920C, SM-N920CD, SM-N920G, SM-N920I, SM-N920K, SM-N920L, SM-N920P, SM-N920S, SM-N920V, SM-N920W8, SM-N920T, SM-N920R4",
        status: "Supported",
      },
      {
        model: "Galaxy S6",
        variants:
          "SM-G920AZ, SM-G9200, SM-G9208, SM-G920A, SM-G920F, SM-G920FD, SM-G920FQ, SM-G920I, SM-G920P, SM-G920T, SM-G920V, SM-G920W8, SM-G920S, SM-G920R4, SM-G9209",
        status: "Supported",
      },
      {
        model: "Galaxy S6 Active",
        variants: "SM-G890A",
        status: "Supported",
      },
      {
        model: "Galaxy S6 edge",
        variants:
          "SM-G9250, SM-G925A, SM-G925F, SM-G925FQ, SM-G925I, SM-G925T, SM-G925V, SM-G925W8, SM-G925S",
        status: "Supported",
      },
      {
        model: "Galaxy S6 edge+",
        variants:
          "SM-G9280, SM-G9287, SM-G9287C, SM-G928A, SM-G928C, SM-G928F, SM-G928G, SM-G928I, SM-G928W8, SM-G928T, SM-G928V",
        status: "Supported",
      },
      {
        model: 'Galaxy Tab S2 8.0"',
        variants:
          "SM-T710, SM-T713, SM-T715, SM-T715C, SM-T715Y, SM-T719, SM-T719C, SM-T719Y",
        status: "Supported",
      },
      {
        model: 'Galaxy Tab S2 9.7"',
        variants:
          "SM-T810, SM-T813, SM-T815, SM-T815C, SM-T815N0, SM-T815Y, SM-T817, SM-T817A, SM-T817P, SM-T817R4, SM-T817T, SM-T817V, SM-T817W, SM-T818, SM-T818A, SM-T818V, SM-T818W, SM-T819, SM-T819C, SM-T819Y, SM-T818T",
        status: "Supported",
      },
      { model: "G9298", variants: "SM-G9298", status: "Supported" },
      {
        model: "Galaxy Grand Prime Plus",
        variants: "SM-G532F, SM-G532G, SM-G532M, SM-G532MT",
        status: "Supported",
      },
      {
        model: "Galaxy Haechi",
        variants: "SM-G888N0",
        status: "Supported",
      },
      {
        model: "Galaxy J3 Pop",
        variants: "SM-J327P, SM-S327VL",
        status: "Supported",
      },
      {
        model: "Galaxy J7 Pop",
        variants: "SM-S727VL",
        status: "Supported",
      },
      { model: "W2017", variants: "SM-W2017", status: "Supported" },
      {
        model: "Galaxy A3 (2015)",
        variants: "SM-A300FU",
        status: "Supported",
      },
      {
        model: "Galaxy A5 (2015)",
        variants:
          "SM-A500F, SM-A500FQ, SM-A500FU, SM-A500H, SM-A500HQ, SM-A500M, SM-A500Y, SM-A500G",
        status: "Supported",
      },
      {
        model: "Galaxy A7 (2015)",
        variants: "SM-A7000, SM-A700F, SM-A700FD, SM-A700FQ, SM-A7009, SM-A700H",
        status: "Supported",
      },
      {
        model: "Galaxy A7 (2016)",
        variants: "SM-A710Y",
        status: "Supported",
      },
      {
        model: "Galaxy A8 (2015)",
        variants: "SM-A8000, SM-A800F, SM-A800I",
        status: "Supported",
      },
      {
        model: "Galaxy A9 (2016)",
        variants: "SM-A9000",
        status: "Supported",
      },
      {
        model: "Galaxy Folder 2 Dual SIM",
        variants: "SM-G1600, SM-G160N, SM-G165N",
        status: "Supported",
      },
      {
        model: "Galaxy J1 (2016)",
        variants: "SM-J120A, SM-J120AZ, SM-J120W, SM-S120VL",
        status: "Supported",
      },
      {
        model: "Galaxy J3 (2016)",
        variants: "SM-J320N0, SM-J320R4, SM-J320VPP, SM-S320VL",
        status: "Supported",
      },
      {
        model: "Galaxy J5 (2015)",
        variants: "SM-J500G, SM-J500F, SM-J500FN, SM-J500H, SM-J500Y, SM-J500M",
        status: "Supported",
      },
      {
        model: "Galaxy J5 (2016)",
        variants: "SM-J5108, SM-J510UN",
        status: "Supported",
      },
      {
        model: "Galaxy J7 (2015)",
        variants: "SM-J700H, SM-J700M, SM-J700F",
        status: "Supported",
      },
      {
        model: "Galaxy J7 (2016)",
        variants: "SM-J7108, SM-J7109",
        status: "Supported",
      },
      {
        model: "Galaxy Note Edge",
        variants: "SM-N9150, SM-N915F, SM-N915FY, SM-N915G, SM-N915T",
        status: "Supported",
      },
      {
        model: "Galaxy Note4",
        variants:
          "SM-N9100, SM-N910C, SM-N910CQ, SM-N910F, SM-N910G, SM-N910H, SM-N910U, SM-N910V, SM-N910T3, SM-N910T, SM-N910A",
        status: "Supported",
      },
      {
        model: "Galaxy On5 (2015)",
        variants: "SM-G550T1, SM-S550TL",
        status: "Supported",
      },
      {
        model: "Galaxy On7 (2015)",
        variants: "SM-G600F, SM-G600FY",
        status: "Supported",
      },
      {
        model: "Galaxy S5",
        variants:
          "SM-G900A, SM-G900F, SM-G900FQ, SM-G900H, SM-G900I, SM-G900M, SM-G900MD, SM-G900V, SM-G901F, SM-S903VL, SM-G900P, SM-G900T, SM-G9008W, SM-G9009D, SM-G9009W",
        status: "Supported",
      },
      {
        model: "Galaxy S5 Active",
        variants: "SM-G870A",
        status: "Supported",
      },
      {
        model: "Galaxy S5 Mini",
        variants: "SM-G800F, SM-G800H, SM-G800HQ, SM-G800M, SM-G800Y",
        status: "Supported",
      },
      {
        model: "Galaxy S5 Neo",
        variants: "SM-G903F, SM-G903M",
        status: "Supported",
      },
      { model: "Galaxy S6", variants: "SM-S907VL", status: "Supported" },
      {
        model: 'Galaxy Tab A 8" w/ S-Pen',
        variants: "SM-P350, SM-P355C, SM-P355Y",
        status: "Supported",
      },
      {
        model: 'Galaxy Tab A 8.0"',
        variants: "SM-T355C",
        status: "Supported",
      },
      {
        model: 'Galaxy Tab A 9.7"',
        variants: "SM-T555C",
        status: "Supported",
      },
      {
        model: 'Galaxy Tab E 8.0"',
        variants: "SM-T375L, SM-T375S, SM-T378K, SM-T378L, SM-T378S",
        status: "Supported",
      },
      {
        model: "Galaxy Tab S 10.5",
        variants: "SM-T805Y",
        status: "Supported",
      },
      {
        model: 'Galaxy Tab S 10.5"',
        variants:
          "SM-T800, SM-T805, SM-T805C, SM-T805M, SM-T807, SM-T807P, SM-T807V",
        status: "Supported",
      },
      {
        model: 'Galaxy Tab S 8.4"',
        variants:
          "SM-T700, SM-T705, SM-T705C, SM-T705M, SM-T705Y, SM-T707A, SM-T707V",
        status: "Supported",
      },
      {
        model: 'Galaxy Tab4 10.1"',
        variants: "SM-T536",
        status: "Supported",
      },
      {
        model: "Galaxy Tab4 7",
        variants: "SM-T230NW",
        status: "Supported",
      },
      {
        model: "Galaxy XCover3",
        variants: "SM-G389F",
        status: "Supported",
      },
      {
        model: "Galaxy J1 (2016)",
        variants: "SM-J120F, SM-J120FN, SM-J120G, SM-J120M, SM-J120ZN",
        status: "Supported",
      },
      {
        model: "Galaxy J3 (2016)",
        variants: "SM-J320Y, SM-J320ZN, SM-J320P, SM-J3109",
        status: "Supported",
      },
      {
        model: "Galaxy J3 Pro",
        variants: "SM-J3110, SM-J3119, SM-J3119S",
        status: "Supported",
      },
      {
        model: "Galaxy Tab3 Lite",
        variants: "SM-T116IR",
        status: "Supported",
      },
      {
        model: "Galaxy View",
        variants: "SM-T670, SM-T677V",
        status: "Supported",
      },
      {
        model: "Galaxy Tab Active",
        variants: "SM-T360, SM-T365, SM-T365F0, SM-T365M, SM-T365Y",
        status: "Supported",
      },
      { model: "W2016", variants: "SM-W2016", status: "Supported" },
      { model: "G9198", variants: "SM-G9198", status: "Supported" },
      {
        model: "Galaxy E7",
        variants: "SM-E700F, SM-E700H, SM-E700M",
        status: "Supported",
      },
      {
        model: "Galaxy J2 (2015)",
        variants: "SM-J200BT, SM-J200F, SM-J200G, SM-J200GU, SM-J200M, SM-J200Y",
        status: "Supported",
      },
      {
        model: 'Galaxy Note 10.1" (2014 Edition)',
        variants: "SM-P600, SM-P601, SM-P605, SM-P605V, SM-P605M",
        status: "Supported",
      },
      {
        model: "Galaxy Note Pro 12.2",
        variants: "SM-P905V, SM-P907A",
        status: "Supported",
      },
      {
        model: "Galaxy Note3 Neo",
        variants: "SM-N750, SM-N7505",
        status: "Supported",
      },
      {
        model: 'Galaxy Tab E 8.0"',
        variants: "SM-T3777",
        status: "Supported",
      },
      {
        model: 'Galaxy Tab Pro 12.2"',
        variants: "SM-T900, SM-T905",
        status: "Supported",
      },
      {
        model: 'Galaxy Tab4 10.1"',
        variants: "SM-T530",
        status: "Supported",
      },
      {
        model: "Galaxy Tab4 7",
        variants: "SM-T235, SM-T237P",
        status: "Supported",
      },
      {
        model: "Galaxy XCover3",
        variants: "SM-G388F",
        status: "Supported",
      },
      {
        model: "Galaxy A5 (2015)",
        variants: "SM-A5000",
        status: "Supported",
      },
      {
        model: "Galaxy A7 (2015)",
        variants: "SM-A700YD",
        status: "Supported",
      },
      {
        model: "Galaxy Core Prime",
        variants: "SM-G360G, SM-G361F",
        status: "Supported",
      },
      {
        model: "Galaxy E5",
        variants: "SM-E500H, SM-E500HQ, SM-E500M",
        status: "Supported",
      },
      {
        model: "Galaxy Folder LTE",
        variants: "SM-G150N0",
        status: "Supported",
      },
      {
        model: "Galaxy Grand Prime",
        variants:
          "SM-G530BT, SM-G530FQ, SM-G530FZ, SM-G530H, SM-G530M, SM-G530W, SM-G531F, SM-G531M",
        status: "Supported",
      },
      {
        model: "Galaxy J5 (2015)",
        variants: "SM-J500N0, SM-J5008",
        status: "Supported",
      },
      {
        model: "Galaxy J7 (2015)",
        variants: "SM-J7008",
        status: "Supported",
      },
      {
        model: 'Galaxy Tab A 9.7" w/ S-Pen',
        variants: "SM-P555Y",
        status: "Supported",
      },
      {
        model: 'Galaxy Tab4 10.1"',
        variants: "SM-T530NU, SM-T531, SM-T532, SM-T535, SM-T533",
        status: "Supported",
      },
      {
        model: 'Galaxy Tab4 8.0"',
        variants:
          "SM-T330, SM-T330NU, SM-T331, SM-T332, SM-T335, SM-T337A, SM-T337T, SM-T337V",
        status: "Supported",
      },
      {
        model: "Galaxy A01 Core",
        variants: "SM-A013F, SM-A013G, SM-M013F, SM-A013M",
        status: "Not Supported",
      },
      {
        model: "Galaxy A03 Core",
        variants: "SM-A032M, SM-A032F",
        status: "Not Supported",
      },
      {
        model: "Galaxy A2 Core",
        variants: "SM-A260G, SM-A260F",
        status: "Not Supported",
      },
      {
        model: "Galaxy J2 Core",
        variants:
          "SM-J260M, SM-J260Y, SM-J260G, SM-J260F, SM-J260GU, SM-J260MU, SM-J260FU",
        status: "Not Supported",
      },
      {
        model: "Galaxy J4 Core",
        variants: "SM-J410G, SM-J410F",
        status: "Not Supported",
      },
      {
        model: "Galaxy Watch 42mm",
        variants: "SM-R815F, SM-R810, SM-R815N, SM-R815U, SM-R815W",
        status: "Not Supported",
      },
      {
        model: "Galaxy Watch 46mm",
        variants: "SM-R8050, SM-R805F, SM-R800, SM-R805N, SM-R805U, SM-R805W",
        status: "Not Supported",
      },
      {
        model: "Galaxy Watch Active",
        variants: "SM-R500",
        status: "Not Supported",
      },
      {
        model: "Galaxy Watch Active2 40mm",
        variants: "SM-R830S, SM-R830, SM-R835US, SM-R835FS, SM-R835F",
        status: "Not Supported",
      },
      {
        model: "Galaxy Watch Active2 44mm",
        variants: "SM-R820, SM-R820S, SM-R825US, SM-R825FS, SM-R825F",
        status: "Not Supported",
      },
      {
        model: "Galaxy Watch3 41mm",
        variants: "SM-R855U, SM-R855N, SM-R855F, SM-R850",
        status: "Not Supported",
      },
      {
        model: "Galaxy Watch3 45mm",
        variants: "SM-R845U, SM-R840T, SM-R845N, SM-R8450, SM-R845F, SM-R840",
        status: "Not Supported",
      },
      {
        model: "Gear S3 Classic",
        variants: "SM-R775A, SM-R775S, SM-R775T, SM-R770",
        status: "Not Supported",
      },
      {
        model: "Gear S3 Frontier",
        variants: "SM-R765, SM-R765A, SM-R765T, SM-R760, SM-R765F, SM-R765N",
        status: "Not Supported",
      },
      { model: "Gear Sport", variants: "SM-R600", status: "Not Supported" },
      {
        model: "Gear S3 Classic",
        variants: "SM-R775V",
        status: "Not Supported",
      },
      {
        model: "Gear S3 Frontier",
        variants: "SM-R765V",
        status: "Not Supported",
      },
      {
        model: "Gear S2",
        variants: "SM-R720, SM-R730A, SM-R730S, SM-R730V, SM-R730T",
        status: "Not Supported",
      },
      {
        model: "Gear S2 Classic",
        variants: "SM-R732, SM-R735, SM-R735A, SM-R735V, SM-R735S",
        status: "Not Supported",
      },
    ];

    // elementos DOM
    const gridEl = document.getElementById("devicesGrid");
    const searchInput = document.getElementById("searchInput");
    const resultCountSpan = document.getElementById("resultCount");
    const themeBtn = document.getElementById("themeToggleBtn");

    // estado do tema: false = claro (padrão), true = escuro
    let darkMode = false;

    function setTheme(isDark) {
      if (isDark) {
        document.body.classList.add("dark-mode");
        themeBtn.innerHTML = "☀️"; // sol (representa claro)
      } else {
        document.body.classList.remove("dark-mode");
        themeBtn.innerHTML = "🌙"; // lua (representa escuro)
      }
      darkMode = isDark;
      // Salvar a preferência do tema no localStorage
      localStorage.setItem("themePreference", isDark ? "dark" : "light");
    }

    // Carregar a preferência de tema salva ao iniciar (se não foi aplicada ainda)
    const savedTheme = localStorage.getItem("themePreference");
    if (savedTheme === "dark") {
      setTheme(true);
    } else if (savedTheme === "light") {
      setTheme(false);
    } else {
      // Se não houver preferência salva, padrão é claro
      setTheme(false);
    }

    // alterna tema no clique
    themeBtn.addEventListener("click", () => {
      setTheme(!darkMode);
    });

    // renderização dos cards (idêntica ao anterior)
    function render(filterText = "") {
      const term = filterText.trim().toLowerCase();
      const filtered = term
        ? devices.filter(
            (d) =>
              d.model.toLowerCase().includes(term) ||
              d.variants.toLowerCase().includes(term),
          )
        : devices;

      resultCountSpan.innerText = `Mostrando ${filtered.length} ${filtered.length === 1 ? "dispositivo" : "dispositivos"}`;

      if (filtered.length === 0) {
        gridEl.innerHTML = `<div class="no-results">❌ Nenhum resultado para “${searchInput.value}”</div>`;
        return;
      }

      let html = "";
      filtered.forEach((dev) => {
        const statusClass =
          dev.status === "Supported" ? "supported" : "not-supported";
        const badgeClass =
          dev.status === "Supported" ? "badge-supported" : "badge-not-supported";
        const icon = dev.status === "Supported" ? "✅" : "❌";
        html += `
                          <div class="device-card ${statusClass}">
                              <div class="model-name">${dev.model}</div>
                              <div class="variants-block">
                                  <div class="variants-label">Variantes</div>
                                  <div class="variants-list">${dev.variants}</div>
                              </div>
                              <div class="status-badge">
                                  <span class="${badgeClass}">${icon} ${dev.status}</span>
                              </div>
                          </div>
                      `;
      });
      gridEl.innerHTML = html;
    }

    searchInput.addEventListener("input", (e) => render(e.target.value));
    render();
  })();

  document.addEventListener("DOMContentLoaded", function () {
    var div = document.createElement("div");
    div.className = "powered-jscellunlock";
    div.innerText = "Powered by jscellunlock";

    document.body.appendChild(div);
  });
