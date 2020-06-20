<template>
	<!-- 设置登陆密码第二步 -->
	<view>
		<headerComponent></headerComponent>
		<section class="change-password-step2-section section-padding-top-138">
			<h2>设置登陆密码</h2>
			<p class="info">为了您的账户安全，请设置登录密码</p>
			<div class="change-password-step2-form">
				<ul>
					<li v-show="!eyeIsShow">
						<image src="@/static/image/login/hide-eye.png" class="hide-eye" @tap="changePassword()"></image>
						<input type="text" placeholder="请输入密码" v-model="changeForm.password" maxlength="18" placeholder-class="inputPlaceholder">

					</li>
					<li v-show="eyeIsShow">
						<image src="@/static/image/login/show-eye.png" class="show-eye" @tap="changePassword()"></image>
						<input type="text" :password="true" placeholder="请输入密码" v-model="changeForm.password" maxlength="18"
						 placeholder-class="inputPlaceholder">
					</li>
				</ul>
				<button type="default" class="change-password-step2-btn" hover-class="btn-hover" @tap="nextSubmit">确定</button>

			</div>
		</section>
	</view>
</template>

<script>
	import headerComponent from '../../components/headerComponent.vue'
	import { requestPost } from '@/common/js/api.js'
	export default {
		components: {
			headerComponent
		},
		data() {
			return {
				eyeIsShow: true,
				changeForm: {
					password: ''
				}
			};
		},
		methods: {
			changePassword() { // 切换密码输入框状态
				this.eyeIsShow = !this.eyeIsShow;
			},
			nextSubmit() { // 提交
				if (this.passV()) {
					requestPost('/app/api/findPass', {
						mobile: this.$Route.query.mobile, // 手机号
						newPass: this.changeForm.password, // 密码
						smsCode: this.$Route.query.smsCode, // 短信验证码
					}).then(res => {
						uni.showToast({
							title: '设置成功',
							icon: 'none',
							duration: 2000
						});
						this.$Router.replace({
							path: '/pages/login/login'
						});
					})
				}
			},
			passV() { // 验证密码 6-18位字母、数字、特殊符号
				let passwordReg = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[~!@#$%^&*()_+`\-={}:";'<>?,./]).{6,18}$/;
				if (this.changeForm.password === '') {
					uni.showToast({
						title: '密码不能为空',
						icon: 'none'
					});
					return false;
				} else {
					if (!passwordReg.test(this.changeForm.password)) {
						uni.showToast({
							title: '密码格式错误,格式为6-18位字母+数字+特殊符号',
							icon: 'none',
							duration: 3000
						});
						return false;
					}
				}
				return true;
			}
		}
	}
</script>

<style lang="scss" scoped>
	.change-password-step2-section {
		margin: 48rpx 48rpx 0 48rpx;

		h2 {
			font-size: 52rpx;
			line-height: 73rpx;
		}

		.info {
			font-size: 28rpx;
			color: #999999;
		}

		.change-password-step2-form {
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

			.change-password-step2-btn {
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
