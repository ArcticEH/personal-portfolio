<template>
  <h2 class="title">Games</h2>

  <ProjectBox />
  <fa class="separatorIcon" icon="ellipsis-h" />
  <ProjectBox />
  <fa class="separatorIcon" icon="ellipsis-h" />
  <ProjectBox />

  <h2 class="title">Mobile</h2>
  <ProjectBox />
  <fa class="separatorIcon" icon="ellipsis-h" />
  <ProjectBox />
  <fa class="separatorIcon" icon="ellipsis-h" />
  <ProjectBox />

  <h2 class="title">Web</h2>
  <ProjectBox />
  <fa class="separatorIcon" icon="ellipsis-h" />
  <ProjectBox />
  <fa class="separatorIcon" icon="ellipsis-h" />
  <ProjectBox />
</template>
<script>
import ProjectBox from "../components/ProjectBox.vue";

export default {
  components: { ProjectBox },
};
</script>
<style>
.title {
  text-align: center;
  font-size: 30px;
  font-weight: bold;
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
