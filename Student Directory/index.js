const students = {
    Alex: {
        age: 20,
        course: "JavaScript"
    },
    Sarah: {
        age: 22,
        course: "React"
    },
    John: {
        age: 19,
        course: "HTML & CSS"
    }
}

function findStudent(name) {
    if (students[name]) {
        return students[name]
    } else {
        return "Student not found"
    }
}

console.log(findStudent("Alex"));
console.log(findStudent("Alba"));
