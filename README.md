# eslint-config-react-tsone

eslint config base on [eslint-config-react-app](https://www.npmjs.com/package/eslint-config-react-app) with typescript

## Installation

```sh
# use npm
npm install --save-dev eslint-config-react-tsone
# use yarn
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

### config eslint autoFixOnSave in vscode

Add code below into `.vscode/settings.json`

```json
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```

### config format on save in webstorm

**config eslint auto format**

Webstorm > Preferences > Languages & Frameworks > Javascript > Prettier

Run for files: `{**/*,*}.{js,ts,jsx,tsx}`

[x] On save

**config prettier auto format**

Webstorm > Preferences > Languages & Frameworks > Javascript > Code Quality Tools

Automatic Eslint configuration

[x] Run eslint --fix on save
