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

const longFunction = (x,y) => {
    const  sum = x+y;
    const diff = x-y;
    const result = sum*diff;
    return result;
}

const result = longFunction(6,7);
console.log(result);