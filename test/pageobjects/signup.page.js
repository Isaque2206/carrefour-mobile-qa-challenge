const Base = require('./base.page');

class SignupPage extends Base {
  get email() { return $('~input-email'); }
  get password() { return $('~input-password'); }
  get repeatPassword() { return $('~input-repeat-password'); }
  get btnSignup() { return $('~button-SIGN UP'); }
  get alert() { return $('~Alt Message'); }
  get alertOk() { return $('~OK'); }

  async signup(email, pass) {
    await this.type(this.email, email);
    await this.type(this.password, pass);
    await this.type(this.repeatPassword, pass);
    await this.tap(this.btnSignup);
  }
}
module.exports = new SignupPage();
