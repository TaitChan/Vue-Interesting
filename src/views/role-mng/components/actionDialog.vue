<template>
  <div>
    <el-dialog
      width="30%"
      :title="getDialogTitle(flag)"
      :model-value="true"
      @close="$emit('closed')"
    >
      <el-form ref="form" :model="form" :rules="formRules">
        <el-form-item label="角色名称" prop="roleName">
          <el-input v-model="form.roleName" :disabled="!getDialogDom(flag)" />
        </el-form-item>
        <el-form-item label="角色编号" prop="roleCode">
          <el-input v-model="form.roleCode" :disabled="!getDialogDom(flag)" />
        </el-form-item>
      </el-form>
      <template v-if="getDialogDom(flag)" #footer>
        <el-button style="letter-spacing: 4px" @click="$emit('closed')">
          <i class="el-icon-circle-close" />
          取消
        </el-button>
        <el-button
          style="letter-spacing: 4px"
          type="primary"
          @click="handleSave"
        >
          <i class="el-icon-circle-check" />
          确定
        </el-button>
      </template>
    </el-dialog>
  </div>
</template>

<script>
  import { getDialogTitle, getDialogDom } from '@/mapping'
  import { deepClone } from '@/utils'

  export default {
    name: 'ActionDialog',
    props: {
      flag: {
        type: String,
        required: true,
      },
      formInit: {
        type: Object,
        required: true,
      },
    },
    data() {
      return {
        getDialogTitle,
        getDialogDom,
        form: {},
        formRules: {
          roleName: [{ required: true, trigger: 'blur' }],
          roleCode: [{ required: true, trigger: 'blur' }],
        },
      }
    },
    created() {
      this.form = deepClone(this.formInit)
      console.log(this.form)
    },
    methods: {
      handleSave() {
        console.log(this.form)
        this.$refs.form.validate((valid) => {
          if (valid) {
            console.log('1')
          }
        })
        // this.$emit('closed')
      },
    },
  }
</script>

<style scoped></style>
