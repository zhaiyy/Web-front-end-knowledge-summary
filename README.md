# web front end knoeledge summary

## 目录
* [html知识点](#html知识点)
* [css知识点](#css知识点)
* [html5 ](#html5)
* [css3](#css3)
* [javascript](#javascript)
* [jquert](#jquery)
* [js 深入理解题](#js深入理解题)
* [vue](#vue)

* [计算机网络](#计算机网络)
* [算法程序](#算法程序)

## html知识点

### 为什么要进行标签语义化
语义化的网页的好处：
* 对搜索引擎友好，有了良好的结构和语义你的网页内容自然容易被搜索引擎抓取，这种符合搜索引擎收索规则的做法，网站的推广便可以省下不少的功夫
* 而且可维护性更高
* 结构清晰，十分易于阅读。
* 方便布局

### 什么是行内元素，块级元素及区别
行内元素和块级元素的区别：
* 行内元素会再一条直线上，是在同一行的。行内元素不可以控制宽和高，它的宽和高，是随标签里的内容而变化。如果你要将行内元素变成块级元素，那么就只需要在该标签上加上样式 display:block;
* 块级元素各占一行。是垂直方向的！如果你要将行内元素变成块级元素，那么就只需要在该标签上加上样式 display:inline-block;

### 常用的行内元素和块级元素
* 行内元素 span img b select input
* 块级元素 div a ul li h1 h2 h3 hr


## css知识点
## html5
## css3
## javascript
## jquery
## js深入理解题
## vue
## nodejs
## 计算机网络
## 算法程序
# 图片都有哪几种格式？各自的优缺点是什么？png格式有哪些？各自的特点是什么？

* PNG8：8位的png最多支持256（2的8次方）种颜色，8位的png其实支持不透明、索引透明、alpha透明。
* PNG24：支持2的24次方种颜色，表现为不透明。
* PNG32：支持2的32次方种颜色，32位是我们最常使用的格式，它是在png在24位的png基础上增加了8位的透明信息，支持不同程度的半透效果。

# 如何让几个div水平排列

* css float
* css display:inline
* css flex ( [flex使用](https://www.talkingcoder.com/article/6424383824800383038))

# 怎么清除浮动

* 给父级元素添加 clear:both
* 给父级元素添加 overflow:auto;zoom=1
* 给父级元素添加 overflow:hidden
* 给浮动元素的临界元素，即下一个兄弟元素，添加<div style=“clear:both”\>



# css垂直居中方法

* 使用 Line-Height 垂直居中图片

  html

```
<div id="parent">
    <img src="image.png" alt="" />
</div>
```

  css

```
#parent {
    line-height: 200px;
}

#parent img {
    vertical-align: middle;
}
```
##CSS表格法

html

```
<div id="parent">
    <div id="child">Text here</div>
</div>
```

css

```
#parent {
    display: table;
}

#child {
    display: table-cell;
    vertical-align: middle;
}
```

## 绝对定位和负边距法

html

```
<div id="parent">
    <div id="child">Content here</div>
</div>
```

css

```
#parent {
    position: relative
}

#child {
    position: absolute;
    top: 50%;
    left: 50%;
    height: 30%;
    width: 50%;
    margin: -15% 0 0 -25%;
}
```

这种方法利用绝对定位先将元素的上边界和左边界移动到50%的位置，再根据元素的尺寸调整负边距以达到居中的效果。

## 上下内边距（padding）相等法

 这种方法通过设置上下padding相等来实现垂直居中。

  html

```
<div id="parent">
    <div id="child">Content here</div>
</div>
```

  css

```
#parent {
    padding: 5% 0;
}

#child {
    padding: 10% 0;
}
```

  上面的代码使用了相对尺寸，然而如果需要指定元素尺寸时，就需要使用绝对尺寸并做一个简单的计算了。例如，如果指定父元素高度为400px，子元素高度为100px，要实现垂直居中需要设置父元素的上下padding为150px。

# 浮动的原理

使的当前元素脱离文档流存在，也就是像浮云一样漂浮在普通流之上

# 如何使一个jquery获取的元素，变成原生的dom元素

$(‘div’)[0]

# jauery中map和each的区别

map将遍历的结果映射到一个新的数组，原来的数组不变。each还是原来的数组


# 什么是事件冒泡

IE 的事件流就叫做事件冒泡，即事件开始时有最具体的元素接受，然后逐级向上传播到较为不具体的节点

# 什么是事件捕获

不大具体的节点更早的接收到事件，而具体的事件节点最后接受事件。

事件的整体处理过程时，先进行事件的捕获在进行事件冒泡

# 阻止事件冒泡

方法阻止不再派发事件。终止事件在传播过程的捕获、目标处理或起泡阶段进一步传播。调用该方法后，该节点上处理该事件的处理程序将被调用，事件不再被分派到其他节点。

 e.stopPropagation()

IE e.cancelBubble()

# 阻止事件默认行为

e.preventDefault

e.returnValue = false

# 什么是事件委托

事件委托，对事件处理程序过多 问题的解决方案

事件委托利用了事件冒泡，例如当click 事件一直冒泡到document 层次，也就是说我们可以为整个页面指定一个click事件处理程序，而不必给每一个可单击的元素分别添加事件处理程序

dom.addEventListener

dom.attachEvent (IE)

优点是：

（1）可以大量节省内存占用，减少事件注册，比如在table上代理所有td的click事件就非常棒

（2）可以实现当新增子对象时无需再次对其绑定事件，对于动态内容部分尤为合适

缺点是：

事件代理的应用常用应该仅限于上述需求下，如果把所有事件都用代理就可能会出现事件误判，即本不应用触发事件的被绑上了事件。

# 实现事件模型

A：大致实现思路就是创建一个类或是匿名函数，在bind和trigger函数外层作用域创建一个字典对象，用于存储注册的事件及响应函数列表，bind时，如果字典没有则创建一个，key是事件名称，value是数组，里面放着当前注册的响应函数，如果字段中有，那么就直接push到数组即可。trigger时调出来依次触发事件响应函数即可。

# 事件如何派发也就是事件广播（dispatchEvent）

A：一般我们在元素上绑定事件后，是靠用户在这些元素上的鼠标行为来捕获或者触发事件的，或者自带的浏览器行为事件，比如click，mouseover，load等等，有些时候我们需要自定义事件或者在特定的情况下需要触发这些事件。这个时候我们可以使用IE下fireEvent方法，高级浏览器（chrome,firefox等）有dispatchEvent方法。

ie下的例子：

```

//document上绑定自定义事件ondataavailable

document.attachEvent('ondataavailable','function (event){

   alert(event.eventType);

});

var obj=document.getElementById("obj");

//obj元素上绑定click事件

obj.attachEvent('onclick','function (event){

alert(event.eventType);

});

//调用document对象的createEventObject方法得到一个event的对象实例。

var event = document.createEventObject();

event.eventType = 'message';

//触发document上绑定的自定义事件ondataavailable

document.fireEvent('ondataavailable',event);

//触发obj元素上绑定click事件

document.getElementById("test").onclick = function (){

  obj.fireEvent('onclick', event);

};

```


高级浏览器（chrome,firefox等）的例子：

```

//document上绑定自定义事件ondataavailable

document.addEventListener('ondataavailable',function (event){

   alert(event.eventType);

},false);

var obj = document.getElementById("obj");

//obj元素上绑定click事件

obj.addEventListener('click`, function (event){

    alert(event.eventType);

},false);

//调用document对象的 createEvent 方法得到一个event的对象实例。

var event = document.createEvent('HTMLEvents');

// initEvent接受3个参数：

//事件类型，是否冒泡，是否阻止浏览器的默认行为

event.initEvent("ondataavailable",true,true);
event.eventType ='message';

//触发document上绑定的自定义事件ondataavailable

document.dispatchEvent(event);

var event1 = document.createEvent('HTMLEvents');

event1.initEvent("click",true,true);

event1.eventType = 'message';

//触发obj元素上绑定click事件

document.getElementById("test").onclick = function (){

   obj.dispatchEvent(event1);

};
```

# JavaScript 作用域和作用域链

### 全局作用域(Global Scope)

1. 最外层函数和在最外层函数外面定义的变量拥有全局作用域
2. 所有末定义直接赋值的变量自动声明为拥有全局作用域
3. 所有window对象的属性拥有全局作用域
window对象的内置属性都拥有全局作用域，例如 `window.name`、`window.location`、`window.top`

### 局部作用域(Local Scope)

和全局作用域相反，局部作用域一般只在固定的代码片段内可访问到，最常见的例如函数内部，所有在一些地方也会看到有人把这种作用域称为函数作用域 。

## 作用域链(Scope Chain)

1. 在函数创建时，它的作用域链中会填入一个全局对象，该全局对象包含了所有全局变量。
2. 函数执行时会创建一个称为“运行期上下文(execution context)”的内部对象，运行期上下文定义了函数执行时的环境。每个运行期上下文都有自己的作用域链，用于标识符解析，当运行期上下文被创建时，而它的作用域链初始化为当前运行函数的[[Scope]]所包含的对象。
3. 这些值按照它们出现在函数中的顺序被复制到运行期上下文的作用域链中。它们共同组成了一个新的对象，叫“活动对象(activation object)”，该对象包含了函数的所有局部变量、命名参数、参数集合以及this，然后此对象会被推入作用域链的前端。
4. 当运行期上下文被销毁，活动对象也随之销毁。

### 代码优化

从作用域链的结构可以看出，在运行期上下文的作用域链中，标识符所在的位置越深，读写速度就会越慢。因为全局变量总是存在于运行期上下文作用域链的最末端，因此在标识符解析的时候，查找全局变量是最慢的。所以，在编写代码的时候应尽量少使用全局变量，尽可能使用局部变量。一个好的经验法则是：如果一个跨作用域的对象被引用了一次以上，则先把它存储到局部变量里再使用。

# Javascript 原型链及 原型链 继承

1. C.prototype 用于建立由new C()创建的对象的原型

* 每一个函数都有一个天生自带的属性：prototype（普通函数也有，只不过没有什么意义）

* 只有在构造函数模式中，才能发挥效果，prototype属性存储的是一个对象数据类型的值

* 这个对象中有一个自己特殊的属性：constructor，其有指回函数自己

2. obj._proto_ 获取obj对象的原型对象的非标准方法，每一个对象数据类型（或实例）天生自带的属性

3. Object.getPrototypeOf(obj)是ES5中用来获取obj对象的原型对象的标准方法

4. Object.hasOwnProperty(obj)用来检查某一个属性是否属于某一个对象的私有属性

javascript继承机制是基于原型，而不是类。简单白话理解即：B如果想继承A的属性和方法，只需要把A的一个实例给B的原型链就可以了

# 谈谈对闭包的理解。闭包会造成哪些影响？为什么会造成该影响？

*闭包就是能够读取其他函数内部变量的函数。*

*由于在Javascript语言中，只有函数内部的子函数才能读取局部变量，因此可以把闭包简单理解成"定义在一个函数内部的函数"。*

*所以，在本质上，闭包就是将函数内部和函数外部连接起来的一座桥梁。*

在本书中，对闭包的理解是这样解释的：

* JavaScript 语序引用在当前函数以外定义的变量
* 即使外部函数已经返回，当前函数依旧可以医用在外部函数所定义的变量
* 闭包比创建他们的函数有更长的生命周期
* 闭包在内部存储器外部变量的引用，并能够读写这些变量

**闭包的特性：**

①.封闭性：外界无法访问闭包内部的数据，如果在闭包内声明变量，外界是无法访问的，除非闭包主动向外界提供访问接口；
②.持久性：一般的函数，调用完毕之后，系统自动注销函数，而对于闭包来说，在外部函数被调用之后，闭包结构依然保存在
系统中，闭包中的数据依然存在，从而实现对数据的持久使用。

优点：

① 减少全局变量。

② 减少传递函数的参数量

③ 封装；

闭包的风险:

 由于闭包会使得函数中的变量会被更长时间保存在内存中，消耗很大，所以不能滥用闭包，否则会造成网页的性能问题，在IE中更是可能导致内存泄露。解决方法是，在退出函数之前，将不使用的局部变量全部删除。

闭包会在父函数外部，改变父函数内部变量的值。所以，如果你把父函数当作对象（object）使用，把闭包当作它的公用方法（Public Method），把内部变量当作它的私有属性（private value），这时一定要小心，不要随便改变父函数内部变量的值。

# 函数节流

我们聊了聊函数去抖（debounce），去抖的作用简单说是 使连续的函数执行降低到一次（通常情况下此函数为 DOM 事件的回调函数），核心实现也非常简单，重复添加定时器即可.

简单的说，函数节流能使得连续的函数执行，变为 固定时间段 间断地执行。

对于常见的场景，如网页滚动时，经常会有滚动到哪时做什么样的动画效果，遂要注册onscroll事件，如何减少触发次数，到达优化性能，同时又满足效果要求不卡顿，一个是优化事件内代码，减少代码量，二就是做函数节流。

轻轻滚动下窗口，控制台打印了 N 多个 *hello world* 字符串。如果 scroll 回调不是简单的打印字符串，而是涉及一些 DOM 操作，这样频繁的调用，低版本浏览器可能就会直接假死，我们希望回调可以间隔时间段触发，比如上面的例子每 1000ms 打印一次，如何实现之？

```
 //lazyload();
 debounce(lazyload,window);
 };
 function debounce(method,context){
    clearTimeout(method.timeout);
    method.timeout = setTimeout(function(){
          method.call(context);
    },500);
 }
 function lazyload(){
 console.log("scroll执行了"+scrollnum);
  }
```

 underscore **delay**

# 设计模式

* 单例模式
* 构造函数模式
* 工厂模式
* 基于构造函数的原型链模式

# ajax请求的原理

* 首先创建一个XHR对象

  var xhr = new XMLHttpRequest()
* 在使用XHR对象的时候，要调用open方法，接受三个参数：要发送的请求类型（get,post,等），请求的url，以及是否进行异步加载的 布尔值

  xhr.open(‘get’,’example.text’,false)
* 需要发送特定的请求send方法，接收一个参数即作为请求主体发送的数据。如果不需要通过主体发送请求则必须传入 null.

  xhr.send(null);
* 根据返回的状态码，进行下一步的操作

  收到响应，响应的数据会自动填充XHR对象，相关属性

  responseText:作为响应主体被返回的文本

  responseXML:作为响应的内容类型"text/xml” 或 “application/xml”

  status:响应返回的http状态

  statusText:http状态的说明

  if((xhr.status >= 200 && xhr.status < 300) || (xhr.status == 304)){

  alert(xhr.responseText)

  }else{

  alert(xhr.status)

  }

# get && post

get ,post 都是作为 浏览器进行发送请求时的 请求类型

有一些简单的不同

* get 请求 请求的字节有限制，最多2048（实际上get请求本质上是没有限制的，主要是URL对长度有限制），post没有限制
* get 请求是从 url 中进行提交数据，post 是在header 中提交数据
* post 请求 相对于 get请求更加安全

其实最本质上 get请求或者post 请求 都是tcp链接，本质上是没有差别的

但GET和POST还有一个重大区别，简单的说：

GET产生一个TCP数据包；POST产生两个TCP数据包。

详细点说也就是

get请求，浏览器会把header ，data数据一起发送出去，服务器响应 200，返回数据

post 请求，首先会吧 header 发送出去，然后服务器返回100 continue ，浏览器再把data发送给服务器，服务器响应 200

# HTTP content-type

Content-Type，内容类型，一般是指网页中存在的Content-Type，用于定义网络文件的类型和网页的编码，决定浏览器将以什么形式、什么编码读取这个文件，这就是经常看到一些Asp网页点击的结果却是下载到的一个文件或一张图片的原因

* text/html
* image/jpeg
* image/gif

# 如何进行跨域

只要协议、域名、端口有任何一个不同，都被当作是不同的域

* 是通过在同源域名下架设一个代理服务器来转发，JavaScript负责把请求发送到代理服务器，代理服务器再把结果返回，这样就遵守了浏览器的同源策略。这种方式麻烦之处在于需要服务器端额外做开发
* JSONP 它有个限制，只能用GET请求，并且要求返回JavaScript。这种方式跨域实际上是利用了浏览器允许跨域引用JavaScript资源。

  即Web页面上调用Js文件时可以不受跨域限制的影响，不仅如此，凡是拥有'src'这个属性的标签都拥有跨域的能力，比如：script, img, iframe标签。

```
var jsonp = document.createElement('script');
jsonp.type = 'text/javascript';
jsonp.src = 'http://www.example.com/remote.js';
document.getElementsByTagName('head')[0].appendChild(jsonp);

```

* 通过CORS跨域 ，CORS（Cross-Origin Resource Sharing）跨域资源共享，定义了必须在访问跨域资源时，浏览器与服务器应该如何沟通。CORS背后的基本思想就是使用自定义的HTTP头部让浏览器与服务器进行沟通，从而决定请求或响应是应该成功还是失败。

**因此，实现CORS通信的关键是服务器。只要服务器实现了CORS接口，就可以跨源通信。**

相关Ajax代码可能如下所示：

```
<script type="text/javascript"\>

 var xhr = new XMLHttpRequest();

 xhr.open("￼GET", "http://segmentfault.com/u/trigkit4/",true);

 xhr.send();

</script\>

```

服务器端对于CORS的支持，主要就是通过设置Access-Control-Allow-Origin来进行的。如果浏览器检测到相应的设置，就可以允许Ajax进行跨域的访问。

* CORS和JSONP对比
  * JSONP只能实现GET请求，而CORS支持所有类型的HTTP请求。
  * 使用CORS，开发者可以使用普通的XMLHttpRequest发起请求和获得数据，比起JSONP有更好的错误处理。
  * JSONP主要被老的浏览器支持，它们往往不支持CORS，而绝大多数现代浏览器都已经支持了CORS）。

CORS与JSONP相比，无疑更为先进、方便和可靠。

# JavaScript把一个参数从页面A传递给页面B，进行某些操作，然后由页面B回传给页面A


1. 通过 url 传递
2. html5的话可以用 sessionStorage 或 localStorage很容易的

  * sessionStorage 是会话存储，关闭浏览器就没了

 * localStorage 是持久化存储，完全可以替代cookie 存储空间更大。

  实现方法

  存：sessionStorage["par1"]="123";

  取：sessionStorage["par1"]

  localStorage实现方法和sessionStorage一样

# 从URL输入到页面展现发生了什么?

1. DNS解析
2. TCP连接
3. 发送HTTP请求
4. 服务器处理请求并返回HTTP报文
5. 浏览器解析渲染页面
6. 连接结束


# JSON是什么？(JSON和JavaScript对象有什么区别？)如何把JS对象转化为JSON字符串？又如何把JSON字符串转化为JavaScript对象？

Json是一种轻量级的数据交换格式

基本格式：

数据在键值对中，数据有逗号隔开，花括号保存对象，方括号保存数组。

把对象转换成json字符串：

JSON.stringify(obj1);

把JSON字符串转换成js对象：

JSON.parse(strJSON);

注：如果字符串不是json格式的，会报错

1. 数组和对象之间的关系是什么？

* 数组是从对象中延伸出来的，数组就是对象
* 数据集合既可以用数组表示又可以用对象表示
* 数组是有序的集合，对象是无序的
* 数组中的对象是没有名称的，对象中的数据是有名称的
* 数组是一种更高效的优化的对象，速度快，效率更高，Object类上的比较少

# call和apply的作用的区别是什么？

作用：都是用来改变this关键字的指针的

区别：Call接收参数是一个一个接受的，apply是数组的形式接收的

# eval的作用是什么?

数据转换引擎，把字符串转换成js表达式，并且让代码执行

# alert({})弹出的结果是什么，为什么？

[object Object]

[object 类名] Object.prototype.tostring

# 如何严格的判断一个数据是数组（Array）类的实例
`function isArray(val){return val instanceof Array}`

# 说一说JS中异常捕获是用什么代码实现的？
`try{}catch(e){}finally{}`

# 用什么方法实现对函数内置的arguments对象进行排序？
```
[].sort.call(arguments,function(a,b){

return a-b;

})
```

# 为什么文档集合不能直接借用数组类的sort方法进行排序呢？

因为其为类数组，但不是真正的数组，所有就不能直接借用sort的方法


# es6的 新增的 特性

* const/let
* ()=>{}指针函数
* …type
* 可以按照一定的模式，从数组或者对象中获取数据，进行复制，也就是解构
* 函数中的默认值
* class extents super
* import

# 简单介绍一下 const/let

const,let 是由原本es5中的 var 分解来的

let 是进行 变量的定义，由于 js没有块级作用域的概念，所以 var定义 变量的时候，会出现 作用域泄露的问题。用let定义变量 只会在自己当前的块级作用域内生效。

const 是用来定义常量，也就是说定义过的变量是不可更改的

# 简单介绍一下 es6中的 promise

promise es6新增的异步加载

```
var promise = new Promise(function(resolve, reject) {

  if (/\* 异步操作成功 \*/){

    resolve(value);
  } else {
    reject(error);
  }
});

promise.then(function(value) {
  // success
}, function(value) {
  // failure
});

```

有三个状态 ，成功（resolved） ，加载（pending） ，失败（rejected）

# html5 新增的属性

* 新增了一些标签 header footer nav section aside 可以更好的描述文本结构
* 新增了音视频标签 video audio
* canvas
* 新增了一些标签属性 input type = number, email

# css3新增的属性

* 新增了圆角 border-radius box-shadow border-image
* 阴影 text-shadow
* css 动画 transform
* animation

# css3 Animate/transition/translate 区别？

* 1、css3中没有animate，只有animation（动画属性）。使用方法：用@keyframes定义自定义动画，用animation引用该动画。最简单的写法：
`animation：name（自定义动画名称） duration（持续时间）;`
例：
`animation：scroll 2s;`
意思是在2s内运行自定义的scroll动画。
* 2、transition（过渡属性）。使css属性在一段时间内平滑过渡。最简单写法：
`transition：property（需要过渡的属性） duration（持续时间）;`
例：
`transition：background-color 2s;`
意思是用2s时间过渡背景颜色。该属性比animation低级一些。不能自定义动画，只是模拟。
* 3、translate（位移）是transform（变换属性）的一种。最简单写法为：
`transform：translate（x）;`
例：
`transform：translate（100px）;`
意思是元素在x轴上从当前位置移动到100px

# 对CSS3中bfc的理解和应用？如何实现左边是固定宽度，右边自适应的布局？

块级格式化上下文，它是指一个独立的块级渲染区域，只有Block-level Box参与，该区域拥有一套渲染规则来约束块级盒子的布局，且与区域外部无关。

BFC是一块渲染区域，那这块渲染区域到底在哪，它又是有多大，这些由生成BFC的元素决定，CSS2.1中规定满足下列CSS声明之一的元素便会生成BFC。

* float的值不为none；
* overflow的值不为visible；
* display的值为inline-block、table-cell、table-caption；
* position的值为absolute或fixed；
看到有人把display：table也认为可以生成BFC，其实这里的主要原因在于Table会默认生成一个匿名的table-cell，正是这个匿名的table-cell生成了BFC。

### BFC在布局中的应用
* 防止margin重叠
* 浮动相关问题；
* 多栏布局的一种方式!

# css flex 使用

flex属性指定项目的长度，相对于同一容器内的其余项目。
Flex 是 Flexible Box 的缩写，意为"弹性布局"，用来为盒状模型提供最大的灵活性。

任何一个容器都可以指定为 Flex 布局。

 ```
 .box{
   display: flex;
 }
 ```

### 设为 Flex 布局以后，子元素的`float`、`clear`和`vertical-align`属性将失效。

例：
```
.container {
 display: flex;
 display: -webkit-flex;
 border: 4px solid \#000;
}

.initial {
 flex: inherit;
 -webkit-flex: inherit;
 width: 200px;
 min-width: 100px;
 border: 2px solid red;
}

.none {
 flex: none;
 width: 200px;
 border: 2px solid blue;

}

.flex1{
 flex: 1;
 border: 2px solid green;
}
.flex2{
 flex: 2;
 border: 2px solid orange;
}
```
![](quiver-image-url/ED1C591E4891A977DB3D6E89B5172F06.jpg)

# app与html5的优缺点

* app又叫做原生态应用开发，开发出的产品更加流畅稳定、app开发可以操作手机，可以将部分数据缓存到手机上
* 可以调取本地的图库，调取通讯录，打开摄像头，指南针，陀螺仪，重力感应，从操作起来还是比较方便的
* 缺点：需要打包上传到应用市场时效性需要用户自主手动更新才能更新

# hyBird模式

* h5页面嵌入到第三方平台，微信，qq、微博

* 微信的第三方接口在别人的地盘活动，需要了解的细节规则

# 移动端自适应

1、设计师给的一般是640px的效果图，我们按照640px进行切图

2、布局的时候，我们宽度一般不设定宽度，上宽度随着屏幕大小的改变自适应

3、对于文字 、晓得icon、缩略图等小图、高度、margin、padding一般情况下给固定的值，原有的640px效果图下的一半

4、媒体查询，其实就是把small.css文件中的样式放在了@media srceen and (max-width;600px){...}的大括号之中。在语句上面的语句结构中，可以看出Media query和css的属性集合很相似，主要区别在：

  * Media query只接受单个的逻辑表达式作为其值，或者没有值；
  * css属性用于声明如何表现页页的信息；而Media Query是一个用于判断输出设备是否满足某种条件的表达式；
  * Media Query其中的大部分接受min/max前缀，用来表示其逻辑关系，表示应用于大于等于或者小于等于某个值的情况
  * CSS属性要求必须有属性值，Media Query可以没有值，因为其表达式返回的只有真或假两种

# Canvas SVG 区别

Canvas 适用场景：

Canvas 提供的功能更原始，适合像素处理，动态渲染和大数据量绘制； Canvas 是使用 JavaScript 程序绘图，提供画布标签和绘制 API(动态生成)； Canvas 是基于位图的图像，它不能够改变大小，只能缩放显示；

SVG 适用场景：

** SVG 功能更完善，适合静态图片展示，高保真文档查看和打印的应用场景** SVG 是使用 XML 文档描述来绘图，是一整套独立的矢量图形语言； SVG 更适合用来做动态交互，而且 SVG 绘图很容易编辑，只需要增加或移除相应的元素就可以了。 SVG 是基于矢量的，所有它能够很好的处理图形大小的改变。

# yarn && npm

其实本质上yarn 也是从npm仓库进行数据的拉去，但为什么会 用yarn

* yarn 在安装包的时候是进行 并行安装，而npm是异步，只有当上一个安装包安装完成才能进行下一个包的安装，所以提高了安装效率
* 如果在package.json中写入的版本号不够准确的话，npm会自行选择版本，这样也就导致了可能出现bug,但yarn 有一个锁定文件lock,记录了确切安装的版本号，所以可以确保每次安装的包都是同一个版本的

# vue双向数据绑定

用 ES5 提供的 Object.defineProperty() 方法，监控对数据的操作，从而可以自动触发数据同步。并且，由于是在不同的数据上触发同步，可以精确的将变更发送给绑定的视图，而不是对所有的数据都执行一次检测,也就是 Object.defineProperty() 定义的数据 set、get 函数中,

在对数据进行读取时，如果当前有 Watcher（对数据的观察者吧，watcher 会负责将获取的新数据发送给视图），那将该 Watcher 绑定到当前的数据上（dep.depend()，dep 关联当前数据和所有的 watcher 的依赖关系），是一个检查并记录依赖的过程。而在对数据进行赋值时，如果数据发生改变，则通知所有的 watcher（借助 dep.notify()）。这样，即便是我们手动改变了数据，框架也能够自动将数据同步到视图。

## 子组件传值给父组件

vue老版本中用`$dispatch`，子组件传递把需要向父组件传递的值通过`$dispatch`自定义一个事件，并传值，然而在新版中`$dispatch`也要废弃了。vue2.0中可以使用`$emit`来向父组件派发事件，父组件中用`$on`来监听自定义的事件，监听后父组件执行具体的方法，且通过事件传递给父组件的数据，以该方法的参数形式传入，父组件在所要执行的函数中得以使用。

## 子组件相互通信

通信过程：子->父->子，子组件先通信给父组件，父组件再通过`$broadcast`派发给子组件。

# 前端性能优化

  1、代码优化：
  1）标签语义化，

  2）避免冗余代码避免垃圾代码（把常用的单独写，统一用的时候调用，不要写重复的）

  降低代码的耦合度

  3）尽量少使用同步请求

  4）避免js内存泄露

  5）少使用闭包

  6）少使用dom动态操作方法

  7）文档碎片

  8）移动端，用css3动画，替换js动画

  2、数据优化

  1）数据缓存

  2）数据异步加载（页面加载先加载第一屏，其他的在慢慢架子啊）

  3）图片延迟加载

  3、请求资源的优化

  1）css或js合并成一个，减少网络资源请求数

  2）图片csssprite技术，图片的合并压缩，通过background-position定位查找

  只加载一次大图

  3)如果页面中有影音文件，没有特殊需求，都等页面渲染完毕之后稍后加载

  4、请求资源大小的控制（尤其是移动端）

  1）不要乱用框架，小页面能不用就不用，移动端大项目，不建议使用jQuery系类的，使用zepto

  替换jQuery，使用amazeUI代替jQueryMobile

  2）与设计师商量，移动端少用图片，需要用的话，能用代码写不要图片

  3）图片base64技术解决

  5、服务器端的优化

  1）服务器做一下gzip压缩，后台做一下优化

  2)做一下服务器分布集群

  3)cdn

  静态资源图片：

  在布局的时候就能定下来的图片

  对于小图片，小图标用cssscript优化

  对于大图可以切成小图，依次加载

  动态资源图片：通过ajax返回的图片

  图片base64技术，以上的效果都不好用

  图片延迟加载，

  1、先给当前要显示图片的区域，一张比较小的背景图或背景颜色，占个位置/2、

  2、用varimg=newImage()创建一张临时的图片，加载我们真实得地址，然后把这个

  把这个元素添加到规定的区域

# sessionStorage，cookie，localStorage

  * cookie 由服务器生成，可设置失效时间。如果是浏览器端生成的 cookie，则在浏览器关闭之后失效；而 localStorage 除非被清除，否则永久保存，sessionStorage 则在关闭浏览器或者页面之后清除
  * cookie 的大小为 4k 左右，localStorage 和 sessionStorage 的大小一般为5MB
  * 与服务器通信的时候，cookie 每次都会携带在 http 头中，但是其他两个不参与服务器通信
  * cookie 中最好不要放置任何的明文的东西，其他两个的数据如果提交到服务器一定要校验

#   三次握手
  * 客户端发起连接试探
  * 服务端接收到试探请求，向客户端发送确认消息
  * 客户端得到服务端的确认消息之后，再次向服务端发送确认消息

# 四次挥手

一次完整的 http 请求是怎么样的
  * 域名解析
  * TCP 三次握手
  * 发起 http 请求
  * 服务器端响应 http 请求，客户端得到 html 代码
  * 浏览器解析 html 代码，并请求 html 代码中的资源
  * 浏览器对页面进行渲染呈现给用户

# js

**1.以下代码执行结果：**
```
function fn1(){alert(1)};function fn2(){alert(2)};

fn3=fn2.call; //这只是一个简单的赋值

fn2.call(fn1);//请问输出什么结果，为什么2

fn3.call(fn1);//请问输出什么结果，为什么1
```

表示：

Fn3.call(fn1)==>fn2.call.call(fn1)

fn3执行，并且fn3的this指针指向fn1 相当于fn1.fn3();fn1.call();

注：

1、fn1 fn2都是Function的实例，并且call，apply方法是function类上的原型方法

2、当call运行时，call里面的this是指谁

3、面向对象的编程中，类方法里的this是谁，就相当于谁在执行这个方法

4、call本身也是Function类的实例，也就是说call也可以执行call的方法
**2.以下代码执行结果：**
```
    'use strick'
   (function(){
     var a=b=5
   })();
   console.log(b);
   console.log(a);
   ```

运行结果：`Uncauht ReferenceError:a is not defined at 6

**3.**以下代码执行结果：****
```
    function a(){
      alert(x);
      var x=2;
      x++;
      alert(x);
    }
    function b(){
      alert(x);
      x++;
      alert(x);
    }
    if(0<100<(0+4)){
      a();
    } else {
      b();
    }
```
运行结果：`undefined，3`

**4.以下代码执行结果：**
```
    var a=1;
    setTimeout(function(){
      console.log(a)
    },0);
    var date1 = new Date();
    while((new Date().getTime()-date1.getTime())<=10000){};               console.log(a);
    a='2';
```
几乎同时输出1和2

**5.以下程序可能的输出顺序**
```
    window.setTimeout(function(){
      console.log("1")
    },1);
    window.setTimeout(function(){
      console.log("2")
    },2);
    window.setTimeout(function()
      console.log("2")
    },3);
    window.requestAnimationFrame(function(){
      console.log("4")
    },4);
```

A.1,2,3,4

B.4,1,2,3

C.1,2,4,3

D.1,4,2,3

答案：ABCD

# 程序题

### 用 javascript 语言,手工实现 repeat 函数.两个参数:

### 1.要重复的原始字符串

### 2.需要重复的次数

### 例如:

### repeat ('a', 3) => 'aaa'
```
function repeat (str, count) {

 var s ='';

 for(let i=0;i\\\\\<count;i++){

 s += str;

 }

 return s

};

repeat ('a', 3) ;

function repeat (str, count) {

 return rep(str,'',count);

 function rep(oldstr,str,count){

 if (count == 0) {

 return str;

 }else {

 str +=oldstr;

 return rep(oldstr,str,count-1)

 }

 }

}
```

 ### 使用 原生javacript 实现事件代理

 例子:

 delegate ( containerElement, 'click', 'remove-item', onClick )

 会绑定一个事件代理到 containerElement 这个元素, 即是说, 所有在 containerElement 这个容器下的所有

 remove-item 在click事件出现时都会触发 onClick 这个回调

```

function delegate(parentElem, eventType, className, callback) {

 if(parentElem.addEventListener){

 parentElem.addEventListener(eventType,function(event){

 if(event.target.classList.contains(className)){

 callback(event);

 }

 })

 }else if(parentElem.attachEvent){

 parentElem.attachEvent('on'+eventType,function(event){

 if(event.srcElement.classList.contains(className)){

 callback(event)

 }

 })

 }

}

```

### 跨浏览器事件

* addEventlistener attachEvent

* removeEventlistener detachEvent

* stopPropagation cancelBubble = true

* event.target event.srcElement


### "快速排序"的思想很简单，整个排序过程只需要三步：

（1）在数据集之中，选择一个元素作为"基准"（pivot）。

（2）所有小于"基准"的元素，都移到"基准"的左边；所有大于"基准"的元素，都移到"基准"的右边。

（3）对"基准"左边和右边的两个子集，不断重复第一步和第二步，直到所有子集只剩下一个元素为止。

```
quicksort([1,21,1,2,34,2,521,21,335,22,457,23])

function quicksort(ary){

 if(ary.length <= 1){

 return ary;

 }

 var pivotIndex = Math.floor(ary.length/2);

 var pivot = ary[pivotIndex];

 var greaterAry=[],lessAry = [];

 var pivotAry = [];

 ary.forEach( function(element, index) {

 if(element > pivot){

 greaterAry.push(element);

 }else if(element < pivot){

 lessAry.push(element);

 }else if(element == pivot){

 pivotAry.push(element)

 }

 });

 return quicksort(lessAry).concat(pivotAry,quicksort(greaterAry));

}
```
### 数组去重

```

unique([1,21,1,2,34,2,521,21,335,22,457,23]);

function unique(ary){

 if(ary == undefined || ary.length == 0)return;

 var obj = {};

 for(var i=0;i < ary.length;i++){

 var element = ary[i];

 if(obj[element] != element) {

 obj[element] = element;

 }else if(obj[element] == element){

 ary.splice(index, 1);

 i --;

 }

 }

 return ary;

}
```

### 将url的查询参数解析成字典对象

```

function getQueryObject(url){

 url = url == null? window.location.href : url;

 var search = url.substring(url.lastIndexOf("?") + 1);

 var obj = {};

 var reg = /([^?&=]+)=([^?&=]\*)/g;

 search.replace(reg,function(rs,$1,$2){

 var name = decodeURIComponent($1);

 var val = decodeURIComponent($2);

 var = String(val);

 obj[name] = val;

 return rs;

 });

 return obj;

}
```


### 使用js实现bind,trigger

```

function Emitter() {

 this._listener = {}; //_listener[自定义的事件名] = [所用执行的匿名函数1, 所用执行的匿名函数2]

}

//注册事件

Emitter.prototype.bind = function(eventName, funCallback) {

 var listenersArr = this._listener[eventName] || []; ////this._listener[eventName]没有值则将listener定义为[](数组)。

 listenersArr.push(funCallback);

 this._listener[eventName] = listenersArr;

 }

 //触发事件

Emitter.prototype.trigger = function(eventName) {

 //未绑定事件

 if (!this._listener.hasOwnProperty(eventName)) {

 console.log('you do not bind this event');

 return;

 }

 var args = Array.prototype.slice.call(arguments, 1); ////args为获得除了eventName后面的参数(最后被用作注册事件的参数)

 var listenersArr = this._listener[eventName];

 var _this = this;

 if (!Array.isArray(listenersArr)) return; ////自定义事件名不存在

 listenersArr.forEach(function(callback) {

 try {

 callback.call(_this, args);

 } catch (e) {

 console.log(e);

 }

 });

 }

 //解绑

Emitter.prototype.unbind = function(eventName, callback) {

 this._listener.hasOwnProperty(eventName) && delete this._listener[eventName];

 callback && callback();

}
```

### 判断一个字符串是不是数字字符串
```

numberString('32324');

function numberString(num){

 if(num == undefined || typeof(num) != 'string') return;

 return !isNaN(num);

}

```

### 一个有序数组，输出指定值（可能重复）的下标

```

indexAry(3,[1,2,3,4,5,6,7,8]);

function indexAry(ele,ary){

 if(ary == undefined || ary.length == 0||ele == undefined || isNaN(ele)) return -1;

 let indexAry = [];

 ary.forEach( function(element, index) {

 if(element == ele){

 indexAry.push(index);

 }else if(element > ele){

 return;

 };

 });

 return indexAry.length?indexAry.toString():-1;

}
```

### 冒泡排序
```
    function bubbleSort(numSeries) {
        if (numSeries.length \< 2) {
            return numSeries;
        }
        let len = numSeries.length;

        for (let i = 0; i \< len - 1; i++) {
            for (let j = i; j \< len - i - 1; j++) {
                if (numSeries[j] \> numSeries[j + 1]) {
                    [
                        numSeries[j],
                        numSeries[j + 1]
                    ] = [
                        numSeries[j + 1],
                        numSeries[j]
                    ];
                }
            }
        }

        return numSeries;
    }
```

### 插入排序

```
    function insertSort( arr ) {
        var len = arr.length,
            temp;

        for ( var i = 1; i < len; i++ ) {
            var j;
            temp = arr[i];
            j = i;

            while ( j > 0 && arr[j-1] > temp ) {
                arr[j] = arr[j-1];
                j--;
            }
            arr[j] = temp;
        }
        return arr;
    }

```

### 去除首尾空格
```
    function removePlace( str ) {
        var reg = /(^s\*)|(s\*)$/;

        if ( str && typeof str === 'string' ) {
            return str.replace(reg, '');
        }
    }

```
