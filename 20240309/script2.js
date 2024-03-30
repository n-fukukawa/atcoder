const input = require("fs").readFileSync("/dev/stdin", "utf8");

const lines = input.split("\n");

for (let i = lines.length - 2; i >= 0; i--) {
  console.log(lines[i]);
}
