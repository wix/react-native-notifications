const Utils = require('./Utils');
const { elementByLabel, elementById, sleep } = Utils;
describe('BottomTabs', () => {
  beforeEach(async () => {
    await device.relaunchApp();
    // await elementById(TestIDs.BOTTOM_TABS_BTN).tap();
    // await expect(elementByLabel('First Tab')).toBeVisible();
  });

  it('switch to tab by index', async () => {
    // await elementById(TestIDs.SWITCH_TAB_BY_INDEX_BTN).tap();
    await expect(elementByLabel('First Tab')).toBeNotVisible();
    await expect(elementByLabel('Second Tab')).toBeVisible();
  });
});
