export default function getStudentIdsSum(students) {
  // Using the reduce function to sum all the student IDs
  return students.reduce((sum, student) => sum + student.id, 0);
}
