/* eslint-env node */
module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: ["solid"],
  extends: ["eslint:recommended", "plugin:solid/typescript"],
  globals:{
    "__dirname":true
  }
};
