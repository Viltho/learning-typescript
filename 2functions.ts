// FUNCTIONS

let sayHi = () => {
    console.log("Hi, welcome")
}
// the declaration of a function is exactly the same as in JS
// so if we would use
// sayHi = "Hello"
// try uncommenting line 8 it will throw an error
// because it was declared before as a function
// ** if you point your mouse over sayHi it should say
// it points at void, meaning it has no return
sayHi() // it even works here when you call the function

// let us do a return function with declared return
let funcReturnString = ():string => {
    // console.log("first")
    let x = "ahmad"
    return x
}
// if you comment line 18-19 and uncommenting line 17 it
// will throw an error because in line 16 you declared that this
// function should return a string

// how about arguments you may ask
// let's declare a new function
let multiply = (num)=>{
    return num * 2
}
// if you point your mouse over num in the arguments it should
// say that num is of type any because it has no type
// but 
let multiply2 = (num: number)=>{
    return num * 2
}
// here in line 33 we assigned a type to the num making it only accepts
// an argument of a number, which is way better, but bare in mind
// we did not assign what type it should return, because typescript is smart
// to understand your code, if you point at multiply2 you should see
// => number which means it returns a number even if it is not declared
// but you can use a declaration of the following
let multiply3 = (num: number):number =>{ // < here we added the return type after the colon
    return num * 2
}
// you can also tell the function to do something but do not return anything
let multiply4 = (num: number): void =>{ 
    // return num * 2 // < here we added the return so this will throw an error
}

// let us try to add another parameter/argument
let sum = (num1: number, num2: number): number => { // i bet you understand the point here without an explanation
    // but just in case, num1 and num2 was declared as a number so if any other input it throws an error
    return num1 + num2
}
// so when we call the funciton sum it should have 2 parameters
sum(19, 20) // just like this
// sum("twenty", 12) // this will throw an error, try uncommenting and check
// you can do the exact same thing with variables in arguments
// if we need another argument but we are not sure, meaning optional
let sum2 = (num1: number, num2: number, num3?: number): number => {
    return num1 + num2
}
sum2(1, 2, 3) // even if you add the argument it will not throw an error
