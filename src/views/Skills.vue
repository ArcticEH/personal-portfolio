<template>
  <div id="container">
    <fab class="socialMediaIcon" :icon="['fas', 'brain']" />
    <h1>
      "We now accept the fact that learning is a lifelong process of keeping
      abreast of change. And the most pressing task is to teach people how to
      learn." <br />
      <span class="blue">Peter Drucker</span>
    </h1>

    <h2>Languages</h2>
    <div class="skillBox">
      <div class="skill">C#</div>
      <div class="skill">JavaScript</div>
      <div class="skill">Swift</div>
      <div class="skill">Java</div>
      <div class="skill">SQL</div>
      <div class="skill">PHP</div>
      <div class="skill">Python</div>
      <div class="skill">Objective-C</div>
    </div>

    <h2>IDEs / Game Engines</h2>
    <div class="skillBox">
      <div class="skill">Unity</div>
      <div class="skill beginner">XCode</div>
      <div class="skill">Android Studio</div>
      <div class="skill">Intellij</div>
      <div class="skill">Pyzo</div>
    </div>

    <h2>Frameworks / Platforms</h2>
    <div class="skillBox">
      <div class="skill">React / React Native</div>
      <div class="skill">Vue</div>
      <div class="skill">.NET</div>
      <div class="skill">Node.js</div>
      <div class="skill">Flutter</div>
      <div class="skill">WordPress</div>
      <div class="skill">Symfony</div>
      <div class="skill">SwiftUI</div>
    </div>

    <h2>Databases</h2>
    <div class="skillBox">
      <div class="skill">SQL Server Express</div>
      <div class="skill">PostGres</div>
      <div class="skill">MySQL</div>
    </div>

    <h2>Other</h2>
    <div class="skillBox">
      <div class="skill">Git</div>
      <div class="skill">GitHub</div>
      <div class="skill">BitBucket</div>
      <div class="skill">Jira</div>
      <div class="skill">Agile</div>
      <div class="skill">Solr</div>
      <div class="skill">Bulk Data Importing</div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
#container {
  margin-left: 15%;
  margin-right: 15%;
}

.socialMediaIcon {
  color: #39ace7;
  height: 50px;
  width: 50px !important;
  margin-right: 32px;
  justify-self: center;
  margin-left: auto;
  margin-right: auto;
  margin-top: 64px;
}

h1 {
  /* margin-top: 64px; */
  margin-bottom: 64px;
  font-size: 25px;
  font-weight: none;
  text-align: center;
}

span {
  font-size: 15px;
}

.skillBox {
  display: grid;
  grid-gap: 25px;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  border: 2px solid white;
  padding: 20px;
  border-radius: 5px;
  margin-bottom: 64px;
}

.skill {
  font-size: 20px;
  text-align: center;
  font-weight: bold;
}

@media (max-width: 550px) {
  #container {
    margin-left: 16px;
    margin-right: 16px;
  }

  h1 {
    font-size: 20px;
  }

  span {
    font-size: 15px;
  }

  .skill {
    font-size: 10px;
  }
}

.skillBox {
  grid-gap: 25px;
  grid-template-columns: repeat(auto-fit, minmax(75px, 1fr));
}

@media (max-width: 400px) {
  h1 {
    font-size: 15px;
  }
}
</style>
