<template>
	<!-- 足迹 -->
	<view>
		<headerComponent headerTitle="我的足迹" headerStyle="border-bottom: 1px solid #e5e5e5"></headerComponent>
		<section class="section-padding-top-138">
			<MescrollUni @init="mescrollInit" :fixed="false" height="100%" @down="downCallback" @up="upCallback" :down="downOption" :up="upOption">
				<swiperAction :actions="actions" v-for="(item,index) in listData" :key="index" >
					<dl @tap="jumpDetail" slot="content">
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
				</swiperAction>
			</MescrollUni>
		</section>
	</view>
</template>

<script>
	import headerComponent from '@/components/headerComponent.vue'
	import swiperAction from '@/components/tui-swipe-action/tui-swipe-action.vue'
	import MescrollUni from "@/components/mescroll-uni/mescroll-uni.vue";
	import MescrollMixin from "@/components/mescroll-uni/mescroll-mixins.js"; // 引入mescroll-mixins.js
	export default {
		mixins: [MescrollMixin], // 使用mixin
		components: {
			headerComponent,
			swiperAction,
			MescrollUni
		},
		data() {
			return {
				actions: [ // 左滑按钮
					{
						name: '删除足迹',
						color: '#FFFFFF',
						fontsize: '24',
						width: '140',
						background: '#FF5C3C',
						icon: '../../../static/image/my/delete.png',
						imgWidth: 32,
						imgHeight: 32
					}
				],
				listData: [{},{},{},{},{},{},{},{}],
				downOption: { // 下拉配置
					
				},
				upOption: { // 上拉配置
					isBounce: true, // 是否允许橡皮筋回弹效果, 默认不允许
					page: {
						num: 1, // 页码, 默认从1开始
						size: 10, // 页长, 默认每页10条
						time: null,
						textNoMore: '没有更多数据啦······'
					}
				}
					
			};
		},
		methods: {
			jumpDetail() { // 跳转页面
				console.log(1);
			},
			cancel() { // 取消收藏
				console.log(2);
			},
			downCallback() { // 下拉刷新的回调
				console.log('下拉开始');
				setTimeout(() => {
					this.mescroll.endSuccess();
				},1000)
			},
			upCallback(page) {
				let pageNum = page.num; // 页码, 默认从1开始
				let pageSize = page.size; // 页长, 默认每页10条
				setTimeout(() => {
					this.mescroll.endByPage(); 
				},1000)
			}
				
		}
	}
</script>

<style lang="scss" scoped>
	section {
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
