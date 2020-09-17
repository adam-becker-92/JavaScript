const task4 = `{"sarah": {"phone": "077 123 4567", "email": "sarah@yahoo.com" }, "jane": {"phone": "021 465 1203"}}`;

const json = JSON.parse(task4);

console.log(json.jane.phone);
console.log(json.sarah.phone);