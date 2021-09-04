<template>
  <div @click.stop="onBackgroundClick" id="container">
    <Navbar ref="navBarComponent"/>

    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>

    <Footer />
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";

export default {
  components: { Navbar, Footer },
  methods: {
    onBackgroundClick(event) {
      if (event.target.id != "sideMenu" && event.target.id != "navBarButton") {
        this.$refs.navBarComponent.closeMenu();
      }
      
    }
  }
};
</script>

<style>
body {
  margin: 0;
  margin-top: 12px;
  background-color: #171717;
  font-family: Arial, Helvetica, sans-serif;
  /* min-width: 495px; */
}

#container {
  display: flex;
  flex-direction: column;
  margin: 0px auto;
  max-width: 1250px;
  padding-left: 12px;
  padding-right: 12px;
  padding-bottom: 24px;
  color: white;
  z-index: 0;
}

.blue {
  color: #39ace7;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
