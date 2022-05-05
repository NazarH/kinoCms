<template>
    <div class="add_banners">
    <div class="some_text">Размер: 1000х190</div>
    <div class='banners'>
<!--
    <div v-for='banner in banners' :key='banner.id' class='banner'>
        <div class="square2">
          <img src='assets/dist/img/cross.png' style="width: 25px; heigth: 25px; margin-left: 171px; margin-top: -30px;"
          @click='bannerDelete(banner)'>
        </div>
        <div>Text: <input v-bind:value='banner.text'></div>
    </div>
-->

    <div v-for='banner in obj_banners2' :key='banner.id' class='banner'>
        <div class="square2">
          <img src='assets/dist/img/cross.png' style=" width: 25px; heigth: 25px; margin-left: 171px; margin-top: -30px;"
          @click='bannerDelete(banner)'>
          <div>
           <img v-bind:src='banner.img'  style="width: 150px; height: 110px; margin-left: 15px; margin-top: -21px;" id='myimg'>
          </div>
        </div>
        <div>Text: <input v-bind:value='banner.text' @input='banner.text = $event.target.value'></div>
    </div>

<!--
    <form @submit.prevent name="myform" v-for='banner in banners' :key='banner.id'>
        <div class="square">
          <img src='assets/dist/img/cross.png' style="position: absolute; width: 25px; heigth: 25px; margin-left: 171px; margin-top: -15px;"
          @click='bannerDelete(banner)'>
          <img :src='img' style="width: 170px; height: 120px; margin-left: 7px; display: none;" id='myimg'>
          <input type="file" accept="image/*" id='f' style='width: 127px; margin-bottom: 6px; display: none;' @change="onFileSelected"  />
        </div>
        <div>URL: <input v-bind:value='banner.url' type='text' placeholder='URL'></div>
        <div>Текст: <input v-bind:value='banner.text'  type='text' placeholder='text'></div>
    </form>
-->
<!--
    <form @submit.prevent name="myform" v-for='block in blocks' :key='block.id'>
        <div class="square">
          <img src='assets/dist/img/cross.png' 
               style="position: absolute; width: 25px; heigth: 25px; margin-left: 171px; margin-top: -15px; display: none;"
               @click='deleteBanner()'
               id='img_del'
          >
          <img :src='img' style="width: 170px; height: 120px; margin-left: 7px; display: none;" id='myimg'>
          <input type="file" accept="image/*" id='f' style='width: 127px; margin-bottom: 6px; display: none;' @change="onFileSelected"  />
          <button onclick='f.click()'>Добавить</button>
        </div>
        <div>Текст: <input v-bind:value='text' @input='text = $event.target.value' type='text' placeholder='text'></div>
    </form>
-->

    <form @submit.prevent name="myform" v-for='block in blocks' :key='block.id'>
        <button class="square" onclick='f.click()' style='margin-top: 54px;' id='img-btn'>
          <input type="file" accept="image/*" id='f' style='width: 127px; margin-bottom: 6px; display: none;' @change="onFileSelected"
          ref="fileDialog"  />
          <img src='' id='form_img' style="display: none;">
        </button>
        <div style='display: none;' id='inpt2'>Текст: <input v-bind:value='text' @input='text = $event.target.value' type='text' placeholder='text' ></div>
    </form>
     <button @click='createBlock' class="add_block_photo">Добавить фото</button>
    </div>
    <div class="save_btn"><button @click='getData'>Сохранить</button></div>
    </div>
</template>


<style scoped>
.content-wrapper{
  background-color: #DCDCDC;
  min-height: 100%;
}

/* Block #1 */

.add_banners{
  background-color: white;
  margin: 0 auto;
  width:1160px;
  padding-top: 30px;
  padding-bottom: 32px;
  border: 1px solid #E8E8E8;
  border-radius: 5px;
}

.some_text{
  margin-left: 44px;
}

.content-wrapper>h3{
  text-align: center;
  padding-top: 25px;
  padding-bottom: 15px;
}

.banners{
    width: 1100px;
    height: 225px;
    display: flex;
    overflow: scroll;
    overflow-y: hidden;
    padding: 15px 0px 0px 0px;
    margin: 0 auto;
}

.banners::-webkit-scrollbar{
    height: 5px;
    background-color: white;
}

.banners::-webkit-scrollbar-thumb{
    background-color: #E6E6E6;
}

.banner{
    margin: 0px 5px 5px 10px;
    min-width: 225px;
}

.banner>div:last-child{
    margin-top: 15px;
}

form[name="myform"]{
    display: flex;
    flex-direction: column;
    margin-right: 5px;
    margin-left: 10px;
    margin-bottom: 10px;
    min-width: 240px;
    height: 238px;
}

.square{
    width: 185px;
    height: 120px;
    margin-left: 45px;
    margin-bottom: 10px;
    margin-top: 15px;
    background-color: #D2D6DE;
    border: 1px solid #A9A9A9;
    overflow: hidden;
}

.square>input[type='file']{
    margin-left: 54px;
    margin-top: 5px;
}

.square>button{
  background-color:#EFEFEF;
  border: 1px solid #A9A9A9;
  padding: 5px 30px;
  border-radius: 5px;
  margin-top: 40px;
  margin-left: 28px;
}

.square2{
    width: 185px;
    height: 120px;
    margin-bottom: 11px;
    margin-top: 10px;
    background-color: #D2D6DE;
    border: 1px solid #A9A9A9;
    margin-left: 35px;
}

