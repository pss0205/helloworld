let allStudents = [
  'A',
  'B-',
  'C-',
  'C',
  1,
  4,
  3,
  5,
  2
]

let studentsWhoPass = [];
for(let i = 0; i<allStudents.length; i++)
{
    if(!(allStudents[i] === "C-" || allStudents[i] === 1 || allStudents[i] === 2))
    {
        studentsWhoPass.push(allStudents[i]);
    }
    //console.log(allStudents[i]);
    //studentsWhoPass[i] = allStudents[i];
}
for(let i = 0; i<studentsWhoPass.length; i++)
{
    console.log(studentsWhoPass[i]);
}