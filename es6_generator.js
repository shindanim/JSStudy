function* myGen() {
	yield 1;
	yield 2;
	yield 3;
	return 4;
}

const myItr = myGen();

console.log(myItr.next()); // { value: 1, done: false }
console.log(myItr.next()); // { value: 2, done: false }
console.log(myItr.next()); // { value: 3, done: false }
console.log(myItr.next()); // { value: 4, done: true }


function* myGen2() {
    yield myFunc1 = function () {
    	return 1;
    }
    yield myFunc2 = function () {
    	return 2;
    }
    return 3;
}

const myItr2 = myGen2();
console.log(myItr2.next()); // { value: [Function: myFunc1], done: false }
console.log(myItr2.next()); // { value: [Function: myFunc2], done: false }
console.log(myItr2.next()); // { value: 3, done: true }

//yield 키워드가 있는 대입문에 값이 할당된다
function* myGen3() {
    const x = yield 1; // x = 10 즉, 10 = yield 1
    const y = yield (x + 1); // y = 20 20 = yield 11
    const z = yield (y + 2); // z = 30 30 = yield 22
    return x + y + z; // 10 + 20 + 30
}

/*
next()를 호출할 때 인수로 값을 지정하면 yield 키워드가 있는 대입문에 값이 할당되는 것을 볼 수 있다.
이런 식으로 제너레이터와 호출자는 서로 제어권 뿐만 아니라 데이터까지 주고받을 수 있다.
자, 여기까지 알고 나서 다시 myGen 내부를 들여다보자. 분명 함수의 내부에서는 콜백도 없고 프라미스도 없지만, 비동기적으로 데이터를 주고받으며 실행되고 있다.
*/

const myItr3 = myGen3();
console.log(myItr3.next()); // { value: 1, done: false }
console.log(myItr3.next(10)); // 11
console.log(myItr3.next(20)); // why 22 ? => 그냥 20이 y자리에 들어감 
console.log(myItr3.next(30)); //


/* todo : more code sample */
const getId = function (num, callback) { console.log('this is getId'); callback('testID');};
const getEmail = function (mail, callback) { console.log('this is getEmail'); callback('testMail');};
const getName = function (name, callback) { console.log('this is getName'); callback('myName');};
const order = function (order, callback) { console.log('this is order'); callback('return');};


function* orderCoffee(phoneNumber) {
    const id = yield getId(phoneNumber);
    const email = yield getEmail(id);
    const name = yield getName(email);
    const result = yield order(name, 'coffee');
    return result;
}

function orderCoffee(phoneNumber, callback) {
    getId(phoneNumber, function(id) {
        console.log('next');
        getEmail(id, function(email) {
            getName(email, function(name) {
                order(name, 'coffee', function(result) {
                    callback(result);
                });
            });
        });
    });
}

orderCoffee('01000000000', (()=>{console.log('order done!')}));



/* reference 
** https://meetup.toast.com/posts/73 [es6 generator]
** http://hacks.mozilla.or.kr/2015/08/es6-in-depth-generators/
** https://brunch.co.kr/@hika/4
** https://www.chromestatus.com/feature/4959347197083648
*/
