# CSS 经典面试布局题库

---------------------

**索引**
- [CSS 经典面试布局题库](#css-经典面试布局题库)
  - [如何让几个div水平排列](#如何让几个div水平排列)
  - [css垂直居中方法](#css垂直居中方法)
  - [实现布局左侧固定尺寸,右侧自适应](#实现布局左侧固定尺寸右侧自适应)
  - [css 实现左右两列等高容器布局，要求元素实际占用的高度以两列中较高的为准](#css-实现左右两列等高容器布局要求元素实际占用的高度以两列中较高的为准)
  - [css 实现三角形](#css-实现三角形)
  - [>> 查看更多](#-查看更多)


## 如何让几个div水平排列

* css float
* css display:inline
* css flex ( [flex使用](https://www.talkingcoder.com/article/6424383824800383038))
文章详解 [《html5:div 横向排列的方法》](https://blog.csdn.net/hunhun1122/article/details/78591103)

## css垂直居中方法

* 使用 Line-Height 垂直居中图片

```
<div id="parent">
    <img src="image.png" alt="" />
</div>

#parent {
    line-height: 200px;
}

#parent img {
    vertical-align: middle;
}
```
* CSS表格法


```
<div id="parent">
    <div id="child">Text here</div>
</div>

#parent {
    display: table;
}

#child {
    display: table-cell;
    vertical-align: middle;
}
```

* 绝对定位和负边距法

```
<div id="parent">
    <div id="child">Content here</div>
</div>

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

* 上下内边距（padding）相等法

 这种方法通过设置上下padding相等来实现垂直居中。

```
<div id="parent">
    <div id="child">Content here</div>
</div>

#parent {
    padding: 5% 0;
}

#child {
    padding: 10% 0;
}
```

  上面的代码使用了相对尺寸，然而如果需要指定元素尺寸时，就需要使用绝对尺寸并做一个简单的计算了。例如，如果指定父元素高度为400px，子元素高度为100px，要实现垂直居中需要设置父元素的上下padding为150px。

[《CSS垂直居中的12种实现方式》](https://juejin.im/post/6844903550909153287)

## 实现布局左侧固定尺寸,右侧自适应
![如图](../img/1.png)

**html**

```
<div class=container>
<div class='left'>left width:200px</div>
<div class='right'>right width:自适应</div>
</div>
```
* 使用flex 布局

```
.container{
    display:flex;
    width: 100%;
    height:200px;
    border: 1px solid #000;
}
.left{
    width: 200px;
    height: 200px;
    border: 1px solid orange;
}
.right{
    flex: 1;
    width: 100%;
    height: 200px;
    border: 1px solid green;
}
```
* 相对定位

```
.container {
  position: relative;
  width: 100% ;
  height: 200px;
  border: 1px solid #000;
}
.left{
    position:absolute ;
    top: 0;
    left: 0;
    width: 200px;
    height: 200px;
    border: 1px solid orange;
}
.right{
    position: absolute;
    top: 0;
    left: 200px;
    width: 100%;
    height: 200px;
    border: 1px solid green;
}
```
* 浮动布局

```
.container {
  width: 100% ;
  height: 200px;
  border: 1px solid #000;
  clear: both;
}
.left{
    float: left;
    width: 200px;
    height: 200px;
    border: 1px solid orange;
}
.right{
    width: auto;
    height: 200px;
    padding-left: 200px;
}
```


## css 实现左右两列等高容器布局，要求元素实际占用的高度以两列中较高的为准

```
// html

<div class="container">
    <div class="left"></div>
    <div class="right"></div>
</div>

```
* flex 布局方式

```
.container{
       display: flex;
        width: 100px;
    }
    .left,.right{
       flex: 1;
    }
```

* table 布局

```
 .container{
        display: table;
        width: 100px;
        table-layout: fixed;
    }
    .left,.right{
        display: table-cell;
    }
```

* grid 布局

```
.container{
        display: grid;
        grid-auto-flow: column;
        grid-gap:20px;
        width: 100px;
    }
```

## css 实现三角形

// 下三角
```
<div class="container"></div>
.container{
        width: 0;
        height: 0;
        border: 50px solid transparent;
        border-bottom: 50px solid red;
}

```
transparent: 不过如果您不希望某元素拥有背景色，同时又不希望用户对浏览器的颜色设置影响到您的设计，那么设置transparent

[《css 实现三角形》](https://www.jianshu.com/p/1f32120a503b)
## [>> 查看更多](../README.md)