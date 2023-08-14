const opera = function (v1: Array<number>, v2: Array<string>): Array<string> {
    let res: Array<string> = [];
    for (let i = 0; i < v1.length; i++) {
      res[i] = v1[i] + v2[i];
    }
    return res;
  }
  
  const vetA: Array<number> = [5, 3, 1, 8, 2];
  const vetB: Array<string> = ["M", "a", "r", "i", "a"];
  console.log ("Resultado:", opera(vetA, vetB));