// Write a function that takes a string as 
// input and returns the number of vowels in the string in javascript.


function vowel(str){
    const count =str.match(/[a,e,i,o,u]/g, "").length
    return count;
  
  }
  let str="akiraChix"
  console.log(vowel(str))
  

//  Write a function that takes an array of numbers as
//  input and returns the sum of all the numbers in javascript.
function numArray(numbers){
    let sum =0;
    for(let i=0;i<numbers.length;i++){
        sum+=numbers[i]
    }
    return sum
}
const numbers=[30,20,10,40]
console.log(numArray(numbers))

// Write a function that takes two numbers in javascript as input and returns
//   true if their sum is greater than 100, and false otherwise.


function Numbers(num1,num2){
    let sum=num1+num2
    if(sum>100){
        return true
    }else{
        return false
    }
    
}
console.log(Numbers(40,50))


//  Write a function that takes in a array of numbers as a parameter and 
//  returns the second largest number in the array


// function number(arraynumbers){
//     array=[5,10,3,8];
//     let secondLargestNumber=findSecondLargest(array);
// }
// console.log(secondLargestNumber);


//Write a function that takes a string as a parameter and returns true if 
//the string is a palindrome and false otherwise

function palindrome(word){
    var string="dad".split("").reverse().join("")
    if(word==string){
        return "true"
    }else{
        return "false"
    }
}
console.log(palindrome("dad"))




