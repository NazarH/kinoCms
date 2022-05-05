<template>
  <form :id='pageContact.pageContactId' @submit.prevent style='display: none;' v-for='pageContact in pageContactList' :key='pageContact.id' class='form'>
      <img src='assets/dist/img/cross.png' @click='close(pageContact)' class='close1'>
      <div class='on-off'>
         <div>
            ВКЛ <input name="rad" type="radio" value="ВКЛ" @input='pageContact.pageContactRadio = $event.target.value'>
            <input name="rad" type="radio" value="ВЫКЛ" @input='pageContact.pageContactRadio = $event.target.value'> ВЫКЛ
         </div>
      </div>
      <div class='block' v-for='sinema in pageContact.pageContactSinemas' :key='sinema.id'> 
      <div class='cinema_name'>
          Название кинотеатра <input type='text' placeholder='Название кинотеатра'
          v-bind:value='sinema.pageContactName' @input='sinema.pageContactName = $event.target.value'>
          <div>
          <img src='assets/dist/img/cross.png' @click='rollUp(sinema)' class='close2' :id='sinema.id + "rollUp"'>
          <img src='assets/dist/img/cross.png' @click='rollUp2(sinema)' class='close3' :id='sinema.id + "rollUp2"'>
          </div>
      </div>
      <div class='descr' :id='sinema.id + "descr"'>
          Адресс <textarea 
          placeholder='
Кинотеатр "Злой Дюк"
Одесса, проспект Академика Глушко, 11ж
Бронирование билетов: (048) 746-32-33, (048) 746-32-20
e-mail: goldduke@kino.odessa.ua' 
          v-bind:value='sinema.pageContactDescr'
          @input='sinema.pageContactDescr = $event.target.value'></textarea>
      </div>
      <div class='cinema_name2' :id='sinema.id + "cinema_name2"'>
          Координаты для карты <input type='text' placeholder='Координаты для карты'
          v-bind:value='sinema.pageContactLink' @input='sinema.pageContactLink = $event.target.value'>
      </div>
      <div class='logo' :id='sinema.id + "logo"' style='display: none;'>
          <img src='assets/dist/img/cross.png' class='logo_del' @click='deleteImg(sinema)'
               v-bind:id='sinema.id + "-logo"'>
          Лого
          <button class='square' @click='inputAct(sinema)' style='margin-left: 152px;'>
              <input type="file" accept="image/*" :id='sinema.id + "-logo_input"' class='logo_input'
              @change="onFileSelected" :ref="sinema.id + 'fileDialog'" :name='sinema.id + "-input_1"' />
              <img src=''  v-bind:id='sinema.id + "-temp_logo_img"' class='temp_logo_img'>
              <img v-bind:src='sinema.pageContactMainImg' class='logo_img' v-bind:id='sinema.id + "-logo_img"' alt=" ">
          </button>
      </div>
      </div>
      <div class="save_btn"><button @click='addSinemaPage(pageContact)'>Добавить ещё кинотеатр</button></div>
      <div class='seo'>
          <div>
            SEO блок:
          </div>
          <div>
            <div>
              URL: <input type='text' placeholder='Text' v-bind:value='pageContact.pageContactUrl'
              @input='pageContact.pageContactUrl = $event.target.value'>
            </div>
            <div>
              Title: <input type='text' placeholder='Title' v-bind:value='pageContact.pageContactTitle'
              @input='pageContact.pageContactTitle = $event.target.value'>
            </div>
            <div>
              Keywords: <input type='text' placeholder='Word' v-bind:value='pageContact.pageContactKeywords'
              @input='pageContact.pageContactKeywords = $event.target.value'>
            </div>
            <div>
              Description: <textarea placeholder='Description' v-bind:value='pageContact.pageContactDescription'
              @input='pageContact.pageContactDescription = $event.target.value'></textarea>
            </div>
          </div>
    </div>
    <div class="save_btn"><button @click='getData(pageContact)'>Сохранить</button></div>
  </form>
</template>

<script scoped>
import { getDatabase, ref as fireRef, set, child, get, onValue } from "firebase/database";
import { getStorage, ref, uploadBytes, deleteObject, getDownloadURL } from "firebase/storage";

