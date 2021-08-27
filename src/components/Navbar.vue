<template>
  <div id="navBarTitle">Brandon Kolar.</div>

  <div id="navBarNavigation">
    <div id="navBarNavigationTitle">Contact</div>

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

    <fa id="navBarButton" icon="bars" />
  </div>
</template>

<script>
export default {};
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
}

.navBarItem {
  font-size: 20px;
  margin-left: 25px;
  text-decoration: none;
  color: white;
}

.router-link-active {
  text-decoration: underline;
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

@media (max-width: 400px) {
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
