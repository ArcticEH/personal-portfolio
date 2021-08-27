<template>
  <div id="rowOne" class="block"></div>
  <div id="rowTwo" class="block"></div>
  <div id="rowThree" class="block"></div>
</template>

<script>
export default {
  name: "Home",
  components: {},
};
</script>

<style scoped>
.block {
  margin-top: 12px;
  border-radius: 5px;
}

#rowOne {
  width: 100%;
  height: 400px;
  background-color: royalblue;
}

#rowTwo {
  width: 100%;
  height: 200px;
  background-color: white;
}

#rowThree {
  width: 100%;
  height: 250px;
  background-color: royalblue;
}
</style>
