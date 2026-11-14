//assignment1

//(1)
// let x = "123"
// x = Number(x)
// console.log(x +7 )
//Output is : 130

//(2)
// let x = 0
// if(!x){
//  console.log("Invalid");
// }else{
//     console.log("true number");
// }
//Output is : Invalid

//(3)
// for(let x=1; x <=10; x=x+2)
// console.log(x);
//Output is : 1 3 5 7 9

//(4)
// let x= [1,2,3,4,5]
// let evenNum = x.filter(function(num){
// return num %2 == 0;
// })
// console.log(evenNum);
//Output is :[2,4]

//(5)
// let x = [1,2,3]
// let y = [4,5,6]
// let sum = [...x,...y]
// console.log(sum);
//Output is :[1,2,3,4,5,6]

//(6)
// let x = 2
// switch(x){
//     case 1 :
//         console.log("sunday");
//         break;
//     case 2 :
//         console.log("monday");
//         break;
//     case 3 :
//         console.log("Tuesday");
//         break;
//     case 4 :
//         console.log("Wednesday");
//         break;
//         case 5:
//         console.log("Thursday");
//         break;
//     case 6 :
//         console.log("friday");
//         break;
//     case 7 :
//         console.log("Saturday");

//     }
//Output is monday

//(7)

// let x = ["a", "ab", "abc"]
// let newArray = x.map(function(x){
//     return x.length
// })
// console.log(newArray);
// Output is [ 1, 2, 3 ]

//(8)

// const x = (num) => {
//   if (num % 3 === 0 && num % 5 === 0) {
//     console.log("Divisible by both");
//   } else {
//     console.log("no Divisible by both");
//   }
// };
// x(15);
// Output is Divisible by both

//(9)

// const x=(num)=>{
//   return num*num
// }
// let rez= x(5)
// console.log(rez);
// Output is 25

//(10)

// const obj=(data)=>{
// const { name,age,gender,city} = data;
// return`my name is ${name} and im ${age} and iam ${gender} and live in ${city}`;
// }
// let data={
//   name: "ibrahim",
//   age: 23,
//   gender: "male",
//   city: "cairo"
// };
// console.log(obj(data));
//Output is =>  my name is ibrahim and im 23 and iam male and live in cairo

//(11)

// const sum = (a,b) => {
// return a+b
// };
// console.log(sum(5,5));
//Output is => 10

//(12)

// const larg=()=>{
//   let number =[1, 3, 7, 2, 4]
//   let maxNum =Math.max(...number)
//   return maxNum
// }
// console.log(larg());
//Output is => 7

//(13)
// let data={
//   name: "ibrahim",
//   age: 23,
//   gender: "male",
//   city: "cairo"
// };
//  const obj=(data)=>{
//    return Object.keys(data)
//  }
// console.log(obj(data));
////Output is =>  [ 'name', 'age', 'gender', 'city' ]

//(14)

// const arr=()=>{
//     let sp = "The quick brown fox"
//     let rez= sp.split(" ")
//     return rez
// }

// console.log(arr());
//Output is => ["The", "quick", "brown", "fox"]

//(15)
// const fn=()=>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("Success")
//         },3000)
//     }
// )
// }
// fn().then((result)=>{
//     console.log(result);
    
// })
//-----------------------------------------bouns---------------------------------------------------------
// var createCounter = function(init) {
//     let count =init;
//     return {
//         increment: function(){
//             count++
//             return count
//         },
//         decrement: function(){
//             count--
//             return count
//         },
//         reset: function(){
//             count=init
//             return count
//         }
//     }
// };
// const counter = createCounter(5);

// console.log(counter.increment());
// console.log(counter.decrement());
// console.log(counter.reset());

