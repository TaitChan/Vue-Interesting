<template>
  <div>
    <el-collapse-transition>
      <query-form
        v-show="queryFlag"
        :query-data="queryFormInit"
        @search="getList"
      />
    </el-collapse-transition>
    <el-card shadow="never">
      <div class="action-container">
        <el-button type="primary" @click="handleAct('add')">
          <i class="el-icon-plus" />
          添加
        </el-button>
        <el-button>
          <i class="el-icon-refresh-right" />
          刷新
        </el-button>
        <el-button
          type="text"
          class="action-query"
          @click="queryFlag = !queryFlag"
        >
          <i :class="getQueryFlagIcon(queryFlag)" />
          {{ getQueryFlag(queryFlag) }}
        </el-button>
      </div>
      <table-list
        :table-data="tableData"
        :pagination="paginationInit"
        @show="handleAct('show', $event)"
        @edit="handleAct('edit', $event)"
        @del="handleDel"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </el-card>
    <action-dialog
      v-if="dialogFlag"
      :flag="actionFlag"
      :form-init="saveFormInit"
      @closed="dialogFlag = false"
    />
  </div>
</template>

<script>
  import { getList, del } from '@/api/role-mng'
  import { getQueryFlagIcon, getQueryFlag } from '@/mapping'
  import ActionDialog from './components/actionDialog'
  import QueryForm from './components/queryForm'
  import TableList from './components/tableList'

  export default {
    name: 'Role',
    components: { TableList, QueryForm, ActionDialog },
    data() {
      return {
        getQueryFlag,
        getQueryFlagIcon,
        queryFormInit: {
          roleName: '',
          roleCode: '',
        },
        paginationInit: {
          size: 10,
          current: 1,
          total: 10,
        },
        saveFormInit: {},
        tableData: [],
        queryFlag: true,
        actionFlag: 'add',
        dialogFlag: false,
      }
    },
    created() {},
    mounted() {
      this.getList()
    },
    methods: {
      async getList(queryForm, current = 1, size) {
        const params = {
          ...queryForm,
          current,
          size,
        }
        const { data } = await getList(params)
        this.tableData = data.records
        this.pagination = {
          size: data.size,
          current: data.current,
          total: data.total,
        }
      },
      handleAct(action, data = {}) {
        console.log(data)
        this.actionFlag = action
        this.saveFormInit = data
        this.dialogFlag = true
      },
      handleDel(id) {
        this.$confirm('此操作将删除选中数据, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
        })
          .then(async () => {
            await del({ ids: id })
            await this.getList()
            this.$message({
              type: 'success',
              message: '删除成功!',
            })
          })
          .catch(() => {})
      },
      handleSizeChange(val) {
        this.pagination.size = val
        this.pagination.current = 1
        this.getList()
      },
      handleCurrentChange(val) {
        this.pagination.current = val
        this.getList()
      },
      handleRefresh() {
        this.getList()
      },
    },
  }
</script>

<style scoped></style>
