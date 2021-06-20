<template>
  <div>
    <el-card shadow="never" class="search-container">
      <el-form :inline="true" :model="form">
        <el-form-item label="角色名称">
          <el-input v-model="form.roleName" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="角色编号">
          <el-input v-model="form.roleCode" placeholder="请输入" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="$emit('search', form)">
            <i class="el-icon-search" />
            搜索
          </el-button>
          <el-button @click="handleClear">
            <i class="el-icon-delete" />
            清空
          </el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
  import { deepClone } from '@/utils'

  export default {
    name: 'QueryForm',
    props: {
      queryData: {
        type: Object,
        default: () => {
          return {}
        },
      },
    },
    data() {
      return {
        form: {},
      }
    },
    created() {
      this.form = deepClone(this.queryData)
    },
    methods: {
      handleClear() {
        this.form = deepClone(this.queryData)
        this.$emit('search', this.form)
      },
    },
  }
</script>

<style scoped></style>
