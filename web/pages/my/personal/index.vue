<template>
	<!-- 个人资料 -->
	<view>
		<headerComponent headerTitle="个人资料" headerStyle="border-bottom: 1px solid #e5e5e5"></headerComponent>
		<section class="section-padding-top-138">
			<ul>
				<li class="head-portrait">
					<p class="title">我的头像</p>
					<view class="img-content">
						<image src="@/static/image/video/head-portrait.jpg"></image>
					</view>
				</li>
				<li @tap="jumpPages('/pages/my/personal/changeName')">
					<p class="title">我的姓名</p>
					<p class="info">张鹤伦</p>
				</li>
				<li @tap="jumpPages('/pages/my/personal/changeTel')">
					<p class="title">绑定手机号</p>
					<p class="info">19800000001</p>
				</li>
				<li @tap="bindWx">
					<p class="title">绑定微信</p>
					<p class="info no-info">绑定后可通过微信APP登陆</p>
				</li>
				<li @tap="jumpAddress">
					<p class="title">居住地址</p>
					<p class="info no-info">请选择您的常住地址</p>
				</li>
			</ul>
			<ul>
				<li @tap="mainType">
					<p class="title">主营品类</p>
					<p class="info no-info">请选择您主营品类</p>
				</li>
			</ul>
			<ul>
				<li @tap="jumpPages('/pages/my/personal/changePasswordStep1')">
					<p class="title">修改密码</p>
				</li>
			</ul>
		</section>
		<bottomPopup :show="bottomPopupIsShow" :height="bottomPopupHeight">
			<view class="popup-header">
				<view class="popup-left">
					<image src="@/static/image/release/close.png" @tap="closePopup"></image>
				</view>
				<view class="popup-center">
					选择话题
				</view>
				<view class="popup-right"></view>
			</view>
		</bottomPopup>
	</view>
</template>

<script>
	import headerComponent from '@/components/headerComponent.vue'
	import bottomPopup from '@/components/tui-bottom-popup/tui-bottom-popup.vue'
	export default {
		components: {
			headerComponent,
			bottomPopup
		},
		data() {
			return {
				bottomPopupIsShow: false, // 主营品类底部弹窗是否显示
				bottomPopupHeight: '95%', // 主营品类底部弹窗高度
			};
		},
		methods: {
			jumpPages(pagePath) { // 跳转页面
				this.$Router.push({
					path: pagePath
				});
			},
			bindWx() { // 绑定微信
				uni.showToast({
					title: '功能暂未开放',
					icon: 'none'
				})
			},
			jumpAddress() { // 修改居住地址

			},
			mainType() { // 主营品类
				this.bottomPopupIsShow = true;
			},
			closePopup() {
				this.bottomPopupIsShow = false;
			}
		}
	}
</script>

<style lang="scss" scoped>
	page {
		background: #EDEDED;
	}

	section {
		ul {
			padding: 0 26rpx;
			background: #ffffff;
			margin-bottom: 20rpx;

			li {
				padding: 30rpx 0;
				border-bottom: 1rpx solid #EBEBEB;
				display: flex;
				align-items: center;
				background: url(@/static/image/my/right-enter.png) right center no-repeat;
				background-size: 12rpx 21rpx;

				.title {
					color: #333333;
					font-size: 30rpx;
					line-height: 42rpx;
				}

				.info {
					flex: 1;
					padding-right: 32rpx;
					text-align: right;
					color: #333333;
					font-size: 30rpx;
					line-height: 42rpx;
				}

				.no-info {
					color: #CCCCCC;
				}

				&:last-child {
					border: none;
				}
			}

			.head-portrait {
				.img-content {
					flex: 1;
					text-align: right;
					padding-right: 32rpx;

					image {
						width: 104rpx;
						height: 104rpx;
						border-radius: 50%;

					}
				}

			}
		}
	}

	.popup-header {
		display: flex;
		height: 90rpx;
		align-items: center;
		line-height: 90rpx;

		.popup-left {
			flex: 2.5;

			image {
				width: 30rpx;
				height: 30rpx;
				margin-left: 33rpx;
			}
		}

		.popup-center {
			flex: 5;
			color: #333333;
			font-size: 34rpx;
			text-align: center;

		}

		.popup-right {
			flex: 2.5;
		}
	}
</style>
