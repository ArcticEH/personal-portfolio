<template>
  <div id="rowOne">
    <fa class="whiteIcon" icon="mobile" />
    <fa class="whiteIcon" icon="gamepad" />
    <fa class="whiteIcon" icon="laptop-code" />
  </div>

  <div id="rowTwo">
    Hi. <br />
    I am a mobile, game, and web developer.
  </div>

  <div id="rowThree"></div>
</template>

<script>
export default {
  name: "Home",
  components: {},
};
</script>

<style scoped>
#rowOne {
  display: flex;
  justify-content: center;
  margin-top: 64px;
}

#rowTwo {
  font-size: 40px;
  text-align: center;
  margin-left: 10%;
  margin-right: 10%;
  color: white;
}

@media (max-width: 550px) {
  #rowTwo {
    font-size: 5vw;
  }
}

#rowThree {
}

.whiteIcon {
  color: #39ace7;
  height: auto;
  width: 50px;
  margin-left: 16px;
  margin-right: 16px;
}
</style>
