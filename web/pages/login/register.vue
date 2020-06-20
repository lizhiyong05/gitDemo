<template><!-- 注册 -->
	<view>
		<loginHeaderComponent headerTitle="注册"></loginHeaderComponent>
		<section class="register-section section-padding-top-138">
			<h2>XXXX欢迎您</h2>
			<p class="info">为了您的账户安全，请验证手机号</p>
			<view class="register-form">
				<ul>
					<li>
						<input type="number" placeholder="请输入手机号" v-model="registerForm.mobile" maxlength="11" placeholder-class="inputPlaceholder">
					</li>
					<li>
						<text class="get-code" @tap="getCode" v-if="registerForm.count == 60">获取验证码</text>
						<text class="get-code code-s" v-if="registerForm.count != 60">{{ registerForm.count }}s</text>
						<input type="number" placeholder="请输入短信验证码" v-model="registerForm.smsCode" maxlength="6" placeholder-class="inputPlaceholder">
					</li>
				</ul>
				<p class="line">
					<text>邀请码(选填)</text>
				</p>
				<ul>
					<li>
						<input type="number" placeholder="请输入邀请码" v-model="registerForm.inviteMobile" maxlength="11" placeholder-class="inputPlaceholder">
					</li>
				</ul>
				<button type="default" class="register-form-btn" hover-class="btn-hover" @tap="registerSubmit">注册</button>
				<p class="register-outher clearfix"><text class="fr" @tap="goTelLogin">账号密码登录</text></p>
			</view>
		</section>
		<footer class="login-footer">
			<view class="login-footer-mode">
				<image src="@/static/image/login/wx.png" @tap="wxLogin"></image>
				<image src="@/static/image/login/qq.png" @tap="qqLogin"></image>
			</view>
			<view class="login-footer-box" @tap="changeAggrement">
				<image v-if="registerForm.checked" class="checkbox-icon" src='@/static/image/login/checked.png'></image>
				<image v-if="!registerForm.checked" class="checkbox-icon" src='@/static/image/login/no-checked.png'></image>
				我同意 <text @tap.stop="">《xxx用户使用协议》</text>
			</view>
		</footer>
	</view>
</template>

<script>
	import loginHeaderComponent from '../../components/loginHeaderComponent.vue'
	import { requestPost } from '@/common/js/api.js'
	import { setStorageGlobal } from '@/common/js/global.js'
	export default {
		components: {
			loginHeaderComponent
		},
		data() {
			return {
				registerForm: { // 注册
					mobile: '',
					smsCode: '',
					count: 60,
					checked: false,
					inviteMobile: '' // 邀请码
				}
			};
		},
		methods: {
			getCode() { // 获取手机验证码
				if (this.telV()) { // 手机号验证通过
					requestPost('/app/api/sendSmsCode',
						{
							mobile: this.registerForm.mobile,
							type: 2, // 是否验证用户存在：1验证 2不验证
						}
					).then( res => {
						// 开启定时器
						let timer = setInterval(() => {
							this.registerForm.count--;
							if (this.registerForm.count == -1) {
								this.registerForm.count = 60;
								clearInterval(timer);
							}
						}, 1000)
						uni.showToast({title: '发送成功',icon:'none',duration: 2000});
					})
					
				}
			},
			telV() { // 手机号 验证
				let telReg = /^1[3456789]\d{9}$/;
				if (this.registerForm.mobile === '') {
					uni.showToast({title: '手机号不能为空',icon:'none'});
					return false;
				} else {
					if (!telReg.test(this.registerForm.mobile)) {
						uni.showToast({title: '手机号格式错误',icon:'none'});
						return false;
					}
				}
				return true;
			},
			codeV() { // 短信验证码 验证
				let codeReg = /^\d+$/;
				if (this.registerForm.smsCode == '') {
					uni.showToast({title: '短信验证码不能为空',icon:'none'});
					return false;
				} else {
					if (!codeReg.test(this.registerForm.smsCode)) {
						uni.showToast({title: '短信验证码格式错误',icon:'none'});
						return false;
					}
				}
				return true;
			},
			registerSubmit() { // 提交
				if (this.telV() && this.codeV()) {
					if (!this.registerForm.checked) {
						uni.showToast({title: '请仔细阅读下方协议并勾选',icon:'none'});
						return false;
					}else {
						requestPost('/app/api/register',
							{
								mobile: this.registerForm.mobile, // 手机号
								smsCode: this.registerForm.smsCode, // 验证码
								inviteMobile: this.registerForm.inviteMobile, // 邀请码
							}
						).then(res => {
							uni.showToast({title: '注册成功',icon:'none',duration: 2000});
							setStorageGlobal('user_info',res.data);
							this.$Router.pushTab({path: '/pages/home/home'});
						})
					}
				}
			},
			goTelLogin() { // 账号密码登录
				this.$Router.push({path: '/pages/login/login'});
			},
			changeAggrement() { // 是否同意协议
				this.registerForm.checked = !this.registerForm.checked;
			},
			wxLogin() { // 微信登录
				uni.showToast({
					title: '第三方登录正在接入中',
					icon: 'none'
				});
			},
			qqLogin() { // qq登录
				uni.showToast({
					title: 'qq第三方登录正在接入中',
					icon: 'none'
				});
			}
		}
	}
</script>

<style lang="scss" scoped>
	.register-section {
		margin: 48rpx 48rpx 0 48rpx;

		h2 {
			font-size: 52rpx;
			line-height: 73rpx;
		}

		.info {
			font-size: 28rpx;
			color: #999999;
		}

		.register-form {
			margin-top: 40rpx;

			li {
				display: flex;
				align-items: flex-end;
				width: 100%;
				height: 130rpx;
				border-bottom: 1rpx solid #CCCCCC;
				overflow: hidden;
				position: relative;

				input {
					height: 70rpx;
					line-height: 70rpx;
				}

				.get-code {
					position: absolute;
					right: 0;
					line-height: 37px;
					font-size: 26rpx;
					bottom: 17rpx;
					z-index: 1;
					color: #22B92C
				}

				.code-s {
					color: #999999
				}
			}

			.line {
				width: 100%;
				height: 1rpx;
				border-bottom: 1rpx solid #CCCCCC;
				margin-top: 76rpx;
				position: relative;

				text {
					height: 33rpx;
					font-size: 24rpx;
					color: #22B92C;
					padding: 0 8rpx;
					background: #ffffff;
					position: absolute;
					left: 50%;
					top: 50%;
					transform: translate(-50%, -50%);
				}
			}

			.register-form-btn {
				width: 100%;
				height: 102rpx;
				font-size: 36rpx;
				color: #ffffff;
				margin: 70rpx auto 0 auto;
				background: #22B92C;
				display: block;
				border-radius: 51rpx;
			}
			.btn-hover{
				background: #09a706;
			}
			.register-outher {
				color: #333333;
				font-size: 28rpx;
				line-height: 40rpx;
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
