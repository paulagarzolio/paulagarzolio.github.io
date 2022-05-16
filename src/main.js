
document.addEventListener('DOMContentLoaded',function(){
	init.initGame();
},false);

var init = {
	initGame: function(){
		speechSynthesis.cancel();
		console.log("Juego iniciado")
		initFirstScene();
		
	}
}

function query(selector) {
	return document.querySelector(selector);
}

function initFirstScene(){
	query("#cargando").style.display="none"
	firstScene=query("#FirstScene");
	thirdScene = query("#Round2");
	firstScene.children[2].src="/content/"+Game.language+".png";
	thirdScene.style.display="none";
	firstScene.style.display="block";
	body=query("body");
	body.style.background="url(content/background.png)"
	body.style.backgroundSize="1450px auto";
	body.style.backgroundColor="#b4f8ff";
	body.style.backgroundRepeat="no-repeat";
	body.style.backgroundPosition="center 0px";
	
}

document.getElementById("button1").addEventListener("click",cargando);

function popUpLanguage(){
	query("#popUpLanguage").style.display="";
	query("#FirstScene").style.display="none";
}
function popOffLanguage(){
	query("#popUpLanguage").style.display="none";
	query("#FirstScene").style.display="";
}

function chooseLanguage(that){
	Game.language = that.innerHTML;
	var divs=document.querySelectorAll(".language");
	for(var i=0;i<divs.length;i++){
		divs[i].style.color="beige";
	}
	that.style.color ="blue";
	firstScene=query("#FirstScene");
	firstScene.children[2].src="/content/"+Game.language+".png";

}
function cargando(){
	query("#FirstScene").style.display="none";
	body=query("body");
	body.style.background="url(content/background.jpg)";
	body.style.backgroundSize="1450px auto";
	body.style.backgroundColor="#b4f8ff";
	body.style.backgroundRepeat="no-repeat";
	body.style.backgroundPosition="center 0px";
	query("#cargando").style.display=""
	setTimeout(initSecondScene,3000);
}
function eraseMessage(){
	this.style.color="#1c1c1e56";
}
function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
  }
