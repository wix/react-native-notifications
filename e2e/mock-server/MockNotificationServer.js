/* eslint no-console:off */
const express = require('express');
const bodyParser = require('body-parser');

const {MockNotificationsServerPort} = require("./consts");

class MockNotificationServer {
  init({port = MockNotificationsServerPort}) {
    this.cleanup();
    this.app = express();
    this.app.use(bodyParser.json());
    this.app.get('/', (_, res) => {console.log('server is working'), res.send('ok')});
    this.app.post('/register', this.onRegiscribe.bind(this));
    this.app.post('/unregister', this.onUnsubscribe.bind(this));
    this.server = this.app.listen(port);
    console.log(`Mock Notification Server: listening on localhost port ${port}`);
  }
  cleanup() {
    this.reset();
    if (this.server) {
      this.server.close();
      this.server = undefined;
    }
  }
  reset() {
    this.lastRegiscribe = {};
    this.lastUnsubscribe = {};
  }
  onRegiscribe(req, res) {
    this.lastRegiscribe = req;
    res.json({
    });
  }
  onUnsubscribe(req, res) {
    this.lastUnsubscribe = req;
    res.send('ok');
  }
}

new MockNotificationServer().init({});
