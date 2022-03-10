import { NotificationIOS } from "./NotificationIOS";

describe('Notification', () => {
  it('Should create notification with payload', () => {
    const payload = { p: 'p' };
    const notification = new NotificationIOS(payload);
    expect(notification.payload).toEqual(payload);
  });

  it('Should create notification with valid aps', () => {
    const aps = { alert: {} };
    const payload = { aps };
    const notification = new NotificationIOS(payload);
    expect(notification.aps).toEqual(aps);
  });

  it('Should create notification with empy aps', () => {
    const payload = { aps: undefined };
    const notification = new NotificationIOS(payload);
    expect(notification.aps).toEqual({});
  });

  it('Should return alert object', () => {
    const payload = { aps: { alert: { title: 'title' } } };
    const notification = new NotificationIOS(payload);
    expect(notification.alert).toEqual(payload.aps.alert);
  });

  it('Should return alert object when alert is string', () => {
    const payload = { aps: { alert: 'title' } };
    const notification = new NotificationIOS(payload);
    expect(notification.alert).toEqual({
      body: 'title'
    });
  });

  it('Should return title from alert', () => {
    const payload = { aps: { alert: { title: 'title' } } };
    const notification = new NotificationIOS(payload);
    expect(notification.title).toEqual('title');
  });

  it('Should return body from alert', () => {
    const payload = { aps: { alert: { title: 'title', body: 'body' } } };
    const notification = new NotificationIOS(payload);
    expect(notification.body).toEqual('body');
  });

  it('Should return badge from aps', () => {
    const payload = { aps: { badge: 0 } };
    const notification = new NotificationIOS(payload);
    expect(notification.badge).toEqual(0);
  });

  it('Should return sound from aps', () => {
    const payload = { aps: { sound: 'sound.wav' } };
    const notification = new NotificationIOS(payload);
    expect(notification.sound).toEqual('sound.wav');
  });

  it('Should return thread from aps', () => {
    const payload = { aps: { thread: 'thread' } };
    const notification = new NotificationIOS(payload);
    expect(notification.thread).toEqual('thread');
  });
});
