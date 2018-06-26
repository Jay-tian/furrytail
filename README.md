# furrytail

## 起步
### 安装依赖
```
    yarn
```
### 启动本地服务
```
    npm run dev
```

### 配置nginx
代理静态资源到webpackdev-serverss
```
   server {
        server_name www.koa-easy.com;

        location ~ ^/furrytail/dist/* {
        if (-f /var/www/furrytail/dev.lock){
            proxy_pass http://127.0.0.1:8082;
        }
            if (!-f /var/www/furrytail/dev.lock){
            proxy_pass http://127.0.0.1:3000;
            }
        }

        location / {
            proxy_pass http://127.0.0.1:3000;
        }
    }
```
### 配置文件
parameters.js
```
  rootPath: 项目根路径
  serverPath: 服务端文件路径
  version: 版本号,
  distAddress: 远程地址，用户动静态分离
```

## 开发说明
```
/server/router 路由目录
/view/ 模版目录
/client/ 前端资源目录
/controller 服务端控制层
/common 工具类
```