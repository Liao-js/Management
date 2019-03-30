<template>
	<div class="head">
		<div class="top_psm">
			<div class="top_1000">
				<div class="top_left">
					<img src="../../static/logo_white.png">
				</div>
				<div class="top_right dropdown" v-bind:class='{dropdown_menu_open:isMenushow}'>
					<a href="javascript:void(0);" class="dropdown_toggle" v-on:click="showToggle">
						<span>用户名<b class="caret"></b></span>
					</a>
					<ul class="dropdown_menu m-t-xs fadeInRight animated">
						<li><a href="javascript:void(0);" v-on:click="showChangepwd">修改密码</a></li>
						<li><a href="javascript:void(0);">退出登录</a></li>
					</ul>
				</div>
			</div>
		</div>
		<pms-changepwd v-show='isChangepwdshow' v-on:click="showChangepwd"></pms-changepwd>
	</div>
</template>

<script>
	import '@/assets/css/pmsHeader.css'
	import pmsChangepwd from '@/components/pmsChangepwd.vue'
	import axios from 'axios'
	export default{
		data(){
			return{
				isMenushow: false,
				isChangepwdshow: false,
			}
		},
		methods:{
			showToggle(){
				this.isMenushow = !this.isMenushow;
			},
			showChangepwd(){
				this.isChangepwdshow = !this.isChangepwdshow;
				this.isMenushow = false;
			}
		},
		components:{
			pmsChangepwd
		}
	}
</script>

