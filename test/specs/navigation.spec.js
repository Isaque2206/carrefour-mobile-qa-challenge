const { expect } = require('chai');
const menu = require('../pageobjects/menu.page');

describe('Navegação entre telas', () => {
  it('7) Deve navegar para Forms e voltar ao Home', async () => {
    await menu.tabForms.click();
    await expect(await menu.tabForms.isDisplayed()).to.be.true;
    await menu.tabHome.click();
    await expect(await menu.tabHome.isDisplayed()).to.be.true;
  });

  it('8) Deve acessar a tela Swipe', async () => {
    await menu.tabSwipe.click();
    await expect(await menu.tabSwipe.isDisplayed()).to.be.true;
  });
});
