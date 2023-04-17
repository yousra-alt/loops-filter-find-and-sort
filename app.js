"use strict";

window.addEventListener("load", initApp);

// ========== Global Variables ========== //

const names = [
  "Peter",
  "Magdalena",
  "Frederikke",
  "Oskar",
  "Rasmus",
  "Sofie",
  "Anders",
  "Birgitte",
];

const years = [2003, 2032, 1990, 1966, 1998, 1989, 1975, 2023, 1933];

const teachers = [
  {
    name: "Magdalena Maria Otap",
    mail: "mago@kea.dk",
    phone: "77880000",
    title: "Lecturer",
    age: 36,
    image: "https://share.cederdorff.com/images/mago.jpg",
  },
  {
    name: "Birgitte Jensen",
    mail: "birgitte@mail.dk",
    phone: "77226010",
    title: "Senior Lecturer",
    age: 49,
    image:
      "https://www.eaaa.dk/media/u4gorzsd/birgitte-kirk-iversen2.jpg?anchor=center&mode=crop&width=800&height=450&rnd=132792921541630000&format=webp",
  },
  {
    name: "Dan Nielsen",
    mail: "dan@mail.dk",
    phone: "77226027",
    title: "Lecturer",
    age: 36,
    image:
      "https://www.eaaa.dk/media/bdojel41/dan-okkels-brendstrup.jpg?anchor=center&mode=crop&width=800&height=450&rnd=132792921559630000&format=webp",
  },
  {
    name: "Rasmus Cederdorff",
    mail: "race@kea.dk",
    phone: "72286318",
    title: "Senior Lecturer",
    age: 33,
    image: "https://share.cederdorff.com/images/race.jpg",
  },
  {
    name: "Martin Hansen",
    mail: "martin@mail.dk",
    phone: "77886620",
    title: "Lecturer",
    age: 34,
    image:
      "https://www.eaaa.dk/media/oayjq02h/martin-n%C3%B8hr.jpg?anchor=center&mode=crop&width=800&height=450&rnd=132792921658800000&format=webp",
  },
  {
    name: "Peter Lind",
    mail: "petl@kea.dk",
    phone: "77886699",
    title: "Senior Lecturer",
    age: 46,
    image: "https://share.cederdorff.com/images/petl.jpg",
  },
];

const teacher = {
  name: "Peter Lind",
  mail: "petl@kea.dk",
  phone: "77886699",
  title: "Senior Lecturer",
  age: 46,
  image: "https://share.cederdorff.com/images/petl.jpg",
};

// ========== initApp ========== //

function initApp() {
  console.log("initApp: app.js is running 🎉");
  names.forEach(loopThroughNames);
  names.forEach(logName);

  years.forEach(loopThroughYears);
  years.forEach(logYear);

  loopYears();
  loopthroguhFirstYears();
  loopThroughFiveLastYears();
  logNumbers();
  forOfTeachers();
  teachersOver40();
  forOfSearchTeachersByName("sen");
  forInTeacher();
}

function loopThroughNames(name) {
  console.log(name);
}

function logName(name, index) {
  console.log(name);
  console.log(index);

  if (index === names.length - 1) {
    console.log("the last name is", name);
  }

  if (index % 2 === 1) {
    console.log("Every other is second name", name);
  }
}

function loopThroughYears() {
  console.log(years);
}

function logYear(year, index) {
  if (index === years.length - 1) {
    console.log("The last date is", year);
  }

  if (index % 2 === 1) {
    console.log("Every other is second year", year);
  }
}

// ========== for of loop ========== //
function loopYears() {
  for (let index = 0; index < years.length; index++) {
    const year = years[index];
    console.log(year);
  }
}

function loopthroguhFirstYears() {
  for (let index = 0; index < years.length; index++) {
    const year = years[index];
    console.log(year);
  }

  for (let index = 0; index < 5; index++) {
    const year = years[index];
    console.log(year);
  }
}
function loopThroughFiveLastYears() {
  for (let index = 0; index < years.length; index++) {
    const year = years[index];
    console.log(year);
  }

  for (let index = 4; index < years.length; index++) {
    const year = years[index];
    console.log(year);
  }
}

function logNumbers() {
  for (let index = 0; index < 10; index++) {
    console.log(index);

    // tælle op fra 0-19
  }

  for (let index = 1; index < 11; index++) {
    console.log(index);
    // tælle op fra 1-10
  }

  for (let index = 10; index > -1; index--) {
    console.log(index);
    // tæller ned fra 10-10.
  }

  for (let index = 1; index < 20; index = index + 2) {
    console.log(index);
    //   tæller op med ulige numre, starter på 1 og + 2 = 3 osv.
  }

  for (let index = 1; index < 16777216; index = index * 2) {
    console.log(index);
  }

  for (let index = 111; index < 139; index = index + 3) {
    console.log(index);
  }

  for (let index = 100; index > -1; index = index - 10) {
    console.log(index);
  }
}

//   for (let index = 0; index < names.length; index++) {
//   const name = names[index];
//   console.log(name);
// }

// for (let index = 0; index < teachers.length; index++) {
//   const teacher = teachers[index];
//   console.log(teacher);
// }

// ========== for of loop ========== //

function forOfTeachers() {
  for (const teacher of teachers) {
    console.log(teacher);
  }
}

function teachersOver40() {
  const results = [];

  for (const teacher of teachers) {
    if (teacher.age > 40) {
      results.push(teacher);
    }
  }
  console.log(results);
  // Birgitte og Peter
}

function forOfSearchTeachersByName(searchValue) {
  console.log(searchValue);
  const results = [];
  for (const teacher of teachers) {
    if (teacher.name.includes(searchValue)) {
      results.push(teacher);
    }
    console.log(results);
  }
//   søge funktion. Når funktionen kaldes i initapp, kan man ændre parameter efter hvad der skal søges efter.
}

// ========== for in loop ========== //

function forInTeacher () {
for (const key in teacher) {
        console.log(key)
        const value = teacher[key];
        console.log(value)
            
        }
    }


// ========== while loops ========== //

// ========== Filter items: array.filter(...) ========== //

// ========== Sorting: array.sort() ========== //
