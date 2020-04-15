---
title: 常用代码段
date: 2020-04-15
sidebar: "auto"
categories:
  - 更多
tags:
  - 扩展
note: 常用代码段
---

::: tip
常用代码段
:::

<!-- more -->

### 兼容

#### 理想视口代码

普通的理想视口代码

```css
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

标准的理想视口代码

```css
<meta name="viewport" content="width=device-width, initial-scale=1.0,maximum-scale=1,minimum-scale=1,user-scalable=no">
```

#### IE兼容-条件注释

```html
<!-- HTML5 shim 和 Respond.js 是为了让 IE8 支持 HTML5 元素和媒体查询（media queries）功能 -->
  <!-- 警告：通过 file:// 协议（就是直接将 html 页面拖拽到浏览器中）访问页面时 Respond.js 不起作用 -->

<!-- [if IE]>
  		//你想要执行的代码
<![endif]-->
<!-- [if lt IE 8]>
  		//你想要执行的代码
<![endif]-->
<!-- [if ! IE 8]>
  		//你想要执行的代码
<script src="https://cdn.jsdelivr.net/npm/html5shiv@3.7.3/dist/html5shiv.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/respond.js@1.4.2/dest/respond.min.js"></script>
<![endif]-->
```

#### 兼容性滚动条

```js
document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop
```

### 响应式布局

#### bootstrap 屏幕宽度种类

```js
function whatScreen() {
    var width = window.screen.width;
    var title = document.querySelector("title");
    if (width <= 768) {
        title.innerHTML = "极小屏幕-" + width;
    } else if (width > 768 && width <= 992) {
        title.innerHTML = "小屏幕-" + width;
    } else if (width > 992 && width <= 1200) {
        title.innerHTML = "普通屏幕-" + width;
    } else if (width > 1200) {
        title.innerHTML = "大屏幕-" + width;
    }
}
```

#### 设置rem

```js
  function setHTML() {
    // 基础值
    var baseVal = 100;
    // 设计稿的宽度
    var pageWidth = 375;
    // 要适配的屏幕的宽度?
    var screenWidth = document.querySelector("html").offsetWidth;
    // 要设置的fontsize
    var fontsize = screenWidth * baseVal / pageWidth;
    // 设置到html标签的中
    document.querySelector("html").style.fontSize = fontsize + "px";
  }
```

### zepto

#### 设置拦截器

```js
// beforeSend会在发送请求之前被调用
  $.ajaxSettings.beforeSend = function (xhr, obj) {
    obj.url = baseUrl  + obj.url;
  }
// complete 会在请求结束后被调用
  $.ajaxSettings.complete = function () {
	
  }
```

#### 扩展zepto方法

```js
// 为 $ 对象增加自定义方法 如 可以这样使用 $.show();
$.extend($, {
    show: function () {
        $("body").addClass("waitting");
    }
});
```



### 路由拦截

```js
//to表示将要到达的路由对象，from表示即将离开的路由对象
//next用于释放钩子函数，必须保证被调用，否则路由将无法跳转
router.beforeEach((to, from, next) => {
  let token = localStorage.getItem('mytoken')
  // 如果已经登录，那我不干涉你，让你随便访问
  if (token) {
    next()
  } else {
    if (to.path !== '/login') {
      // 如果没有登录，但你访问其他需要登录的页面，那我就让你跳到登录页面去
      next({path: '/login'})
    } else {
      // 如果没有登录，但你访问的login，那就不干涉你，让你访问
      next()
    }
  }
})
```

### 请求拦截

```js
import axios from 'axios'

// 设置请求不同域名的接口
axios.defaults.baseURL = 'http://47.96.21.88:8082/api/private/v1/'

