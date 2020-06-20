<template>
	<!-- 发布 -->
	<view>
		<headerComponent :backIsShow="false" headerTitle="发布" headerStyle="border-bottom: 1px solid #e5e5e5"></headerComponent>
		<section class="release-section">
			<view class="container">
				<view class="list" @tap="jumpMsg">
					<image src="../../static/image/release/send-msg.png" mode="widthFix"></image>
					<p class="title">发信息</p>
					<p class="info">随时随地共享种植信息</p>
				</view>
				<view class="list" @tap="jumpDemand">
					<image src="../../static/image/release/send-demand.png" mode="widthFix"></image>
					<p class="title">发需求</p>
					<p class="info">我要找人外包解决需求</p>
				</view>
				<view class="list" @tap="jumpRecruit">
					<image src="../../static/image/release/send-recruit.png" mode="widthFix"></image>
					<p class="title">发招募</p>
					<p class="info">招募个人为你工作</p>
				</view>
			</view>
		</section>
	</view>
</template>

<script>
	import headerComponent from '../../components/headerComponent.vue'
	export default {
		components: {
			headerComponent
		},
		data() {
			return {

			};
		},
		methods: {
			jumpMsg() { // 跳转 发信息页面
				// uni.navigateTo({
				//     url: '/pages/release/sendMsg'
				// });
				this.$Router.push('/pages/release/sendMsg');
			},
			jumpDemand() { // 跳转 发需求页面
				// uni.navigateTo({
				//     url: '/pages/release/sendDemand'
				// });
				this.$Router.push('/pages/release/sendDemand');
			},
			jumpRecruit() { // 跳转 发招募页面
				// uni.navigateTo({
				//     url: '/pages/release/sendRecruit'
				// });
				this.$Router.push('/pages/release/sendRecruit');
			}
		}
	}
</script>

<style lang="scss" scoped>
	.release-section {
		margin-top: 338rpx;

		.container {
			display: flex;
			justify-content: space-around;
			align-items: baseline;

			.list {
				&:first-child {
					width: 120rpx;
				}

				&:nth-child(2) {
					width: 160rpx;
				}

				&:last-child {
					width: 120rpx;
				}

				.title {
					color: #333333;
					font: 32rpx;
					line-height: 45rpx;
					text-align: center;
				}

				.info {
					color: #999999;
					font: 24rpx;
					line-height: 28rpx;
					text-align: center;
				}
			}
		}
	}
</style>
