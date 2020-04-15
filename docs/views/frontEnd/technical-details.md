---
title: 前端技术点详解
date: 2020-04-15
sidebar: "auto"
categories:
  - 前端
tags:
  - 技术笔记
note: 前端技术点详解及实例
---

::: tip
前端技术点详解及实例
:::

<!-- more -->

# 前端技术点详解

### 编程思想

可以接受定义的复杂，不接受调用的复杂（调用尽可能简单！！）

不要重复自己（有现成的，就不要自己写）

你放在代码中的限制越少，你的代码就越灵活，也就越易于维护！

### 做假数据

使用Mock、json-server

#### json-server

1 全局安装json-server

```
npm install -g json-server
json-server -v	//查询版本
```

2 在文件夹下，创建并选中一个json文件作为后台服务器的数据，如 db.json

```
//启动json-server
json-server db.json
json-server -w db.json
```

3 补充：监听db.json文件变化

```
json-server --watch db.json
```

默认参数：

_q	查询

_t	无意义

_limt	页容量

_page	当前页

debugger	进入判断

### 字符串

#### 操作方法

##### 字符串截取

> indexStart表示开始截取的下标、indexEnd表示结束截取的下标、length表示长度
>
> indexStart>length时，返回一个空字符串；
>
> indexStart<0时，indexStart=length-indexStart;（indexStart：[0,length)）-可能存在兼容性问题

slice(indexStart[,indexEnd])---取索引间的字符，indexEnd>0

substring(indexStart[,indexEnd] )---取索引间的字符

> 任一参数小于0或是NaN，它被视为0。 大于string.length，则被视为是string.length。

substr(indexStart,[length])---取索引的前几个字符

##### 字符串分割数组

split(','[,length])---参数1为分割条件，参数2为返回的字符串数组的**最大长度**（超出的会被截取掉）

##### 字符串转换

toString() || String(num)||num+''

##### 字符串替换

replace('被替换内容','替换内容')---只进行第一次匹配替换！

##### 字符串查询

> 传入的内容会先转化为字符串类型；startIndex：开始检索位置

indexOf('检索内容',int)---从左到右---返回匹配项的索引，第二参数int不能为负数，表示开始检索位置

lastIndexOf('检索内容',int)---从右到左---返回匹配项的索引，第二参数int不能为负数，表示开始检索位置

contains('检索内容')---返回布尔值，常用于判断

includes('检索内容',startIndex)---返回布尔值，判断是否包含 （es6）

startsWith('检索内容',startIndex)---返回布尔值，是否在源字符串的头部 （es6）

endsWith('检索内容',startIndex)---返回布尔值，是否在源字符串的尾部，第二参数：针对前n个字符[0,n] （es6）

charAt(index)---查找指定位置的字符---返回匹配项的内容

charCodeAt(index)---查找指定位置的字符编码值---返回匹配项的编码值

##### 字符串拼接

num + ''||concat('a'+'b')

##### 字符串大小写转换

toLowerCase('str')---转换为小写

toUpperCase('str')---转换为大写

##### 字符串去空格

trim()---去除字符串两边空格

##### 字符串去重

分割为数组，然后用数组方法去重

##### 字符串重复

repeat(n)  ---返回一个新字符串，表示将字符串重复n次；（ES6）

> n>=0 浮点数会向下取整，负数会报错（特别的：0~-1 = 0）
>
> NaN 或其他类型的会先转化为数字 ~~NaN 

##### 字符串补全

padStart(length,'content')  --头部补全

PadEnd(length,'content') --- 尾部补全

> 不传第二参数值用 空格 补全长度；超出或等于指定长度则返回原字符串
>
> 常用于 为数值补全指定位数：000012
>
> 或提示字符串格式：'12'.padStart(10,YYYY-MM-DD); //"YYYY-MM-12"

##### 字符串循环

for...of：（es6）

### 数组

#### 操作方法

##### 数组创建

new Array(param)

> param为空表示创建一个空数组；为数字表示创建并指定长度；为数组表示创建并赋值

##### 数组添加

push() ---后添加，并**返回**数组新长度

unshift() ---前添加，并**返回**数组新长度

splice() ---指定位置添加，并返回删除的项

> 参数1：指定位置；参数2：从该位置开始**删除**的数量；之后的参数：要**添加**的项[可选]；

##### 数组删除

pop() ---后删除，并返回该元素值

shift() ---前删除，并返回该元素值 

##### 数组截取、合并

