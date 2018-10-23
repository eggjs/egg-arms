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

## 依赖说明

### 依赖的 egg 版本

egg-arms 版本 | egg 1.x
--- | ---
1.x | 😁
0.x | ❌

### 依赖的插件
<!--

如果有依赖其它插件，请在这里特别说明。如

- security
- multipart

-->

## 开启插件

```js
// config/plugin.js
exports.arms = {
  enable: true,
  package: 'egg-arms',
};
```

## 使用场景

- 在app上面挂在arms实例，直接通过实例去获取arms的相关数据；

## 详细配置

```js
// {app_root}/config/config.default.js
exports.arms = {
   accessKeyId: 'xxxx',
   secretAccessKey: 'xxxxxxx',
   endpoint: 'cn-hangzhou',
};
```
``
请到 [config/config.default.js](config/config.default.js) 查看详细配置项说明。

## 单元测试

<!-- 描述如何在单元测试中使用此插件，例如 schedule 如何触发。无则省略。-->

## 提问交流

请到 [egg issues](https://github.com/eggjs/egg/issues) 异步交流。

## License

[MIT](LICENSE)
