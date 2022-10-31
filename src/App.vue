<template>
  <div>
    <SidebarMenu v-model:collapsed="collapsed" :menu="menu" v-show="userLogged" />
    <router-view></router-view>

    <back-to-top visibleoffset="500" right="30px" bottom="20px" class="shadow-lg">
      <i class="chevron-up"></i>
    </back-to-top>
  </div>
</template>

<script>

import "bootstrap-icons/font/bootstrap-icons";
import { useUserLogged } from '@/composables/userLogged';

import SidebarMenu from './components/menu/SidebarMenu.vue';

export default {
  name: 'App',
  components: { SidebarMenu },
  setup() {
    const { userLogged } = useUserLogged();

    return {
      userLogged
    };
  },
  mounted() {
    this.onResize();
    window.addEventListener('resize', this.onResize);
  },
  methods: {
    onResize() {
      if(window.innerWidth <= 767) {
        this.isOnMobile = true;
        this.collapsed = true;
      }
      else {
        this.isOnMobile = false;
        this.collapsed = false;
      }
    }
  },
  data() {
    return {
      menu:
      [
        {
          header: 'Menú',
          hiddenOnCollapse: true
        },
        {
          href: '/',
          title: 'Dashboard',
          icon: 'bi bi-house'
        },
        {
          href: '/logout',
          title: 'Cerrar Sesión',
          icon: 'bi bi-box-arrow-left',
        }
      ],
      collapsed: false,
      isOnMobile: false
    }
  },
}
</script>

<style>
#app {
  font-family: Poppins, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
