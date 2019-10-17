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
    "prettier/prettier": ["error", {
      "parser": "typescript",
      "printWidth": 80,
      "tabWidth": 2,
      "useTabs": false,
      "singleQuote": true,
      "semi": false,
      "trailingComma": "es5",
      "bracketSpacing": true,
      "arrowParens": "avoid",
      "endOfLine": "auto",
      "overrides": [
        {
          "files": ["*.css", "*.less", "*.scss"],
          "options": {
            "singleQuote": false,
          },
        },
      ],
    }],
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
