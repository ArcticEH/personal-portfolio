<template>
  <div id="container">
    <div id="socialMedia">
      <h2>
        Want to hear more? <br />
        I would love to share<span class="blue">.</span>
      </h2>
      <div id="socialMediaIcons">
        <a href="twitter.com"
          ><fab class="socialMediaIcon" :icon="['fab', 'twitter']"
        /></a>
        <a href="github.com"
          ><fab class="socialMediaIcon" :icon="['fab', 'github']"
        /></a>
        <a href="linkedin.com"
          ><fab class="socialMediaIcon" :icon="['fab', 'linkedin']"
        /></a>
        <a href="linkedin.com"
          ><fab class="socialMediaIcon" :icon="['fas', 'envelope']"
        /></a>
      </div>
    </div>

    <div id="contactForm">
      <h3>Send a message<span class="blue">.</span></h3>
      <form>
        <input id="nameInput" type="text" placeholder="Name" />
        <input id="emailInput" type="email" placeholder="Email" />
        <textarea type="text" placeholder="Message..." />
        <button type="submit">Send</button>
      </form>
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
  margin-left: 10%;
  margin-right: 10%;
  margin-top: 64px;
}

#socialMedia {
  flex: 1;
  justify-content: space-between;
}

#socialMediaIcons {
  display: flex;
  justify-content: space-between;
  padding-right: 100px;
}

.socialMediaIcon {
  color: white;
  height: 50px;
  width: 50px;
  margin-left: 6px;
}

.socialMediaIcon:hover {
  color: #39ace7;
}

h2 {
  font-size: 40px;
}

h3 {
  font-size: 30px;
  margin-bottom: 12px;
}

#contactForm {
  flex: 1;
  height: 100%;
  width: 100%;
}

form {
  display: flex;
  flex-direction: column;
}

input {
  height: 25px;
  background-color: #17171717;
  color: white;
  font-size: 25px;
  padding: 5px;
  border: 2px solid white;
  margin-bottom: 12px;
}

textarea {
  resize: none;
  height: 125px;
  background-color: #17171717;
  color: white;
  font-size: 15px;
  padding: 5px;
  border: 2px solid white;
  font-family: arial;
}

button {
  height: 50px;
  width: 100px;
  font-size: 25px;
  background-color: #171717;
  border: none;
  border-radius: 5px;
  border: 2px solid white;
  color: white;
  cursor: pointer;
  margin-top: 12px;
  margin-right: 0px;
  float: right;
  align-self: end;
}

button:hover {
  background-color: #343434;
}

@media (max-width: 750px) {
  #container {
    flex-direction: column;
  }

  #contactForm {
    margin-top: 64px;
  }
}

@media (max-width: 550px) {
  #container {
    margin-left: 6px;
    margin-right: 6px;
  }

  h2 {
      font-size: 6vw;
  }

  h3 {
      font-size: 5vw;
  }
}
</style>
