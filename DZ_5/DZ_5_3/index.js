const fwConfig = {
  _timeout: 5000,


  get timeout() {
    return `Текущий таймаут: ${this._timeout} мс`;
  },


  set timeout(value) {
    if (typeof value !== 'number' || value < 0) {
      throw new Error('Некорректный таймаут');
    }
    this._timeout = value;
  }
};


console.log(fwConfig.timeout); //5000 мс


fwConfig.timeout = 10000;
console.log(fwConfig.timeout); //10000 мс
 

fwConfig.timeout = -10; //Некорректное значение
