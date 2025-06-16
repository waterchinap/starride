---
title: 关于本站
---

请点开导航栏中“我的骑行”查看。

-------

本站由astro下面的子项目[starlight](https://starlight.astro.build/getting-started/)搭建而成。

## 关键点：

- 内容文件为markdown格式，必须全部位于src/content/docs目录下。
- 如果不想一个个目录创建侧栏导航，需要把所有的文件夹放在一个目录下。
- 所有的内容文件都必须要加加frontmatter。并且必须填写title字段。
- 所有隐藏文件夹都是被忽略的，不会显示在导航栏。


## 创建流程

虽然很简单，但记录一下以防忘记。

前提条件：
1. github账号。
2. cloudflare账号。
3. 域名。
4. vscode。

创建项目：
1. 按starlight的文档创建项目。
2. 将自己的内容放入src/content/docs目录下。
3. 运行npm run dev，查看是否正常。
4. 在code中提交后，如果没有连接github仓库，code可以发布到github仓库。
5. 登录cloudflare, 创建一个新的worker/pages项目。
6. 在新项目中连接github仓库。进行部署。
7. 配置域名。完成后会提示可以配置自己的域名。如果域名已经提交cf托管，则输入完整的二级域名就可以配置好自己的域名了。
8. 一般几分钟后就可以访问了。