// const input = require("fs").readFileSync("/dev/stdin", "utf8");

const input = `aabbcc
`;

const lines = input.split("\n");

const S = lines[0];

const obj = {};

const N = S.length;

for (i = 0; i < N; i++) {
  if (obj[S[i]]) {
    obj[S[i]]++;
  } else {
    obj[S[i]] = 1;
  }
}

let result = (N * (N - 1)) / 2;

const v = Object.values(obj);

for (let i = 0; i < v.length; i++) {
  const n = v[i];

  if (n === 1) {
    continue;
  }

  const s = (n * (n - 1)) / 2 - 1;
  result -= s;
}

console.log(result);
