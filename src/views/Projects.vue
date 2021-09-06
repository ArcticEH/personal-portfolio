<template>
  <div id="projectContainer">
    <div class="">
      <h2 class="title">Personal Projects</h2>
      <!-- <fa class="whiteIcon" icon="gamepad" /> -->
      <ProjectBox
        image="fireScreenshot.png"
        title="Fyre - 2D Combat Platformer"
        description="A browser-based 2D platformer inspired by RPGs I have played growing up. Implemented combat with skills, convincing AI, traps, a parallax background, cut scenes, and more! The game takes about 20 minutes to complete and includes a tutorial level, castle level, and a sequenced boss fight. Check out the GitHub link to play it right in your browser!"
        skills="Unity, C#, Game Design"
        github="https://github.com/ArcticEH/Capstone2DSideScroller"
        play="https://arcticeh.github.io/Capstone2DSideScrollerDemo/"
      />

      <ProjectBox
        image="mmoccScreenshot.png"
        title="Multiplayer Isometric Chat Game [Client & Server]"
        description="An ongoing passion project to create an MMOCC (massive multiplayer online chatting community). The project has mostly been an opportunity to experiment with multiplayer networking architecture. The isometric-block style of the game has also allowed me to experiment with depth sorting and pathfinding. The current product utilizes websockets and is in mostly a prototype-like state with working multiplayer, pathfinding, 2 separate rooms, and chatting."
        skills="Unity, C#, Websockets, .NET Core"
        github="https://github.com/ArcticEH/MMOCCGame"
      />

      <ProjectBox
        image="wowScreenshot.png"
        title="Android WoW Mount Collector"
        description="A World of Warcraft Mount Collection Android app that uses the official Blizzard APIs to display an image and description of any in-game mount. The app allows a user to save any collected mount to a MySQL database to access while offline. Working on this project helped me become more comfortable with native Android development. "
        skills="Android, Java, REST API"
        github="https://github.com/ArcticEH/WoW-Mount-Collector"
      />

      <ProjectBox
        image="websiteScreenshot.png"
        title="Vue Portfolio Website"
        description="The website you are looking at right now! I aimed to create a minimalistic dark themed site that would be mobile-friendly and simple to maintain. I used Vue 3 to create the app and utilized reusable components whenever appopriate (such as with these 'Project Boxes'). The row-like design was mostly accomplished using flexbox and media queries. "
        skills="Vue 3, Javascript, CSS"
        github="https://github.com/ArcticEH/personal-portfolio"
      />
    </div>

    <div class="category">
      <h2 class="title">Notable Professional Projects</h2>
    </div>

    <ProjectBox
      image="hazardScreenshot.png"
      title="3D WebGL Hazard Game"
      description="A education game targeting nursing students where 10 randomly spawning hazards must be identified to win. I was the sole developer on the project and utilized raycasting, collision, animators, player movement, and simple UI. "
      skills="Unity, C#, 3D"
      youtube="https://www.youtube.com/watch?v=YGUSFeBUNoI"
    />

    <ProjectBox
      image="back2playScreenshot.png"
      title="iOS Concussion Research App "
      description="Worked on a 3 person development team to create an iOS and WatchOS concussion recovery app aimed at adolescents. The app sends notifications to the user to complete daily surveys with self-reporting symptoms. Users move through 2 recovery systems with the help of app recommendations. Click the link icon below for additional information from the research team."
      skills="iOS, WatchOS, Swift, XCode"
      link="https://www.canchild.ca/en/research-in-practice/current-studies/the-back2play-app-study"
    />

    <ProjectBox
      image="chartJSScreenshot.png"
      title="App Metrics Visualization Web App"
      description="Created a web app that aggregated and manipulated raw usage data from a mobile application and displayed the data using the appopriate charts. The app also required a login system and a node backend which utilized a PostGres database. "
      skills="Javascript, Chart JS, Node, Express, SQL, PostGres"
    />
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

  .title {
    font-size: 25px;
  }
}
</style>
