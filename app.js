"use strict";

window.addEventListener("load", initApp);

const names = [
    "Peter",
    "Magdalena",
    "Frederikke",
    "Oskar",
    "Rasmus",
    "Sofie",
    "Anders",
    "Birgitte"
];

const years = [2003, 2032, 1990, 1966, 1998, 1989, 1975, 2023, 1933];

const teachers = [
    {
        name: "Magdalena Maria Otap",
        mail: "mago@kea.dk",
        phone: "77880000",
        title: "Lecturer",
        age: 36,
        image: "https://share.cederdorff.com/images/mago.jpg"
    },
    {
        name: "Birgitte Jensen",
        mail: "birgitte@mail.dk",
        phone: "77226010",
        title: "Senior Lecturer",
        age: 49,
        image: "https://www.eaaa.dk/media/u4gorzsd/birgitte-kirk-iversen2.jpg?anchor=center&mode=crop&width=800&height=450&rnd=132792921541630000&format=webp"
    },
    {
        name: "Dan Nielsen",
        mail: "dan@mail.dk",
        phone: "77226027",
        title: "Lecturer",
        age: 36,
        image: "https://www.eaaa.dk/media/bdojel41/dan-okkels-brendstrup.jpg?anchor=center&mode=crop&width=800&height=450&rnd=132792921559630000&format=webp"
    },
    {
        name: "Rasmus Cederdorff",
        mail: "race@kea.dk",
        phone: "72286318",
        title: "Senior Lecturer",
        age: 33,
        image: "https://share.cederdorff.com/images/race.jpg"
    },
    {
        name: "Martin Hansen",
        mail: "martin@mail.dk",
        phone: "77886620",
        title: "Lecturer",
        age: 34,
        image: "https://www.eaaa.dk/media/oayjq02h/martin-n%C3%B8hr.jpg?anchor=center&mode=crop&width=800&height=450&rnd=132792921658800000&format=webp"
    },
    {
        name: "Peter Lind",
        mail: "petl@kea.dk",
        phone: "77886699",
        title: "Senior Lecturer",
        age: 46,
        image: "https://share.cederdorff.com/images/petl.jpg"
    }
];

const teacher = {
    name: "Peter Lind",
    mail: "petl@kea.dk",
    phone: "77886699",
    title: "Senior Lecturer",
    age: 46,
    image: "https://share.cederdorff.com/images/petl.jpg"
};

function initApp() {
    console.log("initApp: app.js is running 🎉");

    // logs
    console.log(names);
    console.log(years);
    console.log(teachers);

    // loops
    forEachTeachers();
    forTeachers();
    forOfTeachers();
    forInTeacher(teacher);
    whileNamesLength();
    whileTeachersLength();
    whileFindTeacherByMail("race@kea.dk");

    // filter
    filterTeachersByTitle("Lecturer");
    filterTeachersByTitle("Senior Lecturer");
    searchTeachersByName("Ma");
    searchTeachersByName("dorff");

    // find
    findTeacherByMail("petl@kea.dk");
    findTeacherByAge(36);

    // sort
    sortNames();
    sortYears();

    // sort and compare functions
    sortTeachersByName();
    sortTeachersByAge();
}

function forEachTeachers() {
    teachers.forEach(logTeacher);
}

function logTeacher(teacher, index) {
    console.log(index, teacher);
}

function forTeachers() {
    for (let index = 0; index < teachers.length; index++) {
        const teacher = teachers[index];
        console.log(teacher);
    }
}

function forOfTeachers() {
    for (const teacher of teachers) {
        console.log(teacher);
    }
}

function forInTeacher(teacher) {
    for (const key in teacher) {
        console.log(key);
        const value = teacher[key];
        console.log(value);
    }
}

function whileNamesLength() {
    let index = 0;

    while (index < names.length) {
        const teacher = teachers[index];
        console.log(teacher);
        index++;
    }
}

function whileTeachersLength() {
    let index = 0;

    while (index < teachers.length) {
        const teacher = teachers[index];
        console.log(teacher);
        index++;
    }
}

function whileFindTeacherByMail(mail) {
    let index = 0;
    let found = false;

    while (index < teachers.length && !found) {
        const teacher = teachers[index];

        if (teacher.mail === mail) {
            found = true;
            console.log("Teacher found!");
            console.log(teacher);
        }

        index++;
    }
}

function filterTeachersByTitle(title) {
    const results = teachers.filter(checkTitle);

    function checkTitle(teacher) {
        return teacher.title === title;
    }

    console.log(results);
    return results;
}

function searchTeachersByName(name) {
    const results = teachers.filter(matchName);

    function matchName(teacher) {
        return teacher.name.includes(name);
    }

    console.log(results);
    return results;
}

function findTeacherByMail(mail) {
    const result = teachers.find(checkMail);

    function checkMail(teacher) {
        return teacher.mail === mail;
    }

    console.log(result);
    return result;
}

function findTeacherByAge(age) {
    const result = teachers.find(checkAge);

    function checkAge(teacher) {
        return teacher.age === age;
    }

    console.log(result);
    return result;
}

function sortNames() {
    names.sort();
    console.log(names);
}

function sortYears() {
    years.sort();
    console.log(years);
}

function sortTeachersByName() {
    teachers.sort(compareName);
    console.log(teachers);
}

function sortTeachersByAge() {
    teachers.sort(compareAge);
    console.log(teachers);
}

function compareName(teacher1, teacher2) {
    return teacher1.name.localeCompare(teacher2.name);
}

function compareAge(teacher1, teacher2) {
    return teacher1.age - teacher2.age;
}
