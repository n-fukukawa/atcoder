// const input = require("fs").readFileSync("/dev/stdin", "utf8");

const input = `abcde
3
3 ab abc abcd
4 f c cd bcde
2 e de
`;

const lines = input.split("\n");

const T = lines[0];

const N = Number(lines[1]);
const A = lines
  .slice(2, 2 + N)
  .map((line) => line.split(" ").map((v, i) => (i === 0 ? Number(v) : v)));

console.log({ T, N, A });
