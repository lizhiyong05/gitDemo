<template><!-- 分类列表 -->
	<view>
		<header class="home-header">
			<view class="search-box">
				<view class="address" @tap="selectRegion">
					<image src="@/static/image/classification/address.png" class="address-img" />
					<text>{{ address }}</text>
					<image src="@/static/image/classification/address-select.png" class="address-select-img"></image>
				</view>
				<view class="search">
					<input type="text" class="search-input" v-model="searchContent" @confirm="searchConfirm" placeholder="搜索服务或"
					 confirm-type="search" placeholder-class="searchPlaceholder" />
				</view>
				<view class="chat">
					<image src="@/static/image/classification/msg.png"></image>
				</view>
			</view>
		</header>
		<section class="class-section clearfix">
			<view class="class-ification fl">
				<ul>
					<li class="select-class"><text>种植</text></li>
					<li><text>种植</text></li>
					<li><text>种植</text></li>
					<li><text>种植</text></li>
					<li><text>种植</text></li>
					<li><text>种植</text></li>
					<li><text>种植</text></li>
					<li><text>种植</text></li>
					<li><text>种植</text></li>
					<li><text>种植</text></li>
					<li><text>种植</text></li>
					<li><text>种植</text></li>
					<li><text>种植</text></li>
					<li><text>种植</text></li>
					<li><text>种植</text></li>
					<li><text>种植</text></li>
					<li><text>种植</text></li>
					<li><text>种植</text></li>
					<li><text>种植</text></li>
					<li><text>种植</text></li>
					<li><text>种植</text></li>
					<li><text>种植</text></li>
					<li><text>种植</text></li>
					<li><text>种植</text></li>
					<li><text>种植</text></li>
					<li><text>种植</text></li>
					<li><text>种植</text></li>
					<li><text>种植</text></li>
					<li><text>种植</text></li>
					<li><text>种植</text></li>
					<li><text>种植</text></li>
					<li><text>种植</text></li>
					<li><text>种植</text></li>
					<li><text>种植</text></li>
					<li><text>种植</text></li>
					<li><text>种植</text></li>
					<li><text>种植</text></li>
					<li><text>种植</text></li>
					<li><text>种植</text></li>
					<li><text>种植</text></li>
					<li><text>种植</text></li>
					<li><text>种植</text></li>
					<li><text>种植</text></li>
					<li><text>种植</text></li>
					<li><text>种植3</text></li>
					<li><text>种植2</text></li>
					<li><text>种植1</text></li>
				</ul>
			</view>
			<view class="class-product fl">
				<view class="product-list" v-for="(item,index) in productList" :key="index">
					<image src="@/static/image/home/bg1.jpg"></image>
					<p>苹果</p>
				</view>
			</view>
		</section>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				address: '默认', // 定位
				searchContent: '', // 头部搜索内容 
				productList: [{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}], // 产品列表
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
		methods: {
			selectRegion() { // 选择地区
				uni.navigateTo({
					url: '/pages/home/selectRegion'
				});
			},
			searchConfirm() { // 搜索框输入
				uni.hideKeyboard();
			},
		}
	}
</script>

<style lang="scss" scoped>
	.home-header {
		background: #ffffff;
		padding-top: 50rpx;
		height: 88rpx;
		display: flex;
		align-items: center;
		position: fixed;
		left: 0;
		top: 0;
		right: 0;

		.search-box {
			flex: 1;
			height: 66rpx;
			display: flex;

			.address {
				flex: 23;
				height: 100%;
				display: flex;
				align-items: center;

				.address-img {
					width: 28rpx;
					height: 33rpx;
					margin: 0 10rpx 0 14rpx;
				}

				text {
					font-size: 32rpx;
					color: #333333;
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
				background: #f2f2f2 url(../../static/image/home/search.png) no-repeat 29rpx center;
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

	}

	.class-section {
		position: fixed;
		top: 138rpx;
		bottom: 0;
		left: 0;
		right: 0;

		.class-ification {
			font-size: 10rpx;
			width: 22%;
			position: absolute;
			top: 0;
			bottom: 0;
			overflow-y: scroll;

			ul {
				background: #F8F8F8;

				li {
					height: 100rpx;
					line-height: 100rpx;
					color: #888888;
					font-size: 28rpx;
					text-align: center;
					overflow: hidden;

					text {
						display: block;
						line-height: 40rpx;
						margin-top: 30rpx;
					}
				}

				li.select-class {
					background: #ffffff;
					color: #22B92C;
					font-size: 30rpx;
				}

				li.select-class text {
					border-left: 8rpx solid #22B92C;
				}
			}
		}

		.class-ification::-webkit-scrollbar {
			display: none;
		}

		.class-product {
			width: 78%;
			position: absolute;
			top: 0;
			left: 22%;
			right: 0;
			bottom: 0;
			overflow-y: scroll;
			display: flex;
			flex-wrap: wrap;
			align-content: flex-start;
			.product-list {
				margin-top: 35rpx;
				margin-bottom: 0;
				text-align: center;
				image {
					width: 114rpx;
					height: 114rpx;
				}

				p {
					color: #333333;
					font-size: 20rpx;
					line-height: 38rpx;
					padding-top: 8rpx;
				}
				&:nth-child(3n-2){
					width: 38%;
				}
				&:nth-child(3n-1){
					width: 24%;
				}
				&:nth-child(3n){
					width: 38%;
				}
			}
		}
	}

	.searchPlaceholder {
		color: #999999;
		font-size: 28rpx;
	}
</style>
