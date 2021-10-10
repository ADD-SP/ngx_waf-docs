---
title: 测试
lang: zh-CN
---

# 测试

## 简易测试

运行下列命令，如果输出 403 则表示模块正常工作。

```shell
curl -I -o /dev/null --user-agent bench -s -w "%{http_code}\\n" https://example.com/
```

## 自动测试

本项目附带了许多测试用例，你可以通过下面的指令来运行全部的用例。

```shell
# 这行命令的执行时间比较长，但是以后再测试的时候就不需要运行了。
cpan Test::Nginx

# 你需要指定一个临时目录。
# 如果目录不存在会自动创建。
# 如果目录已经会被存在则会先**删除**再创建。
export MODULE_TEST_PATH=/path/to/temp/dir

# 如果你安装了动态模块则需要指定动态模块的绝对路径，反之则无需执行这行命令。
export MODULE_PATH=/path/to/ngx_http_waf_module.so

cd ./test/test-nginx
sh ./init
sh ./start.sh ./t/*.t
```

正常情况下所有的用例都会通过，如果没有通过请告诉我们。

## 性能测试

### 示例测试

#### 测试说明

* ngx_waf v5.1.1。
* 使用了约 21 万条 IPV4 白名单规则。
* 使用了约 21 万条 IPV4 黑名单规则。
* 使用了约 48000 条 IPV6 白名单规则。
* 使用了约 48000 条 IPV6 黑名单规则。
* 使用了十万条 URL 黑名单规则，通过随机字符串生成器获得。
* 使用了十万条 URL 白名单规则，通过随机字符串生成器获得。
* 使用了 5000 个随机字符串，通过随机字符串生成器获得。每次请求时从中随机挑选一个作为 URI 发送 GET 请求。
* 测试持续 30 分钟。
* 一共测试两次，一次开启防火墙，一次关闭防火墙。

::: tip 注意

测试用的 IP 是从 [IPdney](https://www.ipdeny.com/ipblocks/) 获得的。

:::

测试时的配置

```nginx
master_process on;
worker_processes  1;

http {
    server {
        listen 80;
        server_name  localhost;

        access_log off;
        
        waf on;
        waf_mode DYNAMIC !CC !POST;
        waf_rule_path /usr/local/src/ngx_waf/rules/;
        waf_cache capacity=6000 interval=1h percent=50;

        location / {
            default_type text/html;
            return 200 'hello';
        }
    }
}
```

#### 测试命令

```sh
wrk -c 100 -d 30m -t 1 -s test/wrk/rand.lua --latency http://localhost/ -- /path/to/rand-str.txt
```

#### 测试结果

开启防火墙后 RPS（每秒请求数） 降低了约 4%。

```sh
# waf on;
wrk -c 100 -d 30m -t 1 -s ngx_waf/test/wrk/rand.lua --timeout 1m --latency http://localhost/ -- /usr/local/src/ngx_waf/txt.txt

Running 30m test @ http://localhost/
  1 threads and 100 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency    78.56ms  340.74ms   3.97s    94.52%
    Req/Sec    67.33k    25.42k   95.38k    86.58%
  Latency Distribution
     50%    1.14ms
     75%    1.48ms
     90%    4.84ms
     99%    1.97s
  120532104 requests in 30.00m, 17.06GB read
Requests/sec:  66959.26
Transfer/sec:      9.71MB


# waf off;
wrk -c 100 -d 30m -t 1 -s ngx_waf/test/wrk/rand.lua --timeout 1m --latency http://localhost/ -- /usr/local/src/ngx_waf/txt.txt

Running 30m test @ http://localhost/
  1 threads and 100 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency   803.44us    0.87ms  40.32ms   95.23%
    Req/Sec    70.69k    10.46k  105.82k    81.15%
  Latency Distribution
     50%  590.00us
     75%  760.00us
     90%    1.25ms
     99%    4.25ms
  126562158 requests in 30.00m, 17.92GB read
Requests/sec:  70310.93
Transfer/sec:     10.19MB
```


### 自行测试

你可以使用 [wrk](https://github.com/wg/wrk) 对本模块进行性能测试。

本项目提供了 wrk 的 lua 脚本用来辅助测试，脚本的路径为 `test/wrk/rand.lua`，其功能是使用随机的 URI 发送 GET 请求。你需要为其提供一个含有一定数量的随机字符串的文本文件，每行一个随机字符串。然后通过下面的命令进行测试。

```sh
wrk -c 100 -d 1m -t 1 -s test/wrk/rand.lua --latency http://localhost/ -- /path/to/rand-str.txt
```