// 使用请求拦截，它会将所有的请求拦截下来
axios.interceptors.request.use(config => {
  // 在发送请求之前做些什么
  // config表示请求对象
  let mytoken = localStorage.getItem('mytoken') || ''
  if (mytoken) {
    // 存在token就将token塞进请求头的某个字段中，这个字段名不能随便取，它是一个前后端约好的值
    config.headers['Authorization'] = mytoken
  }
  // 请求对象必须return回去
  return config
}, error => {
  // 失败的回调
  Promise.reject(error)
})
// 请求拦截 request ；响应拦截 response ；
```

### 提示框

```js
 this.$confirm('确定要删除角色吗？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
```

### include和exclude

```js
{
  include: path.resolve(__dirname, 'src'),
  exclude: path.resolve(__dirname, 'node_modules')
}
//include只引入src里的内容，因为项目的结构 node_modules并不在 src 目录下，所以就不需要 exclude 了。
//通过include 设定了范围，通过exclude 排除范围
```

### 递归函数

```js
getSeletedRights (role) {
    let lastRole
    if (role.children && role.children.length !== 0) {
        role.children.map(item => {
            this.getSeletedRights(item)
        })
    } else {
        lastRole = role
        this.seletedRights.push(lastRole.id)
    }
}
//可用于实现深拷贝！！！
```

### 字体图标

图标管理--我的项目--新建项目-- 搜索图标 -- 添加入库 -- 添加到项目--  （字体font class）点击生成代码 --复制代码浏览器打开--保存为iconfont.css--改后缀名为sass--新建styles，将文件放进去--App.vue全局引入--通过class=‘iconfont icon-xxx’使用（去字体图标图复制对应的代码）

### 文本溢出省略号

```scss
// 首先，给需要的标签添加具体宽度限制。-→
// 单行文本溢出显示省略号
overflow: hidden;
text-overflow:ellipsis;
white-space: nowrap;

// 多行文本溢出显示省略号
display: -webkit-box;
-webkit-box-orient: vertical;
-webkit-line-clamp: 3;
overflow: hidden;
```

### 日期格式转换

```js
// 参数date为被转换时间，fmt为转换后的字符串格式，如：'yyyy-MM-dd hh:mm:ss'
export function formatDate(date, fmt) {
    date = new Date(date);
    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
    }
    let o = {
        'M+': date.getMonth() + 1,
        'd+': date.getDate(),
        'h+': date.getHours(),
        'm+': date.getMinutes(),
        's+': date.getSeconds()
    };
    for (let k in o) {
        if (new RegExp(`(${k})`).test(fmt)) {
            let str = o[k] + '';
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str));
        }
    }
    return fmt;
};
function padLeftZero(str) {
    return ('00' + str).substr(str.length);
}
//时间戳转日期
<div id="app">
  <span>需求创建时间{{createtime | time}}</span>
