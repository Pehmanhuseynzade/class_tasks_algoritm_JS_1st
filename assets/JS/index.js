//Task1

// function myfunction(num, word) {
//      for(let i=0;i<num;i++){
//        console.log(word)
//      }
//    }
//    myfunction(5,"salam")

//Task2

// function myfunction(a,b){
//      sahe = a*b
//      perimetr = (a*2)+(b*2)
//      return sahe,perimetr
// }
// myfunction(4,5)
// console.log("sahe:",sahe,"perimetr: ",perimetr)

//Task3

// function myfunction(num){
//      if(num%2==0){
//           return "cutdur"
//      }
//      else{
//           return "tekdir"
//      }
// }
// console.log(myfunction(4))

//Task4

// function myfunction(age,pensiya_age){
//      if(age<pensiya_age){
//           pensiya_age-=age
//           return `Pensiyaya cixmaniza ${pensiya_age} il qalib`
//      }
//      else if(age==pensiya_age){
//           return "Tebrikler!Pensiya yasindasiniz"
//      }
//      else if(age>pensiya_age){
//           age-=pensiya_age
//           return `Sizin pensiya yasindan ${age} il kecib,gedin pensiyanizi alin`
//      }
// }
// console.log(myfunction(100,65))

//Task5

// function myfunction(riy,fiz,kim,bio,eng){

//      result = (riy+fiz+kim+bio+eng)/5;
//      return result;
// }
// console.log(myfunction(10,9,8,7,9));

//Task6

// function myfunction(num1,num2){
//      if (num1>num2){
//           return `${num1} boyukdur ${num2}den`
//      }
//      else{
//           return `${num2} boyukdur ${num1}den`
//      }
// }
// console.log(myfunction(8,9))

//Task7

// function myfunction(num1,num2){

//           return num1**num2
// }
// console.log(myfunction(2,3))

//Task8

// function myfunction(a,b,c){
//      if(a==b && a!=c && b!=c){
//           return "Beraberyanli"
//      }
//      else if(a==b==c){
//           return "beraberyanli"
//      }
//      else{
//           return "muxtelifterefli"
//      }
// }
// console.log(myfunction(3,4,5))

//Task9
// function myfunction(){
//      sum = 0
//      for(let i=1;i<10;i++ ){
//           sum+=i
//      }
//      return sum
// }
// console.log(myfunction())

//Task10

// function myfunction(name){
//      return "salam"+" "+name
// }
// console.log(myfunction("Pehman"))

//Task11

// function myfunction(num){
//      if (num>10){
//           return `${num} boyukdur 10 dan`
//      }
//      else{
//           return `10 boyukdur ${num}`
//      }
// }
// console.log(myfunction(8))

//Task12

// function myfunction(num1,num2,num3){
//      result = num1*num2*num3
//      if(result<0){
//           return "menfidir"
//      }
//      else if (result>0){
//           return "musbetdir"
//      }
//      else {
//           return "0"
//      }
// }
// console.log(myfunction(23,21,12))

//Task13

// function myfunction(num){
//      if(num%5==0){
//           return "5 e bolunur"
//      }
//      else{
//           return "5 e bolunmur"
//      }
// }
// console.log(myfunction(100))

//Task 14

// function myfunction(){
//      for(let i=1;i<=15;i++){
//           if(i%3==0){
//                console.log(i)
//           }
//      }
// }
// myfunction()

// Task 15

function myfunction(a,b,c){
     if (b<c && a<b){
          return "b yaxindir"
     }
     else if(b>c && a<b){
          return "b yaxindir"
     }
     else if(a>b && c>a){
          return "a yaxindir"
     }
}