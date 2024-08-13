export default function getListStudentIds(students) {
  if (!Array.isArray(students)) {
    return [];
  }
  // Using the map function to extract the ids
  return students.map((student) => (student.id));
}