function initSecondScene(){
	query("#cargando").style.display="none";
	body=query("body");
	body.style.background= "#FFBD59";
	query("#FirstScene").style.display="none";
	var sceneDiv= query("#SecondScene");
	sceneDiv.style.display="";
	var dialogues = {
		ESPAÑOL: [
			{
				intro: ["¡Hola, te estábamos esperando!"],
				answers: ["¿A mí?","¿Qué hago yo aquí?"]
			},
			{
				intro: ["Si, a ti. Pronto vas a entender el motivo. Antes de nada, elige a tu personaje para empezar.","No te preocupes, pronto vas a entenderlo todo. Antes de nada, elige a tu personaje para empezar."],
				answers: ""
			},
			{
				intro: ["Verás, desde hace unos años las redes sociales se han convertido en un lugar cada vez más solitario y cruel, con unos estándares de belleza con los que muchos usuarios no se sienten identificados. La imagen corporal de muchos de ellos, ha quedado afectada por estos estereotipos y los usuarios se sienten cada vez más inseguros con sus cuerpos."],
				answers: ["¿Qué es la Imagen Corporal?","No sé si lo entiendo..."]
			},
			{
				intro: ["La imagen corporal es la idea o percepción que cada uno tiene de su propio aspecto físico. En otras palabras, como de atractivos nos sentimos y creemos que nos ven los demás. Las redes sociales son, a menudo, causa de una mala percepción de imagen corporal.", "Para entenderlo es muy importante conocer el concepto de imagen corporal. La imagen corporal es la idea que cada uno tiene de su propio aspecto físico. En otras palabras, como de atractivos nos sentimos y creemos que nos ven los demás. Las redes sociales son, a menudo, causa de una mala percepción de imagen corporal."],
				answers: ""
			},
			{
				intro: ["Esta sociedad te necesita para solucionar el problema."],
				answers: ["¿Por qué a mi?","Sigo sin entenderlo."]
			},
			{
				intro: ["Tú eres la única persona capaz de cambiar la manera de ver tu propia imagen corporal. A lo largo de este minijuego, encontrarás una serie de retos que te ayudaran a entender mejor este problema.","A lo largo de este minijuego, encontrarás retos que te ayudaran a entender mejor este problema y como tú puedes aportar tu granito de arena para solucionarlo."],
				answers: ["¡Adelante!","No sé si estoy preparado/a..."]
			},
			{
				intro: ["¡Mucha suerte!","No te preocupes, siguiendo mis indicaciones serás capaz de conseguirlo."],
				answers:""
			}
		],
		ENGLISH: [
			{
				intro: ["Hello, we were looking forward to meeting you!"],
				answers: ["To meet me?","What am I doing here?"]
			},
			{
				intro: ["Yes, you. You will soon understand why. Before starting, choose your favorite avatar. ","Don't worry, you will understand everything soon. Before starting, choose your favorite avatar."],
				answers: ""
			},
			{
				intro: ["Social media have become an increasingly lonely and cruel place with beauty standards with which many users do not feel identified. Their body image has been affected by these stereotypes, and it has influenced users to feel more insecure with themselves."],
				answers: ["What is body image?","I am not sure if I am following..."]
			},
			{
				intro: ["Body Image is the idea or perception that a person has of his physical appearance. In other words, how attractive we feel and believe others see us. Social media are the main cause of negative body image perception.", "To understand it, it is important to know the concept of body image. Body Image is the idea or perception that a person has of his physical appearance. In other words, how attractive we feel and believe others see us. Social media are the main cause of bad body image perception."],
				answers: ""
			},
			{
				intro: ["Our society needs you to solve this problem."],
				answers: ["Why me?","I still don't understand it."]
			},
			{
				intro: ["You are the only person capable of changing the way you see your own body image. Throughout this mini-game, you will find a series of challenges that will help you better understand this problem.","Throughout this mini-game, you will find a series of challenges that will help you better understand this problem and also identify how you can play your part in solving this problem."],
				answers: ["Ready!","I am not sure if I am ready."]
			},
			{
				intro: ["Good luck!","Don't worry, following my instructions you will be able to achieve it."],
				answers:""
			}
		]
			
	}
	Dialogue.init(dialogues);
	
}
function initFirstGame(){
	query("#SecondScene").style.display="none";
	firstScene=query("#FirstScene");
	firstScene.style.display="none";
	secondScene=query("#Round1");
	secondScene.style.display="grid";
	query(".avatar_").src=avatar;
	Game.round=1;
	Game.showPresentation("content/round1.png");

	
}

