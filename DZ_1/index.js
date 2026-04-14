//Блок определения переменных
let userName = "   st aN iSL aU   ";
let userSurname = "   baRo  Dz iCh   "
const userAge = 22;
const userStatus = true;
const currentYear = new Date().getFullYear();//Вычисление текущего года

//Выполнение условия: фамиля и имя всегда выводились идеально (первая большая, остальные маленькие, без пробелов) 
userName = userName.replaceAll(' ', '')[0].toUpperCase() + userName.replaceAll(' ', '').slice(1).toLowerCase();//Имя пользователя
userSurname = userSurname.replaceAll(' ', '')[0].toUpperCase() + userSurname.replaceAll(' ', '').slice(1).toLowerCase();//Фамилия пользователя

const userMail = userName + userSurname + "@test.com";//Составление почты

//Блок вывода данных
console.log(`\nMail:  ${userMail}
Name: ${userName}
Suranme: ${userSurname}
Age: ${userAge}
Year of birth: ${(currentYear - userAge)}//Вычисление года рождения
Status: ${userStatus}\n`);
