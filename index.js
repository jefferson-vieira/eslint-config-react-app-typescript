"use strict";

module.exports = {
  extends: [
    "react-app",
    "airbnb",
    "plugin:jsx-a11y/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint"
  ],
  plugins: ["babel", "jsx-a11y", "prettier"],
  rules: {
    "prettier/prettier": "error",
    "react/prop-types": "off",
    "react/jsx-filename-extension": [
      "error",
      {
        extensions: [".tsx"]
      }
    ],
    "@typescript-eslint/explicit-function-return-type": "off"
  },
  settings: {
    "import/resolver": {
      typescript: {}
    }
  }
};
