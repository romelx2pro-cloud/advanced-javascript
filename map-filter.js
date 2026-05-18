const n = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const output = [];
// for (let i = 0; i < n.length; i++) {
// const element = n[i];
// const result = element * element;
// output.push(result);
// }
// function s(e) {
// return e * e;
// }
// const s = (e) => e * e;
// const r = n.map(function (e) {
// return e * e;
// });

const r2 = n.map((x) => x * x);
console.log(r2);

const rf = n.filter((x) => x <= 0);
console.log(rf);

const it = n.find((x) => x > 9);
console.log(it);
