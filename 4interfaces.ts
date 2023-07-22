// INTERFACES

// interfaces are like types but it is like an advanced version
// check this out
interface IUser { // here we did not put an equal sign like in type
    username: string;
    email: string;
    age: number;
}
// to compare, and you can usually forget this
// but interfaces, no equal sign
// type, equal sign
type UserType4 = {
    username: string,
    age: number,
    isAdmin: boolean,
    phone?: string
}

// why use interface when we can use type
// because of the following
interface Employee extends IUser {
    employeeId: number;
}
// interface is a smart way of managing users and more
// we can define a default interface for a user but then use the default user
// for other types of users in our projects like, clients, employees, staff
// in short Employee in line 22 has everything IUser have plus it has an emplyeeId

const emp: Employee = {
    username: "ahmad",
    email: "ahmadthebigboss@gmail.com",
    age:34,
    // if we close it here without an employeeId it will throw an error
    // because this is a declaration of an Employee not an IUser
    employeeId: 666,
}
// and since this is a different instance we can create a normal user this way
const client: IUser = {
    username: "ahmad",
    email: "ahmadthebigboss@gmail.com",
    age:34,
    // employeeId: 666, // then we won't be needing this line
}

