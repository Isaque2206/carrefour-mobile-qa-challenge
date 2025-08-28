class MenuPage {
  get tabHome() { return $('~Home'); }
  get tabLogin() { return $('~Login'); }
  get tabForms() { return $('~Forms'); }
  get tabSwipe() { return $('~Swipe'); }
}
module.exports = new MenuPage();
