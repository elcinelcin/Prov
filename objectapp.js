var obj = {
  greet : 'hello'
}
console.log(obj.greet);
console.log(obj['greet']);
var prop = 'greet';
//console.log(obj['greet']);
console.log(obj[prop]);
//arrays and functions
var arr = [];
arr.push(function(){
  console.log('Hello World 1');
});
arr.push(function(){
  console.log('Hello World 2');
});
arr.push(function(){
  console.log('Hello World 3');
});
arr.forEach(function(item){
  item();
});
