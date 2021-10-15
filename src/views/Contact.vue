<template>
  <div id="container">
    <div id="socialMedia">
      <h2>
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

    <div id="contactForm">
      <div v-if="!messageSent && !messageError">
        <h3>Send a message<span class="blue">.</span></h3>
        <form @submit.prevent="sendEmail">
          <input id="nameInput" name="name" type="text" placeholder="Name" required />
          <input
            id="emailInput"
            name="email"
            type="email"
            placeholder="Email"

            required
          />
          <textarea type="text" name="message" placeholder="Message..." required />
          <button type="submit">Send</button>
        </form>
      </div>

      <div class="message" v-if="messageSent">
        <h3>Message sent<span class="blue">.</span></h3>
        <p>I will try to get back to you asap!</p>
      </div>

      <div class="message" v-if="messageError">
        <h3>Failed to send message<span class="blue">.</span></h3>
        <p>Maybe try your personal email?</p>
      </div>
    </div>
  </div>
</template>
<script>
import emailjs from "emailjs-com";

export default {
  data: () => {
    return {
      messageSent: false,
      messageError: false,
    };
  },
  methods: {
    sendEmail(e) {
      emailjs
        .sendForm(
          "service_mhco6me",
          "template_3tbwn7v",
          e.target,
          "user_m5DWkzVXOqrDGOsXpvmNf"
        )
        .then(
          (result) => {
            // console.log("SUCCESS!", result.status, result.text);
            e.target.reset();
            this.messageSent = true;
          },
          (error) => {
            // console.log("FAILED...", error);
            messageError = true;
            this.messageError = true;
          }
        );
    },
  },
};
</script>
<style scoped>
#container {
  display: flex;
  flex-direction: row;
  justify-content: center;
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

  /* justify-content: flex-start; */
  /* padding-right: 100px; */
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

h2 {
  font-size: 40px;
  /* text-align: center; */
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

.message {
  text-align: center;
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
    justify-content: center;
    align-content: center;
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
