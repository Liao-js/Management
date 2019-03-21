<template>
	<div>
		<div class="top">
			<div class="top_1000">
				<div class="top_logo">
					<img src="../../static/logo.png">
				</div>
			</div>
		</div>
		<div class="banner">
			<div class="cnt">
				<div class="login_modern login">
					<ul>					
						<li class="user">
							<input class="uname" placeholder="请输入用户名" v-model="username" type="text">
						</li>
						<li class="pwd">
                        	<input class="upwd" placeholder="请输入密码" v-model="password" type="password" >
                    	</li>
					</ul>
					<p class="tishi">{{tishi}}</p>
					<div class="login_btn">
						<input class="btn" type="button">
					</div>
				</div>
			</div>
		</div>
		<div class="foot">
			<p>Copyright © 2019 Liao. All Rights Reserved.</p>
			<p>联系地址：韩山师范学院</p>
		</div>
	</div>
</template>

<script>
	import '@/assets/css/cssinit.css'
	import '@/assets/css/login.css'
	import axios from 'axios'
	export default {
		data(){
            return{        
                username: '',
                password: '',
                tishi: '',
            }
        },
        methos:{
        	
        }
	}	
</script>

