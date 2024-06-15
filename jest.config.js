module.exports = {
  transform: {
    "^.+\\.[t|j]sx?$": "babel-jest",
  },
  transformIgnorePatterns: ["/node_modules/"],
  moduleFileExtensions: ["js", "jsx"],
};
