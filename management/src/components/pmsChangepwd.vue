<template>
	<div class="dialog-modal">
		<div class="dialog-wrapper"></div>
		<div class="dialog-container">
			<div class="dialog-title">修改密码</div>
			<div class="dialog-content">
				<div>
					<div class="dialog-form">
						<div class="dialog-form-item cf">
							<p class="tishi">{{tishi}}</p>
						</div>
						<div class="dialog-form-item cf">
							<label class="dialog-form-label">原密码</label>
							<div class="dialog-input-block">
								<input type="password" class="dialog-input" v-model="password">
							</div>
						</div>
						<div class="dialog-form-item cf">
							<label class="dialog-form-label">新密码</label>
							<div class="dialog-input-block">
								<input type="password" class="dialog-input" v-model="repeatpassword1">
							</div>
						</div>
						<div class="dialog-form-item cf">
							<label class="dialog-form-label">重复密码</label>
							<div class="dialog-input-block">
								<input type="password" class="dialog-input" v-model="repeatpassword2">
							</div>
						</div>
						<div class="dialog-form-item cf">
							<div class="dialog-input-block">
								<input type="button" class="dialog-btn" value="提交">
								<input type="button" class="dialog-btn  dialog-btn-primary" value="重置" v-on:click="resetting">
							</div>											
						</div>
					</div>
				</div>
			</div>
			<span class="dialog-setwin">
				<a href="javascript:void(0);" class="dialog-setwin-close" v-on:click="closeMyself"></a>
			</span>
		</div>
	</div>
</template>

<script>
	import '@/assets/css/cssinit.css'
	import '@/assets/css/pmsChangepwd.css'
	import axios from 'axios'
	export default{
		data(){
			return{
				tishi:'',
				password:'',
				repeatpassword1:'',
				repeatpassword2:'',
			}
		},
		methods:{
			resetting(){
				this.password = '';
				this.repeatpassword1 = '';
				this.repeatpassword2 = '';
			},
			closeMyself(){
				this.$emit('click');
			}
		}
	}
</script>