function initSecondGame(){
	query("#Presentation").style.display="none";
	firstScene=query("#FirstScene");
	firstScene.style.display="none";
	secondScene = query("#Round1");
	thirdScene = query("#Round2");
	secondScene.style.display="none";
	thirdScene.style.display="";
	var titleLang={
		ESPAÑOL: "Yo Nunca Nunca",
		ENGLISH:"Never Have I Ever"
	}
	var tip = {
		ESPAÑOL: "Arrastrar la carta hacia la derecha o la izquierda",
		ENGLISH: "Drag the card to the left or to the right"
	}
//	query("#Round2 #accept p").innerHTML=
	thirdScene.children[0].innerHTML=titleLang[Game.language];
	thirdScene.children[1].innerHTML = tip[Game.language];
	body=query("body");
	body.style.background="url(content/fondoQuestion.jpg)";
	var texts = {
		ESPAÑOL: ["Me he sentido triste por recibir pocos likes en una foto",
		"He dejado de seguir a una figura pública porque tenía envidia de su vida",
		"He usado aplicaciones para retocar alguna parte que no me gustaba de mi cuerpo",
		"he comprado las mismas prendas de ropa que un/a influencer para sentirme más guapo/a",
		"He usado un filtro de Instagram/Snapchat para salir mejor en una foto",
		"He comparado los likes/seguidores de un amigo con los míos",
		"He utilizado una pose específica en una foto para verme más delgad@",
		"He revisado mi foto muchas veces para asegurarme que me veía bien antes de colgarla",
		"He ido a sacarme fotos solo para poder subirlas",
		"He dejado algun comentario negativo a un usuario por envidia",
		"Me he sentido mal por lo que me ha comentado alguien en una foto",
		"Me he instalado una app para ver quien me dejaba de seguir",
		"He seguido a gente desconocida para ganar más seguidores",
		"He compartido cosas que me he comprado para presumir",
		"Me he arreglado solo para compartir una foto donde me viera bien",
		"He desactivado los comentarios de mis fotos por miedo al qué dirán",
		"Me he desactivado la cuenta de Instagram porque me estaba creando un efecto negativo",
		"He criticado a alguien por una foto que ha subido",
		"He revisado el móvil muchas veces para comprobar si alguien me había hablado en alguna red social",
		"Lo primero que hago al despertar es mirar el móvil",
		"Me he sentido peor conmigo mism@ al ver fotos de otros usuarios",
		"He querido seguir cuentas más reales en Instagram",
		'He hecho algún "trend" que me parecía ridículo solo porque todo el mundo lo estaba haciendo',
		"Me he sentido muy segur@ conmigo mism@ por recibir un gran número de likes y comentarios"

		],

		ENGLISH: ["I have felt unhappy because of my number of likes on a photo", 
		"I have unfollowed a public figure because I was envious of his life",
		"I have used photo retouching editors to modify something you don't like about your body",
		"I have bought the same clothes as an influencer to feel prettier",
		"I have used a face filter because I thought I would appear nicer in a photo",
		"I have compared the number of likes/followers of a friend and mines",
		"I have used a specific pose in a photo to look thinner",
		"I have checked my photo multiple times to ensure I looked good on it before posting it",
		"I have taken pictures just to post them",
		"I have written a negative comment to another user because I was envious",
		"I have felt bad for someone's comment in my picture",
		"I have installed an application to see how unfollowed me",
		"I have followed unknown users to gain more followers",
		"I have shared things I have bought to show off",
		"I have gotten ready just to share a photo where I looked good",
		"I have deactivated the comments of my photos because I was scared of people's opinion",
		"I have deactivated my Instagram account because it was producing a negative effect on me",
		"I have criticized someone's photo posted",
		"I have checked my phone many times to ensure nobody had sent me a message",
		"The first thing I do when I wake up is to check my phone.",
		"I have felt worse with myself after seeing photos of other users",
		"I have wanted to follow more real profiles on Instagram",
		"I have done some ridiculous trend just because everyone was sharing it",
		"I have felt confident with myself after receiving lots of likes and comments"
		]

	}
	urls=["content/img/never1.png","content/img/never2.png","content/img/never3.png","content/img/never4.png","content/img/never5.png"];
	colors=["rgba(249, 216, 168, 0.97)","rgba(216, 249, 168, 0.97)","rgba(168, 216, 249, 0.97)"];
	var finalList = texts[Game.language].sort(function(){return Math.random()-0.5});
	Round2.init(urls,finalList.splice(0,15),colors);

}
var avatar;
var Dialogue = {
	messages:[],
    actualMessage:-1,
    div:"",

    init: function(dialogues){
        this.div =query("#story");

		for(var i=0; i< dialogues[Game.language].length;i++){
			var dialogue =dialogues[Game.language][i];
			if(dialogue.intro.length>1){
				var message =new Message(i,dialogue.intro,dialogue.answers);
				this.messages.push(message);
			}
			else{
				var message =new Message(i,dialogue.intro,dialogue.answers);
				message.actualQuestion=dialogue.intro;
				this.messages.push(message);
			}
			
		} 
		this.actualMessage=0;
		setTimeout(this.nextMessage,500);
		
        
    },
    setMessages: function(){
		var that= Dialogue;
		var message = that.messages[that.actualMessage];
		var id = ("#info"+that.actualMessage).toString();
		if (message.answers.length>0){
			var div=query(".templates .info").cloneNode(true);
			message.div=div;
			var answer0 = message.div.children[1];
			var answer1=message.div.children[2];
			answer0.innerHTML=message.answers[0];
			answer1.innerHTML=message.answers[1];
			answer0.id = 0;
			answer1.id=1;
			answer0.addEventListener("click",Dialogue.nextMessage);
			
			answer1.addEventListener("click",Dialogue.nextMessage);
		}
		else {
			var div=query(".info").cloneNode();
			var quest =query(".Info").cloneNode();
			div.appendChild(quest);
			message.div=div;
			if(that.actualMessage==1){
				setTimeout(this.showAvatars,100);
			}
			else if(that.actualMessage==3)setTimeout(Dialogue.nextMessage,17000);
			else setTimeout(Dialogue.nextMessage,4000);
		}
		message.div.id = id
		message.div.children[0].innerHTML=message.actualQuestion;
		that.div.appendChild(message.div);
		speakDescription(message.div.children[0].innerHTML); 
		unfade(that.div);
		that.div.scrollTop=10000;
		message.div.style.opacity="1";
		return message
        
    },
	findSrc: function(avatarsrc){
		
        if(avatarsrc.includes('avatar1.png'))
			avatar= "content/avatars/avatar1.png"; 

        else if (avatarsrc.includes('avatar2.png'))
			avatar= "content/avatars/avatar2.png"; 
            
		else if(avatarsrc.includes('avatar3.png'))
			avatar= "content/avatars/avatar3.png"; 

        return avatar
	},
	chooseAvatar: function(){
		avatar = Dialogue.findSrc(this.children[0].src);
		this.style.backgroundColor="rgb(0, 74, 173)";
		this.actualMessage=2;
		setTimeout(Dialogue.nextMessage,500);

		//remove eventListeners
		var avatars=query("#avatars");
		avatars.children[0].removeEventListener("click",Dialogue.chooseAvatar);
		avatars.children[1].removeEventListener("click",Dialogue.chooseAvatar);
		avatars.children[2].removeEventListener("click",Dialogue.chooseAvatar);
		
		
	},

	showAvatars: function(){
		var avatars=query("#avatars");
		query("#story").children[1].appendChild(avatars);
		avatars.style.display="";
		avatars.children[0].addEventListener("click",Dialogue.chooseAvatar);
		avatars.children[1].addEventListener("click",Dialogue.chooseAvatar);
		avatars.children[2].addEventListener("click",Dialogue.chooseAvatar);
		query("#story").scrollTop=10000;
	},
	nextMessage: function(){
		speechSynthesis.cancel();
		var that= Dialogue;
		if(that.actualMessage==that.messages.length){
			initFirstGame();
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

}
function unfade(element) {
    var op = 0.1;  // initial opacity
    element.style.display = 'block';
    var timer = setInterval(function () {
        if (op >= 1){
            clearInterval(timer);
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += op * 0.1;
    }, 10);
}
function Message(id,questions,answers=[]){
	this.id=id;
	this.questions=questions;
	this.actualQuestion="";
	this.answers=answers;
    this.div="";
}

function speakDescription(text)
{
    //get voices list
    var voices = speechSynthesis.getVoices();
    var utterThis = new SpeechSynthesisUtterance( text );
    var i =0; 
	var lang;
	if(Game.language=="ESPAÑOL")lang='es-ES';
	if(Game.language=="ENGLISH")lang='en-US';
    if(voices.length>0){
		if(voices[i].lang){
			while(voices[i].lang!=lang)
			{
				i++; 
			}
			utterThis.voice = voices[i];

			//speak
			speechSynthesis.speak( utterThis );
		}
	}
}

