//Loops

// var a = 23;
// var b = 24;
//
// if (a<b){
//   console.log("a is less than b");
//   console.info("a is a girl");
// }
//
// while (a < 28) { //infinite loop is bad!!!!
//   console.log(a);
//   a++;
// }
//
// do {
//   console.info('do loop');
//   console.log(b);
//   b++;
// } while (b<50);
//
// for (var c = 5 ; c < 20 ; c++) {
//   console.info('for loop');
//   if (c == 14){
//     break;
//   }
// }

//Functions

// function myFunction( x,y ){
//   var myVar = x * y;
//   console.log(myVar);
//   return myVar;
// }
//
// myFunction(10,12);
//
// function simpleFunction(){
//   alec=23;
//   console.log(alec);
// }
//  simpleFunction();

//Arrays

// var singleValue;
// singleValue = 100;
//
// var multipleValues = [10, 20, "WYA", "WBY"];
//
// console.log(multipleValues.length);
//
// var reversedValues = multipleValues.reverse();

// var today = new Date();
// var y2k = new Date(2000, 0 , 1);
// today.getMonth();
// today.getFullYear();
//
// console.log( 'new year on:', today.getDay());

// var player = new Object();
// player.name = 'fred';
// player.score = 100;
// player.rank = 3;
//
// var player1 = { name: 'Alec', score: 1000, rank:1};
//
// function playerDetails() {
//   console.log(this.name + ' has a rank of:' + this.rank +'and a score of' + this.score);
// }
//
// player.logDetails = playerDetails;
// player1.logDetails = playerDetails;
//
// player1.logDetails();

// var myNavBar = document.getElementsByTagName('navigation');
// console.log('links: ', myNavBar.length);
//
// console.log('this is an element of type: ', myNavBar.nodeType);
// console.log('the Inner HTML is ' , myNavBar.innerHTML);
// console.log('Child Nodes:', myNavBar.childNodes.length);

//needs work!
var newParagraph = document.createElement('p');
var paraText = document.createTextNode('some text for my practice');
newParagraph.appendChild(paraText);
document.getElementById(paragraph).appendChild(newParagraph);
