var centerx, centery;
var xInic,yInic;
var estaPulsado = false;
var xInc = 0;
var yInc = 0;
var done = false;
var Round2= {
	cards: [],
	lastImg: 0,
	actualCard: 0,
	actualCardDOM:0,
	points: 0,
	DOM: "",
	cardPosx:0,
	ui_colors: {
		standard: "rgba(249, 216, 168, 0.97)",
		left:"rgba(196, 2, 2, 0.97)",
		right: "rgba(90, 110, 231, 0.97)"
	},
	reject:{
		left:100,
		right: 420,
	},
	accept:{
		left:970,
		right: 1290,
	},

	init: function(urls,texts,colors){
		modColors = colors.length;
		modUrls = urls.length;
		DOM = query("#cards_list");
		var card =this.addCard(urls[0],texts[0],colors[0]); 
		var position_init= this.getPosicion(card);
		this.cardPosx = position_init[1];
		for (var i=1; i<texts.length;i++){
			this.addCard(urls[i%modUrls],texts[i],colors[i%modColors]);
		}
		
		this.play();
	},

	addCard: function(url,text,color){
		var dom = query(".templates .card").cloneNode(true);
		dom.style.backgroundColor=color;
		var id = "card"+ this.lastImg;
		dom.id= id;
		dom.children[0].src=url;
		dom.children[1].innerHTML = text;
		query(".cards-list").appendChild(dom);
		var card = {
			id: id,
			points: -5,
			DOM: dom,
			color: color
		}
		this.cards.push(card);
		this.lastImg++;
		return dom
	},
	nextCard: function(){
		var cardIndex = this.actualCard-1;
		if (cardIndex <0){
			juegoTerminado();
			return
		}    
		var card= query(".cards-list").children[cardIndex];
		this.actualCard=cardIndex;
		this.actualCardDOM=card;
		this.ui_colors.standard=card.style.backgroundColor;
		if (card.addEventListener){
			card.addEventListener("mousedown", this.ratonPulsado, false);
			card.addEventListener("mouseup", this.ratonSoltado, false);
			document.addEventListener("mousemove", this.ratonMovido, false);
		} else { //Para IE
			card.attachEvent('onmousedown', this.ratonPulsado);
			card.attachEvent('onmouseup', this.ratonSoltado);
			document.attachEvent('onmousemove', this.ratonMovido);
		} 
		 
	},
	play: function(){
		
		var cardIndex = query(".cards-list").children.length-1;
		var card= query(".cards-list").children[cardIndex];
		this.actualCardDOM = card;
		this.actualCard = cardIndex;
		this.ui_colors.standard=card.style.backgroundColor;
		if (card.addEventListener){
			card.addEventListener("mousedown", this.ratonPulsado, false);
			card.addEventListener("mouseup", this.ratonSoltado, false);
			document.addEventListener("mousemove", this.ratonMovido, false);
		} else { //Para IE
			card.attachEvent('onmousedown', this.ratonPulsado);
			card.attachEvent('onmouseup', this.ratonSoltado);
			document.attachEvent('onmousemove', this.ratonMovido);
		}         
		
	},
	getPosicion: function(elemento) {
		if(!elemento)return
		var posicion = new Array(2);
		if(document.defaultView && document.defaultView.getComputedStyle) {
			posicion[0] = parseInt(document.defaultView.getComputedStyle(elemento, null).getPropertyValue("top"))
			posicion[1] = parseInt(document.defaultView.getComputedStyle(elemento, null).getPropertyValue("left"));
		} else {
			//Para Internet Explorer
			posicion[0] = parseInt(elemento.currentStyle.top);             
			posicion[1] = parseInt(elemento.currentStyle.left);               
		}      
		return posicion;
	},

	ratonSoltado: function(evt) {
		var that= Round2;
		if(!that.actualCardDOM) return
		estaPulsado = false;
		console.log(estaPulsado);
		var card = that.cards[that.actualCard];
		var cardDOM= that.actualCardDOM;
		
		var pos = parseInt(cardDOM.style.left, 10);
		if(pos>that.reject.left-100 && pos+310-100<that.reject.right){
			//card is rejected!
			that.points = that.points-card.points;
			cardDOM.style.display="none";
			that.nextCard();
		}
		if(pos>that.accept.left-100 && pos+310<that.accept.right+100){
			//card is accepted!
			that.points = that.points+card.points;
			cardDOM.style.display="none";
			that.nextCard();
		}
		else{
			cardDOM.style.left = that.cardPosx + "px"
			cardDOM.style.backgroundColor=that.ui_colors.standard;
		}
		
		
	},
	goToPos: function(){
		var left = parseInt(this.actualCardDOM.style.left, 10);
		var dx = this.cardPosx-left;
		while(Math.abs(dx)>4){
			this.actualCardDOM.style.left = Round2.lerp(left,this.cardPosx,0.5) + "px";
			left = parseInt(this.actualCardDOM.style.left, 10);
			dx = this.cardPosx-left;
		}
		this.actualCardDOM.style.left= this.cardPosx +"px";

	},
	ratonMovido: function(evt) {
		var that=Round2;
		if(!Round2.actualCardDOM) return
		if(estaPulsado && !done) {
		//Calcular la diferencia de posición
			var xActual = evt.clientX;
			var yActual = evt.clientY;    
			xInc = xActual-xInic;
			yInc = yActual-yInic;
			xInic =xActual;
			yInic= yActual;
			var card = Round2.actualCardDOM;
			var position = Round2.getPosicion(card);
			card.style.left = (position[1] + xInc) + "px";
			var pos = position[1];
			if(pos>that.reject.left-100 && (pos+310-100)<that.reject.right){
				//card is rejected!
				card.style.backgroundColor=Round2.ui_colors.left;
			}
			else if((pos)>(that.accept.left-100) && (pos+310)<that.accept.right+100){
				//card is accepted!
				card.style.backgroundColor=Round2.ui_colors.right;
			}
			else{
				card.style.backgroundColor=Round2.ui_colors.standard;
			}
		}
	},
	lerp:function (a,b,f)
    {
        return a * (1-f) + b * f;
    },

	cardSwipe: function(cardDir,skipFlag) {
		if(cardIndex>0){
		hrzDir=0;
		vertDir="-=40px";
		cardColor=ui_colors.discard;
		if (skipFlag==0){
		  hrzDir = (cardDir == 1) ? "+=100px" : "-=100px";
		  cardColor=(cardDir == 1) ? ui_colors.right :  ui_colors.left;      
		}else{
		  vertDir="+=200px";
		};
	  
		  card.animate({
			left: hrzDir,
			top: vertDir,
			backgroundColor:cardColor
		  }, {
			duration: 200,
			specialEasing: {
			  top: 'easeInCirc',
			  left: 'easeInCirc'
			},
			complete: function () {
			  query(this).css('display', 'none');
			}
		  });
		cardIndex--;
		card= query(".slider-list").children(":nth-child(" + cardIndex + ")");
		}
	  },
	  ratonPulsado: function(evt) { 
		if(!Round2.actualCardDOM) return
		//Obtener la posición de inicio
		xInic = evt.clientX;
		yInic = evt.clientY;    
		estaPulsado = true;
	}

};