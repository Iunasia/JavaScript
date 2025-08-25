let students = [
    {name: "Alice", score: 85},
    {name: "Bob", score: 92},
    {name: "Charlie", score: 78}
];

let passed = students.map(student => 
    student.score >= 80 ? `${student.name}: Passed` : `${student.name}: Failed`
);

console.log(passed);
