<template>
  <div id="projectContainer">
    <div class="">

      
      <h2 class="title">Game Projects</h2>
      <!-- <fa class="whiteIcon" icon="gamepad" /> -->
      <ProjectBox />
      <ProjectBox />
      <ProjectBox />
    </div>

    <div class="category">
      <h2 class="title">Mobile Projects</h2>
      <ProjectBox />
      <ProjectBox />
      <ProjectBox />
    </div>

    <div class="category">
      <h2 class="title">Web Projects</h2>
      <ProjectBox />
      <ProjectBox />
      <ProjectBox />
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
