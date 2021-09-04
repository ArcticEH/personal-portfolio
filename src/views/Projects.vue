<template>
  <div id="projectContainer">
    <div class="">
      <h2 class="title">Game Projects</h2>
      <!-- <fa class="whiteIcon" icon="gamepad" /> -->
      <ProjectBox
        image="fireScreenshot.png"
        title="Fyre - 2D Combat Platformer"
        description="A 2D platformer inspired by RPGs I have played growing up. Implemented combat with skills, convincing AI, traps, a parallax background, cut scenes, and more! The game
        takes about 20 minutes to complete and includes a tutorial level, castle level, and a sequenced boss fight."
        skills="Unity, C#, Game Design"
        github="www.google.ca"
      />
    </div>

    <div class="category">
      <h2 class="title">Mobile Projects</h2>
    </div>

    <div class="category">
      <h2 class="title">Web Projects</h2>
    </div>
  </div>
</template>
<script>
import ProjectBox from "../components/ProjectBox.vue";

export default {
  components: { ProjectBox },
};
</script>
<style>
#projectContainer {
  margin-top: 64px;
}

.whiteIcon {
  display: inline;
  color: #39ace7;
  height: auto;
  width: 100px;
  margin-left: 16px;
  margin-right: 16px;
}

.title {
  text-align: center;
  font-size: 40px;
  font-weight: bold;
  margin-bottom: 32px;
}

.category {
  margin-top: 128px;
  /* border-bottom: 2px solid white; */
}

.separatorIcon {
  height: 20px;
  width: 20px;
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 20px;
  display: none;
}

@media (max-width: 750px) {
  .separatorIcon {
    display: block;
  }
}
</style>
