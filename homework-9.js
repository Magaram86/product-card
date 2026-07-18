import { socialComments } from './comments.js';

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const filteredNumbers = numbers.filter(num => num >= 5);
console.log("Задание 2:", filteredNumbers);

const furniture = ['Стул', 'Стол', 'Диван', 'Шкаф', 'Кровать'];
const hasItem = furniture.includes('Диван');
console.log("Задание 3:", hasItem);

function reverseArray(arr) {
		return [...arr].reverse();
}
const reversedNumbers = reverseArray(numbers);
const reversedFurniture = reverseArray(furniture);
console.log("Задание 4 — Числа:", reversedNumbers);
console.log("Задание 4 — Мебель:", reversedFurniture);
