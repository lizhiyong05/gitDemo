<template>
	<!-- 验证码登录 -->
	<view>
		<headerComponent headerTitle="登录"></headerComponent>
		<section class="login-v-code-section section-padding-top-138">
			<h2>验证手机号</h2>
			<p class="info">为了您的账户安全，请验证手机号</p>
			<view class="login-v-code-form">
				<ul>
					<li>
						<input type="number" placeholder="请输入手机号" v-model="loginForm.mobile" maxlength="11" placeholder-class="inputPlaceholder">
					</li>
					<li>
						<text class="get-code" @click="getCode" v-if="loginForm.count == 60">获取验证码</text>
						<text class="get-code code-s" v-if="loginForm.count != 60">{{ loginForm.count }}s</text>
						<input type="number" placeholder="请输入短信验证码" v-model="loginForm.smsCode" maxlength="6" placeholder-class="inputPlaceholder">
					</li>
				</ul>
				<button type="default" class="login-form-btn" hover-class="btn-hover" @tap="loginSubmit">登录</button>
			</view>
		</section>
	</view>
</template>

<script>
	import headerComponent from '../../components/headerComponent.vue'
	import {
		setStorageGlobal
	} from '@/common/js/global.js'
	import {
		requestPost
	} from '@/common/js/api.js'
	export default {
		components: {
			headerComponent
		},
		data() {
			return {
				loginForm: {
					mobile: '',
					smsCode: '',
					count: 60
				}
			};
		},
		methods: {
			getCode() { // 获取手机号验证码
				if (this.telV()) { // 手机号验证通过
					requestPost('/app/api/sendSmsCode', {
						mobile: this.loginForm.mobile,
						type: 1, // 是否验证用户存在：1验证 2不验证
					}).then(res => {
						// 开启定时器
						let timer = setInterval(() => {
							this.loginForm.count--;
							if (this.loginForm.count == -1) {
								this.loginForm.count = 60;
								clearInterval(timer);
							}
						}, 1000)
						uni.showToast({
							title: '发送成功',
							icon: 'none',
							duration: 2000
						});
					})
				}
			},
			telV() { // 手机号 验证
				let telReg = /^1[3456789]\d{9}$/;
				if (this.loginForm.mobile === '') {
					uni.showToast({
						title: '手机号不能为空',
						icon: 'none'
					});
					return false;
				} else {
					if (!telReg.test(this.loginForm.mobile)) {
						uni.showToast({
							title: '手机号格式错误',
							icon: 'none'
						});
						return false;
					}
				}
				return true;
			},
			codeV() { // 短信验证码 验证
				let codeReg = /^\d+$/;
				if (this.loginForm.smsCode == '') {
					uni.showToast({
						title: '短信验证码不能为空',
						icon: 'none'
					});
					return false;
				} else {
					if (!codeReg.test(this.loginForm.smsCode)) {
						uni.showToast({
							title: '短信验证码格式错误',
							icon: 'none'
						});
						return false;
					}
				}
				return true;
			},
			loginSubmit() { // 提交
				if (this.telV() && this.codeV()) {
					requestPost('/app/api/mobileLogin', {
							mobile: this.loginForm.mobile, // 手机号
							smsCode: this.loginForm.smsCode, // 密码
						})
						.then((res) => {
							uni.showToast({
								title: '登录成功',
								icon: 'none',
								duration: 2000
							});
							setStorageGlobal('user_info', res.data);
							this.$Router.pushTab({
								path: '/pages/home/home'
							});
						})
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.login-v-code-section {
		margin: 48rpx 48rpx 0 48rpx;

		h2 {
			font-size: 52rpx;
			line-height: 73rpx;
		}

		.info {
			font-size: 28rpx;
			color: #999999;
		}

		.login-v-code-form {
			li {
				height: 130rpx;
				border-bottom: 1rpx solid #CCCCCC;
				overflow: hidden;
				position: relative;
				display: flex;
				align-items: flex-end;

				input {
					height: 70rpx;
					line-height: 70rpx;
				}

				.get-code {
					position: absolute;
					right: 0;
					line-height: 37rpx;
					font-size: 26rpx;
					bottom: 17rpx;
					z-index: 1;
					color: #22B92C
				}

				.code-s {
					color: #999999
				}
			}



			.login-form-btn {
				width: 100%;
				height: 102rpx;
				font-size: 36rpx;
				color: #ffffff;
				margin: 70rpx auto 0 auto;
				background: #22B92C;
				display: block;
				border-radius: 51rpx;
			}

			.btn-hover {
				background: #09a706;
			}
		}
	}

	.inputPlaceholder {
		color: #CCCCCC;
		font-size: 30rpx;
	}
</style>
