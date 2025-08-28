const Base = require('./base.page');

class FormsPage extends Base {
  get input() { return $('~text-input'); }
  get inputResult() { return $('~input-text-result'); }
  get switch() { return $('~switch'); }
  get switchText() { return $('~switch-text'); }
  get dropdown() { return $('~Dropdown'); }
  get optionAppiumIsAwesome() { return $('android=new UiSelector().textContains("Appium is awesome")'); }
  get btnActive() { return $('~button-Active'); }
  get btnInactive() { return $('~button-Inactive'); }
  get msgDialog() { return $('~This button is'); }
  get dialogOk() { return $('~OK'); }

  async fillText(text) { await this.type(this.input, text); }
  async toggleSwitch() { await this.tap(this.switch); }
  async chooseDropdown() {
    await this.tap(this.dropdown);
    await this.tap(this.optionAppiumIsAwesome);
  }
  async tapActive() { await this.tap(this.btnActive); }
}
module.exports = new FormsPage();
