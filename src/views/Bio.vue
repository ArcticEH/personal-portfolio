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
      <img src="../assets/portfolioImage.png" rel="preload" />
      <div id="rowThreeText">
        I'm Brandon, a final semester software development student who loves
        developing games and applications. I am very passionate about the work I
        do and treat every project as a learning opportunity.
        <br />
        <br />
        When I am not programming, you will likely find me strength training,
        playing video games, or reading fantasy books.
      </div>
    </div>

    <div id="rowFour">
      <div id="rowFourHeader">Professional Story</div>

      
      <TimelineBox
        year="2021 - Now"
        title="Tulip"
        content="My journey continues as an iOS Developer at Tulip Retail."
        :showArrow="false"
        :showCircle="false"
        image="tulipLogo.png"
      />

      <TimelineBox
        year="2021"
        title="Mohawk VR Center"
        content="Contracted to create a 3D WebGL educational game. An opportunity to use Unity in the real world. The game is currently being used to train students in the nursing program at Mohawk."
        :showArrow="true"
        :showCircle="false"
        image="mohawkLogo.png"
      />

      <TimelineBox
        year="2019 - 2021"
        title="MEDIC"
        content="My first software development job. MEDIC was willing to provide a fresh developer like me with years of true hands-on development experience in the eHealth space. I worked on mobile, web, and backend applications."
        :showArrow="true"
        image="medicLogo.png"
      />




    </div>

    <div id="rowFive">
        <div id="rowFiveHeader">Academic Story</div>

      <TimelineBox
        class="timeline"
        year="2018 - Now"
        title="Mohawk College [Advanced Diploma]"
        content="Continued with 3 year advanced diploma in Software Development. I achieved much success at Mohawk and earned many scholarly achievements and awards."
        :showCircle="true"
        image="mohawkLogo.png"
      />

      <TimelineBox
        class="timeline"
        year="2018 - Now"
        title="Mohawk College [Diploma]"
        content="Began diploma in Software Development. Mohawk is where I fell in love with programming and realized im kind of good at it. "
        :showArrow="true"
        image="mohawkLogo.png"
      />

      <TimelineBox
        class="timeline"
        year="2014 - 2018"
        title="University of Guelph [BA]"
        content="Completed Honours BA in Criminal Justice and Public Policy w/ Business minor. While I may have fallen out of love with law whilst completing the program, the analytical and communication-oriented skills I acquired continue to benefit me today."
        :showArrow="true"
        image="guelphLogo.png"
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
  text-align: center;
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
  margin-bottom: 24px;
}


/* Row Five */
#rowFive {
  margin-top: 50px;
}

#rowFiveHeader {
  color: white;
  text-align: center;
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 24px;  
}

</style>
