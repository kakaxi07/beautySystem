<template>
   <div class="p-6">
      <div class="text-xl font-medium mb-100 pb-2" style="border-bottom: 2px solid #d1d5db;">所得配置</div>
      <!-- 标签页 -->
      <el-tabs v-model="activeTab" class="mb-4 ">
         <el-tab-pane label="用户配置" name="user">
            <User />
         </el-tab-pane>
         <el-tab-pane label="所得规则" name="rules">
            <Rules />
         </el-tab-pane>
      </el-tabs>


   </div>
</template>

<script setup>

import User from '@/views/settlement/settlementConfig/user'
import Rules from '@/views/settlement/settlementConfig/rules'
const activeTab = ref('user')

</script>

<style scoped>
.permission-config {
   background-color: white;
}

:deep(.el-table .cell) {
   white-space: nowrap;
}
</style>