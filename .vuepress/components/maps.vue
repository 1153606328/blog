<template>
  <div class="">
  	<div :style="{'height':height}" class="map" id="map" v-loading="true">
  		  
  	</div>
	<div class="list">
		<div class="city" v-for="(item,index) in cityArr" :key="index" >
			<div class="city_img" :style="{backgroundImage: 'url(' + item.src + ')'}" @click="tolink(item.link)">		{{item.name}}
			</div>
		</div>
	</div>
  </div>
</template>
<script>
import star from '../public/img/star.png' //以import的方式导入图片文件

export default {
	name:"",
  data() {
    return {
      height: 0,
      width: 0,

      address: [
        ['越南河内', 105.84009, 21.03438],
        ['越南岘港', 108.1716007, 16.0472484],
        ['越南胡志明', 106.4143502, 10.7553405],
        '重庆市重庆北站',
        '广东省广州市',
		'广东省深圳市',
        '广西省南宁市',
		'广西省北海市',
		'广西省桂林市',
		'广西省防城港市',
		
      ],
	  cityArr:[
		  {name:"重庆",src:'http://qny.panhuaqing.cn/IMG_20210502_150546_mix01.jpg',link:'/blogs/journey/2021/note01'},
	  ]
	  
    }
  },
  mounted() {
    this.height = window.innerHeight - 58 + 'px'
    this.$nextTick(function() {
      let _this = this
      _this.loadScript('cwQrdXHx3i0CxyxmMzxZs4WUmHLeNzEi').then(BMap => {
        var map = new BMap.Map('map')
        var point = new BMap.Point(120.19, 30.26,15)
        map.centerAndZoom(point, 5)

        map.addControl(
          new BMap.NavigationControl({ type: BMAP_NAVIGATION_CONTROL_SMALL })
        )

        map.enableScrollWheelZoom(true)
        map.enableDoubleClickZoom(true)
        map.setMapStyleV2({
          styleId: '6ffa0308728a7656ae065beced2d4dc7'//地图样式id
        })

        const deviceSize = new BMap.Size(17, 17) //图标大小
        function addMarker(point) {
          // 创建图标对象
          var myIcon = new BMap.Icon(star, deviceSize, {
            imageSize: deviceSize
          })
          // 创建标注对象并添加到地图
          var marker = new BMap.Marker(point, { icon: myIcon })
          map.addOverlay(marker)
        }
        function addPoint(data) {
          let point = new BMap.Point(data[1], data[2])
          addMarker(point)
        }

        let myGeo = new BMap.Geocoder()
        for (let i = 0; i < _this.address.length; i++) {
          if (typeof _this.address[i] == 'object') {
            addPoint(_this.address[i])
          } else {
            myGeo.getPoint(_this.address[i], function(point) {
              if (point) {
                addMarker(point)
              }
            })
          }
        }
      })
    })
  },
  methods: {
    loadScript(ak) {
      return new Promise(function(resolve, reject) {
        var script = document.createElement('script')
        script.type = 'text/javascript'
        script.src =
          'https://api.map.baidu.com/api?v=3.0&ak=' + ak + '&callback=init'
        script.onerror = reject
        document.head.appendChild(script)

        if (typeof BMap != 'undefined') {
          resolve(BMap)
        } else {
          setTimeout(function() {
            resolve(BMap)
          }, 1000)
        }
      })
    },
	//跳转路由
	tolink(link){
		this.$router.push({path:link})
	}
  }
}
</script>
<style lang="scss" scoped>
.map {
  width: 100%;
}
.list{
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	margin-top: 20px;
	.city_img{
		width: 100%;
		height: 220px;
		background-size: 100% 100%;
		background-repeat: no-repeat;
		// margin-bottom: 10px;
		text-align: center;
		font-size: 60px;
		line-height: 220px;
	}
	@media (max-width:400px) {
		//屏幕小于400px 
		.city{
			width: 100%;
			height: 200px;
			// margin-bottom: 10px;
			padding-bottom: 30px;
			color: #fff;
			text-align: center;
		}
	}
	@media (min-width:401px) {
		//屏幕大于400px 
		.city{
			width: 280px;
			height: 220px;
			margin-bottom: 10px;
			color: #fff;
			text-align: center;
		}
	}
}
</style>