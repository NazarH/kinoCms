<template>
<div class='wrapper' id='wrapp'>
   <div class='header'>
       <div class='login'>
         <div class='container'>
           <button>Логин</button>
           <button>Регистрация</button>
         </div>
       </div>
       <div class='header__main'>
         <div class='container'>
            <div class='header__row'>
            <div class='header__logo'>
               <router-link to='/main'><span>Logo</span></router-link>
            </div>
            <input type='text' class='header__input' placeholder='Поиск'>
            <social-media></social-media>
            <div class='header__numbs'>
               <span>(048) 777-77-77</span>
               <span>(097) 777-77-77</span>
            </div>
            </div>
         </div>
       </div>
       <div class='header__nav'>
           <div class='container'>
               <div class='header__row header__row-pages'>
                  <ul class='header__pages'>
                   <li><router-link to='/poster'>Афиша</router-link></li>
                   <li><router-link to='/schedule'>Расписание</router-link></li>
                   <li><router-link to='/soon'>Скоро</router-link></li>
                   <li><router-link to='/cinemas-list'>Кинотеатры</router-link></li>
                   <li><router-link to='/stocks'>Акции</router-link></li>
                   <li><router-link to='/about'>О киноеатре</router-link></li>
                  </ul>
               </div>
           </div>
       </div>
   </div>

   <div class='content'>
       <img :src='aboutInfo.abSinemaMainImg'>
       
       <div class='blocks'>
        <div class='content__left'>
           <h2>{{aboutInfo.abSinemaName}}</h2>
           <div>
           {{aboutInfo.abSinemaDescr}}
           </div>
           <img :src='aboutInfo.abSinemaGalary[0].img' class='firstImg'>
           <h2>Оборудование</h2>
           <div>
           {{aboutInfo.abSinemaDescr.substr(0, 1016)}}
           </div>
           <div>
           {{aboutInfo.abSinemaDescr.substr(0, 1016)}}
           </div>
           <div class='images-blocks'>
           <img :src='aboutInfo.abSinemaGalary[1].img'>
           <img :src='aboutInfo.abSinemaGalary[2].img'>
           </div>
           <div>
           {{aboutInfo.abSinemaDescr.substr(0, 1016)}}
           </div>
       </div>
      <div class='content__right'>
            <img src='assets/dist/img/book_banner.PNG'>
            <img src='assets/dist/img/cinemas-soc.png'>
      </div>
       </div>
      
   </div>

   <div class='footer__line'><HR/></div>
   <div class='footer'>
      <div class='container'>
         <div class='social'>
           <div class='footer__mobile'>
            <h4>Мобильные приложения</h4>
           </div>
           <div>
             <a href=''><img src='assets/dist/img/android.png'></a>
             <a href=''><img src='assets/dist/img/appstore.png'></a>
           </div>
           <div>
             Разработка сайтов: AVADA-MEDIA
           </div>
         </div>

         <div class='afish'>
            <div>
               <h4>Афиша</h4>
               <ul>
                  <li><a href=''>Расписание</a></li>
                  <li><a href=''>Скоро в прокате</a></li>
                  <li><a href=''>Кинотеатры</a></li>
                  <li><a href=''>Акции</a></li>
               </ul>
            </div>
         </div>

         <div class='cinema'>
            <div>
               <h4>О кинотеатре</h4>
               <ul>
                  <li><a href=''>Расписание</a></li>
                  <li><a href=''>Скоро в прокате</a></li>
                  <li><a href=''>Кинотеатры</a></li>
                  <li><a href=''>Акции</a></li>
               </ul>
            </div>
         </div>

         <div class='social-icons'>
            <div>
               <ul>
                  <li><a href=''><img src='assets/dist/img/facebook.png'></a></li>
                  <li><a href=''><img src='assets/dist/img/twitter.png'></a></li>
                  <li><a href=''><img src='assets/dist/img/vk.png'></a></li>
                  <li><a href=''><img src='assets/dist/img/odnok.png'></a></li>
               </ul>
            </div>
         </div>
      </div>
      <div class='reserved'>
        <div class='container'>
           ©KinoCMS 2016, All right reserved
        </div>
      </div>
   </div>
   </div>
</template>

<script scoped>
import { getDatabase, ref as fireRef, set, child, get, onValue } from "firebase/database";
import { getStorage, ref, uploadBytes, deleteObject, getDownloadURL } from "firebase/storage";

import SocialMedia from '../components/social-media.vue';

