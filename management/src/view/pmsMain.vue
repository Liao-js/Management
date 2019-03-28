<template>
	<el-row class="major">
		<pms-header></pms-header>
		<pms-container></pms-container>	
	</el-row>
</template>

<script>
	import pmsHeader from '@/components/pmsHeader.vue'
	import pmsContainer from '@/components/pmsContainer.vue'
	export default{
		components:{
			pmsHeader,
			pmsContainer,
		}
	}
</script>

<style>
	.major{
		position: absolute;
	   	top: 0;
	    bottom: 0;
	   	width: 100%;
	}
</style>