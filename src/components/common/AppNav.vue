<template>
  <div>
    <el-menu :default-active="$route.path" class="el-menu-vertical-demo" router>
      <el-menu-item index="/">
        <i class="el-icon-menu"></i>
        <span slot="title">首页</span>
      </el-menu-item>
       <el-menu-item index="/axiosDemo">
        <i class="el-icon-document"></i>
        <span slot="title">打开二级页面示例</span>
      </el-menu-item>
      <el-menu-item index="/others">
        <i class="el-icon-document"></i>
        <span slot="title">其他菜单</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
  export default {
    data () {
      return {
         
      }
    },
    mounted () {
      //刷新操作
      if (this.$route.path !== '/' && this.$route.path.indexOf('movie') == -1) {
        this.$store.commit('addTabs', {route: '/', name: '首页'});
        this.$store.commit('addTabs', {route: this.$route.path , name: this.$route.name });
        this.$store.commit('setActiveIndex', this.$route.path);
      } else {
        this.$store.commit('addTabs', {route: '/', name: '首页'});
        this.$store.commit('setActiveIndex', '/');
        this.$router.push('/');
      }

    },
    computed: {
      tabs () {
        return this.$store.state.tabs;
      }
    }
  }
</script>
