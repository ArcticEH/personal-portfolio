<template>
  <div id="rowOne" class="block">
    <img src="../assets/portfolioImage.png"/>
    <div id="rowOneText">
        Hi. <br> My name is Brandon Kolar and I am a mobile and game developer.
    </div>
  </div>
  <div id="rowTwo" class="block"></div>
  <div id="rowThree" class="block"></div>
</template>

<script>
export default {
  name: "Home",
  components: {},
};
</script>

<style scoped>
.block {
  margin-top: 12px;
  border-radius: 5px;
}

#rowOne {
  display: flex;
  flex-direction: row;
  width: 100%;
  background-color: white;
  justify-content: center;
  align-items: center;
}

#rowOneText {
  font-size: 3vw;
  width: 600px;
  color: black;
  text-align: center;
}

@media (max-width: 750px) {

}

#rowOne img {
  height: auto;
  width: 25%;

}

#rowTwo {
  width: 100%;
  height: 200px;
  background-color: white;
}

#rowThree {
  width: 100%;
  height: 250px;
  background-color: royalblue;
}
</style>
