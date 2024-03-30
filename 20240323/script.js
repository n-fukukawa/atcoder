// const input = require("fs").readFileSync("/dev/stdin", "utf8");

const input = `5
22 75 26 45 72
`;

const lines = input.split("\n");

const N = lines[0];
const arr = lines[1].split(" ").map(Number);

const result = [];

for (let i = 0; i < N - 1; i++) {
  result.push(arr[i] * arr[i + 1]);
}

console.log(result.join(" "));
