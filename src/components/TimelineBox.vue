<template>
  <div id="container">
    <div id="header">
      <span class="blue">{{ year }}</span> <span id="title">{{ title }}</span>
    </div>
    <div id="content">{{ content }}</div>
  </div>
  <fa v-if="this.showArrow" id="arrow" icon="caret-down"> </fa>
</template>

<script>
export default {
  props: ["year", "title", "content", "showArrow"],
};
</script>

<style scoped>
#container {
  display: flex;
  flex-direction: column;
  background-color: #343434;
  margin-left: 15%;
  margin-right: 15%;
  border-radius: 5px;
  padding: 15px;
  color: white;
}

#header {
  font-size: 30px;
  font-weight: bold;
}

#title {
  font-size: 20px;
}

#content {
  font-size: 15px;
  padding-top: 6px;
  padding-bottom: 6px;
}

#arrow {
  display: block;
  position: relative;
  color: #343434;
  bottom: 20px;
  height: 50px;
  width: 100%;
  margin-bottom: -25px;
}

@media (max-width: 700px) {
  #container {
    margin-left: 6px;
    margin-right: 6px;
  }

  #header {
    font-size: 5vw;
  }

  #title {
    font-size: 4vw;
  }

  #content {
    font-size: 3.5vw;
    padding-top: 16px;
    padding-bottom: 16px;
  }
}
</style>
