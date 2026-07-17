const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9 ,10];
const filteredNumbers = numbers.filter(num => num >= 5);

console.log(filteredNumbers);

const furniture = ['Стул', 'Стол', 'Диван', 'Шкаф', 'Кровать'];
const hasItem = furniture.includes('Диван');

console.log(hasItem);

function reverseArray(arr) {
    return [...arr].reverse();
}

const reversedNumbers = reverseArray(numbers);
const reversedFurniture = reverseArray(furniture);

console.log(reversedNumbers);
console.log(reversedFurniture);

