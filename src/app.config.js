export default defineAppConfig({
  pages: [
    'pages/active-record/index',
    'pages/active-record/detail/index',
    'pages/home/index',
    'pages/charm/index',
    'pages/consult/index',
    'pages/my/index',
  ],
  // subPackages: [
  //   {
  //     root: 'active-record',
  //     pages: ['index'],
  //   },
  // ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black',
  },
  tabBar: {
    color: '#666',
    selectedColor: '#437CFF',
    borderStyle: 'black',
    list: [
      {
        pagePath: 'pages/home/index',
        iconPath: './imgs/home_o.png',
        selectedIconPath: './imgs/home_s.png',
        text: '首页',
      },
      {
        pagePath: 'pages/charm/index',
        iconPath: './imgs/c_o.png',
        selectedIconPath: './imgs/c_s.png',
        text: '魅力重庆',
      },
      {
        pagePath: 'pages/consult/index',
        iconPath: './imgs/z_o.png',
        selectedIconPath: './imgs/z_s.png',
        text: '在线咨询',
      },
      {
        pagePath: 'pages/my/index',
        iconPath: './imgs/my_o.png',
        selectedIconPath: './imgs/my_s.png',
        text: '个人中心',
      },
    ],
  },
})
