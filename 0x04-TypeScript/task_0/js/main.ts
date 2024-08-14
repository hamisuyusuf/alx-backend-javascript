// main.ts

// 1. Define the Student interface
interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

// 2. Create two students
const student1: Student = {
    firstName: "John",
    lastName: "Doe",
    age: 20,
    location: "New York"
};

const student2: Student = {
    firstName: "Jane",
    lastName: "Smith",
    age: 22,
    location: "Los Angeles"
};

// 3. Create an array containing the two students
const studentsList: Student[] = [student1, student2];

// 4. Render a table using Vanilla JavaScript
const table = document.createElement('table');

// Table headers
const headerRow = document.createElement('tr');
const headerFirstName = document.createElement('th');
headerFirstName.textContent = 'First Name';
const headerLocation = document.createElement('th');
headerLocation.textContent = 'Location';

headerRow.appendChild(headerFirstName);
headerRow.appendChild(headerLocation);
table.appendChild(headerRow);

// Appended rows for each student in studentsList
studentsList.forEach((student) => {
    const row = document.createElement('tr');
    const firstNameCell = document.createElement('td');
    const locationCell = document.createElement('td');

    firstNameCell.textContent = student.firstName;
    locationCell.textContent = student.location;

    row.appendChild(firstNameCell);
    row.appendChild(locationCell);
    table.appendChild(row);
});

// Add table to the document body
document.body.appendChild(table);
