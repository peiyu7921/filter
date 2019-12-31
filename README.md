# vue-web-extension
淘宝商品过滤器

- Boilerplate for `manifest.json` and `background.js` files, and for `icons` / `popup` folders
- [Vue](https://github.com/vuejs/vue)
- [Webpack 4](https://github.com/webpack/webpack)
- [Babel](https://github.com/babel/babel) with [preset-env](https://github.com/babel/babel/tree/master/packages/babel-preset-env)
- [ESLint](https://github.com/eslint/eslint) (configurable)
- A git precommit hook for running Prettier by using [pretty-quick](https://github.com/azz/pretty-quick) or [precise-commits](https://github.com/nrwl/precise-commits) (configurable)
- CSS extraction, with [mini-css-extract-plugin](https://github.com/webpack-contrib/mini-css-extract-plugin)
- Compliable with the **C**ontent **S**ecurity **P**olicy of Chrome and Firefox web stores (some usages [`eval`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval) are removed)

## Requirements

- Node.js >= 8 and npm >= 5
- [git](https://git-scm.com)
- [vue-cli 2](https://github.com/vuejs/vue-cli/tree/v2)

## Usage

```bash
$ vue init kocal/vue-web-extension my-extension
$ cd my-extension
$ npm install
$ npm run build
```

### `npm run build`

Build the extension into `dist` folder for **production**.

### `npm run build:dev`

Build the extension into `dist` folder for **development**.

### `npm run watch`

Watch for modifications then run `npm run build`.

### `npm run watch:dev`

Watch for modifications then run `npm run build:dev`.

It also enable [Hot Module Reloading](https://webpack.js.org/concepts/hot-module-replacement), thanks to [webpack-extension-reloader](https://github.com/rubenspgcavalcante/webpack-extension-reloader) plugin.

:warning: Keep in mind that HMR only works for your **background** entry.

### `npm run build-zip`

Build a zip file following this format `<name>-v<version>.zip`, by reading `name` and `version` from `manifest.json` file.
Zip file is located in `dist-zip` folder.
