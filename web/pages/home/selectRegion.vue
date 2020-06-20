<template><!-- 定位选择 -->
	<view>
		<header class="header">
			<view class="header-left">
				<image src="@/static/image/header/back-white.png" class="header-back" @tap="navigateBack"></image>
			</view>
			<view class="header-search">
				<input type="text" class="search-input" v-model="searchContent" placeholder="搜索地区" confirm-type="search"
				 placeholder-class="searchPlaceholder" @input="inputSearch"/>
			</view>
		</header>
		<section class="section" v-show="!searchContainerIsShow">
			<view class="current-province">
				<p class="current">当前定位地区：<text>北京市</text></p>
				<view class="city" v-for="(item,key,index) in cityList" :key="index">
					<p class="current-letter" :id="'index_'+index">{{key}}</p>
					<ul>
						<li v-for="(item2,index2) in item" :key="index2">{{item2.name}}</li>
					</ul>
				</view>
			</view>
			<view class="letter">
				<text v-for="(item,key,index) in cityList" :key="index" @tap="tapLetter('index_'+index)">{{ key }}</text>
			</view>
		</section>
		<section class="search-section" v-show="searchContainerIsShow">
			<ul>
				<li v-for="(item,index) in searchContainerList" :key="index">{{item.name}}</li>
			</ul>
		</section>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				searchContent: '', // 搜索内容
				searchContainerList: [], // 搜索结果
				letterList: [], // 字母列表
				scrollTop: '', // 页面滚动距离
				searchContainerIsShow: false, // 是否显示搜索结果
				cityList: {
					A: [{
							name: '鞍山',
							id: 12,
						},
						{
							name: '鞍山',
							id: 12,
						},
						{
							name: '鞍山',
							id: 12,
						},
						{
							name: '鞍山',
							id: 12,
						},
						{
							name: '鞍山',
							id: 12,
						},
						{
							name: '鞍山',
							id: 12,
						}
					],
					B: [{
							name: '北京',
							id: 1
						},
						{
							name: '北京',
							id: 2
						},
						{
							name: '北京',
							id: 2
						},
						{
							name: '北京',
							id: 2
						},
						{
							name: '北京',
							id: 2
						},
						{
							name: '北京',
							id: 2
						},
						{
							name: '北京',
							id: 1
						},
						{
							name: '北京',
							id: 2
						},
						{
							name: '北京',
							id: 2
						},
						{
							name: '北京',
							id: 2
						},
						{
							name: '北京',
							id: 2
						}
					],
					C: [{
						name: '成都',
						id: 3
					}, {
						name: '成都',
						id: 3
					}, {
						name: '成都',
						id: 3
					}, {
						name: '成都',
						id: 3
					}, {
						name: '成都',
						id: 3
					}, {
						name: '成都',
						id: 3
					}, {
						name: '成都',
						id: 3
					}, {
						name: '成都',
						id: 3
					}, {
						name: '成都',
						id: 3
					}, {
						name: '成都',
						id: 3
					}, {
						name: '成都',
						id: 3
					}, {
						name: '成都',
						id: 3
					}, {
						name: '成都',
						id: 3
					}, {
						name: '成都',
						id: 3
					}, {
						name: '成都',
						id: 3
					}, {
						name: '成都',
						id: 3
					}, {
						name: '成都',
						id: 3
					}, {
						name: '成都',
						id: 3
					}, {
						name: '成都',
						id: 3
					}, {
						name: '成都',
						id: 3
					}, {
						name: '成都',
						id: 3
					}, {
						name: '成都',
						id: 3
					}, {
						name: '成都',
						id: 3
					}, {
						name: '成都',
						id: 3
					}, {
						name: '成都',
						id: 3
					}, {
						name: '成都',
						id: 3
					}, {
						name: '成都',
						id: 3
					}, ]
				}
			};
		},
		methods: {
			navigateBack() { // 返回上一页
				this.$Router.back();
			},
			onPageScroll(res) { //距离页面顶部距离
				this.scrollTop = res.scrollTop;
			},
			tapLetter(id) { // 点击字母
				uni.createSelectorQuery().in(this).select(`#${id}`).boundingClientRect(data => {
					uni.pageScrollTo({
						scrollTop: data.top + this.scrollTop - 69,
						duration: 300
					});
				}).exec();
			},
			inputSearch(){ // 键盘输入时触发
				if(this.searchContent.length){
					this.searchContainerIsShow = true;
				}else{
					this.searchContainerIsShow = false;
				}
				this.searchContainerList = [];
				// 过滤列表
				for(let key in this.cityList){
					for(let value of this.cityList[key]){
						let reg = new RegExp(this.searchContent);
						if(reg.test(value.name)){
							this.searchContainerList.push(value);
						}
					}
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.header {
		padding-top: 50rpx;
		line-height: 88rpx;
		display: flex;
		align-items: center;
		background: #ffffff;
		position: fixed;
		left: 0;
		top: 0;
		right: 0;
		z-index: 1;
		background: linear-gradient(180deg, rgba(75, 198, 83, 1) 0%, rgba(130, 229, 139, 1) 100%);

		.header-left {
			width: 100rpx;

			.header-back {
				width: 20rpx;
				height: 35rpx;
				vertical-align: middle;
				margin-left: 46rpx;
			}
		}

		.header-search {
			width: 600rpx;
			border-radius: 33rpx;
			height: 60rpx;
			line-height: 60rpx;
			overflow: hidden;
			background: #ffffff url(../../static/image/home/search.png) no-repeat 29rpx center;
			background-size: 24rpx 23rpx;

			.search-input {
				height: 60rpx;
				line-height: 60rpx;
				padding-left: 61rpx;
				color: #666666;
				font-size: 28rpx;
			}
		}
	}

	.searchPlaceholder {
		color: #999999;
		font-size: 28rpx;
	}

	.section {
		.current-province {
			padding-top: 138rpx;

			.current {
				font-size: 30rpx;
				line-height: 30rpx;
				padding: 30rpx 0 30rpx 24rpx;
				color: #666666;

				text {
					color: #333333;
				}
			}

			.city {
				.current-letter {
					font-size: 30rpx;
					color: #6f6f6f;
					background: #e8e8e8;
					padding-left: 24rpx;
				}

				ul {
					margin: 0 24rpx;

					li {
						line-height: 80rpx;
						color: #333333;
						font-size: 30rpx;
						border-bottom: 1rpx solid #f9f8f8;
					}

					li:last-child {
						border: none;
					}
				}
			}
		}

		.letter {
			position: fixed;
			top: 300rpx;
			right: 0;
			width: 60rpx;
			text-align: center;

			text {
				display: block;
				color: #333333;
				font-size: 40rpx;
			}
		}
	}

	.search-section {
		padding-top: 138rpx;
		ul {
			margin: 0 24rpx;
			li {
				line-height: 80rpx;
				color: #333333;
				font-size: 30rpx;
				border-bottom: 1rpx solid #f9f8f8;
			}
		}
	}
</style>
