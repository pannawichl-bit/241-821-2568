//console.log("Hello World");
//console.log("This is main.js file");

// String,number,Boolean,Null,Object,Array

//String
//let fname ="John"; //string

//Number
//let age = 30; //Number
//let height = 5.9 //Number


//console.log("Name:",fname)
//console.log("Age:",age)
//console.log("height:",height)

/**
 + = บวก
 - = ลบ
 * = คูณ
 / = หาร
 % = หารเอาเศษ
 */

//let number1 = 10;
//let number2 = 3;
//let result1 = number1 + number2;
//console.log("ผลบวก =",result1)

/**
 == เท่ากับ
 != ไม่เท่ากับ
 > มากกว่า
 < น้อยกว่า
 >= มากกว่าเท่ากับ
 <= น้อยกว่าเท่ากับ
 */

/*let number1 = 5;
let number2 = 5;
//let condition = number1 <= number2; //Boolean ค่าความจริง true หรือ false
//console.log("condition:",condition);

/**
 Grade 
 >=80 เป็น A
 >=70 เป็น B
 >=60 เป็น C
 >=50 เป็น D
 < 50 เป็น F
 */ 
 
    /** let score = prompt("กรุณาใส่คะแนนของคุณ");
    if (score >= 80){
        console.log("Grade A");
    } else if (score >= 70){
        console.log("Grade B");
    } else if (score >= 60){
        console.log("Grade C");
    } else if (score >= 50){
        console.log("Grade D");
    } else{
        console.log("Grade F");
    }

/* if-else condition
if (number1 > number2) {
    console.log("this is if");
} else if(number1 < number2) {
    console.log("this is else if");
} else {
    console.log("This is else");
}  
*/

/**let number1 = 5;
let number2 = 10;
let condition1 = (number1 > 0) && (number2 > 0 ); // true && true = true
console.log("condition1:",condition1);

let age = 25 
let gender = "female"
if (age >=18 && gender == "female") {
    console.log("คุณสามารถเข้าร่วมกิจกรรมได้");
}
*/

/**
while 
for
*/

/** 
let conter = 0;
while (conter <= 11){
    conter = conter + 1;
    console.log("while:",conter);
}

for (let i = 0; i <= 4; i++) {
    console.log("for:",i);
}
*/


/**
Array 
 
let age1 = 25;
let age2 = 30;
let age3 = 35;
console.log(age1,age2,age3); //25 30 35

let ages = [25,30,35];
console.log(ages); // (25,30,35)
console.log(age[1]); //30

//แทนค่าในอาเรย์
ages =[40,45,50];
console.log(ages); // (40,45,50)

//ต่ออาเรย์

//ลบสมาชิกตัวสุดท้ายของอาเรย์
ages.pop();
console.log(age); //[40,45,50]

if (ages.includes(45)){ //true
    console.log("พบ 45 ในอาเรย์"); //พบ 45 ในอาเรย์
}

let numbers = [90,60,80,40,50];
numbers.sort();
console.log(numbers); //[40,50,60,80,90]

let names = ["John","Jane","Doe"];
names.push("Smith");
console.log(names);
console.log(names.length);

for (let i = 0; i <= names.length; i++){
    console.log(names[1]);
}
*/

/**
Object
 */
/** 
let student = [{
    age: 20,
    name: "Emma",
    grade: "A"
},{
    age: 22,
    name: "Linn",
    grade: "B"
}];

for(let i =0; i < student.length; i++){
    console.log("Student"+(i + 1)+":");
    console.log("Name: "+ student[i].name);
    console.log("Age: "+student[i].age)
    console.log("Grade: "+student[i].grade)
}

student.push({
    age: 28,
    name: "Jane",
    grade: "A"
});
*/

/**
Function
 */
/** 
function calculate_grade(score){
    if (score >= 80){
        grade = "A";
    } else if (score >= 80){
        grade = "B";
    } else if (score >= 70){
        grade = "C";
    } else if (score >= 60){
        grade = "D";
    } else{
        grade = "F";
    }
    return grade;
}
//เรียกใช้function
let student_score = 85;
let student_grade = calculate_grade(student_score);
console.log("Student grade is: , student_grade);
*/

/** 
let score = [10,20,30,40,50,];
for (let i = 0; i < score.length; i++){
    console.log(`Score at index ${i} is ${(score[i])}`);
}

score = score.map((s) => {
    return $ * 2
})

score.forEach((s) => {
    console.log('score',s)
})
*/
/** 
let score = [10,20,30,40,50,];
for (let index = 0; index < score.length; index++){
    console.log('score',score[index])
    if (score[index] >= 30){
        newScore.push(score[index])
    }
}

let newScore = score.filter((s) => {
    return s >= 30  
})


console.log('newScore: ',newScore)

newScore.forEach((ns) => {
    console.log('new score: ',ns)
})
*/
/** 
let students = [
    {
        name: 'aa',
        score: '50',
        grade: 'A',
    },
    {
        name: 'bb',
        score: '60',
        grade: 'B',
    }
]
console.log('Student: ',students[0])

let student = students.find((s) => {
    if (s.name = 'bb'){
        return true
    }
})

let doublescore_student = students.map((s) => {
    s.score = s.score * 2
    return s 
})
console.log('student: ',student)
console.log(doublescore_student)

let highScore_student = students.filter((s) => {
    if (s.score >= 110){
        return true
    }
})
console.log('highScore_student',highScore_student)
*/
