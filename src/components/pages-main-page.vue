<template>
  <form :id='mainP.mainPageId' @submit.prevent style='display: none;' v-for='mainP in mainPage' :key='mainP.id' class='form'>
      <img src='assets/dist/img/cross.png' @click='closeMainPage(mainP)' class='close1'>
      <div class='on-off'>
         <div>
            ВКЛ <input name="rad" type="radio" value="ВКЛ" @input='mainP.mainPageRadio = $event.target.value'>
            <input name="rad" type="radio" value="ВЫКЛ" @input='mainP.mainPageRadio = $event.target.value'> ВЫКЛ
         </div>
      </div>
      <div class='telephone'>
          <div>
            Телефон
          </div>
          <div class='telephone_inputs'>
            <input type="number" placeholder='777 85 98' :value='mainP.mainPageTelephone1' 
            @input='mainP.mainPageTelephone1 = $event.target.value'>
            <input type="number" placeholder='777 85 98' :value='mainP.mainPageTelephone2'
            @input='mainP.mainPageTelephone2 = $event.target.value'>
          </div>
      </div>
      <div class='descr'>
          SEO текст: <textarea placeholder='Текст' v-bind:value='mainP.mainPageSEO'
          @input='mainP.mainPageSEO = $event.target.value'></textarea>
      </div>
      <div class='seo'>
          <div>
            SEO блок:
          </div>
          <div>
            <div>
              URL: <input type='text' placeholder='Text' v-bind:value='mainP.mainPageUrl'
              @input='mainP.mainPageUrl = $event.target.value'>
            </div>
            <div>
              Title: <input type='text' placeholder='Title' v-bind:value='mainP.mainPageTitle'
              @input='mainP.mainPageTitle = $event.target.value'>
            </div>
            <div>
              Keywords: <input type='text' placeholder='Word' v-bind:value='mainP.mainPageKeywords'
              @input='mainP.mainPageKeywords = $event.target.value'>
            </div>
            <div>
              Description: <textarea placeholder='Description' v-bind:value='mainP.mainPageDescr'
              @input='mainP.mainPageDescr = $event.target.value'></textarea>
            </div>
          </div>
    </div>
    <div class="save_btn"><button @click='getMainPageData(mainP)'>Сохранить</button></div>
  </form>
<!-- ./wrapper -->
</template>

<script scoped>
import { getDatabase, ref as fireRef, set, child, get, onValue } from "firebase/database";
import { getStorage, ref, uploadBytes, deleteObject, getDownloadURL } from "firebase/storage";

export default {
  data(){
    return{
      mainPage: [],
    }
  },
  methods:{
    mainPageCreate(){
      let fullDate = new Date();
      let day = fullDate.getDate();
      let month = fullDate.getMonth();
      let year = fullDate.getFullYear();

      let randomId = Date.now();

      if(this.mainPage.length === 0){
        setTimeout(() => {
        this.mainPage.push({
        mainPageCreateDate: `${day}.${month + 1}.${year}`,
        mainPageId: randomId,
        mainPageRadio: '',
        mainPageTelephone1: '',
        mainPageTelephone2: '',
        mainPageSEO: '',
        mainPageUrl: '',
        mainPageTitle: '',
        mainPageKeywords: '',
        mainPageDescr: ''
      });
      }, 1);

      setTimeout(() => {
          document.getElementById(randomId).style="display: block;";
      }, 1);
      } else if(this.mainPage.length === 1){
        
      }
    },
    mainPageEdit(mainP){
        document.getElementById(mainP.mainPageId).style="display: block;";
    },
    closeMainPage(mainP){
        document.getElementById(mainP.mainPageId).style="display: none;";
    },
    getMainPageData(mainP){   
      const db = getDatabase();
      set(fireRef(db, `pages/main-page/`), this.mainPage);
    },
    mainPageFirstFunc(){
          const dbRef = fireRef(getDatabase());
          get(child(dbRef, `pages/main-page/`)).then((snapshot) => {
            var someData = [];
            snapshot.forEach(element => {
              someData.push(element.val());
            });
            this.mainPage = someData;
          });
    },
  },
  mounted(){
      this.mainPageFirstFunc()
  }
}
</script>

<style scoped>

.telephone{
  display: flex;
}

.telephone_inputs{
  display: flex;
  flex-direction: column;
  margin-left: 84px;
}

.telephone_inputs>input{
  margin-bottom: 15px;
  width: 90px;
  padding-left: 5px;
}

.telephone_inputs>input:last-child{
  margin-bottom: 40px;
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
