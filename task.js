function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
}

let student1 = new Student('Bob', 'male', 19);
let student2 = new Student('Tom', 'male', 21);
let student3 = new Student('Amily', 'female', 20);

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMark = function (mark) {

  if(this.marks === undefined){ 
    this.marks = [mark];
  } else {
    this.marks.push(mark);
  }
}

Student.prototype.addMarks = function (...marks) {
  if(this.marks === undefined){ 
    this.marks = marks;
  } else {
    for (let i = 0; i < marks.length; i++) {
      this.marks.push(marks[i]);
    } 
  }
  
}

// student2.addMarks(5, 4, 5);
// student2.addMarks(6, 7, 7);
// student2.addMark(5);
student2.setSubject('Math');
console.log(student2);

Student.prototype.getAverage = function() {
  let sum = 0;

  for (let i = 0; i < this.marks.length; i++){
        sum += this.marks[i];
  }

  return (sum / this.marks.length)
}

// console.log(student1.getAverage());

Student.prototype.exclude = function(reason) {
  this.excluded = reason;
  delete this.subject;
  delete this.marks;
}

// student2.exclude('low grades');
// console.log(student2)
