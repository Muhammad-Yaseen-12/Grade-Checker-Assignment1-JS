var urdu = parseFloat(prompt("Enter marks for Urdu !"));
var english = parseFloat(prompt("Enter marks for English !"));
var physics = parseFloat(prompt("Enter marks for Physics !"));
var chemistry = parseFloat(prompt("Enter marks for Chemistry !"));
var mathematisc = parseFloat(prompt("Enter marks for Mathematisc !"));

var total = urdu + english + physics + chemistry + mathematisc;
var average = total / 5;

var grade;
if (average >= 90) {
    grade = "A";
}
else if (average >= 80) {
    grade = "B";
}
else if (average >= 70) {
    grade = "C";
}
else if (average >= 60) {
    grade = "D";
}
else {
    grade = "Fail";
}

alert("Total Marks: " + total + "\nAverage Marks: " + average + "\nGrade: " + grade);
alert("Muhammad Yaseen Roll No 263357")