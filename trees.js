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
		//var node = this.createNode(value);
		if(!this.root){
			this.root = this.createNode(value);
		}
		else{
			this.insertNode(this.root, value);
		}
	},
	insertNode: function(n, value){
		if(value === n.value){
			return;
		}
		else if(value > n.value){
			if(n.right){
				this.insertNode(n.right, value);
			}else{
				n.right = this.createNode(value);
			}
		}
		else{
			if(n.left){
				this.insertNode(n.left, value);
			}else{
				n.left = this.createNode(value);
			}	
		}
	},
	fill : function(arr){
		for(var i in arr){
			this.addNode(arr[i]);
		}
	},
	preOrder : function(n){
		if(!n){
			n = this.root;
		}
		if(n.left)	this.preOrder(n.left);
		console.log('Pre:', n.value);
		if(n.right)	this.preOrder(n.right);	
	},
	postOrder : function(n){
		if(!n){
			n = this.root;
		}
		if(n.right)	this.postOrder(n.right);	
		console.log('Post:', n.value);
		if(n.left)	this.postOrder(n.left);
	},
	leafs : function(n){
		if(!n){
			n = this.root;
		}
		
		if(!n.left && !n.right)
			console.log('leaf:',n.value);
		else{
			if(n.left)
				this.leafs(n.left);
			if(n.right)
				this.leafs(n.right);	
		}
		
		//leafs(this.root);
	},
	minorDesendent : function(n){
		if(!n){
			n = this.root;
		}
		if(n.left)
			return this.minorDesendent(n.left);
		else
			return n;
	},
	deleteNode : function(value, n){
		if(!n){
			n = this.root;
		}
		if(n.value === value)
			return n;
		else if(value < n.value){
			if(n.left)
				return this.searchNode(n.left, value);
			else
				return null;
		}
		else{
			if(n.right)
				return this.searchNode(n.right, value);
			else
				return null;
		}
	},
	searchNode: function(value, n){
		if(!n){
			n = this.root;
		}
		if(n.value === value)
			return n;
		else if(value < n.value){
			if(n.left)
				return this.searchNode(, n.left);
			else
				return null;
		}
		else{
			if(n.right)
				return this.searchNode(value, n.right);
			else
				return null;
		}
	},
	getPaths1 : function(){
		var pathsArr = [];
		var paths = function(n, path){
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
	getPaths : function(n, path, pathsArr){
		if(!n){
			n = this.root;
		}
		if(!pathsArr){
			pathsArr = [];	
		}
		path = path ? path : "";
		if(path.length)
			path += "->"+n.value;
		else
			path = ""+n.value;
		if(!n.left && !n.right){
			pathsArr.push(path);
		}
		else{
			if(n.left)
				this.getPaths(n.left, path, pathsArr);
			if(n.right)
				this.getPaths(n.right, path, pathsArr);	
		}
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
console.log(tree.getPaths1());