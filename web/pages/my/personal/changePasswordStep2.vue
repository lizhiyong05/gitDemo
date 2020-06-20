<template>
	<!-- 登录后 修改密码第二步 -->
	<view>
		<headerComponent></headerComponent>
		<section class="change-password-step2-section section-padding-top-138">
			<h2>修改登陆密码</h2>
			<div class="change-password-step2-form">
				<ul>
					<li>
						<image v-show="!oldEyeIsShow" src="@/static/image/login/hide-eye.png" class="hide-eye" @tap="oldChangeEye()"></image>
						<image v-show="oldEyeIsShow" src="@/static/image/login/show-eye.png" class="show-eye" @tap="oldChangeEye()"></image>
						<input type="text" :password="!oldEyeIsShow" placeholder="请输入密码" v-model="changeForm.newPass1" maxlength="18"
						 placeholder-class="inputPlaceholder">
					</li>
					<li>
						<image v-show="!newEyeIsShow" src="@/static/image/login/hide-eye.png" class="hide-eye" @tap="newChangeEye()"></image>
						<image v-show="newEyeIsShow" src="@/static/image/login/show-eye.png" class="show-eye" @tap="newChangeEye()"></image>
						<input type="text" :password="!newEyeIsShow" placeholder="请再次输入密码" v-model="changeForm.newPass2" maxlength="18"
						 placeholder-class="inputPlaceholder">
					</li>
				</ul>
				<button type="default" class="change-password-step2-btn" hover-class="btn-hover" @tap="nextSubmit">完成</button>

			</div>
		</section>
	</view>
</template>

<script>
	import headerComponent from '@/components/headerComponent.vue'
	import {
		requestPost
	} from '@/common/js/api.js'
	import {
		getStorageGlobal
	} from '@/common/js/global.js'
	export default {
		components: {
			headerComponent
		},
		data() {
			return {
				oldEyeIsShow: false, // 控制旧密码眼睛图标
				newEyeIsShow: false, // 控制新密码眼睛图标
				changeForm: {
					newPass1: '', // 旧密码
					newPass2: '' // 新密码
				}
			};
		},
		methods: {
			oldChangeEye() { // 旧密码切换小眼睛
				this.oldEyeIsShow = !this.oldEyeIsShow;
			},
			newChangeEye() { // 旧密码切换小眼睛
				this.newEyeIsShow = !this.newEyeIsShow;
			},
			nextSubmit() { // 提交
				if (this.passV(this.changeForm.newPass1) && this.passV(this.changeForm.newPass2)) {
					if(this.changeForm.newPass1 != this.changeForm.newPass2) {
						uni.showToast({
							title: '两次密码输入不一致',
							icon: 'none',
							duration: 2000
						});
						return false;
					}
					let user_info = getStorageGlobal('user_info');
					requestPost('/app/api/user/updatePass', {
						mobile: user_info.mobile, // 手机号
						uid: user_info.uid, // uid
						newPass: this.changeForm.newPass1, // 手机号
						smsCode: this.$Route.query.smsCode, // 短信验证码
					}).then(res => {
						uni.showToast({
							title: '修改成功',
							icon: 'none',
							duration: 2000
						});
						this.$Router.pushTab({
							path: '/pages/my/my'
						});
					})

				}
			},
			passV(pass) { // 验证密码 6-18位字母、数字、特殊符号
				let passwordReg = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[~!@#$%^&*()_+`\-={}:";'<>?,./]).{6,18}$/;
				if (pass == '') {
					uni.showToast({
						title: '密码不能为空',
						icon: 'none'
					});
					return false;
				} else {
					if (!passwordReg.test(pass)) {
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
