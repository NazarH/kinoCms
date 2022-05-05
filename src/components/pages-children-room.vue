<template>
  <form :id='childRoom.childRoomId' @submit.prevent style='display: none;' v-for='childRoom in childRoomList' :key='childRoom.id' class='form'>
      <img src='assets/dist/img/cross.png' @click='close(childRoom)' class='close1'>
      <div class='on-off'>
         <div>
            ВКЛ <input name="rad" type="radio" value="ВКЛ" @input='childRoom.childRoomRadio = $event.target.value'>
            <input name="rad" type="radio" value="ВЫКЛ" @input='childRoom.childRoomRadio = $event.target.value'> ВЫКЛ
         </div>
      </div>
      <div class='cinema_name'>
          Название новости: <input type='text' placeholder='Название новости'
          v-bind:value='childRoom.childRoomName' @input='childRoom.childRoomName = $event.target.value'>
      </div>
      <div class='descr'>
          Описание: <textarea placeholder='Текст' v-bind:value='childRoom.childRoomDescr'
          @input='childRoom.childRoomDescr = $event.target.value'></textarea>
      </div>
      <div class='logo'>
          <img src='assets/dist/img/cross.png' class='logo_del' @click='deleteImg(childRoom)'
               v-bind:id='childRoom.childRoomId + "-logo"'>
          Главная картинка 
          <button class='square' @click='inputAct(childRoom)'>
              <input type="file" accept="image/*" :id='childRoom.childRoomId + "-logo_input"' class='logo_input'
              @change="onFileSelected" :ref="childRoom.childRoomId + 'fileDialog'" :name='childRoom.childRoomId + "-input_1"' />
              <img src=''  v-bind:id='childRoom.childRoomId + "-temp_logo_img"' class='temp_logo_img'>
              <img v-bind:src='childRoom.childRoomMainImg' class='logo_img' v-bind:id='childRoom.childRoomId + "-logo_img"' alt=" ">
          </button>
      </div>
      Галерея картинок
      <div class='galary'>
          Размер: 1000х190
            <div v-for='image in childRoom.childRoomGalary' :key='image.id' class='square2'>
                <img src='assets/dist/img/cross.png' 
                     class='galaryDeletePhot'
                     @click='deletePhot(image, childRoom)'
                     v-bind:id='image.id + "-img_del2"'
                >
                <img src=''  v-bind:id='image.id + "-temp_logo_img2"' class='temp_logo_img'>
                <img v-bind:src='image.img' class='galaryImg' v-bind:id='image.id + "-logo_img2"' alt=" ">
            </div>
            <button @click='inputAct2(childRoom)'>
                <input type="file" accept="image/*" :id='childRoom.childRoomId + "-some_int"' 
                       class='galaryInput' ref="file" 
                       @change='galaryPhotLoad'/>
                       Добавить <br> фото
            </button>
      </div>
      <div class='cinema_name2'>
          Ссылка на видео: <input type='text' placeholder='Ссылка на видео в YouTube'
          v-bind:value='childRoom.childRoomLink' @input='childRoom.childRoomLink = $event.target.value'>
      </div>
      <div class='seo'>
          <div>
            SEO блок:
          </div>
          <div>
            <div>
              URL: <input type='text' placeholder='Text' v-bind:value='childRoom.childRoomUrl'
              @input='childRoom.childRoomUrl = $event.target.value'>
            </div>
            <div>
              Title: <input type='text' placeholder='Title' v-bind:value='childRoom.childRoomTitle'
              @input='childRoom.childRoomTitle = $event.target.value'>
            </div>
            <div>
              Keywords: <input type='text' placeholder='Word' v-bind:value='childRoom.childRoomKeywords'
              @input='childRoom.childRoomKeywords = $event.target.value'>
            </div>
            <div>
              Description: <textarea placeholder='Description' v-bind:value='childRoom.childRoomDescription'
              @input='childRoom.childRoomDescription = $event.target.value'></textarea>
            </div>
          </div>
    </div>
    <div class="save_btn"><button @click='getData(childRoom)'>Сохранить</button></div>
  </form>
