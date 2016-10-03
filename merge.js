
function merge(left, right){
	var result = [];
	var il = 0, ir =0;
	
	while(il < left.length && ir <right.length){		
		if(left[il] <= right[ir]){
			result.push(left[il++]);
		}
		else{
			result.push(right[ir++]);
		}
	}
	numberOfInversion += ir;
	return result.concat(left.slice(il)).concat(right.slice(ir));
	
}

numberOfInversion = 0;
function mergeSort(items){
	if(items.length < 2){
		return items;
	}
	var middle 	= Math.floor(items.length/2);
	var left 	= items.slice(0, middle);
	var right 	= items.slice(middle);
	return merge(mergeSort(left), mergeSort(right));
}




var mergeAndCount, sortAndCount;

/*
the merging routine
@param List1 the first list to be merged
@param List2 the second list to be merged
*/

mergeAndCount = function(List1, List2) {
  List1 = List1.slice();
  List2 = List2.slice();
  var count = 0;
  var outputList = [];

  while (List1.length > 0 && List2.length > 0) {
    outputList.push(Math.min(List1[0], List2[0]));
    if (List2[0] < List1[0]) {
      count += List1.length;
      List2.shift();
    } else {
      List1.shift();
    }
  }
  outputList = outputList.concat(List1.concat(List2));
  return {
    'count': count,
    'list': outputList
  };
};

/*
count inversion algorithm
@param List the sequence to be sorted
*/
sortAndCount = function(List) {
  List = List.slice();
  var List1, List2, mergeOut, output1, output2;
  if (List.length < 2) {
    return {
      'count': 0,
      'list': List
    };
  } else {
    List1 = List.splice(0, Math.floor(List.length / 2));
    List2 = List;
    output1 = sortAndCount(List1);
    output2 = sortAndCount(List2);
    mergeOut = mergeAndCount(output1.list, output2.list);    
    return {
      'count': output1.count + output2.count + mergeOut.count,
      'list': mergeOut.list
    };
  }
};





a = [480130,735329,810013,140187,972418,357056,334780,854684,478980,34590,180238,567090,935248,834854,514996,950881,104525,874212,160000,528785,770712,201115,830644,535327,668785,241043,946633,645108,184097,251762,97219,664226,503442,907232,320764,992211,264287,171895,846895,259618,722836,543484,343059,658083,378338,858054,125316,999214,248618,285315,527999,535681,2781,358642,71007,671565,116036,17639,833024,300132,785753,930243,480710,805546,353826,317825,797757,134464,6072,161003,394081,728907,704486,253492,386990,599175,111545,28657,598389,360162,313971,642739,895842,833103,1380,966849,21019,633767,500839,854043,450251,802943,784285,930960,608489,654462,765136,922597,788925,771207,83599,699357,500114,304436,952848,403455,419963,580745,432111,534703,457258,262433];

//console.clear();
var r = sortAndCount(a);
console.log('RESULT',r.count);
// mergeSort(a)
//console.log('MERGE SORT', a.length, numberOfInversion);


