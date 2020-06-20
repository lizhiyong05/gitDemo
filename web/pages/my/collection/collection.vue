<template>
	<!-- 收藏 -->
	<view>
		<headerComponent headerTitle="我的收藏" headerStyle="border-bottom: 1px solid #e5e5e5"></headerComponent>
		<section class="section-padding-top-138">
			<uni-swipe-action>
				<uni-swipe-action-item class="list-item" v-for="(item,ind) in listData" :key="ind" @tap="cancel" :options="swipeOptions">
					<dl @tap="jumpDetail">
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
				</uni-swipe-action-item>
			</uni-swipe-action>
		</section>
	</view>
</template>

<script>
	import uniSwipeAction from '@/components/uni-swipe-action/uni-swipe-action.vue'
	import uniSwipeActionItem from '@/components/uni-swipe-action-item/uni-swipe-action-item.vue'
	import headerComponent from '../../../components/headerComponent.vue'
	export default {
		components: {
			headerComponent,
			uniSwipeAction,
			uniSwipeActionItem
		},
		data() {
			return {
				swipeOptions: [ // 配置
					{
						text: '取消收藏',
						style: {
							backgroundColor: "#22B92C",
							fontSize: "12px",
							color: "#ffffff"
						}
					}
				],
				listData: [{}, {}, {}, {}, {}, {}, {}]
			};
		},
		methods: {
			jumpDetail() { // 跳转页面
				console.log(1);
			},
			cancel() { // 取消收藏
				console.log(2);
			}
		}
	}
</script>

<style lang="scss" scoped>
	.list-item {


		dl {
			display: flex;
			border-bottom: 1rpx solid #EBEBEB;
			padding: 0 30rpx;
			dt {
				width: 170rpx;
				height: 170rpx;
				margin: 33rpx 0;

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
	.uni-swipe.list-item:last-child dl {
		border: none;
	}
</style>
