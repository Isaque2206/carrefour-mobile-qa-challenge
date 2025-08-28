const Base = require('./base.page');

class LoginPage extends Base {
  get email() { return $('~input-email'); }
  get password() { return $('~input-password'); }
  get btnLogin() { return $('~button-LOGIN'); }
  get btnSignup() { return $('~button-SIGN UP'); }
  get alert() { return $('~Alt Message'); }
  get alertOk() { return $('~OK'); }

  async login(email, pass) {
    await this.type(this.email, email);
    await this.type(this.password, pass);
    await this.tap(this.btnLogin);
  }

  async signupNavigate() { await this.tap(this.btnSignup); }
}
module.exports = new LoginPage();
