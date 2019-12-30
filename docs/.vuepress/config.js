module.exports = {
  // 页面标题
  title: '阿航的个人博客',
  // 网页描述
  description: '所以我们不丧胆，外体虽然一天天毁坏，内心却一天新似一天。',
  head: [
    // 页面icon
    ['link', { rel: 'icon', href: '/icon.png' }]
  ],

  // 端口号
  port: 3000,
  markdown: {
    // 代码块行号
    lineNumbers: true
  },
  themeConfig: {
    // 最后更新时间
    lastUpdated: '最后更新时间',
    // 所有页面自动生成侧边栏
    sidebar: {
      '/mine/':[
        {
          title: '简历',
          collapsable: false,
          children: [
            '',
            'work',
            'project',
            'school'
          ]
        }
      ],
      '/knowledge/':[
        {
          title: '积累知识',
          collapsable: false,
          children: [
              '',
              'ES5',
              'vue的生命周期',
              'cordova'
          ]
        }
      ]
    },
    // 仓库地址
    repo: 'https://github.com/ZhengKehang/ZhengKehang.github.io.git',
    // 仓库链接label
    repoLabel: 'Github',
    // 编辑链接
    editLinks: true,
    // 编辑链接label
    editLinkText: '编辑此页',
    // 导航
    nav: [
      { text: '我的经历',link: '/mine/'},
      { text: '积累知识',link: '/knowledge/'},
      { text: '代码生活',link: '/mind/'},
    ]
  },
  configureWebpack: {
    resolve: {
      // 静态资源的别名
      alias: {
        '@images':'../images'
      }
    }
  }
}