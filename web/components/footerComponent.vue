<template>
	<view class="footer">
		<footer class="footer-component">
			<ul>
				<li v-for="(item,index) in tabbar" :key="index" @tap="changeTab(item.pagePath)" :class="{release: index == 2}">
					<image v-if="item.pagePath == pagePath" :src="item.selectedIconPath">
					<image v-else :src="item.iconPath">
					<p>{{ item.text }}</p>
				</li>
			</ul>
			<view class="circle"></view>
		</footer>
	</view>
</template>

<script>
	export default {
		props:{
			pagePath: null
		},
		data() {
			return {
				tabbar: [
					{
						text: '首页',
						pagePath: '/pages/home/home',
						iconPath: '/static/image/footer/footer-icon1.png',
						selectedIconPath: '/static/image/footer/footer-icon1-selected.png',
					},
					{
						text: '分类',
						pagePath: '/pages/classification/classification',
						iconPath: '/static/image/footer/footer-icon2.png',
						selectedIconPath: '/static/image/footer/footer-icon2-selected.png',
					},
					{
						text: '发布',
						pagePath: '/pages/release/release',
						iconPath: '/static/image/footer/footer-icon3.png',
						selectedIconPath: '/static/image/footer/footer-icon3.png',
					},
					{
						text: '视频',
						pagePath: '/pages/video/video',
						iconPath: '/static/image/footer/footer-icon4.png',
						selectedIconPath: '/static/image/footer/footer-icon4-selected.png',
					},
					{
						text: '我的',
						pagePath: '/pages/my/my',
						iconPath: '/static/image/footer/footer-icon5.png',
						selectedIconPath: '/static/image/footer/footer-icon5-selected.png',
					},
				]
			};
		},
		methods:{
			changeTab(pagePath){
				uni.reLaunch({ //reLaunch关闭所有的页面，打开新的栏目页面
					url: pagePath
				})
			}
		}
	}
</script>

<style lang="scss">
	.footer-component {
		width: 100%;
		height: 110rpx;
		position: fixed;
		left: 0;
		bottom: 0;
		right: 0;
		background: rgba(255, 255, 255, 1);
		box-shadow: 0px -5px 17px 0px rgba(0, 0, 0, 0.09);

		ul {
			height: 100%;
			background: #ffffff;
			display: flex;
			li {
				flex: 20;
				height: 100%;
				text-align: center;
				image {
					width: 40rpx;
					height: 40rpx;
					margin-top: 15rpx;
				}
				p {
					line-height: 20rpx;
					font-size: 20rpx;
					color: #999999;
					margin-top: 10rpx;
				}

				.select {
					color: #22B92C;
				}
			}

			.release {
				image {
					width: 70rpx;
					height: 70rpx;
					margin-top: -15rpx;
				}
			}
		}

		.circle {
			width: 78rpx;
			height: 78rpx;
			border-radius: 50%;
			background: #ffffff;
			position: absolute;
			top: 0;
			left: 50%;
			transform: translate(-50%, -34%);
			box-shadow: 0px -5rpx 17rpx 0rpx rgba(0, 0, 0, 0.09);
			z-index: -1;
		}
	}
</style>
