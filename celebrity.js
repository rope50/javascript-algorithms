/**
*
* Problema de la celebridad
*
*/
group = [
	[1,0,1,0],
	[0,1,1,0],
	[0,0,1,0],
	[0,0,1,1]
];

function celebrity(group){
	var celeb = 0;
	for(var i in group){
		celeb = knows(group, i, celeb) ? celeb : i;
		if(celeb === i){
			console.log('new celebrity', i)
		}
	}
	return celeb;
}
//person 1 knows person 2
function knows(group, p1, p2){
	return group[p1][p2];
}

console.log(celebrity(group));