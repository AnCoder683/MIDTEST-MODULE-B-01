const listCharacters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

const generateId = function (length, prefix = "") {
  // Check length
  if (length >= 100 || length <= 0) {
    return "phải là số nguyên dương nhỏ hơn 100";
  }

  let result = `${prefix}`;
  for (let i = 0; i < length; i++) {
    result += listCharacters[Math.floor(Math.random() * listCharacters.length)];
  }
  return result;
};

console.log(generateId(8, "user"));
console.log(generateId(8));

