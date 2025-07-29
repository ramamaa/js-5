// Map method
//array iig ooriig ni oorchlohgui
//map neg function avna, tuhain function bas neg utga avna
//map method shine array uusgej ogno
//array uusgehee map iin return eer shiidne

let ages =[10,203,40,30,50]
ages.map((a)=>{
    return 10*a;
})
//

let students = [
  { name: "boldoo", age: 10, grade: 11, balance: 1001, gender: "male" },
  { name: "bataa", age: 14, grade: 11, balance: 1003, gender: "male" },
  { name: "dashka", age: 24, grade: 11, balance: 2000, gender: "male" },
  { name: "boloroo", age: 23, grade: 11, balance: 200, gender: "female" },
  { name: "boldoo", age: 19, grade: 11, balance: 10011, gender: "female" },
];

// nasand hursen suragdchdiig filterlej oloh function bich
const adultStudents = students.filter((student)=>{
    return student.age>=18;
})
console.log("nasand hursen suragchid",adultStudents);

// gender ogonguut tuhain gendereer filterlej ogoh function bich 
// eg: filterByGender("male") => zowhon erchuudig ylgaj ogno
function filterByGender(student,gender) {
   let filtered =  students.filter((student)=>{
    return student.gender === gender;
   })
   return filtered;
}
const filteredStudent = filterByGender(students,"female")
console.log("female suragchid = ",filteredStudent);

// nasaar ni sortloh function bich
function sortedByAge(students) {
let filtered= students.sort((student2,student1)=>{
  return student1.age-student2.age
})
return filtered;

}
let sortedStudent = sortedByAge(students)
console.log("Sorted by Age = ",sortedStudent);


// neg too ogonguut tuhain toonoos ih balanacetai suragchdiig ylgaj ogoh function bich

function filteredByBalance(student,balance) {
    let filtered = students.filter((student)=>{
        return student.balance > balance;
    })
    return filtered;
}
let filteredBalance = filteredByBalance(students, 1999)
console.log("1999-s ih balancetai suragchid = ", filteredBalance);

// classCode gesem field nemeh function bich
// eg: addClassCodeToSudents("3A") => [ { name: "boldoo", age: 10, grade: 11, balance: 1001, gender: "male" },...]
// removeGenders from student array function bich