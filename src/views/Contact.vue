<template>
  <div id="container">
    <div id="socialMedia">
      <h2 class="contact-header">
        Want to hear more? <br />
        I would love to share<span class="blue">.</span>
      </h2>
      <div id="socialMediaIcons">
        <!-- <a href="twitter.com"
          ><fab class="socialMediaIcon" :icon="['fab', 'twitter']"
        /></a> -->
        <a href="https://github.com/ArcticEH"
          ><fab class="socialMediaIcon" :icon="['fab', 'github']"
        /></a>
        <a href="https://www.linkedin.com/in/brandon-kolar-3522659b/"
          ><fab class="socialMediaIcon" :icon="['fab', 'linkedin']"
        /></a>
        <a href="mailto:brandonbkolar@gmail.com"
          ><fab class="socialMediaIcon" :icon="['fas', 'envelope']"
        /></a>
      </div>
    </div>
  </div>
</template>
<style scoped>
#container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 64px;
}

#socialMedia {
  flex: 1;
  justify-content: space-between;
}

#socialMediaIcons {
  margin-top: 24px;
}

.socialMediaIcon {
  color: white;
  height: 50px;
  width: 50px;
  margin-right: 32px;
}

.socialMediaIcon:hover {
  color: #39ace7;
}

.contact-header {
  font-size: 40px;
  text-align: left;
}

@media (max-width: 750px) {
  #container {
    justify-content: center;
    align-content: center;
  }
}

@media (max-width: 550px) {
  #container {
    margin-left: 6px;
    margin-right: 6px;
  }

  .contact-header {
    font-size: 6vw;
  }
}
</style>
