// const input = require("fs").readFileSync("/dev/stdin", "utf8");

const input = `123456789123456789
`;

const lines = input.split("\n");

const X = lines[0];

const D = Number(10);

if (X[0] !== "-") {
  if (X[X.length - 1] === "0") {
    console.log(X.slice(0, -1));
  } else {
    console.log(X.slice(0, -1));
    console.log(Number(X.slice(0, -1)) + 1);
  }
} else {
  if (X[X.length - 1] === "0") {
    console.log(-X.slice(0, -1));
  } else {
    console.log(Number(X.slice(0, -1)));
  }
}
