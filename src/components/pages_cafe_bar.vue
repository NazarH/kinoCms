<template>
  <form :id='cafeBar.cafeBarId' @submit.prevent style='display: none;' v-for='cafeBar in cafeBarList' :key='cafeBar.id' class='form'>
      <img src='assets/dist/img/cross.png' @click='close(cafeBar)' class='close1'>
      <div class='on-off'>
         <div>
            ВКЛ <input name="rad" type="radio" value="ВКЛ" @input='cafeBar.cafeBarRadio = $event.target.value'>
            <input name="rad" type="radio" value="ВЫКЛ" @input='cafeBar.cafeBarRadio = $event.target.value'> ВЫКЛ
         </div>
      </div>
      <div class='cinema_name'>
          Название новости: <input type='text' placeholder='Название новости'
          v-bind:value='cafeBar.cafeBarName' @input='cafeBar.cafeBarName = $event.target.value'>
      </div>
      <div class='descr'>
          Описание: <textarea placeholder='Текст' v-bind:value='cafeBar.cafeBarDescr'
          @input='cafeBar.cafeBarDescr = $event.target.value'></textarea>
      </div>
      <div class='logo'>
          <img src='assets/dist/img/cross.png' class='logo_del' @click='deleteImg(cafeBar)'
               v-bind:id='cafeBar.cafeBarId + "-logo"'>
          Главная картинка 
          <button class='square' @click='inputAct(cafeBar)'>
              <input type="file" accept="image/*" :id='cafeBar.cafeBarId + "-logo_input"' class='logo_input'
              @change="onFileSelected" :ref="cafeBar.cafeBarId + 'fileDialog'" :name='cafeBar.cafeBarId + "-input_1"' />
              <img src=''  v-bind:id='cafeBar.cafeBarId + "-temp_logo_img"' class='temp_logo_img'>
              <img v-bind:src='cafeBar.cafeBarMainImg' class='logo_img' v-bind:id='cafeBar.cafeBarId + "-logo_img"' alt=" ">
          </button>
      </div>
      Галерея картинок
      <div class='galary'>
          Размер: 1000х190
            <div v-for='image in cafeBar.cafeBarGalary' :key='image.id' class='square2'>
                <img src='assets/dist/img/cross.png' 
                     class='galaryDeletePhot'
                     @click='deletePhot(image, cafeBar)'
                     v-bind:id='image.id + "-img_del2"'
                >
                <img src=''  v-bind:id='image.id + "-temp_logo_img2"' class='temp_logo_img'>
                <img v-bind:src='image.img' class='galaryImg' v-bind:id='image.id + "-logo_img2"' alt=" ">
            </div>
            <button @click='inputAct2(cafeBar)'>
                <input type="file" accept="image/*" :id='cafeBar.cafeBarId + "-some_int"' 
                       class='galaryInput' ref="file" 
                       @change='galaryPhotLoad'/>
                       Добавить <br> фото
            </button>
      </div>
      <div class='cinema_name2'>
          Ссылка на видео: <input type='text' placeholder='Ссылка на видео в YouTube'
          v-bind:value='cafeBar.cafeBarLink' @input='cafeBar.cafeBarLink = $event.target.value'>
      </div>
      <div class='seo'>
          <div>
            SEO блок:
          </div>
          <div>
            <div>
              URL: <input type='text' placeholder='Text' v-bind:value='cafeBar.cafeBarUrl'
              @input='cafeBar.cafeBarUrl = $event.target.value'>
            </div>
            <div>
              Title: <input type='text' placeholder='Title' v-bind:value='cafeBar.cafeBarTitle'
              @input='cafeBar.cafeBarTitle = $event.target.value'>
            </div>
            <div>
              Keywords: <input type='text' placeholder='Word' v-bind:value='cafeBar.cafeBarKeywords'
              @input='cafeBar.cafeBarKeywords = $event.target.value'>
            </div>
            <div>
              Description: <textarea placeholder='Description' v-bind:value='cafeBar.cafeBarDescription'
              @input='cafeBar.cafeBarDescription = $event.target.value'></textarea>
            </div>
          </div>
    </div>
    <div class="save_btn"><button @click='getData(cafeBar)'>Сохранить</button></div>
  </form>
</template>

<script scoped>
import { getDatabase, ref as fireRef, set, child, get, onValue } from "firebase/database";
import { getStorage, ref, uploadBytes, deleteObject, getDownloadURL } from "firebase/storage";

