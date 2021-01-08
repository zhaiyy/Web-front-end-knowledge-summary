// 深拷贝
function deepClone(source) {
    const targetObj = source.constructor === 'Array' ? [] : {}
    for(let key in source) {
        const value = source[key]
        if(typeof key === 'object') {
           targetObj[key]  = deepClone(value)
        } else {
            targetObj[key]  = value
        }
    }
    return targetObj
}

const obj1 = {a: 1, b:2}
const obj2 = deepClone(obj1)
obj2.a = 2
console.log(obj1, obj2)

// Promise 实现

const promiseFn = new Promise((resolve, reject) => {
    setTimeout(() =>{
        resolve('success')
    },100)
    setTimeout(() =>{
        reject(new Error('failed'))
    },200)
})
promiseFn.then((res) => {
    console.log(res)
}, (err) => {
    console.log(err)
})


const Pending = 'Pending'
const Fulfiled = 'Fulfiled'
const rejected = 'rejected'
class MyPromise {
    constructor(handle) {
        this.status = 'pending'
        this.value = ''
        this.FulfiledList = []
        this.RejectList = []
        if (typeof handle !== 'function') {
            throw new Error('is not function')
        }
        try {
            handle(this.resolve.bind(this), this.reject.bind(this))
        } catch (err){
            this.reject(err)
        }
    }
    resolve (params) {
        if(this.status !== 'pending') return
        this.status = 'fulfiled'
        this.value = params
        this.FulfiledList.forEach(function (callback) {
            callback(params);
        });
    }
    reject (params) {
        if(this.status !== 'pending') return
        this.status = 'rejected'
        this.value = params
        this.RejectList.forEach(function (callback) {
            callback(params);
        });
    }
    then (successFn, errrorFn) {
        return new MyPromise((resolve, reject) => {
            const onresolve = (value) => {
                const x = successFn(value)
                console.log(x)
                x instanceof MyPromise ? x.then(resolve, reject) : resolve(x)
            }
            const onreject = (value) => {
                const x = errrorFn(value)
                x instanceof MyPromise ? x.then(resolve, reject) : resolve(x)
            }
            if(this.status === 'pending') {
                this.FulfiledList.push(successFn)
                this.RejectList.push(errrorFn)
            } else if( this.status === 'fulfiled'){
                onresolve(this.value)
            } else if(this.status === 'rejected') {
                onreject(this.value)
            }
        })
        
    }
}
const mypeomise = new MyPromise((resolve, reject) => {
    setTimeout(() =>{
        resolve('success')
    },100)
    setTimeout(() =>{
        reject(new Error('failed'))
    },200)
})
mypeomise.then((res) => {
    console.log('mypeomise' +res)
}, (err) => {
    console.log('mypeomise' +err)
})

// new 的模拟实现
function Otaku (name, age) {
    this.name = name
    this.age = age
}
Otaku.prototype.say = function () {
    console.log(this.name + ' age is ' + this.age)
}

const obj = new Otaku('Tom', '11')
obj.say()

function newFactory(parent) {
    const newObj = new Object() // 生成一个新对象
    const param = [...arguments].slice(1) // 获取传递参数
    newObj.__proto__ = parent.prototype // 更改原项链指针
    parent.apply(newObj, param) // 更改this 指针
    return newObj 
}
const newObj = newFactory(Otaku, 'Jack', '18')
newObj.say()

// bind 的模拟实现

function bingFn(name) {
    this.name = name
    this.say()
}
const bind = bingFn.bind(obj, 'bind')
bind()

Function.prototype.bind1 = function (context) {
    let self = this
    console.log(arguments)
    var args = Array.prototype.slice.call(arguments, 1);
    return function() {
        self.apply(context, args)
    }
}
Function.prototype.bind2 = function (context) {
    context.fn = this
    const data = [...arguments].slice(1)
    return function() {
        return context.fn(data)
    }
}
const bind1 = bingFn.bind1(obj, 'bind1')
bind1()

const bind2 = bingFn.bind2(obj, 'bind2')
bind2()
// apply 
var objapply ={
    name: "xb",
    getName: function(age){
      console.log(this.name + ' 年龄 ' + age);
    }
  }
  
  var me = {
    name: "apply"
  }
  objapply.getName.apply(me, ['11'])
  objapply.getName.call(me, '11')

Function.prototype.apply1 = function (context) {
    context.fn = this
    const data = arguments[1]
    context.fn(data)
}
Function.prototype.call1 = function (context) {
    context.fn = this
    const data = [...arguments].slice(1)
    context.fn(data)
}
objapply.getName.apply1(me, ['13'])
objapply.getName.call1(me, ['13'])

// 函数节流 n秒之内指出发一次
function throttle(fn, time) {
    let startTime = null
    return function () {
        const endtime = + new Date()
        if(endtime - startTime > time) {
            fn()
            startTime = endtime
        }

    }
}
function fn() {
    console.log('hahhah')
}
// setInterval(throttle(fn,2000),10)

// 防抖 n 秒之后执行回调，如果触发重新计时
function debounce (fn, time) {
    let timer = null
    let currenttime = 0
    return function() {
        if(timer) {
            clearTimeout(timer)
            timer = null

        }
         timer = setTimeout(() => {
             console.log(currenttime, time )
            if(currenttime > time ) { // 可以执行
                fn()
                currenttime = 0
            } else { 
                currenttime ++
            }
        }, 1)
    }
}
function debouncefn() {
    console.log('debounce')
}
// setInterval(debounce(debouncefn,2),100)

