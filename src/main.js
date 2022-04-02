
document.addEventListener('DOMContentLoaded',function(){
	init.initGame();
},false);

var init = {
	initGame: function(){
		console.log("Juego iniciado")
		initFirstScene();
	}
}

function query(selector) {
	return document.querySelector(selector);
}

function initFirstScene(){
	firstScene=query("#FirstScene");
	thirdScene = query("#ThirdScene");
	thirdScene.style.display="none";
	firstScene.style.display="block";
	body=query("body");
	body.style.background="url(GIF_b.gif)"
	body.style.backgroundSize="1450px auto";
	body.style.backgroundColor="#b4dfee";
	body.style.backgroundRepeat="no-repeat";
	body.style.backgroundPosition="center -65px";
	
}

document.getElementById("button1").addEventListener("click",initSecondScene);

function initSecondScene(){
	firstScene=query("#FirstScene");
	firstScene.style.display="none";
	secondScene=query("#SecondScene");
	secondScene.style.display="grid";
	body=query("body");
	body.style.background="url(fondoMistico2.jpg)";
	body.style.backgroundSize="100%";
	body.style.backgroundRepeat="no-repeat";
	body.style.backgroundPosition="center 0px";
	// initQuestions();
	Game.initGame();
	
}
function initThirdScene(){
	firstScene=query("#FirstScene");
	firstScene.style.display="none";
	secondScene = query("#SecondScene");
	thirdScene = query("#ThirdScene");
	secondScene.style.display="none";
	thirdScene.style.display="";
	body=query("body");
	body.style.background="url(fondoQuestion.jpg)";
	texts=["felt unhappy because of my number of likes in a photo", "unfollowed a public figure because I was envious of his life",
	"used photo retouching editors to modify something you don't like about your body","bought the samee clothes as an influencer to feel prettier"+
	"used a face filter because I thought I would appear niicer on a photo"]
	urls=["img/never1.png","img/never2.png","img/never3.png","img/never4.png","img/never5.png"];
	colors=["rgba(249, 216, 168, 0.97)","rgba(216, 249, 168, 0.97)","rgba(168, 216, 249, 0.97)"];
	Round2.init(urls,texts,colors);

}


