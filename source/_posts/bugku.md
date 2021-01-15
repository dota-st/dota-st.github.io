---
title: bugku平台web题目~持续更新中！（新手推荐）
tags: CTF
top_img: >-
  https://blog-file-1302856486.cos.ap-guangzhou.myqcloud.com/bugku/%5D%28MZVF%7D3%40%25HTMN%29VS%60KMD74.png
cover: >-
  https://blog-file-1302856486.cos.ap-guangzhou.myqcloud.com/bugku/%5D%28MZVF%7D3%40%25HTMN%29VS%60KMD74.png
abbrlink: 55334
date: 2020-10-17 09:12:18
---

1. ## web2

   打开页面，是一群会动的滑稽，还越动越快，哈哈哈

   ![](https://blog-file-1302856486.cos.ap-guangzhou.myqcloud.com/bugku/web2/6YPR%25%7B%40PNPA%5BNUEN%7BBW6VGQ.png)

   好啦，看起来页面给不出什么有用的信息，我们查看一下源代码

   ![](https://blog-file-1302856486.cos.ap-guangzhou.myqcloud.com/bugku/web2/7%60CZ6H%24XMN37HSV%40%5BKG%40%60YW.png)

   发现flag，通关！
   
2. ## 计算器

   进入环境后，发现给出一串数字计算，但怎么也输入不了超过两位数的数字，只能输入一位

   ![](https://blog-file-1302856486.cos.ap-guangzhou.myqcloud.com/bugku/%E8%AE%A1%E7%AE%97%E5%99%A8/R%60T%5B%60G~%24KK_4G73~~FWC%40YY.png)

   猜测是前端限制，打开后，修改1数值为2，就可以输入两位数字了，然后提交获取flag

   ![](https://blog-file-1302856486.cos.ap-guangzhou.myqcloud.com/bugku/%E8%AE%A1%E7%AE%97%E5%99%A8/%28RKID%60YAVX1ZTCXS9%7B3%7D~KU.png)

   当然，还有另一种方法，就是去找他的js文件，找了一下，发现flag了

   ![](https://blog-file-1302856486.cos.ap-guangzhou.myqcloud.com/bugku/%E8%AE%A1%E7%AE%97%E5%99%A8/51MY%5B%7DSCM%29%60XKFO4SI8Z3%7DM.png)

3. ## $_GET

   看题目也知道是get方式发送请求，打开后看页面给出的代码

   ![](https://blog-file-1302856486.cos.ap-guangzhou.myqcloud.com/bugku/get/UZAL7ME3%7BJQ7OQ%7BCE1VC193.png)

   查看代码，告诉我们传参给what，当传的参数值为flag，输出flag

   ![](https://blog-file-1302856486.cos.ap-guangzhou.myqcloud.com/bugku/get/YINKR%28%29%7BP6602C3PPQ%60C%7B15.png)

   ok,获取到flag。

4. ## $_POST

   这次要求我们使用post方式传参

   ![](https://blog-file-1302856486.cos.ap-guangzhou.myqcloud.com/bugku/post/J%7B4QX%29%5DODJBTH%257%25PJZVRH2.png)

   和上道题目一样，需要对what参数传参flag回显答案，但我们不是使用get方式，而是使用post方式进行请求

   ![](https://blog-file-1302856486.cos.ap-guangzhou.myqcloud.com/bugku/post/UI%259OG4%7D99JEQ%7D4QQB%24U_S1.png)

   回显flag，通关。

5. ## 矛盾

   打开题目，查看给出的代码

   ![](https://blog-file-1302856486.cos.ap-guangzhou.myqcloud.com/bugku/%E7%9F%9B%E7%9B%BE/WM9ZE87%29%7BBW9%25ERIN9%7BW%248Y.png)

   依然用get方式对参数num传值，但这次多了一个**is_numeric()函数**和一个**if判断**。

   > isnumeric( )还是一个很实用的函数，在算法题目里面应该会有比较大的作用。
   >
   > 检测字符串是否只由数字组成，如果字符串中只包括数字，就返回Ture，否则返回False。

   同时我们还需要知道php的弱类型比较，例如'123a'会被转换成'123',字符串的开头部分决定了它的值。如果该字符串以合法的数字开始，则使用该数字至和他连续的最后一个数字结束，否则其比较时整体值为0。

   所以我们既要满足第一个不是纯数字又要数值上等于1

   ![](https://blog-file-1302856486.cos.ap-guangzhou.myqcloud.com/bugku/%E7%9F%9B%E7%9B%BE/OO%7D2%40M0%4076CCULY%5D3GNA%40QL.png)

   成功，获取flag。

6. ## web3

   打开题目环境，有一个弹框，一直点都一直弹出，f12点不开开发者工具，所以我们直接url请求查看源代码

   ![](https://blog-file-1302856486.cos.ap-guangzhou.myqcloud.com/bugku/web3/%25WTF6%5D64VA%2846%5DGK7~%5B6%7BAM.png)

   拉到底下，发现一串unicode编码

   ![](https://blog-file-1302856486.cos.ap-guangzhou.myqcloud.com/bugku/web3/S3AKL%5BJ%40%296T%25Z%5BWB8CAS7IC.png)

   把它转成Ascii码即可解密获取flag呦

   ![](https://blog-file-1302856486.cos.ap-guangzhou.myqcloud.com/bugku/web3/K%7DOPCINA9JMUUT6NFY1IT71.png)

7. ## 域名解析

   题目提示我们解析域名

   ![](https://blog-file-1302856486.cos.ap-guangzhou.myqcloud.com/bugku/%E5%9F%9F%E5%90%8D%E8%A7%A3%E6%9E%90/HK%5DCS7TD%60%5BU9_SC%60H3%28%7B%25FE.png)

   按照题目要求把flag.baidu.com解析到123.206.87.240，所以我们在本地的hosts文件里写入

   ![](https://blog-file-1302856486.cos.ap-guangzhou.myqcloud.com/bugku/%E5%9F%9F%E5%90%8D%E8%A7%A3%E6%9E%90/%5D4%28BG%28N5%7DD%28Y%40KWWD~ISX~B.png)

   再访问flag.baidu.com即可得到flag

   ![](https://blog-file-1302856486.cos.ap-guangzhou.myqcloud.com/bugku/%E5%9F%9F%E5%90%8D%E8%A7%A3%E6%9E%90/BC%5BB1EG9A%5D%7BSO%28%5DTKKV%605Z7.png)

8. ## 你必须让他停下

   打开页面，是一个不停刷新的画面

   ![](https://blog-file-1302856486.cos.ap-guangzhou.myqcloud.com/bugku/%E4%BD%A0%E5%BF%85%E9%A1%BB%E8%AE%A9%E4%BB%96%E5%81%9C%E4%B8%8B%E6%9D%A5/_J5%28NO03FKQI%5BU%5D%7B0QOIL1L.png)

   仔细观察了一下，发现有一次请求中源代码会显示出flag，所以我们使用burpsuite抓包，然后进行若干次发送请求

   ![](https://blog-file-1302856486.cos.ap-guangzhou.myqcloud.com/bugku/%E4%BD%A0%E5%BF%85%E9%A1%BB%E8%AE%A9%E4%BB%96%E5%81%9C%E4%B8%8B%E6%9D%A5/WLO9%24%5B0%40N%7D96OW%5B%25F%60Q626H.png)

   在请求图片名字为10的时候，暴露出flag。

9. ## 本地包含

   题目环境打不开，可能平台出问题了，暂时跳过......

10. ## 变量1

    打开题目，给出php代码，我们进行一波代码审计

    ![](https://blog-file-1302856486.cos.ap-guangzhou.myqcloud.com/bugku/%E5%8F%98%E9%87%8F1/TID%7DDC4B%283WM90Y_%5D%60DLX2X.png)

    首先需要对args用get方式进行一个传参，第一个if里面含有正则，对一些字符进行了一个过滤，还发现下面**var_dump**里的变量有两个$$，这是一个可变变量。

    > 可变变量是一种独特的变量，它允许动态改变一个变量名称。其工作原理是该变量的名称由另一个变量的值来确定，实现过程就是在变量的前面再多加一个美元符号“$”.

    所以我们需要对args传一个变量的值，通过var_dump来显示它的信息，php中的全局变量有以下几种

    > - $_POST [用于接收post提交的数据]
    > - $_GET [用于获取url地址栏的参数数据]
    > - $_FILES [用于文件就收的处理img 最常见]
    > - $_COOKIE [用于获取与setCookie()中的name 值]
    > - $_SESSION [用于存储session的值或获取session中的值]
    > - $_REQUEST [具有get,post的功能，但比较慢]
    > - SERVER[是预定义服务器变量的一种，所有SERVER[是预定义服务器变量的一种，所有_SERVER [是预定义服务器变量的一种，所有_SERVER开头的都
    > - $GLOBALS [一个包含了全部变量的全局组合数组]
    > - $_ENV [ 是一个包含服务器端环境变量的数组。它是PHP中一个超级全局变量，我们可以在PHP 程序的任何地方直接访问它]

    我们这里使用GLOBALS全局变量进行构造

    ![](https://blog-file-1302856486.cos.ap-guangzhou.myqcloud.com/bugku/%E5%8F%98%E9%87%8F1/EW%7BSV%7B4D%29ZL3L~CLXXN4M%25Q.png)

    ok，回显出flag。
    
11. ## web5

    打开页面提示是jsfuck加密

    ![](https://blog-file-1302856486.cos.ap-guangzhou.myqcloud.com/bugku/web5/S%24E92B%60%7BE%24X%29T1UC%28%400H%24FG.png)

    没有什么有用的信息，我们查看源代码，发现一堆编码出现在我们面前

    ![](https://blog-file-1302856486.cos.ap-guangzhou.myqcloud.com/bugku/web5/G%2444%402T5FQDV%25%7DF8OY%28M1AS.png)

    jsfuck其实是一串js代码，经过了特殊的编写方式，把包含的字符做到极致，最后只剩下 ()+[]!  这六个字符。

    ```
    false       =>  ![]
    true        =>  !![]
    undefined   =>  [][[]]
    NaN         =>  +[![]]
    0           =>  +[]
    1           =>  +!+[]
    2           =>  !+[]+!+[]
    10          =>  +[[+!+[]]+[+[]]]
    Array       =>  []
    Number      =>  +[]
    String      =>  []+[]
    Boolean     =>  ![]
    Function    =>  []["filter"]
    run         =>  []["filter"]["constructor"]( CODE )()
    eval        =>  []["filter"]["constructor"]("return eval")()( CODE )
    window      =>  []["filter"]["constructor"]("return this")()
    ```

    所以我们复制粘贴这串jsfuck到控制台输出，得到结果

    ![](https://blog-file-1302856486.cos.ap-guangzhou.myqcloud.com/bugku/web5/%28JU~1L3FO~6KTRQV886%25%60%40W.png)

    再按题目提示的，转换成大写的形式，提交即可。

12. ## 头等舱

    进去后，发现确实和页面说的一样，啥信息都没有

    ![](https://blog-file-1302856486.cos.ap-guangzhou.myqcloud.com/bugku/%E5%A4%B4%E7%AD%89%E8%88%B1/AJH%28INH1G56374%249K6G%29IWB.png)

    好，我们抓包看看，有没有什么有用的信息

    ![](https://blog-file-1302856486.cos.ap-guangzhou.myqcloud.com/bugku/%E5%A4%B4%E7%AD%89%E8%88%B1/2CWHD%60%25%5BADSG%25H2W%5DYX9H%29Y.png)

    好吧，flag这就出来了。

13. ## 网站被黑

    打开环境，是一个被挂了黑页的网站

    ![](https://blog-file-1302856486.cos.ap-guangzhou.myqcloud.com/bugku/%E7%BD%91%E7%AB%99%E8%A2%AB%E9%BB%91/QQ%E6%88%AA%E5%9B%BE20201018162409.png)

    我们先扫一下页面，看看留下了什么

    ![](https://blog-file-1302856486.cos.ap-guangzhou.myqcloud.com/bugku/%E7%BD%91%E7%AB%99%E8%A2%AB%E9%BB%91/UT~3VV~T72FTBD_PXMF3L68.png)

    发现有一个shell.php，我们去访问一下

    ![](https://blog-file-1302856486.cos.ap-guangzhou.myqcloud.com/bugku/%E7%BD%91%E7%AB%99%E8%A2%AB%E9%BB%91/I%40OI%250XWBJ%40M5%28X%25QY%286IAC.png)

    发现是一个需要登录的页面，我们使用burpsuite爆破一下密码

    ![](https://blog-file-1302856486.cos.ap-guangzhou.myqcloud.com/bugku/%E7%BD%91%E7%AB%99%E8%A2%AB%E9%BB%91/2GRA6H%7BML86%7DW%5DM8R7A8%29SR.png)

    爆破得到密码为hack，输入密码，得到flag

    ![](https://blog-file-1302856486.cos.ap-guangzhou.myqcloud.com/bugku/%E7%BD%91%E7%AB%99%E8%A2%AB%E9%BB%91/T6Z2%25VF%290%7D%2938%5D%7B%7D9PSS%602F.png)
    
14. ## 管理员系统

    打开页面，发现是一个登录框，先查看一下源码，找找有没有什么提示

    ![](https://blog-file-1302856486.cos.ap-guangzhou.myqcloud.com/bugku/%E7%AE%A1%E7%90%86%E5%91%98%E7%B3%BB%E7%BB%9F/Z8%40230%7BC%7B6V8GOE7D851%291M.png)

    发现一串base64加密的数据，我们去解密看看

    ![](https://blog-file-1302856486.cos.ap-guangzhou.myqcloud.com/bugku/%E7%AE%A1%E7%90%86%E5%91%98%E7%B3%BB%E7%BB%9F/B9_3MUJUL493G0Y816ECBR1.png)

    猜测这应该是密码，账号的话默认admin试试，毕竟管理员系统嘛

    ![](https://blog-file-1302856486.cos.ap-guangzhou.myqcloud.com/bugku/%E7%AE%A1%E7%90%86%E5%91%98%E7%B3%BB%E7%BB%9F/0MBMGO20DMNSRR1%29%40%5BD85H0.png)

    发现提示我们ip禁止登陆，应该是要指定ip，本地本地本地...emmm，那是提示我们127.0.0.1吧，试试一波。

    加个X-Forwarded-For头进去发一下包

    ![](https://blog-file-1302856486.cos.ap-guangzhou.myqcloud.com/bugku/%E7%AE%A1%E7%90%86%E5%91%98%E7%B3%BB%E7%BB%9F/NWQJ4%7D9Y_%40I7B8%5B%25COSZ%25%28Y.png)

    发现登陆成功，flag回显出来了，嘿嘿嘿。
    
15. ## web4

    进来就提示我们查看源代码，不错不错

    ![](https://blog-file-1302856486.cos.ap-guangzhou.myqcloud.com/bugku/web4/~TO%29FETA5%29%254NP4%7D7Z%29%29%60F2.png)

    移步去源代码，发现js里有三串经过url编码的数据

    ![](https://blog-file-1302856486.cos.ap-guangzhou.myqcloud.com/bugku/web4/E%7BUM%24%408%28ZAX3GGX%7D5TXVB%60R.png)

    我们去解码后，把这三串解密的数据拼接起来，这里建议去在线的js格式美化网站进行格式化，然后得到

    ![](https://blog-file-1302856486.cos.ap-guangzhou.myqcloud.com/bugku/web4/XVK%24A9MCZ4K%7BWC%28O09K%29J9F.png)

    我们把这一串字符串“67d709b2baa648cf6e87a7114f1”输入提交框

    ![](https://blog-file-1302856486.cos.ap-guangzhou.myqcloud.com/bugku/web4/%5B%5DT%40%25X0FAPWVTXIR%5DU%5DS%296M.png)

    flag就出来了，但让我有一点点迷惑，按js代码里说应该获取的是id为password里的值，但我们刚刚看源代码，提交框的id是flag...来自菜鸡的迷惑。

16. ## flag在index里

    打开页面，只有一个链接点击

    ![](https://blog-file-1302856486.cos.ap-guangzhou.myqcloud.com/bugku/flag%E5%9C%A8index%E9%87%8C/U5%5D7%7B%406A_%2421B%2946Q%5BR%60%4033.png)

    点开连接后显示一个文本，查看了源码发现没有什么信息

    ![](https://blog-file-1302856486.cos.ap-guangzhou.myqcloud.com/bugku/flag%E5%9C%A8index%E9%87%8C/%5B%29F%40DM%5B9%409W%7B92XX%29XQFEAD.png)

    注意到url有个file参数，猜一波文件包含。

    使用php协议进行读取：file=php://filter/read=convert.base64-encode/resource=index.php

    先对这个协议进行一波解释：
    
    >file进行get传参，题目前面提示我们的index.php，php://filter/是访问本地文件的协议，read表示要读取的链的筛选列表，resource表示访问的目标文件。
    >
    >为什么中间要进行一波base64加密呢？因为不进行base64加密，会直接当成php文件执行。而我们传递的参数被include()函数引入了base64的格式，执行不成功，所以会返回文件的源码。
    
    使用php文件协议后，页面返回一串被base64加密的源码
    
    ![](https://blog-file-1302856486.cos.ap-guangzhou.myqcloud.com/bugku/flag%E5%9C%A8index%E9%87%8C/C5TYJ8CEF%29N%5DM%60%5BNNNC%60W%5B5.png)
    
    解密base64之后得到
    
    ![](https://blog-file-1302856486.cos.ap-guangzhou.myqcloud.com/bugku/flag%E5%9C%A8index%E9%87%8C/C_%7DDCAG%5B2RL2BJM%40Z4SN3VI.png)
    
    发现flag藏在注释中，闯关成功！
    
17. ## 输入密码查看flag

    进来是一个输入密码的登陆框

    ![](https://blog-file-1302856486.cos.ap-guangzhou.myqcloud.com/bugku/%E8%BE%93%E5%85%A5%E5%AF%86%E7%A0%81%E6%9F%A5%E7%9C%8Bflag/S%25XM%289XXWB3O%24H%28%7DJEJUA%5D5.png)

    老规矩。按照题目提示，使用burpsuite抓包爆破密码

    ![](https://blog-file-1302856486.cos.ap-guangzhou.myqcloud.com/bugku/%E8%BE%93%E5%85%A5%E5%AF%86%E7%A0%81%E6%9F%A5%E7%9C%8Bflag/_SB%40QY%24%7B3_O3N_ZXVDJU46I.png)

    因为说的5位数字，所以按10000到90000爆破试试

    ![](https://blog-file-1302856486.cos.ap-guangzhou.myqcloud.com/bugku/%E8%BE%93%E5%85%A5%E5%AF%86%E7%A0%81%E6%9F%A5%E7%9C%8Bflag/H3S4Q%40C%60VAEF%60EH%28%7DQL3~%7BQ.png)

    去冲杯牛奶先...

    ok。爆破成功，查看response，得到flag

    ![](https://blog-file-1302856486.cos.ap-guangzhou.myqcloud.com/bugku/%E8%BE%93%E5%85%A5%E5%AF%86%E7%A0%81%E6%9F%A5%E7%9C%8Bflag/H3S4Q%40C%60VAEF%60EH%28%7DQL3~%7BQ.png)

18. ## 点击一百万次

    好家伙，又是一道链接挂掉的题目，待续...

19. ## 备份是个好习惯

    打开页面是一串字符串，没看懂啥意思

    ![](https://blog-file-1302856486.cos.ap-guangzhou.myqcloud.com/bugku/%E5%A4%87%E4%BB%BD%E6%98%AF%E4%B8%AA%E5%A5%BD%E4%B9%A0%E6%83%AF/NPU2G0NO%29~UHHH%7D%24P%29HJZ2U.png)

    按照题目提示，应该是有备份文件泄露，猜测应该是常见的bak文件，使用工具扫一下

    ![](https://blog-file-1302856486.cos.ap-guangzhou.myqcloud.com/bugku/%E5%A4%87%E4%BB%BD%E6%98%AF%E4%B8%AA%E5%A5%BD%E4%B9%A0%E6%83%AF/%28~%60BF%7DB_%24MW9P%60I%2827BN2ZN.png)

    发现存在bak文件，我们访问这个路径后，下载bak文件，打开出现源码

    ```php
    <?php
    /**
     * Created by PhpStorm.
     * User: Norse
     * Date: 2017/8/6
     * Time: 20:22
    */
    
    include_once "flag.php";
    ini_set("display_errors", 0);
    $str = strstr($_SERVER['REQUEST_URI'], '?');
    $str = substr($str,1);
    $str = str_replace('key','',$str);
    parse_str($str);
    echo md5($key1);
    
    echo md5($key2);
    if(md5($key1) == md5($key2) && $key1 !== $key2){
        echo $flag."取得flag";
    }
    ?>
    ```

    源码意思是，对key进行一个过滤，然后传参key1和key2两个参数，同时key1和key2的md5值要相等，并且未经过md5加密前的值不能相等，满足条件就会输出flag。

    对于key过滤我们可以考虑使用双写的方法，kkeyey1

    这里说一下可以利用==漏洞和数组漏洞绕过md5

    **==漏洞：**

    >如果两个字符经MD5加密后的值为 0exxxxx形式，就会被认为是科学计数法，且表示的是0*10的xxxx次方，还是零，都是相等的。
    >
    >下列的字符串的MD5值都是0e开头的：
    >
    >QNKCDZO
    >
    >240610708
    >
    >s878926199a
    >
    >s155964671a
    >
    >s214587387a
    >
    >s214587387a

    **数组漏洞：**

    md5()函数无法处理数组，如果我们传数组进去，会返回一个NULL，所以两个数组经过加密后得到的都是相同的NULL。

    ![](https://blog-file-1302856486.cos.ap-guangzhou.myqcloud.com/bugku/%E5%A4%87%E4%BB%BD%E6%98%AF%E4%B8%AA%E5%A5%BD%E4%B9%A0%E6%83%AF/JE36DTP5PN~GP5EA2POZ%28YI.png)

    ok，成功绕过，取得flag。
    
20. ## 成绩单

    **手工注入：**

    根据页面内容，还有输入框的提示1,2,3，猜测应该是sql注入的类型，尝试传参一个1

    ![](https://blog-file-1302856486.cos.ap-guangzhou.myqcloud.com/bugku/%E6%88%90%E7%BB%A9%E5%8D%95/3V6%28G84T%29H%5BA_Z_%24%7B%25NG%7BSH.png)

    有回显，再加个'号测试测试

    ![](https://blog-file-1302856486.cos.ap-guangzhou.myqcloud.com/bugku/%E6%88%90%E7%BB%A9%E5%8D%95/%29FK7%5DYXUELQ96IWRV_V8%7DML.png)

    发现没有回显，加一个注释试试

    ![](https://blog-file-1302856486.cos.ap-guangzhou.myqcloud.com/bugku/%E6%88%90%E7%BB%A9%E5%8D%95/BJT40REGPF%7D2%5D19_N_S%25K07.png)

    有数据回显，判定是存在sql注入，我们查查应该有多少列，其实看网页显示的数据，就能看出是4列了，但还是测试一下，免得判断错误

    ![](https://blog-file-1302856486.cos.ap-guangzhou.myqcloud.com/bugku/%E6%88%90%E7%BB%A9%E5%8D%95/Q%28CQDWU%7D%5DFT%60%25%24H8%25AK8B%5BB.png)

    ![](https://blog-file-1302856486.cos.ap-guangzhou.myqcloud.com/bugku/%E6%88%90%E7%BB%A9%E5%8D%95/HX%292DBLC3G%603~%5D%28%5D5KWB%254L.png)

    发现为4时有回显数据，为5时没有数据回显，判断有4列

    那我们直接来尝试联合注入，查查数据库名字，这里记得要写成id=-1'，把前面查询的数据置空，当然id=0也是可以的

    ![](https://blog-file-1302856486.cos.ap-guangzhou.myqcloud.com/bugku/%E6%88%90%E7%BB%A9%E5%8D%95/I6M%7DB2QK6WB4MF3ILV_WMRG.png)

    查出数据库的名字为：skctf_flag

    继续查表名字

    ![](https://blog-file-1302856486.cos.ap-guangzhou.myqcloud.com/bugku/%E6%88%90%E7%BB%A9%E5%8D%95/%28CVZ%7D%5D97KJW5_%40GLWYO_O%24S.png)

    查出有两个表，分别为fl4g和sc，我们先查表为fl4g的列名

    ![](https://blog-file-1302856486.cos.ap-guangzhou.myqcloud.com/bugku/%E6%88%90%E7%BB%A9%E5%8D%95/V12W79PWN~1R%25~FUWXJEC%5BF.png)

    得到列名为skctf_flag，下一步查看列里面的数据

    ![](https://blog-file-1302856486.cos.ap-guangzhou.myqcloud.com/bugku/%E6%88%90%E7%BB%A9%E5%8D%95/3Z1HO%7BD%40J%5B%24NINEOQ4SWQ7T.png)

    ok，爆出flag了，大功告成！

    **使用sqlmap工具爆破**：

    首先这是个post方式提交的，所以我们需要用burpsuite进行抓取数据包

    ![](https://blog-file-1302856486.cos.ap-guangzhou.myqcloud.com/bugku/%E6%88%90%E7%BB%A9%E5%8D%95/_T9%5DIEYFI%29%7D3B1ULO69CXNK.png)

    然后复制到文本文件上

    ![](https://blog-file-1302856486.cos.ap-guangzhou.myqcloud.com/bugku/%E6%88%90%E7%BB%A9%E5%8D%95/V_2IY%7D%295REKL6GRA4AMZFCG.png)

    查询数据库：

    ![](https://blog-file-1302856486.cos.ap-guangzhou.myqcloud.com/bugku/%E6%88%90%E7%BB%A9%E5%8D%95/ZCI8V7QAV3DBW%60%5B%40J8~_BLP.png)

    ![](https://blog-file-1302856486.cos.ap-guangzhou.myqcloud.com/bugku/%E6%88%90%E7%BB%A9%E5%8D%95/BJB0ITHDT2EF%28H7Y%29%60ADNMG.png)

    查询表名：

    ![](https://blog-file-1302856486.cos.ap-guangzhou.myqcloud.com/bugku/%E6%88%90%E7%BB%A9%E5%8D%95/RA5%29I%7DFT%7BV2S%28L87RD%60AD%40O.png)

    查询字段名：

    ![](https://blog-file-1302856486.cos.ap-guangzhou.myqcloud.com/bugku/%E6%88%90%E7%BB%A9%E5%8D%95/B~%40I%25~2Z52PR1WEJ5YEC5%7DE.png)

    查询字段信息：

    ![](https://blog-file-1302856486.cos.ap-guangzhou.myqcloud.com/bugku/%E6%88%90%E7%BB%A9%E5%8D%95/PSMH%7DE%25MAI~EMU434%7DLDE%5B2.png)
    
21. ## 秋名山老司机

    喂，高桥凉介吗？我是藤原拓海，我想加入...车队。

    哈哈，不好意思，走错片场了

    ![](https://blog-file-1302856486.cos.ap-guangzhou.myqcloud.com/bugku/%E7%A7%8B%E5%90%8D%E5%B1%B1%E8%80%81%E5%8F%B8%E6%9C%BA/2NGXH%7DD8~~%24%7BFV9YRG%2826QK.jpg)

    打开页面，是一个很长的计算式子，而且2s内又会发生变化。

    ![](https://blog-file-1302856486.cos.ap-guangzhou.myqcloud.com/bugku/%E7%A7%8B%E5%90%8D%E5%B1%B1%E8%80%81%E5%8F%B8%E6%9C%BA/X5_XP_O_%5BCZ%5DL1H1B%7BWIQPV.png)

    翻了一下网页源码也没有什么有用的信息，猜测是需要我们向他发送一个post数据包，数据为式子的计算值，但它没有给出需要传参的对象是什么。而且在2s内计算出值不太可能，这个时候我们需要写一个python脚本跑一跑

    ~~~python
    import requests
    import re
    url = 'http://123.206.87.240:8002/qiumingshan/'
    session = requests.session()
    a = re.findall('<div>([0-9+*-]*)?', session.get(url).text)
    #因为re.findall返回的是一个列表，所以我们查看一下列表的内容
    print("页面的计算式子：",a[0],'\n')
    b = eval(a[0])
    c = {"":b}
    result = session.post(url,c)
    print(result.text)
    ~~~

    先解释一下脚本，用session保持一个会话状态，免得下次post出去的时候就是另一个计算值了，然后用正则匹配页面内容div后面的数字和+-*三种运算符，后面的表示匹配全部，?表示非贪婪匹配，用eval计算我们的式子。

    首先我们给一个空的对象传计算的值测试测试，因为我们也不知道给谁传值

    ![](https://blog-file-1302856486.cos.ap-guangzhou.myqcloud.com/bugku/%E7%A7%8B%E5%90%8D%E5%B1%B1%E8%80%81%E5%8F%B8%E6%9C%BA/J%5D8U%28%5BUYQ9CQO95MUC%28FXRX.png)

    返回页面结果，提示我们给value传值，ok，那我们在字典上再填上value

    ~~~python
    import requests
    import re
    url = 'http://123.206.87.240:8002/qiumingshan/'
    session = requests.session()
    a = re.findall('<div>([0-9+*-]*)?', session.get(url).text)
    #因为re.findall返回的是一个列表，所以我们查看一下列表的内容
    print("页面的计算式子：",a[0],'\n')
    b = eval(a[0])
    c = {"value":b}
    result = session.post(url,c)
    print(result.text)
    ~~~

    看看结果

    ![](https://blog-file-1302856486.cos.ap-guangzhou.myqcloud.com/bugku/%E7%A7%8B%E5%90%8D%E5%B1%B1%E8%80%81%E5%8F%B8%E6%9C%BA/4JCI7%255O%60Q849KFX9M9%24V_B.png)

    拿到flag，下一关下一关！！！
    
22. ## 速度要快

    打开页面

    ![](https://blog-file-1302856486.cos.ap-guangzhou.myqcloud.com/bugku/%E9%80%9F%E5%BA%A6%E8%A6%81%E5%BF%AB/8%40T~%7B%7D%607N0E4JJ%29JV%24K%40SWT.png)

    让我们快点，好，那我就用burpsuite搞一下你

    ![](https://blog-file-1302856486.cos.ap-guangzhou.myqcloud.com/bugku/%E9%80%9F%E5%BA%A6%E8%A6%81%E5%BF%AB/%29EHX4V~L3USH7W%5B4%606%40M_WX.png)

    发现响应头有flag，flag后面数据被base64加密了，我们去解决一下

    ![](https://blog-file-1302856486.cos.ap-guangzhou.myqcloud.com/bugku/%E9%80%9F%E5%BA%A6%E8%A6%81%E5%BF%AB/G%40K%28U69GOE7I7X%60U2%7DZX6ZJ.jpg)

    好家伙，还有一串base64加密的数据，那我们再解一遍

    ![](https://blog-file-1302856486.cos.ap-guangzhou.myqcloud.com/bugku/%E9%80%9F%E5%BA%A6%E8%A6%81%E5%BF%AB/P%24O581JD%5BGRO%7B%7B%24VPO6Y9RH.jpg)

    题目提示我们flag的格式，所以我们去按照格式提交一下

    .....emm答案不正确

    ![](https://blog-file-1302856486.cos.ap-guangzhou.myqcloud.com/bugku/%E9%80%9F%E5%BA%A6%E8%A6%81%E5%BF%AB/MOJS0I82%60U3GCO7%7BC%29O%7D4GA.jpg)

    后面发现每次提交一次包，返回的flag都不一样

    ![](https://blog-file-1302856486.cos.ap-guangzhou.myqcloud.com/bugku/%E9%80%9F%E5%BA%A6%E8%A6%81%E5%BF%AB/%7D%7DI~3MYXK%40AK%40L71HFANWR4.png)

    ![](https://blog-file-1302856486.cos.ap-guangzhou.myqcloud.com/bugku/%E9%80%9F%E5%BA%A6%E8%A6%81%E5%BF%AB/N9PFS22WWSK9~VW_2F_%409WP.jpg)

    被演了一手，注意到返回的数据提示我们需要post发送margin，应该是发送数据margin:解密后的flag。但再次发送后还是回显“我感觉你得快点”

    那我直接上脚本

    ~~~python
    import requests
    import base64
    url = 'http://123.206.87.240:8002/web6/'
    se = requests.session()
    flag = se.get(url).headers['flag']
    flag = base64.b64decode(flag).decode()#多加个decode(),是因为上一步生成的是bytes类型，要转换成string
    flag = base64.b64decode(flag.split(":")[1]) 
    go = {'margin':flag}
    print(se.post(url,data=go).text)
    ~~~

    然后得到flag

    ![](https://blog-file-1302856486.cos.ap-guangzhou.myqcloud.com/bugku/%E9%80%9F%E5%BA%A6%E8%A6%81%E5%BF%AB/O1%24UM%29LIER5PAGC7OFY%29_TN.png)

    还是解释一波脚本吧，首先使用session保持一个会话状态，然后得到返回的响应头中的flag那一条数据。经过第一次base64解密，然后取解密出来的那一串字符串中的‘：’后面的那一串base64加密的数据进行解密，最后发送一个post数据包，打印出文本信息。
    
23. ## cookies欺骗

    打开页面，是一大串没有用的字符串(因为尝试解密了N次...)

    ![](https://blog-file-1302856486.cos.ap-guangzhou.myqcloud.com/bugku/cookies%E6%AC%BA%E9%AA%97/8J9PK_S4VX%7DW%29W7U0RRO%25DO.png)

    有注意到filename参数后面跟的是一串base64编码，去解密一下

    ![](https://blog-file-1302856486.cos.ap-guangzhou.myqcloud.com/bugku/cookies%E6%AC%BA%E9%AA%97/8J9PK_S4VX%7DW%29W7U0RRO%25DO.png)

    解密得到keys.txt，应该这是个突破点，访问一下index.php，注意要先进行base64编码，按照它的方式传参。

    index.php经过base64编码后为：aW5kZXgucGhw

    ![](https://blog-file-1302856486.cos.ap-guangzhou.myqcloud.com/bugku/cookies%E6%AC%BA%E9%AA%97/PAAJKTHIOF1TTDZHYHWDZ%7BV.png)

    在源代码中发现有点有用的信息，这时候把视线再转移到另一个参数line。前面只显示<?php，并不全，猜测可能是line控制显示的行数

    我们尝试更改line的值

    ![](https://blog-file-1302856486.cos.ap-guangzhou.myqcloud.com/bugku/cookies%E6%AC%BA%E9%AA%97/FQ%5B4IHZ%5BWK82R5C%29FQFGKQ9.png)

    ![](https://blog-file-1302856486.cos.ap-guangzhou.myqcloud.com/bugku/cookies%E6%AC%BA%E9%AA%97/88L4Y%7D0_M%28WV~LM%7BE%2968F%25I.png)

    确认line参数控制显示的行数了，我们写个python脚本跑一下

    ~~~python
    import requests
    
    lines = 20
    
    for i in range(lines):
        url = "http://123.206.87.240:8002/web11/index.php?line="+str(i)+"&filename=aW5kZXgucGhw"
        res = requests.get(url).text
        print(res)
    ~~~

    跑完得到完整的源代码：

    ~~~php
    <?php
    
    error_reporting(0);
    
    	$file=base64_decode(isset($_GET['filename'])?$_GET['filename']:"");
    
    	$line=isset($_GET['line'])?intval($_GET['line']):0;
    
    	if($file=='') header("location:index.php?line=&filename=a2V5cy50eHQ=");
    
    	$file_list = array(
    
    	'0' =>'keys.txt',
    
    	'1' =>'index.php',
    
    );
    
     
    
    if(isset($_COOKIE['margin']) && $_COOKIE['margin']=='margin'){
    
    	$file_list[2]='keys.php';
    
    }
    
    
    
    if(in_array($file, $file_list)){
    
    	$fa = file($file);
    
    	echo $fa[$line];
    
    }
    
    ?>
    ~~~

    看来需要传参cookie，并且margin=margin才能访问keys.php文件

    keys.php经过base64编码为：a2V5cy5waHA=

    我们发送一下包

    ![](https://blog-file-1302856486.cos.ap-guangzhou.myqcloud.com/bugku/cookies%E6%AC%BA%E9%AA%97/2~FY~%5BQJ0HS%5B~JJTVR4F%5BDU.png)

    在源码中找到flag啦~

    ![](https://blog-file-1302856486.cos.ap-guangzhou.myqcloud.com/bugku/cookies%E6%AC%BA%E9%AA%97/06ITHFL5I%5D%24GG%7B%7BQZIQ%254TU.png)
    
24. ## never give up

    打开页面告诉我们不要放弃

    ![](https://blog-file-1302856486.cos.ap-guangzhou.myqcloud.com/bugku/never%20give%20up/RN9TL~G5NVGREJ2P1~4SW_T.png)

    查看一下源码

    ![](https://blog-file-1302856486.cos.ap-guangzhou.myqcloud.com/bugku/never%20give%20up/8TN%7BV%40S90DH0UP%25JC%5BPH%40%5B1.png)

    提示我们有1p.html文件，我们去访问一下

    ![](https://blog-file-1302856486.cos.ap-guangzhou.myqcloud.com/bugku/never%20give%20up/D9P%290%2482%60R9_Z99FV%24UC3JN.png)

    发现我们被重定向到https://www.bugku.com/

    用view-source查看一下源码

    ![](https://blog-file-1302856486.cos.ap-guangzhou.myqcloud.com/bugku/never%20give%20up/BU%5BB1%29%7DJEE6AUKVTM%255%5DQZ6.png)

    看见Words用经过了url编码，去解密一下

    ![](https://blog-file-1302856486.cos.ap-guangzhou.myqcloud.com/bugku/never%20give%20up/1T%5D3K47GRNIAD83BXL%5DFMKP.png)

    还有一串base64编码过的数据，再去解密一下base64

    ![](https://blog-file-1302856486.cos.ap-guangzhou.myqcloud.com/bugku/never%20give%20up/GK%60TTFC%5B3%7BA9V%40XIWL%7BXGE5.png)

    还剩一层url编码，我们再解一遍url

    ![](https://blog-file-1302856486.cos.ap-guangzhou.myqcloud.com/bugku/never%20give%20up/M%28S7~6JS88E96NAC%60P%29Q_B9.png)

    解密后得到源码，拼凑起来就是下面这样：

    ~~~
    <script>window.location.href='http://www.bugku.com';</script> 
    <!--";if(!$_GET['id'])
    {
    	header('Location: hello.php?id=1');
    	exit();
    }
    $id=$_GET['id'];
    $a=$_GET['a'];
    $b=$_GET['b'];
    if(stripos($a,'.'))
    {
    	echo 'no no no no no no no';
    	return ;
    }
    $data = @file_get_contents($a,'r');
    if($data=="bugku is a nice plateform!" and $id==0 and strlen($b)>5 and eregi("111".substr($b,0,1),"1114") and substr($b,0,1)!=4)
    {
    	require("f4l2a3g.txt");
    }
    else
    {
    	print "never never never give up !!!";
    }
    
    
    ?>-->
    	
    ~~~

    > 解释一波代码：
    >
    > 1.首先限制id必须为非零非空
    >
    > 2.一共需要传参a,b,id三个参数
    >
    > 3.匹配a中是否有.这个符号
    >
    > 4.读取变量a的值到data中，用了file_get_contents函数，所以a的值必须为数据流
    >
    > 5.判断data等于字符串"bugku is a nice plateform!"，id==0，b的长度要大于5
    >
    > 6.字符串1114要与字符串111连接变量b的第一个字符构成正则匹配，而且b的第一个字符不能为4
    
    好，那我们要采用什么姿势绕过呢？
    
    ```
    对于参数id，因为是==弱类型比较，可以使用0abc之类的绕过，因为0abc==比较为0
    
    对于参数a，因为是读取数据流，我们可以使用php协议中的input，即php://input，它可以访问请求的原始数据的只读流，所以我们用post发送数据"bugku is a nice plateform!"
    
    对参数b，我们可以使用空字符对付它。因为eregi()函数存在空字符截断漏洞，当参数中的待匹配字符串或者正则表达式遇到空字符则截断，会丢弃后面的数据。我们可以构造%0012345。这里%00是空格经过url编码后的形式，值得注意的是，这里是一共6个长度。
    ```
    
    好，我们去试试吧
    
    ![](https://blog-file-1302856486.cos.ap-guangzhou.myqcloud.com/bugku/never%20give%20up/S%5BR1_E5%25%5DYA_LKG%28RSZ_VE6.png)
    
    成功绕过拿到flag了。
    
    其实，这里有个问题，就是源码中并没有限制我们访问f4l2a3g.txt文件，只是告诉我们可以通过这种构造方式访问。
    
    所以我们可以直接访问得到flag，这也是一个思维点，我觉得。
    
    ![](https://blog-file-1302856486.cos.ap-guangzhou.myqcloud.com/bugku/never%20give%20up/P%5DHY~JA4DCBADUQYCEJCT%28X.png)
    
25. ## welcome to bugkuctf

    题目挂掉，暂时跳过

26. ## 过狗一句话

    题目还是挂了，flag被删除，跳过

27. ## 字符？正则？

    打开页面，给出一串php代码

    ![](https://blog-file-1302856486.cos.ap-guangzhou.myqcloud.com/bugku/%E5%AD%97%E7%AC%A6%EF%BC%9F%E6%AD%A3%E5%88%99%EF%BC%9F/GUB%7D33H%7BYS%29_%2410R4TS%24CK8.png)

    看到有函数preg_match，它的功能为用正则表达式匹配字符串，匹配成功返回1，并把匹配到的值赋值给match，否则返回0。最后有一个if判断，也就是我们上边匹配成功，即可输出flag。

    好，思路很清晰，就是匹配正则表达式~

    题目中的正则表达式为：/key.\*key.{4,7}key:\/.\/(.*key)\[a-z][[:punct:]]/i

    ```
    key  		普通字符key
    . 			除了换行符之外的任意字符，.*匹配0个或多个正则表达式
    key  		普通字符key
    .{4,7}		4个到7个除了换行符之外的任意字符(包括4，不包括7)
    key  		普通字符key
    :    		普通字符:
    \/   		这里的\为转义字符,也就是表示/
    .			除了换行符之外的任意字符
    \/   		这里的\为转义字符,也就是表示/
    .			除了换行符之外的任意字符，.*匹配0个或多个正则表达式
    key  		普通字符key
    [a-z]		匹配a到z之间的字符
    [:punct:]	表示匹配 !"#$%&’()*+,-./:;<=>?@[]^_`{|}~.中的任意一个
    i		    表示忽略大小写
    ```

    这里我构造成：`http://123.206.87.240:8002/web10?id=keykey....key:/./keya:`

    ![](https://blog-file-1302856486.cos.ap-guangzhou.myqcloud.com/bugku/%E5%AD%97%E7%AC%A6%EF%BC%9F%E6%AD%A3%E5%88%99%EF%BC%9F/0KY3%28S%7BG868TM%299FQ%7D%24%24%25%28T.png)

    成功拿到flag！

28. ## 前女友(SKCTF)

    好吧，题目又是挂的，gg

29. ## login1(SKCTF)

    不会吧，阿sir，又是挂的题

30. ## 你从哪里来

    终于是道能访问的题了，不容易。

    ![](https://blog-file-1302856486.cos.ap-guangzhou.myqcloud.com/bugku/%E4%BD%A0%E4%BB%8E%E5%93%AA%E9%87%8C%E6%9D%A5/A8_%606DQ%7B0%40UT%60%243KCV%294LHX.png)

    提示我们要从谷歌访问，于是抓个包改包，加referer头

    referer:`https://www.google.com`

    ![](https://blog-file-1302856486.cos.ap-guangzhou.myqcloud.com/bugku/%E4%BD%A0%E4%BB%8E%E5%93%AA%E9%87%8C%E6%9D%A5/2U%7B0ZAM%24%5DIVCR%5D7XCG3~0%7DF.png)

    啊这，flag就出来了？太简单了。。。

31. ## md5 collision(NUPT_CTF)

    打开页面，提示我们输入a

    ![](https://blog-file-1302856486.cos.ap-guangzhou.myqcloud.com/bugku/md5%20collision%28NUPT_CTF%29/~%60%405THX%7B429ORPTH6GR2MQ1.png)

    试试get输入？

    ![](https://blog-file-1302856486.cos.ap-guangzhou.myqcloud.com/bugku/md5%20collision%28NUPT_CTF%29/P617F2S%7DE5Q4XCQXYT9I%40%293.png)

    应该可能是要输入题目提示的md5，然后进行一个绕过。

    ![](https://blog-file-1302856486.cos.ap-guangzhou.myqcloud.com/bugku/md5%20collision%28NUPT_CTF%29/UN%60%7DE0VCT4%7DRUHMKX6H1UCJ.png)

    flag爆出来了。猜测源码应该是用a传进来的md5值和它源码的另一个md5值进行比较。这里再说明一下，php处理哈希字符串时，会利用!=或者==进行一个比较，每一个"0E"开头的哈希值都会被解释成0。因此两个"0E"开头的哈希值会被php认为相等。

    这里记录一下一些使用0e开头的md5和原值

    ```
    s1885207154a
    0e509367213418206700842008763514
    s1836677006a
    0e481036490867661113260034900752
    s155964671a
    0e342768416822451524974117254469
    s1184209335a
    0e072485820392773389523109082030
    s1665632922a
    0e731198061491163073197128363787
    s1502113478a
    0e861580163291561247404381396064
    s1836677006a
    0e481036490867661113260034900752
    s1091221200a
    0e940624217856561557816327384675
    s155964671a
    0e342768416822451524974117254469
    s1502113478a
    0e861580163291561247404381396064
    s155964671a
    0e342768416822451524974117254469
    s1665632922a
    0e731198061491163073197128363787
    s155964671a
    0e342768416822451524974117254469
    s1091221200a
    0e940624217856561557816327384675
    s1836677006a
    0e481036490867661113260034900752
    s1885207154a
    0e509367213418206700842008763514
    s532378020a
    0e220463095855511507588041205815
    s878926199a
    0e545993274517709034328855841020
    s1091221200a
    0e940624217856561557816327384675
    s214587387a
    0e848240448830537924465865611904
    s1502113478a
    0e861580163291561247404381396064
    s1091221200a
    0e940624217856561557816327384675
    s1665632922a
    0e731198061491163073197128363787
    s1885207154a
    0e509367213418206700842008763514
    
    ```

32. ## 程序员本地网站

    打开页面，提示我们从本地访问

    ![](https://blog-file-1302856486.cos.ap-guangzhou.myqcloud.com/bugku/%E7%A8%8B%E5%BA%8F%E5%91%98%E6%9C%AC%E5%9C%B0%E7%BD%91%E7%AB%99/H%7BV6G1KGD14%29HAGV8B7WCHL.png)

    那我们就抓包加个xff头，X-Forwarded-For:127.0.0.1

    ![](https://blog-file-1302856486.cos.ap-guangzhou.myqcloud.com/bugku/%E7%A8%8B%E5%BA%8F%E5%91%98%E6%9C%AC%E5%9C%B0%E7%BD%91%E7%AB%99/%5DJCHINA92U0KSN0A%7BW%244YW6.png)

    flag就出来了

33. ## 各种绕过

    这次是给我们代码，通过绕过进行获取flag

    ![](https://blog-file-1302856486.cos.ap-guangzhou.myqcloud.com/bugku/%E5%90%84%E7%A7%8D%E7%BB%95%E8%BF%87/7R%5BB3%290OA%5B%7BSATZJ8L%7BTLAX.png)

    ```php
    <?php
    highlight_file('flag.php');
    $_GET['id'] = urldecode($_GET['id']);
    $flag = 'flag{xxxxxxxxxxxxxxxxxx}';
    if (isset($_GET['uname']) and isset($_POST['passwd'])) {
        if ($_GET['uname'] == $_POST['passwd'])
    
            print 'passwd can not be uname.';
    
        else if (sha1($_GET['uname']) === sha1($_POST['passwd'])&($_GET['id']=='margin'))
    
            die('Flag: '.$flag);
    
        else
    
            print 'sorry!';
    
    } 
    ```

    总的看下来，需要我们通过get提交参数id和参数uname，还有通过post提交一个passwd参数

    第一个if判断，判断是否提交uname和passwd

    第二个if判断，uname的值和passwd的值一样就输出提示，所以我们这里两个参数的值不能一样

    第三个if判断，sha1()函数是用来计算字符串的SHA-1散列，这里要求经过sha1函数处理的两个值一样并且参数id等于margin，即可输出flag

    我们可以用数组来进行绕过sha1函数，因为sha1函数无法处理数组，会返回false。两个false，条件就成立了，就可以绕过。

    所以我们这么构造一下

    ![](https://blog-file-1302856486.cos.ap-guangzhou.myqcloud.com/bugku/%E5%90%84%E7%A7%8D%E7%BB%95%E8%BF%87/KGYCCZ52%25%28F%7DD%24R%24~XQX2G2.png)

    flag出来了，姿势使用对了。
    
34. ## web8

    打开，首先是一波代码审计
    ![](https://blog-file-1302856486.cos.ap-guangzhou.myqcloud.com/bugku/web8/%24O9CMJNNH%248%28%7B0R90%28F_%40NO.png)

    ~~~
    输出flag需要满足下面几个条件：
    1.get传值的ac参数不为空
    2.参数f的值从文件fn中获取
    3.参数ac需要满足等于参数f
    ~~~

    所以我们可以使用php伪协议进行构造
    第一种方法，使用php://input协议

    ![](https://blog-file-1302856486.cos.ap-guangzhou.myqcloud.com/bugku/web8/D%5DHZ9FHB%5BG8X~TW%5DP5X%60CIJ.png)

    第二种方法，使用data://text/plain协议

    ![](https://blog-file-1302856486.cos.ap-guangzhou.myqcloud.com/bugku/web8/K28D7J0%5D%24JR6S41%7BWB%29%5BPL8.png)

    补充：

    因为一直对题目的txt提示感到疑惑，想着可能file_get_contents读取的文件是存在的，后面乱试了一通index.txt，fn.txt
    ac.txt.....flag.txt，发现是存在一个flag.txt

    ![](https://blog-file-1302856486.cos.ap-guangzhou.myqcloud.com/bugku/web8/D%28BU2~CWBAOBQWP%60TVAE0AN.png)

    然后可以构造取得flag
    ![](https://blog-file-1302856486.cos.ap-guangzhou.myqcloud.com/bugku/web8/%7BYUA%25%7B9%7D6W7UY%24%29PU3TDGMP.png)
    
35. ## 细心

    打开是一个404页面
    ![](https://blog-file-1302856486.cos.ap-guangzhou.myqcloud.com/bugku/%E7%BB%86%E5%BF%83/OK6R%5BVSY%5B%7B0AL215GT2GR%245.png)
    心头一动，莫非又是一道挂掉的题？？！
    但和之前挂的题有点不一样，用御剑扫一下
    ![](https://blog-file-1302856486.cos.ap-guangzhou.myqcloud.com/bugku/%E7%BB%86%E5%BF%83/9%60S0%5B9Z%24~~7CR%5D1EBN3PTTO.png)
    扫出一个robots.txt，访问一波
    ![](https://blog-file-1302856486.cos.ap-guangzhou.myqcloud.com/bugku/%E7%BB%86%E5%BF%83/TRVX_OR7BM_%5D30%28%29W%7BSF%5BDW.png)
    还有个resusl.php页面，打开
    ![](https://blog-file-1302856486.cos.ap-guangzhou.myqcloud.com/bugku/%E7%BB%86%E5%BF%83/MON_0I~~NX9G%60%25I%5B7%29%7D~LBA.png)
    提示我们需要管理员，页面还有个get传值，那我们试试传值x=admin
    ![](https://blog-file-1302856486.cos.ap-guangzhou.myqcloud.com/bugku/%E7%BB%86%E5%BF%83/HZ%7B%5B_AJ5_VG%7DZBSEA4%2921NK.png)
    flag出来了！
    
36. ## 求getshell

    打开页面是一道文件上传题
    ![](https://blog-file-1302856486.cos.ap-guangzhou.myqcloud.com/bugku/%E6%B1%82getshell/YFQ0%40IG%40U%40S2_BJ0%7DD3TAH6.png)
    试过了很多种方法，做成图片马上传，改后缀，改content-type类型都是失败，也试了php的一些绕过姿势.php|.php5|.php4|.php3|.php2|.php1|.pHp|.pHp5|.pHp4|.pHp3|.pHp2|.pHp1等等

    后面找了资料发现上面还有个content-type头，multipart/form-data大写能绕过waf的严格检测，所以去试了一波
    ![](https://blog-file-1302856486.cos.ap-guangzhou.myqcloud.com/bugku/%E6%B1%82getshell/AD%28GHI7ZH1OLA%24%5DS_LC8880.png)

    总结：

    1.第一个content-type头大写绕过waf检测
    2.上传文件的后缀名改成php5绕过后缀检测
    3.上传的content-type头得是image类型满足图片的要求



