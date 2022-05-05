<template>
        <div class="back_bann">
      <div class="some_text">Размер: 2000х3000</div>
      <div class="bann_add">
        <form class="radio_btns">
          <div><input type="radio" name="complete" value="back"> Фото на фон</div>
          <div><input type="radio" name="complete" value="simple_back"> Просто фон</div>
        </form>
        <div class="square">

        <div v-for='banner in b_img' :key='banner.id'>
          <img src='assets/dist/img/cross.png' 
               style="position: absolute; width: 25px; heigth: 25px; margin-left: 171px; margin-top: -15px;"
               @click='deleteBanner()'
               id='img_del2'
          >
          <img v-bind:src='banner.img' style="width: 150px; height: 110px; margin-left: 15px; margin-top: 3px;" id='myimg2'>
          </div>
          <input type="file" accept="image/*" id='f' style='width: 127px; margin-bottom: 6px; display: none;' @change="onFileSelected"  />
          <button onclick='f.click()'>Добавить</button>
        </div>
      </div>
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
    height: 250px;
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


<script>
import { getStorage, ref, uploadBytes, deleteObject, getDownloadURL } from "firebase/storage";
import { getDatabase, ref as fireRef, set, child, get, onValue } from "firebase/database";

export default {
    data(){
        return{
            banners: [],
            blocks: [],
            b_img: {},
            url: '',
            text: '',
            imge: null,
            imgData: null,
            storage: null,
            meta: null,
        }
    },
    methods:{
        onFileSelected(event){
          this.imgData = event.target.files[0];

          this.storage = getStorage();

          const mountainsRef = ref(this.storage, this.imgData.name);

          const mountainImagesRef = ref(this.storage, `banner-image/` + this.imgData.name);

          mountainsRef.name === mountainImagesRef.name;           
          mountainsRef.fullPath === mountainImagesRef.fullPath;   

          const storageRef = ref(this.storage, `banner-image/` + this.imgData.name);
          uploadBytes(storageRef, this.imgData).then((snapshot) => {
            console.log('Файл завантажено');
          });
          setTimeout(() => {
             getDownloadURL(ref(this.storage, `banner-image/` + this.imgData.name)).then((url) => {
              this.imge = url;
              const someId = Date.now();
              const db = getDatabase();

              this.b_img[someId] = {
                id: someId,
                img: this.imge,
              }

              set(fireRef(db, `banners/banner_phot/`), this.b_img);
             });
          }, 1000);
        },

        deleteBanner(){
          
          this.b_img = {};
          const db = getDatabase();
          set(fireRef(db, `banners/banner_phot/`), this.b_img);

        },
        first_func(){
          const dbRef = fireRef(getDatabase());
          get(child(dbRef, `banners/banner_phot/`)).then((snapshot) => {
            var banner_phot = [];
            snapshot.forEach(element => {
              banner_phot.push(element.val());
            });
            for(let i = 0; i < banner_phot.length; i++){
              this.b_img[banner_phot[i].id] = banner_phot[i]; 
            }
            console.log(this.b_img)
          });
        }
    },
    mounted(){
      this.first_func()
    }
}
</script>