1. slice([indexStart,indexEnd]) 
   1. 数组截取,不写参数则截取所有，不改变原数组，并返回新数组 --- 截取所有时等于复制（浅拷贝，只能拷贝第一层，第二层的数据地址会被引用！深拷贝可用`JSON.parse(JSON.stringify(arr))`）
   2. 只传一个参数 a：表示截取[a,end)
2. splice(indexStart,num)
   1.  原数组会剔除截取数据--返回被截取数据
   2.  只传一个参数 a：表示截取掉[0,a)

concat(item[,item2,...]) ---数组合并,不改变原数组，并返回新数组

##### 数组查找

> 第二个参数 int 是整数，表示开始检索的位置，支持负数
>
> 关于稀疏数组， 如：`let arr = [,,,]`
>
> indexOf认为稀疏数组省略掉的值是不存在的，而includes认为是undefined

includes('包含内容',int)  ---返回true或false（语义化更强）；

indexOf('包含内容',int)  ---返回数值（不能判断数组中是否有NaN）；

##### 数组排序

reverse() ---数组倒序排列，会改变原数组

sort() ---数组正序排列（只解析第一个字符），会改变原数组；

> sort((a,b)=>a-b;)从小到大；
>
> sort((a,b)=>b-a;)从大到小

##### 数组内 改变元素的位置

```js
// 复制的项会替换插入位置的项；会改变原数组!!
// copyWithin(要插入的位置，被复制数组的开始，被复制数组的结尾)
// ["0", "1", "2", "3", "4", "5", "6", "7", "8"]
    let arr = Object.keys(String(Array(10)));

// ["3", "4", "2", "3", "4", "5", "6", "7", "8"]
    console.log(arr.copyWithin(0, 3, 5))
```

##### 数组填入元素

```js
// 填充的值会替换指定范围的项[);会改变原数组
// fill(要填充的值，填充到数组的开始下边，填充到数组的结尾坐标)
    let arr = [1, 2, 3, 4, 5, 7];
    arr.fill(8, 1, 5);
    console.log(arr);
//  [1, 8, 8, 8, 8, 7]
```

##### 数组转字符串

join('参数') ---数组分割为字符串 ---参数默认为 ',' 

##### 循环

```js
array.forEach(callback(item[,index,array]))
//返回值是undefined，不可以链式调用；循环不会被终止，除非抛出异常error;需要条件终止可用for循环||array.every(判断条件)-有一个不满足返回false，剩下的不再执行、array.some(判断条件)-有一个满足返回true，剩下的不再执行
map(callback(item[,index,array]))
//返回一个新数组，原数组不会改变，不会对空数组进行检测 
array.filter(callback(item[,index,array]))
//创建一个新的数组(不会改变原始数组)，新数组中的元素是通过检查指定数组中符合条件的所有元素。
//不会对空数组进行检测。

//es6 for of --支持终止循环，也不会遍历非数字属性
let arr;
arr['first'] = 'hello'
arr['second'] = 'world'
for(let item of arr){
    if(item === 'mango' ){ // item 支持解构=>[key,val] --方便获取 键名 或者 键值
        break;
    }
    console.log(item);
}
```



### 对象

#### 基础

1. 对象使用 . 和 [] 操作属性的方式与区别

   1. 使用:点方法是在对象名后面跟上**属性名**，而中括号方法里的索引存放的与属性名字相同的==**字符串**== 。（PS:对象的key为**数字**或者为对象**动态添加**属性时，在取值时键需加个 [] ）
   2. 区别:点方法后面跟的必须是一个指定的属性名称，而中括号方法里面可以是**变量**。 

   ```js
   //属性变量variate的使用
   var obj = {
       [variate] = ''
   }
   obj[variate] = ''
   ```

   

#### 操作方法

##### 创建对象

```js
//
new Object()
//proto 新创建对象的原型对象；propertiesObject 可选。如果没有指定为 undefined，则是要添加到新创建对象的可枚举属性（即其自身定义的属性，而不是其原型链上的枚举属性）对象的属性描述符以及相应的属性名称。
//返回一个新对象，带着指定的原型对象和属性。
Object.create(proto, [propertiesObject])//let obj = {} === Object.create(Object.prototype);
```

##### 对象转数组（key）

Object.keys(obj) ---返回值是对象中属性名组成的数组（传入数组则返回索引组成的数组）

##### 对象合并|复制

obj.assign({},obj1,obj2...) ---对象**合并**（从源对象复制到目标对象 ）,并返回目标对象；参数1为空对象表示复制（且合并）到一个新对象中；（继承属性和不可枚举属性是不能拷贝的）

##### 冻结对象（常量）

Object.freeze(obj)  ---冻结对象（类似于改为常量），并返回被冻结的对象

