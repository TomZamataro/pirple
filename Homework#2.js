<!DOCTYPE html>
<!--
Created using JS Bin
http://jsbin.com

Copyright (c) 2021 by TomZamataro (http://jsbin.com/hozerib/1/edit)

Released under the MIT license: http://jsbin.mit-license.org
-->
<meta name="robots" content="noindex">
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>JS Bin</title>
</head>
<body>

<script id="jsbin-javascript">
/* 
Hoisting: hoiting is how and when, kinda of, javascript deals with declarations,
initializations, assignments and usage of variables, "he" by default aways moves all
the declarations to the top of the current scope, this being the top of the actual
code or the top of the current function, when compiling the code, before executing it.
Initializations, assignment and usage are compiled and executed in the order that they
appear in the code, so even tho it's a bad practice, you can declare a variable in the
very last line of your code, and it won't result in something like "x is not defined",
but if you try to use it before assigning or initializing it will probably not go the
way you wanted to go.

"Let", "const" and "var" are different ways to declare a variable, each with it owns
aspects, most of then at least, and each with a better context to be used,
"const" should be used every time you know that changing the value of the variable
won't be needed so that you don't run into problems by, e.g., forgeting this along
your code, and you have to initialize a "const" when declaring it, "let" should be
used when you know or don't know if it will be needed to change the value of the variable,
and "var", "var" - in ES6 at least - should never be used, in theory at least,
as it doesn't ofer any benefits or unique aspects.
*/

// const example:

checkIfBlueOrRed = function(pant)
{
  if(pant.toLowerCase() === "blue")
  {
    console.log("its a blue pant!!!");
  }
  else
  {
    console.log("its a red pant!!!");
  }
}
const pantsColor = "Blue";
checkIfBlueOrRed(pantsColor);

// let example:

anniversary = function()
{
  ageNow++;
}

isMinorInBrazil = function()
{
  if(ageNow >= 18)
    {
      console.log("no, you aren't a minor in Brazil");
    }
  else
    {
      console.log("yes, you are a minor in Brazil");
    }
}

let ageNow = 16;
isMinorInBrazil();
anniversary();
isMinorInBrazil();
anniversary();
isMinorInBrazil();

// var example:

var hairSizes = ["Short", "Medium", "Long"];
var hairTypes = ["Straight", "Curly"]
var someone = {
  name: "Camila",
  age: 17,
  skin: "White",
  hairSize: hairSizes[2],
  hairType: hairTypes[0],
}
console.log(someone.name + " is " + someone.age + ", has " + someone.skin + " skin and a " + someone.hairSize + " " + someone.hairType + " hair.");

</script>
</body>
</html>