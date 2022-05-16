class Level{
	constructor(name,id){
		this.name =name;
		this.id=id;
		this.domElement="";
	}
	createDom(row){
		this.domElement = query(".templates .level").cloneNode(true);
		this.domElement.style.gridRow=row;
		this.domElement.id=name;
		this.domElement.children[1].src= "content/like.png";
		this.domElement.children[0].innerHTML=this.name;
		return this.domElement
	}
}