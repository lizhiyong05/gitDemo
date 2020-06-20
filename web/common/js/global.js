/* 
 * name: 公共js方法
 * date: 2020.06.20
 */

/* @name 设置信息 */
export function setStorageGlobal(key,value) {
	uni.setStorageSync(key,value);
}

/* @name 获取信息 */
export function getStorageGlobal(key) {
	return uni.getStorageSync(key);
}

/* @name 清除信息 */
export function removeStorageGlobal(key) {
	return new Promise((resolve,reject) => {
		uni.removeStorage({
		    key: key,
		    success: () => {
		        resolve(true);
		    },
			fail: () => {
				reject(false);
			}
		});
	})
}