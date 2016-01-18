var Grub = function() {
	this.age = 0;
	this.color = 'pink';
	this.food = "jelly";
};

Grub.prototype.eat = function(){
	return "This bee loves eating " + this.food + "!";
};

