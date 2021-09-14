module.exports = {
  "title": "Pan Blog",
  "description": "愿世界温柔以待",
  "dest": "public",//博客部署时输出的文件夹
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/favicon.ico"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ]
  ],
  "theme": "reco", //vuepress挂载的主题
  "themeConfig": {//导航栏
    "nav": [
      {
        "text": "首页",
        "link": "/",
        "icon": "reco-home"
      },
	  {
	    "text": "笔记",
	  	"link": "/docs/notes/",
	    "icon": "reco-document",
	  },
	  {
	    "text": "生活",
	    "link": "/blogs/life/Vlog",
	    "icon": "reco-message"
	  },
	  {
	    "text": "旅程",
	    "link": "/blogs/journey/",
	    "icon": "reco-eye"
	  },
      {
        "text": "Time",
        "link": "/timeline/",
        "icon": "reco-date"
      },
     
      {
        "text": "GitHub",
        "icon": "reco-message",
		"link": "https://github.com/recoluan",
      }
    ],
	//侧边栏设置
	// "subSidebar": 'auto',//在所有页面中启用自动生成子侧边栏，原 sidebar 仍然兼容
    "sidebar": {
		//笔记
      "/docs/notes/": [
        "",
		{
		    title: 'Vue',
		    collapsable: true,
		    children: [
				'/docs/notes/vue/Axios',
				'/docs/notes/vue/VueCli4',
				'/docs/notes/vue/Vuex_getters',
				'/docs/notes/vue/Vue_V',
		    ]
		},
		{
		    title: 'VuePress',
		    collapsable: true,
		    children: [
		        '/docs/notes/vuepress/VuePress',
				'/docs/notes/vuepress/FAQ'
		    ]
		},
		{
		    title: 'Uniapp',
		    collapsable: true,
		    children: [
		        // '/docs/notes/uniapp/Uniapp',
		    ]
		},
		
      ],
	  //生活
	  "/blogs/life/": [
		  {
		      title: 'Vlog',
		      collapsable: true,
		      children: [
		          '/blogs/life/Vlog',
		      ]
		  }
		  ],
		//旅程
		"/blogs/journey/": [
				  "",
				  {
					 title: '2021',
					 collapsable: true,
					 children: [
						'/blogs/journey/2021/note01',
						'/blogs/journey/2021/note02',
						'/blogs/journey/2021/note03',
					 ] 
				  },
				  {
					title: '2020',
					collapsable: true,
					children: [
						'/blogs/journey/2020/note01',
						] 
				  },
				  {
					title: '2019',
					collapsable: true,
					children: [
						'/blogs/journey/2019/note01',
						'/blogs/journey/2019/note02',
						'/blogs/journey/2019/note03',
						'/blogs/journey/2019/note04',
						'/blogs/journey/2019/note05',
						'/blogs/journey/2019/note06',
						] 
				  },
				  {
					title: '2018',
					collapsable: true,
					children: [
						'/blogs/journey/2018/note01',
						'/blogs/journey/2018/note02',
						] 
				  },
				  {
					title: '2016',
					collapsable: true,
					children: [
						'/blogs/journey/2016/note01',
						] 
				  }
				  ]
    },
    "type": "blog",
	// 博客设置
    // "blogConfig": {
    //   "category": {
    //     "location": 2,// 在导航栏菜单中所占的位置，默认2
    //     "text": "分类"// 默认 “分类”
    //   },
    //   "tag": {
    //     "location": 3,// 在导航栏菜单中所占的位置，默认3
    //     "text": "标签" // 默认 “标签”
    //   }
    // },
	 //友情链接
    "friendLink": [
      {
        "title": "午后南杂",
        "desc": "Enjoy when you can, and endure when you must.",
        "email": "1156743527@qq.com",
        "link": "https://www.recoluan.com"
      },
      {
        "title": "vuepress-theme-reco",
        "desc": "A simple and beautiful vuepress Blog & Doc theme.",
        "avatar": "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
        "link": "https://vuepress-theme-reco.recoluan.com"
      }
    ],
	//博客自定义LOGO
    "logo": "/logo.png",
	 // 搜索设置
    "search": true,
    "searchMaxSuggestions": 10,
	 // 自动形成侧边导航
	    // sidebar: 'auto',
	    // 最后更新时间
    "lastUpdated": "Last Updated",
	// 作者
    "author": "",
	 // 作者头像
    "authorAvatar": "/avatar.jpg",
	// 备案号
    "record": "桂ICP备2020009713号",
	// 项目开始时间
    "startYear": "2016",
	//评论插件
	"valineConfig": {
	     "appId": 'vppnyczaSSTaj4iFn5Y8kY20-9Nh9j0Va',// your appId
	     "appKey": '3Xk2TOkMx6ltQyUBSd1hyttp', // your appKey
	   },
  },
  "plugins": [
  	[
  	      //鼠标点击特效 先安装在配置， npm install vuepress-plugin-cursor-effects --save
  	      "cursor-effects",
  	      {
  	        size: 3,                    // size of the particle, default: 2
  	        shape: ['circle'],  // shape of the particle, default: 'star'
  	        zIndex: 999999999           // z-index property of the canvas, default: 999999999
  	      }
  	    ],
  ],
  "markdown": {
    "lineNumbers": true
  },

}