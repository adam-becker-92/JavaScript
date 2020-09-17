const hash = {};
const fruit = ['Apple', 'Pear', 'Lemon', 'Orange', 'Pineapple', 'Tomatoe', 'Mango', 'Banana'];

fruit.forEach((key) => {
    hash[key] = 0;
});

const input = [
    "apple",
    "pear",
    "lemon",
    "orange",
    "pineapple",
    "tomato",
    "lettuce",
    "mango",
    "apple",
    "pineapple",
    "lemon",
    "pear",
    "pear"
];

input.forEach(val => {
    const key = val.charAt(0).toUpperCase() + val.substr(1);
    if(key in hash) {
        hash[key] = hash[key] + 1;
    }
});

console.log(hash);