</template>

<script scoped>
import { getDatabase, ref as fireRef, set, child, get, onValue } from "firebase/database";
import { getStorage, ref, uploadBytes, deleteObject, getDownloadURL } from "firebase/storage";

export default {
  data(){
    return{
      childRoomList: [],
      imgData: null,
      imgData2: null,
      imgDataStorage: [],
    }
  },
  methods:{
    createchildRoom(){
      let fullDate = new Date();
      let day = fullDate.getDate();
      let month = fullDate.getMonth();
      let year = fullDate.getFullYear();

      let randomId = Date.now();

      setTimeout(() => {
      this.childRoomList.push({
        childRoomId: randomId,
        childRoomCreateDate: `${day}.${month + 1}.${year}`,
        childRoomRadio: '',
        childRoomStatus: null,
        childRoomName: '',
        childRoomDescr: '',
        childRoomMainImg: null,
        childRoomGalary: [],
        childRoomLink: '',
        childRoomUrl: '',
        childRoomTitle: '',
        childRoomKeywords: '',
        childRoomDescr2: ''
      });
      }, 1);

      setTimeout(() => {
          document.getElementById(randomId).style="display: block;";
      }, 1);
    },
    childRoomEdit(childRoom){
        document.getElementById(childRoom.childRoomId).style="display: block;";
    },
    childRoomDelete(childRoom){
        let tempDel = this.childRoomList.findIndex(n => n.childRoomId === childRoom.childRoomId);
        this.childRoomList.splice(tempDel, 1);
    },
    close(childRoom){
        document.getElementById(childRoom.childRoomId).style="display: none;";
    },
    inputAct(childRoom){
      document.getElementById(childRoom.childRoomId + "-logo_input").click();
    },
    onFileSelected(event){
          let childRoom = this.childRoomList[0];
          var s_img = document.getElementById(childRoom.childRoomId + "-temp_logo_img");
          
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
            this.temp_src = s_img.src;
            //this.banner_films = s_img.src;
          }
          reader.readAsDataURL(this.imgData);

          document.getElementById(childRoom.childRoomId + "-logo_img").style='display: none;';
          document.getElementById(childRoom.childRoomId + "-temp_logo_img").style='width: 150px; height: 115px; display: block; margin: 0 auto;';
    },
    deleteImg(childRoom){
        childRoom.childRoomMainImg = '';
        document.getElementById(childRoom.childRoomId + "-temp_logo_img").src="";
    },
    inputAct2(childRoom){
      document.getElementById(childRoom.childRoomId + "-some_int").click();
    },
    galaryPhotLoad(event){
      let childRoom = this.childRoomList[0];
      let galaryTempId = Date.now();
      childRoom.childRoomGalary.push({
          id: galaryTempId,
          img: ''
      });
      console.log(childRoom);
      setTimeout(() => {
          var sImg = document.getElementById(galaryTempId + "-temp_logo_img2");

          let imgDataS = Date.now();

          this.imgData2 = event.target.files[0];
          console.log(this.imgData2);

          this.imgDataStorage.push({
              im_g: this.imgData2,
              name: this.imgData2.name,
              id: imgDataS,
              id2: galaryTempId,
              src: 'src',
          })

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
          sImg.src = result;
          this.temp_src = sImg.src;
          }
                
          reader.readAsDataURL(this.imgData2);

          document.getElementById(galaryTempId + "-temp_logo_img2")
          .style='width: 150px; height: 115px; display: block; margin: 0 auto;';
          document.getElementById(galaryTempId + "-logo_img2").style='display: none;';

          this.imgData2 = null;
      }, 100);
    },
    deletePhot(image, childRoom){
        let imageTempId = childRoom.childRoomGalary.findIndex(n => n.id === image.id);
        childRoom.childRoomGalary.splice(imageTempId, 1);
    },
    getData(childRoom){
      let ident = Date.now();
      let storage = getStorage();

      if(this.imgData !== null && this.imgData !== undefined){
                const storageRef = ref(storage, `childRoom-logo/` + ident + this.imgData.name);
                uploadBytes(storageRef, this.imgData).then((snapshot) => {
                console.log('Файл завантажено');
                });
      };
      if(this.imgDataStorage !== null && this.imgDataStorage !== undefined){
                for(let element in this.imgDataStorage){
                    const storageRef = ref(storage, `childRoom-galary/` + this.imgDataStorage[element].id + this.imgDataStorage[element].name);
                    uploadBytes(storageRef, this.imgDataStorage[element].im_g).then((snapshot) => {
                    console.log('Файл завантажено');
                    });
                }
      }
      setTimeout(() => {
                let tempId = this.childRoomList.findIndex(n => n.childRoomId === childRoom.childRoomId);
                
                if(this.imgData !== null && this.imgData !== undefined){
                    getDownloadURL(ref(storage, `childRoom-logo/` + ident + this.imgData.name)).then((url) => {
                        console.log(1);
                       document.getElementById(childRoom.childRoomId + "-temp_logo_img").style='display: none;';
                       this.childRoomList[tempId].childRoomMainImg = url;
                       const db = getDatabase();
                       set(fireRef(db, `childRoom/`), this.childRoomList);
                       console.log(this.cinemas);
                    });
                    setTimeout(() => {
                    this.imgData = null;
                    console.log(this.imgData);
                    }, 1000);  
                };

                if(this.imgDataStorage !== null  && this.imgDataStorage !== undefined){
                    for(let element in this.imgDataStorage){
                    getDownloadURL(ref(storage, `childRoom-galary/` + this.imgDataStorage[element].id + this.imgDataStorage[element].name)).then((url) => {
                    this.childRoomList[tempId].childRoomGalary[element].img = url;
                    const db = getDatabase();
                    set(fireRef(db, `childRoom/`), this.childRoomList);
                    });
                    }
                    setTimeout(() => {
                    this.imgDataStorage = [];
                    }, 1000);  
                };
      }, 1000);
      
      const db = getDatabase();
      set(fireRef(db, `childRoom/`), this.childRoomList);
    },
    childRoomFirstFunc(){
          const dbRef = fireRef(getDatabase());
          get(child(dbRef, `childRoom/`)).then((snapshot) => {
            var childRoom = [];
            snapshot.forEach(element => {
              childRoom.push(element.val());
            });
            this.childRoomList = childRoom;
          });
    },
  },
  mounted(){
      this.childRoomFirstFunc()
  }
}
</script>

