<template>
  <div id="app">
    <div class="app-header">
      <div class="title">tab切换示例</div>
    </div>
    <div class="app-content">
      <div class="app-nav">
        <app-nav></app-nav>
      </div>
      <div class="app-wrap">
        <div class="template-tabs">
          <el-tabs
            v-model="activeIndex"
            type="card"
            closable
            @tab-click="tabClick"
            v-if="tabs.length"
            @tab-remove="tabRemove">
            <el-tab-pane
              :key="item.name"
              v-for="(item) in tabs"
              :label="item.name"
              :name="item.route">
            </el-tab-pane>
          </el-tabs>
        </div>
        <div class="content-wrap">
          <router-view/>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import AppNav from './components/common/AppNav';
export default {
  name: 'app',
  components: {
    AppNav
  },
  methods: {
    tabClick (tab) {
      let path = this.activeIndex;
      if (this.activeIndex === '/movies') {
          path = this.activeIndex + '/' + this.$store.state.movieDetail.title;
      }
      this.$router.push({path: path});
    },
    tabRemove (targetName) {
      if(targetName == '/') {
        return;
      }
      this.$store.commit('removeTabs', targetName);
      if (this.activeIndex === targetName) {
        if (this.tabs && this.tabs.length >= 1) {
          this.$store.commit('setActiveIndex', this.tabs[this.tabs.length-1].route);
          this.$router.push({path: this.activeIndex});
        } else {
          this.$router.push({path: '/'});
        }
      }
    }
  },
  computed: {
    tabs () {
      return this.$store.state.tabs;
    },
    activeIndex: {
      get () {
        return this.$store.state.activeIndex;
      },
      set (val) {
        this.$store.commit('setActiveIndex', val);
      }
    }
  },
  watch: {
    //路由和绑定的tab名称一致
    '$route'(to) {
      let flag = false;
      for (let tab of this.tabs ) {
        if (tab.name === to.name) {
          flag = true;
          this.$store.commit('setActiveIndex', '/' + to.path.split('/')[1]);
          break
        }
      }
      if (!flag) {
        this.$store.commit('addTabs', {route: '/' + to.path.split('/')[1], name: to.name});
        this.$store.commit('setActiveIndex', '/' + to.path.split('/')[1]);
      }
    }
  }
}
</script>

<style lang="scss">
html, body {
  height: 100%;
  margin: 0;
  padding: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
  display: flex;
  flex-flow: column;
  overflow: hidden;
  .app-header {
    color: #2c3e50;;
    flex: 0 0 60px;
    background: #ffffff;
    height: 60px;
    line-height: 60px;
    padding: 0 20px;
    border-bottom:3px solid #fff;
    .title {
      font-size: 20px;
    }
  }
  .app-content {
    flex: 1;
    display: flex;
    flex-flow: row;
    .app-nav {
      flex: 0 0 300px;
      background: #eff2f7;
    }
    .app-wrap {
      flex: 1;
      padding: 10px 20px;
      overflow: auto;
      .content-wrap {
        height: 85%;
        // border: 1px solid #d1dbe5;
        // border-top: none;
        padding: 0 20px;
      }
    }
  }
}
</style>
