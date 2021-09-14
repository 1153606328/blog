<template>
	<div class="">
		<div class="vlog_box">
			<div class="vlog" v-for="(item,index) in vlogArr" :key="index" >
				<div class="vlog_img" :style="{backgroundImage: 'url('+qnyUrl + item.src + ')'}" @click="toUrl(item.url)">
				</div>
				<div class="vlog_title">
					{{item.name}}
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "",
		data() {
			return {
					qnyUrl:'http://qny.panhuaqing.cn/',//七牛云图片地址
					vlogArr:[
						{name:'秋天的第一杯奶茶',src:'vlog20210808.jpg',url:'BV1mo4y1m7tm',date:'2021-8-8'},
						{name:'金沙水漂流',src:'vlog20210530.jpg',url:'BV1mh411Y78H',date:'2021-5-30'},
						{name:'狗子听得懂人话吗',src:'vlog20210125.jpg',url:'BV1jr4y1M7vN/',date:'2021-1-25'},
						{name:'狗子成长日记vlog',src:'vlog20200928.jpg',url:'BV1ea4y1L7Hb/',date:'2020-9-28'},
						{name:'超市囤货vlog',src:'vlog20200505.jpg',url:'BV1944y187xK/',date:'2020-5-5'},
						{name:'深圳骑行vlog',src:'vlog20200501.jpg',url:'BV14L4y1h7dD/',date:'2020-5-1'},
						{name:'深圳公寓航拍',src:'vlog20200425.jpg',url:'BV1Qf4y1A7tN/',date:'2020-4-25'},
						{name:'新手转场剪辑vlog',src:'vlog20200321.jpg',url:'BV1SV411y7as/',date:'2020-3-21'},
						{name:'2020回家过年',src:'vlog20200122.jpg',url:'BV1tf4y1A77u/',date:'2020-1-22'},
						{name:'2020元旦vlog',src:'vlog20200101.jpg',url:'BV1hq4y1T7GJ/',date:'2020-1-1'},
						{name:'2019感谢遇见',src:'vlog20191224.jpg',url:'BV1bv411P7Yj/',date:'2019-12-24'},
						{name:'广州长隆野生动物园',src:'vlog20191004.jpg',url:'BV1yq4y1T7KQ/',date:'2019-10-4'},
						{name:'涠洲岛',src:'vlog20190721.jpg',url:'BV19L4y1Y7je/',date:'2019-07-21'},
					]
				}
			},
			methods:{
				//跳转到外部链接
				toUrl(url){//
					 window.location.href ='https://www.bilibili.com/video/'+url;
				}
			}
	}
</script>

<style lang="scss" scoped>
.vlog_box{
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	.vlog_img{
		width: 100%;
		height: 220px;
		background-size: 100% 100%;
		background-repeat: no-repeat;
		// margin-bottom: 10px;
	}
	.vlog{
		margin-bottom: 30px;
		text-align: center;
		box-shadow:0 0 9px 1px #999;
	}
	.vlog_title{
		margin-top: 5px;
	}
	@media (max-width:400px) {
		//屏幕小于400px 
		.vlog{
			width: 100%;
			height: 220px;
		}
	}
	@media (min-width:401px) {
		//屏幕大于400px 
		.vlog{
			width: 280px;
			height: 220px;
		}
	}
}
</style>
