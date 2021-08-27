<template>
  <div id="container">
    <Navbar />

    <router-view />
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";

export default {
  components: { Navbar },
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
}
</style>