$options ---能获取到当前Vue实例的初始化选项

##### DOM对象与字符串互相转化

1. 字符串转dom对象：`const dom = parseDom('<div>这是一个dom字符串</div>')`
2. dom对象转字符串：`const domStr = dom.outerHTML`

##### DOM属性设置

- dom设置属性：dom.setAttribute ('属性名',属性值) ；
- 删除属性：removeAttribute('属性名')

##### 循环

```js
//用for in循环，可以遍历obj
//用for in 循环数组，会打印出非数字属性，如:_$index...等
for(k in data){
    console.log("姓名："+k+";"+"对应值："+data[k]);
}
//通过Object.keys()转化为数组，再使用数组的循环
```

##### 删除对象

delete obj[b]

##### 判断对象是否为空

1. JSON.stringify(obj) === '{}' 
2. Object.keys(obj).length === 0

##### 判断对象是否存在某属性

'属性名' in obj ---判断对象是否存在某属性 并返回布尔值

##### 判断两个值是否是同一个值

Object(a,a) ---返回布尔值；特别的：Object.is(-0, -0)--- true、Object.is(NaN, 0/0)---true、Object.is(0, -0)---false 

#### 构造函数

是一种特殊的方法。主要用来在创建对象时初始化对象， 即为对象成员变量赋初始值，总与new运算符一起使用在创建对象的语句中。 

```js
var request = new XMLHttpRequest();
//初始化对象会把子元素（第一层属性）的数据‘挂载’到对象身上
```

### H5

#### 本地存储

临时存储： sessionStorage  | 永久存储：localStorage |（PS：vuex 存在内存，刷新页面消失）

写入：localStorage.setItem("message"，"data");

读取：localStorage.getItem("message")；

删除：localStorage.removeItem("message");   

### css3

##### 增大背景图片响应区域

1. 内减模式 box-sizing:border-box; 内容减小，内边距增大
2. bg-origin bg-clip 值都等于content-box
3. 动态增大padding

##### 动画函数

属性及默认值

- animation-name:定义动画名称
- -duration：动画周期
- -timing-function:速度曲线--linear(匀速) | ease（减速）
- -delay：开始时间（延时）
- -iteration-count:播放次数 -- infinite(无限循环播放) || 1
- -direction:播放方向 -- normal(默认正方向) || reverse(反向) || alternate(正反交替)
- -fill-mode:播放后的状态 -- none（默认值） || forwards（动画结束） || backwards(动画开始) || both(设置动画结束状态)
- -play-state:设置动画状态 -- running(默认值，运动) | paused(暂停)

```css
// 动画属性：名字 持续时间 速度曲线 延迟 播放次数 是否轮流反向播放动画
animation: name duration timing-function delay iteration-count direction;
//如：animation-name：mingzi
// identifier:动画名; from 等效于 0%；to 等效于 100%.
@keyframes <identifier> {
  [ [ from | to | <百分比> ] [, from | to | <百分比> ]* block ]*
}
```

##### flex布局

注意：设为flex布局以后，子元素的 float、clear、vertical-align属性将失效。

概念：

- flex容器：flex container --简称 容器
- flex项目：flex item --简称 项目
- 水平的主轴：main axis （默认）
- 垂直的交叉轴：cross axis
- 主轴空间：main size
- 交叉轴空间：cross size

###### 容器的属性

- 使用flex布局：display:flex;
  - flex：默认值
  - inline-flex：行内元素使用flex布局
  - -webkit-flex：兼容性 --Safari
- 主轴方向：flex-direction:row;
  - row：默认值-水平方向，起点在左端
  - row-reverse：水平方向，起点在右端
  - column：垂直方向，起点在上沿
  - column-reverse：垂直方向，起点在下沿
- 定义换行：flex-wrap:nowrap;
  - nowrap：默认值-不换行
  - wrap：换行，第一行在上方
  - wrap-reverse：换行，第一行在下方
- 主轴方向与换行：flex-flow:row nowrap;
  - 是flex-direction属性和flex-wrap属性的简写形式
  - 默认值 row nowrap。
- 主轴对齐方式：justify-content:flex-start;
  - flex-start：默认值-左对齐
  - flex-end：右对齐
  - center：居中
  - space-between：两端对齐，项目之间的间隔都相等
  - space-around：每个项目两侧的间隔相等。所以，项目之间的间隔比项目于边框的间隔大一倍。
- 交叉轴对齐方式：align-items:stretch;
  - stretch：默认值-如果项目未设置高度或设为auto，将占满整个容器的高度。
  - flex-start：交叉轴的起点对齐
  - flex-end：交叉轴的终点对齐
  - center：交叉轴的中点对齐
  - baseline：项目的第一行文字的基线对齐
