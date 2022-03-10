import { createWebHistory, createRouter } from "vue-router";
import Layout from "@/layout/index.vue";

const routes = [
  {
    path: "/",
    name: "Index",
    redirect: '/home',
    component: Layout,
    children: [
      {
        path: '/home',
        name: 'home',
        component: () => import('@/views/Home.vue'),
        meta: {
          title: 'Home',
          icon: 'table-2',
        },
      },
      {
        path: '/about',
        name: 'about',
        component: () => import('@/views/AboutUs.vue'),
        meta: {
          title: 'About',
          icon: 'table-2',
        },
      },
      {
        path: '/contact',
        name: 'contact',
        component: () => import('@/views/ContactUs.vue'),
        meta: {
          title: 'Contact',
          icon: 'table-2',
        },
      },
      {
        path: '/blog',
        name: 'blog',
        component: () => import('@/views/Blog.vue'),
        meta: {
          title: 'Blog',
          icon: 'table-2',
        },
      },
      {
        path: '/join',
        name: 'join',
        component: () => import('@/views/JoinUs.vue'),
        meta: {
          title: 'Join',
          icon: 'table-2',
        },
      },
      {
        path: '/event-details',
        name: 'eventdetails',
        component: () => import('@/views/EventDetails.vue'),
        meta: {
          title: 'Event Details',
          icon: 'table-2',
        },
      }
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;