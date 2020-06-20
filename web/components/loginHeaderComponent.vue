<template>
	<view>
		<header class="header" :style="headerStyle">
			<view class="header-left">
				<image v-if="backIsShow" src="@/static/image/header/back.png" class="header-back" @tap="navigateBack"></image>
			</view>
			<h2 class="title">{{ headerTitle }}</h2>
			<view class="header-right">
				<image src="@/static/image/classification/screen.png" :class="headerRightData.imgClass" v-if="headerRightData.imgSrc && headerRightData.text == '筛选'"
				 @tap="emitEvent"></image>
				<text v-if="headerRightData.text" @tap="emitEvent">{{ headerRightData.text }}</text>
			</view>
		</header>
	</view>
</template>

<script>
	/**
	 * description: props params
	 * backIsShow: { boolean } 是否显示返回按钮
	 * headerStyle: { string } 头部样式 border-bottom: 1px solid #e5e5e5
	 * headerTitle: { string } 标题
	 * headerRightData: { object } 头部右侧数据 imgSrc：图片路径 imgClass：图片样式 text：右侧文案
	 */
	export default {
		props: {
			backIsShow: {
				type: Boolean,
				default: true
			},
			headerStyle: {
				type: String,
				default: ''
			},
			headerTitle: {
				type: String,
				default: ''
			},
			headerRightData: {
				type: Object,
				default: () => {
					return {
						imgSrc: '',
						imgClass: '',
						text: ''
					}
				}
			}
		},
		methods: {
			navigateBack() { // 返回上一页
				uni.switchTab({  
					url: '../home/home'  
				});
			},
			emitEvent() { // 点击后触发
				this.$emit('emitMethod');
			}
		}
	}
</script>

<style lang="scss">
	.header {
		padding-top: 50rpx;
		line-height: 88rpx;
		display: flex;
		background: #ffffff;
		position: fixed;
		left: 0;
		top: 0;
		right: 0;
		z-index: 1;

		.header-left {
			flex: 2.5;

			.header-back {
				width: 20rpx;
				height: 35rpx;
				vertical-align: middle;
				margin-left: 46rpx;
			}
		}

		.title {
			flex: 5;
			text-align: center;
			font-size: 38rpx;
			font-weight: 500;
		}

		.header-right {
			flex: 2.5;
			text-align: right;

			text {
				color: #333333;
				font-size: 30rpx;
				padding-right: 30rpx;
			}

			.translate {
				width: 25rpx;
				height: 24rpx;
				padding-right: 10rpx;
			}
		}
	}
	/* 产品列表头部筛选样式 */
	.product-screen{
		width: 25rpx;
		height: 24rpx;
		padding-right: 9rpx;
	}
</style>
