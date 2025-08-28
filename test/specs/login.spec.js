const { expect } = require('chai');
const menu = require('../pageobjects/menu.page');
const login = require('../pageobjects/login.page');
const users = require('../data/users.json');

describe('Login/Cadastro', () => {
  before(async () => { await menu.tabLogin.click(); });

  it('1) Deve logar com credenciais válidas', async () => {
    await login.login(users.valid.email, users.valid.password);
    await expect(await login.alert.getText()).to.include('Success');
    await login.alertOk.click();
  });

  it('2) Deve exibir erro ao logar com senha inválida', async () => {
    await login.login(users.invalid.email, users.invalid.password);
    await expect(await login.alert.getText()).to.match(/fail|invalid/i);
    await login.alertOk.click();
  });

  it('3) Deve validar campos obrigatórios', async () => {
    await login.login('', '');
    await expect(await login.alert.getText()).to.match(/enter|email|password/i);
    await login.alertOk.click();
  });

  it('4) Deve navegar para a tela de cadastro', async () => {
    await login.signupNavigate();
    await expect(await login.btnSignup.isDisplayed()).to.be.true;
  });
});
