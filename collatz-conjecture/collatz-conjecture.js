export const steps = (n) => {
  if (n < 1) throw new Error("Only positive numbers are allowed")

  let count = 0;

  while (n > 1) {
    if (n % 2 === 0) {
      n = n / 2;
    } else {
      n = 3*n + 1;
    }
    count++;
  }

  return count;
};
