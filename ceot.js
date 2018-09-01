/**
* Name: Consecutive execution of a known set of tasks
**/

function taskOne(done){
	process.nextTick(() => {
		console.log(`Start first task`);
		taskTwo(done);
	});
}

function taskTwo(done){
	process.nextTick(() => {
		console.log(`Start second task`);
		taskThree(done);
	});
}

function taskThree(finalDone){
	process.nextTick(() => {
		console.log(`Start third task`);
		finalDone();
	});
}


taskOne(() => {
	console.log(`All tasks completed successfully`);
});

