// class user{
//   constructor(email,password){
//      this.email=email;
//      this.password=password;
//   }
//   get email(){
//     return this._email.toLowerCase();
//   }
//   set email(value){
// this._email=value;
//   }
// }
// const muzamil=new user('muzamil@gmail.com',34567)
// console.log(muzamil.email);


// const person = {
//   firstName: 'John',
//   lastName: 'Doe',

//   // Getter for fullName
//   get fullName() {
//     return `${this.firstName} ${this.lastName}`;
//   },

//   // Setter for fullName
//   set fullName(name) {
//     [this.firstName, this.lastName] = name.split(' ');
//   }
// };

// console.log(person.fullName); // John Doe
// person.fullName = 'Jane Smith';
// console.log(person.fullName); // Jane Smith
// console.log(person.firstName); // Jane
// console.log(person.lastName); // Smith

// const person = {
//   firstName: 'John',
//   lastName: 'Doe'
// };

// Object.defineProperty(person, 'fullName', {
//   // Getter
//   get() {
//     return `${this.firstName} ${this.lastName}`;
//   },
//   // Setter
//   set(name) {
//     [this.firstName, this.lastName] = name.split(' ');
//   },
//   enumerable: true,
//   configurable: true
// });

// console.log(person.fullName); // John Doe
// person.fullName = 'Jane Smith';
// console.log(person.fullName); // Jane Smith
// console.log(person.firstName); // Jane
// console.log(person.lastName); // Smith

// const user = {
//   _age: 0,
//   // Getter for age
//   get age() {
//     return this._age;
//   },
//   // Setter for age with validation
//   set age(value) {
//     if (value < 0) {
//       console.log('Age cannot be negative');
//     } else {
//       this._age = value;
//     }
//   }
// };
// user.age = 25;
// console.log(user.age); // 25
// user.age = -5; // Age cannot be negative
// console.log(user.age); // 25
