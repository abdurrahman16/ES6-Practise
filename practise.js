// const firstName = "Justin"
// const lastName = "kala";
// const fullName = firstName+' '+lastName;
// const fullName2 = `${firstName}${lastName} is a goof boy.`; //tempalte



// const multiLine = `I know your
// hello koi jao
// ami r jabona.`;
// console.log(multiLine); //carret sign


// const doubleIt = function(num){
//     return num*2;
// }

// const doubleIt = num => num*2 // function name , parameter => statement

// const result = doubleIt(5);
// console.log(result);

// const longFunction = (x,y) => {
//     const  sum = x+y;
//     const diff = x-y;
//     const result = sum*diff;
//     return result;
// }

// const result = longFunction(6,7);
// console.log(result);


// const ages =[11,14,16,12,18];
// const ages2 =[22,12,14,17,19];
// const ages3 =[22,45,19,71,29];


// const allAges =ages.concat(ages2).concat(ages3);
// const allAges3 = [...ages,...ages2,...ages3,1000];
// console.log(allAges3);

// const TakaPoisha = ['12','190','99900'];
// const result = Math.max(...TakaPoisha); //' using 3 dots
// console.log(result);

// class student {

// constructor(sId,sName){
//     this.id = sId;
//     this.name = sName;
//     this.name2 = "khalamma";
// }

// }

// const student1 = new student(1,"mahi");
// const student2 = new student(2,"mahiya");
// const student3 = new student(3,"bappi");

// console.log(student3);

// class parent {
//     constructor(){
//         this.fatherName ="baba";
//     }
// }

// class child extends parent {
//     constructor(name){
//         super();
//         this.name = name;
//     }

//     getFullName (){
//         return this.name + ' '+ this.fatherName;
//     }
// }

// const baby = new child ("Arnold");
// const baby2 = new child ("Tom");
// console.log(baby.getFullName());
// console.log(baby2);


const person ={name: 'Jack Ma', age:12, job:'fb',gfName:'ruba'};

const {age} =person;




const gfName = person.gfName;
// // const job = person.job;
// // console.log(gfName, job);
console.log(gfName, age);