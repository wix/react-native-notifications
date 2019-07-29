const Utils = require('./Utils');
const {elementByLabel} = Utils;

describe('Notifications', () => {
  beforeEach(async () => {
    await device.relaunchApp({delete: true, permissions: {notifications: 'YES'}});
  });

  describe('Foreground', () => {
    it('Receive notification', async () => {
      await device.sendUserNotification(createNotification({link: 'foreground/notification'}));
      await expect(elementByLabel('foreground/notification')).toBeVisible();
    });

    it('Click notification', async () => {
      await device.sendUserNotification(createNotification({link: 'foreground/notification/click', showAlert: true}));
      await expect(elementByLabel('Notification Clicked: foreground/notification/click')).toBeVisible();
    });
  });

  describe('Background', () => {
    it('Receive notification', async () => {
      device.sendToHome();
      await expect(elementByLabel('background/notification')).toBeNotVisible();
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
      link,
      showAlert
    }
  };
}
