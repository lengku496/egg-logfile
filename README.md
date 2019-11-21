# egg-logfile

[![NPM version][npm-image]][npm-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-logfile.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-logfile
[download-image]: https://img.shields.io/npm/dm/egg-logfile.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-logfile

<!--
Description here.
-->
## 插件说明
在某些情况下，应用服务器上某些功能需要记录单独的文件日志。本插件基于egg-logger实现，通过简单的配置即可实现记录文件日志。默认只需要配置日志文件名。

## Install

```bash
$ npm i egg-logfile --save
```

## Usage

```js
// {app_root}/config/plugin.js
exports.logfile = {
  enable: true,
  package: 'egg-logfile',
};
```

## Configuration

```js
// {app_root}/config/config.default.js
/**
 * egg-logfile default config
 * @member Config#logfile
 * @property {Boolean} singleFolder - 每个类型的日志是否单独放到一个文件夹，true表示单独放置
 * @property {String/Boolean} dateTime - 日志中每行记录前面增加时间的格式，false表示不自动记录时间
 * @property {Array} logs - 需要记录的日志文件名字，只有配置过的文件
 */
exports.logfile = {
  singleFolder: true,
  dateTime: 'YYYY-MM-DD HH:mm:ss,SSS',
  logs: [],
};
```

see [config/config.default.js](config/config.default.js) for more detail.

## Example

<!-- example here -->
### 应用配置
```js
// {app_root}/config/config.default.js
  exports.logfile = {
    logs: [
      'login',
    ],
  }
```
### 导出函数原型
```js
  /**
   * 记录文件日志
   * 此函数会导出到app和ctx对象中,可以直接使用ctx.logfile或者app.logfile记录日志
   * 
   * ctx.logfile('filename', fmt, args);
   * app.logfile('filename', fmt, args);
   *
   * @param {string} filename - 日志文件名字
   * @param {string} fmt - 日志格式字符串或者直接是日志信息。
   * @param {array} args - [可选]可变参数,格式字符串参数
   */
  logfile(filename, fmt, ...args);
```
### 调用
```js
  // 在需要记录日志的地方知道调用
  ctx.logfile('login', '%s,%s', ctx.userId, ctx.traceId);
```

see [test/fixtures/apps/logfile-test](test/fixtures/apps/logfile-test) for more detail.

## Questions & Suggestions

Please open an issue [here](https://github.com/eggjs/egg/issues).

## License

[MIT](LICENSE)
