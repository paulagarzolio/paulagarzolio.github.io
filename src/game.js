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
	test: {
		ESPAÑOL: [
			{
				question: "¿Cuál es la red social que daña más la opinión que  los usuarios  tienen de su cuerpo?",
				answers: ["Instagram","Facebook","Twitter","Snapchat"],
				correct:0
			 },
			 {
				question: "¿Cuál es el símbolo de los likes en Instagram?",
				answers: ["Pulgar","Corazón","Estrella","Ninguno de los anteriores"],
				correct:1
			 },
			 {
				question: "¿Cuántos usuarios activos hay en Instagram hoy en día?",
				answers: ["100 mil","45 millones","3.6 billones","45 billones"],
				correct:2
			 },
			 {
				question: "¿Qué porcentaje de usuarios crees que usan filtros o editan sus fotos antes de publicarlas?",
				answers: ["10%","90%","60%","2%"],
				correct:2
			 },
			 
			 {
			 	question: "¿Cuántas imágenes nuevas se suben cada hora a Instagram?",
			 	answers: ["200 millones","10 mil","10 millones","500 mil"],
			 	correct:2
			 },
			 {
			 	question: "¿Cuál es el colectivo más afectado por los problemas relacionados con una mala imagen corporal?",
			 	answers: ["Chicas adolescentes","Mujeres","Hombres","Chicos adolescentes"],
			 	correct:0
			},
			{
				question: "¿Cuál es la media de tiempo que un usuario gasta en Instagram?",
				answers: ["2 horas","20 min","5 horas","53 minutos"],
				correct:3
		   },
		   {
				question: "¿Cuál es el principal trastorno que se ve afectado por una mala percepción de la imagen corporal?",
				answers: ["Depresión","Trastornos alimentarios","Hiperactividad","Ansiedad"],
				correct:1
	  	  },
			{
				question: "¿Qué porcentaje de mujeres crees que se sienten descontentas con su cuerpo y hacen dietas para conseguir su ideal de imagen corporal?",
				answers: ["40%","70%","20%","91%"],
				correct:3
			},
			{
				question: "¿Cuál de las siguientes redes sociales tiene un efecto positivo en la salud mental de los jóvenes?",
				answers: ["Snapchat","TikTok","Youtube","Instagram"],
				correct:2
			},
			{
				question: "¿Qué partes del cuerpo son las más retocadas por los usuarios?",
				answers: ["Imperfecciones en la piel","Forma de la cara","Pelo","Ojos"],
				correct:0
			 },
			 {
				question: "¿Cuál es el origen de la red social TikTok?",
				answers: ["España","Estados Unidos","China","Japón"],
				correct:2
			 },
			 {
				question: "¿Quién es la persona con más seguidores en Instagram?",
				answers: ["Kylie Jenner","Cristiano Ronaldo","Leo Messi","Dulceida"],
				correct:1
			 },
			 {
				question: "¿Quién es el dueño de Facebook, Instagram y WhatsApp?",
				answers: ["Mark Zuckerberg","Steve Jobs","Leo Messi","Elon Musk"],
				correct:0
			 },
			 {
				question: "¿En qué año se lanzó la plataforma Instagram?",
				answers: ["2014","2003","2017","2010"],
				correct:3
			 },
			 {
				question: "¿Qué tipo de contenido recibe más likes y comentarios en el caso del género masculino?",
				answers: ["Musculatura y delgadez","Fotos de comida","Selfies","Fotos de viajes"],
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
				question: "What is the symbol of likes on Instagram?",
				answers: ["Thumbs up","Heart","Start","None of the previous"],
				correct:1
			 },
			 {
				question: "How many active users does Instagram have?",
				answers: ["100 mil","45 million","3.6 billion","45 billion"],
				correct:2
			 },
			 {
				question: "What percentage of users use filters or edit their photos before publishing them?",
				answers: ["10%","90%","60%","2%"],
				correct:2
			 },
			 
			 {
				question: "How many images are uploaded every hour in Instagram?",
				answers: ["200 milLion","10 thousand","10 milLion","500 thousand"],
				correct:2
			},
			 {
			 	question: "Who is most affected by the problems related to Body Image?",
			 	answers: ["Teenage girls","Women","Men","Teenage boys"],
			 	correct:0
			},
			{
				question: "What is the average time a user spends on Instagram?",
				answers: ["2 hours","20 min","5 hours","53 min"],
				correct:3
		   },
		   {
				question: "What is the main disorder that is affected by a poor perception of body image?",
				answers: ["Depression","Eating disorders","Hyperactivity","Anxiety"],
				correct:1
	  	  },
			{
				question: "What percentage of women are dissatisfied with their body and go on diets to achieve their ideal body image?",
				answers: ["40%","70%","20%","91%"],
				correct:3
			},
			{
				question: "Which of the following social media has a positive effect on the mental health of young users?",
				answers: ["Snapchat","TikTok","YouTube","Instagram"],
				correct:2
			},
			{
				question: "Which parts of the body are the most retouched by users?",
				answers: ["Skin imperfections","Face shape","Hair","Eyes"],
				correct:0
			 },
			 {
				question: "What is the origin of TikTok?",
				answers: ["Spain","United States","China","Japan"],
				correct:2
			 },
			 {
				question: "Who has the most number of followers on Instagram?",
				answers: ["Kylie Jenner","Cristiano Ronaldo","Leo Messi","Dulceida"],
				correct:1
			 },
			 {
				question: "Who is the owner of Facebook, Instagram, and WhatsApp?",
				answers: ["Mark Zuckerberg","Steve Jobs","Leo Messi","Elon Musk"],
				correct:0
			 },
			 {
				question: "When was Instagram first launched?",
				answers: ["2014","2003","2017","2010"],
				correct:3
			 },
			 {
				question: "What kind of content receive the most number of likes and comments in men's posts?",
				answers: ["Muscularity and leanness","Food photos","Selfies","Travel photos"],
				correct:0
			 }
			 
			

		]

	},
	lastQuestion:0,

	initLives: function(){
		var src ="content/life.png"
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
		var resLang = {
			ESPAÑOL:"Correcto. Muy bien!",
			ENGLISH: "Correct. Very good!"
		}
		div.children[0].innerHTML =resLang[Game.language];
		div.children[1].src="content/correct.gif";
		div.children[1].style.width="750px"
	},
	showIncorrect: function(){
		Game.incorrectAnswer();
		var div=query("#Result");
		div.style.display="";
		div.style.backgroundColor= "rgba(250, 240, 187, 0.78)";
		div.style.color= "rgb(238, 38, 38)";
		var resLang = {
			ESPAÑOL:"Incorrecto... A la siguiente va la vencida!",
			ENGLISH: "Incorrect... Try again!"
		}
		div.children[0].innerHTML =resLang[Game.language];
		div.children[1].src="content/incorrect.gif";
		div.children[1].style.width="550px"
	},
	incorrectAnswer: function(){
		var total_levels = this.db.levels.length-1
		var actualLevel=total_levels-this.level;
		this.level=0;
		var levelsDOM=query("#NextQuestion #classification");
		var index=0;

		for (var i=actualLevel; i<total_levels;i++){
			var level = i;
			var time=4200+1000*(index);
			Game.delay(levelsDOM.children[level],time)
			index++;
		}
		setTimeout(function(){
			Game.db.initialState(Game.level);
			Game.lives--;
			var liveDOM = Game.livesDOM.children[Game.lives];
			liveDOM.src = "content/lostlife.png";
			if(Game.lives==0){
				console.log("Juego TERMINADO");
				Game.round=2;
				setTimeout(showResults,3000);
			}

		},4000);
		
	},
	delay: function(div,time){
		setTimeout(function(){Game.setColor(div);},time);
	},
	setColor:function(div){
		div.style.backgroundColor="#1064D4"
	},
	correctAnswer: function(){
		this.level++;
		var total_levels = this.db.levels.length-1
		var level = total_levels-this.level;
		if(this.level>total_levels){
			console.log("Juego TERMINADO");
			Game.round=2;
			setTimeout(showResults,3000);
			return
		}
		var levelsDOM=query("#NextQuestion #classification");
		setTimeout(function(){levelsDOM.children[level].style.backgroundColor="#1ABFB5";},4200);
		setTimeout(function(){Game.db.goToLevel(Game.level)},4000);

	},
	showPresentation: function(url){
		var audio1 = document.createElement('audio');
		query("body").appendChild(audio1);
		audio1.src= "content/presentacion.mov";
		audio1.id="audioPresentation";
		audio1.loop = false;
		audio1.play();
		var div=query("#Presentation");
		query("#Round1").style.display="none";
		div.style.display="";
		div.style.backgroundImage="url('"+url+"')";
		var body = query("body");
		body.style.background="#D7BCFD";
		div.style.backgroundSize="850px";
		div.style.backgroundPosition="center 20px";
		if(Game.round==1)setTimeout(function(){
			query("#audioPresentation").pause();
			query("#audioPresentation").remove();
			Game.showPresentation2();
		},6000);

		
	},
	showPresentation2: function(){
		var div=query("#Presentation");
		div.style.backgroundImage="none";
		var title = document.createElement("div");
		title.className="title";
		var titleLang = {
			ESPAÑOL: "QUIÉN QUIERE SER INFLUENCER?",
			ENGLISH: "WHO WANTS TO BE AN INFLUENCER?"
		}
		title.innerHTML=titleLang[Game.language];
		div.appendChild(title);
		Game.initGame();
		var message = document.createElement("div");
		var mess = {
			ESPAÑOL:  'En esta prueba deberás enfrentarte a una serie de preguntas en las que solo una respuesta es correcta. \
			Tras cada pregunta irás subiendo de nivel, pero si te equivocas tendrás que volver a empezar y perderás todos los "me gusta" ganados. \
			Tendrás únicamente 3 vidas para poder demostrar cuanto sabes de redes sociales, Imagen Corporal, influencers... Aprovéchalas!',
			ENGLISH: 'In this challenge, you will have to answer some questions in which only one answer is correct. If you answer correctly the questions \
			you will scale to the next level, but if you fail you will have to restart and lose all the likes. You will have only 3 lives to demonstrate\
			 how much you know about social media, body image, influencers, etc.'
		};
		message.innerHTML = mess[Game.language];
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
		classification.style.marginTop="0px";
		classification.children[0].children[7].style.backgroundColor="#1064D4";
		div.appendChild(classification);
		speakDescription(message.innerHTML);
		setTimeout(function(){
			var div=query("#NextQuestion");
			var levels = query("#Round1 #levels").cloneNode(true);
			div.appendChild(levels);
			div.children[0].style.width= "90%";
			div.children[0].style.transform="translateX(100%)";
			div.children[0].marginLeft="120px";
			Game.showNext(); } ,20000);
	},
	showNext:function(){
		query("#Presentation").style.display="none";
		query("#Round1").style.display="grid";
		body=query("body");
		body.style.background="url(content/fondoMistico2.jpg)";
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
		var finalList = questions.sort(function(){return Math.random()-0.5});
		finalList=finalList.splice(0,12)
		this.lastQuestion=finalList.length-1;
		for(var i=0; i<finalList.length;i++){
			var quest = finalList[i];
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
function showLevelUp(time=0){
	if(Game.actualQuestion<Game.lastQuestion) {
		var div=query("#NextQuestion");
		div.style.display="";
		setTimeout(showNextQuestion,3000+time);
	}

	else{
		console.log("Juego TERMINADO");
		Game.round=2;
		
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
	image["src"]="content/results.png";
	var avatar = query(".avatar_").cloneNode();
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
	var likes;
	if(Game.level==0)likes= 0;
	else likes= Game.db.levels[8-Game.level].name;
	var dialogues = {
		ESPAÑOL: [
			{
				intro: ["Felicidades, has llegado hasta los "+likes+" me gusta."],
				answers: ""
				
			},
			{
				intro: ["Has demostrado tener el conocimiento necesario para poder pasar a la siguiente ronda. "],
				answers: ""
			}
		],
		ENGLISH: [
			{
				intro: ["Congratulations, you have gained "+likes+" likes."],
				answers: ""
				
			},
			{
				intro: ["You have proven your knowledge is enough to go to the next round. "],
				answers: ""
			}
		]
			
	}
	Game.points=likes;
	Dialogue.messages=[];
	Dialogue.nextMessage=function(){
		var that= Dialogue;
		if(that.actualMessage==that.messages.length){
			Game.showPresentation();

			query("#Presentation").style.backgroundImage="url('content/round2.png')";
			query("#Presentation").children[0].remove();
			query("#Presentation").children[0].remove();
			query("#Presentation").children[0].remove();
			setTimeout(function(){
				query("#audioPresentation").pause();
				query("#audioPresentation").remove();
				var divPres = query("#Presentation");
				divPres.style.backgroundImage="none";
				var title = document.createElement("div");
				divPres.appendChild(title);
				var titleLang={
					ESPAÑOL: "Yo Nunca Nunca",
					ENGLISH:"Never Have I Ever"
				}
				title.innerHTML = titleLang[Game.language];
				title.className="title";
				var text =document.createElement("div");
				var lang = {
					ESPAÑOL: 'En este reto deberás jugar al juego "Yo Nunca Nunca". \nIrán apareciendo una serie de cartas con cosas que pueden o no haberte pasado en redes sociales. Deberás arrastrar la carta a la derecha si las has hecho o hacia la izquierda si no.',

					ENGLISH: 'In this challenge, you will have to play the game "Never Have I ever".\n You will find different cards that you will have to classify as done or not done depending on if they have happened to you on social media. You will have to drag them left or right.'
				}
				text.innerHTML=lang[Game.language];
				text.className ="Info";
				text.style.top="5%";
				text.style.transform="translateY(50%)";	
				text.style.textAlign="center";
				var img = document.createElement("img");
				img.src="content/GIF.gif";
				img.style.height="320px";
				img.style.marginTop= "10%";
				divPres.appendChild(text);
				divPres.appendChild(img);
				speakDescription(text.innerHTML);
				setTimeout(initSecondGame,14000);

			},6000);
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
	var audioContext = window.AudioContext          // Default
              || window.webkitAudioContext;  // Safari and old versions of Chrome
	
	var audio1 = document.createElement('audio');
	audio1.src= "content/redoble.mov";
	audio1.id="audioAnswer";
	audio1.play();
	query("body").appendChild(audio1);
	if(Game.db.questions[Game.actualQuestion].isCorrect(this.id)){
		setTimeout(function(){query("#audioAnswer").pause();
		img.src="content/correct.png"; 
		},1800);
		setTimeout(function(){
			audio1.src = "content/correcto.mov";
			audio1.loop = false;
			audio1.play();
			Game.showCorrect();
		},2600);
		setTimeout(function(){
			showLevelUp(),
			query("#audioAnswer").pause();
			query("#audioAnswer").remove();
		},5300);
	}
	else {
		var questionDom=Game.db.questions[Game.actualQuestion];
		var correct = "#"+questionDom.correctAnswer+" img";
		setTimeout(function(){
			query("#audioAnswer").pause();
			img.src="content/incorrect.png";
			query(correct).src="content/correct.png";
			},1800);
		setTimeout(function(){
			audio1.src = "content/incorrecto.mov";
			audio1.loop = false;
			audio1.play();
			Game.showIncorrect();
		},2600);
		setTimeout(function(){
			showLevelUp(1000*(Game.level+1));
			query("#audioAnswer").pause();
			query("#audioAnswer").remove();
		},5500);
		
	}
}

function juegoTerminado(){
	console.log("Juego Terminado");
	query("body").style.backgroundImage="url('content/background.jpg')";
	query("#Round2").style.display="none";
	var div=query("#finalScreen").cloneNode(true);
	var text = {
		ESPAÑOL: [
			"BIEN HECHO!",
			"Has conseguido",
			"me gusta!",
			"Después de jugar a este minijuego te habrás dado cuenta de lo mucho que influyen las redes sociales en la percepción de nuestra imagen corporal. Son muchos los factores a los que estamos expuestos todos los días y que sin darnos cuenta nos hacen actuar de una manera que puede afectarnos no solo a nosotros mismos sino también a otros usuarios. Es por eso que tú eres la única persona capaz de convertir las redes sociales en un lugar mejor en el que todo el mundo tiene un sitio sin importar su aspecto físico. Y sobre todo ten en cuenta que todo lo que ves en las redes sociales no siempre es la realidad.",
			"Por favor, contesta este cuestionario antes de irte :)"
		],
		ENGLISH: [
			"WELL DONE!",
			"You have reached",
			"likes!",
			"After playing this mini-game you will have realized how much social networks influence the perception of our body image. There are many factors to which we are exposed every day and that without realizing it make us act in a way that can affect not only ourselves but also other users. That is why you are the only person capable of turning social networks into a better place where everyone has a place, regardless of their physical appearance. And above all, keep in mind that everything you see on social networks is not always reality.",
			"Please, before leaving answer this questionnaire :)"
		]
	}
	div.children[0].innerHTML=text[Game.language][0];
	div.children[1].innerHTML=text[Game.language][1];
	div.children[3].innerHTML=text[Game.language][2];
	div.children[4].innerHTML=text[Game.language][3];
	div.children[5].innerHTML=text[Game.language][4];
	query("body").appendChild(div)
	div.style.display="";
	var contDiv= div.children[2];
	contDiv.children[1].innerHTML=parseInt(Game.points)+2000;
}