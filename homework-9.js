import { socialComments } from './comments.js';

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const filteredNumbers = numbers.filter(num => num >= 5);
console.log(filteredNumbers);

const furniture = ['Стул', 'Стол', 'Диван', 'Шкаф', 'Кровать'];
const hasItem = furniture.includes('Диван');
console.log(hasItem);

const reverseArray = arr => [...arr].reverse();
const reversedNumbers = reverseArray(numbers);
const reversedFurniture = reverseArray(furniture);
console.log(reversedNumbers);
console.log(reversedFurniture);

const comEmails = socialComments.filter(comment => comment.email.includes('.com'));
console.log(comEmails);

const updatedPostIdComments = socialComments.map(comment => ({
  ...comment,
  postId: comment.id <= 5 ? 2 : 1
}));
console.log(updatedPostIdComments);

const shortComments = updatedPostIdComments.map(comment => ({
  id: comment.id,
  name: comment.name
}));
console.log(shortComments);

const validatedComments = updatedPostIdComments.map(comment => ({
  ...comment,
  isInvalid: comment.body.length > 180
}));
console.log(validatedComments);

const emailsReduce = validatedComments.reduce((acc, comment) => {
  acc.push(comment.email);
  return acc;
}, []);
console.log(emailsReduce);

const emailsMap = validatedComments.map(comment => comment.email);
console.log(emailsMap);

const stringToString = emailsReduce.toString();
console.log(stringToString);

const stringJoin = emailsReduce.join(', ');
console.log(stringJoin);
