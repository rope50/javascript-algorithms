/**
* Multiple Operations using trees
*
*/

function Tree(){
	this.root = null;
}

Tree.prototype = {
	constructor: Tree,
	createNode:function(value){
		return {
			value : value,
			left  : null,
			right : null
		}
	},
	addNode : function(value){
		var node = this.createNode(value);
		if(!this.root){
			this.root = node;
		}
		else{
			this.insertNode(node);
		}
	},
	insertNode: function(newNode){
		var value = newNode.value;
		var ins = function(n){
			if(value > n.value){
				if(n.right){
					ins(n.right);
				}else{
					n.right = newNode;
				}
			}
			else{
				if(n.left){
					ins(n.left);
				}else{
					n.left = newNode;
				}	
			}
		}
		ins(this.root);
	},
	fill : function(arr){
		for(var i in arr){
			this.addNode(arr[i]);
		}
	},
	preOrder : function(){
		var pre = function(n){			
			if(n.left)	pre(n.left);
			console.log('Pre:', n.value);
			if(n.right)	pre(n.right);	
		}
		pre(this.root);

	},
	postOrder : function(){
		var post = function(n){			
			if(n.right)	post(n.right);	
			console.log('Post:', n.value);
			if(n.left)	post(n.left);
		}
		post(this.root);
	},
	leafs : function(){
		var leafs = function(n){
			if(!n.left && !n.right)
				console.log('leaf:',n.value);
			else{
				if(n.left)
					leafs(n.left);
				if(n.right)
					leafs(n.right);	
			}
		}
		leafs(this.root);
	},
	deleteNode : function(value){
		var node  =  this.searchNode(value);
		if(node === null){
			return;
		}
		else if(!node.left && !node.right){
			//only remove de node
		}
		else if(node.left && node.right){

		}
		else if(node.left && !node.right){

		}
		else if(!node.left && node.right){

		}
	},
	searchNode: function(value){
		var search = function(n){
			if(n.value === value)
				return n;
			else if(value < n.value){
				if(n.left)
					return search(n.left);
				else
					return null;
			}
			else{
				if(n.right)
					return search(n.right);
				else
					return null;
			}
		};
		return search(this.root);
	},
	getPaths : function(){
		var pathsArr = [];
		var paths = function(n,path){
			if(!n) return;
			path = path ? path : "";
			if(path.length)
				path += "->"+n.value;
			else
				path = ""+n.value;
			if(!n.left && !n.right){
				pathsArr.push(path);
				//console.log(n.value, path, paths);
			}
			else{
				if(n.left)
					paths(n.left, path);
				if(n.right)
					paths(n.right, path);	
			}
		};
		paths(this.root);
		return pathsArr;
	},
	validate: function(){
		var validate =  function(n){
			if(!n) return true;
			if(n.left){
				if(n.left.value > n.value){ 
					return true;
				}
				return validate(n.left);
			}
			if(n.right){
				if(n.right.value < n.value ){
					return true;
				}
				return validate(n.right);
			}
		}
		return !validate(this.root);
	}
}

arr  = [100, 50, 25, 75, 12, 18, 15, 200, 150, 300, 175, 180, 160];

tree = new Tree();
tree.fill(arr);
//tree.leafs();
//tree.preOrder();
//tree.postOrder();
console.log(tree.validate());