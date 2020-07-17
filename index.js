var userName, submitbtn, randomNumber1 , randomNumber2, diceRoll;

submitbtn = document.getElementById("submitbtn");

submitbtn.addEventListener('click', function(){
	userName = document.querySelector(".userName input").value;

	if(userName.trim() === ""){
		alert("PLease enter your name first");
		return;
	}
	document.querySelectorAll(".dice p")[0].innerHTML= userName;
	document.querySelectorAll(".dice p")[1].innerHTML= "CPU";
});


diceRoll = document.querySelector(".dice .img1");

diceRoll.addEventListener('click', function(){

	if(userName.trim() === ""){
		alert("PLease enter your name first");
		return;
	}

	randomNumber1 = Math.floor(Math.random() * 6) + 1;
	var randomDiceImage = "dice"+ randomNumber1 + ".png";
	var randomDiceSource = "images/" + randomDiceImage;
	var image1 = document.querySelectorAll("img")[0];
	image1.setAttribute("src", randomDiceSource);


	randomNumber2 = Math.floor(Math.random() * 6) + 1;
	randomDiceImage = "dice"+ randomNumber2 + ".png";
	randomDiceSource = "images/" + randomDiceImage;
	var image2 = document.querySelectorAll("img")[1];
	image2.setAttribute("src", randomDiceSource)

	if(randomNumber1 > randomNumber2){
		document.querySelector("h1").innerHTML = userName + " wins 😉";
	}else if(randomNumber1 < randomNumber2){
		document.querySelector("h1").innerHTML = " You lost 😑";
	}else{
		document.querySelector("h1").innerHTML = "It's a draw !!";
	}
	

});



// result

