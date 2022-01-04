
const myHeading = document.querySelector('h1');
const myButton = document.getElementById("addUserName");
const clearButton = document.getElementById("clear_btn")

myHeading.textContent = "hello world";

function setUserName(){
	let myName = prompt("set your name:")
	if(!myName){
		setUserName();
	}
	else{
		localStorage.setItem("name",myName);
		myHeading.textContent = 'Mozilla is cool, ' + myName;
	}
	
	
}

function clearUserName(){
	if(localStorage.getItem("name")){
		localStorage.clear("name");
	}
}

if (!localStorage.getItem("name")) {
	setUserName();
} else{
	let storeName = localStorage.getItem("name");
	myHeading.textContent = 'Mozilla is cool, ' + storeName;
}

myButton.onclick = function (){
	setUserName();
}
clearButton.onclick = function(){
	clearUserName();
}

let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'img/firefox.ico') {
      myImage.setAttribute('src','img/firefox2.ico');
    } else {
      myImage.setAttribute('src','img/firefox.ico');
    }
}