export default {
  data(){
    return{
      pageContactList: [],
      imgData: null,

      sinemaTempId: '',
      temp_id: null
    }
  },
  methods:{
    rollUp(sinema){
        document.getElementById(sinema.id + "descr").style='display: none;';
        document.getElementById(sinema.id + "cinema_name2").style='display: none;';
        document.getElementById(sinema.id + "logo").style='display: none;';
        document.getElementById(sinema.id + "rollUp").style='display: none;';
        document.getElementById(sinema.id + "rollUp2").style='display: block;';
    },
    rollUp2(sinema){
        document.getElementById(sinema.id + "descr").style='display:flex;';
        document.getElementById(sinema.id + "cinema_name2").style='display:flex;';
        document.getElementById(sinema.id + "logo").style='display:flex;';
        document.getElementById(sinema.id + "rollUp2").style='display: none;';
        document.getElementById(sinema.id + "rollUp").style='display: block;';
    },
    addSinemaPage(pageContact){
        pageContact.pageContactSinemas.push({
            id: Date.now(),
            pageContactName: '',
            pageContactDescr: '',
            pageContactLink: '',
            pageContactMainImg: '',
        })
        console.log(pageContact.pageContactSinemas);
    },
    createpageContact(){
      let fullDate = new Date();
      let day = fullDate.getDate();
      let month = fullDate.getMonth();
      let year = fullDate.getFullYear();

      let randomId = Date.now();

      setTimeout(() => {
      this.pageContactList.push({
        pageContactId: randomId,
        pageContactCreateDate: `${day}.${month + 1}.${year}`,
        pageContactRadio: '',
        pageContactSinemas: [{
            id: Date.now(),
            pageContactName: '',
            pageContactDescr: '',
            pageContactLink: '',
            pageContactMainImg: '',
        }],
        pageContactUrl: '',
        pageContactTitle: '',
        pageContactKeywords: '',
        pageContactDescr2: ''
      });
      }, 1);

      setTimeout(() => {
          document.getElementById(randomId).style="display: block;";
      }, 1);
    },
    pageContactEdit(pageContact){
        document.getElementById(pageContact.pageContactId).style="display: block;";
        this.temp_id = pageContact.pageContactId;
    },
    pageContactDelete(pageContact){
        let tempDel = this.pageContactList.findIndex(n => n.pageContactId === pageContact.pageContactId);
        this.pageContactList.splice(tempDel, 1);
    },
    close(pageContact){
        document.getElementById(pageContact.pageContactId).style="display: none;";
        this.temp_id = pageContact.pageContactId;
    },
    inputAct(sinema){
      document.getElementById(sinema.id + "-logo_input").click();
    },
    onFileSelected(event){
          let sinema = this.pageContactList[0];
          this.sinemaTempId = this.temp_id;
          console.log(this.sinemaTempId);

          var s_img = document.getElementById(sinema.id + "-temp_logo_img");
          
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

          document.getElementById(sinema.id + "-logo_img").style='display: none;';
          document.getElementById(sinema.id + "-temp_logo_img").style='width: 150px; height: 115px; display: block; margin: 0 auto;';
    },
    deleteImg(sinema){
        sinema.pageContactMainImg = '';
        document.getElementById(sinema.id + "-temp_logo_img").src="";
    },
    inputAct2(pageContact){
      document.getElementById(pageContact.pageContactId + "-some_int").click();
    },
    deletePhot(image, pageContact){
        let imageTempId = pageContact.pageContactGalary.findIndex(n => n.id === image.id);
        pageContact.pageContactGalary.splice(imageTempId, 1);
    },
    getData(pageContact){
      let ident = Date.now();
      let storage = getStorage();

      if(this.imgData !== null && this.imgData !== undefined){
                const storageRef = ref(storage, `pageContact-logo/` + ident + this.imgData.name);
                uploadBytes(storageRef, this.imgData).then((snapshot) => {
                console.log('Файл завантажено');
                });
      };
      setTimeout(() => {
                let tempId = this.pageContactList.findIndex(n => n.pageContactId === pageContact.pageContactId);
                
                if(this.imgData !== null && this.imgData !== undefined){
                    getDownloadURL(ref(storage, `pageContact-logo/` + ident + this.imgData.name)).then((url) => {
                        console.log(1);
                       this.pageContactList[tempId].pageContactSinemas[this.sinemaTempId].pageContactMainImg = url;
                       const db = getDatabase();
                       set(fireRef(db, `pageContact/`), this.pageContactList);
                       console.log(this.cinemas);
                    });
                    setTimeout(() => {
                    this.imgData = null;
                    console.log(this.imgData);
                    }, 1000);  
                };
      }, 1000);
      
      const db = getDatabase();
      set(fireRef(db, `pageContact/`), this.pageContactList);
    },
    pageContactFirstFunc(){
          const dbRef = fireRef(getDatabase());
          get(child(dbRef, `pageContact/`)).then((snapshot) => {
            var pageContact = [];
            snapshot.forEach(element => {
              pageContact.push(element.val());
            });
            this.pageContactList = pageContact;
          });
    },
  },
  mounted(){
      this.pageContactFirstFunc()
  }
}
</script>

<style scoped>

.block{
    border: 1px solid black;
    border-radius: 5px;
    width: 1100px;
    padding: 40px;
    margin-bottom: 25px;
}

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
  margin-right: 27px;
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
    margin-top: 10px;
}

.cinema_name>input{
    width: 400px;
    margin-left: 34px;
    margin-bottom: 15px;
    margin-right: 25px;
}

.cinema_name2{
    display: none;
}

.cinema_name2>input{
    width: 400px;
    margin-left: 24px;
    margin-bottom: 15px;
}

.descr{
    display: none;
}

.descr>textarea{
    width: 840px;
    height: 150px;
    margin-left: 138px;
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
    margin-left: 358px;
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
    padding-left: 110px;
}

.close1{
    width: 30px; 
    height: 30px; 
    margin-left: 1169px; 
    margin-top: -147px;
}

.close2{
    width: 35px; 
    height: 35px; 
    margin-left: 370px;
    display: none;
}

.close3{
    position: absolute;
    width: 35px; 
    height: 35px; 
    right: 127px;
    transform: rotate(45deg);
}

.third_td{
  padding-left: 35px;
  background-color: white;
}

</style>

