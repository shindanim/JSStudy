/* method call pattern */
const myObject = {
	value: 0, 
	increment: function(inc){
		return this.value += typeof inc === 'number' ? inc : 1;
	}
};

console.log(myObject.increment( ));
console.log(myObject.increment(2));



/* function call pattern (this binding issue) */
let add = function (a, b) {
	return a + b;
};

myObject.double = function () {
   let that = this;
   console.log(that.value);
   const helper = function () {
       console.log(that.value);
       return that.value = add(that.value, that.value);
   }
   return helper();
};

console.log(myObject.double( ));



/* Constructor call pattern */
const Quo = function (str) {
	this.status = str;
};

Quo.prototype.get_status = function( ) {
	return this.status;
};

let myQuo = new Quo("confused");
console.log(myQuo.get_status());



/* apply call pattern */
const array = [3, 4];
const sum = add.apply(null, array);
console.log(sum);

const statusObject = {
	status: 'A-OK'
};

console.log(Quo.prototype.get_status.apply(statusObject));

/* reference
** https://meetup.toast.com/posts/118 [create function object]
** https://meetup.toast.com/posts/123 [calling function]
*/


