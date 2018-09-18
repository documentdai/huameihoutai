<template>
  <div class="course-details-list">
    <el-button type="primary">新增课程</el-button>
    <el-button type="primary">删除课程</el-button>
    <table>
      <tr>
        <td class="table-th" v-for="(item,index) in title" :key="index">{{item}}</td>
      </tr>
      <tr>
        <td v-for="(item,index) in content" :key="index">{{item}}<td><button >详情</button></td></td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "course-details-list",
  created(){
    console.log(this)
    this.$router.push('/course-details-list')
  },
  data() {
    return {
      title: [
        "缩略图",
        "课程名",
        "授课老师",
        "课程标签",
        "课程描述",
        "课程类型",
        "课程价格",
        "是否上架",
        "课程创建时间",
        "课程关注",
        "操作"
      ],
      content: [11, 222, 33, 44, 55, 66, 77, 88, 99, ,]
    };
  }
};
</script>

<style lang="less">
.course-details-list {
  table {
    margin: 20px;
    border: 1px solid black;
    border-collapse: collapse;
    tr {
       height: 10px;
       .table-th{
         font-size: 12px;
         height: 20px;
       }
      th {
        border: 1px solid black;
        height: 2px;
      }
      td {
        border: 1px solid black;
      }
    }
  }
}
</style>

