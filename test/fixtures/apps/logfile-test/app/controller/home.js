'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    this.ctx.body = 'hi, ' + this.app.plugins.logfile.name;
    this.ctx.logfile('home', '%s,%s', 'hi', this.app.plugins.logfile.name);
  }
}

module.exports = HomeController;
