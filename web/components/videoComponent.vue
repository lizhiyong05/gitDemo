<template>
	<view>
		<video :id="videoInfo.id" :data-id="videoInfo.id" :src="videoInfo.videoUrl" :danmu-btn="false" :poster="videoInfo.poster" 
		@play="videoStart" @ended="videoEnd"
		>
		</video>
	</view>
</template>

<script>
	export default {
		props: {
			videoInfo: {
				type: Object,
				default() {
					return {}
				}
			}
		},
		data() {
			return {
				
			};
		},
		methods: {
			videoStart(e) { // 视频开始
				let currentId = e.currentTarget.dataset.id;
				this.$emit('videoStart',currentId);
			},
			videoEnd(e) { // 视频结束
				let currentId = e.currentTarget.dataset.id;
				this.$emit('videoEnd',currentId);
			}
		}
	}
</script>

<style lang="scss">
	video {
		width: 100%;
		height: 100%;
		z-index: 0;
	}
</style>
