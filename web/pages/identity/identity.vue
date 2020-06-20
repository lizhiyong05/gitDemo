<template>
	<!-- 选择身份 -->
	<view>
		<headerComponent></headerComponent>
		<section class="section-padding-top-138">
			<view class="container" v-show="selectedIndex == 0">
				<dl @tap="selectedFun(0)">
					<dt>
						<image src="@/static/image/identity/user1-selected.png"></image>
					</dt>
					<dd  :class="{'orange-color': selectedIndex == 0}">成为服务商</dd>
				</dl>
				<dl @tap="selectedFun(1)">
					<dt>
						<image src="@/static/image/identity/user2.png"></image>
					</dt>
					<dd :class="{'orange-color': selectedIndex == 1}">成为服务商</dd>
				</dl>
			</view>
			<view class="container" v-show="selectedIndex == 1" :class="{'orange-color': selectedIndex == 1}">
				<dl @tap="selectedFun(0)">
					<dt>
						<image src="@/static/image/identity/user1.png"></image>
					</dt>
					<dd :class="{'orange-color': selectedIndex == 0}">成为服务商</dd>
				</dl>
				<dl @tap="selectedFun(1)">
					<dt>
						<image src="@/static/image/identity/user2-selected.png"></image>
					</dt>
					<dd :class="{'orange-color': selectedIndex == 1}">成为服务商</dd>
				</dl>
			</view>
			<button type="default" class="submit-btn" hover-class="btn-hover" @tap="submitBtn">确定</button>
			<p class="info">为您推荐优质好货</p>
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
				selectedIndex: 0, // 选中的下标
			};
		},
		methods: {
			selectedFun(index) { // 选择
				this.selectedIndex = index;
			},
			submitBtn(){ // 确定
				
			}
		}
	}
</script>

<style lang="scss" scoped>
	.container {
		display: flex;
		padding: 218rpx 48rpx 0 48rpx;
		justify-content: space-around;
		dl {
			text-align: center;

			dt {
				image {
					width: 204rpx;
					height: 204rpx;
				}
			}

			dd {
				color: #CCCCCC;
				font-size: 32rpx;
				margin-top: 40rpx;

			}
		}
	}

	.orange-color {
		color: #FE6E00 !important;
	}
	.submit-btn{
		margin: 173rpx 48rpx 0 48rpx;
		height: 102rpx;
		background: #22B92C;
		color: #FFFFFF;
		font-size: 36rpx;
		border-radius: 51rpx;
	}
	.btn-hover {
		background: #09a706;
	}
	.info{
		text-align: center;
		font-size:28rpx;
		color: #999999;
		line-height: 40rpx;
		margin-top: 19rpx;
	}
</style>
