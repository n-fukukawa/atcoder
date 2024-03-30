// const input = require("fs").readFileSync("/dev/stdin", "utf8");

const input = `<====>

`;

const lines = input.split("\n");

const S = lines[0];

let result = true;

for (let i = 0; i < S.length; i++) {
  if (i === 0) {
    if (S[i] !== "<") {
      result = false;
      break;
    }
  } else if (i === S.length - 1) {
    if (S[i] !== ">") {
      result = false;
      break;
    }
  } else {
    if (S[i] !== "=") {
      result = false;
      break;
    }
  }
}

if (result) {
  console.log("Yes");
} else {
  console.log("No");
}
