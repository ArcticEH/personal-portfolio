<template>
  
  <div id="containerTimeline">
    <div id="containerT">
            
      <!-- <fa v-if="this.showCircle" class="blue" id="circle" icon="circle"> </fa> -->
      <fa v-if="this.showArrow" id="arrow" icon="caret-up"> </fa>
      <div id="text">
        <div id="header">
          <span id="year" class="blue">{{ year }}</span>
          <span id="title">{{ title }}</span>
        </div>
        <div id="content">{{ content }}</div>

        
      </div>

      
    </div>

    <img id="containerImage" :src="require(`../assets/${image}`)" :class="{offsetArrow: this.showArrow}" /> 

  
    
  </div>

</template>

<script>
export default {
  props: ["year", "title", "content", "showArrow", "showCircle", "image"],
};
</script>

<style scoped>
#containerTimeline {
  display: flex;
  align-items: center;    
  justify-content: center;
  margin-left: 12.5%;
  margin-right: 12.5%;  

}

#containerT {
  margin-bottom: 0px;

  width: 80%;
}

#text {
  display: flex;
  flex-direction: column;
  background-color: #343434;
  /* margin-left: 15%;
  margin-right: 15%; */
  border-radius: 5px;
  padding: 15px;
  color: white;
}

#header {
  font-weight: bold;
}

#title {
  font-size: 20px;
}

#year {
  margin-right: 12px;
  font-size: 20px;
}

#content {
  font-size: 15px;
  padding-top: 6px;
  padding-bottom: 6px;
  white-space: pre-wrap;
}

#arrow {
  display: block;
  /* position: relative; */
  color: #343434;
  /* color: red; */
  /* bottom: 8px; */
  /* top: -113px; */
  height: 50px;
  width: 100%;
  margin-bottom: -17px;
  /* align-self: center; */
  margin-left: 3.75%;
  
}

.offsetArrow {
  margin-top: 34px;
}

#circle {
  display: block;
  position: relative;  
  /* color: red; */
  bottom: 9px;
  /* top: -113px; */
  height: 30px;
  width: 100%;
  margin-bottom: -25px;
}

#containerImage {
  /* width: 7.5%; */
  width: 10%;
  margin-left: 12px;
  height: 100%;  
  border: 2px solid white;
  border-radius: 15px;  
}

@media (max-width: 800px) {
#containerTimeline {
    margin-left: 2px;
    margin-right: 2px;

}

  #header {
    font-size: 3vw;
  }

  #title {
    font-size: 15px;
  }

  #content {
    font-size: 12px;
    padding-top: 16px;
    padding-bottom: 16px;
  }

  #containerImage {
  /* width: 7.5%; */
  width: 15%;
  height: 100%;  

}
}
</style>
