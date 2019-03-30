<template>
	<section>
		<!--工具条-->
		<el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
			<el-form :inline="true" :model="filters">
				<el-form-item>
					<el-input v-model="filters.name" placeholder="姓名"></el-input>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" >查询</el-button>
				</el-form-item>
			</el-form>
		</el-col>
		<!--列表-->
		<el-table :data="tableData" highlight-current-row v-loading="loading" class="el-table-demo">
			<el-table-column type="expand">
		      <template slot-scope="props">
		        <el-form label-position="left" inline class="demo-table-expand">
		          <el-form-item label="商品名称">
		            <span>{{ props.row.name }}</span>
		          </el-form-item>
		          <el-form-item label="部门">
		            <span>{{ props.row.department}}</span>
		          </el-form-item>
		          <el-form-item label="性别">
		            <span>{{ props.row.sex }}</span>
		          </el-form-item>
		          <el-form-item label="电话号码">
		            <span>{{ props.row.phone }}</span>
		          </el-form-item>
		          <el-form-item label="身份证号">
		            <span>{{ props.row.idcard }}</span>
		          </el-form-item>
		        </el-form>
		      </template>
		    </el-table-column>
			<el-table-column type="index" width="60">
			</el-table-column>
			<el-table-column prop="name" label="姓名" width="120" sortable>
			</el-table-column>
			<el-table-column prop="department" label="部门" width="100"  sortable>
			</el-table-column>
			<el-table-column prop="sex" label="性别" width="100" sortable>
			</el-table-column>
			<el-table-column prop="phone" label="电话号码" width="180" sortable>
			</el-table-column>
			<el-table-column prop="idcard" label="身份证号" min-width="180" sortable>
			</el-table-column>
		</el-table>
	</section>
</template>

<script>	
	export default{
		data() {
			return {
				filters: {
					name: ''
				},
				loading: false,
				tableData: [
					{
						phone: '130XXXXXXXX',
						name: '李小虎',
						sex: '男',
						department: '技术部',
						idcard: '441323199005031010'
					}, 
					{
						phone: '150XXXXXXXX',
						name: '钱小虎',
						sex: '女',
						department: '信息部',
						idcard: '441323198907251010'
					},
					{
						phone: '157XXXXXXXX',
						name: '白小虎',
						sex: '男',
						department: '通讯部',
						idcard: '441323199909091010'
					}, 
					{
						phone: '137XXXXXXXX',
						name: '王小虎',
						sex: '女',
						department: '研究部',
						idcard: '441323201808081010'
		        	}, 
					{
						phone: '139XXXXXXXX',
						name: '王小虎',
						sex: '男',
						department: '开发部',
						idcard: '441323199202021010'
		        	},		   	        	 
		        ]
			}
		},
		methods: {
			
		}
	}
</script>
