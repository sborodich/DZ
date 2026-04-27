class BasePage {
  static environment = 'QA';


  open(url) {
    console.log(`Открываю страницу: ${url} на окружении ${BasePage.environment}`);
  }
}


class LoginPage extends BasePage {
  #passwordInput = '#pass';


  constructor() {
    super();
    this.loginInput = '#user';
  }


  fillForm(user, password) {
    console.log(`Вводим логин ${user} в поле ${this.loginInput}`);
    console.log(`Вводим пароль ${password} в поле ${this.#passwordInput}`);
  }
}


const page = new LoginPage();
page.open('https://test.com/login'); 
page.fillForm('admin', '12345');


//page.#passwordInput Выдаёт ошибку: SyntaxError: Private field '#passwordInput' must be declared in an enclosing class




