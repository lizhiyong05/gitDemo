<template>
	<!-- 发布招募 -->
	<view>
		<headerComponent headerTitle="发招募" headerStyle="border-bottom: 1px solid #e5e5e5"></headerComponent>
		<section class="section-padding-top-138">
			<h2 class="title">添加招募信息</h2>
			<view class="block">
				<p class="second-title">招募标题</p>
				<input placeholder="请输入" placeholder-class="input-placeholder-class" />
			</view>
			<view class="block block2">
				<p class="second-title">上传图片</p>
				<view class="upload-img">
					<image src="@/static/image/release/upload-img.png"></image>
					<p class="img-total">1/3</p>
				</view>
			</view>
			<view class="block block3">
				<p class="second-title">金额</p>
				<input placeholder="请输入金额" placeholder-class="input-placeholder-class" />
			</view>
			<view class="block block4">
				<p class="second-title">选择招募时间</p>
				<p class="select-hide" v-if="!releaseData.startData" @tap="selectPicker"><text>开始时间</text><text>-</text><text>结束时间</text></p>
				<p class="select-hide selectColor" v-if="releaseData.startData" @tap="selectPicker"><text>{{ releaseData.endData }}</text><text>-</text><text>{{ releaseData.startData }}</text></p>
			</view>
			<view class="block block5">
				<p class="second-title">手机号码</p>
				<input placeholder="请输入" type="number" maxlength="11" placeholder-class="input-placeholder-class" />
			</view>
			<view class="block block6">
				<p class="second-title">分类</p>
				<p class="select-type" @tap="selectClass" v-if="!releaseData.classification">选择分类</p>
				<p class="select-type" @tap="selectClass" v-if="releaseData.classification">选择分类</p>
			</view>
			<view class="info">
				<p class="info-title">招募简介</p>
				<textarea maxlength="2000" cursor-spacing="50" :auto-height="true" placeholder="请输入招募简介" placeholder-class="textarea-class"></textarea>
			</view>
			<view class="release-bottom">
				<button type="default" hover-class="btn-hover">发布</button>
			</view>
		</section>
		<mx-date-picker :show="pickerConfig.show" :type="pickerConfig.type" :value="pickerConfig.value" @confirm="pickerSubmit"
		 @cancel="pickerSubmit" />
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
				<br>
				<br>
				<br>
				<br>
				<br>
				<button type="default">得爹</button>
				<button type="default">得爹</button>
				<button type="default">得爹</button>
				<button type="default">得爹</button>
				<button type="default">得爹</button>
				<button type="default">得爹</button>
				<button type="default">得爹</button>
				<button type="default">得爹</button>
				<button type="default">得爹</button>
				<button type="default">得爹</button>
				<button type="default">得爹</button>
				<button type="default">得爹</button>
				<button type="default">得爹</button>
			</view>
		</view>
	</view>
</template>

<script>
	import headerComponent from '../../components/headerComponent.vue'
	import MxDatePicker from "@/components/mx-datepicker/mx-datepicker.vue";
	export default {
		components: {
			headerComponent,
			MxDatePicker
		},
		data() {
			return {
				pickerConfig: {
					show: false, // 是否显示
					type: 'range', // 类型
					value: '', // 默认值
				},
				releaseData: {
					startData: '', // 开始日期
					endData: '', // 结束日期
					classification: '', // 分类
				},
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
			selectPicker() { // 选择日期
				this.pickerConfig.show = true;
			},
			pickerSubmit(e) { // 确定日期
				this.pickerConfig.show = false;
				if (e) {
					this.releaseData.startData = e.value[0].replace(/\//g, '.');
					this.releaseData.endData = e.value[1].replace(/\//g, '.');
				}
			},
			selectClass() { // 选择话题
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
	section {
		.title {
			color: #333333;
			font-size: 48rpx;
			line-height: 67rpx;
			margin: 60rpx 26rpx;
		}

		.block {
			border-bottom: 1rpx solid #EBEBEB;
			margin: 0 26rpx;

			.second-title {
				font-size: 28rpx;
				color: #666666;
				line-height: 40rpx;
			}

			input {
				height: 48rpx;
				line-height: 48rpx;
				margin: 16rpx 0 30rpx;
				color: #333333;
				font-size: 34rpx;
			}

			.upload-img {
				width: 212rpx;
				height: 212rpx;
				background: #FAFAFA;
				border-radius: 9rpx;
				text-align: center;
				margin: 30rpx 0 26rpx 0;

				image {
					width: 71rpx;
					height: 71rpx;
					margin-top: 50rpx;
				}

				.img-total {
					color: #999999;
					font-size: 24rpx;
					line-height: 33rpx;
					margin-top: 20rpx;
				}
			}

			.input-placeholder-class {
				color: #C7C7C7;
				font-size: 34rpx;
			}
		}

		.block2 {
			.second-title {
				margin: 30rpx 0 26rpx 0;
			}
		}

		.block3,
		.block4,
		.block5,
		.block6 {
			.second-title {
				margin-top: 30rpx;
			}
		}

		.block4 {
			.select-hide {
				font-size: 34rpx;
				line-height: 48rpx;
				margin: 16rpx 0 30rpx 0;

				text {
					color: #C7C7C7;
				}

				text:nth-child(2) {
					color: #333333;
					padding: 0 80rpx;
				}
			}

			.selectColor {
				text {
					color: #333333;
				}
			}
		}

		.block6 {
			margin-bottom: 36rpx;

			.select-type {
				line-height: 48rpx;
				margin: 16rpx 0 30rpx 0;
				background: url(@/static/image/release/select-type.png) right center no-repeat;
				background-size: 12rpx 21rpx;
				color: #C7C7C7;
				font-size: 34rpx;
			}
		}

		.info {
			min-height: 378rpx;
			padding: 14rpx 26rpx;
			background: #FAFAFA;

			.info-title {
				color: #666666;
				font-size: 28rpx;
				line-height: 40rpx;
				margin-bottom: 16rpx;
			}

			textarea {
				line-height: 40rpx;
				color: #333333;
				font-size: 34rpx;
				width: 100%;
			}

			.textarea-class {
				color: #999999;
				font-size: 28rpx;
			}
		}

		.release-bottom {
			button {
				width: 698rpx;
				height: 90rpx;
				background: #22B92C;
				font-size: 32rpx;
				color: #ffffff;
				margin: 100rpx auto 30rpx auto;
			}

			.btn-hover {
				background: #0a9505;
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
