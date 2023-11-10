function decompose(num) {
    if (num < 0) return "Error: Input must be a positive integer.";
    if (!Number.isInteger(num)) return "Error: Input must be an integer.";
  
    const decomposeInner = (n, base) => {
      if (n < base * base) return [[], n];  
      const ki = Math.floor(Math.log(n) / Math.log(base));
      if (ki > 1) {
        const power = Math.pow(base, ki);
        const [exponents, remainder] = decomposeInner(n - power, base + 1);
        return [[ki, ...exponents], remainder];
      }
      return decomposeInner(n, base + 1);
    };  
    return decomposeInner(num, 2);
  }