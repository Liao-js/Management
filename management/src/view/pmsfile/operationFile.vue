<template>
	<section>
		<!--工具条-->
		<el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
			<el-form :inline="true" :model="filters">
				<el-form-item>
					<el-input v-model="filters.name" placeholder="姓名"></el-input>
				</el-form-item>
				<el-form-item>
					<el-button type="primary">查询</el-button>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" @click="handleAdd">新增</el-button>
				</el-form-item>
			</el-form>
		</el-col>
		<!--列表-->
		<el-table :data="tableData" highlight-current-row v-loading="listLoading" @selection-change="selsChange" class="el-table-demo">
			<el-table-column type="selection" width="55">
			</el-table-column>
			<el-table-column type="index" width="60">
			</el-table-column>
			<el-table-column prop="name" label="姓名" width="120" sortable>
			</el-table-column>
			<el-table-column prop="department" label="部门" width="100"  sortable>
			</el-table-column>
			<el-table-column prop="sex" label="性别" width="100"  sortable>
			</el-table-column>
			<el-table-column prop="phone" label="电话号码" width="180" sortable>
			</el-table-column>
			<el-table-column prop="idcard" label="身份证号" min-width="180" sortable>
			</el-table-column>
			<el-table-column label="操作" width="150">
				<template slot-scope="scope">
					<el-button size="small"  @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
					<el-button type="danger" size="small">删除</el-button>
				</template>
			</el-table-column>
		</el-table>
		<!--工具条-->
		<el-col :span="24" class="toolbar">
			<el-button type="danger"  :disabled="this.sels.length===0">批量删除</el-button>
			<el-pagination layout="prev, pager, next" @current-change="handleCurrentChange" :page-size="20" :total="total" style="float:right;">
			</el-pagination>
		</el-col>
		<!--编辑界面-->
		<el-dialog title="编辑" :visible.sync="editFormVisible" :close-on-click-modal="false">
			<el-form :model="editForm" label-width="80px" :rules="editFormRules" ref="editForm">
				<el-form-item label="姓名" prop="name">
					<el-input v-model="editForm.name" auto-complete="off"></el-input>
				</el-form-item>
				<el-form-item label="性别">
					<el-radio-group v-model="editForm.sex">
						<el-radio class="radio" :label="'男'">男</el-radio>
						<el-radio class="radio" :label="'女'">女</el-radio>
					</el-radio-group>
				</el-form-item>
				<el-form-item label="部门">
					<el-select v-model="editForm.department">
						<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
					</el-select>
				</el-form-item>
				<el-form-item label="电话号码">
					<el-input  v-model="editForm.phone"></el-input>
				</el-form-item>
				<el-form-item label="身份证号">
					<el-input  v-model="editForm.idcard"></el-input>
				</el-form-item>
			</el-form>
			<div slot="footer" class="dialog-footer">
				<el-button @click.native="editFormVisible = false">取消</el-button>
				<el-button type="primary" >提交</el-button>
			</div>
		</el-dialog>
        <!--新增界面-->
		<el-dialog title="新增" :visible.sync="addFormVisible" :close-on-click-modal="false">
			<el-form :model="addForm" label-width="80px" :rules="addFormRules" ref="addForm">
				<el-form-item label="姓名" prop="name">
					<el-input v-model="addForm.name" auto-complete="off"></el-input>
				</el-form-item>
				<el-form-item label="性别">
					<el-radio-group v-model="addForm.sex">
						<el-radio class="radio" :label="'男'">男</el-radio>
						<el-radio class="radio" :label="'女'">女</el-radio>
					</el-radio-group>
				</el-form-item>
				<el-form-item label="部门">
					<el-select v-model="addForm.department">
						<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
					</el-select>
				</el-form-item>
				<el-form-item label="电话号码">
					<el-input  v-model="addForm.phone"></el-input>
				</el-form-item>
				<el-form-item label="身份证号">
					<el-input  v-model="addForm.idcard"></el-input>
				</el-form-item>
			</el-form>
			<div slot="footer" class="dialog-footer">
				<el-button @click.native="addFormVisible = false">取消</el-button>
				<el-button type="primary">提交</el-button>
			</div>
		</el-dialog>
	</section>
</template>

<script>
	export default{
		data(){
			return{
				filters: {
					name: ''
				},
				listLoading: false,
				options: [
					{
			          value: '技术部',
			          label: '技术部'
			        }, 
			        {
			          value: '信息部',
			          label: '信息部'
			        }, 
			        {
			          value: '通讯部',
			          label: '通讯部'
			        }, 
			        {
			          value: '研究部',
			          label: '研究部'
			        }, 
			        {
			          value: '开发部',
			          label: '开发部'
			        }
		        ],
				total: 0,
				page: 1,
				sels: [],//列表选中列
				
				//编辑界面
				editFormVisible: false,//编辑界面是否显示				
				editLoading: false,
				editFormRules: {
					name: [
						{ required: true, message: '请输入姓名', trigger: 'blur' }
					]
				},
				//编辑界面数据
				editForm: {
					id: 0,
					name: '',
					sex: '',
					department: '',
					phone: '',
					idcard: ''
				},

				//新增界面
	        	addFormVisible:false,//新增界面是否显示
				addLoading: false,
				addFormRules: {
					name: [
						{ required: true, message: '请输入姓名', trigger: 'blur' }
					]
				},
				//新增界面数据
				addForm: {
					name: '',
					sex: '',
					department: '',
					phone: '',
					idcard: ''
				},

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
		methods:{
			selsChange: function (sels) {
				this.sels = sels;
			},
			handleCurrentChange(val) {
				this.page = val;
				
			},
			//显示编辑界面
			handleEdit: function (index, row) {
				this.editFormVisible = true;
				this.editForm = Object.assign({}, row);
				console.log(row);
			},
			//显示新增界面
			handleAdd: function () {
				this.addFormVisible = true;
				this.addForm = {
					name: '',
					sex: '',
					department: '',
					phone: '',
					idcard: ''
				};
				console.log(typeof this.addForm.idcard);
			},
		}
	}
</script>
	