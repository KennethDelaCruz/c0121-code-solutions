/* exported getStudentNames */
function getStudentNames(students) {
  const studentNames = [];
  let i = 0;
  for (i = 0; i < students.length; i++) {
    studentNames.push(students[i].name);
  }
  return studentNames;
}
