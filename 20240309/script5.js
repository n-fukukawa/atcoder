const input = require("fs").readFileSync("/dev/stdin", "utf8");

const lines = input.split("\n");

const N = Number(lines[0]);
const A = lines[1].split(" ").map(Number);

const Q = Number(lines[2]);
const Query = lines.slice(3, 3 + Q).map((line) => line.split(" ").map(Number));

const map = new Map();

A.forEach((n, i) => {
  map.set(n, i);
});

for (let i = 0; i < Q; i++) {
  if (Query[i][0] === 1) {
    const [, x, y] = Query[i];
    const index = map.get(x);
    map.set(y, index + 1 / 10 ** 10);
  } else {
    const x = Query[i][1];
    map.delete(x);
  }
}

const sorted = [...map.entries()].sort((a, b) => {
  return a[1] - b[1];
});

console.log(sorted.map((s) => s[0]).join(" "));
