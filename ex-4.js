let studentProfile = {
  name: "John",
  age: 20,
  scores: {
    thai: 40,
  },
  hobbies: ["Football", "Coding"],
};

let additionalHobbies = ["Painting", "Yoga"];

let addHobbies = studentProfile.hobbies.push(...additionalHobbies) 
let newStudentProfile = {...studentProfile}


console.log(newStudentProfile);
