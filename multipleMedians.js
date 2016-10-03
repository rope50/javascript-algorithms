var Heap = require('./heap.js'); //Require our heaps implementation!

function fillHeaps(list){
	maxHeap = new Heap(Heap.TYPE_MAX);
	minHeap = new Heap(Heap.TYPE_MIN);
	for(var i = 0; i < list.length; i++){
		if(!(i%2))
			maxHeap.insert(list[i]);
		else
			minHeap.insert(list[i]);
		balanceHeaps(minHeap, maxHeap);
		median = findMedian(minHeap, maxHeap);
		console.log(median.toFixed(1));
	}
}
function findMedian(minHeap, maxHeap){
 	if(maxHeap.size > minHeap.size)
 		return maxHeap.items[0];
 	else if(minHeap.size > maxHeap.size)
 		return minHeap.items[0];
 	else
 		return (minHeap.items[0] + maxHeap.items[0]) / 2;
}

function balanceHeaps(minHeap, maxHeap){
	if(!minHeap.size || !maxHeap.size)
		return;
	while(minHeap.items[0] < maxHeap.items[0]){
		temp = minHeap.items[0];
		minHeap.items[0] = maxHeap.items[0];
		maxHeap.items[0] = temp;

		maxHeap.heapifyDown();
		minHeap.heapifyDown();
	}
}

var list = [12,4,5,3,8,7];
fillHeaps(list);