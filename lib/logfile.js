/**
 * 提供全局对象存储
 */
'use strict';

const moment = require('moment');

const util = require('util');

class CustomLog {
  constructor(app, ctx = undefined) {
    this.ctx = ctx;
    this.app = app;
    this.options = this.app.config.logfile;
  }

  log(filename, ...argv) {
    const logger = this.app.getLogger(filename + 'Logger');
    if (logger) {
      let msg = util.format.apply(util, argv);
      if (this.options.dateTime) {
        msg = moment().format(this.options.dateTime) + ',' + msg;
      }
      logger.write(msg);
    } else {
      this._error('invalid filename: "%s" not found in config.logfie.logs. %j', filename, argv);
    }
  }

  _error(...argv) {
    const msg = util.format.apply(util, argv);
    this.app.logger.error(new Error(msg));
  }
}


module.exports = CustomLog;
