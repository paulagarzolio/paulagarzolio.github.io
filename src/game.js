var Game={
	lives:3,
	livesDOM: 0,
	round: 0,
	level:0,
	db: [],
	domElement: 0,
	actualQuestion:0,
	file: "src/questions.txt",
	txt :"Cúal es la red social que daña mas la opinion que  los usuarios  tienen de su cuerpo?;Instagram;Facebook;Twitter;Snapchat;0$Cuanto años tengo?;1;2;3;4;0$Cuantas imágenes nuevas se suben cada hora a Instagram?;200 millones;10000; 10 millones; 500 mil;2",
	lastQuestion:0,

	initLives: function(){
		var src ="life.png"
		for(var i=0; i<3;i++){
			var live = document.createElement("img");
			live.className = "life";
			live.src = src;
			this.livesDOM.appendChild(live);
		}	
	},
	showCorrect: function(){
		var div=query("#Result");
		div.style.display="";
		div.style.backgroundColor= "rgba(250, 240, 187, 0.78)";
		div.style.color= "rgb(0, 157, 33)";
		div.children[0].innerHTML ="Correct. Well done!";
		div.children[1].src="correct.gif";
		div.children[1].style.width="750px"
	},
	showIncorrect: function(){
		var div=query("#Result");
		div.style.display="";
		div.style.backgroundColor= "rgba(250, 240, 187, 0.78)";
		div.style.color= "rgb(238, 38, 38)";
		div.children[0].innerHTML ="Incorrect :( Next time will be better!";
		div.children[1].src="incorrect.gif";
		div.children[1].style.width="550px"
	},
	incorrectAnswer: function(){
		this.lives--;
		var liveDOM = this.livesDOM.children[this.lives];
		liveDOM.src = "lostlife.png";
		this.db.initialState(this.level);
		this.level=0;
		
	},
	correctAnswer: function(){
		this.level++;
		this.db.goToLevel(this.level);

	},
	initGame: function(){
		this.db = new database();
		this.livesDOM=query("#Round1 #lifes");
		this.domElement=query("#Round1 .Questions");
		this.initLives();
		this.db.createLevels(["eagle","owl","peacock","swan","duck","pigeon","chicken","chick"]);
		this.initQuestions();
		this.db.initClassification();
		this.db.goToLevel(0);
		this.domElement.appendChild(this.db.initQuestionElement());
	},

	initQuestions: function(){
		var questions =this.txt.split(["$"]);
		this.lastQuestion=questions.length-1;
		for(var i=0; i<questions.length;i++){
			var strings = questions[i].split([";"]);
			var question = strings[0];
			var answers = strings.splice(1,4);
			this.db.addQuestion(question,answers,strings[1]);
		} 
	},

}
function showNextQuestion(){
	var div=query("#Result");
		div.style.display="none";
	if (Game.actualQuestion<Game.lastQuestion){
		var DOM = Game.db.questionDom;
		Game.actualQuestion=Game.actualQuestion+1;
		var question = Game.db.questions[Game.actualQuestion];
		question.assignDom(DOM);
	}
	else {
		console.log("Juego TERMINADO");
		initSecondGame();
	}

}
function showLevelUp(){
	var div=query("#NextQuestion");
	div.style.display="";
	var levels = query("#levels").cloneNode(true);
	div.appendChild(levels);
	div.children[0].innerHTML="QUESTION "+Game.actualQuestion;
	div.children[1].innerHTML="CATEGORIA";
}
function onClickAnswer(){
	var img = this.children[0];
	if(Game.db.questions[Game.actualQuestion].isCorrect(this.id)){
		img.src="correct.png";
		Game.correctAnswer();
		Game.showCorrect();
		setTimeout(showLevelUp,3000);
	}
	else {
		img.src="incorrect.png";
		Game.incorrectAnswer();
		Game.showIncorrect();
		setTimeout(showLevelUp,3000);
		
	}
	//setTimeout(showNextQuestion,3000);
	
	

}