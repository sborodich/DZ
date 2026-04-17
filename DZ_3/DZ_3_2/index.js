function createRetryCounter() {
  let attempts = 0;
  
  return function() {
    attempts++;
    return `Попытка запуска: ${attempts}`;
  };

}


const loginRetry = createRetryCounter();
const paymentRetry = createRetryCounter();


console.log(loginRetry()); 
console.log(loginRetry()); 
console.log(loginRetry()); 


console.log(paymentRetry());
//Из-за того что внутряння функция всё ещё ссылается на переменную attempts, движок не удаляет её при каждом новом вызове. Как пишет гугл переменная становится приватной для каждого экземпляра функции.