var Game={
	lives:3,
	livesDOM: 0,
	round: 0,
	level:0,
	language:"ESPAÑOL",
	points:0,
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
			 },
			 {
			 	question: "Cuál es el colectivo más afectado por los problemas relacionados con el Body Image?",
			 	answers: ["Chicas adolescentes","Mujeres","Hombres","Chicos adolescentes"],
			 	correct:0
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
		Game.correctAnswer();
		var div=query("#Result");
		div.style.display="";
		div.style.backgroundColor= "rgba(250, 240, 187, 0.78)";
		div.style.color= "rgb(0, 157, 33)";
		div.children[0].innerHTML ="Correcto. Muy bieen!";
		div.children[1].src="correct.gif";
		div.children[1].style.width="750px"
	},
	showIncorrect: function(){
		Game.incorrectAnswer();
		var div=query("#Result");
		div.style.display="";
		div.style.backgroundColor= "rgba(250, 240, 187, 0.78)";
		div.style.color= "rgb(238, 38, 38)";
		div.children[0].innerHTML ="Incorrecto... A la siguiente va la vencida";
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
		if(Game.round==1)setTimeout(Game.showPresentation2,4000);

		
	},
	showPresentation2: function(){
		var div=query("#Presentation");
		div.style.backgroundImage="none";
		var title = document.createElement("div");
		title.className="title";
		title.innerHTML="QUIÉN QUIERE SER INFLUENCER?";
		div.appendChild(title);
		Game.initGame();
		var message = document.createElement("div");
		message.innerHTML = "En esta prueba, deberás enfrentarte a una serie de preguntas en las que solo una respuesta es correcta. \
			        Tras cada pregunta irás subiendo de nivel, pero si te equivocas tendrás que volver a empezar y perderás todos los likes ganados. \
					Tendrás tan solo 3 vidas para poder demostrar cuanto sabes de redes sociales, Imagen Corporal, influencers... Aprovéchalas!";
		message.className="Info";
		message.style.gridColumn="1/2";
		div.appendChild(message);
		var classification=query("#levels").cloneNode(true);
		div.style.display= "grid";
		div.style.gridTemplateColumns= "1fr 1fr";
		classification.children[0].id="classification2";
		classification.style.gridColumn="2/3";
		classification.style.width="70%";
		classification.style.margin="auto";
		classification.style.marginTop="60px";
		classification.children[0].children[7].style.backgroundColor="#1064D4";
		div.appendChild(classification);
		speakDescription(message.innerHTML);
		setTimeout(function(){showLevelUp(1)},20000);
	},
	showNext:function(){
		query("#Presentation").style.display="none";
		query("#Round1").style.display="grid";
		body=query("body");
		body.style.background="url(fondoMistico2.jpg)";
		body.style.backgroundRepeat="no-repeat";
		body.style.backgroundPosition="center 0px";
		
	},
	initGame: function(){
		
		this.db = new database();
		this.livesDOM=query("#Round1 #lifes");
		this.domElement=query("#Round1 .Questions");
		this.initLives();
		this.db.createLevels(["1.000.000","500.000","100.000","50.000","10.000","1.000","500","50"]);
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
		div.children[0].innerHTML="QUESTION "+String(Game.actualQuestion);
		var level = Game.db.levels[7-Game.level];
		div.children[1].innerHTML="Por los "+level.name;


		setTimeout(showNextQuestion,3000);
	}
	else if(option==1) {
		Game.showNext()
		var div=query("#NextQuestion");
		div.style.display="";
		var levels = query("#levels").cloneNode(true);
		div.appendChild(levels);
		div.children[0].innerHTML="QUESTION "+String(Game.actualQuestion);
		var level = Game.db.levels[7-Game.level];
		div.children[1].innerHTML="Por los "+level.name+" likes!";

		setTimeout(function(){
			query("#NextQuestion").style.display="none";
		},3000);
	}
	else{
		console.log("Juego TERMINADO");
		Game.round=2;
		//query("#Presentation img").remove();
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
				intro: ["Felicidades, has llegado hasta los "+Game.db.levels[7-Game.level].name+" me gusta."],
				answers: ""
				
			},
			{
				intro: ["Has demostrado tener el conocimiento necesario para poder pasar a la siguiente ronda. "],
				answers: ""
			}
		]
			
	}
	Game.points=Game.db.levels[7-Game.level].name;
	Dialogue.messages=[];
	Dialogue.nextMessage=function(){
		var that= Dialogue;
		if(that.actualMessage==that.messages.length){
			Game.showPresentation();

			query("#Presentation").style.backgroundImage="url('round2.png')";
			query("#Presentation").children[0].remove();
			query("#Presentation").children[0].remove();
			query("#Presentation").children[0].remove();
			setTimeout(function(){
				var divPres = query("#Presentation");
				divPres.style.backgroundImage="none";
				var title = document.createElement("div");
				divPres.appendChild(title);
				title.innerHTML = "Yo Nunca Nunca";
				title.className="title";
				var text =document.createElement("div");
				text.innerHTML="En este reto deberás jugar al juego Yo Nunca Nunca. \nIrán apareciendo una serie de cartas con cosas que pueden o no habeertee pasado en redes sociales. Deberás arrastrar la carta a la derecha si las has hecho o hacia la izquierda si no.";
				text.className ="Info";
				text.style.top="5%";
				text.style.transform="translateY(50%)";	
				divPres.appendChild(text);
				speakDescription(text.innerHTML);
				setTimeout(initSecondGame,14000);

			},4000);
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
		setTimeout(function(){img.src="correct.png";},800);
		setTimeout(Game.showCorrect,2000);
		setTimeout(showLevelUp,5000);
	}
	else {
		setTimeout(function(){img.src="incorrect.png";},800);
		setTimeout(Game.showIncorrect,2000);
		setTimeout(showLevelUp,5000);
		
	}
	//setTimeout(showNextQuestion,3000);
}

function juegoTerminado(){
	console.log("Juego Terminado");
	query("body").style.backgroundImage="url('background.jpg')";
	query("#Round2").style.display="none";
	var div=query("#finalScreen").cloneNode(true);
	query("body").appendChild(div)
	div.style.display="";
	var contDiv= div.children[2];
	contDiv.children[1].innerHTML=Game.points+2000;
}