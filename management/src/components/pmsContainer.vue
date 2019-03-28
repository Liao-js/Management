<template>
	<el-col :span="24" class="main">
			<aside class="menu-expanded">
				<!--导航菜单-->
				<el-menu :default-active="$route.path" class="el-menu-vertical-demo" unique-opened router>
					<template v-for="(item,index) in $router.options.routes" v-if="!item.hidden">
						<el-submenu :index="index+''">
							<template slot="title"><i :class="item.iconCls"></i>{{item.name}}</template>
							<el-menu-item v-for="child in item.children" :index="child.path" :key="child.path">
								{{child.name}}
							</el-menu-item>
						</el-submenu>					
					</template>
				</el-menu>
			</aside>
			<section class="content-container">
				<div class="grid-content bg-purple-light">
					<el-col :span="24" class="breadcrumb-container">
						<strong class="title">{{$route.name}}</strong>
						<el-breadcrumb separator="/" class="breadcrumb-inner">
							<el-breadcrumb-item v-for="item in $route.matched" :key="item.path" class="el-breadcrumb-demo">
								{{ item.name }}
							</el-breadcrumb-item>
						</el-breadcrumb>
					</el-col>
					<el-col :span="24" class="content-wrapper">
						<transition name="fade" mode="out-in">
							<router-view></router-view>
						</transition>
					</el-col>
				</div>
			</section>
		</el-col>
</template>

<script>
	import '@/assets/css/cssinit.css'
	import '@/assets/css/pmsContainer.css'
	import '@/assets/icon/iconfont.css'
	export default{
		data(){
			
		},
		methods:{
			
		}
	}
</script>

<style>
	.fade-enter-active, .fade-leave-active {
	  transition: opacity .3s;
	}
	.fade-enter, .fade-leave-to{
	  opacity: 0;
	}
</style>