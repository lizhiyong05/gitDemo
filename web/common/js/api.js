/* 
 * name: 接口请求封装
 * date: 2020.05.11
 */
import { getStorageGlobal } from '@/common/js/global.js'
export function requestPost(url, data = {}) {
	return new Promise((resolve, reject) => {
		uni.request({
			url: 'http://101.200.198.59'+url,
			method: 'POST',
			sslVerify: false,
			header: {
				'Content-Type': 'application/x-www-form-urlencoded',
				'no-pass': 'allow',
				'no-access-token': getStorageGlobal('user_info').loginToken ? getStorageGlobal('user_info').loginToken : ''
			},
			data: {
				data: JSON.stringify(data)
			},
			dataType: 'json',
			success: (res) => {
				if(res.data.code == '1000') {
					resolve(res.data)
				}else {
					uni.showToast({
						icon: 'none',
						duration: 2000,
						title: res.data.msg || 'code非1000，接口无msg信息，可能接口报错'
					})
				}
			},
			fail: (err) => {
				uni.showToast({
					icon: 'none',
					duration: 2000,
					title: err.errMsg
				})
			}
		})
	})
}
