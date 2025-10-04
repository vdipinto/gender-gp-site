module.exports = {
  extends: ["stylelint-config-standard", "stylelint-config-standard-scss"],
  plugins: ["stylelint-order", "stylelint-scss"],
  rules: {
    "order/properties-order": [
      [
        { groupName: "box", properties: ["display","position","top","right","bottom","left","z-index"] },
        { groupName: "flex/grid", properties: ["flex","flex-*","grid","grid-*","place-*","align-*","justify-*"] },
        { groupName: "box-model", properties: ["box-sizing","width","min-width","max-width","height","min-height","max-height","margin","padding"] },
        { groupName: "typography", properties: ["font","font-*","line-height","letter-spacing","text-*","color"] },
        { groupName: "visual", properties: ["background","background-*","border","border-*","outline","box-shadow","opacity"] },
        { groupName: "misc", properties: ["cursor","pointer-events","transition","transform","animation"] }
      ],
      { unspecified: "bottomAlphabetical" }
    ]
  },
  ignoreFiles: ["**/node_modules/**", "**/dist/**", "../wp-content/**/dist/**"],
};