// 数组 flat
const ary = [1,[1,2], [1,[2,3], 4]]

Array.prototype.flat1 = function() {
    const newary = []
    const ary = this
    ary.forEach((cur) => {
        console.log(typeof(cur), cur.constructor, cur.prototype)
        if(cur.constructor === Array) {
            return newary.push(...cur)
        } else {
            return newary.push(cur)
        }
    })
    return newary
}
console.log('flat1', ary.flat1())
console.log('flat', ary.flat())
console.log('flatMap', ary.flatMap(ele => [ele*2]))

/*
1. 简单自我介绍
2. 目前的项目，以及项目的部署
3. 项目涉及到 node 部署，简单介绍
4. 关注新信息的途径
5. cookie 有哪些属性，如何禁止其他客户端访问 cookie 同域
6. cookie 如何只限制https 访问
7. 状态码 304，301，302 是什么， 如何做的重定向
8. 什么是伪数组， 如何转换
9. css 单位有哪些，rem em 的区别
10. js 基本数据类型， es6 新增的数据类型
10. 什么是原型
11. 实现 布局，头部导航 100px,底部容器自适应，容器内三列布局，左中右，左右 200宽度
12. 算法： const pop = mapApp(4); pop(1,2,3,4) //10; pop(1)(2,3,4) // 10; pop(1)(2)(3)(4) // 10
 */
function mapApp(count) {
    return function pop (...data) {
        const num = count - data.length
        if(num === 0) {
            return data.reduce((pre, next) => pre + next)
        } else {
            return function (...nextdata) {
                return pop.apply(null, data.concat(...nextdata))
            }
        }

    } 
}
const pop = mapApp(4); 
console.log(pop(1,2,3,4)) //10; 
console.log(pop(1)(2,3,4)) // 10; 
console.log(pop(1)(2)(3)(4)) // 10

// 当前浏浏览器url为：https://www.genshuixue.com?user=gsx&id=111
function parseUrl(url) {
     const regResult = url.split('?')
     const params = regResult[1]
     if(!params) return {}
     const list = params.split('&')
     const urlParams = {}
     list.forEach(ele => {
         const [key, value] = ele.split('=')
         urlParams[key] = value
     })
     return urlParams
 
 }
 console.log(parseUrl('https://www.genshuixue.com?user=gsx&id=111'))
 // {user: 'gsx', id: '111'}

var objfn = {a: 1}
function fn(obj) {
    obj.a = 2
    obj = {a: 3}
    obj.b = 2
}
fn(objfn)
console.log(objfn)
function Otaku (name, age) {
    this.name = name;
    this.age = age;

    this.habit = 'Games';
}

Otaku.prototype.strength = 60;

Otaku.prototype.sayYourName = function () {
    console.log('I am ' + this.name);
}

function objectFactory() {
    var obj = new Object(),
    Constructor = [].shift.call(arguments);
    obj.__proto__ = Constructor.prototype;
    Constructor.apply(obj, arguments);
    return obj;
};

function newFactory() {
    let obj = {}
    let params = [...arguments]
    let parentObj = params[0]
    obj.__proto__ = parentObj.prototype
    parentObj.apply(obj, params.slice(1))
    return obj
}

var person = objectFactory(Otaku, 'Kevin', '18')
var person1 = newFactory(Otaku, 'Kevin1', '19')

console.log(person.name, person1.name) // Kevin
console.log(person.habit, person1.habit) // Games
console.log(person.strength, person1.strength) // 60

person.sayYourName(); // I am Kevin
person1.sayYourName(); // I am Kevin

/*1、已知var str='123abc456def'，请实现以下功能（10分）：
a) 用正则过滤出所有的数字，结果变成类似123456
b) 将字符串中的数字乘以2，并且将字母用中括号括起来，类似246[a][b][c]81012[d][e][f]*/

function filterNum(str) {
    if(!str) return ''
    const reg = /\d+\.?\d*/img
    let numstr = ''
    str.replace(reg, function($1) {
        numstr = numstr + $1
    })
    return numstr
}
function getNewStr(str) {
    if(!str) return ''
    let newstr = ''

    for(let i =0; i <str.length; i++) {
        const ele = str[i]
        if(!isNaN(+ele)) {
            newstr = newstr +  ele * 2
        } else {
            const ary = [ele]
            newstr = newstr +  `[${ary}]`
        }
    }

    return newstr
}
var str='123abc456def'
console.log(filterNum(str))
console.log(getNewStr(str))


 
/*面试官
3、给定一个数组，要求将数组中所有为0的元素移动到数组的最后，其他元素顺序不变，（10分）
比如：[1,2,0,5,0,6,8,9,0,5,2,0,4]
返回：[1,2,5,6,8,9,5,2,4,0,0,0,0]*/

function filterZero(ary) {
    if(!ary || ary.length === 0 || ary.length === 1) return ary
    const newAry = ary.filter(ele => ele)
    const len = ary.length - newAry.length
    return newAry.concat(new Array(len).fill(0))

}
console.log(filterZero([1,2,0,5,0,6,8,9,0,5,2,0,4]))