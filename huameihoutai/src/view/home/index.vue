
<template>
    <div class="home">
        <el-container>
            <el-aside style="background-color:gray" width="100px">
                <el-container>
                </el-container>
            </el-aside>
            <el-container style=" border: 1px solid #eee">
                <el-aside width=300px style="background-color: rgb(238, 241, 246)">
                    <!-- <el-input v-model="input" placeholder="Search"></el-input> -->
                    <el-menu style="background-color: rgb(238, 241, 246)">
                        <el-submenu index="1">
                            <template slot="title">课程管理</template>
                            <el-menu-item-group style="background-color: rgb(238, 241, 246)">
                                <el-menu-item index="1-1" @click="courseClick('course-details-list')">课程列表</el-menu-item>
                                <el-menu-item index="1-2" @click="courseClick('course-list')">课程详情</el-menu-item>
                                <el-menu-item index="1-3" @click="courseClick('course-new')">课程新增</el-menu-item>
                                <el-menu-item index="1-4" @click="courseClick('course-new-item')">课程项新增</el-menu-item>
                            </el-menu-item-group>
                        </el-submenu>
                        <el-submenu index="2">
                            <template slot="title">微信用户管理</template>
                            <el-menu-item-group style="background-color: rgb(238, 241, 246)">
                                <el-menu-item index="2-1" @click="courseClick('wechat-user-management')">微信用户管理</el-menu-item>
                            </el-menu-item-group>
                        </el-submenu>
                        <el-submenu index="3">
                            <template slot="title">老师管理</template>
                            <el-menu-item-group style="background-color: rgb(238, 241, 246)">
                                <el-menu-item index="3-1" @click="courseClick('teacher-management')">老师列表</el-menu-item>
                            </el-menu-item-group>
                        </el-submenu>
                        <el-submenu index="4">
                            <template slot="title">课程类型</template>
                            <el-menu-item-group style="background-color: rgb(238, 241, 246)">
                                <el-menu-item index="4-1" @click="courseClick('type-course')">课程类型列表</el-menu-item>
                            </el-menu-item-group>
                        </el-submenu>
                        <el-submenu index="5">
                            <template slot="title">个人中心</template>
                            <el-menu-item-group style="background-color: rgb(238, 241, 246)">
                                <el-menu-item index="5-1" @click="courseClick('personal-center')">个人简介</el-menu-item>
                            </el-menu-item-group>
                        </el-submenu>
                    </el-menu>
                </el-aside>

                <el-container>
                    <el-main>
                        <keep-alive>
                            <component :is="checked">
                            </component>
                        </keep-alive>
                    </el-main>
                </el-container>
            </el-container>
        </el-container>
    </div>

</template>
<script>
import CourseDetailsList from "@/view/course-management/course-details-list/index.vue";
import CourseList from "@/view/course-management/course-list/index.vue";
import CourseNew from "@/view/course-management/course-new/index.vue";
import CourseNewItem from "@/view/course-management/course-new-item/index.vue";
import WechatUserManagement from "@/view/wechat-user-management/index.vue";
import TeacherManagement from "@/view/teacher-management/index.vue";
import TypeCourse from "@/view/type-course/index.vue";
import PersonalCenter from "@/view/personal-center/index.vue";
export default {
  name: "home",
  components: {
    CourseDetailsList,
    CourseList,
    CourseNew,
    CourseNewItem,
    WechatUserManagement,
    TeacherManagement,
    TypeCourse,
    PersonalCenter
  },
  data() {
    return {
      checked: "",
      componentList:['课程列表','课程详情','课程新增','课程项新增','微信用户管理','老师列表','课程类型列表','个人简介']
    };
  },
  created(){
      console.log(this.$route.query)
      const  componentList = this.$route.query;
  },
  methods: {
    courseClick(tab) {
      this.checked = tab;
    }
  }
};
</script>
<style>
.el-aside[1] {
  background-color: #d3dce6;
  border: 1px solid black;
  color: #333;
  line-height: 200px;
}

.el-main {
  color: #333;
  height: 100%;
}
.el-container {
  margin-top: 40px;
}
.el-submenu__title {
  height: 100px;
  align-items: center;
  font-size: 24px;
  line-height: 100px;
}
</style>
