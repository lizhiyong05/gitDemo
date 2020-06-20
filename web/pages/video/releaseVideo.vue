<template>
	<!-- 发布视频 -->
	<view>
		<header>
			<view class="head-back">
				<image src="@/static/image/header/back.png" @tap="navigateBack"></image>
			</view>
			<view class="title">
				视频
			</view>
			<view class="record">
				<button type="default" hover-class="btn-hover">发布</button>
			</view>
		</header>
		<section class="section-padding-top-138">
			<view class="select-topic clearfix" @tap="selectTopic">
				<p class="fl">选择话题</p>
				<p class="fr">选择话题有机会获得更多的赞～</p>
			</view>
			<view class="enter-textarea">
				<textarea maxlength="2000" auto-height placeholder="思绪在无人的地方生长…" placeholder-class="textarea-placeholder" />
				</view>
			<view class="upload-img">
				<view class="img-content">
					<image src="@/static/image/release/add-img.png"></image>
				</view>
			</view>
		</section>
		<view class="popup-bg" :animation="popup_bg_animation" :style="popup_bg_style"></view>
		<view class="popup-content" :animation="popup_content_animation" :style="popup_content_style">
			<view class="popup-header">
				<view class="popup-left">
					<image src="@/static/image/release/close.png" @tap="closePop"></image>
				</view>
				<view class="popup-center">
					选择话题
				</view>
				<view class="popup-right"></view>
			</view>
			<view>
				<button type="default">得爹</button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				popup_bg_style:{
					width: 0,
					height: 0,
					top: "100%"
				},
				popup_content_style:{
					width: 0,
					height: 0,
					top: "100%"
				},
				popup_bg_animation: {},
				popup_content_animation: {},
			};
		},
		onReady() {
			var that = this;
			uni.getSystemInfo({
				success: function(res){
					that.popup_bg_style.width = res.windowWidth + 'px';
					that.popup_bg_style.height = res.windowHeight + 'px';
					that.popup_content_style.width = res.windowWidth + 'px';
					that.popup_content_style.height = res.windowHeight-40 + 'px';
				}
			});
		},
		methods: {
			navigateBack() { // 返回上一页
				this.$Router.back();
			},
			selectTopic() { // 选择话题
				this.showPopup();
			},
			showPopup(){ // 显示 popup 
				this.popup_bg_style.top = 0;
				var animation = uni.createAnimation({
					duration: 300,
					timingFunction: "ease",
				});
				animation.opacity(0.7).step();
				this.popup_bg_animation = animation.export();
				var animation2 = uni.createAnimation({
					duration: 300,
					timingFunction: "ease",
				});
				animation2.top(40).step();
				this.popup_content_animation = animation2.export();
				
			},
			closePop() { // 关闭 popup
				var animation = uni.createAnimation({
					duration: 300,
					timingFunction: "ease",
				});
				animation.opacity(0).step();
				this.popup_bg_animation = animation.export();
				var animation2 = uni.createAnimation({
					duration: 300,
					timingFunction: "ease",
				});
				animation2.top('100%').step();
				this.popup_content_animation = animation2.export();
				setTimeout(() => {
					this.popup_bg_style.top = "100%";
				},300)
			}
		}
	}
</script>

<style lang="scss" scoped>
	header {
		padding-top: 50rpx;
		height: 88rpx;
		line-height: 88rpx;
		border-bottom: 1px solid #e5e5e5;
		display: flex;
		align-items: center;
		background: #ffffff;
		position: fixed;
		left: 0;
		top: 0;
		right: 0;
		z-index: 2;

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
			text-align: center;
			font-size: 38rpx;
			color: #333333;
			font-weight: 500;
		}

		.record {
			flex: 2.5;
			text-align: right;

			button {
				width: 120rpx;
				height: 56rpx;
				line-height: 56rpx;
				color: #FFFFFF;
				font-size: 28rpx;
				background: #22B92C;
				border-radius: 6rpx;
				float: right;
				margin-right: 30rpx;
				vertical-align: middle;
				border: none;
			}

			.btn-hover {
				background: #0a9505;
			}
		}
	}
	section{
		.select-topic{
			height: 77rpx;
			line-height: 77rpx;
			background-color: #f8f8f8;
			background-image: url(@/static/image/release/topic.png),url(@/static/image/release/right.png),;
			background-position: 33rpx center,right 30rpx center;
			background-repeat: no-repeat,no-repeat;
			background-size: 34rpx 34rpx,12rpx 22rpx;
			p:first-child {
				font-size: 26rpx;
				color: #22B92C;
				padding-left: 83rpx;
			}
			p:last-child {
				font-size: 21rpx;
				color: #CCCCCC;
				padding-right: 48rpx;
			}
		}
		.enter-textarea{
			min-height: 200rpx;
			padding: 33rpx;
			textarea{
				width: 100%;
				z-index: 1;
				color: #333333;
				font-size: 32rpx;
				line-height:45rpx;
			}
			.textarea-placeholder{
				font-size:32rpx;
				color: #CCCCCC;
			}
		}
		.upload-img{
			display: flex;
			margin-bottom: 30rpx;
			.img-content{
				justify-content: space-between;
				width: 200rpx;
				height: 200rpx;
				border-radius: 12rpx;
				overflow: hidden;
				padding: 0 30rpx;
				image{
					width: 100%;
					height: 100%;
				}
			}
		}
	}
	.popup-bg{
		position: fixed;
		background-color: #000000;
		opacity: 0;
		z-index: 3;
	}
	.popup-content {
		position: fixed;
		left: 0;
		top: 100%;
		right: 0;
		bottom: 0;
		z-index: 4;
		background: #ffffff;
		border-radius:16rpx 16rpx 0px 0px;
		.popup-header{
			display: flex;
			height: 90rpx;
			align-items: center;
			line-height: 90rpx;
			.popup-left {
				flex: 2.5;
				image{
					width: 30rpx;
					height: 30rpx;
					margin-left: 33rpx;
				}
			}
			.popup-center{
				flex: 5;
				color: #333333;
				font-size: 34rpx;
				text-align: center;
				
			}
			.popup-right{
				flex: 2.5;
			}
		}
	}
</style>