- 多根轴线的对齐方式：align-content:stretch;
  - stretch：默认值-如果项目只有一根轴线，该属性不起作用
  - flex-start：与交叉轴的起点对齐
  - flex-end：与交叉轴的终点对齐
  - center：与交叉轴的中点对齐
  - space-between：与交叉轴两端对齐，轴线之间的间隔平均分布
  - space-around：每根轴线两侧的间隔都相等，所以，轴线之间的间隔比轴线与边框的间隔大一倍。 

###### 项目的属性

- 排列顺序：order:0; 数值越小，排列越靠前
  - integer：值为整数，默认值0；
- 放大比例(份数)：flex-grow:0; 
  - number：值为数字，默认值0（表示不放大）
- 缩小比例：flex-shrink:1;
  - number:值为数字，默认值1（如果空间不足，该项目将缩小）
  - 0：不缩小（空间不足也不会被压缩）
  - 负值对该属性无效
- 占据的主轴空间：flex-basis:auto;
  - auto：默认值-本来大小
  - 可设为width或height属性一样的值（如 350px）,则该项目将占据固定空间
- 简写：flex:none|[0 1 auto]; （推荐）
  - 该属性是 flex-grow、flex-shrink、flex-basis 的简写；后两个属性可选
  - 快捷值：auto(1 1 auto) 和 none(0 0 auto)
- 单个项目的对齐方式：align-self:auto;
  - 可覆盖align-items属性。默认值为auto，表示继承父元素的align-items属性，如果没有父元素，则等同于stertch。（除了auto，其他都与align-items属性完全一致。）
  - stretch：如果项目未设置高度或设为auto，将占满整个容器的高度。
  - flex-start：交叉轴的起点对齐
  - flex-end：交叉轴的终点对齐
  - center：交叉轴的中点对齐
  - baseline：项目的第一行文字的基线对齐

```scss
//display的子元素设置过宽度后不会被挤压
flex-shrink: 0; //缩小比例
overflow:hidden;
```

##### filter()--滤镜

```css
//属性 filter: none | blur() | brightness() | contrast() | drop-shadow() | grayscale() | hue-rotate() | invert() | opacity() | saturate() | sepia() | url();
// ------------------------
-webkit-filter: blur(5px);
filter: blur(5px);
```

### 基础html

* a标签：a标签不设置href属性，将变成普通的行内元素，类似 span
*  `<%= %>` 作用：运行、获取后台代码或值。 

### 基础样式CSS

- readonly :只读；disabled ：禁用；

- 规定是否由用户调整div元素的大小：`resize:none;`

- 隐藏滚动条样式：`#box::-webkit-scrollbar {display: none;}`

- 点击穿透：允许：` pointer-events: none; ` 阻止(默认)：` pointer-events: auto; `

- 变量 -- 作为**属性值**使用（否则会抛出：无效属性名的语法错误）

  - 声明变量： 使用 `--`关键字（破折号）

  - 调用变量： 使用`var()`函数 --继承和叠加的规则与普通css相同

  - ```css 
    div{
        width:200px;
        /* 声明变量 */
        --color:red;
        /* 使用变量，必须放在var函数内 */
        background-color:var(--color);
        /* var(变量,默认值)，当变量不存在时，可以带上默认参数，默认参数不传时，初始值就是默认值*/
        padding:var(--padding,20px);
        /* 变量拼接 */
        ::after{
            --title:'我的页面';
            /* 字符串拼接,空格隔开 */
            content:var(--title) '2019-6-28 09:30:30';
        }
        /* 变量计算 */
        --h:5;
        height:calc(var(--h) * 100px);
    }
    /* 作用域 */
    /* :root选择器能选择DOM树里最顶级的元素---这样定义的变量，也就相当于全局变量了 */
    :root{
        --main-color:pink;
    }
    /* 可以和其他规则同时使用 - 如媒体查询 */
    @media screen and (min-width:768px){
        color: var(--main-color);
    }
    /* 遵循标准级联规则-如：在id选择器声明的变量的优先级比类的高 */
    /* js改变css变量值 */
    document.documentElement.style.setProperty('--main-color', 'black')
    
    ```

  - 兼容：不兼容IE

- 伪元素必要条件

  - 需要支持包含内容（如：input、textarea、单标签等不行）
  - 必须设置content属性（不设置，则伪元素不会显示；值是常量）
  - ::first-letter、::first-line 只对block||inline-block元素有效
  - ::placeholder ---设置占位符（一般用于input标签）
  
