const validateCharacterCount = (max, ...items) => items.every(item => item.length < max);

console.log(validateCharacterCount(10, ['Hobbs', 'Eagles']));

console.log(validateCharacterCount(10, 'wvoquie'));

console.log(validateCharacterCount(10, 'Hobbs', 'Eagles'));

const queue = ['stop', 'collaborate', 'listen'];
const [first, ...remaining] = queue;
console.log(first);
console.log(remaining);