<template>
  <div>
    <el-table
      :data="tableData"
      style="width: 100%"
      show-overflow-tooltip
      stripe
      height="430"
      highlight-current-row
    >
      <el-table-column type="index" width="50" label="#" />
      <el-table-column prop="roleName" label="角色名称" />
      <el-table-column prop="roleCode" label="角色编号" />
      <el-table-column prop="createTime" label="创建时间" />
      <el-table-column label="操作">
        <template v-slot="scope">
          <el-tooltip effect="dark" content="查看" placement="top">
            <el-button type="text" @click="$emit('show', scope.row)">
              <i class="el-icon-view" />
            </el-button>
          </el-tooltip>
          <el-tooltip effect="dark" content="编辑" placement="top">
            <el-button type="text" @click="$emit('edit', scope.row)">
              <i class="el-icon-edit" />
            </el-button>
          </el-tooltip>
          <el-tooltip effect="dark" content="删除" placement="top">
            <el-button type="text">
              <i class="el-icon-delete" @click="$emit('del', scope.row.id)" />
            </el-button>
          </el-tooltip>
        </template>
      </el-table-column>
    </el-table>
    <div class="pagination-container">
      <el-pagination
        :current-page="pagination.current"
        :page-sizes="[5, 10]"
        :page-size="pagination.size"
        layout="total, sizes, prev, pager, next, jumper"
        :total="pagination.total"
        @size-change="$emit('size-change')"
        @current-change="$emit('current-change')"
      />
    </div>
  </div>
</template>

<script>
  export default {
    name: 'TableList',
    props: {
      tableData: {
        type: Array,
        default: () => {
          return []
        },
      },
      pagination: {
        type: Object,
        default: () => {
          return {}
        },
      },
    },
  }
</script>

<style scoped></style>
