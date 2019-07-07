const Utils = require('./Utils');
const { elementByLabel, elementById } = Utils;

describe('Notifications', () => {
  beforeEach(async () => {
    await device.relaunchApp({permissions: {notifications: 'YES'}});
  });

  it('Receive foreground notification', async () => {
    await device.sendUserNotification(getNotification('explicit/external/link/test_parameter'));
    // await device.launchApp({newInstance: true, userNotification: getNotification('unknown/link', 'test/category', {parameter: 'test_body_param'})});
    // await elementById(TestIDs.SWITCH_TAB_BY_INDEX_BTN).tap();
    // await expect(elementByLabel('First Tab')).toBeNotVisible();
    // await expect(elementByLabel('Second Tab')).toBeVisible();
  });
});

function getNotification(link, category = 'com.example.category', params = {}) {
  return {
    trigger: {
      type: 'push'
    },
    title: 'From push',
    subtitle: 'Subtitle',
    body: 'Body',
    badge: 1,
    payload: {
      appId: '14517e1a-3ff0-af98-408e-2bd6953c36a2',
      aps: {
        alert: 'this is alert',
        sound: 'chime.aiff'
      },
      category,
      link, ...params
    },
    'content-available': 0,
    'action-identifier': 'default'
  };
}