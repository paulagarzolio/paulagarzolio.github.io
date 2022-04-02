class Question{
	constructor(id){
		this.id=id;
		this.question="";
		this.answers=[];
		this.correctAnswer="";
		this.domElement ="";
		
}
	isCorrect(answer){
		if(answer==this.correctAnswer){
			return true
		}
		else return false
	}
	createElement(){
		var element = document.createElement("div");
		element.id="Question_"+this.id;
		element.className="Question";
		var quest = this.question.createElement();
		element.appendChild(quest);

		for(var i=0; i<this.answers.length;i++){
			var answ = this.answers[i].createElement();
			element.appendChild(answ);
		}
		return element
	}
	assignDom(DOM){
		this.domElement=DOM;
		this.domElement.id="Question_"+this.id;
		this.question.assignElement(this.domElement.children[0]);

		for(var i=0; i<this.answers.length;i++){
			this.answers[i].assignElement(this.domElement.children[i+1]);
		}
	
	}
	initiateQuestion(question,answers,correctAnswer){
		this.question=new Block("question_"+this.id,"question",question);
		for(var i=0; i<answers.length;i++){
			var answer = new Block("answer"+i+"_"+this.id,"answer"+i,answers[i]);
			this.answers.push(answer);
		}
		this.correctAnswer=correctAnswer;
	}
	addEvent(){
		for(var i=0; i<this.answers.length;i++){
			var answerDOM = this.answers[i].domElement;
			answerDOM.addEventListener("click",onClickAnswer);

		}
	}
}