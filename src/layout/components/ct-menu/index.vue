<template>
  <div class="ct-menu-container">
    <el-menu
      :default-active="defaultActive"
      :collapse="isCollapse"
      router
      :collapse-transition="false"
      :background-color="variables['aside-bar-bg']"
      :text-color="variables['menu-unselect-color']"
      :active-text-color="variables['menu-select-color']"
    >
      <el-menu-item index="/dashboard">
        <i class="el-icon-menu"></i>
        <template #title>首页</template>
      </el-menu-item>
      <el-submenu index="/sys" :popper-append-to-body="true">
        <template #title>
          <i class="el-icon-menu"></i>
          <span>系统管理</span>
        </template>
        <el-menu-item index="/sys/user-mng">
          <i class="el-icon-menu"></i>
          <template #title>用户管理</template>
        </el-menu-item>
        <el-menu-item index="/sys/role-mng">
          <i class="el-icon-menu"></i>
          <template #title>角色管理</template>
        </el-menu-item>
        <el-menu-item index="/sys/menu-mng">
          <i class="el-icon-menu"></i>
          <template #title>菜单管理</template>
        </el-menu-item>
      </el-submenu>
      <el-submenu index="/test2" :popper-append-to-body="true">
        <template #title>
          <i class="el-icon-menu"></i>
          <span>菜单1</span>
        </template>
        <el-menu-item index="/test2/index">
          <i class="el-icon-menu"></i>
          <template #title>测试页2</template>
        </el-menu-item>
        <el-menu-item index="/test3/index">
          <i class="el-icon-menu"></i>
          <template #title>测试页3</template>
        </el-menu-item>
      </el-submenu>
      <el-menu-item index="/test4/index">
        <i class="el-icon-menu"></i>
        <template #title>菜单2</template>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
  import variables from '@/styles/variables.scss'
  export default {
    name: 'CtMenu',
    props: {
      isCollapse: Boolean,
    },
    data() {
      return {
        variables,
        defaultActive: '',
      }
    },
    watch: {
      $route: {
        handler({ path, matched }) {
          this.defaultActive = path
        },
        immediate: true,
      },
    },
    created() {},
    mounted() {},
    methods: {},
  }
</script>

<style lang="scss" scoped>
  @mixin menu-select-color() {
    color: $menu-select-color !important;
    i {
      color: $menu-select-color !important;
    }
  }
  @mixin menu-select-bg() {
    background-color: $menu-select-bg !important;
  }
  @mixin menu-unselect-color() {
    color: $menu-unselect-color!important;
    i {
      color: $menu-unselect-color !important;
    }
  }
  @mixin menu-unselect-bg() {
    background-color: $menu-unselect-bg !important;
    border: $menu-unselect-border 3px solid;
  }
  //根据菜单的不同展示实线、虚线(①无选项:实线、②有选项:虚线)
  @mixin menu-select-border($menu) {
    $type: solid;
    @if $menu==submenu {
      $type: dotted;
    }
    border-left: $menu-select-border 3px $type;
  }

  @mixin menu-select($menu) {
    @include menu-select-bg;
    @include menu-select-color;
    @include menu-select-border($menu);
  }
  @mixin menu-unselect() {
    @include menu-unselect-bg;
    @include menu-unselect-color;
  }

  ::v-deep.ct-menu-container {
    @mixin submenu-menu-opened($opened) {
      .el-submenu__title {
        @include menu-select(submenu);
        @if ($opened==true) {
          @include menu-unselect-bg();
        }
        &:hover {
          @include menu-select(submenu);
        }
      }
    }

    //设置菜单中所有展开区的背景色
    .el-menu {
      width: 100%;
      background-color: transparent !important;
      border: 0 !important;
      ul > li {
        background-color: $menu-opened-area-color !important;
      }
    }

    //选中active、鼠标经过hover、聚焦focus时
    //如果是①无选项的菜单：展示完整选中样式（选中样式为实线，标识选中）
    //如果是②有选项的菜单：展示完整选中样式（选中样式为虚线，标识可展开）
    .el-menu-item {
      @include menu-unselect();
      &.is-active,
      &:focus,
      &:hover {
        @include menu-select(menu);
      }
    }
    .el-submenu__title {
      @include menu-unselect();
      &.is-active,
      &:focus,
      &:hover {
        @include menu-select(submenu);
      }
    }

    //如果是③有选项的菜单***且***其选项菜单被选中:
    //(1)展开选项时，该菜单的样式为：展示部分选中样式（仅文字高亮）
    //(2)不展开选项时，该菜单的样式为：展示完整选中样式
    .el-submenu.is-active {
      @include submenu-menu-opened(false);
      &.is-opened {
        @include submenu-menu-opened(true);
      }
    }
  }
  .el-popper.is-light > .el-menu--vertical > .el-menu.el-menu--popup {
    .el-menu-item {
      @include menu-unselect;
      &:hover,
      &:focus,
      &.is-active {
        @include menu-select-bg;
        @include menu-select-color;
      }
      &:first-child {
        border-top-left-radius: $menu-fold-select-box-border;
        border-top-right-radius: $menu-fold-select-box-border;
      }
      &:last-child {
        border-bottom-left-radius: $menu-fold-select-box-border;
        border-bottom-right-radius: $menu-fold-select-box-border;
      }
    }
  }
</style>
