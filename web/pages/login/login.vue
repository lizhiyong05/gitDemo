<template>
	<!-- 密码登录 -->
	<view>
		<headerComponent headerTitle="登录"></headerComponent>
		<section class="login-section section-padding-top-138">
			<h2>欢迎您回到XXXX</h2>
			<view class="login-form">
				<ul>
					<li>
						<input type="number" placeholder="请输入手机号" v-model="loginForm.mobile" maxlength="11" placeholder-class="inputPlaceholder">
					</li>
					<li v-show="!eyeIsShow">
						<image src="@/static/image/login/hide-eye.png" class="hide-eye" @tap="changePassword()"></image>
						<input type="text" placeholder="请输入密码" v-model="loginForm.password" maxlength="18" placeholder-class="inputPlaceholder">
					</li>
					<li v-show="eyeIsShow">
						<image src="@/static/image/login/show-eye.png" class="show-eye" @tap="changePassword()"></image>
						<input type="text" :password="true" placeholder="请输入密码" v-model="loginForm.password" maxlength="18"
						 placeholder-class="inputPlaceholder">
					</li>
				</ul>
				<button type="default" class="login-form-btn" hover-class="btn-hover" @tap="loginSubmit">登录</button>
				<p class="login-outher clearfix"><text class="fl" @tap="jumpLoginCode">验证码登录</text><text class="fr" @click="jumpChangePasswordStep1">忘记密码?</text></p>
			</view>
		</section>
		<footer class="login-footer">
			<view class="login-footer-mode">
				<image src="@/static/image/login/wx.png" @tap="wxLogin"></image>
				<image src="@/static/image/login/qq.png" @tap="qqLogin"></image>
			</view>
			<view class="login-footer-box" @tap="changeAggrement">
				<image v-if="loginForm.checked" class="checkbox-icon" src='@/static/image/login/checked.png'></image>
				<image v-if="!loginForm.checked" class="checkbox-icon" src='@/static/image/login/no-checked.png'></image>
				我同意 <text @tap.stop="">《xxx用户使用协议》</text>
			</view>
		</footer>
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
				eyeIsShow: true,
				loginForm: {
					mobile: '',
					password: '',
					checked: false
				}
			}
		},
		methods: {
			changePassword() { // 切换密码输入框状态
				this.eyeIsShow = !this.eyeIsShow;
			},
			changeAggrement() { // 是否同意协议
				this.loginForm.checked = !this.loginForm.checked;
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
			passV() { // 验证密码 6-18位字母、数字、特殊符号
				let passwordReg = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[~!@#$%^&*()_+`\-={}:";'<>?,./]).{6,18}$/;
				if (this.loginForm.password === '') {
					uni.showToast({
						title: '密码不能为空',
						icon: 'none',
						duration: 3000
					});
					return false;
				} else {
					if (!passwordReg.test(this.loginForm.password)) {
						uni.showToast({
							title: '密码格式错误,格式为6-18位字母+数字+特殊符号',
							icon: 'none',
							duration: 3000
						});
						return false;
					}
				}
				return true;
			},
			checkV() { // 是否统一协议
				if (!this.loginForm.checked) { // 用户协议是否勾选
					uni.showToast({
						title: '请仔细阅读下方协议并勾选',
						icon: 'none'
					});
					return false;
				}
				return true;
			},
			loginSubmit() { // 提交 登录接口
				if (this.telV() && this.passV() && this.checkV()) {
					requestPost('/app/api/login', {
							mobile: this.loginForm.mobile, // 手机号
							pass: this.loginForm.password, // 密码
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
			},
			jumpLoginCode() { // 验证码登录
				this.$Router.push({
					path: '/pages/login/loginCode'
				});
			},
			jumpChangePasswordStep1() { // 忘记密码
				this.$Router.push({
					path: '/pages/login/changePasswordStep1'
				});
			},
			wxLogin() { // 微信登录
				uni.showToast({
					title: '第三方登录正在接入中',
					icon: 'none'
				});
			},
			qqLogin() { // qq登录
				uni.showToast({
					title: '第三方登录正在接入中',
					icon: 'none'
				});
			}
		}
	}
</script>

<style lang="scss" scoped>
	.login-section {
		margin: 48rpx 48rpx 0 48rpx;

		h2 {
			font-size: 52rpx;
			line-height: 73rpx;
		}

		.login-form {
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

				.hide-eye {
					width: 41rpx;
					height: 20rpx;
					position: absolute;
					right: 0;
					bottom: 25rpx;
					z-index: 1;
				}

				.show-eye {
					width: 41rpx;
					height: 27rpx;
					position: absolute;
					right: 0;
					bottom: 25rpx;
					z-index: 1;
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

			.login-outher {
				font-size: 28rpx;
				line-height: 40rpx;
				color: #666666;
				margin-top: 16rpx;
			}
		}
	}

	.inputPlaceholder {
		color: #CCCCCC;
		font-size: 30rpx;
	}

	.login-footer {
		position: fixed;
		right: 0;
		bottom: 37rpx;
		left: 0;

		.login-footer-mode {
			text-align: center;

			image {
				width: 88rpx;
				height: 88rpx;
				margin: 0 26rpx;
			}
		}

		.login-footer-box {
			color: #999999;
			margin-top: 45rpx;
			text-align: center;

			.checkbox-icon {
				width: 26rpx;
				height: 26rpx;
				vertical-align: middle;
				padding-right: 13rpx;
			}

			text {
				color: #22B92C;
			}
		}
	}
</style>
