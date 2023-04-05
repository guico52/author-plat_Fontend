import {createRouter, createWebHistory} from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: () => import('../views/Home.vue')
        }, {
            path: '/user',
            name: 'User',
            component: () => import('../views/User.vue'),
            children: [
                {
                    path: "login",
                    name: "Login",
                    component: () => import("../components/user/LoginForm.vue")
                }, {
                    path: "register",
                    name: "Register",
                    component: () => import("../components/user/RegisterForm.vue")
                }, {
                    path: "resetPassword",
                    name: "ResetPassword",
                    component: () => import("../components/user/ResetPasswordForm.vue")
                }
            ]
        }, {
            path: '/backstage',
            name: 'Backstage',
            component: () => import('../views/Backstage.vue'),
            children: [
                {
                    path: 'default',
                    name: 'Default',
                    component: () => import("../components/backstage/Default.vue")
                }, {
                    path: "accountManagement",
                    name: "AccountManagement",
                    component: () => import("../components/backstage/AccountManagement.vue")
                }, {
                    path: "articleList",
                    name: "ArticleList",
                    component: () => import("../components/backstage/ArticleList.vue")
                }, {
                    path: "writeArticle",
                    name: "WriteArticle",
                    component: () => import("../components/backstage/WriteArticle.vue")
                }, {
                    path: "videoList",
                    name: "VideoList",
                    component: () => import("../components/backstage/VideoList.vue")
                }, {
                    path: "uploadVideo",
                    name: "UploadVideo",
                    component: () => import("../components/backstage/UploadVideo.vue")
                }, {
                    path: "typeList",
                    name: "TypeList",
                    component: () => import("../components/backstage/TypeList.vue")
                }, {
                    path: "addType",
                    name: "AddType",
                    component: () => import("../components/backstage/AddType.vue")
                }, {
                    path: "collectionManagement",
                    name: "CollectionManagement",
                    component: () => import("../components/backstage/CollectionManagement.vue")
                }, {
                    path: 'articleReview',
                    name: 'ArticleReview',
                    component: () => import("../components/backstage/ArticleReview.vue")
                }, {
                    path: 'videoReview',
                    name: 'VideoReview',
                    component: () => import("../components/backstage/VideoReview.vue")
                }
            ]
        }, {
            path: '/videoPage',
            name: 'videoPage',
            component: () => import("../views/VideoPage.vue")
        }

    ]
})

export default router
