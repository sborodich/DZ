const room = 'bedroom';
const timeOfDay = 18;
const sensorTemp = null;
const currentTemp = sensorTemp ?? 22;
const isLightOn = (timeOfDay >= 18 || timeOfDay < 6) ? true : false;

switch (room) {
    case 'bedroom':
        console.log(`Спальня: Свет ${isLightOn ? 'включен' : 'выключен'}, Температура ${currentTemp}.`);
        break;
    case 'kitchen':
        console.log(`Кухня: Работает вытяжка. Свет ${isLightOn ? 'включен' : 'выключен'}.`);
        break;
    default:
        console.log('Неизвестная комната.');
}
room === 'bedroom' && console.log('Увлажнитель воздуха включен');//В случае если первое условие перед && ложно, правое условие не выполниться.
//Но в случае, если левое условие истинное, правое условие необходимо выполнить для проверки общего результата.