- 选择器：

  - /deep/ 深度选择器！！---用deep穿透scoped；对所有子组件生效
  - 属性选择器：
    - `[title]`--表示匹配带有title属性的所有元素
    - `[title=school]`--属性和值选择器 （等于该值）
    - `[title~=school]`-- 多个值（包含该值，适用于用空格分隔的值）" "
    - `[title|=school]`-- 多个值（包含以该值开头，适用于由连字符分隔的值 ）"-"
    - ^= ---以指定值开头
    - $= ---以指定值结尾
    - *= ---包含指定值

#### 功能处理

* 平滑滚动：`  scroll-behavior: smooth; `
* 暗黑模式：` mix-blend-mode: difference `
* 滚动停顿（全屏切换）：容器设置` scroll-snap-type `属性，子元素设置` scroll-snap-align `属性
* sticky导航：` position: sticky`表现为相对定位元素，直到视口某个位置时它就会变成fixed定位的元素；sticky父元素决定了sticky子元素的作用范围
* 特性查询：`@supports`用于检查浏览器是否支持

### 基础js

#### 预解析-声明提升

##### js预解析分两步

1. 在代码执行前，找一些东西
   1. 找程序中 **var** 关键字，如果找到了提前给var定义的变量赋值undefined
   2. 找程序中的**普通函数**，如果找到了，函数提升，将整个函数赋值给函数名。（所以函数可以在任何地方调用）
   3. 如果找的var的名字和函数名字相同，**函数优先**。
2. 逐行解析代码。按照上下顺序。如果碰到函数定义，忽略。

**重点**：函数内部同样适用于js预解析

#### 基本语句

- alert('弹窗内容')---提示弹窗|confirm('弹窗内容')---选择弹窗|prompt（'弹窗内容'）---问答\回复弹窗
- document.write("要输出的内容");---页面输出
- console.log('输出内容')---控制台输出

> 常见的 console 打印：
>
> - log() 和 info()--没什么区别（有些浏览器info输出的log前有个蓝色图标）
> - warn() 和 error() --展开下面会有堆栈内依次调用运行的方法名及其他信息
> - trace()--会打印函数调用栈信息，同时也会显示函数调用中各参数的值。
> - count()--每次调用都会加1，更好显示方法被调用了多少次。
> - time()和timeEnd()--输出两个方法之间的执行时间
>   - 可以不写参数，输出的是，default：** ms
>   - 如果加了参数，参数要一致console.time(“count”);否则会报错，输出的是，count：** ms
> - assert()--一般两个参数，前面的是表达式，后面是要输出的内容；如果表达式为false，则输出报错
> - clear() --清空console的输出信息
> - dir()--使输出内容格式化更易读，而且也会输出一个对象的全部属性和方法。
> - table()--数组格式|对象格式

* if-in 在判断中in前为key，后为Object。表示判断对象中是否存在key属性



#### 基础知识

- continue :跳过**本次**循环

- 动态拼接类`:class="[prefixCls + '-list']"`

- 组件标签注册事件：`@click.native`

- return 和return false的区别

  > 都能起到终端方法执行的效果（停止执行函数）
  >
  > return 返回 null，起到中断方法执行的效果，只要不return false，事件处理函数（默认事件）将会继续执行
  >
  > return false，阻止默认事件执行；阻止事件冒泡；

#### 修饰符

修饰符是用于‘限定类型以及类型成员’的申明的一种符号。

13种修饰符，按功能可分为三类：访问修饰符、类修饰符、成员修饰符。

##### 事件修饰符：

.stop .pervent .capture .self .once .one 键值修饰符（如：keyup.enter）.native 

- .stop ---阻止事件冒泡 等同于`event.stopPropagation() `
- .prevent  --阻止当前事件的默认行为(如:keyup事件) 等同于 `event.preventDefault() `
- .passive ---不会拦截且立即触发默认事件（vue前缀：&）-常用于代码优化
- .self --只当事件是从事件绑定的元素本身触发时才触发回调
- .one --表示绑定的事件只会被触发一次?
- .once --表示绑定的事件只会被触发一次?（vue前缀：~）
- submit.prevent --提交事件不再重载页面
- .stop.pervent --修饰符可以串联
- .capture --事件捕获模式（vue前缀：!）
- .native --在一个组件的根元素上直接监听一个原生事件

##### 按键修饰符

使用：`@keyup.key`

* key：按键名，可转换为 kebab-case 作为修饰符
  * enter 回车键
  * page-down