</div>
// vue过滤器-传入时间戳value，返回设定数据格式
Vue.filter('time', function (value) {
  return new Date(parseInt(value) * 1000).toLocaleString().replace(/年|月/g, "-").replace(/日/g, " ");
})
```

### 18位时间戳转日期时间

~~~js
18位时间戳转换日期时间
var timeStamp=635210495600000000;
var time=new Date();
time.setTime(Math.floor((timeStamp-621355968000000000)/10000-28800000));
~~~

### 字符串

#### 计算字符串重复次数

~~~js
// 1.用对象的方法，key为字符，value为个数，然后遍历对象
let str = 'asddddasaassf'
let obj={};
for(let i=0; i<str.length;i++){
    let char=str.charAt(i);
    if(obj[char]){
        obj[char]++;
    }else{
        obj[char]=1;
    }
}
console.log(obj);
let max=0;
for(let key in obj){
    if(max<obj[key]){
        max=obj[key];
    }
}
for(let key in obj){
    if(max==obj[key]){
        console.log(key+":"+max);
    }
}
// 2.用正则的方式，从第一个字符开始，应用正则表达式把与第一个字符相同的全部替换成空字符串，这样字符串length变小，比较两次的差值就是出现的次数，重复以上步骤，直到字符串为空。
let str = 'asddddasaassf'
let result="";
let maxLength=0;
let getStr="";
while(str !== ''){
    oldStr=str;
    getStr=str.charAt(0);
    str=str.replace(new RegExp(getStr,"g"),"");
    if(oldStr.length-str.length>maxLength){
        maxLength=oldStr.length-str.length;
        result=getStr+"="+maxLength;
    }
}
console.log(result)
~~~



#### 找出字符串重复最多字符

~~~js
// 1. 使用对象的方式
// 创建一个对象，循环字符串，将重复出现的字符串+1存入对象
let myString = 'abcjdhskabskdeuodlnsjdvbsjaabsdsssskdhfaa';
function getStrMore(str){
    var strobj = {};
    for(let i = 0;i<str.length;i++){
            if(!strobj[str[i]]){
                strobj[str[i]] = 1;
            }else{
                strobj[str[i]] += 1
            }
    }
    return strobj;
}
// 操作 getStrMore(myString) 会得到 一个对象{a: 6, b: 4, c: 1, j: 3, d: 6, …} 标注了每个字符串出现的次数，然后再操作该对象找出对象中字段值最大的一个，如下循环对象：
var maxnum = 0,maxname;
var strmore = getStrMore(myString);
for(item in strmore){
    if(strmore[item] > maxnum){
        maxnum = strmore[item];
        maxname = item;
    }
}
console.log(maxname+":"+maxth);

// 2.使用正则
let str = 'asss23sjdssskssa7lsssdkjsssdss'
const arr = str.split(/\s*/)              // 把字符串转换为数组
const str2 = arr.sort().join('')               // 首先进行排序，这样结果会把相同的字符放在一起，然后再转换为字符串
let value = ''
let index = 0
str2.replace(/(\w)\1*/g, function($0, $1) {         //匹配字符
if (index < $0.length) {
 index = $0.length                   // index是出现次数
 value = $1                              // value是对应字符
 }
})
console.log(`最多的字符: ${value} ,重复的次数: ${index}`) // 最多的字符: s ,重复的次数: 17
~~~



### 数组

#### 数组去重

```js
// 数组去重,先转换成set对象，再把set对象解构成普通数组
// 1 ES6语法：set()返回的数据不是可读的；会返回一个已经去重的数组对象
var arr = [...new Set(arr)] // 或：Array.from(new Set(arr)) 
// 2 循环嵌套
// 思路：定义一个新数组，并存放原数组的第一个元素，然后将元素组一一和新数组的元素对比，若不同则存放在新数组中。
function unique(arr){
　　var res = [arr[0]];
　　for(var i=1;i<arr.length;i++){
　　　　var repeat = false;
　　　　for(var j=0;j<res.length;j++){
　　　　　　if(arr[i] == res[j]){
　　　　　　　　repeat = true;
　　　　　　　　break;
　　　　　　}
　　　　}
　　　　if(!repeat){
　　　　　　res.push(arr[i]);
　　　　}
　　}
　　return res;
}
// 3 利用下标查询 indexOf()
function unique(arr){
  var newArr = [arr[0]];
  for(var i=1;i<arr.length;i++){
　　 if(newArr.indexOf(arr[i]) == -1){
       newArr.push(arr[i]);
   　}
  }
  return newArr;
}
// 4 过滤结合下标去重
// 思路：indexOf下标查找是按一定顺序，找到符合项后就不再查找，所以当查找的下标与当前的下标不一致即表示存在重复项
let newArr = arr.filter((item,i)=>{
    return arr.indexOf(item)===i
})
```

#### 数组循环

```js
// 原生 -没有返回值
arr.forEach(item => {})
// 寻找某个符合条件的项,并返回item
arr.find((v, i) => {
    if (v >= 5)
        return true;
});
// 寻找某个符合条件的项,并返回index
arr.findIndex((v, i) => {
    if (v >= 5)
        return true;
});
// vue -可返回值
arr.map(itme => item+1)
// es6 过滤返回符合项
arr.filter(item=>return item.5)
```

#### 将类数组对象转为真正的数组

```js
 // 方式 一
	let obj = {
      "0": "00",
      "1": "11",
      "2": "22"
    }
    
    let newArr=Array.of(...Object.values(obj));
             
    // 方式二
    let obj = {
      "0": "00",
      "1": "11",
      "2": "22",
      length:3
    }
    let newArr = Array.from(obj)
```

#### 快速生成对应顺序的数组

```js
Object.keys(String(Array(100))); 
Object.keys(Array(101).toString());
```

#### 数组排序

```js
// 快速排序
var quickSort = function(arr) {
    if(arr.length < 1) {//如果数组就是一项，那么可以直接返回
        return arr;
    }
    var centerIndex = Math.floor(arr.length / 2);//获取数组中间的索引
    var centerValue = arr[centerIndex];//获取数组中间项
    var left = [], right = [];
    for(var i = 0; i < arr.lenght; i++){
        if(arr[i] < centerValue){
            left.push(arr[i]);
        }else{
            right.push(arr[i]);
        }
    }
    return quickSort(left).contanct([centerValue], quickSort(right));//递归调用
}

