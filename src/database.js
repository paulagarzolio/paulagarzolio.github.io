class database{
	constructor(){
		this.levels=[];
		this.questions=[];
		this.actualQuestion=0;
		this.questionDom;
	}

	initQuestionElement(){
		var question=this.questions[0];
		this.questionDom =question.createElement()
		question.addEvent();
		return this.questionDom
	}
	addQuestion(quest,answers,idCorrect){
		var id =this.questions.length;
		var question = new Question(id);
		var correctAnswer = "answer"+idCorrect+"_"+id;
		question.initiateQuestion(quest,answers,correctAnswer);
		this.questions.push(question);
	}
	createLevels(levels){
		for(var i=0; i<levels.length;i++){
			var name = levels[i];
			var id = levels.length-i;
			var level = new Level(name,"Level "+id);
			this.levels.push(level);
		}
	}
	goToLevel(level_id){
		var total_levels = this.levels.length-1
		var level = this.levels[total_levels-level_id]
		level.domElement.style.backgroundColor="#1ABFB5";

	}
	initialState(last_level){
		var total_levels = this.levels.length-1
		for (var i=0; i<total_levels;i++){
			var level = this.levels[total_levels-i-1];
			level.domElement.style.backgroundColor="#1064D4";
		}
	}
	initClassification(){
		var classification = query("#classification");	
		for(var i=0; i<this.levels.length;i++){
			var row= (i+1).toString()+"/"+(i+2).toString();
			var levelHTML=Game.db.levels[i].createDom(row);
			classification.appendChild(levelHTML);
		}
	}
}
