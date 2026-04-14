//Блок определения переменных
let userName = "   st aN iSL aU   ";
let userSurname = "   baRo  Dz iCh   "
let userAge = 22;
const userStatus = true;
const currentYear = new Date().getFullYear();//Вычисление текущего года

//Выполнение условия: фамиля и имя всегда выводились идеально (первая большая, остальные маленькие, без пробелов) 
userName = userName.replaceAll(' ', '')[0].toUpperCase() + userName.replaceAll(' ', '').slice(1).toLowerCase();//Имя пользователя
userSurname = userSurname.replaceAll(' ', '')[0].toUpperCase() + userSurname.replaceAll(' ', '').slice(1).toLowerCase();//Фамилия пользователя

const userMail = userName + userSurname + "@test.com";//Составление почты

//Блок вывода данных
console.log(`\nMail:  ${userMail}`);
console.log(`Name: ${userName}`);
console.log(`Suranme: ${userSurname}`);
console.log(`Age: ${userAge}`);
console.log(`Year of birth: ${(currentYear - userAge)}`);//Вычисление года рождения
console.log(`Status: ${userStatus}\n`);
