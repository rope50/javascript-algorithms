
function queue(stack1, stack2, op, x){
	if(op === 1){
		stack1.push(x);
	}
	else if(op === 2){
		stack2.push(stack1.shift());
	}
	else if(op === 3){
		console.log(stack1[0]);
	}
}

input = ['10', '1 42','2','1 14','3','1 28','3','1 60','1 78','2','2'];
stack1 = [];
stack2 = [];
q = parseInt(input.shift());
for(var i in input){
	op	= parseInt(input[i].split(' ')[0]);
	x 	= parseInt(input[i].split(' ')[1]);
	queue(stack1, stack2, op, x);
}