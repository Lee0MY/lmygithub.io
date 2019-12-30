一、你的网站看起来应该是什么样子
    
    1、作出计划
        1、你的网页内容是什么？
        2、你的主体中要展示什么信息？
        3、你的网页长得什么样？
        复杂的项目需要详细的参考手册，内容包括颜色、字体，网页中各项目的间距，合适的编写规范等等。在 Firefox guidelines 中可以查看一个参考手册的例子。 

    2、为你的设计出一个草稿图
        即使在真正的复杂的网站中，设计团队也是首先在纸上画出草稿，然后在图形编辑器中或者使用web技术做出数码模型。

    3、选择你的内容
        在这时候就可以开始将最终呈现在你的网页上的内容放在一起了
        1、文本 （段落与标题）
        2、主题颜色 访问 the color picker 找出喜欢的颜色
        3、图像 访问 Google images 搜索适合的内容
        4、字体 访问Google Fonts 并把列表一直往下翻直到你找到你想要的。

二、文件处理

        一个网站由文本、代码、样式表、媒体内容等等各种文件组成、当你开发网站时，需要以清晰的结构将它们存储于计算机中，保证这些文件之间的联系。使它们看起来正确，然后才能将它们上传至服务器。

    1、网站应该存放于计算机何处
        将所有关联文件存放在一个能反应服务器上文件结构目录的单独文件夹中。
    
    2、一些关于大小写和空格的提示
        很多计算机，特别是web服务器对大小写敏感的。
        浏览器、web服务器、还有编程语言不能一致的处理空格。

    3、网站应该使用的结构
        创建的任何网站项目中最常用的就是一个索引HTML文件和不同的包括图像、样式表和脚本文件的文件夹。
        1、index.html: 通常是主页内容。
        2、images文件夹：这个文件夹包含你网页上所有使用的图像。
        3、styles文件夹：包含了所有你网页添加样式的样式表。
        4、scripts文件夹：包含了所有你网页添加交互功能的JavaScript代码。

三、文件路径
    
    为了关联不同的文件，你需要为它们提供基本路径。

    1、要引用一个位于调用的 HTML 文件同级目录的目标文件，只需直接使用文件名，比如  my-image.jpg 。
    2、要引用一个子目录的文件，在路径前写下目录名并加一个斜杠，比如 subdirectory/my-image.jpg 。
    3、要引用一个位于调用的 HTML 文件的父级目录的目标文件，加上两个点。举个例子，如果 index.html 在  test-site 下面的一个子目录而 my-image.png 在 test-site 目录，你可以在 index.html 里使用 ../my-image.png 引用 my-image.png 。
    
    你可以随意组合以上方法，比如 ../subdirectory/another-subdirectory/my-image.png.

四、HTML基础

    超文本标记语言 (英语：Hypertext Markup Language，简称：HTML ) 是一种用来结构化 Web 网页及其内容的标记语言。网页内容可以是：一组段落、一个重点信息列表、也可以含有图片和数据表。正如标题所示，本文将对 HTML 及其功能做一个基本介绍。

    HTML不是一门编程语言，而是一种用于定义内容结构的标记语言。HTML是由一系列元素（element）组成，这些元素可以用来包围不同部分的内容，使其以某种方式呈现或者工作。
        
        1、开始标签（Opening tag）：包含元素的名称（本例为 p），被大于号、小于号所包围。表示元素从这里开始或者开始起作用 。
        2、结束标签（Closing tag）：与开始标签相似，只是其在元素名之前包含了一个斜杠。这表示着元素的结尾。初学者常常会犯忘记包含结束标签的错误，这可能会产生一些奇怪的结果。
        3、内容（Content）：元素的内容，本例中就是所输入的文本本身。
        4、元素（Element）：开始标签、结束标签与内容相结合，便是一个完整的元素。

    元素也可以有属性（Attribute）：
        <p class="editor-note">我的猫咪脾气爆！</p>
        属性包含了关于元素的一些额外信息，这些信息本身不应显现在内容中。本例中，class 是属性名称，editor-note 是属性的值 。class 属性可为元素提供一个标识名称，以便进一步为元素指定样式或进行其他操作时使用。
        属性应该包含：
            1、在属性与元素名称（或上一个属性，如果有超过一个属性的话）之间的空格符。
            2、属性的名称，并接上一个等号。
            3、由引号所包围的属性值。

    图像<img>

    标记文本
        1、标题
        2、段落
        3、列表<li>
            1、有序列表<ol>
            2、无序列表<ul>
    
    链接<a>

