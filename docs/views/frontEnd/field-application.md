---
title: 前端技术应用
date: 2020-04-15
sidebar: "auto"
categories:
  - 前端
tags:
  - 技术笔记
note: 技术栈：vue、小程序、公众号、svn、less、sass 等常用技术整理
---

::: tip
技术栈：vue、小程序、公众号、svn、less、sass 等常用技术整理
:::

<!-- more -->

# 前端技术应用

## vue

**特点**：数据驱动、组件化（适合多人开发）

##### vue全家桶

1. 项目构建工具 vue-cli 
2. 路由 vue-router 
3. 状态管理 vuex 
4. http请求工具 vue-resource |axios。 

##### vue.use()

通过全局方法 Vue.use() 使用插件。它需要在你调用 new Vue() 启动应用之前完成

Vue.use 会自动阻止多次注册相同插件，届时只会注册一次该插件。

##### 获取dom元素

1. 在[vue](https://www.baidu.com/s?wd=vue&tn=24004469_oem_dg&rsv_dl=gh_pl_sl_csd)中可以通过给标签加ref属性``<div id="box" ref="mybox">``
2. 在js中利用ref去引用它``this.$refs.mybox.style.color = 'red';``

##### 布局

存在多余边距可在app.Vue的style中写入

```css
body{margin:0;padding:0;}
//初始化样式-内减模式
*, *::before, *::after {
	box-sizing: border-box;
}
```

Element ui	的栅格默认是24份

#### 组件

异步组件：定义时什么都不做，只在组件需要渲染的时候进行加载渲染并缓存--也就是组件懒加载

##### 组件传值

父传子：父组件在标签添加 :自定义 属性传递数据；在子组件的props属性通过自定义属性名接收

> 父传子-事件传值：this.$refs.dom.eventName(params)
>
> 子组件-方法接收：methods:{eventName(params){}};
>
> 与v-bind比较：是主动性触发传值；数据不是同步更新的；

子传父：子组件将自定义的事件挂载到 $emit 后面，参数1为事件名，参数2为传参；父组件通过v-on监听该事件，得到传递过来的数据（可在父组件定义函数，表示子组件通过事件名找到父组件里的事件触发函数）

非父子：借助于事件总线（一个新new出来的空的Vue实例：如：`let evbus = new Vue()`），作为传递数据的桥梁；通过`evbus.$emit('事件名称',数据)`发射事件名称及需要传递的数据；通过: `evbus.$on('发射过来的事件名称',(数据)=>{})`方法监听事件总线

##### watch

监听属性值变化

vue不能检测对象属性的添加或删除，只监听obj这个属性它的引用的变化

```js
// index.vue ---
watch:{
    attrName(newVal,oldVal){// 直接监听变量--简单数据类型
    },
    'object.key':{// 监听对象的某个属性
        handler(newVal,oldVal){// 监听执行函数
        }
    },
    object:{// 监听对象
        handler(newVal,oldVal){
        },
        deep:true,//启动深度监听 --初始化时存在的属性才能响应监听
        immediate:true,// 最初绑定值也触发监听
    }
}
```



##### 解绑双向数据绑定

`var obj = JSON.parse(JSON.stringify(this.obj))`

##### Vue.delete

`Vue.delete` 用来删除对象的属性。如果对象是响应式的，确保删除能触发更新视图。这个方法主要用于避开 Vue 不能检测到属性被删除的限制，但是你应该很少会使用它。需要注意的是，目标对象不能是一个 Vue 实例或 Vue 实例的根数据对象。 

##### 组件依赖

 缩略图轮播图--(轮播图上附带大图展示)

dom的拼接渲染 --(需转为同一类型)

- 字符串转dom对象：`const dom = parseDom('<div>这是一个dom字符串</div>')`
- dom对象转字符串：`const don = don.outerHTML`

### 项目操作

安装2.9版本，3.1是测试版

license：协议，最好填写 ISC； 表示不开源

vue init webpack adminmanage

ESLint	严格模式，新手选NO，或者在config文件夹下的index.js中的useEslint属性的值改为false

消除严格模式报错

```
npm run lint
然后在配置文件(package.json)中的lint属性后添加 --fix 如
"lint":"eslint --ext .js,.vue src --fix"
```

package.json.lock		该文件可能会绑定私有仓库，导致下载失败，建议删除！

assets	放图片，会被打包

static	静态资源，不会被打包

框架一般用于后台管理，官网不用（除了适配的bootstrap），因为不利于seo

第三方库除了 npm i 安装，还可以在index.html里面引入

#### 使用流程

1. 全局脚手架安装：
   1. `npm install -g @vue/cli `  脚手架3.x
   2. `npm install -g @vue/cli-init` 脚手架3.x兼容脚手架2
2. 创建项目：`vue create my-project `
3. 项目配置：

```js
// 项目选项
// 1.配置方式--------
> vuecli3 ... // 上一次记录过的cli3配置（第一次执行ceeate命令是没有该选项的）
> default... // 默认配置（接下去一路回车就行）
> Manually... //手动配置
// 2.选择配置（手动）空格选中切换；A键全选------
(*) Babel //编译器-转码
( ) TypeScript //支持使用 TypeScript 书写源码
( ) Progressive Web App (PWA) Support // PWA 支持。
(*) Router // 支持 vue-router 。
(*) Vuex // 支持 vuex 。
(*) CSS Pre-processors // 支持 CSS 预处理器。
(*) Linter / Formatter // 支持代码风格检查和格式化。
(*) Unit Testing // 支持单元测试。
( ) E2E Testing // 支持 E2E 测试。
// 3.
Use history mode for router?//路由历史模式 Yes
// 4.
Pick a CSS pre-oricessor: // css的预处理,按项目需求决定
> SCSS/SASS
> LESS
> Stylus
// 5.
 Pick a linter / formatter config: // 格式化模式
  ESLint with error prevention only
  ESLint + Airbnb config
> ESLint + Standard config // 标准模式
  ESLint + Prettier
// 6.
Pick additional lint features:// 语法检查方式
>(*) Lint on save //保存检测
 ( ) Lint and fix on commit //提交检测
// 7.
 Pick a unit testing solution：// 单元测试
 > Mocha + Chai
  Jest
// 8.
Where do you prefer placing config for Babel, PostCSS, ESLint, etc.? // 配置文件存放地方
 In dedicated config files // 独立文件夹位置 config.js
>  In package.json //package.json文件里
// 9.
Save this as a preset for future projects? // 是否记录这一次的配置 y
Save preset as: // 保存预设--回车等待加载
```

1. 启动项目：

```js
cd my-project // 进入到项目根目录
npm run serve // 启动项目
```

1. package.json文件中的browserslist字段（或单独的.browserslistrc文件）指定了项目的目标浏览器文件范围

```js
// package.json ---这种方式能减少项目根目录中的配置文件
  "browserslist": [
    "last 1 version",//最后一个版本
    "> 1%", // 全球使用情况统计选择的浏览器版本
    "maintained node versions",//维护node版本；所有node.js版本，仍由Node.js Foundation维护
    "not dead" //没有废弃的；
  ]
// .browserslistrc --
last 1 version
> 1%
maintained node versions
not dead
// more options --更多配置属性
last 2 version // 每个浏览器的最后两个版本；避免手动更新版本
not ie <=8 // ie8（包括ie8）以下废弃-->也就是不兼容
defaults // Browserslist的默认浏览器（> 0.5%, last 2 versions, Firefox ESR, not dead）。
cover 99.5% // 提供覆盖的最流行的浏览器
// 快速查询范围中的浏览器 命令
npx browserslist '> 0.5%, not IE 11'
current node //当前使用的node版本
ie 6-8 // 选择包含范围的版本
```

1. polyfill --腻子脚本（依赖）
2. 现代模式--打包时不考虑支持更老的浏览器，减少代码冗长情况，改善应用的加载性能。 
   1. `vue-cli-service build --modern`--会产生两个应用的版本：现代版、旧版（面向不支持ES modules的旧浏览器）

#### HTML和静态资源

##### index 文件

- `public/index.html `文件会被用作模板
- `<%= VALUE %>` 用来做不转义插值；
- `<%- VALUE %>` 用来做 HTML 转义插值；
- `<% expression %>` 用来描述 JavaScript 流程控制。

##### Preload|Prefetch

- 内容预加载-资源提示 `<link rel="preload">`
- 也可手动选定要提前获取的代码区块

1. vue.config.js --webpack配置

```js
// vue.config.js--以下配置是非必需的
module.exports = {
  // 部署应用包时的基本url
  publicPath: process.env.NODE_ENV === 'production'
    ? '/production-sub-path/'
    : '/'
  // 去掉文件名中的 hash
  filenameHashing: false,
  // 删除 HTML 相关的 webpack 插件--不推荐：硬编码的文件名不利于实现高效率的缓存控制 等。。
  chainWebpack: config => {
    config.plugins.delete('html')
    config.plugins.delete('preload')
    config.plugins.delete('prefetch')
  },
  pages:{//可用于构建多页面应用
  },
  // 配置转发代理
  devServer: {
    port: 8080,
    proxy: {// 配置代理属性
      "/auth": {
        target: 'http://localhost:4000',
        ws: true,
        pathRewrite: {
          "^/auth": "/auth"
        }
      },
    }
  }
}
```

##### URL转换规则

- 绝对路径，保留不变
- . 开头，会作为一个相对模块请求被解析
- ~ 开头，会作为一个模块请求被解析（依赖文件引用要用~避免歧义）
- @ 开头，会作为一个模块请求被解析，指向 `projectRoot/src`，仅作用于模板中

#### css相关

Postcss 处理css的webpack的加载器  

- 配置文件`.postcssrc.js|vue.config.js 中的 css.loaderOptions.postcss `
- 向预处理器Loader传递选项

#### webpack相关

##### webpack编译好处

- 脚本和样式表会被压缩且打包在一起，从而避免额外的网络请求。
- 文件丢失会直接在编译时报错，而不是到了用户端才产生 404 错误。
- 最终生成的文件名包含了**内容哈希**，因此你不必担心浏览器会缓存它们的老版本。

##### 以一个文件的方式使用解析好的配置

`<projectRoot>/node_modules/@vue/cli-service/webpack.config.js`

#### 环境变量和模式

##### 环境变量

- 文件 `.env |.env.local ...`
- 内容：只包含环境变量的'键=值'对。

```js
FOO=bar
VUE_APP_SECRET=secret
```

- 只在本地有效的变量：`.env.local`--本地环境文件默认会被忽略，且出现在 `.gitignore` 中

##### 模式

默认情况下，一个 Vue CLI 项目有三个模式： development 、production、test

构建目标

- 默认模式：应用模式；
- 库模式
  - IE兼容性：在使用库之前需先在页面上引入 `cueewnt-script-polyfill`

##### web Components组件

不支持ie11及更低版本

#### Vue 全局配置

```js
// Vue.config 是一个对象，包含 Vue 的全局配置。
Vue.config.silent = true // 取消 Vue 所有的日志与警告。
Vue.config.ignoredElements = []// 设置忽略的自定义元素
// Vue.config.key。。。
productionTip:false,//是否在vue启动时生成生产提示
```

#### Vue 全局api

##### Vue.extend()

局部注册。接收的是对象或函数->也可以理解为 (单继承)

该方法创建的是一个组件构造器，而非组件实例；不能通过`new Vue({ components: testExtend })` 直接使用；需要通过 `new testExtend().$mount('#mount-point')` 来挂载到指定的元素上。 

- 使用。

  - ```js
    // 创建构造器
    var Profile = Vue.extend({
      template: '<p>{{firstName}} {{lastName}} aka {{alias}}</p>',
      data: function () {//data定义必须是函数返回对象
        return {
          firstName: 'Walter',
          lastName: 'White',
          alias: 'Heisenberg'
        }
      }
    })
    // 创建 Profile 实例，并挂载到一个元素上。$mount() = $mount('body')
    new Profile().$mount('#mount-point')//可以是自定义标签
    // 可通过 $el 属性来访问 Profile 组件实例：Profile.$el
    ```

- 优势。

  - 相比component，可以**从接口动态渲染组件**。	
  - 没有显式挂在#app 下，类似于各种 modal 是动态创建的；

##### Vue.nextTick()

- 参数：
  - `{Function} [callback]`
  - `{Object} [context]`
- 用法：
  - 在下次 DOM 更新循环结束之后执行延迟回调。在修改数据之后立即使用这个方法，获取更新后的 DOM。
  - 作为一个 Promise 使用。`Vue.nextTick().then()`

##### Vue.set()

- 作用：添加一个**响应式**的属性，且触发视图更新；
- 使用：`Vue.set( target, propertyName/index, value )`
  - 等同于`Vue.items.splice(target, propertyName/index, value)`
  - 项目中：`this.$set(target, propertyName/index, value)`
- 参数：
  - target：数据源；{Object | Array} 
  - propertyName/index ：指定项；key|index
  - value：覆盖值；any 
- 返回值：设置的值。 

Vue.delete()

- 作用：删除对象的属性。如果对象是响应式的，确保删除能触发更新视图。
- 使用：`Vue.delete( target, propertyName/index )`
- 参数：
  - target：数据源；{Object | Array} 
  - propertyName/index ：指定项；key|index

Vue.directive()

- 作用：注册或获取全局指令。
- 使用：`Vue.directive( id, [definition] )`
- 参数：
  - id：指令名（可自定义）；{string} 
  - definition：处理函数；{Function | Object}  

```js
//两种写法
// 第一种写法：函数 el为dom，vNode为vue的虚拟dom，bind为一较复杂对象（指令绑定值）
Vue.directive('my-directive',function(el,bind,vNode){});
// 第二种写法：对象
Vue.directive('my-directive', {// 里面是指令的5个生命周期
  //只调用一次，指令第一次绑定到元素时候调用，用这个钩子可以定义一个绑定时执行一次的初始化动作。
  bind: function () {},
  //被绑定的元素插入父节点的时候调用(父节点存在即可调用，不必存在document中)
  inserted: function () {},
  //被绑定与元素所在模板更新时调用，而且无论绑定值是否有变化，通过比较更新前后的绑定值，忽略不必要的模板更新
  update: function () {},
  //被绑定的元素所在模板完成一次更新更新周期的时候调用
  componentUpdated: function () {},
  //只调用一次，指令元素解绑的时候调用
  unbind: function () {}
})
```

- 注意：要在实例初始化之前使用，定义的指令不支持驼峰命名法；否则报错

##### Vue.filter()

- 作用：删除对象的属性。如果对象是响应式的，确保删除能触发更新视图。
- 使用：`Vue.filter( id, [definition] )`
- 参数：
  - id：过滤器名（可自定义）；{string} 
  - definition：处理函数；{Function}  

```vue
// 注意：过滤属性只能在结构里使用
<h1>{{msg |msgFormat}}</h1> // 基本使用
<h1>{{msg |msgFormat('讨论')}}</h1> //传多个参数
<h1>{{msg |msgFormat('讨论')|test}}</h1> //多次过滤
```

##### Vue.component ()

- 作用：删除对象的属性。如果对象是响应式的，确保删除能触发更新视图。
- 使用：`Vue.component( id, [definition] )`
- 参数：
  - id：过滤器名（可自定义）；{string} 
  - definition：处理函数；{Function| Object}  

##### Vue.compile()

- 在render函数中编译模板字符串，只在独立构建时有效
- `Vue.compilr(template)`
- babel插件-》用于在Vue中使用JSX语法

##### Vue.observable()

- `Vue.observable(object)`
- 让一个对象可响应。Vue 内部会用它来处理 `data` 函数返回的对象。 

##### Vue.version

- 提供字符串形式的Vue安装版本号。

### 基础

#### 数据

##### data

- 以 _ 和 $ 开头的属性不会被Vue实例代理。因为可能和Vue内置的属性、API方法冲突。
- 当实例被创建时就存在于data中的属性才是响应式的
- 一个组件的data必须时一个函数

##### props

属性：

- type：可以是下列原生构造函数中的一种
  - String、Number、Object、Array、Function、Boolean、Date、Symbol
- default：any；为该 prop 指定一个默认值。
  - 对象或数组的默认值必须从一个工厂函数返回
- required：Boolean；是否必填
- validator：Function；自定义函数-》false则抛出警告

propsData：只用于nwe创建的实例中，创建实例时传递props。常用于测试

##### computed

- 计算属性：
  - 缓存计算结果，当依赖的**响应式属性**变化时重新计算
  - 非响应式属性在该实例的范畴之外，则不更新计算
  
- 默认只有 getter；可提供 setter
  
  - 在对象中使用getter :`{get:fn(),set:fn2()}`	
  
- 应用：
  - 在模板引用的属性：对于任何复杂逻辑，都应当使用计算属性
  - 过滤|排序显示数据，且不改变原始数据
  
- 不适用：嵌套在v-for 循环中

- 不能直接传参，需以闭包的方式

  ~~~js
   photoList() {
       return (value)=>{
           var imgList = [];
           for(var i=0;i<value.length;i++){
               imgList.push({src: value[i]});
           }
           return imgList;
       }
   }
  ~~~

- 

##### 初始化赋值

- data中不要用data里的变量给另一个变量赋值->此时赋值的变量不一定完成了初始化

动态绑定类 class：

- 对象形式：`:class="{aName:true,bName:false}"`
- 数组形式：`:class="[aName,bName]"`
- 数组对象结合：`:class="[{bName:false},aName]"`

动态绑定 style：

- 数组形式：`:style="[classObj,classObj2]"`
- 多重值：`:style="{display:['-webkit-box', '-ms-flexbox', 'flex']}"`
- 

##### DOM

- el
- template
- render
- renderError：当render函数遭遇错误时，渲染输出renderError

#### 模板渲染

为高效的渲染元素，会复用已有元素而不是从头开始渲染（应用：切换不同登陆方式时，需要保留已输入内容）





#### **组件传值**：

- prop=>挖坑名与data变量名不能相同

  ```js
  //使用v-bind绑定（不是:绑定）表示告诉vue 这是js表达式而不是字符串
  //type:String,Number,Boolean,Array,Object,Date,Function,Symbol（ES6新添加，表示独一无二的值）
  //引用类型的数据被改变时，会影响到父组件的状态
  props:{
      level:{
          type:Number||[Number,String,Object],//规定数据类型
          required:true,//是否必须，不与默认值default同时使用
          default:100||()=>{},//默认值，不与必须required同时使用||对象或数组默认值必须从一个工厂函数获取
      },
      propA:Number||[Number,String],//多个可能类型
      propF: {
        validator: function (value) {//自定义验证函数
          // 这个值必须匹配下列字符串中的一个
          return ['success', 'warning', 'danger'].indexOf(value) !== -1
        }//注意：会在一个组件实例创建之前进行验证，所以实例的属性 (如 data、computed 等) 在 default 或 validator 函数中是不可用的。
      },
  }
  ```

#### 插槽

element-ui中表格只能展示文本，若需要添加非文本内容，需要用插槽

```html
// 只写slot属性就只能展示而不能获取数据--》slot-scope='scope'
<template slot-scope='scope'>
    <el-button type="primary" icon="el-icon-edit" circle></el-button>
</template>
```



#### **生命周期函数**：

- **activated**----keep-alive组件激活时调用。该钩子在服务器端渲染期间不被调用。

- **deactivated** ---keep-alive组件停用时调用。 

  > 与created的区别：
  >
  > created()：在创建vue对象时，当html渲染之前就触发；但是注意，全局vue.js不强制刷新或者重启时只创建一次，也就是说，created()只会触发一次；
  >
  > activated()：在vue对象存活的情况下，进入当前存在activated()函数的页面时，一进入页面就触发；可用于初始化页面数据等

- **errorCaptured** --当捕获一个来自子孙组件的错误时被调用

  - 收到三个参数：错误对象、发生错误的组件实例、错误信息
  - 可返回 false 来阻止该错误继续向上传播（即忽略该错误）

#### 实例属性

- $root 根实例
- $scopedSlots 访问作用域插槽
- $refs 持有注册过 ref 属性的Dom
- $isServer 当前 Vue实例是否运行于服务器
- $attrs 包含了父作用域中不作为prop被识别的特性绑定
- $listeners 组件事件监听器
- $watch 属性监听器
- $set 设置 对象|数组 指定位置的值，返回设置的值
- $delete 删除对象|数组的指定项
- $on 监听指定的**自定义**事件
- $once 监听一个自定义事件，只触发一次，触发后移除
- $off 移除自定义监听器（慎用）
- $emit 抛出自定义事件
- $mount vue实例化时触发挂载
- $forceUpdate 重新渲染vue实例
- $nextTick dom更新后执行
- $destroy 销毁实例

#### 指令

- v-on 监听事件

  - $event：特殊变量，可传入事件默认参数

- v-model：默认触发input事件，可使用lazy修饰符转为change事件或自定义组件的v-model

  - 组件标签绑定 v-model：相当于`:value="value" @input='$event.target.value'`

  - ```js
    //自定义组件标签
    <custom-input v-model="value"></custom-input>
    //子组件-自定义组件中
    prop:{
        value:{
            type:[String,Array],
            default:(){
    		  return ''
            }
        }
    }
    ...
    // 并且抛出这两个事件
    this.$emit('input',value)
    this.$emit('on-change',value)
    ```

  - 

- v-slot 缩写 #

  - 提供具名插槽或需要接收prop的插槽

- v-pre 跳过这个元素和它的子元素的编译过程

- v-cloak 这个指令保持在元素上直到关联实例结束编译。

- v-once 只渲染元素和组件一次。--优化更新性能

- 插值表达式：只能包含单个表达式

- key:

  - 作用：强制替换元素或组件---手动强制触发重新渲染

- key 和 v-for：key作为唯一标识节点加速虚拟DOM渲染。遍历输出的dom非常简单或可以依赖默认行为以获取性能上的提升时，可以不使用key

- v-if 和 v-for：当同时使用时，v-for具有比v-if更高的优先性



#### 特殊特性

- key：
  - 完整的触发组件的生命周期钩子（重新渲染）
  - 触发过渡
  - 使用基本类型值进行赋值
- ref 引用元素到$refs 对象上
- is属性：
  - 对限制元素（如table,ul,ol里面只允许包含指定的元素）使用自定义组件时会被视为无效并提升到外部，导致渲染出错
  - 使用 is 属性：扩展原声HTML元素，使自定义组件标签能够正常渲染（替换原标签内容）
- directives：指令 v-

#### 内置组件

单：组件内同时只有一个子元素被渲染

- transition：过渡；给组件或元素添加过度效果（单）
  - prop
  - 事件
- transition-group：可作为多个组件或元素的过渡效果
- keep-alive：缓存组件；主要用于保留组件状态或避免重新渲染（单）
  - include|exclude：允许组件有条件的缓存
  - max:最大缓存数量
- slot：插槽组件

**路由**：

- router-link和router-view

  > router-link标签，将来会渲染成a标签，其中to后面是一个路径，用于指示路由跳转。
  >
  > router-view标签，路由切换后，会显示在router-view下面

#### 混入

**mixin**	用于分发组件中的可复用功能；

- 使用：可包含任意组件选项；在组件中通过 `mixins = [myMixin]`进行使用
- 数据对象会进行递归合并，同名选项|发生冲突时**以组件数据优先**；
- 同名钩子函数将合并为一个数组，都将被调用；混入的先调用
- 全局混入：`Vue.mixin({ data:()=>{return }})`；会影响每个单独创建的 Vue 实例 ，慎用！！

#### 实际开发

##### vue模拟点击事件

`this.$refs.refName.$el.click();`  || `document.querySelectorAll(".fileUploads")[0].click() `

##### Vue.set()

作用：响应式新增与修改数据（更新视图，v-if也能更新视图）

调用方法：`Vue.set(target,key,value)`

- terget：要更改的数据源（可以是对象或数组）
- key：要更改的具体数据
- value：重新赋的值
- 如：`Vue.set(对象|数组,属性|索引,替换的值)`
- 补充：Vue.set()在methods中也可以写成this.$set() 

##### 导出与引用

import：

- 可以只把需要使用的引入到文件(按需引入更不耗性能 )
  - `import xxx from "xxx" `
- 也可以将若干export 导出的内容组合成一个对象返回
  - `import * as xxx from "xxx" `

as 可以对导出模块进行重命名，如：`import {a as b,c as d} from "xxx" `--（es6）

require：

- 要把这个模块中的所有内容引入：`require('xxx')`
- 相比import更耗性能

特别的：配置文件（vue.config.js）引用其他文件：

##### 配置全局变量

1. 创建 .env文件：文件中 #表注释，变量直接使用即可；注意全局变量需以 VUE_APP_ 开头

   1. ~~~js
      #开发地址
      #url=http://210.72.5.178:8888
      #devUrl=http://192.168.1.9:8870
      
      VUE_APP_DEVURL=http://192.168.1.9:8870
      ~~~

2. 使用文件变量：直接使用`process.env.VUE_APP_DEVURL`

   1. ~~~js
      target:process.env.VUE_APP_DEVURL
      ~~~

### 跨页面传参

##### 方法

1. 链接URL带参数
2. 使用本地缓存
3. vue跨页面传参：

~~~js
// 1. params传参
this.$router.push({
        name:"admin",
　　　　//这里的params是一个对象，id是属性名，item.id是值(可以从当前组件或者Vue实例上直接取)
        params:{id:item.id}
}) 
// 2. 路由属性配置传参
this.$router.push({
        name:"/admin/${item.id}",
}) 
//通过 $route 获取参数
// 以上两种传参方式基本上可以理解为ajax中的post请求方式，参数都是不可见的，但受刷新影响(参数丢失)
// 3. query传参
// 该方法类似ajax中的get 方法，参数直接在url后面添加，不受刷新影响，但参数是可见的
this.$router.push({
        name:"/admin",
　　　　 query:{id：item.id}
}) 
~~~



## 小程序

基本标签（view=div,image=img,text=p,navigator=a）和生命周期有点区别

##### 生命周期

小程序（在前）

- onLaunch：小程序初始化完成时触发的函数，只执行一次，除非小程序在后台超过5分钟被自动销毁了
- onShow：小程序显示时候执行（切后台功能：5分钟后onLaunch自动销毁）
- onHide：小程序隐藏时候执行，销毁定时器
- onError：小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息

页面（在后）

- onLoad监听页面加载，通常用于页面加载完后加载数据（能获取参数，通过默认形参**query**）
- onReady监听页面初次渲染完成
- onShow监听页面显示（每次打开页面都会调用一次）
- onHide监听页面隐藏（当navigateTo或底部tab切换时调用）
- onUnload监听页面卸载（当redirectTo或navigateBack的时候调用。微信小程序的 app.js 中 独有的 函数）

**优点**

1. 无需下载，通过搜索和扫一扫就可以打开
2. 打开速度快，良好的用户体验
3. 开发成本比APP低
4. 良好的安全保障（微信审查）

**缺点**

1. 限制较多：页面大小不能超过1M，不能打开超过5个层级的页面
2. 样式单一：小程序部分组件是成型的，样式不可以修改，如 幻灯片、导航；
3. 推广面窄：不能分享朋友圈，只能通过 分享给朋友、附近小程序推广；
4. 依托微信，无法开发后台管理功能

处理异步请求：promise、async/await、

```js
promise(resolve成功回调,reject失败回调）=>{
    success:function(res){
        resolve(res)
    },
        fail:function(res){
            reject(res)
        }    
}
//async await
async function task() {
let data1=await prepare(“start task”);
let data2=await fired(data1);
let data3=await stewed(data2);
return data3;
}
task().then(v=>{
console.log(v);
})        
```

##### 分页功能

给标签加上overflow:auto属性，结合触底事件onPullDownRefresh

##### 属性

open-type='switchTab'  ---》添加该属性跳转到tabBar页面

mode="aspectFill" ---》图片宽占满，会被剪切

type="number | idcard | digit（多个小数点）" password disabled（禁用） ---》input标签

form-type="submit（提交） | reset(重置)" ---》button标签

## 公众号

也是vue移动端，只是需要**授权**登录（后台负责做的）

**公众号授权流程**：

1 通过一个简单的验证获取到用户的OPENID //后台操作的

2 再去通过OPENID加上公众号的密钥和appid //用户的详细信息

3 再生成一个链接返回给用户

##### 基本

简单后台语法：ruby（鲁比）

微信客户端会提示一个报错，不用管它

**Vant ui**	vue移动端组件库

适配：设备划分？**SUI**做适配（原型图尺寸/html字体大小=rem大小）

vh：视口单位 -》100vh

for循环比while循环效率高，且不会出现内存溢出

移动端的**适配**：375px以下的 固定 12 | 16；375~1024之间的 动态计算；1024以上的就是平板电脑了，不做rem；

## svn

别名：小乌龟

中央仓库：必须要有主服务器（需要安装服务端）才能上传代码（区别git）

公司有服务端：拿到地址，用户名没有错误就行

地址：协议后面是公共服务器的话为域名（否则是本机的计算机名）

##### 中文化

安装后在settings里面的language选择中文

##### svn服务器

Standard Edition 标准版，支持5-10人

创建项目：所有代码（服务器 客户端 app）放在同一个文件下，以不同文件区分

好处：可以一次性下完所有代码

坏处：容易泄密

解决：分组（前端的只能看前端代码，后端的只能看后端代码）

##### 项目操作

**代码下载**

1. 新建文件夹，右键检出（checkout），输入项目url（新建项目后自动生成）

   右键项目名复制url，（会提示创建账号和密码，有就不用），点击确定，输入账号密码

2. 指定新增的文件右键svn加入，然后右键提交；输入的提交信息类似于git中的commit -m，也就是版本信息（多人修改同一文件提交时，出现冲突；需要先更新，再进行提交，会提示冲突，右键编辑冲突，再解决冲突；（补充：锁定））

3. 检出文件会导出存放到仓库中的文件

**代码修改**

​	多人开发后代码出现冲突，提示更新，解决冲突

```js
//其中mine表示自己修改后的直到|||这个位置
//===表示之前的版本
//>>>表示其他人修改的
<<<<<<< .mine
zsgvzdf||||||| .r1
34534=======
222>>>>>>> .r2
```

然后更新，提交，提示框选中 冲突文件，右键点击解决，解决冲突，最后更新

**锁定**

右键获取锁定，其他人获取后为只读，不可修改；编辑完后右键解除锁定

**分支**

功能不够强大，一般发布时候用

## less和sass

### less

###### 使用@定义变量-与运算

```less
@blue: #00c;/定义蓝色变量/
@light_blue: @blue + #333;/定义浅蓝色变量/
@dark_blue: @blue - #333;/定义深蓝变量/
@base_margin: 10px;//定义变量
@double_margin: @base_margin * 2;//对变量进行运算 || border: (@width / 2) solid #000
```

###### 注释

标准的CSS注释，/* comment */，是有效的，而且能够通过处理并正确输出。当行注释，// comment，同样可以用但是不能够通过处理也不能被输出，然后，结果是，“无声的”。

###### 导入

`@import 'classes.less'` || `@import 'classes'  ` || `@import 'classes.css'`

###### 转义

~ 避免抛出异常并破坏LESS 

`.class {  filter: ~"progid:DXImageTransform.Microsoft.Alpha(opacity=20)";}`

###### 字符串插入

字符串也是可以用于变量中的，然后通过@{name}来调用。 

```less

```

###### javascript的表达式

使用``解析

```less

```

###### 循环 loop

逻辑：通过递归实现

```less
/* 1定义循环函数 when里面是判断条件(循环终止条件)*/
.loop(@counter) when (@counter > 0){
    /* 2钻进去 3 2 1 */
    .loop((@counter - 1));
    /* 3钻出来 1 2 3 */
    .box@{counter}{
        background-position:@counter*10px @counter*10px;
    }
}
/* 调用循环 */
.loop(3)
```



### sass

###### 使用$定义变量

定义样式规则：@minix； 通过@include来调用 ；

```sass
@mixin border {
  border-top: 1px dotted #333;
}

article.post {
  background: #eee;
  @include border;
}
```

###### 运算

可以直接换算单位了 `2in + 3cm + 2pc = 3.514in`

###### 选择器继承

将一个选择器附加到已经预先定义的选择器上,无需再使用逗号将两者分开的写法[不支持嵌套继承，如：@extend .a span]

```sass
.menu {
  border: 1px solid #ddd;
}
.footer {
  @extend .menu;
}
/* 上面的规则和下面的规则是一样的效果 */
.menu, .footer {
  border: 1px solid #ddd;
}
```

###### 条件语句和控制

是LESS不支持的功能。使用Sass，你可以使用if{}else{}这样的条件语句，以及for{}循环语句，他甚至还支持and、or和not，以及<、>、<=、>=和==等操作符。

```sass
/* Sass中简单的if语句 */
@if lightness($color) > 30% {
  background-color: #000;
} @else {
  background-color: #fff;
}

/* Sass中简单的for循环语句*/
@for $i from 1px to 10px {
  .border-#{i} {
    border: $i solid blue;
  }
}
```

###### 命名空间

命名空间可以用于组织我们的CSS，从而提高到另一个层次，我们将一些公用的样式创建分组，然后在使用的时候直接调用。例如，如果我们创建了一个名为“default”的样式分组，我们就可以在使用到的时候直接从该组中调用。

```sass
//创建分组
#defaults {
  .nav_list () {
    list-style: none;
    margin: 0; padding: 0;
   }
   .button () { … }
   .quote () { … }
}
//调用分组
nav ul {
  #defaults > .nav_list;
}
```

##### **区别**

###### 运行环境

less是基于JavaScript运行（需要额外时间处理，解决：开发环节使用，开发完成，就复制粘贴less输出的到一个压缩器，然后到一个单独的CSS文件来替代less文件。|使用LESS APP来编译和压缩less文件。）,所以less是在客户端处理。

sass是基于Ruby的，是在服务器端处理的。 

###### 作用域：

less:在#header中重新定义了color变量，变量的值将会是不同的而且只会在该选择器中有效。它之前或者之后的所有地方，如果没有被重新定义，都会保持那个原始的值。

sass:变量的值改变后，代码中，此处之后的该变量的值，将会被重写 

###### 输出格式

然而LESS并没有输出设置，而Sass提供4中输出选项：nested, compact, compressed 和 expanded。

##### **共同点**

> **混合（Mixins）：**class中的class;---类似于自定义函数
>
> ```less
> /* 声明函数 @c为参数 black为默认值 */
> .color(@C:black){
>     background-color:@c;
> }
> /* 使用函数 */
> div{
>     .color(yellow);
>     width:100px;
> }
> ```
>
> **参数混合（Parametric）：**可以像函数一样传递参数的class;
>
> **嵌套规则（Nested Rules）：**class中嵌套class，从而减少重复的代码；
>
> **运算（Operations）：**css中的数学计算；
>
> **颜色功能（Color function）：**可以编辑你的颜色；
>
> **命名空间（Namespaces）：**样式分组，从而方便被调用；
>
> **作用域（Scope）：**局部修改样式；
>
> **JavaScript表达式(Javascript evaluation)：**在CSS样式中使用Javascript表达式赋值。

##### 适用场景

sass：Ruby或HAML 

less：PHP和Javascript （便于引入和能够使用JavaScript表达式以及文档属性。 ）
