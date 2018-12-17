/* Lexical Environment는 자바스크립트 코드에서 변수나 함수 등의 식별자를 정의하는데 사용하는 객체로 생각하면 쉽다. 
** Lexical Environment = Environment Record  + outer (reference for outer LE)
** Environment Record
**   - Object that records binding of identifiers
** outer 
**   - use for referring outer LE
**   - use for scope traversal in duplicated JS code
*/


const myFunc = function () {


};

console.log(typeof myFunc);


/* reference 
** https://meetup.toast.com/posts/129 [Lexical Environment]
*/