五、CSS基础

        层叠样式表（Cascading Style Sheet，简称：CSS）是为网页添加样式的代码。本节将介绍 CSS 的基础知识，并解答类似问题：怎样将文本设置为黑色或红色？怎样将内容显示在屏幕的特定位置？怎样用背景图片或颜色来装饰网页？

    CSS究竟什么来头？
        和 HTML 类似，CSS 也不是真正的编程语言，甚至不是标记语言。它是一门样式表语言，这也就是说人们可以用它来选择性地为 HTML 元素添加样式。举例来说，要选择一个 HTML 页面里所有的段落元素，然后将其中的文本改成红色，可以这样写 CSS：
        p{
            color: red;
        }
    
    CSS规则集详解：
        选择器（Selector）
            HTML 元素的名称位于规则集开始。它选择了一个或多个需要添加样式的元素（在这个例子中就是 p 元素）。要给不同元素添加样式只需要更改选择器就行了。
        声明（Declaration）
            一个单独的规则。如 color: red; 用来指定添加样式元素的属性。
        属性（Properties）
            改变 HTML 元素样式的途径。（本例中 color 就是 <p> 元素的属性。）CSS 编写人员决定修改哪个属性以改变规则。
        属性的值（Property value）
            在属性的右边，冒号后面即属性的值，它从指定属性的众多外观中选择一个值（我们除了 red 之外还有很多属性值可以用于 color ）。
        注意其他重要的语法：
            每个规则集（除了选择器的部分）都应该包含在成对的大括号里（{}）。
            在每个声明里要用冒号（:）将属性与属性值分隔开。
            在每个规则集里要用分号（;）将各个声明分隔开。

        多元素选择：
            也可以选择多种类型的元素并为它们添加一组相同的样式。将不同的选择器用逗号分开。
        
        不同类型的选择器：
            选择器有许多不同的类型。上面只介绍了元素选择器，用来选择 HTML 文档中给定的元素。但是选择操作可以更加具体。
                      
|  选择器名称 | 选择的内容  | 示例  |
|  ----    | ----  | ----  |
| 元素选择器  | 所有指定类型的HTML元素 | p选择< p > |
|ID选择器| 具有特定ID的元素（单一HTML页面中，每个ID只对应一个元素） | #my-id 选择< p id="my-id"> 或 < a id="my-id"|
| 类选择器  | 具有特定类的元素(单一页面中，一个类可以有多个实例)| .myclass |
| 属性选择器  | 拥有特定属性的元素 | < img[src]> 而不是 < img >|
| 伪(Pseudo)类选择器 | 特定状态下的特定元素(比如鼠标指针悬停) | a:hover 仅在鼠标指针悬停在链接上时选择< a > |


    字体和文本

    一切皆盒子：
        编写 CSS 时你会发现，你的工作好像是围绕着一个一个盒子展开的——设置尺寸、颜色、位置，等等。页面里大部分 HTML 元素都可以被看作若干层叠的盒子。
        并不意外，CSS 布局主要就是基于盒模型的。每个占据页面空间的块都有这样的属性：
            padding：即内边距，围绕着内容（比如段落）的空间。
            border：即边框，紧接着内边距的线。
            margin：即外边距，围绕元素外部的空间。
        这里还使用了：
            width ：元素的宽度
            background-color ：元素内容和内边距底下的颜色
            color ：元素内容（通常是文本）的颜色
            text-shadow ：为元素内的文本设置阴影
            display ：设置元素的显示模式（暂略）

JavaScript基础：

        JavaScript 是一门编程语言，可为网站添加交互功能。（例如：游戏、动态样式，动画，以及在按下按钮或收到表单数据时做出的响应，等）。本文介绍了 JavaScript 的精彩之处和主要用途。

    JavaScript到底是什么？
        JavaScript（缩写：JS）是一门完备的 动态编程语言。当应用于 HTML 文档时，可为网站提供动态交互特性。由布兰登·艾克（ Brendan Eich，Mozilla 项目、Mozilla 基金会和 Mozilla 公司的联合创始人）发明。

        JavaScript 的应用场合极其广泛。简单到幻灯片、照片库、浮动布局和响应按钮点击。复杂到游戏、2D 和 3D 动画、大型数据库驱动程序，等等。

        JavaScript 相当简洁，却非常灵活。开发者们基于 JavaScript 核心编写了大量实用工具，可以使 开发工作事半功倍。其中包括：

            1、浏览器应用程序接口（API）—— 浏览器内置的 API 提供了丰富的功能，比如：动态创建 HTML 和设置 CSS 样式、从用户的摄像头采集处理视频流、生成3D 图像与音频样本，等等。
            2、第三方 API —— 让开发者可以在自己的站点中整合其它内容提供者（Twitter、Facebook 等）提供的功能。
            3、第三方框架和库 —— 用来快速构建网站和应用。
        
        下面对语言核心做一个不完整介绍，期间还可以接触到一些浏览器 API 特性。

        注意：将 < script >放在HTML文件的底部附近的原因是浏览器会按照代码在文件中的顺序加载HTML。如果先加载的JavaScript期望修改其下方的HTML，那么它可能由于HTML尚未被加载而失效。因此，将JavaScript代码放在HTML页面的底部附近通常是最好的策略。
    
    JavaScript快速入门：
        变量： 
            变量 是存储值的容器。要声明一个变量，先输入关键字 let 或 var，然后输入合适的名称。
            变量有许多不同的数据类型：