* keyCode：按键码触发事件；（已废弃：可能不被最新的浏览器支持）
  * 可通过全局 config.keyCodes 对象自定义按键修饰符别名
  * 如：`Vue.config.keyCodes.f1 = 112`

##### vue修饰符

.lazy .sync

- v-model.lazy --延迟同步更新（将input事件转为change事件）

- v-model.number --数字同步更新。。。（自动将输入值转为数值类型）

- v-model.trim --过滤首尾空格

- **.sync** --组件传值双向绑定---达到传值的双向绑定（类似多个v-model效果）！！

  > :name.sync就是:name="name" @update:name="name = $event"的缩写

  1. 子组件触发事件以"update:myPropName"命名
  2. 父组件v-bind:myPropName 加上 .sync 修饰符即可
  3. 当多个属性都要实现双向绑定时，可使用 v-bind.sync=obj
  4. 注意：带有.sync的修饰符的v-bind不能和表达式一起使用，是无效的；只能提供想绑定的属性名

###### 系统修饰键

实现仅在按下相应按键时才触发鼠标或键盘事件的监听器

* 修饰键：ctrl、alt、shift、meta
* 如：`@keyup.alt.33='event'`
* 注意：
  * 只有在按住修饰键的情况下释放其它按键，才能触发事件
  * 按下 ctrl 和shift 也会触发alt 事件，可使用 `exact`精确的系统修饰符进行精确控制

###### 鼠标按钮修饰符

* left、right、middle
* 这些修饰符会限制处理函数仅响应特定的鼠标按钮

#### 运算符

- ~ 按位非运算符。对返回值进行按位取反：--小数点后的值将被省略
  - 大于0的数字或数字类型字符串将被转为数字且’值+1‘的负整数：~'222' = -223
  - 等于0的或不能转为纯数字的将被转为-1：NaN|0|false|'argara' = -1
  - 小于0的数字或数字类型字符串将被转为数字且’值-1‘的正整数：~'-2.34' = 1;
- ~~ 运算符。将一些变量转化为整数数字类型；是~的双重运算；
  - 数字类型的字符串可转化为纯数字。~~'222' = 223
  - 非数字类型字符串一律转为 Number类型的 0；
  - 布尔值为true转为1，false转为0

#### 基本方法

window.open(url)--》open() 方法用于打开一个新的浏览器窗口或查找一个已命名的窗口。

**函数**：可以使用 ES2015 风格的计算属性命名功能来使用一个常量作为函数名`[TYPE_NAME](){}`

##### 表单

- 当 `form` 中只有一个 `input` 时回车会自动提交表单，这是浏览器的默认行为。 解决办法如下：

  > 第一种是在 `Input` 上加 `@keydown.native.enter.prevent ="handleEnter"`（iview）
  >
  > 第二种是在 `Form` 上加 `@submit.native.prevent`

- 表单绑定丢失焦点事件（组件）--@blur.native.capture 

###### 校验

```js
// 自定义校验规则 --结合验证器使用：validator
var validateUsername = (rule, value, callback) => {
  getDetails(value).then(response => {
    if (window.boxType === 'edit') callback()
    let result = response.data.data
    if (result !== null) {
      callback(new Error('用户名已经存在'))
    } else {
      callback()
    }
  })
}

// 校验--多规则校验
rules: [
    {
      required: true,
      message: '请输入用户名'
    },
    {
      min: 3,
      max: 20,
      message: '长度在 3 到 20 个字符',
      trigger: 'blur'
    },
    { validator: validateUsername, trigger: 'blur' }
]
```

##### 事件

###### 事件流

一个完整的JS事件流是从window开始，最后回到window的一个过程

事件流被分为**三个阶段**：捕获阶段 --> 目标阶段（事件执行阶段）--> 冒泡阶段

###### 事件参数属性

> e.target和e.currentTarget
>
> target是真正发生事件的DOM元素，而currentTarget是当前事件发生在哪个DOM元素上。
>
> 在目标元素上就不会遵守先发生捕获后发生冒泡这一规则，而是先绑定的事件先发生 

###### 绑定事件的方式

```js
on事件,
//优点：this指向当前元素，简单稳定；缺点：只在冒泡阶段运行，同时只能绑定一个事件处理函数（会发生覆盖），事件对象参数（e）仅非IE浏览器可用
addEventListener('事件',处理函数,是否捕获) --->第三个参数为布尔值，表示false (冒泡) 或 true (捕获)阶段执行；
//优点：该方法支持绑定多个事件处理函数（不会发生覆盖），同时支持事件处理的捕获和冒泡阶段，this关键字引用当前元素，可通过第一个参数（e）捕获事件对象；缺点：IE不支持
attachEvent()
//优点：可支持绑定多个事件处理函数；缺点：IE仅支持事件捕获的冒泡阶段（捕获与冒泡这过程无法通过程序控制），this指向了window对象，事件对象仅存在于window.event参数中，事件必须以ontype的形式命名（如：onclick），仅IE可用

//事件委托 on|bind
注意：bind不能给新增的元素绑定事件
```

