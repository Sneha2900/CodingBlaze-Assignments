let students = [
    {
        name : "Sneha",
        id : 1,
        Marks : {English: 89, Maths: 74, Science: 78}
    },
    {
        name : "Sanjna",
        id : 2,
        Marks : {English: 18, Maths: 54, Science: 68}
    },
    {
        name : "Ashi",
        id : 3,
        Marks : {English: 69, Maths: 67, Science: 65}
    },
    {
        name : "Nikhil",
        id : 4,
        Marks : {English: 67, Maths: 19, Science: 58}
    },
    {
        name : "Lucky",
        id : 5,
        Marks : {English: 49, Maths: 45, Science: 68}
    },
    {
        name : "Shruti",
        id : 6,
        Marks : {English: 59, Maths: 54, Science: 28}
    },
    {
        name : "Shreya",
        id : 7,
        Marks : {English: 89, Maths: 74, Science: 78}
    },
    {
        name : "Sweta",
        id : 8,
        Marks : {English: 32, Maths: 64, Science: 78}
    },
    {
        name : "Sakshi",
        id : 9,
        Marks : {English: 78, Maths: 74, Science: 78}
    },
    {
        name : "Vatsal",
        id : 10,
        Marks : {English: 23, Maths: 67, Science: 56}
    }
];
for (let student of students) {
    student.averageMarks = (student.Marks.English + student.Marks.Maths + student.Marks.Science)/3;
    student.result = student.averageMarks >= 33 
    && student.Marks.English >= 33
    && student.Marks.Maths >= 33
    && student.Marks.Science >= 33
            ? "Pass"
            : "Fail"        
console.log(student)
};