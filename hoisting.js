console.log(num);

num = 6;

console.log(num);

// No error raise even though 'num' is not declared.
var num;

// error 'num is not defined'
// let num;

myDogName('guma');

function myDogName(name) {
  console.log("my dog's name is " + name);
}

myDogName('boru');

/* following is article about hoisting, let and const 
** https://medium.com/korbit-engineering/let%EA%B3%BC-const%EB%8A%94-%ED%98%B8%EC%9D%B4%EC%8A%A4%ED%8C%85-%EB%90%A0%EA%B9%8C-72fcf2fac365
*/

/* undefined로 초기화하는 것까지 hoisting이라고 하면, 
*/

var x = 'outer scope';
(function() {
  console.log(x);
  var x = 'inner scope';
}());

// let, const선언은 실행중인 실행 컨텍스트의 어휘적 환경(Lexical Environment)으로 범위가 지정된 변수를 정의한다.
// 변수는 그들의 어휘적 환경에 포함될 때 생성되지만, 어휘적 바인딩이 실행되기 전까지는 액세스할 수 없다.
// 어휘적 바인딩이 실행되기 전까지 액세스할 수 없는 현상을 TDZ(Temporal dead zone)라고 한다.
// 어휘적 바인딩에 의해 초기화되며 정의된 변수는 변수가 만들어질 때가 아닌, 값이 해당 초기화 구문 어휘적 바인딩이 실행될 때 값을 할당받는다.
// 디폴트 파라미터(Default Parameters)에서도 TDZ가 적용되는데, 디폴트 파라미터는 주어진 함수의 해당 범위와 내부 범위 사이에 있는 중간 범위에서 실행된다.

(function(a, b = a) {
  console.log(`a = ${a}, b = ${b}`); // a = 1, b = 1
}(1, undefined));

/*
(function(a = b, b) {
  console.log(`${a} , ${b}`); // ReferenceError
}(undefined, 1));
*/


class A extends B { // ReferenceError
	super();
  /* ... */
}
class B {
  /* ... */
}

/*
let/const선언 변수는 호이스팅되지 않는 것이 아니다.
스코프에 진입할 때 변수가 만들어지고 TDZ(Temporal Dead Zone)가 생성되지만,
코드 실행이 변수가 실제 있는 위치에 도달할 때까지 액세스할 수 없는 것이다.
let/const변수가 선언된 시점에서 제어흐름은 TDZ를 떠난 상태가 되며, 변수를 사용할 수 있게 된다.
*/



