'use strict';

const mock = require('egg-mock');

describe('test/arms.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/arms-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect('hi, arms')
      .expect(200);
  });
});
