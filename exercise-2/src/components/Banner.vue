<template>
    <div class="banner">
        <h1 class="banner-heading">Exercise 2</h1>
    </div>
</template>

<script>
export default {
    name: "Banner"
}
</script>

<style lang="less" scoped>
.banner {
    width: 100%;
    height: 30vh;
    min-height: 200px;
    display: flex;
    align-items: center;
    justify-content: center; 
    text-align: center;
    position: relative;
    &-heading {
        font-size: 4.5vw;
    }
}

</style>