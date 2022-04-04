
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

document.getElementById("button1").addEventListener("click",initSecondScene);

function eraseMessage(){
	this.style.color="#1c1c1e56";
}
function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
  }
function initSecondScene(){
	body=query("body");
	body.style.background= "#FFBD59";
	query("#FirstScene").style.display="none";
	var sceneDiv= query("#SecondScene");
	sceneDiv.style.display="";
	var messages = ["Bienvenido/a","Antes de nada, elige a tu personaje para empezar."];
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
	"used photo retouching editors to modify something you don't like about your body","bought the samee clothes as an influencer to feel prettier"+
	"used a face filter because I thought I would appear niicer on a photo"]
	urls=["img/never1.png","img/never2.png","img/never3.png","img/never4.png","img/never5.png"];
	colors=["rgba(249, 216, 168, 0.97)","rgba(216, 249, 168, 0.97)","rgba(168, 216, 249, 0.97)"];
	Round2.init(urls,texts,colors);

}
var avatar;
var Dialogue = {
    contents:[],
	messages:[],
    actualMessage:-1,
    div:"",

    init: function(messages){
        this.div =query("#SecondScene");
        this.actualMessage=0;
        this.contents=messages;
        setTimeout(this.nextMessage,500);
        
    },
    setMessages: function(){
		var that= Dialogue;
		var content = that.contents[that.actualMessage]
		var message = new Message(that.actualMessage,content);
		that.messages.push(message);
		var id = ("#info"+that.actualMessage).toString();
		var div=query(".info").cloneNode();
		div.id = id
		message.div= div;
		message.div.innerHTML = message.content;
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
		initFirstGame();
	},
	showAvatars: function(){
		var avatars=query("#avatars");
		query("#SecondScene").appendChild(avatars);
		avatars.style.display="";
		avatars.children[0].addEventListener("click",Dialogue.chooseAvatar);
		avatars.children[1].addEventListener("click",Dialogue.chooseAvatar);
		avatars.children[2].addEventListener("click",Dialogue.chooseAvatar);
	},
	nextMessage: function(){
		var that= Dialogue;
		if(that.actualMessage-1>=0){
			var prev= that.actualMessage-1;
			var prev_message=query("#SecondScene").children[prev+1];
			prev_message.style.color="rgba(28, 28, 30, 0.337)";
		}
		var message = that.setMessages();
		that.div.appendChild(message.div);
		message.div.style.color="rgba(28, 28, 30)";
		++that.actualMessage;
		if(that.actualMessage<that.contents.length) setTimeout(that.nextMessage,1500);
		else setTimeout(that.showAvatars,1500);
	}

}

function Message(id,content){
	this.id=id;
	this.content=content;
    this.div="";
}



