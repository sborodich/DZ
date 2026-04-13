//Блок определения переменных
let UName = "   st aN iSL aU   ";
let USurname = "   baRo  Dz iCh   "
let UAge = 22;
let UStatus = true;
const CYear = new Date().getFullYear();//Вычисление текущего года

//Выполнение условия: фамиля и имя всегда выводились идеально (первая- большая, остальные маленькие, без пробелов) 
UName = UName.replaceAll(' ', '')[0].toUpperCase() + UName.replaceAll(' ', '').slice(1).toLowerCase();//Имя пользователя
USurname = USurname.replaceAll(' ', '')[0].toUpperCase() + USurname.replaceAll(' ', '').slice(1).toLowerCase();//Фамилия пользователя

const UMail = UName + USurname + "@test.com";//Составление почты

//Блок вывода данных
console.log("\nMail: " + UMail);
console.log("Name: " +UName);
console.log("Suranme: " + USurname);
console.log("Age: " + UAge);
console.log("Year of birth: " + (CYear - UAge));//Вычисление года рождения
console.log("Status: " + UStatus + "\n");
