# ES5基础知识
## 作用域、作用域链、闭包
:::tip 知识点
ES5只有全局作用域，函数作用域，没有块级作用域。
:::
#### 什么是作用域链？
定义函数对象时生成[[scope]]属性指向定义它时的作用域空间，运行函数是创建运行期上下文(execution context)——内部运行环境的对象，它也生成一个[[scope]]属性，指向推入活动对象(activation object)的函数对象的[[scope]]属性。
![[作用域链示意图]](@images/language/link.jpg)
#### 作用域链的作用：
* 搜索标识符:在函数执行过程中，每遇到一个变量，都会经历一次标识符解析过程以决定从哪里获取和存储数据。该过程从作用域链头部，也就是从活动对象开始搜索，查找同名的标识符，如果找到了就使用这个标识符对应的变量，
如果没找到继续搜索作用域链中的下一个对象，如果搜索完所有对象都未找到，则认为该标识符未定义；
* 活动对象被其内部函数的作用域链所引用执行环境被销毁，其关联的活动对象并不会随之销毁；
* js函数内的变量值不是在编译的时候就确定的，而是等在运行时期再去寻找的。
#### 闭包
```js
function outer(){
  var scope = "outer";
  function inner(){
    return scope;
  }
  return inner;
}
var fn = outer();
fn();
```
像上面这种内部函数的作用域链仍然保持着对父函数活动对象的引用，就是闭包(closure)
## 数据类型
```
Boolean typeof => 'boolean'
String typeof => 'string'
Number typeof => 'number'
undifined typeof => 'undifined'
null typeof => 'object'
Object:
	object{} typeof => 'object'
	array[] typeof => 'object'
	fuction typeof => 'fuction'
```


## 什么是面向对象编程？
* 抽象事物的特征封装为方法和属性，能够复用的编程思维。
* 如果说实际开发中：面向过程的编程就是实现特定功能，而面向对象的编程就要考虑其复用性、灵活性。将实现的功能抽象化。
* 特点：多态、封装、继承
* 每一个对象都是功能中心，具有明确分工，可以完成接受信息、处理数据、发出信息等任务。对象可以复用，通过继承机制还可以定制。
#### 什么是对象？
将事物抽象为对象，包含方法和属性。
#### 为什么要面向对象编程？
符合人的思维习惯、提高代码复用性和灵活性，提高代码的可维护性。
#### 如何实现面向对象？
java使用类，JavaScript使用构造函数（原型和原型链）来实现面向对象。
:::tip 知识点
现在ES6的class只是构造函数的语法糖
:::
#### 构造函数
所谓”构造函数”，就是专门用来生成实例对象的函数。构造函数之所以叫“构造函数”，就是说这个函数的目的，就是操作一个空对象（即this对象），将其“构造”为需要的样子。
:::tip 知识点
如果构造函数内部有return语句，而且return后面跟着一个对象，new命令会返回return语句指定的对象；否则，就会不管return语句，返回this对象。
:::
构造函数的特点有两个:
* 函数体内部使用了this关键字，代表了所要生成的对象实例。
* 生成对象的时候，必须使用new命令。
:::tip 知识点
new命令的作用，就是执行构造函数，返回一个实例对象。
如果不加new 执行构造函数，this指向全局
:::
#### 原型链
构造函数都有一个属性prototype，这个属性是一个对象(_proto_指向Object.prototype)
每个对象都有_proto_指向其构造函数的prototype
每个对象都有constructor属性指向构造函数本身
Object的prototype是对象(_proto_指向null)
Boolean Object String Number可以将Fuction看做他们的构造函数
:::tip 知识点
构造函数prototype,实例对象_proto_
:::
#### this详解
obj中的fuction是独立存储的，所以fuction的执行需要看运行环境
this指代的是当前运行环境
* this就是属性或方法“当前”所在的对象。
* 全局环境使用this，它指的就是顶层对象window
* 构造函数中的this，指的是实例对象
* 如果对象的方法里面包含this，this的指向就是方法运行时所在的对象
如果this所在的方法不在对象的第一层，这时this只是指向当前一层的对象，而不会继承更上面的层。
::: warning
this的指向是不确定的，所以切勿在函数中包含多层的this
:::
**多层时：内层的this不指向外部，而指向顶层对象。解决方案：在外层that = this;**
**避免回调函数中的 this,解决方法绑定this指向**
###### call()/apply()/bind()
JavaScript 提供了call、apply、bind这三个方法，来切换/固定this的指向
###### call()
call的第一个参数就是this所要指向的那个对象，后面的参数则是函数调用时所需的参数。call绑定的是this对象，执行的还是原始方法
```js
func.call(this, arg1, arg2, ...);
function add(a, b) {
  return a + b;
}

add.call(this, 1, 2) // 3
```
###### apply()
apply方法的作用与call方法类似，也是改变this指向，然后再调用该函数。唯一的区别就是，它接收一个数组作为函数执行时的参数
```js
func.apply(thisValue, [arg1, arg2, ...])
function f(x, y){
  console.log(x + y);
}

f.call(null, 1, 1) ;// 2
f.apply(null, [1, 1]) ;// 2
```
记录几个实用的用法
```js
var a = [10, 2, 4, 15, 9];
Math.max.apply(null, a) // 15
Array.apply(null, ['a', ,'b'])
// [ 'a', undefined, 'b' ] forEach方法跳过空空元素
//可以将一个类似数组的对象（比如arguments对象）转为真正的数组 
Array.prototype.slice.apply({0: 1, length: 1}); // [1]
Array.prototype.slice.apply({0: 1}) ;// []
Array.prototype.slice.apply({0: 1, length: 2}); // [1, undefined]
Array.prototype.slice.apply({length: 1}); // [undefined]

```
###### bind()
bind方法用于将函数体内的this绑定到某个对象，然后返回一个新函数,这样在函数定义时this的指向就确定了.
:::tip 知识点
函数体内的this对象，就是定义时所在的对象，而不是使用时所在的对象
:::
```js
function foo() {
  setTimeout(() => {
    console.log('id:', this.id);
  }, 100);
}

var id = 21;

foo.call({ id: 42 });
// id: 42
```
:::warning 箭头函数
* 不可以当作构造函数，也就是说，不可以使用new命令，否则会抛出一个错误；
* 不可以使用arguments对象，该对象在函数体内不存在。如果要用，可以用 rest 参数代替。
:::
## JavaScript如何实现继承
### 构造函数绑定：使用 call 或 apply 方法，将父对象的构造函数绑定在子对象上
```js
function Apple(size, num) {
    Fruit.apply(this, arguments);
    this.size = size;
    this.num = num;
}
```
### ES6使用extends继承
```js
class Apple extends Fruit{
    constructor() {
        super()
    }
}
```
### 实例继承：将子对象的prototype指向父对象的一个实例
```js
Apple.prototype = new Fruit();
Apple.prototype.constructor = Apple
```
### 原型继承
```js
function inherits(Child, Parent) {
    var F = function () {};
    F.prototype = Parent.prototype;
    Child.prototype = new F();
    Child.prototype.constructor = Child;
}
```
### 拷贝继承：如果把父对象的所有属性和方法，拷贝进子对象
```js
function extend(Child, Parent) {
  　　var p = Parent.prototype;
  　　var c = Child.prototype;
  　　for (var i in p) {
  　　　   c[i] = p[i];
  　　}
}
```