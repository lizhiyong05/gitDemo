/* 
 * 路由表
 */
const routerArray = [{
		"path": "/pages/home/home"
	},
	{
		"path": "/pages/index/index"
	},
	{
		"path": "/pages/classification/classification"
	},
	{
		"path": "/pages/home/selectRegion"
	},
	{
		"path": "/pages/video/video"
	},
	{
		"path": "/pages/my/my"
	},
	{
		"path": "/pages/release/release"
	},
	{
		"path": "/pages/release/sendMsg",
		"meta": {
			isLogin: false
		}
	},
	{
		"path": "/pages/release/sendDemand",
		"meta": {
			isLogin: false
		}
	},
	{
		"path": "/pages/release/sendRecruit",
		"meta": {
			isLogin: false
		}
	},
	{
		"path": "/pages/release/sendRecruit"
	},
	{
		"path": "/pages/login/login"
	},
	{
		"path": "/pages/login/register"
	},
	{
		"path": "/pages/login/loginCode"
	},
	{
		"path": "/pages/login/changePasswordStep1"
	},
	{
		"path": "/pages/login/changePasswordStep2"
	},
	{
		"path": "/pages/classification/productList"
	},
	{
		"path": "/pages/classification/productDetail"
	},
	{
		"path": "/pages/video/releaseVideo"
	},
	{
		"path": "/pages/my/collection/collection"
	},
	{
		"path": "/pages/identity/identity"
	},
	{
		"path": "/pages/video/myVideo"
	},
	{
		"path": "/pages/my/footprint/footprint"
	},
	{
		"path": "/pages/my/myNeeds/myNeeds"
	},
	{
		"path": "/pages/my/feedBack"
	},
	{
		"path": "/pages/my/personal/index",
		"meta": {
			isLogin: true
		}
	},
	{
		"path": "/pages/my/setting/index"
	},
	{
		"path": "/pages/my/personal/changeName"
	},
	{
		"path": "/pages/my/personal/changeTel"
	}, {
		"path": "/pages/my/personal/changePasswordStep2"
	},
	{
		"path": "/pages/release/information/information"
	},
	{
		"path": "/pages/release/information/myInformation"
	},
	{
		"path": "/pages/my/personal/changePasswordStep1"
	}
]
export default routerArray;
