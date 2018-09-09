<template>
<div>
 <el-table :data="tableData" style="width: 100%" v-loading="loading">
     <el-table-column
      prop="title"
      label="影片名"
      width="180">
    </el-table-column>
    <el-table-column
      prop="rating.average"
      label="评分"
      width="180">
    </el-table-column>
    
    <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button size="mini" type="primary" @click="handleEdit(scope.$index, scope.row)">详情</el-button>
        <el-button size="mini" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
  </div>
  </template>

  <script>
    export default {
    data() {
      return {
          tableData: this.tableData,
          loading: true
        }
    },
    created:function(){
        this.initData();
    },

    methods:{
      handleEdit(index, row) {
          this.$store.commit('setDetail', row);
          this.$router.push({path: `/movies/${row.title}`});
      },
      handleDelete:function(index, row) {
        this.tableData.splice(index,1);
      },
      initData:function(){
           this.$ajax.get('/api/movie/in_theaters').then(response=>{
             this.tableData = response.data.subjects;
             this.loading = false;
      }).catch(error=>{
          console.log(error);
      })
      }
    },

  }
  </script>
