const rowHeight = {
  default: 25,
  loose: 30,
  dense: 20,
};

const theme = {
  deepBlue: "#093687",
  skyBlue1: "rgba(0,98,223,.03)",
  skyBlue2: "#0061df26",
  lightPink1: "rgba(216,14,53,.03);",
  lightPink2: "rgba(216,14,53,.09);",
  strongRed: "#d80e35",
  strongBlue: "#115DCB",
  priceUp: "rgb(210, 79, 69)",
  priceDown: "rgb(18, 97, 196)",
  priceUpTrans: "rgba(210, 79, 69, 0.5)",
  priceDownTrans: "rgba(18, 97, 196, 0.5)",
  middleGray: "#00000033",
  lightGray: "rgb(244, 245, 248)",
  lightGray1: "rgb(249, 250, 252)",
  lightGray2: "rgb(212, 214, 220)",
  colorSet: {
    base1: "#7FB5FF",
    base2: "#C4DDFF",
    point: "#001D6E",
    font: "#FEE2C5",
    base: "#EEEEEE",
    primary: "#6886C5",
    secondary: "#FFE0AC",
    alternative: "#FFACB7",
    primaryFocused: "#2D64D80000",
    alternativeFocused: "#FF5B71",
    primaryDisabled: "#b8c3d9",
    alternativeDisabled: "#ffd7dc",
    gray1: "#E0E0E0",
    gray2: "#C5C5C5",
    gray3: "#838383",
    gray4: "#3F3F3F",
  },
  viewSize: { mobileS: 360, mobileM: 800, tablet: 1199, desktop: 1600 },
  defaultHeight: `${rowHeight.default}px`,
  looseHeight: `${rowHeight.loose}px`,
  denseHeight: `${rowHeight.dense}px`,
};

export { rowHeight };
export default theme;
