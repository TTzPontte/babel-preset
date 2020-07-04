# Babel Preset 💬

A Babel configuration for [@pontte](https://github.com/pontte) projects.

![](https://github.com/pontte/babel-preset/workflows/promote-prod-from-preprod-branch/badge.svg)

## Install

### yarn

```sh
yarn add @pontte/babel-preset --dev
```

### npm

```sh
npm install @pontte/babel-preset --save-dev
```

## Usage

Add package to your `babel.config.js` or [Babel](https://babeljs.io/docs/en/config-files#configuration-file-types) configuration file.

```js
module.exports = {
  presets: ['@pontte/babel-preset'],
};
```

### Usage via CLI

```sh
babel script.js --presets @pontte/babel-preset
```

### Usage via API

```js
require('@babel/core').transform('code', { presets: ['@babel/babel-preset'] });
```

## Options

This module uses [@babel/preset-env](https://babeljs.io/docs/en/babel-preset-env) version `^7.0.0` as preset default.

See complete options:

- [`targets`](https://babeljs.io/docs/en/babel-preset-env#targets)
- [`spec`](https://babeljs.io/docs/en/babel-preset-env#spec)
- [`loose`](https://babeljs.io/docs/en/babel-preset-env#loose)
- [`modules`](https://babeljs.io/docs/en/babel-preset-env#modules)
- [`debug`](https://babeljs.io/docs/en/babel-preset-env#debug)
- [`include`](https://babeljs.io/docs/en/babel-preset-env#include)
- [`exclude`](https://babeljs.io/docs/en/babel-preset-env#exclude)
- [`useBuiltIns`](https://babeljs.io/docs/en/babel-preset-env#usebuiltins)
- [`forceAllTransforms`](https://babeljs.io/docs/en/babel-preset-env#forcealltransforms)
- [`configPath`](https://babeljs.io/docs/en/babel-preset-env#configpath)
- [`ignoreBrowserslistConfig`](https://babeljs.io/docs/en/babel-preset-env#ignorebrowserslistconfig)
- [`shippedProposals`](https://babeljs.io/docs/en/babel-preset-env#shippedproposals)

### Targeting Environments

For a list of browsers options, see [browserlist](https://github.com/ai/browserslist).

You may override our default list of targets by providing your own `targets`.

```js
module.exports = {
  presets: [
    [
      '@pontte/babel-preset',
      {
        targets: {
          chrome: 50,
          ie: 11,
          firefox: 45,
        },
      },
    ],
  ],
};
```
