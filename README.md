# egg-arms

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-arms.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-arms
[travis-image]: https://img.shields.io/travis/eggjs/egg-arms.svg?style=flat-square
[travis-url]: https://travis-ci.org/eggjs/egg-arms
[codecov-image]: https://img.shields.io/codecov/c/github/eggjs/egg-arms.svg?style=flat-square
[codecov-url]: https://codecov.io/github/eggjs/egg-arms?branch=master
[david-image]: https://img.shields.io/david/eggjs/egg-arms.svg?style=flat-square
[david-url]: https://david-dm.org/eggjs/egg-arms
[snyk-image]: https://snyk.io/test/npm/egg-arms/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-arms
[download-image]: https://img.shields.io/npm/dm/egg-arms.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-arms

<!--
Description here.
-->

## Install

```bash
$ npm i egg-arms --save
```

## Usage

```js
// {app_root}/config/plugin.js
exports.arms = {
  enable: true,
  package: 'egg-arms',
};
```

## Configuration

```js
// {app_root}/config/config.default.js 支持多实例
exports.arms = {
   client:{
     accessKeyId: 'xxxx',
     secretAccessKey: 'xxxxxxx',
   }
};
```

see [config/config.default.js](config/config.default.js) for more detail.

## Example

<!-- example here -->

## Questions & Suggestions

Please open an issue [here](https://github.com/eggjs/egg/issues).

## License

[MIT](LICENSE)
