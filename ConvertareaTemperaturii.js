//Temperatura in grade Kelvin
const kelvin = 293;
//Convertarea in grade Celsius
const celsius = kelvin - 273;
//Convertarea celsius inn fahrenheit
let fahrenheit = celsius * (9/5) + 32;
//Folosim metoda math.floor pentru a rotungi cifra
fahrenheit = Math.floor(fahrenheit);
console.log(`The temperature is ${fahrenheit} degrees fahrenheit.`);

