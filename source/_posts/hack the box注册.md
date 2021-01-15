---
title: Hack The Box账号注册
comments: false
top_img: https://blog-file-1302856486.cos.ap-guangzhou.myqcloud.com/JUJ%24%609FE%5D81%28%60B_%40RUAGDRB%20.png
cover: https://blog-file-1302856486.cos.ap-guangzhou.myqcloud.com/JUJ%24%609FE%5D81%28%60B_%40RUAGDRB%20.png
abbrlink: 33946
---
## 引言

hack the box 是一个很有趣也很强大的网站，开始接触的时候就被里面的元素给吸引到了，同时，网站的注册也是让人能忍不住动手去探索一下，下面分享一下过程。

## 正文

打开网站注册的时候，提示需要自己入侵网站获取注册

![](https://cdn.jsdelivr.net/gh/dota-st/blog_file@master/psc.png)

![](https://cdn.jsdelivr.net/gh/dota-st/blog_file@master/13.jpg)

在下面的clickhere提示我们需要打开控制台查看，于是打开控制台，发现一个可疑的js文件，js文件带有inviteapi名字

![](https://cdn.jsdelivr.net/gh/dota-st/blog_file@master/132165.png)

跑去查看js文件源码

![](https://cdn.jsdelivr.net/gh/dota-st/blog_file@master/894.png)

发现function，console，log等关键字，可以猜测后面makeInviteCode是一个方法，需要我们在控制台打印，然后我们溜去控制台试试~

![](https://cdn.jsdelivr.net/gh/dota-st/blog_file@master/165123.png)

给出一串数据，还提示我们是rot13密文加密方式，于是我们去解解看

```python
import string  
 
upperdict = {}  
lowerdict = {}  
upperletters =string.ascii_uppercase
lowerletters =string.ascii_lowercase#：所有小写字母
  
  
dststr = []  
oristr = input('Enter string to rot13:')#版本3.0不能用raw_input
print('Your string ro en/crypt was :',oristr ) 
  
  
for i in range(0,len(lowerletters)):                       #把所有小写字母转为rot13  
	if i<13:  
		lowerdict[lowerletters[i]] = lowerletters[i+13]  
	else:  
		lowerdict[lowerletters[i]] = lowerletters[i-13]  
  
  
for i in range(0,len(upperletters)):                       #把所有大写字母转为rot13  
	if i<13:  
		lowerdict[upperletters[i]] = upperletters[i+13]  
	else:  
		lowerdict[upperletters[i]] = upperletters[i-13]  
  
  
for ch in oristr:  
	if ch in lowerdict:  
		dststr.append(lowerdict[ch])  
	elif ch in upperdict:  
		dststr.append(upperdict[ch])  
	else:  
		dststr.append(ch)  
dststr = ''.join(dststr)  
  
  
print('the rot13 string is:',dststr ) 
```

![](https://cdn.jsdelivr.net/gh/dota-st/blog_file@master/sff2132.png)

**解密结果：**

In order to generate the invite code, make a POST request to /api/invite/generate

要想获得注册邀请码，必须使用post方式向此处地址发送请求获取，于是我们马不停蹄得溜去发送请求~~

![](https://cdn.jsdelivr.net/gh/dota-st/blog_file@master/1231321.png)

返回一段被base64方式加密的密文，我们再次跑去解密base64

```python
import base64

str="SElNRFctSURTRUwtQkZUVEQtTFBJUkQtSFlTWUI="

temp = base64.b64decode(str)

print(temp.decode())
```

![](https://cdn.jsdelivr.net/gh/dota-st/blog_file@master/12315131.png)

这下子看起来没有问题了，我们可以愉快的拿着邀请码去注册了！！！