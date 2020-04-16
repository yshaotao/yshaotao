---
title: 前端规范
date: 2020-04-15
sidebar: "auto"
categories:
  - 前端
tags:
  - 技术笔记
---

::: tip
前端代码规范整理
:::

<!-- more -->

# 前端规范

## HTML规范

##### 原则

1. 规范。保证代码规范，保证结构 表现 行为相互分离
2. 简介。保证代码的最简化，避免多余的空格、空行，保持代码的语义化，尽量使用具有语义的元素，避免使用样式属性和行为属性。任何时候都要用 尽量简单、尽量少的元素解决问题。
3. 实用。遵循标准、但是不能以牺牲实用性为代价。
4. 忠诚。选择一套规范、然后始终遵循。不管代码有多少人参与，都应该看起来像一个人写的一样。

##### 语法

1. 小写。html标签、属性全部小写。
2. 嵌套。所有元素必须正确嵌套。
3. 闭合。双标签必须闭合，单标签（自关闭标签）不闭合 如<hr>。

##### 注释

1. 详尽注释。解释代码解决问题、解决思路等。
2. 模块注释。建议不使用模块结束注释。

##### 文档

1. 文档类型使用html5标准文档类型，文档类型声明之前，不允许出现任何非空字符。不允许添加<meta>强制改变文档模式。 
2. html元素上指定lang属性。显示页面语言，有助于语言合成工具来确定怎样发音，以及翻译工具决定使用的规则，等等。 
3. 指定明确的字符编码。让浏览器轻松、快速的确定适合网页内容的渲染方式。 

##### 属性

1. 双引号属性值，不要使用单引号。
2. 省略type属性。使用style、link、script，不用指定type属性，因为 text/css 和 text/javascript 分别是他们的默认值。 
3. 省略Boolean属性值。Boolean属性不用添加取值，disabled,checked,selected等。 
4. 省略url类属性资源协议头。 如 http、ftp、mailto、file等。
5. 属性顺序。html属性应该按照特定的顺序出现以保证易读性。`class,id, name,data-*,src, for, type, href, value,title, altrole, aria-* `
6. 多媒体元素添加替代属性。图像增加alt属性，音视频增加替代文字。

##### 元素

1. 避免冗余标签。
2. 避免JS生成标签。
3. 段落文字应该用p，避免使用br。
4. 列表项放ul,ol,dl，不要使用一系列的div或p。
5. input使用for属性绑定label。
6. 是label标签包裹radio或checkbox和他们的文字，不要再使用for属性。
7. form button应制定type类型，使用type='submit'、type='reset'或type='button'。



## CSS

##### css文件

全局：global.css

全局样式为全站公用，为页面样式基础，页面中必须包含。 

结构：layout.css 

页面结构类型复杂，并且公用类型较多时使用。多用在首页级页面和产品类页面中。 

私有：style.css 

独立页面所使用的样式文件，页面中必须包含。 

模块 module.css 

产品类页面应用，将可复用类模块进行剥离后，可与其它样式配合使用。 

主题 themes.css 

实现换肤功能时应用。 

补丁 mend.css 基于以上样式进行的私有化修补。 

##### css命名规范

|  用途  |   命名    |   用途   |       命名        |  用途   |   命名   |
| :----: | :-------: | :------: | :---------------: | :-----: | :------: |
|   头   |  header   |   内容   | content/containe  | 尾/页脚 |  footer  |
|  导航  |    nav    |  子导航  |      subnav       |  栏目   |  column  |
| 登录条 | loginbar  |  左中右  | left center right |  标志   |   logo   |
|  广告  |  banner   | 页面主题 |       main        |  热点   |   hot    |
|  新闻  |   news    |   下载   |     download      |  侧栏   | sidebar  |
|  版权  | copyright | 友情链接 |    friendlink     |  搜索   |  search  |
|  菜单  |   menu    |  子菜单  |      submenu      |  滚动   |  scroll  |
| 标签页 |    tab    | 文章列表 |       list        | 小技巧  |   tips   |
|  加入  |  joinus   | 提示信息 |        msg        |  指南   |  guild   |
|  服务  |  service  | 栏目标题 |       title       |  注册   | regsiter |
|  投票  |   vote    | 合作伙伴 |      partner      |  状态   |  status  |

页面外围控制整体布局宽度：wrapper

1. 命名统一采用小写，尽量用英文，尽量不缩写，不加中杠和下划线；
2. 属性顺序：一般遵循显示属性 -> 自身属性 -> 文本属性 -> 其他属性的书写格式 ![属性顺序](/img/attr-sort.png)
3. class命名
   1. 颜色:使用颜色的名称或者16进制代码,如  .red .ff8600
   2. 字体大小,直接使用”font+字体大小”作为名称,如 .font12px
   3. 对齐样式,使用对齐目标的英文名称,如 .left .bottom
   4. 标题栏样式,使用”类别+功能”的方式命名,如 .barnews

