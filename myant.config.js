const { join } = require('path')

module.exports = {
  /**
   * 小程序自动批量打包和上传的相关配置
   */
  miniProgramBundle: [
    {
      autoPublish: false, // 是否自动上传
      appId: '' // 小程序的APPID
    }
  ],

  build: {
    mobile: {
      chainWebpack: (config) => {},
      webpack: {}
    },
    desktop: {},
    mini: {}
  },

  site: {
    defaultLang: 'zh-CN',
    outputDir: join(__dirname, 'dist'),
    publicPath: '',
    locales: {
      'zh-CN': {
        title: 'Myant',
        logo: 'http://hh-oss-picture.miyapay.com/box/e0ad6809af6c6738a84ad79b824980cf.png',
        icon: 'http://hh-oss-picture.miyapay.com/box/9ee38309cc66ea32fc46945c0cdc297d.svg',
        description: 'myant微信小程序组件库',
        langLabel: '中文',
        searchConfig: {
          apiKey: '',
          indexName: 'myant',
          placeholder: '搜索文档...'
        },
        nav: [
          {
            title: '基础组件',
            items: [
              {
                path: 'my-button',
                title: 'my-button 按钮'
              },
              {
                path: 'my-icon',
                title: 'my-icon 图标'
              },
              {
                path: 'my-badge',
                title: 'my-badge 徽标'
              },
              {
                path: 'my-avatar',
                title: 'my-avatar 头像'
              },
              {
                path: 'my-progress',
                title: 'my-progress 进度条'
              },
              {
                path: 'my-tag',
                title: 'my-tag 标签'
              },
              {
                path: 'my-loading',
                title: 'my-loading 加载'
              },
              {
                path: 'my-tabbar',
                title: 'my-tabbar 标签栏'
              },
              {
                path: 'my-sticky',
                title: 'my-sticky 粘性布局'
              }
              /* {
                path: 'cell',
                title: 'Cell 单元格',
              },
              /*
              {
                path: 'layout',
                title: 'Layout 布局',
              }, */
            ]
          }
          /* {
            title: '表单组件',
            items: [
              {
                path: 'input',
                title: 'Input 输入框',
              },
              {
                path: 'textarea',
                title: 'textarea 文本框',
              },
            ],
          }, */
        ]
      }
    }
  }
}
