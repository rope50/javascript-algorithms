/**

un heap es un arbol apilado que se puede implementar como un arreglo

donde 

padre = (i - 2)/2
left  = i * 2 + 1
right = i * 2 + 2

funciones


getLeftChildIndex
getRightChildIndex
getParentIndex

hasLeftChild
hasRightChild
hasParent

leftChild
rightChild
parent

swap
ensureExtraCapacity

peek

**/

var list = [12,4,5,3,8,7];
var heap = [];
var size = 0;


for(var i in list){
	handle(list[i]);
}

function handle(item){
	insert(item);
	console.log(findMedian(), size, heap);
}

function insert(item){
	heap[size] = item;
	size++;
	heapifyUp();

}

function getLeftChildIndex(index){ return index * 2 + 1; }
function getRightChildIndex(index){ return index * 2* + 2; }
function getParentIndex(index){return (index === 0) ? 0 : Math.floor((index - 1)/2); }

function heapifyUp() {
    var index = size - 1;
    while(heap[getParentIndex(index)] && heap[getParentIndex(index)] > heap[index] ) {
        swap(getParentIndex(index), index);
        index = getParentIndex(index);
    }
}

/*

function heapyfyUp(){
	if(!heap.length)
		return;
	var index = size - 1;
	//console.log('AQUI',index,getParentIndex(index), heap[index], heap[getParentIndex(index)],  heap);
	while(heap[getParentIndex(index)] && heap[getParentIndex(index)] > heap[index]){
        swap(getParentIndex(index), index);
        index = getParentIndex(index);
    }
}
*/
function swap(i1, i2){
	//console.log('before', i1,i2,heap);
	var temp = heap[i1];
	heap[i1] = heap[i2];
	heap[i2] = temp;
	//console.log(' after', i1,i2, heap);
}

function findMedian(){
	//console.log(size%2,Math.ceil(size/2), heap);
	if(size % 2){ //odd values
		val = heap[Math.floor(size/2)]//.toFixed(1);
		return val.toFixed(1);
	}
	else{ //even values
		val = (heap[size/2] + heap[size/2 +1])/2;
		return val.toFixed(1);
	}
}