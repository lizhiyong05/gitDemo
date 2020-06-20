<template>
	<!-- 视频 -->
	<view>
		<section>
			<view class="video-cotainer" v-for="(item,index) in videoList" :key="index">
				<view class="user-info">
					<image src="@/static/image/video/head-portrait.jpg"></image>
					<view class="info">
						<h3>赵先生</h3>
						<p>2019-07-20 12:20</p>
					</view>
				</view>
				<view class="title">AntV 是蚂蚁金服全新一代数据可视化解决方案，致力于提供一套简单方便、专业可靠、无限可能的数据可视化最佳实践。</view>
				<view class="video-play">
					<videoComponent :videoInfo="item" class="video-item" @videoStart="videoStart" @videoEnd="videoEnd"></videoComponent>
				</view>
				<view class="video-fun">
					<view class="fun1" @click="tiggerFun1">
						<image src="@/static/image/video/video-icon1.png"></image>
						<text>123</text>
					</view>
					<view class="fun2">
						<image src="@/static/image/video/video-icon2.png"></image>
						<text>123</text>
					</view>
					<view class="fun3">
						<image src="@/static/image/video/video-icon3.png"></image>
						<text>123</text>
					</view>
				</view>
			</view>
		</section>
	</view>
</template>

<script>
	import videoComponent from '@/components/videoComponent.vue'
	export default {
		components: {
			videoComponent
		},
		data() {
			return {
				videoContext: '',
				videoSrc: '',
				videoList: [{
						id: 'myVideo0',
						videoUrl: 'http://vfx.mtime.cn/Video/2019/02/04/mp4/190204084208765161.mp4', // 视频地址
						poster: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1589987130529&di=bbfefde491f834f5f2603efeadc594aa&imgtype=0&src=http%3A%2F%2Fa3.att.hudong.com%2F14%2F75%2F01300000164186121366756803686.jpg', // 封面地址
					},
					{
						id: 'myVideo1',
						videoUrl: 'http://vfx.mtime.cn/Video/2019/03/19/mp4/190319222227698228.mp4', // 视频地址
						poster: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=4018557288,1217151095&fm=26&gp=0.jpg', // 封面地址
					},
					{
						id: 'myVideo2',
						videoUrl: 'http://vfx.mtime.cn/Video/2019/03/19/mp4/190319222227698228.mp4', // 视频地址
						poster: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=4018557288,1217151095&fm=26&gp=0.jpg', // 封面地址
					}
				]
			};
		},
		methods: {
			recordVideo() { // 录制视频

			},
			tiggerFun1() { // 点赞
				
			},
			videoStart(currentId) { // 视频开始
				this.videoContent = uni.createVideoContext(currentId)
				let trailer = this.videoList
				for (let i = 0; i < trailer.length; i++) {
					if (trailer[i].id !== currentId) {
						uni.createVideoContext(trailer[i].id).pause();
					}
				}
			},
			videoEnd(currentId) { // 视频结束
				this.videoContext = uni.createVideoContext(currentId)
				this.videoContext.seek(0); // 回到开头
			}
		},
		onHide() {
			for (let i = 0; i < this.videoList.length; i++) {
				uni.createVideoContext(this.videoList[i].id,this).pause();  
			}
		}
	}
</script>

<style lang="scss" scoped>

	page {
		background: #F5F5F5;
	}
	
	header {
		padding-top: 50rpx;
		height: 88rpx;
		line-height: 88rpx;
		border-bottom: 1px solid #e5e5e5;
		display: flex;
		background: #ffffff;
		position: fixed;
		left: 0;
		top: 0;
		right: 0;
		z-index: 1;

		.head-portrait {
			flex: 2.5;

			image {
				width: 50rpx;
				height: 50rpx;
				border-radius: 50%;
				vertical-align: middle;
				margin-left: 26rpx;
			}
		}

		.title {
			flex: 5;
			text-align: center;
			font-size: 38rpx;
			color: #333333;
			font-weight: 500;
		}

		.record {
			flex: 2.5;
			text-align: right;

			image {
				width: 45rpx;
				height: 31rpx;
				margin-right: 24rpx;
				vertical-align: middle;
			}
		}
	}
	.video-cotainer {
		margin-bottom: 20rpx;
		padding: 0 30rpx;
		background: #ffffff;
		overflow: hidden;
		
		.user-info {
			margin-top: 32rpx;
			display: flex;

			image {
				width: 80rpx;
				height: 80rpx;
				border-radius: 50%;
			}

			.info {
				padding-left: 26rpx;

				h3 {
					color: #333333;
					font-size: 32rpx;
					line-height: 45rpx;
				}

				p {
					color: #999999;
					font-size: 24rpx;
					padding-top: 4rpx;
					line-height: 33rpx;
				}
			}
		}

		.title {
			color: #333333;
			font-size: 30rpx;
			line-height: 46rpx;
			margin: 20rpx 0;
		}

		.video-play {
			width: 100%;
			height: 388rpx;

			.video-item {
				width: 100%;
				height: 100%;
				border-radius: 12rpx;
				overflow: hidden;
			}
		}

		.video-fun {
			display: flex;
			justify-content: space-around;
			height: 45rpx;
			line-height: 45rpx;
			margin: 30rpx 0;
			justify-content: space-around;

			view {
				image {
					margin-right: 11rpx;
				}

				text {
					color: #333333;
					font-size: 32rpx;
					padding-top: 3rpx;
				}

			}

			.fun1 {
				image {
					width: 39rpx;
					height: 37rpx;
					vertical-align: sub;
				}
			}

			.fun2 {
				image {
					width: 41rpx;
					height: 38rpx;
					vertical-align: sub;
				}
			}

			.fun3 {
				image {
					width: 35rpx;
					height: 35rpx;
					vertical-align: sub;
				}
			}
		}
	}
</style>
