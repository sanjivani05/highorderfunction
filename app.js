
//// 1st///
var modifiedfood = [pizza,burger,fingerchips,donuts,springroll]
console.log(modifiedfood);
modifiedfood.splice(0,1);
modifiedfood.splice(3,1);
console.log(modified);


///2nd///
var modifiedfood = ["pizza","burger","fingerchips","donuts","springroll"]
console.log(modifiedfood);
//var newlist =modifiedfood.slice(1,4);//
//modifiedfood.splice(0,1);//
//modifiedfood.splice(3,1);//
modifiedfood.splice(2, 0,"noodles","icecream");
console.log(modifiedfood);


/////3rd///
numberArray = [12,324,213,4,2,3,45,42,34];
let evennum = numberArray.filter(function(num){
return num&0;
});

numberArray = [12,324,213,4,2,3,45,42,34];
let primenum = numberArray.filter(function(num){
return num&0;
});


//## Function #5: Lambda
const numberArray = [12, 324, 213, 4, 2, 3, 45, 4234];
 let iseven;
 for(var i=0;i<numberArray.length;i++)
 {
      var n=numberArray[i];
      iseven = n =>  (n%2 == 0);

 }

// Function #6: Map
​
 const myArray = [11, 34, 20, 5, 53, 16];
 var squarednum = myArray.map(function(item) {
     return item * item;
 });
 console.log(squarednum);
​
​
// Function #7: Reduce
​
const myArray = [11, 34, 20, 5, 53, 16];
 var squarednum = myArray.map(function(item) {
     return item * item;
 });
 console.log(squarednum);
 let sum = squarednum.reduce(function(initial, item) {
     return initial + item;
 });
 console.log(sum);
​
// compressed code
 let summed = myArray.map(function (item) {
     return item * item
 }).reduce(function (initial, item) {
     initial + item;
    }, 0);