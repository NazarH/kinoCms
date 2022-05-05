<!-- <router-view/> -->

<template>
<div class='banners'>
    <div v-for='banner in banners' :key='banner.id' class='banner'>
        <div class="square2"></div>
        <div>URL: {{banner.url}}</div> 
        <div>Text: {{banner.text}}</div>
    </div>
    <form @submit.prevent>
        <div class="square">
            <input type="file">
        </div>
        <div>URL: <input v-bind:value='url' @input='url = $event.target.value' type='text' placeholder='URL'></div>
        <div>Текст: <input v-bind:value='text' @input='text = $event.target.value' type='text' placeholder='text'></div>
    </form>

</div>
<button @click='createBanner'>Сохранить</button>


</template>

<script>
export default {
    data(){
        return{
            banners: [],
            url: '',
            text: ''
        }
    },
    methods:{
        createBanner(){
            const newBanner = {
                id: Date.now(),
                url: this.url,
                text: this.text,
            }
            this.banners.push(newBanner);
            this.url = '',
            this.text = ''
        },
    }
}
</script>

<style>

.banners{
    width: 750px;
    display: flex;
    overflow: scroll;
    overflow-y: hidden;
}

.banners::-webkit-scrollbar{
    height: 5px;
    background-color: white;
}

.banners::-webkit-scrollbar-thumb{
    background-color: #E6E6E6;
}

.banner{
    margin: 0px 5px 5px 5px;
}

.banner>div:last-child{
    margin-top: 15px;
}

form{
    display: flex;
    flex-direction: column;
    margin-right: 5px;
    margin-left: 10px;
    margin-bottom: 10px;
    min-width: 240px;
    height: 238px;
}

.square{
    width: 186px;
    height: 100px;
    margin-left: 45px;
    margin-bottom: 10px;
    margin-top: 10px;
    background-color: #E6E6E6;
    border: 1px solid black;
    overflow: hidden;
}

.square>input[type='file']{
    margin-left: 54px;
    margin-top: 5px;
}

.square2{
    width: 186px;
    height: 100px;
    margin-bottom: 12px;
    margin-top: 10px;
    background-color: #E6E6E6;
    border: 1px solid black;
}

input[placeholder="URL"]{
    margin-left: 10.5px;
    margin-bottom: 10px;
}
</style>