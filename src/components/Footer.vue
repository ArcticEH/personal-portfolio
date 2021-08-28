<template>
    <div id="container">
        <!-- <div id="footerText">&#169; Brandon Kolar 2021</div> -->
        <button id="TopButton" @click="onClickTop"> <fa id="TopIcon" icon="arrow-circle-up" /></button>
    </div>
</template>
<script>
export default {
    methods: {
        onClickTop() {
            window.scrollTo(0, 0);
        }
    }
    
}
</script>
<style scoped>

#container {
    display: flex;
    border-top: thick solid white;
    width: 75%;
    margin-top: 100px;
    font-size: 15px;
    color: white;
    padding: 0px;
}

#footerText {
    align-self: flex-end;
}

#TopButton {
    margin-top: 16px;
    align-self: center;
    width: 75px;
    height: 75px;
    background-color: #343434;
    border: none;
    border-radius: 15px;
    color: white;
}

#TopButton:hover {
    background-color: #404040;
}

#TopIcon {
    height: 90%;
    width: 90%;
    cursor: pointer;
}

    
</style>