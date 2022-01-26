const a = [1, 2, 3];
const b = [1, 2, 3];

k = 31;

const countTinyPairs = (a, b, k) => {
  let result = [];
  a.forEach((element) => {
    const x = element;
    const y = b[a.length - element];
    const conCat = String(x) + String(y);
    if (conCat < k) {
      result.push(conCat);
    } else {
      return;
    }
  });
  return result;
};

const finalOutput = countTinyPairs(a, b, k);
console.log(finalOutput)