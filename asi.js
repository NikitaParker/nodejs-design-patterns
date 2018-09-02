/**
* Name: Asynchronous sequential iterations
**/



//create a collection of tasks

let tasksCollection = new Map();

for (let i = 1; i <= 3; i++){
	tasksCollection.set(
		`task${i}`,
		function(done){
			process.nextTick(() => {
				console.log(`Start task ${i}`);
				done();
			})
		}
	);
}

tasksCollection.length = Array.from(tasksCollection.entries()).length;



//algorithm


function iterator(index) {
	if (index === tasksCollection.length){
		return finish();
	}

	const task = tasksCollection.get(`task${index+1}`);

	task(function(){
		iterator(index + 1)
	});
}


function finish(){
	console.log(`All tasks completed successfully`);
}

// Let's start

iterator(0);