export default {
   data(){
      return{
          aboutInfo: []
      } 
   },
   components:{
      SocialMedia
   },
   methods:{
       getUserFirstFunc(){
           const dbRef = fireRef(getDatabase());
           get(child(dbRef, `abSinema/`)).then((snapshot) => {
              var banners = [];
              snapshot.forEach(element => {
              banners.push(element.val());
              });
              this.aboutInfo = banners[0];
           });   
       }
   },
   beforeMount(){
      this.getUserFirstFunc()
  },
}

</script>



<style scoped>

   .content__right>img{
      width: 236px;
      margin-bottom: 25px;
   }

   .blocks{
      display: flex;
   }

   .images-blocks{
      margin-top: 20px;
      margin-bottom: 20px;
   }

   .images-blocks>img{
      width: 48.5%;
   }

   .images-blocks>img{
      margin-right: 15px;
   }

   .firstImg{
       width: 100%;
       height: 450px;
       margin-top: 20px;
       margin-bottom: 20px;
   }

   .content{
       color: black;
   }

   .content>h2{
       margin-top: 20px;
       margin-bottom: 20px;
       text-align: center;
   }

   .content__left{
       width: 83%;
       padding-left: 25px;
   }

   .content__left>h2{
      text-align: center;
      margin-top: 20px;
      margin-bottom: 20px;
   }

   .content__right{
      margin-top: 83px;
       width: 17%;
       display: flex;
      flex-direction: column;
      align-items: center;
   }

   .content>img{
       width: 100%;
   }


  /* */

  .wrapper{
      min-height: 100%;
      min-width: 576px;
      display: flex;
      flex-direction: column;
      color: white;
      background-attachment: fixed;
   }
   .container{
      max-width: 1110px;
      margin: 0 auto;
   }

   /* Header */

.login>.container{
      background: white;
      padding-top: 10px;
      padding-bottom: 10px;
      display: flex;
      justify-content: flex-end;
   }

   .login>.container>button:nth-child(2){
      margin-left: 5px;
   }

   .header__main>.container{
      background: white;
   }

   .header__nav>.container{
      background: white;
   }

   .header__banner{
      background-color: #991C24;
   }

   .header__banner>img{
      display: block;
      margin: 0 auto;
      width: 66%;
      height: 95px;
   }

   .header__row{
      display: flex;
      align-items: center;
      justify-content: space-between;
   }

   .header__logo{
      width: 200px;
      height: 70px;
      border: 2px solid black;
      background-color: #E6E6E6;
   }

   .header__logo>span{
      color: black;
   }

   .header__list>li{
      display: inline;
   }

   .header__numbs{
      display: flex;
      flex-direction: column;
   }

   .header__numbs>span{
      font-size: 30px;
      -webkit-text-stroke: 1px #000000;
   }

   .header__input{
      height: 35px;
      border: 2px solid black;
   }

   .header__row-pages{
      display: flex;
      justify-content: flex-end;
   }
   
   .header__pages>li{
      display: inline-block;
      border: 1px solid black;
      color: black;
      width: 130px;
      text-align: center;
      background-color: white;
      border-left: 0;
      border-right: 0;
   }

   .header__pages>li:first-child{
      border-left: 1px solid black;
   }

   .header__pages>li:last-child{
      border-right: 1px solid black;
   }

   .header__pages>li>a{
      color: black;
}

   /* Content */



  /* Footer */

.footer>.container{
      background: white;
      color: black;
      display: flex;
      justify-content: space-between;
   }

   .footer__line{
      color: black;
      background-color: white;
      padding-top: 20px;
      padding-bottom: 20px;
      width: 1110px;
      margin: 0 auto;
   }

   .footer__line>hr{
      color: black;
      border: 0.5px solid black;
   }

   .social>div>a>img{
      width: 150px;
   }

   .social>div:last-child{
      margin-top: 45px;
   }

   .afish>div{
      display: flex;
      flex-direction: column;
      align-items: center;
   }

   .cinema>div{
      display: flex;
      flex-direction: column;
      align-items: flex-start;
   }

   .cinema>div>ul{
      margin-left: -40px;
   }

   .cinema>div>ul>li{
      list-style-type: none;
      text-align: left;
   }

   .cinema>div>ul>li>a{
      color: black;
   }

   .afish>div>ul>li{
      list-style-type: none;
   }

   .afish>div>ul>li>a{
      color: black;
   }

   .social-icons>div>ul>li{
      display: inline-block;
      list-style-type: none;
   }
   
   .social-icons>div>ul>li>a>img{
      height: 50px;
      width: 50px;
   }

   .social-icons>div>ul>li:nth-child(2)>a>img{
      height: 65px;
      width: 65px;
   }

   .social-icons>div>ul>li:last-child>a>img{
      height: 57px;
      width: 57px;
}


</style>