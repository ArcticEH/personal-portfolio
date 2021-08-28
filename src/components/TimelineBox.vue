<template>
    <div id="container">
        <div id="header"><span class="blue">{{ year }}</span> <span id="title" >{{ title }}</span></div>
        <div id="content"> {{content}}</div>
        
    </div>
    <fa id="arrow" icon="caret-down"> </fa>
</template>

<script>
export default {
    props: ["year", "title", "content"]
}
</script>

<style scoped>

#container {
    display: flex;
    flex-direction: column;
    background-color: #343434;
    margin-left: 15%;
    margin-right: 15%;
    border-radius: 5px;
    padding: 15px;
    color: white;
}

#header {
    font-size: 30px;
    font-weight: bold;
}

#title {
    font-size: 20px;
}

#content {
    align-self: center;
    font-size: 20px;
    padding-top: 16px;
    padding-bottom: 16px;
}

#arrow {
    display: block;
    position: relative;
    color: #343434;
    bottom: 20px;
    height: 50px;
    width: 100%;
}

</style>