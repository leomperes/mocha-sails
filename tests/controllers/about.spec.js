/**
 * Created by Leo M. <leomperes@belanton.com> on 5/5/16.
 */

var AboutController = require('../../api/controllers/AboutController'),
  sinon = require('sinon'),
  assert = require('assert');

describe('The About Controller', function () {
  describe('when we load the about page', function () {
    it ('should render the view', function () {
      var view = sinon.spy();
      AboutController.index(null, {
        view: view
      });
      assert.ok(view.called);
    });
  });
});
