# JS 经典面试题库

---------------------

## **1.以下代码执行结果：**
```js
function fn1() {
  alert(1)
};

function fn2() {
  alert(2)
};

fn3 = fn2.call; //这只是一个简单的赋值

fn2.call(fn1); //请问输出什么结果，为什么2

fn3.call(fn1); //请问输出什么结果，为什么1
```

表示：

Fn3.call(fn1)==>fn2.call.call(fn1)

fn3执行，并且fn3的this指针指向fn1 相当于fn1.fn3();fn1.call();

注：

1、fn1 fn2都是Function的实例，并且call，apply方法是function类上的原型方法

2、当call运行时，call里面的this是指谁

3、面向对象的编程中，类方法里的this是谁，就相当于谁在执行这个方法

4、call本身也是Function类的实例，也就是说call也可以执行call的方法

## **2.以下代码执行结果：**
```js
    'use strick'
    (function() {
      var a = b = 5
    })();
    console.log(b);
    console.log(a);
   ```

运行结果：`Uncauht ReferenceError:a is not defined at 6

## **3.以下代码执行结果：**
```js
    function a() {
      alert(x);
      var x = 2;
      x++;
      alert(x);
    }

    function b() {
      alert(x);
      x++;
      alert(x);
    }
    if (0 < 100 < (0 + 4)) {
      a();
    } else {
      b();
    }
```
运行结果：`undefined，3`

## **4.以下代码执行结果：**
```js
    var a = 1;
    setTimeout(function() {
      console.log(a)
    }, 0);
    var date1 = new Date();
    while ((new Date().getTime() - date1.getTime()) <= 10000) {};
    console.log(a);
    a = '2';
```
几乎同时输出1和2

## **5.以下程序可能的输出顺序**
```js
    window.setTimeout(function() {
      console.log("1")
    }, 1);
    window.setTimeout(function() {
      console.log("2")
    }, 2);
    window.setTimeout(function() {
      console.log("2")
    }, 3);
    window.requestAnimationFrame(function() {
      console.log("4")
    }, 4);
```

A.1,2,3,4

B.4,1,2,3

C.1,2,4,3

D.1,4,2,3

## **6.以下程序可能的输出顺序**

```js
    var a = 10;
    function b(){console.log(a)};
    var c = function(){
      a =20;
      b();
    }
    c();
```
答案：20

## **7.**
```js
 var scope = 'global scope';
	function checkScope(){
		var scope = 'local scope';
		function f(){
			return scope;
		}
		return f;
	}
	checkScope()();
```
答案："local scope"

## **8.**
```js
var scope = 'global scope';
function checkScope(){
	var scope = 'local scope';
	function f(){
		return scope;
	}
	return f();
}
checkScope();
```
答案："local scope"

## **9.**
```js
var scope = 'global scope';
function checkScope(){
	var scope = 'local scope';
	return new Function('return scope');
}
checkScope();
```
答案：
```js
function anonymous() {
return scope
}
```

## **10.**
```js
var m = 2,a=b=0;
function add(n){
	return n = n+1;
}
x = add(m);
function add(n){
	return n = n+3;
}
y = add(m);
console.log(x)
console.log(y)
```
答案：x=5;y=5

## **11.**
```js
var length = 20;
function fn(){
	alert(this.length)
}
var obj = {
	length:5,
	method:function(fn){
		fn();
		arguments[0]()
	}
}
obj.method(fn)
```
答案：20；1

## **12.**
```js
var name = 'apple';
var person = {
	name: 'orange',
	pro:{
		name:'banana',
		getName:function(){
			console.log(this)
			return this.name
		}
	}
}
console.log(person.pro.getName());
var pepole = person.pro.getName;
console.log(pepole());
```
答案：

this: Object {name: "banana", getName: function}
name: banana
this: Window {stop: function, open: function, alert: function, confirm: function, prompt: function…}
name: apple

## **13.**

```js
alert(typeof(null)) // object
alert(typeof(undefined)) // undefined
alert(typeof(NaN)) // number
alert(NaN === undefined) //false
alert(1+2+'3'+4) // 334
var str = '12345f'
alert(typeof(str++)) // number
alert('a' == new String('a')) // true
```

## **14.**
 ```js
 var x = 1 , y = 0, z = 0;
var add = function (x){
    return x = x + 1
}
y = add(x)
function add(x){
    return x = x + 3
}
z = add(x)
console.log(x, y, z) 
 ```
答案：1 2 2

## **15.**
```js
var myObject = {
    num: 2,
    add: function() {
        this.num = 3; 
        (function() {
            console.log(this.num) 
            this.num = 4
        })()
        console.log(this.num) 
    },
    sub: function(){
        console.log(this.num)
    }
}
myObject.add() 
console.log(myObject.num) 
console.log(num) 
var sub = myObject.sub;
sub() 
```
答案： 1 3 3 4 4 

## **16.**
```js
var i = 0;
for(i=0;i++<3;){
    setTimeout(function(){
        return function (){console.log(i)}
    }(),0)
}
```
答案：4 4 4

## [>> 查看更多](../README.md)