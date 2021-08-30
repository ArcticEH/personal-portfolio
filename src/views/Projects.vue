<template>
  <h2 class="title">Game</h2>

  <div class="projectBox">
    <img class="projectImage"  src="../assets/citySkyline.jpg"/>

    <div class="projectDetails">
    <div class="projectTitle">
    Fyre - 2D Combat Platformer
    </div>

    <div class="projectDescription">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </div>

    <div class="projectSkills">
    Unity, C#, Timelines
    </div>

    </div>
  </div>
</template>
<script>
export default {};
</script>
<style>
.title {
  text-align: center;
  font-size: 30px;
  font-weight: bold;
}

.projectBox {
  display: flex;
  margin-left: 5%;
  margin-right: 5%;

  
}

.projectImage {
  flex: 1;
  height: auto;
  align-self: center;
  min-width: 200px;
  background-color: green;
  border-radius: 5px;
}

.projectDetails {
  display: flex;
  flex: 3;
  flex-direction: column;
  padding: 24px;
  margin-left: 12px;
  justify-content: flex-start;
    background-color: #343434;
  border-radius: 5px;
}

.projectDescription {
  padding-top: 6px;
  padding-bottom: 6px;
  font-size: 15px;
}

.projectTitle {
  font-size: 25px;
}

.projectSkills {
  margin-top: auto;
  background-color: white;
  color: black;
}
</style>
