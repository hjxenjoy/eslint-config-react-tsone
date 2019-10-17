module.exports = {
  "extends": [
    "react-app",
    "airbnb",
    "prettier",
    "prettier/react",
  ],
  "plugins": [
    "prettier",
  ],
  "rules": {
    "prettier/prettier": "error",
    "react/jsx-filename-extension": ["warn", {
      "extensions": [".ts", ".tsx"]
    }]
  },
  "settings": {
    "import/resolver": {
      "node": {
        "extensions": [".js", ".jsx", ".ts", ".tsx"]
      }
    }
  },
  "globals": {
    "window": true,
    "document": true,
    "FormData": true,
    "FileReader": true,
    "Blob": true,
  },
}
