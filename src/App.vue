<template>
  <div>
    <SidebarMenu v-model:collapsed="collapsed" :menu="menuType === 'vendedor' ? sellerMenu : customerMenu" v-show="userLogged" />

    <div v-if="isOnMobile && !collapsed" class="sidebar-overlay" @click="collapsed = true"></div>

    <div id="view" :class="[{'collapsed': collapsed}, {'onmobile': isOnMobile}, {'hide-padding': !userLogged}]">
      <div class="container">
        <router-view></router-view>
      </div>
    </div>

    <back-to-top visibleoffset="500" right="30px" bottom="20px" class="shadow-lg">
      <i class="chevron-up"></i>
    </back-to-top>
  </div>
</template>

<script>

import "bootstrap-icons/font/bootstrap-icons";
import { useUserLogged } from '@/composables/userLogged';
import { useIsOnMobile } from '@/composables/isOnMobile';
import { useMenu } from '@/composables/useMenu';

import SidebarMenu from './components/menu/SidebarMenu.vue';
import { sellerMenu, customerMenu } from '@/logic/menu';

export default {
  name: 'App',
  components: { SidebarMenu },
  setup() {
    const { userLogged } = useUserLogged();
    const { isOnMobile } = useIsOnMobile();
    const { menuType } = useMenu();

    return {
      userLogged,
      isOnMobile,
      menuType
    };
  },
  mounted() {
    this.onResize();
    window.addEventListener('resize', this.onResize);
  },
  methods: {
    onResize() {
      const { setIsOnMobile, unsetIsOnMobile } = useIsOnMobile();

      if(window.innerWidth <= 767) {
        setIsOnMobile();
        this.collapsed = true;
      }
      else {
        unsetIsOnMobile();
        this.collapsed = false;
      }
    }
  },
  data() {
    return {
      sellerMenu,
      customerMenu,
      collapsed: false,
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
  margin-top: 50px;
  color: #2c3e50;
}

#view
{
  padding-left: 290px;
  transition: 0.3 ease;
}

#view.collapsed
{
  padding-left: 65px;
}

#view.onmobile
{
  padding-left: 65px;
}

#view.hide-padding
{
  padding-left: 0px;
}

.sidebar-overlay
{
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: #000;
  opacity: 0.5;
  z-index: 900;
}
</style>
