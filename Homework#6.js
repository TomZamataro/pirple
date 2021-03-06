// Homework#6 of Keeping Up With The Javascripts: ES6 by Pirple.com

const isPrime = (n) =>
  {
    for (let i = 2; i < n; i++)
      {
        if (n % i === 0) return false;
        else return true;
      }
    if (n === 2) return true;
    return false; // if n == 1
  }

let txt = `\n`;
for (let i = 1; i <= 100; i++)
  {
    if (isPrime(i)) txt += "Prime\n"
    else if (i % 15 == 0) txt += "FizzBuzz\n";
    else if (i % 3 == 0) txt += "Fizz\n";
    else if (i % 5 == 0) txt += "Buzz\n";
    else txt += `${i}\n`;
  }
console.log(txt);
