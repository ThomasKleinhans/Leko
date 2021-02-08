<template>
    <div class="project-carousel">
        <div class="images">
            <img class="img" v-show='imgShown == index' :id="'image'+index" v-for="(image, index) in images" :key="'image'+index" :src="image.fields.file.url" alt="">
        </div>
        <div class="thumbnails">
            <img @click="imgShown = index" :class="{'notActive': imgShown != index}" v-for="(image, index) in images" :key="'thumbnail'+index" :src="image.fields.file.url" alt="">
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            imgShown: 0
        }
    },
    props:{
        images: Array
    }
}
</script>

<style lang="scss" scoped>
.project-carousel{
    width: 100%;
    margin: 0;
    .images{
        width: 100%;
        height: 100%;
        .img{
            width: 100%;
            height: 100%;
            object-fit: cover;
            position: absolute;
        }
    }

    .thumbnails{
        position: absolute;
        width: 100%;
        height: 50px;
        display: flex;
        justify-content: flex-end;
        bottom: 50px;
        right: 16px;
        cursor: pointer;

        img{
            object-fit: cover;
            margin: 2.5px;
            height: 75px;
            transition: 0.4s;
            opacity: 1;
            &.notActive{
                opacity: 0.6;
            }
            &:hover{
                opacity: 1;
            }
        }
    }
}
</style>