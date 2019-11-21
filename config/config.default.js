'use strict';

const path = require('path');

module.exports = (appInfo, options) => {
  const config = {};

  /**
   * egg-logfile default config
   * @member Config#logfile
   * @property {Boolean} singleFolder - 每个类型的日志是否单独放到一个文件夹，true表示单独放置
   * @property {String/Boolean} dateTime - 日志中每行记录前面增加时间的格式，false表示不自动记录时间
   * @property {Array} logs - 需要记录的日志文件名字，只有配置过的文件
   */
  config.logfile = {
    singleFolder: true,
    dateTime: 'YYYY-MM-DD HH:mm:ss,SSS',
    logs: [],
  };

  let dir;
  if (options.logger && options.logger.dir) {
    dir = options.logger.dir;
  } else {
    dir = `${appInfo.root}/logs/${appInfo.name}`;
  }

  let singleFolder = config.logfile.singleFolder;
  if (options.logfile && options.logfile.singleFolder === false) {
    singleFolder = false;
  }
  config.customLogger = {};
  for (const log of options.logfile.logs) {
    let filename = `${log}.log`;
    if (singleFolder) {
      filename = path.join(log, filename);
    }

    config.customLogger[`${log}Logger`] = {
      dir,
      file: filename,
    };
  }
  return config;
};
