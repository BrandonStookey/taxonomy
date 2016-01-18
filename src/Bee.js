var Bee = function() {
	// Grub.call(age, 5);
	//age : 1,
	//color: 'yellow',
	//Grub.call(this, food);
	//Bee.prototype = Object.create(Grub.prototype);
	// Bee.prototype.constructor = Bee;
	// Bee.prototype

	// obG j.coloruG= 'ye

  Grub.call(this);
  this.age=5;
  this.color='yellow';
  this.job = 'keep on growing';

};

Bee.prototype = Object.create(Grub.prototype);
Bee.prototype.constructor = Bee;


