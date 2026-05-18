const students = [
  { id: 21, name: "Omar Sunny" },
  { id: 31, name: "Maannaaaaaaa" },
  { id: 41, name: "Moyuri" },
  { id: 71, name: "DeepJol" },
];

// console.log(students[0].name);
// const studentNamesF = [];
// for (let index = 0; index < students.length; index++) {
// const element = students[index];
// console.log(element.name);
// studentNamesF.push(element.name);
// }
// console.log(studentNamesF);
const studentNamesM = students.map((x) => x.name);
const studentIdsM = students.map((x) => x.id);
const studentIdsFlt = students.filter((x) => x.id > 40);
const studentIdsFnd = students.find((x) => x.id > 40);
console.log(studentNamesM);
console.log(studentIdsM);
console.log(studentIdsFlt);
console.log(studentIdsFnd);
//
