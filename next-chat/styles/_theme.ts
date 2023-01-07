export const color = {
  // bg
  bg_page1: "#ffffff",
  bg_page2: "#f9f9f9",
  bg_page3: "#000000",
  bg_element: "#0eb8ff",

  // text
  text1: "#000000",
  text2: "#495057",
  text3: "#CED4DA",
  text4: "#808080",
  text5: "#ffffff",
};

export const mixins = {
  flexBox: (direction = "row", align = "center", justify = "center") => `
  display: flex;
  flex-direction: ${direction};
  align-items: ${align};
  justify-content: ${justify};
`,

  widthHeightSize: (width = "100%", height = "100%") => `
  width:${width};
  height:${height};
`,

  commonFont: (size = "1.2em", weight = "500") => `
  font-size:${size};
  font-weight: ${weight};

`,

  commonPadding: (padding = "20px 20px") => `
  padding:${padding}
`,

  border: (border = "1px solid black", radius = "") => `
  border:${border};
  border-radius:${radius};
  `,

  positionCenter: (type = "absolute") => {
    if (type === "absolute" || type === "fixed")
      return `
        position: ${type};
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    `;
    return;
  },
};
