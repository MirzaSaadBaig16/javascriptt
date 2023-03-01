// var tableNum =+prompt("table")

// for (a=1; a<=10; a++){
//     // console.log(tableNum +"*"+a+"="+tableNum*a)
//     document.write(`${tableNum} * ${a} = ${tableNum*a}<br/>`)
// }

// for(a=1; a<=15; a++){
//     document.write(`${a} , `)
// }

// for(a=10; a>0; a--)
// {
//     document.write(`${a} , `)
// }

// for(a=0; a<=20; a=a+2){
//     document.write(`${a} , `)
// }

// for(a=1; a<=20; a=a+2){
//     document.write(`${a} , `)
// }

// for(a=2; a<=20; a=a+2){
//          document.write(`${a}k, `)
//      }

// let bakeryItems =['cake', 'applepie', 'cookie', 'chips', 'patties']
// let item =prompt("")

// for(a=0; a<bakeryItems.length;a++)
// {
//         if (bakeryItems[a]==item){
//             console.log(`${item} is available at index ${a} in our bakery`)
//             break
//         }
//         else{
//             continue
//         }
       
// }

// console.log(`${item} is not available in our bakery`)

// let number =[22 , 54 , 66 , 91 , 86 , 102 , 11111]

// document.write(`Array items : ${number}`)

// let largestNumber = number[0]
// for(a=0; a<number.length; a++ ){
//     if(number[a]>largestNumber){
//         largestNumber=number[a]
//     }

// }
// console.log(largestNumber)

// let number =[22 , 54 , 66 , 91 , 86 , 12 , 4 , -10]

// let smallestNumber=number[0]

// for(a=0; a<number.length; a++){
//     if(number[a]<smallestNumber){
//         smallestNumber=number[a]
//     }
// }
// console.log(smallestNumber)


// for(a=5; a<=100; a=a+5){

//     console.log(a)
// }


// for (a=1;a<21;a++){
//     console.log(a*5)
// }

let val = prompt("Enter a character or a number ")

if ((val.charCodeAt() >=65) & (val.charCodeAt()<=90))
{
    console.log("Is is Upper Case Character")
}
else if ((val.charCodeAt()>=92) & (val.charCodeAt()<=122))
{
        console.log("It is a lower case character")
}
else if ((val.charCodeAt()>=48) & (val.charCodeAt()<=57))
{
console.log("It is a digit")
}
