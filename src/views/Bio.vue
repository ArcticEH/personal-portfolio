<template>
  <div>
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
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </div>
    </div>

    <div id="rowFour">
      <div id="rowFourHeader">Origin Story</div>

      <TimelineBox
        year="2014"
        title="University of Guelph"
        content="Completed BA in Criminal Justice and Public Policy w/ Business minor. Who knew I would be switching to programming a year later."
        :showArrow="true"
      />
      <TimelineBox
        year="2018"
        title="Mohawk College [Ongoing]"
        content="Started 3 year advanced diploma in Software Development. Mohawk is where I fell in love with programming and realized im kind of good at it."
        :showArrow="true"
      />
      <TimelineBox
        year="2019"
        title="MEDIC [Ongoing]"
        content="My first development job. True hands-on app development ranging from iOS to Vue."
        :showArrow="true"
      />
      <TimelineBox
        year="2021"
        title="Mohawk VR Center"
        content="Contract based work on WebGL 3D Education App. My first chance to use my Unity skills in a real life project."
        :showArrow="false"
      />
    </div>
  </div>
</template>

<script>
import TimelineBox from "../components/TimelineBox.vue";

export default {
  name: "Home",
  components: { TimelineBox },
};
</script>

<style scoped>
/* Row One */
#rowOne {
  display: flex;
  justify-content: center;
  margin-top: 64px;
}

/* Row Two */
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

/* Row Three */

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

/* Row Four */

#rowFour {
  margin-top: 100px;
}

#rowFourHeader {
  color: white;
  text-align: center;
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 12px;
}
</style>
