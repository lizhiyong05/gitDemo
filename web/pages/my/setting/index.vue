<template>
	<!-- 设置 -->
	<view>
		<headerComponent headerTitle="系统设置" headerStyle="border-bottom: 1px solid #e5e5e5"></headerComponent>
		<section class="section-padding-top-138">
			<ul>
				<li @tap="jumpFeedBack">
					<p class="title">意见反馈</p>
				</li>
				<li @tap="jumpAboutUs">
					<p class="title">关于我们</p>
				</li>
				<li @tap="cleanCache">
					<p class="title">清理缓存</p>
					<p class="info">{{ fileSizeString }}</p>
				</li>
				<li @tap="uploadLog">
					<p class="title">上传日志</p>
				</li>
			</ul>
		</section>
		<view class="btn-content">
			<button type="default" class="login-out" hover-class="btn-hover" @tap="loginOut">退出当前登陆</button>
		</view>
		<tuiModal :show="cleanModal.cleanModalIsShow" :content="cleanModal.content" :button="cleanModal.button" :size="cleanModal.size"
		 :color="cleanModal.color" @click="modalTouch">

		</tuiModal>
		<tuiModal :show="loginOutModal.loginOutIsShow" :content="loginOutModal.content" :button="loginOutModal.button" :size="loginOutModal.size"
		 :color="loginOutModal.color" @click="loginOutConfirm">

		</tuiModal>
	</view>
</template>

<script>
	import headerComponent from '@/components/headerComponent.vue'
	import {
		requestPost
	} from '@/common/js/api.js'
	import tuiModal from '@/components/tui-modal/tui-modal.vue'
	import {
		removeStorageGlobal,
		getStorageGlobal
	} from '@/common/js/global.js'
	export default {
		components: {
			headerComponent,
			tuiModal
		},
		data() {
			return {
				fileSizeString: '', // 缓存大小
				cleanModal: {
					cleanModalIsShow: false, // 确定清除缓存弹窗是否显示
					content: "确定清除缓存吗?",
					button: [{
							text: '取消',
							plain: true
						},
						{
							text: '确定'
						}
					],
					size: 32,
					color: '#333333'
				},
				loginOutModal: {
					loginOutIsShow: false,
					content: "确定要退出登陆吗?",
					button: [{
							text: '取消',
							plain: true
						},
						{
							text: '确定'
						}
					],
					size: 32,
					color: '#333333'
				}
			};
		},
		mounted() {
			// #ifndef H5
			this.getCache()
			// #endif
		},
		methods: {
			getCache() { // 获取缓存
				let that = this;
				plus.cache.calculate(function(size) {
					let sizeCache = parseInt(size);
					if (sizeCache == 0) {
						that.fileSizeString = "0B";
					} else if (sizeCache < 1024) {
						that.fileSizeString = sizeCache + "B";
					} else if (sizeCache < 1048576) {
						that.fileSizeString = (sizeCache / 1024).toFixed(2) + "KB";
					} else if (sizeCache < 1073741824) {
						that.fileSizeString = (sizeCache / 1048576).toFixed(2) + "MB";
					} else {
						that.fileSizeString = (sizeCache / 1073741824).toFixed(2) + "GB";
					}
				});
			},
			clearCache() { // 清除缓存
				let that = this;
				let os = plus.os.name;
				if (os == 'Android') {
					let main = plus.android.runtimeMainActivity();
					let sdRoot = main.getCacheDir();
					let files = plus.android.invoke(sdRoot, "listFiles");
					let len = files.length;
					for (let i = 0; i < len; i++) {
						let filePath = '' + files[i]; // 没有找到合适的方法获取路径，这样写可以转成文件路径  
						plus.io.resolveLocalFileSystemURL(filePath, function(entry) {
							if (entry.isDirectory) {
								entry.removeRecursively(function(entry) { //递归删除其下的所有文件及子目录  
									uni.showToast({
										title: '缓存清理完成',
										duration: 2000
									});
									that.getCache(); // 重新计算缓存  
								}, function(e) {
									console.log(e.message)
								});
							} else {
								entry.remove();
							}
						}, function(e) {
							console.log('文件路径读取失败')
						});
					}
				} else { // ios暂时未找到清理缓存的方法，以下是官方提供的方法，但是无效，会报错  
					plus.cache.clear(function() {
						uni.showToast({
							title: '缓存清理完成',
							duration: 2000
						});
						that.formatSize();
					});
				}
			},
			jumpFeedBack() { // 跳转意见反馈
				this.$Router.push({
					path: '/pages/my/feedBack'
				});
			},
			jumpAboutUs() { // 跳转关于我们
				uni.showToast({
					title: '关于我们功能暂未开放',
					icon: 'none'
				})
			},
			cleanCache() { // 清除缓存
				let that = this;
				this.cleanModal.cleanModalIsShow = true;
			},
			modalTouch(arg) { // 点击了modal
				this.cleanModal.cleanModalIsShow = false;
				console.log(this.cleanModal.cleanModalIsShow);
				if (arg.index == 1) {
					this.clearCache();
				}
			},
			uploadLog() { // 上传日志
				uni.showToast({
					title: '上传日志功能暂未开放',
					icon: 'none'
				})
			},
			loginOut() { // 退出登陆
				this.loginOutModal.loginOutIsShow = true;
			},
			loginOutConfirm(arg) { // 退出登陆确认
				this.loginOutModal.loginOutIsShow = false;
				if (arg.index == 1) {
					uni.showLoading({
						title: '退出中'
					});
					requestPost('/app/api/user/logout ', {
						uid: getStorageGlobal('user_info').uid
					}).then((res) => {
						removeStorageGlobal('user_info')
							.then(res => {
								uni.hideLoading();
								if (res) {
									uni.showToast({
										title: '退出成功',
										icon: 'none'
									});
									this.$Router.pushTab({
										path: '/pages/home/home'
									});
								} else {
									uni.showToast({
										title: '退出失败',
										icon: 'none'
									});
								}
							})
					})

				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	page {
		background: #EDEDED;
	}

	section {
		ul {
			background: #ffffff;
			padding: 0 26rpx;

			li {
				height: 102rpx;
				line-height: 102rpx;
				border-bottom: 1px solid #EBEBEB;
				background: url(@/static/image/my/right-enter.png) right center no-repeat;
				background-size: 12rpx 21rpx;
				display: flex;

				&:last-child {
					border: none;
				}

				.title {
					font-size: 30rpx;
					color: #333333;
				}

				.info {
					flex: 1;
					text-align: right;
					padding-right: 32rpx;
					font-size: 30rpx;
					color: #CCCCCC;
				}
			}
		}
	}

	.btn-content {

		.login-out {
			width: 87.2%;
			height: 90rpx;
			background: #FF5C3C;
			color: #ffffff;
			border-radius: 51rpx;
			font-size: 32rpx;
			display: block;
			position: fixed;
			bottom: 60rpx;
			left: 50%;
			transform: translateX(-50%);
		}

		.btn-hover {
			background: #ff470f;
		}
	}
</style>
