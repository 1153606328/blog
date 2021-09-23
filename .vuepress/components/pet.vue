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
						{name:'狗子听得懂人话吗',src:'vlog20210125.jpg',url:'BV1jr4y1M7vN/',date:'2021-1-25'},
						{name:'狗子成长日记vlog',src:'vlog20200928.jpg',url:'BV1ea4y1L7Hb/',date:'2020-9-28'},

					],
				
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
		border-radius: 10px 10px 0 0;
	}
	.vlog{
		padding-bottom: 30px;
		margin-bottom: 15px;
		text-align: center;
		box-shadow:0 0 9px 1px #999;
		border-radius: 10px;
	}
	.vlog_title{
		margin-top: 5px;
	}
}

//适配
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
</style>
