'use strict';

const mock = require('egg-mock');

describe('test/logfile.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/logfile-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect('hi, logfile')
      .expect(200);
  });
});
