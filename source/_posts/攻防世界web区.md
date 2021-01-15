---
title: 攻防世界Web区~持续更新中！
tags: CTF
top_img: >-
  https://blog-file-1302856486.cos.ap-guangzhou.myqcloud.com/%60%5DN%40CMBE270%25L%408DO%7D%28_N4B.png
cover: >-
  https://blog-file-1302856486.cos.ap-guangzhou.myqcloud.com/%60%5DN%40CMBE270%25L%408DO%7D%28_N4B.png
abbrlink: 14571
date: 2020-10-06 21:36:20
---

# 新手练习区

- ## view source

  ------

  ![](https://blog-file-1302856486.cos.ap-guangzhou.myqcloud.com/NE96%7DBO%60EX%28%5B%40YGU%25FPT%29I3.png)

  题目提示查看源代码，但无法使用右键打开开发者模式，我们这个时候可以使用f12快捷键打开开发者模式

  <br>

  ![](https://blog-file-1302856486.cos.ap-guangzhou.myqcloud.com/%242%29AW49Y%5BP5%407W%7BM8%7D%25S%40%25R.png)
  
  <br>
  
  flag就藏在源代码里，我们操练起cv大法，然后提交拿分~~~



- ## robots

  ------
  
  ![](https://blog-file-1302856486.cos.ap-guangzhou.myqcloud.com/_6%5D5%7B%7DXV%29FML%60R14%7DQMV9N4.png)
  
  <br>
  
  > Robots协议是Web站点和搜索引擎爬虫交互的一种方式，Robots.txt是存放在站点根目录下的一个纯文本文件。该文件可以指	定搜索引擎爬虫只抓取指定的内容，或者是禁止搜索引擎爬虫抓取网站的部分或全部内容。当一个搜索引擎爬虫访问一个站点时，它会首先检查该站点根目录下是否存在robots.txt，如果存在，搜索引擎爬虫就会按照该文件中的内容来确定访问的范围；如果该文件不存在，那么搜索引擎爬虫就沿着链接抓取。另外，robots.txt必须放置在一个站点的根目录下，而且文件名必须全部小写。
  
  <br>
  
  所以我们在url输入robots.txt
  
  ![](https://blog-file-1302856486.cos.ap-guangzhou.myqcloud.com/H%5BM%5D%25%29J%5BP89Q9BM2U8~11VI.png)
  
  跳转到页面，提示我们还有个f1ag_1s_h3re.php,我们继续访问文件
  
  ![](https://blog-file-1302856486.cos.ap-guangzhou.myqcloud.com/%7BQ%25D9C7260DI5L%5BSMIY8X2G.png)
  
  <br>
  
  即可拿到flag呦~
  
  
  
- ## backup

  ------

  ![](https://blog-file-1302856486.cos.ap-guangzhou.myqcloud.com/4VR%40591%60F0%7D%5BYOQ%40X5%5D%7BYEF.png)

  <br>

  这道题提示我们是文件备份，文件泄露的问题

  常见的备份文件名为：index.php~和index.php.bak

  试着输入了一下，没想到成功下载了文件，打开文件，即可得到flag嗷~
  
  ```html
  <html>
  <head>
      <meta charset="UTF-8">
      <title>备份文件</title>
      <link href="http://libs.baidu.com/bootstrap/3.0.3/css/bootstrap.min.css" rel="stylesheet" />
      <style>
          body{
              margin-left:auto;
              margin-right:auto;
              margin-TOP:200PX;
              width:20em;
          }
      </style>
  </head>
  <body>
  <h3>你知道index.php的备份文件名吗？</h3>
  <?php
  $flag="Cyberpeace{855A1C4B3401294CB6604CCC98BDE334}"
  ?>
  </body>
  </html>
  ```
  
  <br>
  
  本题也可使用目录遍历搜索
  
  ![](https://blog-file-1302856486.cos.ap-guangzhou.myqcloud.com/Y2LMCC%25TTM%5D%7BJ474Q3N42%5BD.png)
  
  感觉自己是不是有点厉害了现在,操练起兵器，我们继续闯关，冲冲冲~
  
  
  
- ## cookie

  ------

  此关提示我们信息在cookie中

  ![](https://blog-file-1302856486.cos.ap-guangzhou.myqcloud.com/U1SU0%29T8J378V4ULADE%5DAL5.png)

  <br>

  去查看文件的请求头和响应头信息

  ![](https://blog-file-1302856486.cos.ap-guangzhou.myqcloud.com/%2450CQV6YEE5P%40%28SH%29_GUBCQ.png)

  <br>

  提示我们去查看cookie.php，我们去访问这个文件，让我们继续看文件响应头

  ![](https://blog-file-1302856486.cos.ap-guangzhou.myqcloud.com/N%28OZ%25%7D57V5%7BB_9J%7DJ%28N5K%28J.png)

  <br>

  打开文件查看响应头，gogogo！

  ![](https://blog-file-1302856486.cos.ap-guangzhou.myqcloud.com/9W43RJ_R%25UC%7D3W%408%28%24DROGI.png)

  <br>

  flag就出现在了我们面前，金币++，开心~
  
  
  
- ## disabled_button

  ------

  题目提示页面按钮不能打开，点击了发现确实打不开

  ![](https://blog-file-1302856486.cos.ap-guangzhou.myqcloud.com/%E6%94%BB%E9%98%B2%E4%B8%96%E7%95%8Cweb/disabled_button/0QDTUEI%5DW3HBBG_VJKPY%60~S.png)

  ![](https://blog-file-1302856486.cos.ap-guangzhou.myqcloud.com/%E6%94%BB%E9%98%B2%E4%B8%96%E7%95%8Cweb/disabled_button/%5D608EGFTAJL%29U%24AOJALE4%5BX.png)

  <br>

  这时候运用到我们html的知识，前台万物可更改！我们打开源码修改属性，把disabled去掉，按钮即可打开

  ![](https://blog-file-1302856486.cos.ap-guangzhou.myqcloud.com/%E6%94%BB%E9%98%B2%E4%B8%96%E7%95%8Cweb/disabled_button/2F%40%40E_S6P5JDKK%7B~0%60%609BL1.png)

  <br>

  点击后，flag就出现啦~

  ![](https://blog-file-1302856486.cos.ap-guangzhou.myqcloud.com/%E6%94%BB%E9%98%B2%E4%B8%96%E7%95%8Cweb/disabled_button/17LAH%25%7B9QR%60%7DB%24F%7BSGZ5BMD.png)

  

- ## weak_auth

  ------

  本题提示为弱密码爆破

  ![](https://blog-file-1302856486.cos.ap-guangzhou.myqcloud.com/%E6%94%BB%E9%98%B2%E4%B8%96%E7%95%8Cweb/weak_auth/7O1MJB2%607W_M~F%60QVKQ4SLL5.png)

  ![](https://blog-file-1302856486.cos.ap-guangzhou.myqcloud.com/%E6%94%BB%E9%98%B2%E4%B8%96%E7%95%8Cweb/weak_auth/YU%60V%60%7B9Y16XM%5BY1Y%28%5B4FZF7.png)

  <br>

  我们尝试抓包查看源代码，发现提示我们用户名为admin，使用密码爆破

  ![](https://blog-file-1302856486.cos.ap-guangzhou.myqcloud.com/%E6%94%BB%E9%98%B2%E4%B8%96%E7%95%8Cweb/weak_auth/%24R_D76HB0S%409GL%24RMWZ50FM.png)

  <br>

  我们使用字典配合burpsuite进行一个爆破，最后得到结果~，在响应包里拿到flag

  ![](https://blog-file-1302856486.cos.ap-guangzhou.myqcloud.com/%E6%94%BB%E9%98%B2%E4%B8%96%E7%95%8Cweb/weak_auth/VD2TF%7BN%5DP%60F47D%40%7DZI9%60EG8.png)

  ![](https://blog-file-1302856486.cos.ap-guangzhou.myqcloud.com/%E6%94%BB%E9%98%B2%E4%B8%96%E7%95%8Cweb/weak_auth/NA9%25KLH%29H95R14I0E%28%243X46.png)
  
  
  
- ## command_execution

  ------

  本题给了我们一个ping页面，我们尝试ping了本机地址之后回显信息

  ![](https://blog-file-1302856486.cos.ap-guangzhou.myqcloud.com/%E6%94%BB%E9%98%B2%E4%B8%96%E7%95%8Cweb/command_execution/RY~GME%5DY0S%7BCWA11S%28%24KUYE.png)

  ![](https://blog-file-1302856486.cos.ap-guangzhou.myqcloud.com/%E6%94%BB%E9%98%B2%E4%B8%96%E7%95%8Cweb/command_execution/881NMO91RVEV%29%7BO4%5D%29L%7DKTC.png)

  <br>

  页面回显ping -c 3 127.0.0.1 ，这里提示我们这是linux系统，ping三次。我们尝试使用linux命令执行，同时执行多条命令，发现有回显

  ![](https://blog-file-1302856486.cos.ap-guangzhou.myqcloud.com/%E6%94%BB%E9%98%B2%E4%B8%96%E7%95%8Cweb/command_execution/%7BPQ%7DQ33TMU1UC%297_%25UL3%5BQC%20%281%29.png)

  <br>

  于是我们尝试寻找带有flag的文件~，可以用；多条执行也可以使用|只执行后面的语句

  ![](https://blog-file-1302856486.cos.ap-guangzhou.myqcloud.com/%E6%94%BB%E9%98%B2%E4%B8%96%E7%95%8Cweb/command_execution/F8F%60R%7DHS%5B_J8UDX%28IQE0%5B26.png)

  <br>

  发现flag.txt可疑文件，我们去查看一下

  ![](https://blog-file-1302856486.cos.ap-guangzhou.myqcloud.com/%E6%94%BB%E9%98%B2%E4%B8%96%E7%95%8Cweb/command_execution/_M4D~KMQ~K%7D%7BKET0TJSEQ31.png)

  轻轻松松获得flag咯~

  <br>

  **扩充知识：**

  | **常见连接符** | **举例** | **效果**                    |
| -------------- | -------- | --------------------------- |
  | ;              | A;B      | 先执行A，再执行B            |
  | &              | A&B      | 简单拼接，A B之间无制约关系 |
  | \|             | A\|B     | 显示B的执行结果             |
  | &&             | A&&B     | A执行成功，然后才会执行B    |
  | \|\|           | A\|\|B   | A执行失败，然后才会执行B    |
  
  

- ## simple_php

  ------

  本题需要我们掌握php弱类型比较，打开环境给出我们一些源码

  ![](https://blog-file-1302856486.cos.ap-guangzhou.myqcloud.com/%E6%94%BB%E9%98%B2%E4%B8%96%E7%95%8Cweb/simple_php/W%7DIBQVLJ20X%7BPN4H%5BOWVT5S.png)

  ![](https://blog-file-1302856486.cos.ap-guangzhou.myqcloud.com/%E6%94%BB%E9%98%B2%E4%B8%96%E7%95%8Cweb/simple_php/XYN%25%7B%60Q%5BS31GMA4%29B41AA%256.png)

  首先我们分析一下源代码：

  1）有include函数，包含了config.php文件

  2）url需要接收参数a和参数b

  3）如果$a=0或者$a为真,输出$flag1

  4）如果b是数字或者字符串，如果$b>1234就输出$flag2

  <br>

  总结，我们构造a参数得等于0且不为假，构造b参数>1234且不能为数字和字符串。

  粗略来看，这不是难为我们吗！!不过兄弟莫慌，这个时候我们想起前面所说的php弱类型比较，那这弱类型到底指的什么呢？下面我们一起学习一下~

  ```
  掌握php弱类型比较
  php中其中两种比较符号:
  ==：先将字符串类型转化成相同，再比较
  ===：先判断两种字符串的类型是否相等，再比较
  字符串和数字比较使用==时,字符串会先转换为数字类型再比较
  var_dump('a' == 0);//true，此时a字符串类型转化成数字，因为a字符串开头中没有找到数字，所以转换为0
  var_dump('123a' == 123);//true，这里'123a'会被转换为123
  
  var_dump('a123' == 123);//false，因为php中有这样一个规定：字符串的开始部分决定了它的值，如果该字符串以合法的数字开始，则使用该数字至和它连续的最后一个数字结束，否则其比较时整体值为0。
  举例：
  var_dump('123a1' == 123);//true
  var_dump('1233a' == 123);//false
  
  ```

  看完之后，是不是突然恍然大悟！所以我们尝试构造**a=0a&b=1234a**输入

  ![](https://blog-file-1302856486.cos.ap-guangzhou.myqcloud.com/%E6%94%BB%E9%98%B2%E4%B8%96%E7%95%8Cweb/simple_php/DE5%7D3O9%5B%40%40BTDQN%25O%5BSF%7BXU.png)

  <br>

  如此，取flag如探囊取物~
  
  
  
- ## get_post

  ------

  这道题很简单，就是让我们发送get请求和post请求。

  ![](https://blog-file-1302856486.cos.ap-guangzhou.myqcloud.com/%E6%94%BB%E9%98%B2%E4%B8%96%E7%95%8Cweb/get_post/M%5DGS%5BG%60AJ%7D6A_5J%29L%25LKYZR.png)

  ![](https://blog-file-1302856486.cos.ap-guangzhou.myqcloud.com/%E6%94%BB%E9%98%B2%E4%B8%96%E7%95%8Cweb/get_post/%40%29FMD3S1_I~%25QUZ~%40AK6%5B%7DI.png)

  <br>

  首先提示我们需要对他发送一个get请求，我们构造a=1进行发送get请求，然后返回结果

  ![](https://blog-file-1302856486.cos.ap-guangzhou.myqcloud.com/%E6%94%BB%E9%98%B2%E4%B8%96%E7%95%8Cweb/get_post/KHYZ%25IH3%28%600JE%40WMM%28PIVCU.png)

  <br>

  我们再用curl发送post请求，也可使用其他工具，这里使用windows自带的curl。不懂curl如何使用的兄弟可移步到我的另一篇博文

  ![](https://blog-file-1302856486.cos.ap-guangzhou.myqcloud.com/%E6%94%BB%E9%98%B2%E4%B8%96%E7%95%8Cweb/get_post/H6LU%60WBN%5DX2ZGGFUCM3~60V.png)

  <br>

  返回的结果中含有flag，ok，此题通关！

  
  
- ## xff_referer

  ------

  题目告诉我们是xff_referer，猜测是与xff和referer相关，打开环境看看

  ![](https://blog-file-1302856486.cos.ap-guangzhou.myqcloud.com/%E6%94%BB%E9%98%B2%E4%B8%96%E7%95%8Cweb/xff_referer/3N%5DA%7D%5DDIH~K4SN8%5B%299CDX0Y.png)

  ![](https://blog-file-1302856486.cos.ap-guangzhou.myqcloud.com/%E6%94%BB%E9%98%B2%E4%B8%96%E7%95%8Cweb/xff_referer/A_0D%40SG%28AGK0VCPC1%401N~UE.png)

  <br>

  我们先学习一下xff和referer的知识：

  （1）**X-Forwarded-For:**  简称XFF头，它代表客户端，也就是HTTP的请求端真实的IP，只有在通过了HTTP 代理或者负载均衡服务器时才会添加该项。xff 是http的拓展头部，作用是使Web服务器获取访问用户的IP真实地址（可伪造）。由于很多用户通过代理服务器进行访问，服务器只能获取代理服务器的IP地址，而xff的作用在于记录用户的真实IP，以及代理服务器的IP。格式为：X-Forwarded-For: 本机IP, 代理1IP, 代理2IP, 代理2IP

  （2）**HTTP Referer:**  是header的一部分，当浏览器向web服务器发送请求的时候，一般会带上Referer，告诉服务器我是*从哪个页面链接过来*的，服务器基此可以获得一些信息用于处理。referer 是http的拓展头部，作用是记录当前请求页面的来源页面的地址。服务器使用referer确认访问来源，如果referer内容不符合要求，服务器可以拦截或者重定向请求。

  <br>

  我们先设置xff为123.123.123.123发送请求包，查看包信息

  ![](https://blog-file-1302856486.cos.ap-guangzhou.myqcloud.com/%E6%94%BB%E9%98%B2%E4%B8%96%E7%95%8Cweb/xff_referer/PQ7F0J%5BF%5BQ1IFZ%605C%29_4PV2.png)

  <br>

  提示我们地址必须来自https://www.google.com

  所以我们加上referer信息

  ![](https://blog-file-1302856486.cos.ap-guangzhou.myqcloud.com/%E6%94%BB%E9%98%B2%E4%B8%96%E7%95%8Cweb/xff_referer/6TO%40YJZ5U~~H1O_Z3%40%24X%7DP5.png)

  发现响应包里含有flag，成功！这道题还可以使用我们强大的curl命令行工具

  ![](https://blog-file-1302856486.cos.ap-guangzhou.myqcloud.com/%E6%94%BB%E9%98%B2%E4%B8%96%E7%95%8Cweb/xff_referer/M9MHWII6E%2841I0Y8Z%7BB%7DQPW.png)
  
- ## webshell

  ------

  这道题考的是webshell，诶，你不知道什么是webshell吗？webshell就是web下的shell ，也就是web网站的后门。

  ![](https://blog-file-1302856486.cos.ap-guangzhou.myqcloud.com/%E6%94%BB%E9%98%B2%E4%B8%96%E7%95%8Cweb/webshell/%5D3B~6AJ6BIRTDI62TL%5BH9PY.png)

  ![](https://blog-file-1302856486.cos.ap-guangzhou.myqcloud.com/%E6%94%BB%E9%98%B2%E4%B8%96%E7%95%8Cweb/webshell/FW8AU7XJALI0HR1%29RZ4%7B%7BQW.png)

  页面已经给出我们shell，也是常用的php一句话木马

  同时常用的一句话木马有：

  ```
  php的一句话木马： <?php @eval($_POST['pass']);?>
  asp的一句话是：   <%eval request ("pass")%>
  aspx的一句话是：  <%@ Page Language="Jscript"%> <%eval(Request.Item["pass"],"unsafe");%>
  ```

  给出连接密码webshell，那我们直接蚁剑连接就好

  ![](https://blog-file-1302856486.cos.ap-guangzhou.myqcloud.com/%E6%94%BB%E9%98%B2%E4%B8%96%E7%95%8Cweb/webshell/Z5%25II2N4%254R~%29R8DY~%405AN4.png)

  然后连接到后台，在里面找到flag文件，打开获取flag即可~

  ![](https://blog-file-1302856486.cos.ap-guangzhou.myqcloud.com/%E6%94%BB%E9%98%B2%E4%B8%96%E7%95%8Cweb/webshell/%5DS%244%25EXCQ1PS03D%5B%7DCP5%7DDL.png)

  ![](https://blog-file-1302856486.cos.ap-guangzhou.myqcloud.com/%E6%94%BB%E9%98%B2%E4%B8%96%E7%95%8Cweb/webshell/Z5%25II2N4%254R~%29R8DY~%405AN4.png)

  
  
- ## simple_js

  ------

  打开题目，题目名字告诉我们和js有关，这让我着实慌了一会，因为我对js没有怎么去学过。

  ![](https://blog-file-1302856486.cos.ap-guangzhou.myqcloud.com/%E6%94%BB%E9%98%B2%E4%B8%96%E7%95%8Cweb/simple_js/%28A4HX0%24I98LMS1_M%60%5BD2OEA.png)

  打开页面后弹出一个输入密码的框，乱输一阵，哈哈嗝。

  ![](https://blog-file-1302856486.cos.ap-guangzhou.myqcloud.com/%E6%94%BB%E9%98%B2%E4%B8%96%E7%95%8Cweb/simple_js/ZX%40BKAX1E%7DD3IZWJ%25%25DQ4IM.png)

  返回一段英文，显示告诉我们这是假密码，我们去找一下有没有东西，诶，发现了！我们尝试审计一下代码

  ![](https://blog-file-1302856486.cos.ap-guangzhou.myqcloud.com/%E6%94%BB%E9%98%B2%E4%B8%96%E7%95%8Cweb/simple_js/K%25%29ZR5%25N%24XC236QA~5FVBMB.png)

  发现定义了一些参数和好像有点多余的for循环，好吧，有点迷，最后一个弹窗也是和前面定义的参数毫无关系。不过发现有个可疑的变量和dechiffre后面跟着的字符串。尝试解码一下pass，这变量名字不错，希望有点用。

  ```python
  x=[70,65,85,88,32,80,65,83,83,87,79,82,68,32,72,65,72,65]
  
  for i in x:
      print(chr(i),end="")
  ```

  ![](https://blog-file-1302856486.cos.ap-guangzhou.myqcloud.com/%E6%94%BB%E9%98%B2%E4%B8%96%E7%95%8Cweb/simple_js/SD%28%5D9%60%7BB%25WGN1%5DS2_%288H8JT.png)

  解码得到弹框的提示消息，那我们再解一下下面那一串

  ```python
string = "\x35\x35\x2c\x35\x36\x2c\x35\x34\x2c\x37\x39\x2c\x31\x31\x35\x2c\x36\x39\x2c\x31\x31\x34\x2c\x31\x31\x36\x2c\x31\x30\x37\x2c\x34\x39\x2c\x35\x30"
  s_list = string.split(",")
res = ""
  for i in s_list:
      i = chr(int(i))
      res += i
  print(res)
  ```
  
  看起来不像是什么加密的结构，这让我有点迷。淦，忽然想起来前面题目开始就提示我们flga结构，于是拿着字符串去构造了一下flag提交，Cyberpeace{786OsErtk12}，发现居然成功了~
  
  

# 高手进阶区

- ## baby_web

  ------

  有点激动，终于到高手web进阶区了，慢慢走向高手的路了是不是？好吧好吧，不吹了，来看看题目

  ![](https://blog-file-1302856486.cos.ap-guangzhou.myqcloud.com/%E6%94%BB%E9%98%B2%E4%B8%96%E7%95%8Cweb/baby_web/2QD4IVBA_IZPP_%2425STG%28%28N.png)

  题目提示我们是初始页面，打开是一个1.php，尝试输入了一下index.php,发现存在这个页面，但302跳转了

  ![](https://blog-file-1302856486.cos.ap-guangzhou.myqcloud.com/%E6%94%BB%E9%98%B2%E4%B8%96%E7%95%8Cweb/baby_web/VC70ZU3IO_B8ZM7Q%28~93O%5DX.png)

  然后使用curl请求一下，curl工具默认不随着302跳转

  ![](https://blog-file-1302856486.cos.ap-guangzhou.myqcloud.com/%E6%94%BB%E9%98%B2%E4%B8%96%E7%95%8Cweb/baby_web/HY40G4%601ZEH%7DEGO2EN%25~498.png)

  flag就出来了，妥妥的签到题呀哈哈嗝。

  后来发现其实刚开始就已经给出flag了，汗！

  ![](https://blog-file-1302856486.cos.ap-guangzhou.myqcloud.com/%E6%94%BB%E9%98%B2%E4%B8%96%E7%95%8Cweb/baby_web/YY4%24SZRJG~%7DGSJ%5DHWPE~6XO.png)