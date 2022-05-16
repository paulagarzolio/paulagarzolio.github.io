class Block{
	constructor(id,type,text){
		this.id=id;
		this.type=type;
		this.text=text;
		this.template = query(".templates .qu-ans");
		this.domElement="";
}
	typeSrc(){
		if(this.type=="question"){
			return "content/question.png"
		}
		if(this.type.slice(0, 6)=="answer"){
			return "content/answer.png"
		}
	}
	getNumerator(){
		var letters = ["A","B","C","D"];
		var num = this.id.slice(6,this.id.indexOf("_"));
		return letters[num]

	}
	createElement(){
		var element = this.template.cloneNode(true);
		element.id = this.id;
		element.className = this.type;
		var text;
		if(this.type.slice(0,6)=="answer"){
			text= this.getNumerator()+": "+this.text;
		}
		else text =this.text;
		element.children[1].innerHTML =text;
		element.children[0].src = this.typeSrc();
		this.domElement=element;
		return element
	}
	assignElement(DOM){
		this.domElement=DOM;
		this.domElement.id = this.id;
		var text;
		if(this.type.slice(0,6)=="answer"){
			text= this.getNumerator()+": "+this.text;
		}
		else text =this.text;
		this.domElement.children[1].innerHTML =text;
		this.domElement.children[0].src = this.typeSrc();

	}
}