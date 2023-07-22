// GENERICS

// let us say that we want to create a post interface
// first lets declare an author interface
interface IAuthor {
    id: number;
    username: string;
}
// and a category 
interface ICategory {
    id: number;
    title: string;
}

interface IPost {
    id: number;
    title: string;
    desc: string;
    // here let us assume that we want to fetch 
    // the users or category via an API
    extra: IAuthor[] | ICategory[];
    // why this method ? because if in the future
    // we want to fetch the same data but with a new 
    // variable in instance ITag the line 21 is not practical
    // so instead we will use the following
}

interface IPostBetter<T> { // instead of T you can write anything you want
    // but most common is something similar to T
    id: number;
    title: string;
    desc: string;
    // but here for extra take the type as a parameter and use the T inside the <>
    extra: T[];
}

// let us try it out so we understand it better
const testMe : IPostBetter<string> = {
    id: 1,
    title: "post title",
    desc: "post desc",
    extra: ["string1", "string2"]
}

// we can even add something called limitation, let us create a new interface so you understand it
interface IPostEvenBetter <T extends object> { // here we extended T to be an object, 
    // so not only strings and numbers or booleans
    id: number;
    title: string;
    desc: string;
    extra: T[]; // wait for it
}

const testMe2 : IPostEvenBetter<string> = { // as you can see here it is giving an error
    // because it needs to be an object just like stated in line 46
    id: 1,
    title: "post title",
    desc: "post desc",
    extra: ["string1", "string2"]
}

// so lets say
const testMe3 : IPostEvenBetter<{id: number, username: string}> = {
    id: 1,
    title: "post title",
    desc: "post desc",
    // extra: ["string1", "string2"] // here we must give atleast one object with the same
    // data as given in line 63 otherwise it will throw an error
    extra: [{id: 1, username: "abdullah"}], // and this will not be a problem
}
// BUT !!! we can make it even better, how ? we can use 
// soemthing similar to IAuthor or ICategory instead of the object
// meaning

const testMe4 : IPostEvenBetter<ICategory> = {
    id: 1,
    title: "post title",
    desc: "post desc",
    extra: [{id: 1, title: "Category 1"}] 
    // and this should take the ICategory variables from line 10-13 only
}
// you use this when using it in React using states and hooks

// If you understand it till here it is going to be easy to apply in React and other frameworks using TypeScript