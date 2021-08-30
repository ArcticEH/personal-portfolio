<template>
  <div class="projectBox">
    <img class="projectImage" src="../assets/citySkyline.jpg" />

    <div class="projectDetails">
      <div class="projectTitle">
        <span class="blue">Fyre - 2D Combat Platformer</span>
      </div>

      <div class="projectDescription">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
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
<style scoped>
.projectBox {
  display: flex;
  margin-left: 5%;
  margin-right: 5%;
  margin-bottom: 32px;
}

.projectImage {
  flex: 1;
  height: auto;
  align-self: center;
  width: 200px;
  background-color: green;
  border-radius: 15px;
}

.projectDetails {
  display: flex;
  flex: 3;
  flex-direction: column;
  padding: 12px;
  margin-left: 12px;
  justify-content: flex-start;
  background-color: #343434;
  border-radius: 5px;
}

.projectDescription {
  padding-top: 6px;
  padding-bottom: 6px;
  font-size: 12px;
}

.projectTitle {
  font-size: 25px;
  font-weight: bold;
}

.projectSkills {
  margin-top: auto;
  color: #171717;
  font-weight: bold;
}

@media (max-width: 750px) {
  .projectImage {
    height: 100px;
    width: 40%;
    margin-bottom: 12px;
  }

  .projectDetails {
    margin-left: 0px;
    padding: 12px;
  }

  .projectBox {
    flex-direction: column;
    margin-left: 0px;
    margin-right: 0px;
  }

  .projectTitle {
    font-size: 20px;
  }

  .projectDescription {
    font-size: 12px;
  }

  .projectSkills {
    font-size: 12px;
  }
}

@media (max-width: 550px) {
  .projectImage {
    height: 100px;
    width: 50%;
    margin-bottom: 12px;
  }

  .projectTitle {
    font-size: 5vw;
  }

  .projectDescription {
    font-size: 10px;
  }

  .projectSkills {
    font-size: 3vw;
  }
}
</style>
