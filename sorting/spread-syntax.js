const testArr = [1,5,3,2,2,6,9];
const testArr2 = [...testArr];
const add = (a,b,c,d,e) => {
    return a + b + c + d + e;
}

console.log(add(...testArr)); //using spread operator
console.log(add(...testArr2));