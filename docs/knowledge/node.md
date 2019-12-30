#node
##node模块
### path
这个模块想必大家应该都并不陌生，瞟过 webpack 的都应该看过这个东东。很显然，path 就是来处理路径相关东西的，我们直接看下面的常见用例就能够体会到.
```
const path = require('path');

let str = '/root/a/b/index.html';
console.log(path.dirname(str)); // 路径
// /root/a/b
console.log(path.extname(str)); // 后缀名
// .html
console.log(path.basename(str)); // 文件名
// index.html

// path.resolve() 路径解析，简单来说就是拼凑路径，最终返回一个绝对路径
let pathOne = path.resolve('rooot/a/b', '../c', 'd', '..', 'e');

// 一般用来打印绝对路径，就像下面这样，其中 __dirname 指的就是当前目录
let pathTwo = path.resolve(__dirname, 'build'); // 这个用法很常见，你应该在 webpack 中有见过

console.log(pathOne, pathTwo, __dirname);
// pathOne  =>  /Users/lgq/Desktop/node/rooot/a/c/e
// pathTwo  =>  /Users/lgq/Desktop/node/build
// __dirname  =>  /Users/lgq/Desktop/node

```
### assert 断言
```
// assert.js
const assert = require('assert');

const obj1 = { a: { b: 1 } };
const obj2 = { a: { b: 1 } };
const obj3 = { a: { b: '1' } };

// assert.deepEqual(变量，预期值，错误信息)   变量 == 预期值
// assert.deepStrictEqual(变量，预期值，错误信息)  变量 === 预期值
// 同样也是错误的时候抛出信息，正确的时候继续默默执行
assert.deepEqual(obj1, obj2, '不等哦'); // true
assert.deepEqual(obj1, obj3, '不等哦'); // true
assert.deepStrictEqual(obj1, obj2, '不等哦'); // true
assert.deepStrictEqual(obj1, obj3, '不等哦'); // false，这个会抛出错误信息
```
### stream 流
stream 又叫做流，大家或多或少应该有听过这个概念，那具体是什么意思呢？在这里，你可以把它当做是前面说过的 fs.readFile 和 fs.writeFile 的升级版。
我们要知道 readFile 和 writeFile 的工作流程 是先把整个文件读取到内存中，然后再一次写入，这种方式对于稍大的文件就不适用了，因为这样容易导致内存不足，所以更好的方式是什么呢？就是边读边写啦，业界常说成管道流，就像水流经过水管一样，进水多少，出水就多少，这个水管就是占用的资源（内存），就那么大，这我们样就能合理利用内存分配啦，而不是一口气吃成个胖子，有吃撑的风险。
```
const fs = require('fs');

// 读取流：fs.createReadStream();
// 写入流：fs.createWriteStream();
let rs = fs.createReadStream('a.txt'); // 要读取的文件
let ws = fs.createWriteStream('a2.txt'); // 输出的文件

rs.pipe(ws); // 用 pipe 将 rs 和 ws 衔接起来，将读取流的数据传到输出流（就是这么简单的一句话就能搞定）

rs.on('error', err => {
  console.log(err);
});
ws.on('finish', () => {
  console.log('成功');
})

```
另外，我们没有直接使用 stream 模块，是因为 fs 模块引用了它并对其做了封装，所以用 fs 即可。
##node框架