export default {
  data(){
    return{
      cafeBarList: [],
      imgData: null,
      imgData2: null,
      imgDataStorage: [],
    }
  },
  methods:{
    createcafeBar(){
      let fullDate = new Date();
      let day = fullDate.getDate();
      let month = fullDate.getMonth();
      let year = fullDate.getFullYear();

      let randomId = Date.now();

      setTimeout(() => {
      this.cafeBarList.push({
        cafeBarId: randomId,
        cafeBarCreateDate: `${day}.${month + 1}.${year}`,
        cafeBarRadio: '',
        cafeBarStatus: null,
        cafeBarName: '',
        cafeBarDescr: '',
        cafeBarMainImg: null,
        cafeBarGalary: [],
        cafeBarLink: '',
        cafeBarUrl: '',
        cafeBarTitle: '',
        cafeBarKeywords: '',
        cafeBarDescr2: ''
      });
      }, 1);

      setTimeout(() => {
          document.getElementById(randomId).style="display: block;";
      }, 1);
    },
    cafeBarEdit(cafeBar){
        document.getElementById(cafeBar.cafeBarId).style="display: block;";
    },
    cafeBarDelete(cafeBar){
        let tempDel = this.cafeBarList.findIndex(n => n.cafeBarId === cafeBar.cafeBarId);
        this.cafeBarList.splice(tempDel, 1);
    },
    close(cafeBar){
        document.getElementById(cafeBar.cafeBarId).style="display: none;";
    },
    inputAct(cafeBar){
      document.getElementById(cafeBar.cafeBarId + "-logo_input").click();
    },
    onFileSelected(event){
          let cafeBar = this.cafeBarList[0];
          var s_img = document.getElementById(cafeBar.cafeBarId + "-temp_logo_img");
          
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

          document.getElementById(cafeBar.cafeBarId + "-logo_img").style='display: none;';
          document.getElementById(cafeBar.cafeBarId + "-temp_logo_img").style='width: 150px; height: 115px; display: block; margin: 0 auto;';
    },
    deleteImg(cafeBar){
        cafeBar.cafeBarMainImg = '';
        document.getElementById(cafeBar.cafeBarId + "-temp_logo_img").src="";
    },
    inputAct2(cafeBar){
      document.getElementById(cafeBar.cafeBarId + "-some_int").click();
    },
    galaryPhotLoad(event){
      let cafeBar = this.cafeBarList[0];
      let galaryTempId = Date.now();
      cafeBar.cafeBarGalary.push({
          id: galaryTempId,
          img: ''
      });
      console.log(cafeBar);
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
    deletePhot(image, cafeBar){
        let imageTempId = cafeBar.cafeBarGalary.findIndex(n => n.id === image.id);
        cafeBar.cafeBarGalary.splice(imageTempId, 1);
    },
    getData(cafeBar){
      let ident = Date.now();
      let storage = getStorage();

      if(this.imgData !== null && this.imgData !== undefined){
                const storageRef = ref(storage, `cafeBar-logo/` + ident + this.imgData.name);
                uploadBytes(storageRef, this.imgData).then((snapshot) => {
                console.log('Файл завантажено');
                });
      };
      if(this.imgDataStorage !== null && this.imgDataStorage !== undefined){
                for(let element in this.imgDataStorage){
                    const storageRef = ref(storage, `cafeBar-galary/` + this.imgDataStorage[element].id + this.imgDataStorage[element].name);
                    uploadBytes(storageRef, this.imgDataStorage[element].im_g).then((snapshot) => {
                    console.log('Файл завантажено');
                    });
                }
      }
      setTimeout(() => {
                let tempId = this.cafeBarList.findIndex(n => n.cafeBarId === cafeBar.cafeBarId);
                
                if(this.imgData !== null && this.imgData !== undefined){
                    getDownloadURL(ref(storage, `cafeBar-logo/` + ident + this.imgData.name)).then((url) => {
                        console.log(1);
                       document.getElementById(cafeBar.cafeBarId + "-temp_logo_img").style='display: none;';
                       this.cafeBarList[tempId].cafeBarMainImg = url;
                       const db = getDatabase();
                       set(fireRef(db, `cafeBar/`), this.cafeBarList);
                       console.log(this.cinemas);
                    });
                    setTimeout(() => {
                    this.imgData = null;
                    console.log(this.imgData);
                    }, 1000);  
                };

                if(this.imgDataStorage !== null  && this.imgDataStorage !== undefined){
                    for(let element in this.imgDataStorage){
                    getDownloadURL(ref(storage, `cafeBar-galary/` + this.imgDataStorage[element].id + this.imgDataStorage[element].name)).then((url) => {
                    this.cafeBarList[tempId].cafeBarGalary[element].img = url;
                    const db = getDatabase();
                    set(fireRef(db, `cafeBar/`), this.cafeBarList);
                    });
                    }
                    setTimeout(() => {
                    this.imgDataStorage = [];
                    }, 1000);  
                };
      }, 1000);
      
      const db = getDatabase();
      set(fireRef(db, `cafeBar/`), this.cafeBarList);
    },
    cafeBarFirstFunc(){
          const dbRef = fireRef(getDatabase());
          get(child(dbRef, `cafeBar/`)).then((snapshot) => {
            var cafeBar = [];
            snapshot.forEach(element => {
              cafeBar.push(element.val());
            });
            this.cafeBarList = cafeBar;
          });
    },
  },
  mounted(){
      this.cafeBarFirstFunc()
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

