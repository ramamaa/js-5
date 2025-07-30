// Map method
// array iig ooriig n oorchilohgui
// map neg function avna, tuhain function bas neg utga avna
// map method shine array uusgej ogno, shine array n huuchin array tei length ijil baina
// yamar array uusgehee map iin return eer shiidne

let ages = [10, 203, 43, 30, 50];
let ageSort = [10, 30, 43, 50, 203];

let duu = ages.map((age) => {
  return age % 2 == 0;
});
console.log(duu);

let students = [
  {
    name: "boldo",
    age: 3,
    grade: 11,
    gender: "male",
    balance: 1231,
  },
  {
    name: "dorjo",
    age: 20,
    grade: 11,
    gender: "male",
    balance: 33,
  },
  {
    name: "tsetsge",
    age: 10,
    grade: 11,
    gender: "female",
    balance: 222,
  },
  {
    name: "dulma",
    age: 9,
    grade: 11,
    gender: "female",
    balance: 12,
  },
];

let newStudents = students.map((student) => {
  return {
    name: student.name,
    age: student.age,
    grade: student.grade + 1,
  };
});
console.log(students);
console.log(newStudents);

// filter
// filter ooriig n oorchlohgui
// shine array uusgej ogno
// filter method neg function avna, tuhain function neg utga avna
// return deer true baih buh element iig tsugluulaad array butsaana
const filtered = ages.filter((age) => {
  return age % 2 == 0;
});
console.log(ages);
console.log(filtered);

// sort method
// sort method function avna
// avjgaa function n 2 utga orj irne
// return deer + esve - too butsaana
// sort method n array-iig ooriig n oorchlono

console.log("=========== Sort ============");
let ah = ages.sort((age2, age1) => {
  return age2 - age1;
});
console.log(ages);

// console.log(ages);
// ages.sort((a, b) => {
//   return -1;
// });
// console.log(ages);

console.log(students);
students.sort((student2, student1) => {
  return student2.age - student1.age;
});
console.log(students);

students.sort((student2, student1) => {
  if (student1.age > student2.age) {
    return -1;
  } else {
    return 1;
  }
});
console.log("Sort  =====================>", students);

// Bodlogo #1
// nasand hursen suragchiig filterlej oloh function bich
// Bodlogo #2
// gender ogonguut tuhain gendereer filterlej ogoh function bich
// eg: filterByGender(students,"male") => zovhon erchuudiig yalgaj ogno
// Bodlogo #3
// nasaar n sortloh function bich
// Bodlogo #4
// neg too ogonguut tuhain toonoos ih balanactei surgchdiig yalgaj ogoh function bich
// bodlogo #5
// classCode gesen field nemeh function bich
// eg: addClassCodeToStudents(students,"3A") => [{name: "boldo",age: 3,grade: 11,gender: "male",balance: 1231,classCode:"3A"},...]
// bodlogo #6
// removeGenders from student array function bich
