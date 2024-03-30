// const input = require("fs").readFileSync("/dev/stdin", "utf8");

const input = `3 0
`;

const lines = input.split("\n");

const [W, B] = lines[0].split(" ").map(Number);

const s = "wbwbwwbwbwbw";

let S = "";

for (let i = 0; i < 20; i++) {
  S += s;
}

const Ws = [1];
const Bs = [0];

for (let i = 1; i < S.length; i++) {
  if (S[i] === "w") {
    Ws[i] = Ws[i - 1] + 1;
    Bs[i] = Bs[i - 1];
  } else {
    Bs[i] = Bs[i - 1] + 1;
    Ws[i] = Ws[i - 1];
  }
}

let result = "No";
for (let i = 0; i < Ws.length; i++) {
  for (let j = i; j < Ws.length; j++) {
    const w = Ws[j] - Ws[i];
    const b = Bs[j] - Bs[i];

    if (w === W && b === B) {
      result = "Yes";
      break;
    }
  }
}

console.log(result);
