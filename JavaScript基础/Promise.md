# Promise

## promise es6新增的异步加载

```
var promise = new Promise(function(resolve, reject) {

  if (/\* 异步操作成功 \*/) {

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

## 简易原理

```
function Promise(fn) {
    var state = 'pending',
        value = null,
        callbacks = [];

    this.then = function (onFulfilled) {
        if (state === 'pending') {
            callbacks.push(onFulfilled);
            return this;
        }
        onFulfilled(value);
        return this;
    };

    function resolve(newValue) {
        value = newValue;
        state = 'fulfilled';
        setTimeout(function () {
            callbacks.forEach(function (callback) {
                callback(value);
            });
        }, 0);
    }

    fn(resolve);
}
```

有三个状态 ，成功（resolved） ，加载（pending） ，失败（rejected）

## 参考文章
* [Promise实现原理（附源码）](https://juejin.im/post/6844903665686282253)
* [Promise 必知必会（十道题）](https://juejin.im/post/6844903509934997511)
* [当 async/await 遇上 forEach](https://objcer.com/2017/10/12/async-await-with-forEach/)

## [>> 查看更多](../README.md)