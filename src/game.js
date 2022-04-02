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
		this.livesDOM=query("#SecondScene #lifes");
		this.domElement=query("#SecondScene .Questions");
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
	if (Game.actualQuestion<Game.lastQuestion){
		var DOM = Game.db.questionDom;
		Game.actualQuestion=Game.actualQuestion+1;
		var question = Game.db.questions[Game.actualQuestion];
		question.assignDom(DOM);
	}
	else {
		console.log("Juego TERMINADO");
		initThirdScene();
	}

}
function onClickAnswer(){
	var img = this.children[0];
	if(Game.db.questions[Game.actualQuestion].isCorrect(this.id)){
		img.src="correct.png";
		Game.correctAnswer();
	}
	else {
		img.src="incorrect.png";
		Game.incorrectAnswer();
	}
	setTimeout(showNextQuestion,1000);
	
	

}