#! /usr/bin/env node
import inquirer from "inquirer";
// import { Goto } from 'goto-ts';
class Course {
    static checkId = 0;
    id;
    name;
    student;
    instructor;
    addStudent() {
        // this.student = [...user.userName];
        console.log(`${user.userName} added`);
    }
    setInstructor() {
        console.log(`${user.userName} added as instructor`);
    }
    constructor() {
        this.instructor = user.userName;
        this.id = ++Course.checkId;
        this.name = user.userName;
        this.student = [];
        this.instructor = [];
    }
}
class Department {
    _name;
    _courses;
    addCourse() {
        // const addCourse = await inquirer.prompt([{message:"Enter the Name of Course you want to add",name:"course",type:"input"}])
        console.log(`${this._courses} added`);
    }
    constructor(name, courses) {
        this._name = name;
        this._courses = courses;
    }
}
class Person {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getName() {
        console.log(`Hi ${this.name}`);
    }
}
class Student extends Person {
    static rollNum = 0;
    rollnumber;
    static courses = ["Math", 'English', 'Physics', 'Computer', 'Biology'];
    static selectedCourses;
    chosen = [];
    registerForCourses() {
        console.log(`Registered for ${choice.Subjects} courses`);
    }
    constructor() {
        super(user.userName, user.userAge);
        this.rollnumber = ++Student.rollNum;
    }
}
class Instructor extends Person {
    salary;
    courses;
    assignCourse() {
        this.courses = user.userCourses;
        console.log(`The Course: ${this.courses} has been assigned to you`);
    }
    constructor(salary, courses) {
        super(user.userName, user.userAge);
        this.salary = salary;
        this.courses = courses;
    }
}
const person = await inquirer.prompt([{ message: "Are you:\t\t(Press 1 or 2)\n1. Student\n2. Instructor", name: "personCheck", type: "input" }]);
switch (person.personCheck) {
    case '1':
        var user = await inquirer.prompt([{ message: "Enter Your Name: ", type: 'input', name: "userName" },
            { message: "Enter Your Age: ", type: 'input', name: "userAge" }]);
        var choice = await inquirer.prompt([{ message: 'Choose Subjects: ', type: 'checkbox', name: 'Subjects', choices: Student.courses, }]);
        break;
    case '2':
        var user = await inquirer.prompt([{ message: "Enter Your Name: ", type: 'input', name: "userName" },
            { message: "Enter Your Age: ", type: 'input', name: "userAge" },
            { message: "Enter Your Salary: ", type: 'input', name: "userSalary" },
            { message: "Enter Your Courses: ", type: 'list', name: "userCourses", choices: Student.courses }]);
        break;
    default:
        console.log("Invalid Choice");
        break;
}
let st1 = new Student();
let inst1 = new Instructor(user.userSalary, user.userCourses);
// inst1.getName()
// inst1.assignCourse()
// st1.registerForCourses() 
// st1.getName()
// let inst11 = new Course();
// inst11.setInstructor()
let std11 = new Course();
std11.addStudent();
