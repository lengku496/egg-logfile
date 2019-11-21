/**
 * app对象扩展
 */

'use strict';

// 文件日志模块
const Logfile = require('../../lib/logfile');

const FILE_LOG = Symbol('Application#Logfile');

module.exports = {
  /**
   * 单独文件日志
   * ctx.logfile('filename', fmt, args);
   *
   * @param {string} filename - 日志文件名字
   * @param {array} args - 可变参数，日志内容，支持格式化参数
   */
  logfile(filename, ...args) {
    if (!this[FILE_LOG]) {
      this[FILE_LOG] = new Logfile(this);
    }
    this[FILE_LOG].log(filename, ...args);
  },

};
