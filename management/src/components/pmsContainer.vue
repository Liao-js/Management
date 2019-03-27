<template>
	<div class="major-container">
		<div class="siderbar-meun">
			<ul class="cf aside-meun">
				<li v-for="(item,index) in $router.options.routes[1].children" class="aside-submenu" v-bind:class='{"is-opened":index === currentIndex}'>
					<div class="aside-submenu_title" v-on:click="onandoff(item,index)">
						<i :class="item.iconCls"></i>{{item.name}}<i class="aside-submenu_icon-arrow ma-icon-btarrow"></i>
					</div>
					<transition name='show' v-on:before-enter="beforeEnter" v-on:enter="enter" v-on:after-enter="afterEnter" v-on:before-leave="beforeLeave" v-on:leave="leave" v-on:after-leave="afterLeave" v-bind:css="false">
						<ul class="cf aside-menu" ref='meunCount' v-show="index === currentIndex">
							<li class="aside-menu-item" v-for="child in item.children">{{child.name}}</li>
						</ul>
					</transition>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import '@/assets/css/cssinit.css'
	import '@/assets/css/pmsContainer.css'
	import '@/assets/icon/iconfont.css'
	export default{
		data(){
			return{
				currentIndex: '0',
			}
		},
		methods:{
			onandoff(item,i){
				const meunCount = this.$refs.meunCount[i];
				var height = meunCount.offsetHeight;
				if(height == 0){	
					this.currentIndex = i;							
				}else{
					this.currentIndex = '';
				}
			},
			beforeEnter(el){
				if(!el.dataset){
					el.dataset = {};
				}
				let styles = window.getComputedStyle(el);
				//记录展开前的属性值
				el.dataset.oldOverflow = styles.getPropertyValue('overflow');
				el.dataset.oldPaddingTop = styles.getPropertyValue('padding-top');
				el.dataset.oldPaddingBottom = styles.getPropertyValue('padding-bottom');
				// 这三个都为0，scrollHeight的高度就是真实的内容高度了
				el.style.height = 0;
		        el.style.paddingTop = 0;
		        el.style.paddingBottom = 0;
		        el.classList.add('collapse-transition');
		        el.style.overflow = 'hidden';			
			},
			enter(el,done){				
				if(el.scrollHeight !== 0) {
		            // 动画过程中，逐渐增大到展开前应占的高度值
		            el.style.height = el.scrollHeight + 'px';
		            el.style.paddingTop = el.dataset.oldPaddingTop;
		            el.style.paddingBottom = el.dataset.oldPaddingBottom;     
        		}
        		el.addEventListener('transitionend', done);     	
			},
			afterEnter(el){
				el.classList.remove('collapse-transition');
        		el.style.height = '';
        		el.style.overflow = el.dataset.oldOverflow;
			},
			beforeLeave(el) {
			    el.style.height = el.scrollHeight - parseFloat(el.dataset.oldPaddingTop) - parseFloat(el.dataset.oldPaddingBottom) + 'px';		   
			    el.style.overflow = 'hidden';
			    el.classList.add('collapse-transition');		    
			},
			leave(el,done){	
		        if(el.scrollHeight !== 0){
		        	el.style.height = 0;
			        el.style.paddingTop = 0;
			        el.style.paddingBottom = 0; 
		        }          
		        el.addEventListener('transitionend', done);       
			},
			afterLeave(el) {
				el.classList.remove('collapse-transition');
  			}
		}
	}
</script>

<style>
.show-enter-active,.show-leave-active{
	transition: height .3s ease-in-out;
}
.show-enter-to,.show-leave{
	height:1rem;
	overflow: hidden;
}
.show-enter,.show-leave-to{
  	height:0;
	overflow: hidden;
}
</style>
