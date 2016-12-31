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

//needs help!!!!
// var newParagraph = document.createElement('p');
// var paraText = document.createTextNode('some text for my practice');
// newParagraph.appendChild(paraText);
// document.getElementById(paragraph).appendChild(newParagraph);


//event handlers
// home.onclick = function() {
// };
// document.addEventListener('onHover', myfunction, false);

// document.onclick = function() {
//   alert("you clicked a thing");
// };

// function prepareEventHandlers() {
//   var homeNav = document.getElementById("home");
//   homeNav.onClick = function() {
//     alert('you clicked home');
//   };
// }

// function simpleMessage() {
//   alert('I set timeout message');
// }
// setTimeout(simpleMessage, 3000);

//changing an image
// var myImage = document.getElementById('mainImage');
//
// var imageArray = ["_images/water.jpg","_images/fire.jpg","_images/earth.jpg"];
// var imageIndex = 0;
//
// function changeImage() {
//   myImage.setAttribute('src',imageArray[imageIndex]);
//   imageIndex++;
//   if (imageIndex >= imageArray.length) {
//     imageIndex = 0;
//   }
// }
//
// var intervalHandle = setInterval(changeImage,5000);
