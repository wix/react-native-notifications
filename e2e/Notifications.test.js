const Utils = require('./Utils');
const { elementByLabel, elementById } = Utils;

describe('Notifications', () => {
  describe('Foreground', () => {
    beforeEach(async () => {
      await device.relaunchApp({permissions: {notifications: 'YES'}});
    });

    it('Receive notification', async () => {
      await device.sendUserNotification(createNotification({link: 'foreground/notification'}));
      await expect(elementByLabel('foreground/notification')).toBeVisible();
    });

    it.only('Click notification', async () => {
      await device.sendUserNotification(createNotification({link: 'foreground/notification/click', showAlert: true}));
      await expect(elementByLabel('Notification Clicked: foreground/notification/click')).toBeVisible();
    });
  });

  describe('Background', () => {
    beforeEach(async () => {
      await device.relaunchApp({permissions: {notifications: 'YES'}});
    });

    it('Receive notification', async () => {
      device.sendToHome();
      device.launchApp({newInstance: false, userNotification: createNotification({link: 'background/notification'})});
      await expect(elementByLabel('background/notification')).toBeVisible();
    });
  });

  describe('Dead state', () => {
    it('Receive notification', async () => {
      await device.launchApp({newInstance: true, userNotification: createNotification({link: 'deadState/notification'})});
      await expect(elementByLabel('deadState/notification')).toBeVisible();
    });
  });
});

function createNotification({link, showAlert}) {
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
      link,
      showAlert
    }
  };
}
