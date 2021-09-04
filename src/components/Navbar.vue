<template>
  <div id="navBarTitle">Brandon Kolar<span class="blue">.</span></div>

  <div id="navBarNavigation">
    <transition name="fade" mode="out-in">
      <div id="navBarNavigationTitle">{{ $route.name }}</div>
    </transition>

    <div id="navBarNavigationItems">
      <router-link to="/" class="navBarItem">
        Bio
      </router-link>
      <router-link to="/Projects" class="navBarItem">
        Projects
      </router-link>
      <router-link to="/Skills" class="navBarItem">
        Skills
      </router-link>
      <router-link to="/Contact" class="navBarItem">
        Contact
      </router-link>
    </div>

    <fa
      id="navBarButton"
      :class="{ navBarActive: showSideMenu }"
      @click.stop="toggleMenu"
      icon="bars"
    />

    <transition name="slide">
      <div id="sideMenu" v-if="showSideMenu">
        <router-link to="/" @click="toggleMenu" class="sideBarMenuItem">
          Bio
        </router-link>
        <router-link to="/Projects" @click="toggleMenu" class="sideBarMenuItem">
          Projects
        </router-link>
        <router-link to="/Skills" @click="toggleMenu" class="sideBarMenuItem">
          Skills
        </router-link>
        <router-link to="/Contact" @click="toggleMenu" class="sideBarMenuItem">
          Contact
        </router-link>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      showSideMenu: false,
    };
  },
  methods: {
    toggleMenu() {
      this.showSideMenu = !this.showSideMenu;
    },

    closeMenu() {
      if (this.showSideMenu) {
        this.showSideMenu = false;
      }
    },
  },
};
</script>

<style>
#navBarTitle {
  font-size: 90px;
  font-weight: bold;
  color: white;
  border-bottom: thick solid white;
}

#navBarNavigation {
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
}

#navBarNavigationTitle {
  font-size: 50px;
  color: white;
}

#navBarNavigationItems {
  display: flex;
  align-items: flex-end;
  padding-bottom: 6px;
}

#navBarButton {
  display: none;
  height: 40px;
  width: 40px;
  color: white;
  z-index: 1;

  -webkit-transition: all 0.5s ease;
  -moz-transition: all 0.5s ease;
  -o-transition: all 0.5s ease;
  -ms-transition: all 0.5s ease;
  transition: all 0.5s ease;
}

.navBarActive {
  transform: rotate(90deg);
}

.navBarItem {
  font-size: 20px;
  margin-left: 25px;
  text-decoration: none;
  color: white;
}

.router-link-active {
  text-decoration: underline !important;
}

#sideMenu {
  position: absolute;
  width: 50%;
  height: 100vh;
  background-color: #343434;
  top: 0px;
  left: 0px;
  z-index: 1;
  padding-top: 10%;
}

.sideBarMenuItem {
  display: block;
  color: white;
  text-decoration: none;
  font-size: 5vw;
  margin-left: 10%;
  margin-bottom: 12px;
}

.slide-leave-active,
.slide-enter-active {
  transition: 0.5s;
}
/* .slide-enter {
  transform: translate(100%, 0);
} */

.slide-enter-from {
  transform: translate(-100%, 0);
}

.slide-leave-to {
  transform: translate(-100%, 0);
}

@media (max-width: 750px) {
  #navBarTitle {
    font-size: 70px;
  }
}

@media (max-width: 550px) {
  #navBarTitle {
    font-size: 50px;
  }

  #navBarNavigationTitle {
    font-size: 30px;
    color: white;
  }

  .navBarItem {
    font-size: 15px;
  }
}

@media (max-width: 550px) {
  #navBarTitle {
    font-size: 40px;
  }

  #navBarNavigationTitle {
    font-size: 30px;
    color: white;
  }

  .navBarItem {
    margin-left: 15px;
  }
}

@media (max-width: 500px) {
  #navBarNavigationTitle {
    align-self: flex-end;
  }

  #navBarNavigationItems {
    display: none;
  }

  #navBarButton {
    display: block;
  }
}
</style>
