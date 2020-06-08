# eslint-config-react-tsone

eslint config for create-react-app with typescript

## Installation

```sh
npm install --save-dev eslint-config-react-tsone
yarn add -D eslint-config-react-tsone
```

## Configuration

### Add eslint config file

1. remove eslintConfig in `package.json`
2. create `.eslintrc` file in root directory

```json
{
  "extends": "react-tsone"
}
```

### Add prettier config file

create `.prettierrc` file into root directory

```json
{
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
        "singleQuote": false
      }
    }
  ]
}
```

### Add eslint autoFixOnSave & ts file error tips

Add code below into `.vscode/settings.json`

```json
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```
