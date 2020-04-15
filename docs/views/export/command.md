---
title: 常用命令
date: 2020-04-15
sidebar: "auto"
categories:
  - 更多
tags:
  - 扩展
note: 常用命令
---

::: tip
常用命令
:::

<!-- more -->

## 通用命令

pwd 查看当前目录

cd 切换目录 如：cd /etc

ls 查看当前目录下的内容

mkdir 创建目录 如：mkdir blog

touch 创建文件 如：touch index.html

echo test>	cmd窗口创建文件 如：echo test> index.html

dir	可显示指定目录中的文件和子目录列表 如 dir || dir d:\1  (查看d盘根目录下1文件夹中的文件列表)

cat 查看文件全部内容 如：cat index.html

rm 删除文件 如：rm index.html 	

rm -rf 删除当前目录下的所有文件 如：rm -rf blog

mv 移动文件或重命名 如：mv index.html /demo/index.html （补充：第二个参数为文件类型，就是重命名）

cp 复制文件 如：cp index.html ./demo/index.html

## cmd

ipconfig		查看本机ip地址

servuces.msc	打开系统服务界面

gpedit.msc	  打开本地组策略编辑器（解决文件修改权限问题）



## base常用

status 查看当前仓库的状态

branch 	查看分支

**git branch -a**  查看所有分支

branch -d 分支名	表示删除该分支

checkout 分支名 （切换分支）| 文件名 （还原文件）

checkout -b 分支名	添加或切换分支

git merge 分支名  ---执行合并

git pull origin didi		拉取分支（将本地分支didi与远程分支关联）

~~~txt
合并分支步骤：
1 先切换回主分支	git checkout master
2 拉取更新		git pull
3 切换回自己的分支	git checkout '自己的分支名'
4 合并分支	git merge master	
5 解决冲突	（修改代码）	在线合并
6 保存到本地仓库
7 推送	git push
~~~

## git常用:

###### 全局配置：

git config --global user.name yushaotao	配置用户名

git config --global user.email 714471616@qq.com  配置用户邮箱

git config user.name  查看用户名

git config user.email	查看用户邮箱

git init 初始化

git add . 添加到展示区（缓存）

git status 查看状态

git commit -m 'init' 提交到本地仓库

git remote add origin xxxx远程地址xxxx	关联远程地址  （origin是变量，可写可不写）

git push -u origin master	将本地master分支和远程master关联

git push --set-upstream origin master	设置本地分支追踪远程分支(之后就可以git push 提交代码)

git push 

git push origin master -f  	强制推送

git remote rm origin	删除远程仓库关联

git pull --rebase master	把远程库同步到本地库   git pull --rebase origin master  （拉取更新）

git reflog 查看历史 git log(详细历史) [git log -3 ---表示查看最近3条日志] ---q 退出日志！！

git reset --hard xx版本号xx  返回指定版本

git clone xx远程地址xx  克隆远程   || git clone 远程地址 -b 指定分支

git remote -v		查看远程仓库的地址

.gifignore	忽略配置文件

##### 添加公钥

ssh-keygen -t rsa		生成公钥，提示输入时直接回车即可	（补充：ssh-keygen -t rsa -C “您的邮箱地址”）

cat ~/.ssh/id_rsa.pub		得到公钥代码 --复制粘贴

 git push origin master	推送文件验证

## npm常用命令

###### 环境的搭建

1 安装nrm 并设置镜像源

npm install -g nrm --registry=https://registry.npm.taobao.org

2 添加镜像源

nrm add 215 http://192.168.105.254:4873

3 安装npm 并设置镜像源

npm install -g cnpm --registry=https://registry.npm.taobao.org

更新npm

npm install -g npm 

清缓存

npm cache clean --force 

###### 切换运行环境

公司： nrm use 215    其他： nrm use taobao

nrm ls 查看当前的镜像源

#### node相关

##### node版本管理

npm init -y  初始化package.json文件

npm info gulp  查看包信息，可以查看历代版本号

npm ls 包名 	查看特定包版本

vue -V | vue --version	组件名+ -V  查看组件版本

vue -h 	查看包/组件内容（帮助）

###### 安装包

 npm i 包名 -g  	（-g表示全局安装某些包，安装在C盘下面）

部署依赖（-S） / 开发依赖（-D）	npm install 包名 --save/--save-dev

###### 删除包

npm uninstall 包名 --save/--save-dev或者npm remove 包名 -save/--save-dev

###### 监听数据 （在ip为192.168.105.61的服务器监听db.json文件的数据）

 json-server --watch db.json --port 3301 -H 192.168.105.21

npm cache clean --force 	清除缓存（慎用！！！）

## 创建自己的网站

title:Kin‘s Blog	文件名

theme:landscape 	换主题名

#### 操作流程

1 npm i -g hexo-cli	添加项目脚手架

2 hexo -v 	查看是否有版本号

3 hexo init site  	site是网站名，初始化一个hexo项目

4 npm i / cnpm i 		安装依赖

5 hexo serve 	启动项目

## 发布

1 创建本地仓库：仓库名.github.io

查找公钥：cat ~/.ssh/id_rsa.pub

## vue

安装vue-cli

```c++
npm uninstall -g vue-cli
```

### vue脚手架注意点

>vue init webpack [项目名称]     创建vue项目（此时只是项目模板）
>
>选择VUE框架的时候 记得不要选 runtime only
>
>ESLINT            初学阶段可不选，但要养成符合代码风格了
>
>tests的测试框架 不要选择
>
>依赖库 要使用NPM命令去下载（最后一个问题选no，自己下载）

![1541504810015](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1541504810015.png)

在文件夹打开命令窗口 输入  cnpm install      ----->   后续的包根据需求添加

下载完成后输入 npm run dev

最后根据需求在src文件夹中的vue文件进行操作

打包上线：npm run build  （主要看package.json文件）

npm info @vue/cli	脚手架文档地址（左上角）和脚手架信息

### 小程序搭建

npm install -g @vue/cli-init		脚手架3兼容脚手架2 ---只需执行一次

vue init mpvue/mpvue-quickstart shop	   初始化项目

根据提示输入命令...

project.config.json配置appid	wx4bc532af0c70563a
