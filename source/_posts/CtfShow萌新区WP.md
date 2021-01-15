---
title: CtfShow萌新区WP
tags: CTF
top_img: >-
  https://blog-file-1302856486.cos.ap-guangzhou.myqcloud.com/ctfshow%E8%90%8C%E6%96%B0/205458-155593769824cb.jpg
cover: >-
  https://blog-file-1302856486.cos.ap-guangzhou.myqcloud.com/ctfshow%E8%90%8C%E6%96%B0/205458-155593769824cb.jpg
abbrlink: 25127
date: 2021-01-15 20:46:22
---

# 前言

对，我就是萌新，哭哭。
萌新系列需要萌新码开启，按照第一题提示加群即可获得
<img src="https://blog-file-1302856486.cos.ap-guangzhou.myqcloud.com/ctfshow%E8%90%8C%E6%96%B0/DDB74BA5D9F54D97E757A1B862D52268.gif" width = "200" height = "200" div align=left />


# crypto

## 密码1

给出了一串16进制的数据，我们先转换成str
![](https://blog-file-1302856486.cos.ap-guangzhou.myqcloud.com/ctfshow%E8%90%8C%E6%96%B0/%E5%AF%86%E7%A0%811/_FDUR7%7B_ZR%7BCBF%28LSX9%5D69S.png)
得到一串base64编码的数据，我们再去解一下base64
![](https://blog-file-1302856486.cos.ap-guangzhou.myqcloud.com/ctfshow%E8%90%8C%E6%96%B0/%E5%AF%86%E7%A0%811/J%25OCNJY%40%29BW%7D%5DBVU%29Q_P8PS.png)
解码后得到一串栅栏密码，再去解一下
![](https://blog-file-1302856486.cos.ap-guangzhou.myqcloud.com/ctfshow%E8%90%8C%E6%96%B0/%E5%AF%86%E7%A0%811/%28Y5DCLQXOI%24%29MQ7DLZA36%288.png)
在栏数为19的时候得到flag

~~~
KEY{dffb06a33eeeb0d259c84bd8cf146d08-}
~~~

## 密码2

![](https://blog-file-1302856486.cos.ap-guangzhou.myqcloud.com/ctfshow%E8%90%8C%E6%96%B0/%E5%AF%86%E7%A0%812/IO2LW3_4X%24VPD56%25%5D422DWS.png)
我们去看一下键盘，发现被rdcvbg 2qase3 6tghu7分别包围的键是f、w和y
于是按照格式得到flag

```
KEY{fwy}
```

## 密码3

题目给出一段字符，看起来是莫斯密码

```
-- --- .-. ... . ..--.- .. ... ..--.- -.-. --- --- .-.. ..--.- -... ..- - ..--.- -... .- -.-. --- -. ..--.- .. ... ..--.- -.-. --- --- .-.. . .-. ..--.- -- -- -.. -.. -- -.. -- -.. -- -- -- -.. -.. -.. /-- -.. -- -.. -.. --/ -- -- -- -- -- /-- -.. -.. -- -.. -- /-- -.. -.. -- 
```

解密后得到

~~~
MORSEnullISnullCOOLnullBUTnullBACONnullISnullCOOLERnullMMDDMDMDMMMDDDMDMDDMMMMMMMDDMDMMDDM
~~~

结合题目提示培根，只处理尾部M和D，将M转换成A，D转换成B

~~~
AABBABABAAABBBABABBAAAAAAABBABAABBA
~~~

再进行培根密码解密
![](https://blog-file-1302856486.cos.ap-guangzhou.myqcloud.com/ctfshow%E8%90%8C%E6%96%B0/%E5%AF%86%E7%A0%813/2719%7B%7D%24~3%5BWB_M%28I%291N%5DNL2.png)

## 密码4

给出一串base64编码，去解码一下
![](https://blog-file-1302856486.cos.ap-guangzhou.myqcloud.com/ctfshow%E8%90%8C%E6%96%B0/%E5%AF%86%E7%A0%814/Z0_%7D%28ACQDPSWIDCT%7B7ZN%24_F.png)
再次base家族base85解密
![](https://blog-file-1302856486.cos.ap-guangzhou.myqcloud.com/ctfshow%E8%90%8C%E6%96%B0/%E5%AF%86%E7%A0%814/04JMGQ%293%28%60W39UZ%24PK~F%5DUT.png)
得到flag

~~~
flag{base_base_base}
~~~



# misc

## 萌新_隐写2

下载文件得到一个加密的zip压缩包
![](https://blog-file-1302856486.cos.ap-guangzhou.myqcloud.com/ctfshow%E8%90%8C%E6%96%B0/%E8%90%8C%E6%96%B0%E9%9A%90%E5%86%992/E%296IXVG444M%24KA5B1%25%29_1XN.png)
提示我们是密码是生日，所以最长有8位数字，直接压缩包爆破
![](https://blog-file-1302856486.cos.ap-guangzhou.myqcloud.com/ctfshow%E8%90%8C%E6%96%B0/%E8%90%8C%E6%96%B0%E9%9A%90%E5%86%992/KY4P%25ODWTF1NV%7B1HAWHF%7DU3.png)
得到压缩包密码为：19981000
打开压缩包后得到flag

~~~
flag{brute_force}
~~~

## 萌新隐写3

这题直接打开图片地址，就有flag，emmm
![](https://blog-file-1302856486.cos.ap-guangzhou.myqcloud.com/ctfshow%E8%90%8C%E6%96%B0/%E8%90%8C%E6%96%B0%E9%9A%90%E5%86%993/B9XXQPT35%7BX4%40%7BFNUL8BA6Y.png)

~~~
flag{xinti_gkd}
~~~

## 萌新隐写4

下载的是一个doc文档
![](https://blog-file-1302856486.cos.ap-guangzhou.myqcloud.com/ctfshow%E8%90%8C%E6%96%B0/%E8%90%8C%E6%96%B0%E9%9A%90%E5%86%994/QQ%E6%88%AA%E5%9B%BE20210115224404.png)
这里光标停在下边多一行，猜测可能有文字被隐藏了，所以我们去选项打开显示一下隐藏文字
![](https://blog-file-1302856486.cos.ap-guangzhou.myqcloud.com/ctfshow%E8%90%8C%E6%96%B0/%E8%90%8C%E6%96%B0%E9%9A%90%E5%86%994/DRO%7DID7PMHA8X%285P%24X%7D%254%5B6.png)
得到flag
![](https://blog-file-1302856486.cos.ap-guangzhou.myqcloud.com/ctfshow%E8%90%8C%E6%96%B0/%E8%90%8C%E6%96%B0%E9%9A%90%E5%86%994/7G8X7YG1%601~MKYZZO2F%40%282J.png)
当然还有一种办法，就是crtl+a全选复制到外面(隐藏的文字一起被选中)，就可以看到flag

~~~
flag{word_stega}
~~~

