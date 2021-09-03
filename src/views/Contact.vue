<template>
  <div id="container">
    <div id="socialMedia">
      <h2>Want to hear more? <br /> I would love to share<span class="blue">.</span></h2>
      <div id="socialMediaIcons">
          <a href="twitter.com"><fab class="socialMediaIcon" :icon="['fab', 'twitter']" /></a>
          <a href="github.com"><fab class="socialMediaIcon" :icon="['fab', 'github']" /></a>
          <a href="linkedin.com"><fab class="socialMediaIcon" :icon="['fab', 'linkedin']" /></a>
          
      </div>
    </div>

    <div id="contactForm">
      Contact form
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
#container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 80%;
    margin-top: 64px;
}

#socialMedia {
    flex: 1;
}

#socialMediaIcons {

}

.socialMediaIcon {
    color: white;
    height: 50px;
    width: 50px;
    margin-right: 75px;
}

.socialMediaIcon:hover {
    color: #39ace7;

}


h2 {
    font-size: 40px;
}

#contactForm {
    flex: 1;
    border: 1px solid white;
    height: 100%;
}

</style>
