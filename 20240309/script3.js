// const input = require("fs").readFileSync("/dev/stdin", "utf8");

const input = `3
1 2 3
2
2 4
6
1 2 4 8 16 32
4
1 5 10 50
`;

const lines = input.split("\n");

const N = Number(lines[0]);
const A = lines[1].split(" ").map(Number);

const M = Number(lines[2]);
const B = lines[3].split(" ").map(Number);

const L = Number(lines[4]);
const C = lines[5].split(" ").map(Number);

const Q = Number(lines[6]);
const X = lines[7].split(" ").map(Number);

// console.log({ N, A, M, B, L, C, Q, X });

const set = new Set();

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    for (let k = 0; k < L; k++) {
      set.add(A[i] + B[j] + C[k]);
    }
  }
}

for (let q = 0; q < Q; q++) {
  if (set.has(X[q])) {
    console.log("Yes");
  } else {
    console.log("No");
  }
}