.save_btn{
    text-align: center;
    margin-top: 20px;
}

.save_btn>button{
  background-color:#EFEFEF;
  border: 1px solid #A9A9A9;
  padding: 5px 30px;
  border-radius: 5px;
}

input[placeholder="URL"]{
    margin-left: 10.5px;
    margin-bottom: 10px;
    border: 1px solid #A9A9A9;
}

input[placeholder="text"]{
  border: 1px solid #A9A9A9;
}

.add_block_photo{
  background-color:#EFEFEF;
  border: 1px solid #A9A9A9;
  padding: 0px 10px;
  border-radius: 5px;
  height: 50px;
  width: 110px;
  align-self: center;
  margin-left: 20px;
  margin-right: 20px;
}

/* Block #2 */

.back_bann{
  background-color: white;
  margin: 0 auto;
  width:1160px;
  padding-top: 30px;
  padding-bottom: 32px;
  border: 1px solid #E8E8E8;
  border-radius: 5px;
}

.bann_add{
  display: flex;
}

.buttons{
  display: flex;
  flex-direction: column;
  align-self: center;
  margin-left: 20px;
}

.buttons>button{
  background-color:#EFEFEF;
  border: 1px solid #A9A9A9;
  padding: 5px 30px;
  border-radius: 5px;
}

.buttons>button:first-child{
  margin-bottom: 8px;
}

.radio_btns{
  display: flex;
  flex-direction: column;
  align-self: center;
  margin-left: 45px;
}

.radio_btns>div:first-child{
  margin-bottom: 25px;
}
</style>


<script scoped>
import { getDatabase, ref as fireRef, set, child, get, onValue } from "firebase/database";
import { getStorage, ref, uploadBytes, deleteObject, getDownloadURL } from "firebase/storage";
export default {
  
    data(){
        return{
            blocks: [],
            obj_banners2: {},
            text: '',
            img: null,
            imgData: null,
            storage: null,
            meta: null,
            img_scr: '',
        }
    },
    methods:{
         getData() {
            let ident = Date.now();
            if(this.text !== ''){
            const storageRef = ref(this.storage, `banner-images/` + ident + this.imgData.name);
            uploadBytes(storageRef, this.imgData).then((snapshot) => {
            console.log('Файл завантажено');
            });
            }


            setTimeout(() => {
             if(this.text !== ''){
             getDownloadURL(ref(this.storage, `banner-images/` + ident + this.imgData.name)).then((url) => {
              this.img = url;

              const db = getDatabase();
              const userId = Date.now();

            if(this.text !== ''){
              this.obj_banners2[userId] = {
                id: Date.now(),
                img: this.img,
                text: this.text,
              }
              this.text = '',
              this.blocks.length = 0
            } else {
              this.blocks.length = 0;
              this.text = ''
            }

            set(fireRef(db, `banners/block_2/`), this.obj_banners2);
             });
             } else {
               const db = getDatabase();
               set(fireRef(db, `banners/block_2/`), this.obj_banners2);
             }
            }, 1000);
            console.log(this.img_scr);
        }, 
        createBlock(){
          this.blocks = [];
          const newBlock = {
            id: Date.now(),
            url: '',
            text: '',
          }
          this.blocks.push(newBlock);
        },
        bannerDelete(banner){
          delete this.obj_banners2[banner.id];
          console.log(this.obj_banners2[banner.id])
        },

        onFileSelected(event){
          var s_img = document.getElementById('form_img');
      
          this.imgData = event.target.files[0];
          var out = '';
          let aByte;
          let byteStr;
          var reader = new FileReader();
          reader.onload = function(event){
            var result = event.target.result;
            for(var i = 0; i < result.length; ++i){
              aByte = result.charCodeAt(i);
              byteStr = aByte.toString(16);
              out += byteStr = " ";
            }
            console.log(result);
            s_img.src = result;
          }
          reader.readAsDataURL(this.imgData);
          document.getElementById('form_img').style='width: 150px; height: 110px; display: block; margin: 0 auto;';
          document.getElementById("inpt2").style="display: block;";
          document.getElementById("img-btn").style="margin-top: 15px;";

          this.storage = getStorage();

          const mountainsRef = ref(this.storage, this.imgData.name);

          const mountainImagesRef = ref(this.storage, `banner-images/` + ident + this.imgData.name);

          mountainsRef.name === mountainImagesRef.name;           
          mountainsRef.fullPath === mountainImagesRef.fullPath;   
        },

        deleteBanner(){
          const desertRef = ref(this.storage, `banner-images/` + ident + this.imgData.name);
          deleteObject(desertRef).then(() => {
            document.getElementById("myimg").style="width: 170px; height: 120px; margin-left: 7px; display: none;";
            document.getElementById("img_del").style="position: absolute; width: 25px; heigth: 25px; margin-left: 171px; margin-top: -15px; display: none;";
            location.reload();
          }).catch((error) => {
          });
        },
        first_func(){
          const dbRef = fireRef(getDatabase());
          get(child(dbRef, `banners/block_2/`)).then((snapshot) => {
            var banners = [];
            snapshot.forEach(element => {
              banners.push(element.val());
            });
            for(let i = 0; i < banners.length; i++){
              this.obj_banners2[banners[i].id] = banners[i]; 
            }
          });
        }
    },
    mounted(){
      this.first_func()
    }
}
</script>