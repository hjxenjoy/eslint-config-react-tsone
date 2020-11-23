module.exports = {
  extends: ["react-app", "airbnb", "prettier", "prettier/react"],
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": "error",
    "react/jsx-filename-extension": [
      "warn",
      {
        extensions: [".ts", ".tsx"],
      },
    ],
    "react/jsx-props-no-spreading": "off",
    "react/prop-types": "off",
    "react/button-has-type": "off",
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": "warn",
    "import/extensions": [
      "error",
      {
        "ts": "ignorePackages",
        "tsx": "ignorePackages"
      }
    ],
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
  },
  globals: {
    window: true,
    document: true,
    FormData: true,
    FileReader: true,
    Blob: true,
  },
};
