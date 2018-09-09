<template>
  <div>
    {{$route.name}}
    <div v-show="isIndex">
    <h3>一个简单demo</h3>
    <p>导航栏和tab联动，切换tab即切换路由，使用vuex实现组件通信</p>
    </div>

  </div>
</template>

<script>
  export default {
    data () {
      return {
        isIndex : false
      };
    },
    created:function(){
    },watch :{
       $route(to) {
            console.log(to)
            if (to.name == '首页') {
                this.isIndex = true;
            }else{
              this.isIndex = false;
            }
        }
    }
  }
</script>
<style>
</style>
