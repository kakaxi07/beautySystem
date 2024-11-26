<template>
  <!-- 搜索区域 -->
  <div class="flex gap-4 mb-6">
    <el-select v-model="shop" placeholder="选择店铺" style="width: 240px">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      />
    </el-select>
    <el-select v-model="business" placeholder="选择业务组" style="width: 240px">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      />
    </el-select>
    <el-select v-model="config" placeholder="选择是否配置" style="width: 240px">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      />
    </el-select>
    <el-input v-model="search.phone" placeholder="干牛昵称或者手机号后四位" class="w-64">
      <template #suffix>
  <el-icon @click="handleSearchClick" class="cursor-pointer">
    <Search />
  </el-icon>
</template>
</el-input>

  </div>
  <!-- 表格 -->
  <el-table :data="tableData" border style="width: 100%">
    <el-table-column prop="store" label="店铺" width="180" align="center" />
    <el-table-column prop="identity" label="业务组" width="180" align="center" />
    <el-table-column prop="position" label="干年职务" width="120" align="center" />
    <el-table-column prop="status" label="用户状态" width="120" align="center">
      <template #default="{ row }">
        <el-tag :type="row.status === '启用' ? 'success' : 'danger'" size="small">
          {{ row.status }}
        </el-tag>
      </template>
    </el-table-column>
    <el-table-column prop="configTime" label="配置时间" align="center" />
    <el-table-column prop="rules" label="规则名称" align="center" />
    <el-table-column prop="config" label="是否配置" width="80" align="center">
      <template #default="{ row }">
        <el-tag :type="row.config === '是' ? 'success' : 'danger'" size="small">
          {{ row.config }}
        </el-tag>
      </template>
    </el-table-column>
    <!-- 状态列 -->
    <el-table-column label="自接单点数%" align="center">
      <el-table-column label="基数" align="center">
        <template #default="{ row }">


        </template>
      </el-table-column>
      <el-table-column label="奖励" align="center">
        <template #default="{ row }">

        </template>
      </el-table-column>
    </el-table-column>

    <el-table-column label="只做单点数%" align="center">
      <el-table-column label="基数" align="center">
        <template #default="{ row }">

        </template>
      </el-table-column>
      <el-table-column label="奖励" align="center">
        <template #default="{ row }">

        </template>
      </el-table-column>
    </el-table-column>
    <el-table-column label="派单点数%" align="center">
      <el-table-column label="基数" align="center">
        <template #default="{ row }">

        </template>
      </el-table-column>
      <el-table-column label="奖励" align="center">
        <template #default="{ row }">

        </template>
      </el-table-column>
    </el-table-column>
    <el-table-column prop="remarks" label="备注" align="center" />

    <el-table-column label="操作" fixed="right" align="center">
      <template #default="{ row }">
        <div class="flex items-center justify-center gap-2">
          <el-button type="primary" link size="small">
            <el-icon>
              <Edit />
            </el-icon>
          </el-button>
          <el-button type="primary" link size="small">
            <el-icon>
              <Setting />
            </el-icon>
          </el-button>
        </div>
      </template>
    </el-table-column>
  </el-table>
</template>
<script setup>
import useConfigStore from '@/store/modules/configCenter'
const configStore = useConfigStore()
const tableData = ref()
const shop = ref('')
const business = ref('')
const config = ref('')

const options = [
  {
    value: 'Option1',
    label: 'Option1',
  },
  {
    value: 'Option2',
    label: 'Option2',
  },
  {
    value: 'Option3',
    label: 'Option3',
  },
  {
    value: 'Option4',
    label: 'Option4',
  },
  {
    value: 'Option5',
    label: 'Option5',
  },
]
configStore.listConfig().then((res) => {
  tableData.value = res
})
const search = reactive({
  store: '',
  identity: '',
  position: '',
  phone: ''
})
const handleSearchClick = () => {
  debugger
}
</script>
<style scoped>
.permission-config {
  background-color: white;
}

:deep(.el-table .cell) {
  white-space: nowrap;
}
</style>