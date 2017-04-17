# ltp-cloud

> 目前采用回调模式，会在近期加入返回值模式。 

# 安装
```
    npm i ltp-cloud --save
```
# 使用
```
    "use strict";
    const nlp = require('ltp-cloud');
    nlp.configure({
        api_key : ""
    });
    nlp.cut("我爱你，我真的十分爱你!",(err,data) => {
        console.log(data)
    })
```