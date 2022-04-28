var Game={
	lives:3,
	livesDOM: 0,
	round: 0,
	level:0,
	language:"ESPAÑOL",
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
			}// },
			// {
			// 	question: "Cuántas imágenes nuevas se suben cada hora a Instagram?",
			// 	answers: ["200 millones","10 mil","10 millones","500 mil"],
			// 	correct:2
			// },
			// {
			// 	question: "Cuál es el colectivo más afectado por los problemas relacionados con el Body Image?",
			// 	answers: ["Chicas adolescentes","Mujeres","Hombres","Chicos adolescentes"],
			// 	correct:0
			// }
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
	showPresentation: function(url){
		var div=query("#Presentation");
		query("#Round1").style.display="none";
		div.style.display="";
		div.style.backgroundImage="url('"+url+"')";
		var body = query("body");
		body.style.background="#D7BCFD";
		div.style.backgroundSize="850px";
		div.style.backgroundPosition="center 20px";
		
	
	},
	showNext:function(){
		query("#Presentation").style.display="none";
		query("#Round1").style.display="grid";
		Game.initGame();
	},
	initGame: function(){
		body=query("body");
		body.style.background="url(fondoMistico2.jpg)";
		body.style.backgroundSize="100%";
		body.style.backgroundRepeat="no-repeat";
		body.style.backgroundPosition="center 0px";
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
	var DOM = Game.db.questionDom;
	Game.actualQuestion=Game.actualQuestion+1;
	var question = Game.db.questions[Game.actualQuestion];
	question.assignDom(DOM);


}
function showLevelUp(option){
	if(Game.actualQuestion<Game.lastQuestion && !option) {
		var div=query("#NextQuestion");
		div.style.display="";
		var levels = query("#levels").cloneNode(true);
		div.appendChild(levels);
		div.children[0].innerHTML="QUESTION "+String(Game.actualQuestion+2);
		div.children[1].innerHTML="Nivel";
		var level = Game.db.levels[7-Game.level];
		div.children[2].src="src/levels/"+level.name +".png";

		setTimeout(showNextQuestion,3000);
	}
	else if(option==1) {
		Game.showNext()
		var div=query("#NextQuestion");
		div.style.display="";
		var levels = query("#levels").cloneNode(true);
		div.appendChild(levels);
		div.children[0].innerHTML="QUESTION "+String(Game.actualQuestion+1);
		div.children[1].innerHTML="Nivel";
		var level = Game.db.levels[7-Game.level];
		div.children[2].src="src/levels/"+level.name +".png";
		setTimeout(function(){
			query("#NextQuestion").style.display="none";
		},3000);
	}
	else{
		console.log("Juego TERMINADO");
		query("#Presentation img").remove();
		//Game.showPresentation("round2.png");
		
		setTimeout(showResults,4000);
	}
	
	
	
	
}
function showResults(){
	var div = document.createElement("div");
	var div2=document.createElement("div");
	var level=document.createElement("div");
	level.id="levelRound1";
	level.innerHTML = "Level";
	level.style.fontSize="30px";
	div.id="Classification";
	div2.id ="leftPicture";
	var image = document.createElement("img");
	image["src"]="results.png";
	var avatar = query(".avatar_").cloneNode();
	avatar["src"]="avatars/avatar2.png";
	avatar.style.height= "55%";
	avatar.style.marginTop= "20px";
	avatar.style.left= "50%";
	avatar.style.transform="translateX(-50%)";
	avatar.style.position="absolute";
	avatar.style.zIndex= "2";
	image.style.height="100%";
	image.style.zIndex ="1";
	image.style.position="absolute";
	query("#Round1").appendChild(div);
	div2.appendChild(image);
	div2.appendChild(level);
	div2.appendChild(avatar);
	div.appendChild(div2);
	query("#Result").style.display="none";
	var dialogues = {
		ESPAÑOL: [
			{
				intro: ["Felicidades, has llegado hasta el nivel."],
				answers: ""
				
			},
			{
				intro: ["Has demostrado tener el conocimiento necesario para poder pasar a la siguiente ronda. "],
				answers: ""
			}
		]
			
	}
	Dialogue.messages=[];
	Dialogue.nextMessage=function(){
		var that= Dialogue;
		if(that.actualMessage==that.messages.length){
			Game.showPresentation();
			query("#Presentation").style.backgroundImage="url('round2.png')";
			setTimeout(initSecondGame,4000);
			return
		}
		var actMessage=that.messages[that.actualMessage];
		var actualQ = actMessage.actualQuestion;
		if(!actualQ){
			var id = this.id;
			actMessage.actualQuestion=actMessage.questions[id];
		}
		var prev= that.actualMessage-1;
		if(that.actualMessage-1>=0){
			var prev_message=query("#story").children[prev];
			if(that.messages[prev].answers.length>0){
				prev_message.children[2].remove();
				prev_message.children[1].remove();
			}
			prev_message.style.opacity="0.6";

		}
		else if (prev>=0 && that.messages[prev].answers.length==0) query("#story").children[prev].children[1].remove();
		var message = that.setMessages();
		++that.actualMessage;
		
	
	}
	Dialogue.showAvatars=function(){
		setTimeout(Dialogue.nextMessage,5500);
	};
	var story=query("#story").cloneNode();
	story.style.marginLeft= "460px";
	var prevStory=query("#story")
	prevStory.remove();
	div.appendChild(story);
	Dialogue.init(dialogues);

	
	
}
function onClickAnswer(){
	var img = this.children[0];
	if(Game.db.questions[Game.actualQuestion].isCorrect(this.id)){
		img.src="correct.png";
		Game.correctAnswer();
		setTimeout(Game.showCorrect,2000);
		setTimeout(showLevelUp,5000);
	}
	else {
		img.src="incorrect.png";
		Game.incorrectAnswer();
		setTimeout(Game.showIncorrect,2000);
		setTimeout(showLevelUp,5000);
		
	}
	//setTimeout(showNextQuestion,3000);
	
	

}