/**
* Name: Parallel execution
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

let completed = 0;

tasksCollection.forEach(task => {
	task(() => {
		if (++completed === tasksCollection.length){
			finish();
		}
	});
});

function finish(){
	console.log(`All tasks completed successfully`);
}