// 冒泡排序
var bubbleSort = function(arr) {
    var len = arr.length;
    for(var i = 0; i < len; i++){
        for(var j = 0; i < len - 1 - i; i++){
            if(arr[j] > arr[j+1]) {//相邻元素两两对比
                var temp = arr[j+1];//元素交换
                arr[j+1] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}
//arr.sort() --按字符串排序（先比较第一位，如果第一位相等依次比较后面的）。
// 从小到大
arr.sort((a,b)=>{
    return a - b
})
// 从大到小
arr.sort((a,b)=>{
    return b - a
})

//插入排序
// 优点：如果对一个已经有序的数组使用插入排序，插入排序只会遍历数组一遍--提高执行效率
function insertionSort (array = []) {
  const len = array.length
  if (len <= 1) {
    return array
  }
  let preIndex
  let current
  for (let i = 1; i < len; i++) {
    preIndex = i - 1 // 待比较元素的下标
    current = array[i] // 当前元素
    while (preIndex >= 0 && array[preIndex] > current) { // 待比较元素大于当前元素
      array[preIndex + 1] = array[preIndex] // 将待比较元素后移一位
      preIndex -- // 游标前移一位
    }
    if (preIndex + 1 !== i) { // 避免同一个元素赋值给自身
      array[preIndex + 1] = current // 将当前元素插入预留空位
    }
  }
  return array
}
```



### 对象

#### 合并对象

```js
// Object.assign合并对象，把后面的参数合并到第一个参数
const obj3=Object.assign（｛｝，obj1，obj2）


```

#### 对象循环

```js
// vue
v-for="(val,key,index) in obj"
```

#### 过滤器

```js
// 过滤器 fiter 会返回符合条件的数据
let obj1 = obj.filter(v => {
   return v.index == index;
})
```

#### 对象深拷贝

```js
/**
 * 对象深拷贝
 * @data // 拷贝对象
 */
export const deepClone = data => {
    var type = getObjType(data);
    var obj;
    if (type === 'array') {
        obj = [];
    } else if (type === 'object') {
        obj = {};
    } else {
        //不再具有下一层次
        return data;
    }
    if (type === 'array') {
        for (var i = 0, len = data.length; i < len; i++) {
            obj.push(deepClone(data[i]));
        }
    } else if (type === 'object') {
        for (var key in data) {
            obj[key] = deepClone(data[key]);
        }
    }
    return obj;
};
export const getObjType = obj => {
    var toString = Object.prototype.toString;
    var map = {
        "[object Boolean]": "boolean",
        "[object Number]": "number",
        "[object String]": "string",
        "[object Function]": "function",
        "[object Array]": "array",
        "[object Date]": "date",
        "[object RegExp]": "regExp",
        "[object Undefined]": "undefined",
        "[object Null]": "null",
        "[object Object]": "object"
    };
    if (obj instanceof Element) {
        return "element";
    }
    return map[toString.call(obj)];
};

```

#### 判断是否存在该属性

```js
function hasPrototypeProperty(obj, pro) {
    //  hasOwnProperty   in
    if (!obj.hasOwnProperty(pro) && (pro in obj)) {
        return true;
    }
    return false;
}
```

### 获取url上的键值对

```js
function getQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return decodeURI(r[2]);
    return null;
}
```

### 常用正则

#### 去除空格

```js
function returnNoSpace(str) {
    return str.replace(/\s+/g, ' ');
}
```

#### 检查手机号码

```js
function checkPhone(phone) {
    if (!(/^1[34578]\d{9}$/.test(phone))) {
        return false;
    } else {
        return true;
    }
}
```

#### 检查邮箱

```js
function checkEmail(myemail) {　　
    var myReg = /^[a-zA-Z0-9_-]+@([a-zA-Z0-9]+\.)+(com|cn|net|org)$/;
    if (myReg.test(myemail)) {　　　　
        return true;　　
    } else {　　　　
        return false;
    }
}
```



### 常用样式

#### css

```css
.root{
    #box::-webkit-scrollbar {display: none;} //隐藏滚动条样式
    pointer-events: none; // 允许点击穿透 (默认阻止：auto);
    /* 变量*/
}
.parent{
    display:flex;
    .children1{
        flex-shrink:0;//避免挤压
    }
}
// 改变浏览器默认的滚动条样式
::-webkit-scrollbar-track-piece { //滚动条凹槽的颜色，还可以设置边框属性
background-color:#f8f8f8;
}
::-webkit-scrollbar {//滚动条的宽度
width:6px;
height:6px;
}
::-webkit-scrollbar-thumb {//滚动条的设置
  background-color:#dddddd;
  background-clip:padding-box;
  min-height:28px;
  border-radius: 3px;
}
::-webkit-scrollbar-thumb:hover {
  background-color:#bbb;
}
// 文本超出显示省略号
// 单行文本
{
    overflow: hidden;/*超出部分隐藏*/
    text-overflow:ellipsis;/* 超出部分显示省略号 */
    white-space: nowrap;/*规定段落中的文本不进行换行 */
}
// 多行文本
{
    display: -webkit-box;
　　-webkit-box-orient: vertical;
　　-webkit-line-clamp: 3;// 行数
　　overflow: hidden;
}
```



### 功能

#### 表单自定义校验

~~~js
validator: (rule, value, callback) =>{
    if (value) {
        callback();
    }else{
        callback(new Error('请打分'))
    }       
},
~~~

#### 自定义dom事件

```js
  var evt = document.createEvent("HTMLEvents");
  // 初始化，事件类型，是否冒泡，是否阻止浏览器的默认行为
  evt.initEvent("tap", false, false);
  // 触发
  div.dispatchEvent(evt);

```

#### 页面开启摄像头

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
</head>

<body>
  <video src="" width="600" height="600" autoplay controls></video>
  <script>
    var video = document.querySelector("video");

    navigator.getUserMedia({
      video: true
    }, success, error);
    function success(stream) {
      video.src = window.URL.createObjectURL(stream);
    }
    function error(err) {
      console.log(err);

    }
  </script>
</body>

</html>
```

#### 下拉刷新

```js
  //------------------------下拉刷新-------------------------------
    //定义的全局变量:拉动距离disY、原本内容高度startY、拉动后内容高度endY
    var disY, startY, endY;
    //触摸事件开始时触发
    $('.scroll').on('touchstart', function (e) {
        startY = e.changedTouches[0].pageY;
    });
    //触摸事件移动中时触发
    $('.scroll').on('touchmove', function (e) {
        endY = e.changedTouches[0].pageY;
        disY = endY - startY;
        if (disY > 30) {
            $('.status').css({
                display: 'block',
                height: disY + 'px',
            });
        }
    });
    //触摸事件结束时触发
    $('.scroll').on('touchend', function (e) {
        endY = e.changedTouches[0].pageY;
        disY = endY - startY;
        if (disY > 72) {
            //定义一个定时器，返回下拉到一定的高度
            var timer = setInterval(function () {
                disY -= 13;
                if (disY <= 60) {
                    $('.status').css({
                        height: 52 + 'px',
                    });
                    clearInterval(timer);
                    refresh();
                }
                $('.status').css({
                    height: disY + 'px',
                });
            }, 75);
        }
    });
    //请求刷新数据
    function refresh() {
        var t = setTimeout(function () {
            for (var i = 0; i < 13; i++) {
                $('.scroll ul').append('<li>' + '添加的数据:' + parseInt(i + 1) + '</li>');
            }
            $('.status').css({
                display: 'none',
                height:0
            });
            clearTimeout(t)
        }, 3000);
    }
```

#### 上拉加载

```js
//--------------上拉加载更多---------------
    //获取滚动条当前的位置
    function getScrollTop() {
        var scrollTop = 0;
        if (document.documentElement && document.documentElement.scrollTop) {
            scrollTop = document.documentElement.scrollTop;
        } else if (document.body) {
            scrollTop = document.body.scrollTop;
        }
        return scrollTop;
    }
 
    //获取当前可视范围的高度
    function getClientHeight() {
        var clientHeight = 0;
        if (document.body.clientHeight && document.documentElement.clientHeight) {
            clientHeight = Math.min(document.body.clientHeight, document.documentElement.clientHeight);
        } else {
            clientHeight = Math.max(document.body.clientHeight, document.documentElement.clientHeight);
        }
        return clientHeight;
    }
 
    //获取文档完整的高度
    function getScrollHeight() {
        return Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
    }
 
    //滚动事件触发
    window.onscroll = function () {
        if (getScrollTop() + getClientHeight() === getScrollHeight()) {
            console.log('在这里加载数据咯！');
        }
    };
```































​	