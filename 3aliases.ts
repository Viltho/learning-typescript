// lets talk about ALIASES

let func = (user: {
    username: string,
    age: number,
    isAdmin: boolean,
    phone?: string
}) => {
    console.log(user.username)
}

// notice that this function is not wrong but it is too long
// since we declared one variable user as an object
// and you are ought to work on various projects which will require objects
// so instead of writing it in this way
// we can simplify the work on TypeScript using the following Type Aliases:
type UserType = {
    username: string,
    age: number,
    isAdmin: boolean,
    phone?: string
}
// here we declared a new custom type called UserType which carries
// username, age, isAdmin, and an optional phone number as a string
// but when we create the above function again : (line 3-10)

let betterFunc = (user: UserType) => {
    // try it yourself!!, if you put a "." after the user in line 29 you will get
    // the options from inside the custom type above
    user
    // user.username = "ahmad" // like this for username in example
}

// now you can create a prototype type function then use it anywhere
// we can create multiple funcitons using it
// what do we mean by prototype type function ???
// it is a function but declared as a type and it can be used anywhere
// how ? check this
type myFunc = (a: number, b: string) => void // here we declared a new type
// and the arguement are 2 a & b and it returns void, meaning it returns nothing
// we can use it in this way
let write: myFunc = (number, string) => {
    console.log(number + " and " + string)
}
// why ? because we can use a default function in various places of our code

// let us try something new
type UserType2 = {
    username: string,
    age: number,
    phone?: string
    theme: "dark" | "light" // here we gave the UserType2 a new pick one from two option
}
// how can we use this ? let us try it out

const userWithTheme : UserType2 = {
    username: "abdullah",
    age: 30,
    theme: 
    // after theme if you put double quotation (shift and ') you will be provided with two options
    // "dark" or "light", try it out and you can not give it anything else unless you declare it
}