###### 解除事件绑定

```js
onclick=null//将事件处理函数重置为空
element.removeEventListener('click', function(e){
	// ...
}, false);
element.detachEvent('onclick', function(){
    // ...
});
```

###### 阻止事件传播

```js
addEventListener:stopPropagation() //兼容到IE9，-》可设置事件对象cancelBubble属性为true阻止
stopImmediatePropagation();//阻止‘剩余’的事件处理函数的执行，并防止当前事件在DOM树上冒泡。（无法阻止该元素到"受委托"的祖辈元素之间的事件冒泡。）
//return false === 下面三件事，适用场景：包含停止事件冒泡
    •event.preventDefault();//阻止浏览器继续执行默认行为，但并不阻止事件的继续传播；Event.cancelable可检查事件是否可取消，不可取消（值为false）的事件event.preventDefault()无效
　　•event.stopPropagation();//阻止事件冒泡
　　•停止回调函数执行并立即返回===return。
```

###### 常见事件

表单事件

1. formchange 表单改变时触发
2. forminput 表单输入时触发
3. invalid 表单校验事件
4. reset 表单重置事件
5. submit 表单提交事件
6. select 选择元素时触发事件

键盘事件

1. keydown  按键按下事件
2. keypress 按下并松开事件
3. keyup 松开按键事件

鼠标事件

| 属性          | 值       | 描述                                     |
| :------------ | :------- | :--------------------------------------- |
| onclick       | *script* | 当单击鼠标时运行脚本                     |
| ondblclick    | *script* | 当双击鼠标时运行脚本                     |
| ondrag        | *script* | 当拖动元素时运行脚本                     |
| ondragend     | *script* | 当拖动操作结束时运行脚本                 |
| ondragenter   | *script* | 当元素被拖动至有效的拖放目标时运行脚本   |
| ondragleave   | *script* | 当元素离开有效拖放目标时运行脚本         |
| ondragover    | *script* | 当元素被拖动至有效拖放目标上方时运行脚本 |
| ondragstart   | *script* | 当拖动操作开始时运行脚本                 |
| ondrop        | *script* | 当被拖动元素正在被拖放时运行脚本         |
| onmousedown   | *script* | 当按下鼠标按钮时运行脚本                 |
| onmousemove   | *script* | 当鼠标指针移动时运行脚本                 |
| onmouseout    | *script* | 当鼠标指针移出元素时运行脚本             |
| onmouseover   | *script* | 当鼠标指针移至元素之上时运行脚本         |
| onmouseup     | *script* | 当松开鼠标按钮时运行脚本                 |
| onmousewheel  | *script* | 当转动鼠标滚轮时运行脚本                 |
| onscroll      | *script* | 当滚动元素滚动元素的滚动条时运行脚本     |
| oncontextmenu | *script* | 鼠标右键单击时运行的脚本                 |

**媒介事件**：由视频、图像以及音频等媒介触发的事件。 

适用于所有 HTML 5 元素，不过在媒介元素（诸如 audio、embed、img、object 以及 video）中最常用 

##### render(callback)

```js
render()---作用是将template渲染到html中
callback === createElement(tag,attr,vNode) //简单理解：tag=标签名；attr=标签属性；vNode=标签内容
//第一个参数tag主要用于提供dom的html内容，如：'div'就是创建一个<div>标签---[String,Object,Fun]
//第二个参数attr主要用于设置这个dom的一些样式、属性、传的组件的参数、绑定事件等---[Object]
//第三个参数vNode主要用于设置分发的内容（String），包括新增的其他组件；该节点下有其他节点的话，就放在这里；（通过this.$slots.default可获得所有节点组成的数组）---[Array]
//注意：第三个参数可以适用函数来生成多个组件（特别是如果他们相同的话），只要生成结果是一个数组，且数组元素都是VNode即可
PS：render方法中的return后面为什么要加括号？
//括号中不是可执行表达式，而是一些html标签（如下），执行会报错，加括号更符合原生编码习惯的思维
return <div>
    <span>渲染模板</span>
</div>
```

#### this指向

- call和apply：都能够改变this指向（就是劫持另一个对象的方法，能继承另一个对象的属性），第一个参数是新this对象；区别：apply的第二个参数是数组，call第一个参数后面则是一串参数列表

