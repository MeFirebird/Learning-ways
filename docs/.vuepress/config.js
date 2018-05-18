module.exports = {
    dest: 'vuepress',
    locales: {
        '/': {
            lang: 'zh-CN',
            title: ' ',    // 敲一个空格  不显示默认的vuepress啦
            description: '选择了远方，便只顾风雨兼程'
        }
    },
    serviceWorker: true,
    theme: 'vue',
    themeConfig: {
        repo: 'vuejs/vuepress',   // 这个要改为自己的
        editLinks: true,
        docsDir: 'docs',
        locales: {
            '/': {
                editLinkText: '在 GitHub 上编辑此页',
                lastUpdated: '上次更新',
                nav: [
                    {
                        text: '学习',
                        link: '/learn/'
                    },
                    {
                        text: '生活',
                        link: '/life/'
                    },
                    {
                        text: '版本',
                        items: [
                            {text: '0.0.1', link: '/version/'},
                            {text: '1.0.0', link: '/version/1.0.0/'}
                        ]
                    }
                    // {
                    //     text: '版本',     // 这里做成下拉菜单
                    //     link: '/default-theme-config/'      // 这里的链接与文件夹对应
                    // }
                ]
            }
        },
        sidebar: {
            '/learn/': [             // 多个侧边栏  然后进行侧边栏分组
                {
                    title: '前端',
                    collapsable: true,
                    children: [
                        ['frontEnd/1', '1.JavaScript DOM编程艺术'],
                        ['frontEnd/2', '2.md.锋利的jQuery'],
                        ['frontEnd/3', '3.JavaScript语言精粹'],
                        ['frontEnd/4', '4.JavaScript权威指南'],
                        ['frontEnd/5', '5.JavaScript高级程序设计'],
                        ['frontEnd/6', '6.ECMAScript6入门（阮一峰）'],
                        ['frontEnd/7', '7.深入浅出NodeJS']
                    ]
                },
                {
                    title: 'Java',
                    collapsable: true,
                    children: [
                        ['java/1', '1.疯狂java讲义'],
                        ['java/2', '2.JavaEE开发技术与案例教程'],
                        ['java/3', '3.Java编程思想'],
                        ['java/4', '4.数据库系统概论'],
                    ]
                },
                {
                    title: '算法',
                    collapsable: true,
                    children: [
                        ['algorithm/1', '1.算法图解'],
                        ['algorithm/2', '2.算法导论'],
                    ]
                },
                {
                    title: '协议 & 网路',
                    collapsable: true,
                    children: [
                        ['proto&net/1', '1.HTTP权威指南'],
                        ['proto&net/2', '2.网络是怎么连接的'],
                        ['proto&net/3', '3.计算机网络'],
                        ['proto&net/4', '4.图解HTTP']
                    ]
                },
                {
                    title: '操作系统',
                    collapsable: true,
                    children: [
                        ['os/1', '1.鸟哥的Linux私房菜'],
                    ]
                },
                {
                    title: '编程思想与架构',
                    collapsable: true,
                    children: [
                        ['thinkArch/1', '1.代码大全（第二版)'],
                        ['thinkArch/2', '2.编程珠玑'],
                        ['thinkArch/3', '3.阿里巴巴中台战略思想与架构实战'],
                    ]
                },
                {
                    title: 'Android',
                    collapsable: true,
                    children: [
                        ['android/1', '1.疯狂android讲义'],
                    ]
                },
                ['book1', "end"]
            ],
            '/life/': [

            ],
            '/': [
                '',
                '1'
            ]
        }
    },
    configureWebpack: {
        resolve: {
            alias: {}
        }
    },
    markdown: {
        // 进阶配置VuePress 使用 markdown-it 来渲染 Markdown，上述大多数的拓展也都是通过自定义的插件实现的。
        // 想要进一步的话，你可以通过 .vuepress/config.js 的 markdown 选项，来对当前的 markdown-it 实例做一些自定义的配置：
    }
};

