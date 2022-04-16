
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
	query("#cargando").style.display="none"
	firstScene=query("#FirstScene");
	thirdScene = query("#Round2");
	thirdScene.style.display="none";
	firstScene.style.display="block";
	body=query("body");
	body.style.background="url(background.png)"
	body.style.backgroundSize="1450px auto";
	body.style.backgroundColor="#b4f8ff";
	body.style.backgroundRepeat="no-repeat";
	body.style.backgroundPosition="center 0px";
	
}

document.getElementById("button1").addEventListener("click",cargando);

function cargando(){
	query("#FirstScene").style.display="none";
	body=query("body");
	body.style.background="url(background.jpg)";
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
	//var messages = "Hola, te estábamos esperando!;A mi?;Que hago yo aquí?$Si, a ti. Pronto vas a entender el motivo. Antes de nada, elige a tu personaje para empezar.;No te preocupes, pronto vas a entenderlo todo. Antes de nada, elige a tu personaje para empezar.;;$Verás, desde hace unos años las redes sociales se han convertido en un lugar cada vez más solitario y cruel con unos estandares de belleza con los que muchos usarios no se sienten identificados. La imagen corporal de muchos de ellos, ha quedado afectada por estos estandares y los usuarios se sienten cada vez más inseguros con sus cuerpos.;\
	//Qué es la Imagen Corporal?;Entiendo...$La imagen corporal es la idea que cada uno tiene de su propia aspecto físico y de cómo le ven los demás.;;;$Esta sociedad te necesita para solucionar el problema.;Porque a mi?;¿Cómo?$A lo largo de este minijuego, encontrarás retos para poder encontrar la clave y evitar que este problema empeore. La humanidad te necesita!;Adelante!;No se si estoy preparado/a...\
	//$No te preocupes, siguiendo mis indicaciones serás capaz de conseguirlo.";
	var messages = {
		dialogues: [
			{
				intro: ["Hola, te estábamos esperando!"],
				answers: ["A mi?","Que hago yo aquí?"]
			},
			{
				intro: ["Si, a ti. Pronto vas a entender el motivo. Antes de nada, elige a tu personaje para empezar.","No te preocupes, pronto vas a entenderlo todo. Antes de nada, elige a tu personaje para empezar."],
				answers: ""
			},
			{
				intro: ["Verás, desde hace unos años las redes sociales se han convertido en un lugar cada vez más solitario y cruel con unos estandares de belleza con los que muchos usarios no se sienten identificados. La imagen corporal de muchos de ellos, ha quedado afectada por estos estandares y los usuarios se sienten cada vez más inseguros con sus cuerpos."],
				answers: ["Qué es la Imagen Corporal?","Entiendo..."]
			},
			{
				intro: ["La imagen corporal es la idea que cada uno tiene de su propia aspecto físico y de cómo le ven los demás.", "Por si te lo estabas preguntando, la imagen corporal es la idea que cada uno tiene de su propia aspecto físico y de cómo le ven los demás."],
				answers: ""
			},
			{
				intro: ["Esta sociedad te necesita para solucionar el problema."],
				answers: ["Porque a mi?","No se si lo estoy entendiendo..."]
			},
			{
				intro: ["Tú eres la única persona capaz de cambiar la manera de ver tu propia imagen corporal. A lo largo de este minijuego, encontrarás una série de minijuegos que deberás completar."," A lo largo de este minijuego, encontrarás retos para poder encontrar la clave y evitar que este problema empeore. La humanidad te necesita!"],
				answers: ["Adelante!","No se si estoy preparado/a..."]
			},
			{
				intro: ["No te preocupes, siguiendo mis indicaciones serás capaz de conseguirlo."],
				answers:""
			}
		]
			
	}
	Dialogue.init(messages);
	
}
function initFirstGame(){
	query("#SecondScene").style.display="none";
	firstScene=query("#FirstScene");
	firstScene.style.display="none";
	secondScene=query("#Round1");
	secondScene.style.display="grid";
	query(".avatar_").src=avatar;
	body=query("body");
	body.style.background="url(fondoMistico2.jpg)";
	body.style.backgroundSize="100%";
	body.style.backgroundRepeat="no-repeat";
	body.style.backgroundPosition="center 0px";
	// initQuestions();
	Game.initGame();
	
}
function initSecondGame(){
	firstScene=query("#FirstScene");
	firstScene.style.display="none";
	secondScene = query("#Round1");
	thirdScene = query("#Round2");
	secondScene.style.display="none";
	thirdScene.style.display="";
	body=query("body");
	body.style.background="url(fondoQuestion.jpg)";
	texts=["felt unhappy because of my number of likes in a photo", "unfollowed a public figure because I was envious of his life",
	"used photo retouching editors to modify something you don't like about your body","bought the same clothes as an influencer to feel prettier"+
	"used a face filter because I thought I would appear niicer on a photo"]
	urls=["img/never1.png","img/never2.png","img/never3.png","img/never4.png","img/never5.png"];
	colors=["rgba(249, 216, 168, 0.97)","rgba(216, 249, 168, 0.97)","rgba(168, 216, 249, 0.97)"];
	Round2.init(urls,texts,colors);

}
var avatar;
var Dialogue = {
	messages:[],
    actualMessage:-1,
    div:"",

    init: function(txt){
        this.div =query("#story");
		var messages =txt.split(["$"]);
		for(var i=0; i<messages.length;i++){
			var strings = messages[i].split([";"]);
			if(strings.length==4){
				var questions=[];
				questions.push(strings[0]);
				questions.push(strings[1]);
				var answers = strings.splice(2,3);
				if(!answers[0])answers="";
				var message =new Message(i,questions,answers);
				this.messages.push(message);
			}
			else{
				var question =strings[0];
				var answers = strings.splice(1,2);
				var message =new Message(i,question,answers);
				message.actualQuestion=question;
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
			else setTimeout(Dialogue.nextMessage,5500);
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
			avatar= "avatars/avatar1.png"; 

        else if (avatarsrc.includes('avatar2.png'))
			avatar= "avatars/avatar2.png"; 
            
		else if(avatarsrc.includes('avatar3.png'))
			avatar= "avatars/avatar3.png"; 

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
		var that= Dialogue;
		var actMessage=that.messages[that.actualMessage];
		var actualQ = actMessage.actualQuestion;
		if(!actualQ){
			var id = this.id;
			actMessage.actualQuestion=actMessage.questions[id];
		}
		if(that.actualMessage==that.messages.length){
			initFirstGame();
			return
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
    // var text = "Bienvenido al museo del mundo"; 
    //create sentence
    var utterThis = new SpeechSynthesisUtterance( text );
    // utterThis.lang = ''
    //assign voice, be careful as voices have a language associated
    var i =0; 
    if(voices[i].lang){
        while(voices[i].lang!='es-ES')
        {
            i++; 
        }
        utterThis.voice = voices[i];

        //speak
        speechSynthesis.speak( utterThis );
    }

}

