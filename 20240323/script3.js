// const input = require("fs").readFileSync("/dev/stdin", "utf8");

const input = `1 3
346
`;

const lines = input.split("\n");

const [N, K] = lines[0].split(" ").map(Number);
const arr = lines[1].split(" ").map(Number);

const substract = new Set();

arr.forEach((num) => {
  if (num <= K) {
    substract.add(num);
  }
});

const sum = (BigInt(K) * BigInt(K + 1)) / BigInt(2);

const sub = Array.from(substract).reduce(
  (p, c) => BigInt(p) + BigInt(c),
  [BigInt(0)]
);

console.log((BigInt(sum) - BigInt(sub)).toString());