<style scoped>

.content-wrapper>h3{
  text-align: center;
  padding-top: 25px;
  padding-bottom: 15px;
}

.firstBlock{
    position: relative;
    z-index: 0;
    background-color: white;
    width: 90%;
    padding: 25px;
    margin: 0 auto;
}

.add_cinema{
    position: relative;
    z-index: 0;
    background-color: white;
    width: 90%;
    padding: 25px;
    margin: 0 auto;
}

.create_news{
  text-align: center;
}

/* Table */

table{
    margin-bottom: 25px; 
    margin-left: 32px;
}

tr>td>input{
    width: 160px;
}

tr:nth-child(2n + 1){
    background-color: #ECECEC;
}

tr:first-child{
    background-color: #CCCCCC;
}

tr>td:nth-child(1){
    border: 1px solid black;
    width: 425px;
    padding-left: 15px;
}

tr>td:nth-child(2){
    border: 1px solid black;
    width: 325px;
    height: 40px;
    padding-left: 15px;
}

tr>td:nth-child(3){
    border: 1px solid black;
    width: 150px;
    height: 40px;
    padding-left: 15px;
}

/* FORM */

.on-off{
  display: flex;
  font-weight: bold;
  justify-content: flex-end;
}

.on-off>div{
  display: flex;
  align-items: center;
  margin-right: 75px;
  margin-bottom: 15px;
}

