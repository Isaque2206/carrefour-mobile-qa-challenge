module.exports = class BasePage {
  async tap(el) { await (await el).click(); }
  async type(el, text) { const _el = await el; await _el.setValue(text); }
  async text(el) { return (await el).getText(); }
  async isDisplayed(el) { return (await el).isDisplayed(); }
};
