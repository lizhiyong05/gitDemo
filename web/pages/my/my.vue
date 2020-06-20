<template>
	<!-- 我的 -->
	<view>
		<header>
			<view class="head-container">
				<image src="@/static/image/video/head-portrait.jpg" @tap="jumpPages('/pages/my/personal/index')"></image>
			</view>
			<view class="info">
				<p class="name" @tap="jumpPages('/pages/my/personal/index')">张鹤伦</p>
				<button type="default">我要成为商家</button>
			</view>
			<view class="serve">
				<image src="@/static/image/my/msg.png" @tap="jumpCustomerService"></image>
			</view>
		</header>
		<section>
			<view class="row-list">
				<view @tap="jumpPages('/pages/my/collection/collection')" class="item">
					<p>12</p>
					<p>我的收藏</p>
				</view>
				<view @tap="jumpPages('/pages/my/footprint/footprint')" class="item">
					<p>12</p>
					<p>足迹</p>
				</view>
				<view @tap="myCoupon" class="item">
					<p>0</p>
					<p>优惠券</p>
				</view>
			</view>
			<view class="column-list">
				<ul>
					<li @tap="jumpMoney">账户余额</li>
					<li @tap="jumpMyNeeds">我的需求</li>
					<li @tap="jumpPages('/pages/my/feedBack')">意见反馈</li>
					<li @tap="jumpCustomerService">在线客服</li>
					<li @tap="jumpPages('/pages/my/setting/index')">设置</li>
				</ul>
			</view>
		</section>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
		},
		methods: {
			jumpPages(pagePath) { // 跳转页面
				this.$Router.push({
					path: pagePath
				});
			},
			myCoupon() { // 优惠券
				uni.showToast({
					title: '优惠券功能暂未开放',
					icon: 'none'
				})
			},
			jumpCustomerService() { // 跳转客服
				uni.showToast({
					title: '在线客服功能暂未开放',
					icon: 'none'
				})
			},
			jumpMoney(){ // 跳转账户余额页面
				uni.showToast({
					title: '账户功能暂未开放',
					icon: 'none'
				})
			},
			jumpMyNeeds() { // 跳转我的需求
				this.$Router.push({
					path: "/pages/my/myNeeds/myNeeds"
				});
			}
		}
	}
</script>

<style lang="scss" scoped>
	page {
		background: #F3F4F6;
	}

	header {
		height: 332rpx;
		background: url(../../static/image/my/bg.png) left center no-repeat;
		background-size: 100% 100%;
		display: flex;

		.head-container {
			padding-top: 110rpx;
			margin-left: 30rpx;

			image {
				width: 120rpx;
				height: 120rpx;
				border-radius: 50%;
			}
		}

		.info {
			padding-top: 110rpx;
			padding-left: 15rpx;

			.name {
				color: #FFFFFF;
				font-size: 36rpx;
				line-height: 50rpx;
			}

			button {
				display: inline-block;
				color: #FFFFFF;
				font-size: 26rpx;
				line-height: 50rpx;
				padding: 0 15rpx;
				background: rgba(255, 255, 255, 0.2);
				border-radius: 8rpx;
				margin-top: 13rpx;
			}
		}

		.serve {
			padding-top: 115rpx;
			flex: 1;
			text-align: right;
			margin-right: 44rpx;

			image {
				width: 40rpx;
				height: 40rpx;
			}
		}
	}

	section {
		margin: -70rpx 30rpx 30rpx 30rpx;

		.row-list {
			height: 143rpx;
			border-radius: 10rpx;
			background: #ffffff;
			display: flex;
			padding: 0 34rpx;
			justify-content: space-between;
			align-items: center;

			.item {
				text-align: center;
				width: 100rpx;
				p:first-child {
					color: #333333;
					font-size: 28rpx;
					line-height: 40rpx;
					font-weight: bold;
				}

				p:last-child {
					color: #666666;
					font-size: 24rpx;
					line-height: 33rpx;
					margin-top: 10rpx;
				}
			}
		}

		.column-list {
			margin-top: 30rpx;
			border-radius: 10rpx;
			background: #ffffff;
			padding: 0 30rpx;

			ul {
				li {
					border-bottom: 1rpx solid #EAEAEA;
					height: 100rpx;
					line-height: 100rpx;
					color: #707C92;
					font-size: 30rpx;
					padding-left: 54rpx;

					&:nth-child(1) {
						background-image: url(../../static/image/my/money.png), url(../../static/image/my/right-enter.png);
						background-position: left center, right center;
						background-repeat: no-repeat, no-repeat;
						background-size: 35rpx 36rpx, 9rpx 15rpx;
					}

					&:nth-child(2) {
						background-image: url(../../static/image/my/demand.png), url(../../static/image/my/right-enter.png);
						background-position: left center, right center;
						background-repeat: no-repeat, no-repeat;
						background-size: 31rpx 31rpx, 9rpx 15rpx;
					}

					&:nth-child(3) {
						background-image: url(../../static/image/my/opinion.png), url(../../static/image/my/right-enter.png);
						background-position: left center, right center;
						background-repeat: no-repeat, no-repeat;
						background-size: 31rpx 35rpx, 9rpx 15rpx;
					}

					&:nth-child(4) {
						background-image: url(../../static/image/my/serve.png), url(../../static/image/my/right-enter.png);
						background-position: left center, right center;
						background-repeat: no-repeat, no-repeat;
						background-size: 37rpx 36rpx, 9rpx 15rpx;
					}

					&:nth-child(5) {
						background-image: url(../../static/image/my/setup.png), url(../../static/image/my/right-enter.png);
						background-position: left center, right center;
						background-repeat: no-repeat, no-repeat;
						background-size: 34rpx 40rpx, 9rpx 15rpx;
					}

					&:last-child {
						border: none;
					}
				}
			}
		}
	}
</style>
