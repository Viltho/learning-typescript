let variable = "hello"
// when you declare a variable in typescript
// the only type it takes is it's own declaration
// here variable only takes string
// meaning if we say variable = 18 it returns an error
// but if we say
variable = "hi"
// it is all good

let age = 18
// same thing here if we declare it with a number
// we can not assign it to a string
// since the name of the language TypeScript


let ageWithType: number;
// here is another way of declaring a form of type
// to a variable, where it only takes a declaration of
// only the number type
// so if we say ageWithType = "twenty" it returns an error
// but
ageWithType = 18
// in this line it is alright since 18 is exactly a number
// same thing with string and boolean
let testString: string; // < beware here we use colon to declare the type not "=" sing
let testBoolean: boolean; // < same here 

// you can only declare a variable to take only string or number or boolean in this form
let testStringOrNumber: string | number; // this is called Union Types
testStringOrNumber = 18
testStringOrNumber = "eighteen"
// testStringOrNumber = true
// try uncommenting line 32, it will throw an error, move your mouse
// over the variable testStringOrNumber it will say that it only takes
// number or string as an assignment

// ARRAYS
let names = ["james", "jane", "tom"] // bare in mind this array is only strings
// in the above array if are to push a number into the array
// an error will be shown
// names.push(18)
// try uncommenting line 41, and an error will be shown on number 18
// since it is a number not a string
names.push("twenty") // but here it doesn't since it is a string
// same thing with numbers arrays

// you can declare an array type before we start using it
let testStringArray: string[]; // here we declared the type of array before using
// and it will only take type of strings
// so if we use the following on the same array
// testStringArray = [1,2,3] it will throw an error
testStringArray = ["ahmad","mohammad","khalid"] // but here it is ok

// same thing with
let testNumberArray: number[];
let testBooleanArray: boolean[];

// you can use Union Type declaration for lists also
// meaning
let testNumberOrStringArray: (string | number)[]; 
// here we declare what we need in paranthesis, such as string and number
// and the following will be ok
testNumberOrStringArray = [1, "ahmad", 3]

// OBJECTS
let user = {
    username: "john",
    age: 20,
    isAdmin: false,
}
// bare in mind we did not declare anything for the object
// but TypeScript is smart enough to understand by itself
// that if i ever use the variable username it must be a string
// age variable must be a number, and isAdmin must be a boolean
// so if we change username like the following
user.username = "mohammad" // this doesn't throw an error
// user.age = true
// but if you uncomment line 77 it will throw an error since age is
// declared as a number and you are trying to push a boolean value

// if you try to add something new to the object after it has
// been declared it will not work unfortunately
// user.phone = "+962-78787878"
// try uncommenting line 83 and it will throw an error
// because user object in line 66 did not include phone inside of it

// how can declare an optional variable or key inside an object without values
let userObject: {
    username: string,
    age: number,
    isAdmin: boolean,
    phone?: string, // check here we added a quesiton mark after phone since 
    // we are not sure if we will use it or not
}

// ** bare in mind if you declare an object and you miss
// one of the variables/keys inside of it, it will throw an error
// userObject = {
//     username: "abdullah",
//     age: 30,
// }
// try uncommenting line 98-101 it will throw an error because 
// it is missing the isAdmin key which is missing in the object
// but if you add isAdmin and leave the phone which is optional like this
userObject = {
    username: "abdullah",
    age: 30,
    isAdmin: true
}
// it is totally fine because phone? is optional

// the ANY type
// what is the ANY type in TypeScript
// if you do not provide a value to the declaration like this
let admin; // if you point at the admin word with your mouse, 
// it will show you that admin is of any type,
// meaning it can take any value as a declaration
// P.S do not use it unless you are unsure of what type of data you are receiving
admin = "string"
admin = 18
admin = true
admin = []
// all of the above would work

// you can also declare an ARRAY with ANY type
let testAny: any[]
// here the array will take any type of values inside of it
testAny = [1, "ahmad", true, []] // < check here it will not throw an error
