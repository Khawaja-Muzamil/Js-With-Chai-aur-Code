// class user{
//   constructor(username,email,password){
//     this.username=username;
//     this.email=email;
//     this.password=password;
//   }
//   encryptpassword(){
//     return `${this.password}abc`
//   }
//   uname(){
//     return `${this.username.toUpperCase()}`
//   }
// }
// const chai=new user('khawaja','sdfghj@fgh.com','12345');
// console.log(chai.encryptpassword());
// console.log(chai.uname());

//class extends

// class user{
//   constructor(uname){
//     this.uname=uname;
//   }
//     Logme(){
//     console.log(`usename is ${this.uname}`);
//   }
// }

// class teacher extends user{
//   constructor(uname,email,password){
//     super(uname)
//     this.email=email;
//     this.password=password;

//   }
//   addcourse(){
//     console.log(`a new course was added by ${this.uname}`);
//   }
// }

// const chai=new teacher('muzamil','dfghj@fgh.com',456456);
// chai.addcourse();

// class user{
//   constructor(uname){
//     this.uname=uname;
//   }
//   logme(){
//     console.log(`username is ${this.uname}`);
//   }
//   static creatid(){ // static does not give  access of  the data insde it 
//     return `123`
//   }
// }
// // const muzi=new user('muzamil')
// // console.log(muzi.creatid());

// class teacher extends user{
//   constructor(uname,email){
//     super (uname)
//   this.email=email;
//   }
// }
// const techr=new teacher('fghjk','dfgh@fgh.com');
// techr.logme();
// // console.log(techr.creatid());

