// const input = require("fs").readFileSync("/dev/stdin", "utf8");

const input = `4 347 347
347 700 705 710

`;

const lines = input.split("\n");

const [N, A, B] = lines[0].split(" ").map(Number);
const days = lines[1].split(" ").map(Number);

let max = 0;
let min = 0;
const set = new Set();
const week = A + B;
for (let i = 0; i < N; i++) {
  const amari = days[i] % week;
  if (i === 0) {
    max = amari;
    min = amari;
  } else {
    if (amari > max) max = amari;
    if (amari < min) min = amari;
  }

  set.add(amari);
}

if (max - min < A) {
  console.log("Yes");
} else if (week - 1 - max + min < A) {
  console.log("Yes");
} else {
  console.log("No");
}
