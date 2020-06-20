<template>
	<view>
		<!-- 修改名称 -->
		<header>
			<view class="head-back">
				<image src="@/static/image/header/back.png" @tap="navigateBack"></image>
			</view>
			<view class="title">修改名称</view>
			<view class="cancel">
				<button type="default" hover-class="btn-hover" @tap="releaseMsg">提交</button>
			</view>
		</header>
		<section class="section-padding-top-138">
			<view class="input-content">
				<input placeholder="请输入您的姓名" placeholder-class="input-placeholder-class" />
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
			navigateBack() { // 返回上一页
				this.$Router.back();
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

		.title {
			flex: 5;
			color: #333333;
			font-size: 38rpx;
			text-align: center;
		}

		.cancel {
			flex: 2.5;
			color: #333333;
			font-size: 28rpx;
			text-align: center;

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

	section {
		.input-content{
			margin: 0 26rpx;
			border-bottom: 1rpx solid #EBEBEB;
			height: 102rpx;
			line-height: 102rpx;
			input {
				width: 100%;
				height: 100%;
				color: #666666;
				font-size: 30rpx;
			}
			.input-placeholder-class {
				color: #CCCCCC;
				font-size: 30rpx;
			}
		}
		
	}
</style>
