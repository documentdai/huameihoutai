import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/view/home/index.vue'
import CourseManagement from '@/view/course-management/index.vue'
import PersonalCenter from '@/view/personal-center/index.vue'
import TeacherManagement from '@/view/teacher-management/index.vue'
import TypeCourse from '@/view/type-course/index.vue'
import WechatUserManagement from '@/view/wechat-user-management/index.vue'
import CourseDetailsList from '@/view/course-management/course-details-list/index.vue'
import CourseList from '@/view/course-management/course-list/index.vue'
import CourseNew from '@/view/course-management/course-new/index.vue'
import CourseNewItem from '@/view/course-management/course-new-item/index.vue'
Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/course-management',
    name: 'course-management',
    component: CourseManagement
  }, {
    path: '/personal-center',
    name: 'personal-center',
    component: PersonalCenter
  }, {
    path: '/teacher-management',
    name: 'teacher-management',
    component: TeacherManagement
  }, {
    path: '/type-course',
    name: 'type-course',
    component: TypeCourse
  }, {
    path: '/wechat-user-management',
    name: 'wechat-user-management',
    component: WechatUserManagement
  },
  {
    path: '/course-details-list',
    name: 'course-details-list',
    component: CourseDetailsList
  },
  {
    path: '/course-list',
    name: 'course-list',
    component: CourseList
  },
  {
    path: '/course-new',
    name: 'course-new',
    component: CourseNew
  },
  {
    path: '/course-new-item',
    name: 'course-new-item',
    component: CourseNewItem
  }
  ]
})