##### 原型-原型链

**特点**：

1. prototype **原型** 是一个地址指向原型对象，这个原型对象创建了实例后，只会取得constructor属性，其他的都是从Object继承而来
2. 通过__proto__串起来直到Object.propotype.__proto__为null的链叫做**原型链**

**缺点**：

1. 同一个对象实例之间，无法共享属性和方法

**解决**：

​	a:所有实例都会通过原型链引用到prototype

　　b:prototype相当于特定类型所有实例都可以访问到的一个公共容器

　　c:那么我们就将重复的东西放到公共容器就好了

##### 构造函数

**特点**：

1. 构造函数的首字母必须大写，用来区分于普通函数
2. 内部使用的this对象，来指向即将要生成的实例对象
3. 构造函数没有返回值
4. 主要用来在创建对象时初始化对象， 即为对象成员变量赋初始值
5. 不能被直接调用，使用New来生成实例对象，才会自动调用

#### ajax

##### 请求

GET(delete)  POST(put patch)

修改：PUT（传递完整的数据） 和 PATCH （补丁：只需传递改动的数据和id）

检测ajax的稳固性：options

**相关属性**

- url（请求地址）、type（请求类型）、data（发送的数据）、dataType（返回数据类型）、async（默认true 异步）、timeout（请求超时时间）、beforeSend（发送请求前回调）、complete（请求完成后）、success（请求成功后）、error（请求失败时）、jsonp（值会替代callback键）、jsonpCallback（替代callback的值）

dataType常用数据类型：

1. script：返回纯文本JavaScript代码。不会自动缓存结果（cache默认为false）。
2. json：返回JSON数据。
3. jsonp：url跨域
4. text：返回纯文本字符串。

**原生代码**

```js
//ajax也分下面4步
//1.创建ajax对象
//2.连接到服务器
//3.发送请求（告诉服务器我要什么文件）
//4.接收返回值

//1.创建ajax对象
//只兼容非ie6的浏览器，在ie6浏览器上运行会提示没有被定义
//var oAjax = new XMLHttpRequest();//这才是ajax实际的请求
//alert(oAjax);

//ie6浏览器下按照下面方法写,但是在别的浏览器中不能用，会报错。
//var oAjax = new ActiveXObject("Microsoft.XMLHTTP");
//alert(oAjax);

//鉴于上面出现的问题，可以采取下面的方法解决，用if判断是否为IE6浏览器
if(window.XMLHttpRequest)//如果有XMLHttpRequest，那就是非IE6浏览器。()里面加window的原因下面会有描述。
{
    var oAjax = new XMLHttpRequest();//创建ajax对象
}
else//如果没有XMLHttpRequest，那就是IE6浏览器
{
    var oAjax = new ActiveXObject("Microsoft.XMLHTTP");//IE6浏览器创建ajax对象
}

//2.连接服务器
//open(方法、文件名、异步传输）
//方法：
//传输方式是get方式还是post方式。
//文件名
//告诉服务器要读哪个文件
//异步传输
//异步：多件事一件一件的做
//同步：多件事情一起进行
//但是js里面的同步和异步和现实的同步异步相反。
//同步：多件事一件一件的做
//异步：多件事情一起进行
//ajax天生是用来做异步的

oAjax.open("GET","a.txt?t='+new Date().getTime()",true);//加上t='+new Date().getTime()"的目的是为了消除缓存，每次的t的值不一样。

//3.发送请求
oAjax.send();

//4.接收返回
//客户端和服务器端有交互的时候会调用onreadystatechange
oAjax.onreadystatechange=function()
{
    //oAjax.readyState  //浏览器和服务器，进行到哪一步了。
    //0->（未初始化）：还没有调用 open() 方法。
    //1->（载入）：已调用 send() 方法，正在发送请求。
    //2->载入完成）：send() 方法完成，已收到全部响应内容。
    //3->（解析）：正在解析响应内容。
    //4->（完成）：响应内容解析完成，可以在客户端调用。
    if(oAjax.readyState==4)
    {
        if(oAjax.status==200)//判断是否成功,如果是200，就代表成功
        {
            alert("成功"+oAjax.responseText);//读取a.txt文件成功就弹出成功。后面加上oAjax.responseText会输出a.txt文本的内容
        }
        else
        {
            alert("失败");
        }
    }
};
```

#### JSX语法

就是 JavaScript XML，它是对JavaScript语法的扩展

* 遇到<就当HTML解析，遇见 { 就当JavaScript解析
* 优点：编写模板更加简单快速；在编译过程中就能发现错误；