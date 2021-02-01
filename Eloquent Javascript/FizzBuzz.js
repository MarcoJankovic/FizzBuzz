 counter = " Pyramide";
for (var testing = "#"; testing.length < 10; testing = testing + "#") {
    console.log(testing + counter);
}



counter = " Pyramide";
for (var testing = "#"; testing.length < 10; testing += "#") {
    console.log(testing + counter);
}





for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0 ) {
         console.log("FizzBuzz");
    }
      else if (i % 5 === 0){
         console.log("Buzz");
      }
      else if (i % 3 === 0){
         console.log("Fizz");
      }
      else {
      console.log(i);
      }
  } 