| 变量 | 解释 | 示例 |
| --- | ---| --- |
| String | 字符串(一串文本)。字符串的值必须将用引号（单双均可，必须成对）括起来。| let myVariable = '李雷'; |
| Number | 数字。无需引号。 | let myVariable = 10;|
| Boolean | 布尔值(真/假)。true/false是JS里的特殊关键字，无需引号 | let myVariable = true; |
| Arrary | 数组，用于在单一引用中存储多个值的结构。 | let myVariable  = [1, '李雷', '韩梅梅', 10]; |
| Object | 对象，JavaScript里一切皆对象，一切皆可储存在变量里。这一点要牢记于心。 | let myVariable = document.querySelector('h1');以及上面的所有示例都是对象。 |

        那么变量有什么用呢？我们说，编程时它们无所不在。如果值无法改变，那么就无法做任何动态的工作，比如发送个性化的问候，或是改变在图片库当前展示的图片。

    注释：
        // 与 /* ... */
    
    运算符：
        运算符 是一类数学符号，可以根据两个值（或变量）产生结果。
    
    条件语句：
        条件语句是一种代码结构，用来测试表达式的真假，并根据测试结果运行不同的代码。一个常用的条件语句是 if ... else。下面是一个示例：
    
    函数（Function）：
        函数 用来封装可复用的功能。如果没有函数，一段特定的操作过程用几次就要重复写几次，而使用函数则只需写下函数名和一些简短的信息。之前已经涉及过一些函数，比如：

            let myVariable = document.querySelector('h1');
            alert('hello!');
            document.querySelector 和 alert 是浏览器内置的函数，随时可用。

        如果代码中有一个类似变量名后加小括号 () 的东西，很可能就是一个函数。函数通常包括参数，参数中保存着一些必要的数据。它们位于括号内部，多个参数之间用逗号分开。
        比如， alert() 函数在浏览器窗口内弹出一个警告框，还应为其提供一个字符串参数，以告诉它警告框里要显示的内容。
        好消息是：人人都能定义自己的函数。        
    
    事件：  
        事件能为网页添加真实的交互能力。它可以捕捉浏览器操作并运行一些代码做为响应。最简单的事件是 点击事件，鼠标的点击操作会触发该事件。 可尝试将下面的代码输入到控制台，然后点击页面的任意位置：
            document.querySelector('html').onclick = function() {
                alert('别戳我，我怕疼。');          
            }
            将事件与元素绑定有许多方法。在这里选用了 <html> 元素，把一个匿名函数（就是没有命名的函数，这里的匿名函数包含单击鼠标时要运行的代码）赋值给了 html 的 onclick 属性。
        

学习HTML：指南与教程

    为了创建网站，你应该了解 HTML —— 用于定义一个网页结构的基本技术。HTML 用于表示你的网页内容是应该被理解为段落、列表、头部、链接、图像、多媒体播放器、表单或是其他众多可用的元素之一亦或是你定义的新元素。

学习路径

    理论上来说你的学习旅途应该从学 HTML 开始。先阅读 HTML 介绍。此后你便能够继续学习更多高级的主题，例如：

        CSS ，以及如何用它装饰 HTML (例如：更改你的文本字号和字体，添加边框和阴影，将你的页面设计成多栏布局，添加动画和其他视觉效果。)
        JavaScript ，以及如何用它为网页添加动态功能(例如：找到你的地址并且在地图上绘制出来，触发按钮时让 UI 元素显示或消失，将用户的数据本地储存在他们的电脑里，以及更多。)
    
    在开始这个主题的学习之前，你至少要基本熟悉使用电脑和被动地使用网络（即单纯地查看内容）。你应该设置好一个基础的工作环境，详细参照安装基础软件，并且理解如何新建和管理文件，详细参照文件处理——这两者都在 Web 入门的完全新手模块里。

    在尝试学习这个主题之前，建议先完成 Web 入门，不过这并不是绝对必要的。HTML 基础 里大多数的文章在 HTML 介绍 模块里也有，虽然有很多额外的细节。

