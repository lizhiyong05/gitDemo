<template>
	<view>
		<section>
			<view class="swiper-container">
				<swiper class="swiper" @change="changeCurrent" :autoplay="true" interval="3000" :circular="true" current="current">
					<swiper-item v-for="(item,index) in swiperList" :key="index">
						<image :src="item.url" class="swiper-image" @tap="previewImage(index)"></image>
					</swiper-item>
				</swiper>
				<view class="page-container">
					<text>{{ current+1 }}</text> / <text>{{ swiperList.length }}</text>
				</view>
				<image src="@/static/image/classification/left-back.png" class="header-back" @tap="navigateBack"></image>
				<image src="@/static/image/classification/share.png" class="header-share"></image>
			</view>
			<view class="product-title">
				<h2 class="title">农产品销售农产品销售农产品销售农产品销售农产品销售</h2>
				<view class="price-container clearfix">
					<p class="price fl"><text>￥</text><text>34.9</text><text>/吨</text></p>
					<p class="evaluate fr"><text><i>20</i>人付款</text><text><i>144</i>评分</text></p>
				</view>
			</view>
			<view class="guarantee">
				<p class="left">保障</p>
				<view class="right">
					<p class="item">
						<image mode="widthFix" src="@/static/image/classification/guarantee.png"></image>
						<text>资金担保</text>
					</p>
					<p class="item">
						<image mode="widthFix" src="@/static/image/classification/guarantee.png"></image>
						<text>资金担保</text>
					</p>
					<p class="item">
						<image mode="widthFix" src="@/static/image/classification/guarantee.png"></image>
						<text>资金担保</text>
					</p>
					<p class="item">
						<image mode="widthFix" src="@/static/image/classification/guarantee.png"></image>
						<text>资金担保</text>
					</p>
					<p class="info">服务商已缴纳<text>¥20000</text>保证金，承诺交易出现问题先行赔付</p>
				</view>
			</view>
			<view class="detail-info">
				<p class="title">宝贝详情</p>
				<image mode="widthFix" src="@/static/image/home/bg1.jpg"></image>
				<image mode="widthFix" src="@/static/image/home/bg1.jpg"></image>
				<image mode="widthFix" src="@/static/image/home/bg1.jpg"></image>
				<image mode="widthFix" src="@/static/image/home/bg1.jpg"></image>
			</view>
			<view class="bottom-btn clearfix">
				<p class="fl collection">
					<image src="@/static/image/classification/collection.png"></image>
					<text>收藏</text>
				</p>
				<view class="btn-cantainer fl">
					<text class="line-btn">在线咨询</text>
					<text class="buy-btn">立即购买</text>
				</view>
			</view>
		</section>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				current: 1, // 当前滑块的index
				swiperList: [{
						url: '/static/image/home/bg1.jpg'
					},
					{
						url: '/static/image/home/bg1.jpg'
					}
				],
				swiperListFormat: [] // swiper数组
			};
		},
		mounted() {
			this.swiperList.forEach(item => {
				this.swiperListFormat.push('https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=4018557288,1217151095&fm=26&gp=0.jpg');
			})
		},
		methods: {
			changeCurrent(e) { // 滑块改动
				this.current = e.detail.current;
			},
			previewImage(index) { // 点击放大
				uni.previewImage({
					indicator: 'default',
					current: index, //预览图片的下标
					urls: this.swiperListFormat //预览图片的地址，必须要数组形式，如果不是数组形式就转换成数组形式就可以
				})
			},
			navigateBack() { // 返回上一页
				this.$Router.back();
			}
		}
	}
</script>

<style lang="scss" scoped>
	page {
		background: #F3F4F6;
	}

	.swiper {
		height: 720rpx;
	}

	.swiper-image {
		width: 100%;
		height: 720rpx;
	}

	.swiper-container {
		position: relative;
	}

	.header-back {
		position: absolute;
		top: 52rpx;
		left: 30rpx;
		width: 62rpx;
		height: 62rpx;
	}

	.header-share {
		position: absolute;
		top: 52rpx;
		right: 30rpx;
		width: 62rpx;
		height: 62rpx;
	}

	.page-container {
		position: absolute;
		right: 20rpx;
		bottom: 20rpx;
		box-sizing: border-box;
		display: inline-block;
		min-width: 69rpx;
		height: 34rpx;
		background: rgba(0, 0, 0, 0.3);
		border-radius: 17rpx;
		line-height: 34rpx;
		padding: 0rpx 16rpx;
		color: #ffffff;
		font-size: 20rpx;
		text-align: center;
		z-index: 1;
	}

	.product-title {
		background: #ffffff;

		.title {
			color: #333333;
			line-height: 54rpx;
			padding: 22rpx 37rpx 17rpx 30rpx;
			font-size: 38rpx;
		}

		.price-container {
			line-height: 67rpx;

			.price {
				padding-left: 26rpx;

				text:nth-child(1) {
					font-size: 28rpx;
					color: #FF8202;
				}

				text:nth-child(2) {
					font-size: 48rpx;
					color: #FF8202;
				}

				text:nth-child(3) {
					font-size: 28rpx;
					color: #747476;
				}
			}

			.evaluate {
				color: #999999;
				font-size: 28rpx;

				text:nth-child(1) {
					padding-right: 26rpx;
				}

				text:nth-child(2) {
					padding-right: 37rpx;
				}
			}
		}
	}

	.guarantee {
		margin-top: 20rpx;
		background: #ffffff;
		padding: 20rpx 0 22rpx 0;
		display: flex;

		.left {
			flex: 1.6;
			color: #999999;
			font-size: 28rpx;
			text-align: center;
		}

		.right {
			flex: 8.4;
			padding-top: 5rpx;

			.item {
				display: inline-block;
				padding-right: 17rpx;

				image {
					width: 22rpx;
				}

				text {
					font-size: 26rpx;
					color: #333333;
					padding-left: 5rpx;
				}
			}

			.info {
				color: #999999;
				font-size: 22rpx;
				line-height: 30rpx;
				padding: 7rpx 20rpx 0 0;

				text {
					color: #FF8202;
				}
			}
		}
	}

	.detail-info {
		margin: 20rpx 0 119rpx 0;
		background: #ffffff;

		.title {
			text-align: center;
			line-height: 40rpx;
			font-size: 28rpx;
			color: #333333;
			padding: 17rpx 0;
		}

		image {
			width: 100%;
			display: block;
		}
	}

	.bottom-btn {
		height: 119rpx;
		background: #ffffff;
		position: fixed;
		left: 0;
		right: 0;
		bottom: 0;
		box-shadow: 0px -5rpx 17rpx 0px rgba(0, 0, 0, 0.09);

		.collection {
			line-height: 119rpx;
			color: #333333;
			font-size: 34rpx;

			image {
				width: 34rpx;
				height: 32rpx;
				padding: 0 8rpx 0 29rpx;
			}
		}

		.btn-cantainer {
			width: 555rpx;
			margin: 12rpx 0 0 26rpx;
			height: 95rpx;
			border-radius: 12rpx;
			overflow: hidden;
			box-shadow: 0px -5px 17px 0px rgba(0, 0, 0, 0.09);

			text {
				display: inline-block;
				line-height: 95rpx;
				text-align: center;
			}

			.line-btn {
				width: 50%;
				height: 100%;
				border: none;
				background: #D9FFDC;
				color: #5FD167;
				font-size: 34rpx;
			}

			.buy-btn {
				width: 50%;
				height: 100%;
				border: none;
				background: #5FD167;
				color: #ffffff;
				font-size: 34rpx;
			}
		}
	}
</style>
