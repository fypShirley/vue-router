##  vue起步以及目录结构：

### 新建一个vue项目

``` bash
    ctrl+R                        #打开cmd，并enter
    cd ***                        #进入任意文件夹
    npm install --global vue-cli  #全局安装脚手架，
    vue init webpack my-project   #初始化项目，并创建文件夹my-project
    cd my-project                 #进入文件夹my-project  
    npm install                   #安装各种依赖
    npm run dev                   #运行
```
### clone vue项目并执行
``` bash
    打开git Bash
    cd ***           #进入新建好的文件夹
    git clone "..."  #克隆下来
    cd my-project    #进入文件夹
    npm install      #安装各种依赖
    npm run dev      #运行
```

### vue-cli目录结构：

``` bash
- build                            // 项目构建(webpack)相关代码
|   |-- build.js                     // 生产环境构建代码
|   |-- check-version.js             // 检查node、npm等版本
|   |-- dev-client.js                // 热重载相关
|   |-- dev-server.js                // 构建本地服务器
|   |-- utils.js                     // 构建工具相关
|   |-- webpack.base.conf.js         // webpack基础配置
|   |-- webpack.dev.conf.js          // webpack开发环境配置
|   |-- webpack.prod.conf.js         // webpack生产环境配置
|-- config                           // 项目开发环境配置
|   |-- dev.env.js                   // 开发环境变量
|   |-- index.js                     // 项目一些配置变量
|   |-- prod.env.js                  // 生产环境变量
|   |-- test.env.js                  // 测试环境变量
|-- src                              // 源码目录
|   |-- components                     // vue公共组件
|   |-- store                          // vuex的状态管理
|   |-- App.vue                        // 页面入口文件
|   |-- main.js                        // 程序入口文件，加载各种公共组件
|-- static                           // 静态文件，比如一些图片，json数据等
|   |-- data                           // 群聊分析得到的数据用于数据可视化
|-- .babelrc                         // ES6语法编译配置
|-- .editorconfig                    // 定义代码格式
|-- .gitignore                       // git上传需要忽略的文件格式
|-- README.md                        // 项目说明
|-- favicon.ico 
|-- index.html                       // 入口页面
|-- package.json                     // 项目基本信息

```
##  vue-router学习记录：

###  11个内容的演示：

    1：name传值
    2：通过" router-link " 标签中的to传参
    3：通过url传参
    4：重定向
    5：别名（alias）
    6：404页面
    7：多模块多router-view  
    8：路由的过渡动画
    9：钩子函数
    10：编程式导航
    
    在App.vue和index.js中有详细的笔记，对以上内容的演示

### 练习过程中的小笔记：


### 1、多模块多router-view 要写components ，不能再写component

### 2、$route和$router区别：

    $route为当前router跳转对象里面可以获取name、path、query、params等

    $router为VueRouter实例，想要导航到不同URL，则使用$router.push方法
###  3、路由的过渡动画 ：

    1.组件中class命名：

        对于这些在 enter/leave 过渡中切换的类名，v- 是这些类名的前缀。
        使用 <transition name="my"> 可以重置前缀，
        比如 v-enter css中就替换为 my-enter

    2.6个class切换：

        (1)v-enter:定义进入过渡的开始状态，在元素被插入时生效，在下一帧移除

        (2)v-enter-active:定义过渡的状态，在元素整个过渡过程中作用，在元素被插入时生效，在transition/animation完成后移除，这个类可以被用来定义过渡的过程时间，延迟和曲线函数

        (3)v-enter-to:2.1.8版本以上,定义进入过渡的结束状态，在元素被插入一帧后生效，（同时v-enter被删除）,在transition/animation完成后移除

        (4)v-leave:定义离开过渡的开始状态，在离开过渡被处罚时生效，在下一帧移除

        (5)v-leave-active:v-leave-active：定义过渡的状态。在元素整个过渡过程中作用，在离开过渡被触发后立即生效，在 transition/animation 完成之后移除。这个类可以被用来定义过渡的过程时间，延迟和曲线函数。

        (6)v-leave-to:2.1.8版及以上，定义离开过渡的结束状态。在离开过渡被触发一帧后生效 (与此同时 v-leave 被删除)，在 transition/animation 完成之后移除。

    3.过程解读：
                Enter
        ===========================
        Opacity:0  ->  Opacity:1
            ||             ||
        v-enter      v-enter-to     
        ============================
                v-enter-active



                 Leave
        ===========================
        Opacity:0  ->  Opacity:1
            ||             ||
        v-leave      v-leave-to     
        ============================
            v-leave-active

###  最后

    学习视频地址:http://jspang.com/2017/04/13/vue-router/#3