模块
    
    这个主题由包含以下模块，建议按顺序进行学习。很显然，你要从第一个开始。

    HTML 介绍
        这一模块将为你铺路，帮你习惯一些重要的概念和语法，着眼于如何对文本应用 HTML ，如何创造超链接，以及如何使用 HTML 构造一个网页。

    多媒体与嵌入
        这个模块带你探索如何使用 HTML 在你的网页里如何包含多媒体信息，包含如何用各种方法包含图片，以及如何嵌入视频、音频，甚至是嵌入其他完
    
    HTML 表格
        在网页上用易于理解和可访问（accessible）的方式来表示表格数据是一项挑战。这个模块包括了基本的表格标记，还有更多复杂的特性，例如实现标题和总结。

    HTML 表单
        表单是网页中十分重要的一部分——它们会提供网站交互需要的很多功能（例如：注册，登录，发送反馈，购物等等）。这个模块将带你开始创建表单的客户端部分。


HTML介绍：

    就其核心而言， HTML 是一种相当简单的、由不同元素组成的标记语言，它可以应用于文本片段，使文本在文档中具有不同的含义（它是一个段落吗？它是一个项目列表吗？它是一个表格吗？），将文档结构化为逻辑块（文档是否有头部？有三列内容？有一个导航菜单？），并且可以将图片，影像等内容嵌入到页面中。本模块将介绍前两个，并且介绍一些理解HTML所需的基本概念和语法。

    块级元素和内联元素
        在HTML中有两种你需要知道的重要元素类别块级元素和内联元素：
            ·块级元素在页面以块的形式展现 —— 相对于前面的内容它会出现在新的一行，其后的内容会被挤到下一行展现。块级元素通常用于展示页面上结构化的内容，例如段落、列表、导航菜单、页脚等等。一个以block形式展现的块级元素不会被嵌套进内联元素中，但可以嵌套在其他块级元素中。
            ·内联元素通常出现在块级元素中并环绕文档内容的一小部分，而不是一整个段落或者一组内容。内联元素不会导致文本换行：它通常出现在一堆文字之间例如超链接元素<a>或者强调元素<em>和<strong>

    空元素
        不是所有元素都拥有开始标签，内容，结束标签。一些元素只有一个标签，通常用来在此元素所在位置插入/嵌入一些东西。例如：元素<img>是用来在元素<img>所在位置插入一张指定的图片。

    属性
        元素也可以拥有属性，如下：
        <p class="editor-note">我的猫咪脾气很爆:)</p>
        属性包含元素的额外信息，这些信息不会出现在实际的内容中。在上述例子中，这个class属性给元素赋了一个识别的名字（id），这个名字此后可以被用来识别此元素的样式信息和其他信息。

        一个属性必须包含如下内容：
            1、一个空格，在属性和元素名称之间。(如果已经有一个或多个属性，就与前一个属性之间有一个空格。)
            2、属性名称，后面跟着一个等于号。
            3、一个属性值，由一对引号“ ”引起来。

    布尔属性
        有时你会看到没有值的属性，它是合法的。这些属性被称为布尔属性，他们只能有跟它的属性名一样的属性值。例如disabled 属性，他们可以标记表单输入使之变为不可用(变灰色)，此时用户不能向他们输入任何数据。
            <input type="text" disabled="disabled">
        方便起见，我们完全可以将其写成以下形式(我们还提供了一个非禁止输入的表单元素供您参考，以作为对比)：
            <!-- 使用disabled属性来防止终端用户输入文本到输入框中 -->
            <input type="text" disabled>

            <!-- 下面这个输入框没有disabled属性，所以用户可以向其中输入 -->
            <input type="text">

    HTML中的空白
        代码中包含了很多的空格——这是没有必要的；下面的两个代码片段是等价的：
            <p>狗 狗 很 呆 萌。</p>

            <p>狗 狗        很
                                呆 萌。</p>
        
        无论你用了多少空白(包括空白字符，包括换行), 当渲染这些代码的时候，HTML解释器会将连续出现的空白字符减少为一个单独的空格符。那么为什么我们会使用那么多的空白呢? 答案就是为了可读性 —— 如果你的代码被很好地进行格式化，那么就很容易理解你的代码是怎么回事, 反之就只有聚做一团的混乱. 在我们的HTML代码中，我们让每一个嵌套的元素以两个空格缩进。 你使用什么风格来格式化你的代码取决于你 (比如所对于每层缩进使用多少个空格),但是你应该坚持使用某种风格。

    HTML注释
        如同大部分的编程语言一样，在HTML中有一种可用的机制来在代码中书写注释 —— 注释是被浏览器忽略的，而且是对用户不可见的，它们的目的是允许你描述你的代码是如何工作的和不同部分的代码做了什么等等。 如果你在半年后重新返回你的代码库，而且不能记起你所做的事情 —— 或者当你处理别人的代码的时候， 那么注释是很有用的.

        为了将一段HTML中的内容置为注释，你需要将其用特殊的记号<!--和-->包括起来， 比如：
            <p>我在注释外！</p>

            <!-- <p>我在注释内！</p> -->        

    总结    
        你已经来到了这篇文章的结尾 —— 希望你享受你的基础的HTML学习的旅程。 在这里你应该可以理解HTML语言的全貌， 它在基础的级别是如何工作，而且可以使用一些元素和属性。 在这个模块的后续文章中，我们会深入一些你已经见过的东西的细节，并且介绍一些新的HTML的特性。未完待续！


    <head>标签里有什么? Metadata-HTML中的元数据
        在页面加载完成的时候，标签head里的内容，是不会在页面中显示出来的。它包含了像页面的<title>(标题) ,CSS(如果你选择用 CSS 来为 HTML 内容添加样式)，指向自定义图标的链接和其他的元数据(描述HTML的数据，比如，作者，和描述文档的重要关键词)。本文将涵盖上述内容并拓展，为您对标记的使用打下一个良好的基础。

    
        在HTML中应用CSS和JavaScript
            如今，几乎你使用的所有网站都会使用 CSS 让网页更加炫酷，使用JavaScript让网页有交互功能，比如视频播放器，地图，游戏以及更多功能。这些应用在网页中很常见，它们分别使用 <link>元素以及 <script> 元素。
            
                ·<link> 元素经常位于文档的头部。这个link元素有2个属性，rel="stylesheet"表明这是文档的样式表，而 href包含了样式表文件的路径

                ·<script> 部分没必要非要放在文档头部；实际上，把它放在文档的尾部（在 </body>标签之前）是一个更好的选择，这样可以确保在加载脚本之前浏览器已经解析了HTML内容（如果脚本加载某个不存在的元素，浏览器会报错）。
    
    HTML 文字处理基础：
        HTML的主要工作是编辑文本结构和文本内容（也称为语义semantics），以便浏览器能正确的显示。 本文介绍了 HTML的使用方法：在一段文本中添加标题和段落，强调语句，创建列表等等。

        基础: 标题和段落
            大部分的文本结构由标题和段落组成。 不管是小说、报刊、教科书还是杂志等。
            内容结构化会使读者的阅读体验更轻松，更愉快。
        
        列表 Lists:
            现在，让我们注意一下列表。列表在生活中随处可见——从你的购物清单到你的回家路线方案列表，再到你遵从的教程说明列表。在网络上，列表也到处存在，我们需要学习三种不同类型的列表。

            无序 Unordered: 无序的列表被用来标记每个项目
            有序 Ordered: 有序的列表是根据项目的顺序列出来的
            嵌套列表 Nesting lists: 将一个列表嵌入到另一个列表是完全可以的。 你可能想让一些子项目列在首项目之下。

        重点强调:
            在人类语言中，为了突出一句话的意思，我们通常强调某些词，并且我们通常想要标记某些词作为重点或者在某种程度上的不同。 HTML 提供了许多语义化的元素，并且允许我们通过这些元素的意义标记正文内容，在这个章节中，我们将看到最常见的一小部分元素。

    建立超链接
        超链接非常重要 ——它们使互联网成为一个互联的网络。本文介绍了创建链接所需的语法，并且讨论了链接的最佳实现方法。

        什么是超链接?
            超链接是互联网提供的最令人兴奋的创新之一，它们从一开始就一直是互联网的一个特性，使互联网成为互联的网络。超链接使我们能够将我们的文档链接到任何其他文档（或其他资源），也可以链接到文档的指定部分，我们可以在一个简单的网址上提供应用程序（与必须先安装的本地应用程序或其他东西相比）。几乎任何网络内容都可以转换为链接，点击（或激活）超链接将使网络浏览器转到另一个网址（URL）。

        链接的解析
            通过将文本（或其他内容，见块级链接)转换为<a>元素内的链接来创建基本链接， 给它一个href属性（也称为目标），它将包含您希望链接指向的网址。
        
            使用title属性添加支持信息
                您可能要添加到您的链接的另一个属性是标题；这旨在包含关于链接的补充有用信息，例如页面包含什么样的信息或需要注意的事情。
            块级链接
                如上所述，你可以将一些内容转换为链接，甚至是块级元素。例如你想要将一个图像转换为链接，你只需把图像元素放到<a></a>标签中间。
                    <a href="https://www.mozilla.org/en-US/">
                        <img src="mozilla-image.png" alt="mozilla logo that links to the mozilla homepage">
                    </a>
        统一资源定位符(URL)与路径(path)快速入门
            统一资源定位符（英文：Uniform Resource Locator，简写：URL）是一个定义了在网络上的位置的一个文本字符串。例如Mozilla的英文主页定位在https://www.mozilla.org/en-US/.
            URL使用路径查找文件。路径指定文件系统中您感兴趣的文件所在的位置。看一下一个简单的目录结构的例子 (源码可查看 creating-hyperlinks.)

        链接最佳实践
            在写链接时有一些最好的做法。现在让我们看看这些。

            用清晰的链接措辞
                把链接放在你的页面上很容易。这还不够。我们需要让所有的读者都可以使用链接，不管他们当前的环境和哪些工具。例如：

                    ·使用屏幕阅读器的用户喜欢从页面上的一个链接跳到另一个链接，并且脱离上下文来阅读链接。
                    ·搜索引擎使用链接文本来索引目标文件，所以在链接文本中包含关键词是一个很好的主意，以有效地描述与之相关的信息。
                    ·读者往往会浏览页面而不是阅读每一个字，他们的眼睛会被页面的特征所吸引，比如链接。他们会找到描述性的链接。
                
                其他提示：

                    ·不要重复URL作为链接文本的一部分 ——URL看起来很丑，当屏幕朗读器一个字母一个字母的读出来的时候听起来就更丑了。
                    ·不要在链接文本中说“链接”或“链接到”——它只是噪音。屏幕阅读器告诉人们有一个链接。可视化用户也会知道有一个链接，因为链接通常是用不同的颜色·设计的，并且存在下划线（这个惯例一般不应该被打破，因为用户习惯了它。）
                    ·保持你的链接标签尽可能短——长链接尤其惹恼屏幕阅读器用户，他们必须听到整件事读出来。

            尽可能使用相对链接：
                从上面的描述中，您可能认为始终使用绝对链接是一个好主意；毕竟，当页面像相对链接那样移动时，它们不会中断。但是，当链接到同一网站的其他位置时，你应该使用相对链接（当链接到另一个网站时，你需要使用绝对链接）：

                    ·首先，检查代码要容易得多——相对URL通常比绝对URL短得多，这使得阅读代码更容易。
                    ·其次，在可能的情况下使用相对URL更有效。当使用绝对URL时，浏览器首先通过DNS（见万维网是如何工作的）查找服务器的真实位置，然后再转到该服务器并查找所请求的文件。另一方面，相对URL，浏览器只在同一服务器上查找被请求的文件。因此，如果你使用绝对URL而不是相对URL，你就会不断地让你的浏览器做额外的工作，这意味着它的效率会降低。
            
            链接到非HTML资源 ——留下清晰的指示：
                当链接到一个需要下载的资源（如PDF或Word文档）或流媒体（如视频或音频）或有另一个潜在的意想不到的效果（打开一个弹出窗口，或加载Flash电影），你应该添加明确的措辞，以减少任何混乱。

                        ·如果你是在低带宽连接，点击一个链接，然后就开始下载大文件。
                        ·如果你没有安装Flash播放器，点击一个链接，然后突然被带到一个需要Flash的页面。

            在下载链接时使用 download 属性：
                当您链接到要下载的资源而不是在浏览器中打开时，您可以使用 download 属性来提供一个默认的保存文件名（译注：此属性仅适用于同源URL）。下面是一个下载链接到Firefox 的 Windows最新版本的示例：

                    <a href="https://download.mozilla.org/?product=firefox-latest-ssl&os=win64&lang=en-US" download="firefox-latest-64bit-installer.exe">
                        Download Latest Firefox for Windows (64-bit) (English, US)
                    </a>
                
            电子邮件链接:
                当点击一个链接或按钮时，打开一个新的电子邮件发送信息而不是连接到一个资源或页面，这种情况是可能做到的。这样做是使用<a>元素和mailto：URL的方案。
                其最基本和最常用的使用形式为一个mailto:link （链接），链接简单说明收件人的电子邮件地址。例如:
                    <a href="mailto:nowhere@mozilla.org">Send email to nowhere</a>
                
                具体细节:
                    除了电子邮件地址，您还可以提供其他信息。事实上，任何标准的邮件头字段可以被添加到你提供的邮件URL。 其中最常用的是主题(subject)、抄送(cc)和主体(body) (这不是一个真正的头字段，但允许您为新邮件指定一个短内容消息)。 每个字段及其值被指定为查询项。

                    下面是一个包含cc、bcc、主题和主体的示例：
                        <a href="mailto:nowhere@mozilla.org?cc=name2@rapidtables.com&bcc=name3@rapidtables.com&subject=The%20subject%20of%20the%20email&body=The%20body%20of%20the%20email">
                        Send mail with cc, bcc, subject and body
                        </a>
                    
                    注意: 每个字段的值必须是URL编码的。 也就是说，不能有非打印字符（不可见字符比如制表符、换行符、分页符）和空格 percent-escaped. 同时注意使用问号（?）来分隔主URL与参数值，以及使用&符来分隔mailto:中的各个参数。 这是标准的URL查询标记方法。阅读 The GET method 以了解哪种URL查询标记方法是更常用的。

    高阶文字排版
        HTML中有许多其他元素可以用于格式化文本，我们没有在HTML 文字处理基础中提到它们。本文中所描述的元素虽然少有人知，但仍然值得去学习（尽管仍然不是完整的列表）。在这里你将了解标记引文、描述列表、计算机代码和其他相关文本、下标和上标、联系信息等。

        描述列表
        引用
            
            块引用:如果一个块级内容（一个段落、多个段落、一个列表等）从其他地方被引用，你应该把它用<blockquote>元素包裹起来表示，并且在cite属性里用URL来指向引用的资源。
            
            行内引用:行内元素用同样的方式工作，除了使用<q>元素。例如，下面的标记包含了从MDN<q>页面的引用：
                <p>The quote element — <code>&lt;q&gt;</code> — is <q cite="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/q">intended for short quotations that don't require paragraph breaks.</q></p>
        引文
            cite属性内容不会被浏览器显示、屏幕阅读器阅读，需使用 JavaScript 或 CSS，浏览器才会显示cite的内容。如果你想要确保引用的来源在页面上是可显示的，更好的方法使用<cite>元素.
        缩略语
        标记联系方式    
        上标和下标
        展示计算机代码
            有大量的HTML元素可以来标记计算机代码：

                ·<code>: 用于标记计算机通用代码。
                ·<pre>: 用于保留空白字符（通常用于代码块）——如果您在文本中使用缩进或多余的空白，浏览器将忽略它，您将不会在呈现的页面上看到它。但是，如果您将文本包含在<pre></pre>标签中，那么空白将会以与你在文本编辑器中看到的相同的方式渲染出来。
                ·<var>: 用于标记具体变量名。
                ·<kbd>: 用于标记输入电脑的键盘（或其他类型）输入。
                ·<samp>: 用于标记计算机程序的输出。
        标记时间和日期
    
    文档与网站架构
        HTML 不仅能够定义网页的单独部分（例如“段落”或“图片”），还可以使用块级元素（例如“标题栏”、“导航菜单”、“主内容列”）来定义网站中的复合区域。本文将探讨如何规划基本的网站结构，并根据规划的结构来编写 HTML。

        文档的基本组成部分
            网页的外观多种多样，但是除了全屏视频或游戏，或艺术作品页面，或只是结构不当的页面以外，都倾向于使用类似的标准组件：

            页眉
                通常横跨于整个页面顶部有一个大标题 和/或 一个标志。 这是网站的主要一般信息，通常存在于所有网页。
            导航栏
                指向网站各个主要区段的超链接。通常用菜单按钮、链接或标签页表示。类似于标题栏，导航栏通常应在所有网页之间保持一致，否则会让用户感到疑惑，甚至无所适从。许多 web 设计人员认为导航栏是标题栏的一部分，而不是独立的组件，但这并非绝对；还有人认为，两者独立可以提供更好的 无障碍访问特性，因为屏幕阅读器可以更清晰地分辨二者。
            主内容
                中心的大部分区域是当前网页大多数的独有内容，例如视频、文章、地图、新闻等。这些内容是网站的一部分，且会因页面而异。
            侧边栏
                一些外围信息、链接、引用、广告等。通常与主内容相关（例如一个新闻页面上，侧边栏可能包含作者信息或相关文章链接），还可能存在其他的重复元素，如辅助导航系统。
            页脚
                横跨页面底部的狭长区域。和标题一样，页脚是放置公共信息（比如版权声明或联系方式）的，一般使用较小字体，且通常为次要内容。 还可以通过提供快速访问链接来进行 SEO。
        
        用于构建内容的 HTML
             一些站点拥有更多列，其中一些远比这复杂，但一切在你掌握之中，通过 CSS 你几乎使用任何元素按自己的思路装饰不同部分，但如前所述，我们要敬畏语义，做到正确选用元素。

            这是因为视觉效果并不是一切。 我们可以修改最重要内容（例如导航菜单和相关链接）的颜色、字体大小来吸引用户的注意，但是这对视障人士是无效的，“粉红色”和“大字体”对他们并不奏效。

            HTML 代码中可根据功能来为区段添加标记。可使用元素来无歧义地表示上文所讲的内容区段，屏幕阅读器等辅助技术可以识别这些元素，并帮助执行“找到主导航 “或”找到主内容“等任务。

            为了实现语义化标记，HTML 提供了明确这些区段的专用标签，例如：
                ·<header>：页眉。
                ·<nav>：导航栏。
                ·<main>：主内容。主内容中还可以有各种子内容区段，可用<article>、<section> 和 <div> 等元素表示。
                ·<aside>：侧边栏，经常嵌套在 <main> 中。
                ·<footer>：页脚。
        
        HTML 布局元素细节
            理解所有 HTML 区段元素具体含义是很有益处的，这一点将随着个人 web 开发经验的逐渐丰富日趋显现。更多细节请查阅 HTML 元素参考。现在，你只需要理解以下主要元素的意义：
                ·<main> 存放每个页面独有的内容。每个页面上只能用一次 <main>，且直接位于 <body> 中。最好不要把它嵌套进其它元素。
                ·<article> 包围的内容即一篇文章，与页面其它部分无关（比如一篇博文）。
                ·<section> 与 <article> 类似，但 <section> 更适用于组织页面使其按功能（比如迷你地图、一组文章标题和摘要）分块。一般的最佳用法是：以 标题 作为开头；也可以把一篇 <article> 分成若干部分并分别置于不同的 <section> 中，也可以把一个区段 <section> 分成若干部分并分别置于不同的 <article> 中，取决于上下文。
                ·<aside> 包含一些间接信息（术语条目、作者简介、相关链接，等等）。
                ·<header> 是简介形式的内容。如果它是 <body> 的子元素，那么就是网站的全局页眉。如果它是 <article> 或·<section> 的子元素，那么它是这些部分特有的页眉（此 <header> 非彼 标题）。
                ·<nav> 包含页面主导航功能。其中不应包含二级链接等内容。
                ·<footer> 包含了页面的页脚部分。
        
        换行与水平分割线 
            有时会用到 <br> 和 <hr> 两个元素。

        规划一个简单的网站
            在完成页面内容的规划后，一般应按部就班地规划整个网站的内容，要可能带给用户最好的体验，需要哪些页面、如何排列组合这些页面、如何互相链接等问题不可忽略。这些工作称为信息架构。在大型网站中，大多数规划工作都可以归结于此，而对于一个只有几个页面的简单网站，规划设计过程可以更简单，更有趣！

                1、时刻记住，大多数（不是全部）页面会使用一些相同的元素，例如导航菜单以及页脚内容。若网站为商业站点，不妨在所有页面的页脚都加上联系方式。请记录这些对所有页面都通用的内容。
                2、接下来，可为页面结构绘制草图（这里与前文那个站点页面的截图类似）。记录每一块的作用。
                3、下面，对于期望添加进站点的所有其它（通用内容以外的）内容展开头脑风暴，直接罗列出来。
                4、下一步，试着对这些内容进行分组，这样可以让你了解哪些内容可以放在同一个页面。这种做法和 卡片分类法 非常相似。
                5、接下来，试着绘制一个站点地图的草图，使用一个气泡代表网站的一个页面，并绘制连线来表示页面间的一般工作流。主页面一般置于中心，且链接到其他大多数页面；小型网站的大多数页面都可以从主页的导航栏中链接跳转。也可记录下内容的显示方式。
    

作业：
- 标记信件
    
    仿照这个https://roy-tian.github.io/mdn-examples/html/letter/    网站，用HTML进行复原。
-



