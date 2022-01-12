module.exports = {
  presets: ["module:metro-react-native-babel-preset"],
  plugins: [
    [
      "module-resolver",
      {
        root: ["./src"],
        extensions: [".ts", ".tsx", ".jsx", ".js", ".json"],
        alias: {
          "@components": "./src/components",
          "@global": "./src/global",
          "@routes": "./src/routes",
          "@screens": "./src/screens",
          "@shared": "./src/shared",
          "@store": "./src/store",
        },
      },
    ],
  ],
};
