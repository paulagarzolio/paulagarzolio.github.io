var Game={
	lives:3,
	livesDOM: 0,
	round: 0,
	level:0,
	language:"",
	db: [],
	domElement: 0,
	actualQuestion:0,
	file: "src/questions.txt",
	test: {
		ESPAÑOL: [
			{
				question: "Cúal es la red social que daña mas la opinion que  los usuarios  tienen de su cuerpo?",
				answers: ["Instagram","Facebook","Twitter","Snapchat"],
				correct:0
			},
			{
				question: "Cuántas imágenes nuevas se suben cada hora a Instagram?",
				answers: ["200 millones","10 mil","10 millones","500 mil"],
				correct:2
			}
		],
		ENGLISH: [
			{
				question: "Which social media endangers most the opinion that the users have from their own body?",
				answers: ["Instagram","Facebook","Twitter","Snapchat"],
				correct:0
			},
			{
				question: "How many images are uploaded every hour in Instagram?",
				answers: ["200 milion","10 thousand","10 milion","500 thousand"],
				correct:2
			}
		]

	},
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
		var questions =this.test[this.language];
		this.lastQuestion=questions.length-1;
		for(var i=0; i<questions.length;i++){
			var quest = questions[i];
			var question = quest.question;
			var answers = quest.answers;
			this.db.addQuestion(question,answers,quest.correct);
		} 
	},

}
function showNextQuestion(){
	var div=query("#Result");
	query("#NextQuestion").style.display="none";;
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
	div.children[0].innerHTML="QUESTION "+String(Game.actualQuestion+1);
	div.children[1].innerHTML="Nivel";
	var level = Game.db.levels[7-Game.level];
	div.children[2].src="src/levels/"+level.name +".png";
	setTimeout(showNextQuestion,3000);
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