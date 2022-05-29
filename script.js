function Fizzbuzz(number){
   

    for (let number = 0; number <= 100; number++) { 
    if (number%3 ==0 && number%5==0 )
  console.log("FizzBuzz");
    if (number%3 ==0 )
    console.log("Fizz");
    if (number%5 ==0 )
    console.log("Buzz");
    else {
        console.log("number");
    }

    }}

Fizzbuzz(3);