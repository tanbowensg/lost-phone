import Images from '../components/images';

const TEXT = {
  noty: {
    FIRST_NOTY: {
      icon: Images.wechat,
      name: '微信',
      time: '现在',
      content: '老婆: 今天是我的生日，你晚上还回不回来了？',
    },
  },
  apps: [
    [
      {
        name: '邮件',
        icon: Images.mail,
      },
      {
        name: '时间',
        icon: Images.clock,
      },
    ],
    [
      {
        name: '照片',
        icon: Images.photo,
      },
      {
        name: 'Facebook',
        icon: Images.facebook,
      },
    ],
    [
      {
        name: '知乎',
        icon: Images.zhihu,
      },
      {
        name: '天天打波利',
        icon: Images.ttdbl,
      },
    ],
  ],
  appsBottom: [
    {
      name: '信息',
      icon: Images.message,
    },
    {
      name: '电话',
      icon: Images.phone,
    },
    {
      name: '微信',
      icon: Images.wechat,
    },
    {
      name: '设置',
      icon: Images.settings,
    },
  ],
};

export default TEXT;
