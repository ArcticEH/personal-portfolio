<template>
  <div class="projectBox">
    <img class="projectImage" :src="require(`../assets/${image}`)" />

    <div class="projectDetails">
      <div class="projectTitle">
        <span class="blue">{{ title }}</span>
      </div>

      <div class="projectDescription">
        {{ description }}
      </div>

      <div class="projectSkills">
        {{ skills }}
      </div>

      <div class="socialMediaIcons" v-if="github">
      <a href="linkedin.com"
        ><fab class="socialMediaIcon" :icon="['fab', 'github']"
      /></a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["image", "title", "description", "skills", "github"],
};
</script>
<style>
.projectBox {
  display: flex;
  margin-left: 5%;
  margin-right: 5%;
  margin-bottom: 32px;
  align-items: center;
  justify-content: center;
}

.projectImage {
  flex: 1;
  height: 100%;
  align-self: center;
  width: 200px;
  border: 2px solid white;
  border-radius: 15px;
}

.projectDetails {
  display: flex;
  flex: 3;
  flex-direction: column;
  padding: 12px;
  margin-left: 12px;
  justify-content: flex-start;
  /* background-color: #343434; */
  /* border-radius: 5px; */
}

.projectDescription {
  padding-top: 6px;
  padding-bottom: 6px;
  font-size: 15px;
}

.projectTitle {
  font-size: 25px;
  font-weight: bold;
}

.projectSkills {
  margin-top: auto;
  color: #39ace7;
  font-weight: bold;
}


.socialMediaIcons {
  align-self: flex-end;
}

.socialMediaIcon {
  color: white;
  height: 50px;
  width: 50px !important;
  margin-right: 32px;
  justify-self: flex-end;

}

.socialMediaIcon:hover {
  color: #39ace7;
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
    margin-left: 6px;
    margin-right: 6px;
  }

  .projectTitle {
    font-size: 20px;
  }

  .projectDescription {
    font-size: 15px;
  }

  .projectSkills {
    font-size: 15px;
  }
}

@media (max-width: 550px) {
  .projectImage {
    height: 100px;
    width: 40%;
    margin-bottom: 12px;
  }

  .projectTitle {
    font-size: 5vw;
  }

  .projectDescription {
    font-size: 2.75vw;
  }

  .projectSkills {
    font-size: 3vw;
  }
}
</style>
