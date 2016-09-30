/**
* HEAP JAVASCRIPT IMPLEMENTATION
*
*
**/
function Heap(type){
	if(!type){
		type = Heap.TYPE_MIN; //min heap by default
	}
	this.type 	= type;
	this.size 	= 0;
	this.items 	= [];
}

Heap.TYPE_MAX = 1;
Heap.TYPE_MIN = 2;

Heap.prototype = {
	constructor : Heap,
	getLeftChildIndex: function (index){ return index * 2 + 1; },
	getRightChildIndex: function (index){ return index * 2 + 2; },
	getParentIndex: function (index){return (index === 0) ? 0 : Math.floor((index - 1)/2); },
	swap: function (i1, i2){
		var temp = this.items[i1];
		this.items[i1] = this.items[i2];
		this.items[i2] = temp;
	},
	insert : function(item){
		this.items[this.size] = item;
		this.size++;
		this.heapifyUp();
	},
	heapifyDown : function(){
		if(this.type === Heap.TYPE_MAX){
			this.maxHeapifyDown();
		}
		else if(this.type === Heap.TYPE_MIN){
			this.minHeapifyDown();
		}
		else{
			throw new Error('Unknowed heap type');
		}
	},
	heapifyUp : function(){
		if(this.type === Heap.TYPE_MAX){
			this.maxHeapifyUp();
		}
		else{
			this.minHeapifyUp();
		}
	},
	minHeapifyUp: function(){
	    var index = this.size - 1;    
	    var parentIndex = this.getParentIndex(index);
	    if(parentIndex < 0)
	    	return;
	    while(this.items[parentIndex] > this.items[index] ) {
	        this.swap(parentIndex, index);
	        index = this.getParentIndex(index);
	        parentIndex = this.getParentIndex(index);
	    }
	},
	maxHeapifyUp : function(){
	    var index = this.size - 1;    
	    var parentIndex = this.getParentIndex(index);
	    if(parentIndex < 0)
	    	return;
	    while(this.items[parentIndex] < this.items[index] ) {
	        this.swap(parentIndex, index);
	        index = this.getParentIndex(index);
	        parentIndex = this.getParentIndex(index);
	    }
	},
	minHeapifyDown:function (){
		//console.log('Min heapify down');
		var index = 0;
		nextIndex = this.getMinimalChildrenIndex(index);
		while(nextIndex && this.items[index] > this.items[nextIndex]){
			this.swap(index, nextIndex);
			index = nextIndex;
			nextIndex = this.getMinimalChildrenIndex(index);
		}
	},
	maxHeapifyDown:function (){
		var index = 0;
		nextIndex = this.getMaxChildrenIndex(index)
		while(nextIndex && this.items[index] < this.items[nextIndex]){
			this.swap(index, nextIndex);
			index = nextIndex;
			nextIndex = this.getMaxChildrenIndex(index);
		}
	},
	getMinimalChildrenIndex: function(index){
		leftIndex  = this.getLeftChildIndex(index);
		rightIndex = this.getRightChildIndex(index);

		if(this.isValidIndex(leftIndex) && this.isValidIndex(rightIndex)){
			return this.items[leftIndex] < this.items[rightIndex] ? leftIndex : rightIndex;
		}
		if(!this.isValidIndex(leftIndex) && this.isValidIndex(rightIndex)){
			return rightIndex;
		}
		if(this.isValidIndex(leftIndex) && !this.isValidIndex(rightIndex)){
			return leftIndex;
		}
		return null;
	},
	getMaxChildrenIndex: function(index){
		leftIndex  = this.getLeftChildIndex(index);
		rightIndex = this.getRightChildIndex(index);

		if(this.isValidIndex(leftIndex) && this.isValidIndex(rightIndex)){
			return this.items[leftIndex] > this.items[rightIndex] ? leftIndex : rightIndex;
		}
		if(!this.isValidIndex(leftIndex) && this.isValidIndex(rightIndex)){
			return rightIndex;
		}
		if(this.isValidIndex(leftIndex) && !this.isValidIndex(rightIndex)){
			return leftIndex;
		}
		return null;
	},
	isValidIndex: function(index){
		return (index >= 0 && index < this.size) ? true : false;
	}
}

module.exports = Heap;