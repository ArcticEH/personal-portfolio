<template>
    <div id="container">
        <h2>Languages</h2>
        <div class="skillBox">
          <div class="skill"> C# </div>
          <div class="skill"> JavaScript </div>
          <div class="skill"> Swift </div>
          <div class="skill"> Java </div>
          <div class="skill"> SQL </div>
          <div class="skill"> PHP </div>
         </div>

                 <h2>IDEs / Game Engines</h2>
        <div class="skillBox">
          <div class="skill"> Unity </div>
          <div class="skill"> XCode </div>
          <div class="skill"> Android Studio </div>
          <div class="skill"> Intellij </div>
         </div>

                          <h2>Frameworks / Platforms</h2>
        <div class="skillBox">
          <div class="skill"> React / React Native </div>
          <div class="skill"> Vue </div>
          <div class="skill"> .NET </div>
          <div class="skill"> Node.js </div>
          <div class="skill"> Flutter </div>
         </div>

                                   <h2>Databases</h2>
        <div class="skillBox">
          <div class="skill"> SQL Server Express </div>
          <div class="skill"> PostGres </div>
          <div class="skill"> MySQL </div>
  
         </div>

                                            <h2>Other</h2>
        <div class="skillBox">
          <div class="skill"> Git </div>
          <div class="skill"> GitHub </div>
          <div class="skill"> BitBucket </div>
                 <div class="skill"> Jira </div>
          <div class="skill"> Agile </div>
     
          
  
         </div>

    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    #container {
        margin-left: 15%;
        margin-right: 15%;
    }

    h2 {
        margin-top: 64px;
    }

    .skillBox {
        display: grid;
        grid-gap: 25px;
        grid-template-columns: repeat( auto-fit, minmax(150px, 1fr) );
        border: 2px solid white;
        padding: 20px;
        border-radius: 5px;
    }

    .skill {
        font-size: 20px;
        text-align: center;
    }
</style>