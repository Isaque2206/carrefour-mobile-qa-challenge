const { expect } = require('chai');
const menu = require('../pageobjects/menu.page');
const forms = require('../pageobjects/forms.page');

describe('Formulários', () => {
  before(async () => { await menu.tabForms.click(); });

  it('9) Deve preencher campos, alternar switch e selecionar dropdown', async () => {
    await forms.fillText('Carrefour QA');
    expect(await forms.inputResult.getText()).to.include('Carrefour QA');

    await forms.toggleSwitch();
    expect(await forms.switchText.getText()).to.match(/ON|true/i);

    await forms.chooseDropdown();
  });

  it('10) Deve validar mensagem ao acionar botão Active', async () => {
    await forms.tapActive();
    expect(await forms.msgDialog.getText()).to.match(/This button is active/i);
    await forms.dialogOk.click();
  });
});
