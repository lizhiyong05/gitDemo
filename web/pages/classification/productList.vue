<template>
	<view>
		<headerComponent :headerTitle="headerTitle" headerStyle="border-bottom: 1px solid #e5e5e5" :headerRightData="headerRightData"
		 @emitMethod="screenList"></headerComponent>
		<section class="section-padding-top-138">
			<view class="list-item" v-for="(item,ind) in listData" :key="ind" @tap="jumpDetail">
				<dl>
					<dt>
						<image src="@/static/image/home/bg1.jpg"></image>
					</dt>
					<dd>
						<p class="title">农产品销售农产品销售农产品销售农产品销售农产品销售</p>
						<p class="info">
							<text class="money">￥<i>1200</i>/吨</text>
							<text class="person">155人付款</text>
							<text class="score">4.00评分</text>
						</p>
					</dd>
				</dl>
			</view>
		</section>
		<view class="translate-fixed" v-show="screenIsShow">
			<ul>
				<li @tap="screenSubmit(0)">销量优先</li>
				<li @tap="screenSubmit(1)">价格升序</li>
				<li @tap="screenSubmit(2)">价格降序</li>
			</ul>
			<view class="triangle"></view>
		</view>
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
				headerTitle: '大地作业',
				headerRightData: {
					imgSrc: "/classification/screen.png",
					text: '筛选',
					imgClass: 'product-screen'
				},
				screenIsShow: false, // 筛选条件
				listData: [{}, {}, {}, {}, {}, {}, {}]
			};
		},
		methods: {
			screenList() { // 筛选列表是否显示
				this.screenIsShow = !this.screenIsShow;
			},
			screenSubmit() { // 筛选提交
				this.screenIsShow = false;
			},
			jumpDetail() { // 跳转详情页
				this.$Router.push({path: '/pages/classification/productDetail'});
			}
		},
		onPullDownRefresh() { // 下拉刷新
			console.log(1);
			setTimeout(() => {
				uni.stopPullDownRefresh();
			},2000)
		}
	}
</script>

<style lang="scss" scoped>
	section {
		width: 92%;
		margin: 0 auto;
	}

	.list-item {
		height: 234rpx;
		border-bottom: 1rpx solid #EBEBEB;

		dl {
			display: flex;
			height: 100%;

			dt {
				width: 170rpx;
				height: 170rpx;
				margin-top: 33rpx;

				image {
					width: 100%;
					height: 100%;
				}
			}

			dd {
				padding: 26rpx 0 0 18rpx;
				width: 71.9%;
				height: 100%;
				box-sizing: border-box;
				position: relative;

				.title {
					font-size: 32rpx;
					color: #333333;
					line-height: 46rpx;
					letter-spacing: 1rpx;
				}

				.info {
					line-height: 56rpx;
					margin-top: 18rpx;

					.money {
						font-size: 24rpx;
						color: #FF8202;

						i {
							font-size: 40rpx;
						}
					}

					.person {
						display: inline-block;
						text-align: right;
						font-size: 24rpx;
						color: #999999;
						margin-left: 30rpx;
					}

					.score {
						margin-left: 26rpx;
						font-size: 24rpx;
						color: #999999;
					}
				}
			}
		}
	}

	.translate-fixed {
		position: fixed;
		width: 235rpx;
		background: #8C8C8C;
		right: 33rpx;
		top: 130rpx;
		z-index: 2;
		border-radius: 8rpx;

		.triangle {
			width: 0;
			height: 0;
			border-width: 15rpx;
			border-style: solid;
			border-color: transparent transparent #8C8C8C transparent;
			position: absolute;
			top: -28rpx;
			right: 25rpx;

		}

		ul {
			width: 88%;
			margin: 0 auto;

			li {
				color: #FFFFFF;
				font-size: 30rpx;
				padding-left: 65rpx;
				line-height: 82rpx;
				border-bottom: 1rpx solid #ffffff;
			}

			li:nth-child(1) {
				background: url('/static/image/classification/screen1.png') 19rpx center no-repeat;
				background-size: 30rpx 30rpx;
			}

			li:nth-child(2) {
				background: url('/static/image/classification/screen2.png') 19rpx center no-repeat;
				background-size: 31rpx 25rpx;
			}

			li:nth-child(3) {
				background: url('/static/image/classification/screen3.png') 19rpx center no-repeat;
				background-size: 31rpx 25rpx;
				border: none;
			}

		}
	}
</style>