##### 代码性能优化

1. 合并margin、padding、border的-top/-right/-bottom/-left的设置，尽量使用短名称
2. 选择器应该在满足功能的基础上尽量简短，减少选择器嵌套，查询消耗。但是一定要避免覆盖全局样式设置
3. 禁止在css中使用*选择符
4. background、font等可以缩写的属性，尽量使用缩写形式
5. 0后面不需要单独，比如0px可以省略成0，0.8px可以省略成.8px
6. 如果可以颜色尽量用三位字符表示，比如#ccc
7. 如果没有边框时，不要写成border:0;应该写成border:none
8. 在保存代码解耦的前提下，尽量合并重复的样式
9. 能以背景形式呈现的图片，尽量都写入CSS样式中

##### CSS Hack的使用 

尽量少使用浏览器检测和CSS Hacks，先试试别的解决办法。考虑到代码高效率和易管理，虽然这两种办法能快速解决浏览器解析差异，但应被视为最后的手段。在长期的项目中，允许使用hack只会带来更多的hack，所以尽量少用

- IE6: _property:value
- IE6/7: *property:value
- IE6/7/8/9: property:value\9

##### IE兼容性

```html
<!-- IE8及以上的版本都会以最高版本IE来渲染页面 -->
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<!--注意：X-UA-Compatible这个是IE8的专用标记，用来指定IE8浏览器去模拟某个特定版本的IE浏览器的渲染方式;
其中的chrome=1效果是如果安装了GCF，则使用GCF来渲染页面，如果未安装GCF，则使用最高版本的IE内核进行渲染-->
<!--input框行高问题，一般不需要写line-height，但是在IE8/IE7需要写hack-->
```

##### 使用规范

1. 尽量不要在CSS中使用!important

2. 避免过小的背景图片平铺

3. 避免使用filter

4. 层级(z-index)必须清晰明确，页面弹窗、气泡为最高级(最高级为999)，不同弹窗气泡之间可在三位数之间调整，普通区块为10-90内10的倍数；区块展开、弹出为当前父层级上个位增加，禁止层级间盲目攀比

5. 背景图片在情况允许，尽可能使用sprite技术，减小http请求，考虑到多人协作开发，sprite按照模块、业务、页面来划分 --- （精灵图）

6. 页面内部尽量避免使用style属性，CSS放在head标签中，由link标签引入，使页面的结构与表现分离

7. 尽量减少使用float、position等影响性能的属性，这样可以避免新手在布局时出现的混乱

8. 尽量少使用`<br />`来断行

9. 不要连续出现多个 (空格)，也尽量少使用全角空格（英文字符集下，全角空格会变成乱码），空白应该尽量使用text-indent、maring/padding等方法来实现

10. 排版如果遇到需要首行缩进的处理，可以使用text-indent:2em;

11. 图片如果需要加载就在页面上用img标签写出，并指明宽高，重要的图片必须加上alt属性，给重要的元素和截断的元素上加上title

12. 如果有跳转的地方，统一使用a标签，<a href="#"></a>，需要跳转到新页面，则还需要加上targent="_blank"属性，如果点击的是空链接(#)，则会自动将当前页面重置到首端，可以使用"javascript:void()"来替代原来的"#"

13. 分清楚什么情况下jpg/gif/png图片

14. 清浮动

    1. ```css
       .clearfix{*zoom:1;} /* 针对IE7 hack，触发IE7的haslayout，以清除浮动 */
       .clearfix:before,.clearfix:after{display:table;content:"";line-height:0;}
       .clearfix:after{clear:both;}
       ```

##### 自适应布局

1. 布局细节 

   1. ```html
       <!-- 让viewport的宽度等于物理设备上的真实分辨率，不允许用户缩放，一般主流的web app都是这样设置 -->
          <meta name="viewport" content="width=device-width, initial-scale=1">
       ```
   2. position：不能使用绝对定位

   3. width/height/margin/padding: 不能使用px，应该使用百分比、auto或em

   4. font: 不能使用绝对大小，应使用em

2. CSS3引入的Media Query模块，可自动探测屏幕宽度

   1. 加载相应的CSS文件，建议根据不同的屏幕分辨率，选择应用不同的CSS规则，如：@media screen and (max-width:799px) {...}
   2. 图片自适应：img{max-width:100%;}



## javascript

1. 命名。使用驼峰标记法 如：testValue
2. 不要使用 switch （在编程语言中是个非常错误的难以控制的语句！），用 if else 代替；
3. 操作符（+，-，*，/，%）前后请加空格 如：x + y
4. 缩进。使用两个空格来代替tab
5. 字符串。统一使用单引号('')，不使用双引号。这在创建HTML字符串非常有好处。
6. 三元条件判断。只在比较简单的情况下使用，避免逻辑混乱。

