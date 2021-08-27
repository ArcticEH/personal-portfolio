<template>
  <div id="rowOne">
    <fa class="whiteIcon" icon="mobile" />
    <fa class="whiteIcon" icon="gamepad" />
    <fa class="whiteIcon" icon="laptop-code" />
  </div>

  <div id="rowTwo">
    <b>Hi.</b> <br />
    I am a mobile, game, and web developer.
  </div>

  <div id="rowThree">
    <img src="../assets/portfolioImage.png" />
    <div id="rowThreeText">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </div>
  </div>
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
  display: flex;
  margin-top: 100px;
  padding-left: 10%;
  padding-right: 10%;
  justify-content: center;
  align-items: center;
}

#rowThree img {
  height: auto;
  width: 200px;
  background-color: white;
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 15px;
  border-radius: 20px;
}

#rowThreeText {
  color: white;
  font-size: 20px;
  align-self: center;
  padding: 20px;
}

.whiteIcon {
  color: #39ace7;
  height: auto;
  width: 50px;
  margin-left: 16px;
  margin-right: 16px;
}

@media (max-width: 700px) {
  #rowThree {
    flex-direction: column;
    padding-left: 1%;
    padding-right: 1%;
  }

  #rowThree img {
    padding-right: 1%;
    padding-left: 1%;
    padding-top: 0px;
  }

  #rowThreeText {
    font-size: 4vw;
  }
}
</style>
