const Utils = require('./Utils');
const {elementByLabel} = Utils;

describe('Notifications', () => {
  beforeEach(async () => {
    await device.relaunchApp({delete: true, permissions: {notifications: 'YES'}});
  });

  describe('Foreground', () => {
    it('Should receive notification', async () => {
      await device.sendUserNotification(createNotification({link: 'foreground/notification'}));
      await expect(elementByLabel('foreground/notification')).toBeVisible();
    });

    it('Should open notification', async () => {
      await device.sendUserNotification(createNotification({link: 'foreground/notification/click', showAlert: true}));
      await expect(elementByLabel('Notification Clicked: foreground/notification/click')).toBeVisible();
    });
  });

  describe('Background', () => {
    it('Should open notification', async () => {
      await device.sendToHome();
      await expect(elementByLabel('Notification Clicked: background/notification')).toBeNotVisible();
      await device.launchApp({newInstance: false, userNotification: createNotification({link: 'background/notification'})});
      await expect(elementByLabel('Notification Clicked: background/notification')).toBeVisible();
    });
  });

  describe('Dead state', () => {
    it('Should receive notification', async () => {
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
