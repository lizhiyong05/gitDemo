<template>
	<view>
		<header>
			<view class="head-back">
				<image src="@/static/image/header/back.png" @tap="navigateBack"></image>
			</view>
			<view class="title">惠农信息</view>
			<view class="head-portrait">
				<image src="@/static/image/video/head-portrait.jpg" @tap="jumpMyInformation"></image>
			</view>
		</header>
		<section class="section-padding-top-138">
			<view class="pic-cotainer" v-for="(item,index) in picList" :key="index">
				<view class="user-info">
					<image src="@/static/image/video/head-portrait.jpg"></image>
					<view class="info">
						<h3>赵先生</h3>
						<p>2019-07-20 12:20</p>
					</view>
				</view>
				<view class="title">AntV 是蚂蚁金服全新一代数据可视化解决方案，致力于提供一套简单方便、专业可靠、无限可能的数据可视化最佳实践。</view>
				<view class="pic-play">
					<image :src="item2.src" v-for="(item2,index2) in item.srcList" :key="index2"></image>
				</view>
				<view class="relation">
					<p>每日农经</p>
				</view>
				<view class="pic-fun">
					<view class="fun1" @tap="tiggerFun1">
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
	export default {
		data() {
			return {
				picList: [
					{
						srcList: [
							{
								src: '/static/image/home/bg1.jpg'
							},
							{
								src: '/static/image/home/bg1.jpg'
							},
							{
								src: '/static/image/home/bg1.jpg'
							}
						]
					},
					{
						srcList: [
							{
								src: '/static/image/home/bg1.jpg'
							},
							{
								src: '/static/image/home/bg1.jpg'
							},
							{
								src: '/static/image/home/bg1.jpg'
							}
						]
					}
				]
			};
		},
		methods: {
			navigateBack() { // 返回上一页
				this.$Router.back();
			},
			jumpMyInformation() { // 跳转我的信息
				this.$Router.push({path: '/pages/release/information/myInformation'});
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
		display: flex;
		position: fixed;
		z-index: 2;
		left: 0;
		top: 0;
		right: 0;
		align-items: center;
		border-bottom: 1px solid #e5e5e5;
		background: #ffffff;
	
		.head-back {
			flex: 2.5;
	
			image {
				width: 20rpx;
				height: 34rpx;
				border-radius: 50%;
				vertical-align: middle;
				margin-left: 26rpx;
			}
		}
	
		.title {
			flex: 5;
			color: #333333;
			font-size: 38rpx;
			text-align: center;
		}
		.head-portrait{
			flex: 2.5;
			text-align: right;
			image {
				width: 50rpx;
				height: 50rpx;
				border-radius: 50%;
				vertical-align: middle;
				margin-right: 26rpx;
			}
		}
		
	
	}
	.pic-cotainer {
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
	
		.pic-play{
			display: flex;
			justify-content: space-between;
			image{ 
				width: 220rpx;
				height: 220rpx;
				border-radius: 12rpx;
			}
		}
		.relation{
			
			margin-top: 20rpx;
			p{
				display: inline-block;
				background-color:rgba(34,185,44,0.1);
				background-image: url(@/static/image/release/relation.png);
				background-position: 18rpx center;
				background-size: 34rpx 34rpx;
				background-repeat: no-repeat;
				border-radius:32px;
				height:64rpx;
				line-height: 64rpx;
				color: #22B92C;
				font-size: 26rpx;
				padding: 0 22rpx 0 68rpx;
			}
		}
		.pic-fun {
			display: flex;
			height: 45rpx;
			line-height: 45rpx;
			margin: 30rpx 0;
			justify-content: space-between;
			padding: 0 30rpx;
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
