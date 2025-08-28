const { expect } = require('chai');
const menu = require('../pageobjects/menu.page');
const signup = require('../pageobjects/signup.page');
const users = require('../data/users.json');

describe('Cadastro', () => {
  before(async () => { await menu.tabLogin.click(); });

  it('5) Deve cadastrar novo usuário com sucesso', async () => {
    const tsEmail = users.signup.email.replace('{ts}', Date.now());
    await signup.signup(tsEmail, users.signup.password);
    await expect(await signup.alert.getText()).to.match(/Success|Registered/i);
    await signup.alertOk.click();
  });

  it('6) Deve exibir erro ao cadastrar e-mails inválidos', async () => {
    await signup.signup('invalid', '123456');
    await expect(await signup.alert.getText()).to.match(/valid email|invalid/i);
    await signup.alertOk.click();
  });
});
