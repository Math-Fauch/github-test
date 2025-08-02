function main() {
  console.log(calculateSum(1, 2));
  console.log(calculateSub(5, 1));
}

function calculateSum(a: number, b: number): number {
  return a + b;
}

function calculateSub(a: number, b: number): number {
  return a - b;
}

main();

