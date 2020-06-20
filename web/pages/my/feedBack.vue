<template>
	<!-- 意见反馈 -->
	<view>
		<header>
			<view class="head-back">
				<image src="@/static/image/header/back.png" @tap="navigateBack"></image>
			</view>
			<view class="title"></view>
			<view class="cancel">
				<button type="default" hover-class="btn-hover" @tap="submit">提交</button>
			</view>
		</header>
		<section class="section-padding-top-138">
			<textarea maxlength="200" cursor-spacing="50" :auto-height="true" placeholder="思绪在无人的地方生长…" placeholder-class="textarea-class"></textarea>
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
			submit() { // 提交

			}
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
		textarea {
			line-height: 45rpx;
			color: #333333;
			font-size: 32rpx;
			width: 100%;
			padding: 20rpx 24rpx;
		}

		.textarea-class {
			color: #CCCCCC;
			font-size: 32rpx;
		}
	}
</style>
