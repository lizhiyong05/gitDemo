<template><!-- 首页 -->
	<view>
		<header class="home-header">
			<view class="search-box">
				<view class="address" @tap="selectRegion">
					<image src="@/static/image/home/address.png" class="address-img" />
					<text>{{ address }}</text>
					<image src="@/static/image/home/address-select.png" class="address-select-img"></image>
				</view>
				<view class="search">
					<input type="text" class="search-input" v-model="searchContent" @confirm="searchConfirm" placeholder="搜索服务或"
					 confirm-type="search" placeholder-class="searchPlaceholder" />
				</view>
				<view class="chat">
					<image src="@/static/image/home/msg.png"></image>
				</view>
			</view>
			<view class="banner">
				<view class="banner-cantainer">
					<swiper class="swiper" :autoplay="true" interval="3000" :circular="true">
						<swiper-item v-for="(item,index) in swiperList" :key="index">
							<image mode="scaleToFill" :src="item.url" class="swiper-image"></image>
						</swiper-item>
					</swiper>
				</view>
			</view>
		</header>
		<section class="home-section">
			<view class="main-business">
				<!-- 主要业务 -->
				<dl @tap="jumpProductList">
					<dt>
						<image src="@/static/image/home/earth-operation.png"></image>
					</dt>
					<dd>大地作业</dd>
				</dl>
				<dl @tap="jumpProductList">
					<dt>
						<image src="@/static/image/home/cultivate-land.png"></image>
					</dt>
					<dd>种地</dd>
				</dl>
				<dl @tap="jumpProductList">
					<dt>
						<image src="@/static/image/home/over-floor.png"></image>
					</dt>
					<dd>翻地</dd>
				</dl>
				<dl @tap="jumpProductList">
					<dt>
						<image src="@/static/image/home/weed-control.png"></image>
					</dt>
					<dd>灭草</dd>
				</dl>
				<dl @tap="jumpProductList">
					<dt>
						<image src="@/static/image/home/harvest.png"></image>
					</dt>
					<dd>收割</dd>
				</dl>
			</view>
			<view class="recommend">
				<!-- 推荐 -->
				<h3>- 免费发需求 官方推荐优质服务商 -</h3>
				<ul>
					<li>种地</li>
					<li>农产品销售</li>
					<li>咨询售后</li>
					<li>翻地</li>
				</ul>
				<view class="recommend-form">
					<view class="input-list">
						<text>我需要</text>
						<input type="text" placeholder="如：农产品销售" placeholder-class="recommendPlaceholder">
					</view>
					<view class="input-list input-list-top">
						<text>手机号</text>
						<input type="number" maxlength="11" placeholder="仅官方可见 信息保护中" placeholder-class="recommendPlaceholder">
					</view>
					<button type="default" class="recommend-btn" hover-class="recommend-btn-hover" @tap="test">马上为我推荐</button>
				</view>
			</view>
			<view class="server">
				<!-- 服务榜 -->
				<view class="top clearfix">
					<view class="top-left fl">
						<h2>服务榜</h2>
						<p>优质服务 有保障</p>
						<text>热卖推荐</text>
						<ul class="pic">
							<li>
								<image src="@/static/image/home/bg1.jpg"></image>
							</li>
							<li>
								<image src="@/static/image/home/bg1.jpg"></image>
							</li>
							<li>
								<image src="@/static/image/home/bg1.jpg"></image>
							</li>
							<li>
								<image src="@/static/image/home/bg1.jpg"></image>
							</li>
						</ul>
					</view>
					<view class="top-right fr">
						<view class="top-right-top">
							<h2>惠农信息</h2>
							<p>即时更新共享种植经验</p>
							<ul class="pic">
								<li>
									<image src="@/static/image/home/bg1.jpg"></image>
								</li>
								<li>
									<image src="@/static/image/home/bg1.jpg"></image>
								</li>
							</ul>
						</view>
						<view class="top-right-bottom">
							<h2>看视频看产品</h2>
							<p>全网都在看的新鲜视频</p>
							<ul class="pic">
								<li>
									<image src="@/static/image/home/bg1.jpg"></image>
								</li>
								<li>
									<image src="@/static/image/home/bg1.jpg"></image>
								</li>
							</ul>
						</view>
					</view>
				</view>
				<view class="bottom">
					<view class="nearby clearfix">
						<view class="nearby-title fl">
							<image src="@/static/image/home/bg1.jpg"></image>
						</view>
						<view class="nearby-info fl">
							<h2>县鱼特色农品馆</h2>
							<p>网罗地标好货 直采农特产品</p>
						</view>
						<view class="nearby-banner fr">
							<image src="@/static/image/home/bg1.jpg"></image>
						</view>
					</view>
				</view>
			</view>
			<view class="look-matter clearfix">
				<view class="look-goods fl">
					<h2>找货</h2>
					<p>优质好货榜</p>
					<image src="@/static/image/home/bg1.jpg"></image>
				</view>
				<view class="look-personal fl">
					<h2>找人</h2>
					<p>诚信服务商</p>
					<image src="@/static/image/home/bg1.jpg"></image>
				</view>
				<view class="look-coupon fl">
					<h2>领券中心</h2>
					<p>领券下单更优惠</p>
					<image src="@/static/image/home/bg1.jpg"></image>
				</view>
			</view>
			<view class="product">
				<scroll-view class="product-tab-list" scroll-x="true" scroll-left="120">
					<text v-for="(item,index) in productTab" :key="index" :class="{selected: productTabSelectedInd == index}" @tap="productTabChange(index)">{{ item.name }}</text>
				</scroll-view>
				<view v-show="productTabSelectedInd == 0">
					<view v-for="(item,index) in productList" :key="index" class="list-item">
						<dl>
							<dt>
								<image src="@/static/image/home/bg1.jpg"></image>
							</dt>
							<dd>
								<p class="title">销售农产品销售农产品销售</p>
								<p class="info">
									<text class="money">￥<i>1200</i>/吨</text>
									<text class="person">155人付款</text>
									<text class="score">4.00评分</text>
								</p>
							</dd>
						</dl>
						<view v-show="refreshList[0].isRefresh">{{ refreshList[0].text }}</view>
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
				swiperList: [{ // swiper列表
						url: '/static/image/home/bg1.jpg'
					},
					{
						url: '/static/image/home/bg2.jpg'
					}
				],
				searchContent: '', // 头部搜索内容 
				address: '默认', // 定位
				productTab: [{
						name: '猜你喜欢'
					},
					{
						name: '种地'
					},
					{
						name: '除草'
					},
					{
						name: '农场品销售'
					}
				],
				productTabSelectedInd: 0, // 产品分类选中下标
				productList: [{},{},{},{},{},{},{},{}], // 产品列表
				refreshList: [ // 产品列表上拉文案
					{
						text: '......',
						isRefresh: false // 当无数据可刷新时 改为true
					}
				],
			}
		},
		onLoad() {
			uni.getLocation({
				type: 'wgs84',
				geocode: true,
				success: (res) => {
					// #ifdef APP-PLUS
					this.address = res.address.district;
					// #endif
				}  
			});
		},
		onReachBottom(){ // 触发上拉加载
			// TODO productTabSelectedInd 和 refreshList['isRefresh']不为true ,说明有数据
		},
		methods: {
			searchConfirm() { // 搜索框输入
				
				uni.hideKeyboard();
			},
			selectRegion() { // 选择地区
				this.$Router.push('/pages/home/selectRegion');
			},
			productTabChange(ind) { // 产品分类切换
				this.productTabSelectedInd = ind;
			},
			jumpProductList(){ // 跳转产品列表
				this.$Router.push({path: '/pages/classification/productList'});
			},
			test() {
				this.$Router.push({path: '/pages/release/information/information'})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.home-header {
		height: 210rpx;
		background: linear-gradient(180deg, rgba(75, 198, 83, 1) 0%, rgba(130, 229, 139, 1) 100%);
		padding-top: 70rpx;

		.search-box {
			height: 66rpx;
			display: flex;

			.address {
				flex: 23;
				height: 100%;
				display: flex;
				align-items: center;

				.address-img {
					width: 33rpx;
					height: 33rpx;
					margin: 0 10rpx 0 14rpx;
				}

				text {
					font-size: 32rpx;
					color: #FFFFFF;
					margin-right: 9rpx;
					white-space: nowrap;
				}

				.address-select-img {
					width: 12rpx;
					height: 7rpx;
					margin-right: 25rpx;
				}
			}

			.search {
				flex: 65;
				height: 100%;
				border-radius: 33rpx;
				overflow: hidden;
				background: #ffffff url(../../static/image/home/search.png) no-repeat 29rpx center;
				background-size: 24rpx 23rpx;

				.search-input {
					height: 66rpx;
					line-height: 66rpx;
					padding-left: 61rpx;
					color: #333333;
					font-size: 28rpx;
				}
			}

			.chat {
				flex: 12;
				height: 100%;
				line-height: 66rpx;
				text-align: center;

				image {
					width: 40rpx;
					height: 40rpx;
					vertical-align: middle;
				}
			}
		}

		.banner {
			margin: 20rpx 24rpx 0 24rpx;

			.banner-cantainer {
				width: 100%;
				height: 208rpx;
				border-radius: 18rpx;
				overflow: hidden;
				margin: 0 auto;
			}
		}
	}

	.swiper {
		width: 100%;
		height: 100%;
	}

	.swiper-slide {
		border-radius: 18rpx;
		overflow: hidden;
	}

	.swiper-image {
		width: 100%;
		height: 100%;
	}

	.searchPlaceholder {
		color: #999999;
		font-size: 28rpx;
	}

	.home-section {
		background: #F5F5F5;
		.main-business {
			width: 93.6%;
			margin: 0 auto;
			height: 220rpx;
			padding-top: 80rpx;
			display: flex;
			justify-content: space-around;

			dl {
				dt {
					width: 100rpx;
					height: 100rpx;
					margin-top: 41rpx;

					image {
						width: 100%;
						height: 100%;
					}
				}

				dd {
					font-size: 24rpx;
					line-height: 33rpx;
					color: #666666;
					text-align: center;
					margin-top: 16rpx;
				}
			}
		}

		.recommend {
			width: 93.6%;
			margin: 0 auto;
			background: #ffffff;
			border-radius: 24rpx;
			overflow: hidden;

			h3 {
				font-size: 32rpx;
				color: #333333;
				text-align: center;
				line-height: 45rpx;
				padding-top: 30rpx;
				font-weight: bold;
			}

			ul {
				display: flex;
				align-items: center;
				margin-top: 18rpx;
				justify-content: center;

				li {
					color: #6fc170;
					font-size: 22rpx;
					padding: 3rpx 8rpx;
					background: #e0f5e0;
					border-radius: 2rpx;
					margin: 0 5rpx;
				}
			}

			.recommend-form {
				margin: 33rpx auto 0 auto;
				width: 88.6%;

				.input-list {
					background: #F8F8F8;
					border-radius: 8rpx;
					height: 73rpx;
					display: flex;
					align-items: center;

					text {
						color: #666666;
						font-size: 28rpx;
						padding-left: 26rpx;
					}

					input {
						margin-left: 26rpx;
						color: #333333;
						font-size: 28rpx;
					}
				}

				.input-list-top {
					margin-top: 10rpx;
				}

				.recommend-btn {
					height: 73rpx;
					margin: 20rpx 0 40rpx 0;
					background: #4bc653;
					border-radius: 8rpx;
					font-size: 28rpx;
					color: #FFFFFF;
					border: none;
				}

				.recommend-btn-hover {
					background: #09a706;
				}
			}
		}

		.server {
			width: 93.6%;
			margin: 20rpx auto 0 auto;
			background: #ffffff;
			border-radius: 24rpx;

			.top {
				border-bottom: 1px solid #EBEBEB;

				.top-left {
					width: 50%;
					height: 100%;
					border-right: 1rpx solid #EBEBEB;
					box-sizing: border-box;

					h2 {
						color: #333333;
						font-size: 32rpx;
						line-height: 45rpx;
						margin: 20rpx 0 0 30rpx;
						font-weight: bold;
					}

					p {
						line-height: 30rpx;
						font-size: 22rpx;
						margin-left: 30rpx;
						color: #999999;
					}

					text {
						color: #4BC653;
						font-size: 22rpx;
						padding: 3rpx 8rpx;
						background: #c5fed0;
						border-radius: 2rpx;
						margin: 14rpx 0 0 30rpx;
						display: inline-block;
					}

					.pic {
						margin-left: 30rpx;
						margin-top: 20rpx;
						display: flex;
						flex-wrap: wrap;

						li {
							width: 148rpx;
							height: 148rpx;
							border-radius: 8rpx;
							overflow: hidden;
							margin: 0 10rpx 15rpx 0;

							image {
								display: block;
								width: 150rpx;
								height: 150rpx;
							}
						}
					}
				}

				.top-right {
					width: 50%;
					height: 100%;

					.top-right-top {
						h2 {
							color: #333333;
							font-size: 32rpx;
							line-height: 45rpx;
							margin: 20rpx 0 0 30rpx;
							font-weight: bold;
						}

						p {
							line-height: 30rpx;
							font-size: 22rpx;
							margin-left: 30rpx;
							color: #999999;
						}

						.pic {
							padding: 15rpx 0 21rpx 0;
							display: flex;
							justify-content: center;
							border-bottom: 1rpx solid #EBEBEB;

							li {
								width: 138rpx;
								height: 112rpx;
								margin: 0 15rpx;

								image {
									width: 100%;
									height: 100%;
								}
							}
						}
					}

					.top-right-bottom {
						h2 {
							color: #333333;
							font-size: 32rpx;
							line-height: 45rpx;
							margin: 17rpx 0 0 30rpx;
							font-weight: bold;
						}

						p {
							line-height: 30rpx;
							font-size: 22rpx;
							margin: 3rpx 0 0 30rpx;
							color: #999999;
						}

						.pic {
							padding-top: 7rpx;
							display: flex;
							justify-content: center;

							li {
								width: 134rpx;
								height: 134rpx;
								margin: 0 10rpx;
								border-radius: 8rpx;
								overflow: hidden;

								image {
									width: 100%;
									height: 100%;
								}
							}
						}
					}
				}
			}

			.bottom {
				.nearby {
					.nearby-title {
						margin-top: 18rpx;
						padding: 0 20rpx 0 30rpx;
						border-right: 1rpx solid #EBEBEB;

						image {
							width: 70rpx;
							height: 72rpx;
							display: block;
						}
					}

					.nearby-info {
						width: 50%;

						h2 {
							margin: 18rpx 0 0 20rpx;
							font-size: 26rpx;
							color: #333333;
							font-weight: bold;
							line-height: 37rpx;
						}

						p {
							font-size: 21rpx;
							line-height: 29rpx;
							color: #999999;
							margin: 2rpx 0 0 20rpx;
						}
					}

					.nearby-banner {
						margin: 5rpx 24rpx 5rpx 0;

						image {
							width: 192rpx;
							height: 95rpx;
							display: block;
						}
					}
				}
			}
		}

		.look-matter {
			display: flex;
			width: 93.6%;
			margin: 20rpx auto 0 auto;
			background: #ffffff;
			border-radius: 24rpx 24rpx 0 0;
			padding-bottom: 15rpx;

			h2 {
				line-height: 45rpx;
				font-size: 32rpx;
				margin: 20rpx 0 0 20rpx;
				color: #333333;
			}

			p {
				line-height: 30rpx;
				font-size: 22rpx;
				margin-left: 20rpx;
				color: #999999;
			}

			.look-goods {
				flex: 25;
				box-sizing: border-box;
				border-right: 1rpx solid #EBEBEB;

				image {
					width: 134rpx;
					height: 134rpx;
					display: block;
					margin: 12rpx auto 0 auto;
				}
			}

			.look-personal {
				flex: 25;
				box-sizing: border-box;
				border-right: 1rpx solid #EBEBEB;

				image {
					width: 134rpx;
					height: 134rpx;
					display: block;
					margin: 12rpx auto 0 auto;
				}
			}

			.look-coupon {
				flex: 50;

				image {
					width: 286rpx;
					height: 127rpx;
					margin: 15rpx 0 0 20rpx;
				}
			}
		}

		.product {
			padding: 30rpx 30rpx 0 30rpx;
			background: #ffffff;

			.product-tab-list {
				white-space: nowrap;

				text {
					margin-right: 30rpx;
					color: #999999;
					font-size: 28rpx;
					line-height: 53rpx;
					display: inline-block;
				}

				text.selected {
					font-size: 38rpx;
					color: #22B92C;
					border-bottom: 4rpx solid #22B92C;
				}
			}

			.list-item {
				border-bottom: 1rpx solid #EBEBEB;
				&:last-child{
					border: none;
				}
				dl {
					display: flex;
					height: 100%;
					padding: 30rpx 0;
					dt {
						width: 170rpx;
						height: 170rpx;
						image {
							width: 100%;
							height: 100%;
						}
					}

					dd {
						padding-left: 18rpx;
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
							margin-top: 34rpx;
							.money {
								font-size: 24rpx;
								color: #FF8202;

								i {
									font-size: 40rpx;
								}
							}

							.person {
								display: inline-block;
								width: 200rpx;
								text-align: right;
								font-size: 24rpx;
								color: #999999;
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
		}
	}

	.recommendPlaceholder {
		color: #999999;
		font-size: 28rpx;
	}
</style>
