<template>
	<!-- 发布信息 -->
	<view>
		<header>
			<view class="head-back">
				<image src="@/static/image/header/back.png" @tap="navigateBack"></image>
			</view>
			<view class="title"></view>
			<view class="cancel">
				<button type="default" hover-class="btn-hover" @tap="releaseMsg">发布</button>
			</view>
		</header>
		<section>
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
	import bottomPopup from '@/components/tui-bottom-popup/tui-bottom-popup.vue'
	export default {
		components: {
			bottomPopup
		},
		data() {
			return {
				bottomPopupIsShow: false, // 主营品类底部弹窗是否显示
				bottomPopupHeight: '95%', // 主营品类底部弹窗高度
			};
		},
		methods: {
			navigateBack() { // 返回上一页
				this.$Router.back();
			},
			selectTopic() { // 选择话题
			this.bottomPopupIsShow = true;
			},
			closePopup() { // 关闭popup
				this.bottomPopupIsShow = false;
			},
			releaseMsg() { // 发布信息
			
			},
		}
	}
</script>

<style lang="scss" scoped>
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
		.title{
			flex: 5;
		}
		.cancel {
			flex: 2.5;
			color: #333333;
			font-size: 28rpx;
			text-align: center;
			button  {
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
		padding-top: 138rpx;
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
