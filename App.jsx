import React, { useState } from "react";

const students = [
  "Student 1", "Student 2", "Student 3", "Student 4", "Student 5",
  "Student 6", "Student 7", "Student 8", "Student 9", "Student 10",
  "Student 11", "Student 12", "Student 13", "Student 14", "Student 15",
  "Student 16", "Student 17", "Student 18", "Student 19", "Student 20",
];

export default function StudentPagination() {
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 10;

  const indexOfLast = currentPage * recordsPerPage;
  const indexOfFirst = indexOfLast - recordsPerPage;

  const currentStudents = students.slice(indexOfFirst, indexOfLast);

  const totalPages = Math.ceil(students.length / recordsPerPage);

  const nextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <div>
      <h2>Paginated Student Records</h2>

      <ul>
        {currentStudents.map((student, index) => (
          <li key={index}>{student}</li>
        ))}
      </ul>

      <button onClick={prevPage} disabled={currentPage === 1}>Previous</button>

      <span> Page {currentPage} of {totalPages} </span>

      <button onClick={nextPage} disabled={currentPage === totalPages}>Next</button>
    </div>
  );
}
