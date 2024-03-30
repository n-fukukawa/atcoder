// const input = require("fs").readFileSync("/dev/stdin", "utf8");

const input = `||xyz
`;

const lines = input.split("\n");

const S = lines[0];

let result = "";
let flag = false;

for (let i = 0; i < S.length; i++) {
  if (S[i] === "|") {
    flag = !flag;
    continue;
  }

  if (flag) {
    continue;
  } else {
    result += S[i];
  }
}

console.log(result);