.on-off>div>input{
  margin-left: 3px;
  margin-right: 3px;
}

.on-off>div>input:first-child{
  margin-right: 15px;
}

.cinema_name{
    display: flex;
}

.cinema_name>input{
    width: 400px;
    margin-left: 14px;
    margin-bottom: 15px;
    margin-right: 25px;
}

.cinema_name2{
    display: flex;
}

.cinema_name2>input{
    width: 800px;
    margin-left: 24px;
    margin-bottom: 15px;
}

.descr{
    display: flex;
}

.descr>textarea{
    width: 800px;
    height: 150px;
    margin-left: 73px;
    margin-bottom: 15px;
}

.condition{
    display: flex;
}

.condition>textarea{
    width: 800px;
    height: 150px;
    margin-left: 37.2px;
    margin-bottom: 15px;
}

.logo{
    display: flex;
    align-items: center;
}

.logo>button{
    margin-left: 35px;
    margin-bottom: 15px;
}

.top_back_bann{
    display: flex;
    align-items: center;
}

.top_back_bann>button{
    margin-left: 55px;
    margin-bottom: 15px;
}

.galary{
    display: flex;
    align-items: center;
}

.galary>button{
    margin-top: 15px;
}

input[type="date"]{
  width: 235px;
}

/*SEO*/

.seo{
    display: flex;
    margin-top: 20px;
    margin-bottom: 15px;
}

.seo>div:first-child{
    margin-right: 50px;
}

.seo>div>div:first-child{
    margin-left: 50px;
}

.seo>div>div:nth-child(2){
    margin-left: 47px;
}

.seo>div>div:nth-child(3){
    margin-left: 11px;
}

.seo>div>div:last-child{
    display: flex;
}

.seo>div>div{
    margin-bottom: 10px;
}

.seo>div>div>input{
    width: 500px;
}

.seo>div>div>textarea{
    width: 500px;
    height: 80px;
    margin-left: 4px;
}

/* Logo btn */

.square{
    width: 185px;
    height: 120px;
    margin-bottom: 11px;
    margin-top: 10px;
    background-color: #D2D6DE;
    border: 1px solid #A9A9A9;
}

.square2{
    width: 185px;
    height: 120px;
    margin-bottom: 25px;
    margin-top: 10px;
    margin-left: 24px;
    background-color: #D2D6DE;
    border: 1px solid #A9A9A9;
}

.logo{
    display: flex;
    align-items: center;
}

.logo_del{
    position: absolute; 
    width: 25px; 
    height: 25px; 
    margin-left: 318px;
    margin-top: -124px; 
}

.logo_input{
    width: 127px; 
    margin-bottom: 6px; 
    display: none;
}

.temp_logo_img{
    display: none;
}

.logo_img{
     width: 150px; 
     height: 110px; 
     margin-left: 0px; 
     margin-top: -1px;
}

.logo>button{
    margin-left: 21px;
    margin-bottom: 15px;
}

/* Galary */

.galary{
    display: flex;
    align-items: center;
}

.galary>button{
    margin-top: 15px;
    margin-left: 25px;
    margin-bottom: 15px;
}

.galaryDeletePhot{
    position: absolute; 
    width: 25px; 
    height: 25px; 
    margin-left: 172px; 
    margin-top: -14px;
}

.galaryInput{
    display: none;
}

.galaryImg{
    width: 150px; 
    height: 110px; 
    margin-left: 17px; 
    margin-top: 4px;
}

.save_btn{
    margin-top: 25px;
    margin-bottom: 25px;
    text-align: center;
}

/* Form */

.form{
    position: absolute;
    display: flex;
    flex-direction: column;
    background-color: white;
    padding: 60px;
    border-radius: 6px;
    width: 100%;
    margin: 0 auto;
    top: 0px;
    left: 0px;
    z-index: 1;
}

.close1{
    width: 30px; 
    height: 30px; 
    margin-left: 1219px;
    margin-top: -147px;
}

.third_td{
  padding-left: 35px;
  background-color: white;
}

</style>

