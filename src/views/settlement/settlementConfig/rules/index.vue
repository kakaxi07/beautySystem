<template>
  <div class="p-4">
    <!-- Search Box -->
  <div class="flex items-center justify-between bg-gray-100 p-4 shadow-sm">
    <!-- 左侧红色按钮 -->
    <el-button type="danger" class="!bg-red-500 !text-white">全部</el-button>

    <!-- 中间按钮组 -->
    <div class="flex space-x-2">
      <el-button>已生效</el-button>
      <el-button>未生效</el-button>
      <el-button>已删除</el-button>
    </div>

    <!-- 右侧输入框 -->
    <div class="flex items-center space-x-4">
      <el-select placeholder="选择工作性质" class="w-40">
        <el-option label="选项1" value="1"></el-option>
        <el-option label="选项2" value="2"></el-option>
      </el-select>
      <el-input
        placeholder="输入规则名字搜索"
        class="w-60"
        suffix-icon="el-icon-search"
      />
    </div>

    <!-- 右下角红色加号按钮 -->
    <el-button
      type="danger"
      circle
      class="fixed bottom-8 right-8 !bg-red-500 !text-white shadow-lg"
    >
      <i class="el-icon-plus"></i>
    </el-button>
  </div>




    <!-- Data Table -->
    <el-table :data="tableData" style="width: 100%" row-key="id" :expand-row-keys="expandedRows"
      @expand-change="handleExpand" class="w-full">
      <el-table-column type="expand">
        <template #default="props">
          <div m="4">
            <p m="t-0 b-2">State: {{ props.row.state }}</p>
            <p m="t-0 b-2">City: {{ props.row.city }}</p>
            <p m="t-0 b-2">Address: {{ props.row.address }}</p>
            <p m="t-0 b-2">Zip: {{ props.row.zip }}</p>
            <h3>Family</h3>
          </div>
        </template>
      </el-table-column>

      <el-table-column prop="ruleName" label="规则名称" />
      <el-table-column prop="workQuality" label="工作地质" />
      <el-table-column prop="createTime" label="创建时间" />
      <el-table-column prop="modifyTime" label="修改时间" />
      <el-table-column prop="basicCommission" label="基础派单提成占数" />
      <el-table-column prop="selfOrderCommission" label="基础自接单提成占数" />
      <el-table-column prop="description" label="描述" />

      <el-table-column label="操作" width="200">
        <template #default="scope">
          <el-button-group class="space-x-2">
            <el-button type="primary" :icon="Edit" circle class="hover:bg-blue-600" />
            <el-button type="primary" :icon="Document" circle class="hover:bg-blue-600" />
            <el-button type="primary" :icon="Share" circle class="hover:bg-blue-600" />
            <el-button type="primary" :icon="Delete" circle class="hover:bg-blue-600" />
          </el-button-group>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Search, Edit, Document, Share, Delete } from '@element-plus/icons-vue'

const activeTab = ref('all')
const searchQuery = ref('')
const expandedRows = ref([])

// const handleExpand = (row, expanded) => {
//   expandedRows.value = expanded ? [row.id] : []
// }

const tableData = ref([
  {
    id: 1,
    ruleName: '客服所得规则',
    workQuality: '客服',
    createTime: '2023-09-24 22:28:58',
    modifyTime: '2023-09-24 22:28:58',
    basicCommission: '10%',
    selfOrderCommission: '65%',
    description: '满试勤试派试'
  },
  // Add more data as needed
])
</script>

<style>
/* 自定义 Element Plus 样式 */
</style>
