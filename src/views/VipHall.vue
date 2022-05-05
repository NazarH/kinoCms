<template>
<div class='wrapper' id='wrapp'>
   <div class='header'>
       <div class='loginForm' id='loginForm'>
          <div class='loginFormBlock'>
               <div>Логин:<input type='text' placeholder='user' v-bind:value='login' @input='login = $event.target.value' id='user'></div>
               <div>Пароль:<input type='password' placeholder='•••••••••' v-bind:value='password' @input='password = $event.target.value' id='pass'></div>
               <div class='loginFormBtns'>
                 <div><button @click='loginMeth'>Войти</button></div>
                 <div><button @click='loginFormClose'>Отмена</button></div>
               </div>
          </div>
       </div>
       <div class='regS' id='regS'>
          Регистрация прошла успешно
       </div>
       <div class='reg' id='reg'>
         <form :id='user.userId' v-for='user in userArray' :key='user.userId' @submit.prevent class='form'>
         <div class='colums'>
         <div>
         <div class='simple_text'>
          <div>Логин</div> <input type='text' v-bind:value='user.userPsevd' @input='user.userPsevd = $event.target.value'
          :id='user.userId + "userLogin"'>
         </div>
         <div class='simple_text'>
          <div>E-mail</div> <input type='text' v-bind:value='user.userEmail' @input='user.userEmail = $event.target.value'
          :id='user.userId + "userEmail"'>
         </div>
         <div class='simple_text'>
          <div>Пароль</div> <input type='password' v-bind:value='user.userPass' @input='user.userPass = $event.target.value'
          :id='user.userId + "userPass"'>
         </div>
         <div class='simple_text'>
          <div>Повторить пароль</div> <input type='password' v-bind:value='user.userPassRep' @input='user.userPassRep = $event.target.value'
          :id='user.userId + "passRep"'>
         </div>
          </div>
            </div>
            <div class="save_btn">
            <button @click='getUserData(user)'>Зарегистрироваться</button>
            <button @click='loginFormClose'>Отмена</button>
            </div>
          </form>
       </div>
       <div class='reg' id='profile'>
         <form id='loginUserForm' @submit.prevent class='form2'>
         <div class='colums'>
         <div>
         <div class='simple_text'>
          <div>Имя</div> <input type='text' v-bind:value='signInUser.userName' @input='signInUser.userName = $event.target.value'>
         </div>
         <div class='simple_text'>
          <div>Фамилия</div> <input type='text' v-bind:value='signInUser.userSecName' @input='signInUser.userSecName = $event.target.value'>
         </div>
         <div class='simple_text'>
          <div>Псевдоним</div> <input type='text' disabled v-bind:value='signInUser.userPsevd' @input='signInUser.userPsevd = $event.target.value'>
         </div>
         <div class='simple_text'>
          <div>E-mail</div> <input type='text' v-bind:value='signInUser.userEmail' @input='signInUser.userEmail = $event.target.value'>
         </div>
         <div class='simple_text'>
          <div>Адресс</div> <input type='text' placeholder='г.Киев. улица Такаято, 1'
          v-bind:value='signInUser.userAdress' @input='signInUser.userAdress = $event.target.value'>
         </div>
         <div class='simple_text'>
          <div>Пароль</div> <input type='password' v-bind:value='signInUser.userPass' @input='signInUser.userPass = $event.target.value'>
         </div>
         <div class='simple_text'>
          <div>Номер карты</div> <input type='text' v-bind:value='signInUser.userBankNumb' @input='signInUser.userBankNumb = $event.target.value'>
         </div>
         </div>
      
         <div>
          <div class='simple_text'>
           <div>Язык</div>
           <div>
            <input name="lang" type="radio" value="Русский" @input='signInUser.userLang = $event.target.value'> Русский 
            <input name="lang" type="radio" value="Украинский" @input='signInUser.userLang = $event.target.value'> Украинский
          </div>
         </div>
         <div class='simple_text'>
          <div>Пол</div>
          <div>
            <input name="gend" type="radio" value="Мужской" @input='signInUser.userGender = $event.target.value'> Мужской 
            <input name="gend" type="radio" value="Женский" @input='signInUser.userGender = $event.target.value'> Женский
          </div>
         </div>
         <div class='simple_text'>
          <div>Телефон</div> <input type='text' v-bind:value='signInUser.userTelNumb' @input='signInUser.userTelNumb = $event.target.value'>
         </div>
         <div class='simple_text'>
          <div>Дата рождения</div>
          <input type="date" id="start" name="trip-start"
                 :value="signInUser.userBirthDate"
                 @input='signInUser.userBirthDate = $event.target.value'
          >
         </div>
         <div class='simple_text'>
          <div>Город</div>
          <select v-on:change="changeOption">
            <option>Выберите город</option>
            <option value='Киев'>Киев</option>
            <option value='Львов'>Львов</option>
            <option value='Одесса'>Одесса</option>
            <option value='Харьков'>Харьков</option>
          </select>
         </div>
         <div class='simple_text'>
         </div>
          </div>
            </div>
            <div class="save_btn">
            <button @click='profileSaveChang'>Сохранить</button>
            <button @click='profileInfClose'>Отмена</button>
            </div>
          </form>
       </div>
       <div class='login' id='loginBlock'>
         <div class='container'>
           <div id='loginBtns' class='loginBtns'>
              <button @click='loginUser'>Логин</button>
              <button @click='regUser'>Регистрация</button>
           </div>
           <div id='signInUserProfile' style='display: none;' class='signInUserStyle'>
              <span @click='openProfile'>{{signInUser.userPsevd}}</span>
              <button @click='exit'>Выход</button>
           </div>
         </div>
       </div>
       <div class='header__main'>
         <div class='container'>
            <div class='header__row'>
            <div class='header__logo'>
               <router-link to='/main'><img :src='mainImg'></router-link>
            </div>
            <input type='text' class='header__input' placeholder='Поиск' v-on:keyup="searchFilm" v-bind:value='tempFilmName' @input='tempFilmName = $event.target.value'>
            <div class='filmList'>
               <a v-for='film in filmTempArray' @click='getData2(film)'>{{film.film_name}}</a>
            </div>
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
                   <li onmouseover="document.getElementById('dropdown').style.display='block';"
                   onmouseout="document.getElementById('dropdown').style.display='none';"><router-link to='/about'>О киноеатре</router-link></li>
                   <div class='menu' id="dropdown" onmouseover="document.getElementById('dropdown').style.display='block';"
                   onmouseout="document.getElementById('dropdown').style.display='none';">
                        <div><router-link to='/cinema-world-news'>Новости</router-link></div>
                        <div><router-link to='/advertising'>Реклама</router-link></div>
                        <div><router-link to='/cafe-bar-page'>Кафе</router-link></div>
                        <div><router-link to='/child-room'>Детская комната</router-link></div>
                        <div><router-link to='/vip-hall'>Вип-зал</router-link></div>
                        <div><router-link to='/mobile-app'>Мобильные прил</router-link></div>
                        <div><router-link to='/contacts'>Контакты</router-link></div>
                   </div>
                  </ul>
               </div>
           </div>
       </div>
   </div>

   <div class='content'>
       <img :src='vipHall.vipHallMainImg'>
       
       <div class='blocks'>
        <div class='content__left'>
           <h2>{{vipHall.vipHallName}}</h2>
           <div>
           {{vipHall.vipHallDescr}}
           </div>
           <div class='images-blocks'>
           <img :src='vipHall.vipHallGalary[0].img'>
           <img :src='vipHall.vipHallGalary[1].img'>
           <img :src='vipHall.vipHallGalary[2].img'>
           </div>
           <div>
           {{vipHall.vipHallDescr.substr(0, 1016)}}
           </div>
           <h2>ФОТОГАЛЕРЕЯ</h2>
             <div class='content__films'>
                <div class='container'>
                    <div class='content__films-banners'>
                    <button @click='swipeLeft()'>
                     ←
                    </button>
                    <img src='' id='filmSwiper'>
                    <button @click='swipeRight()'>
                    →
                    </button>
                    </div>
                </div>
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
          vipHall: [],
          counter3: 0,

          login: '',
          password: '',
          userList: [],
          userArray: [],
          userList: [],
          tempTown: '',
          signInUser: {},
          filmTempArray: [],
          tempFilmName: '',
          lastFilmName: '',

          mainImg: ''
      } 
   },
   components:{
      SocialMedia
   },
   methods:{
      profileSaveChang(){
         for(let i = 0; i < this.userList.length; i++){
            if(this.userList[i].mainId === this.signInUser.mainId){
               this.signInUser.userTown = this.tempTown;
               this.signInUser.userFullName = `${this.signInUser.userName} ${this.signInUser.userSecName}`;
               this.userList[i] = this.signInUser;
               localStorage.signIn = JSON.stringify(this.userList[i]);
               break;
            }
         }
         const db = getDatabase();
         set(fireRef(db, `users/`), this.userList);
         
      },
      loginFormClose(){
         document.getElementById('user').style="border-color: none";
         document.getElementById('pass').style="border-color: none";

         document.getElementById('loginForm').style='display: none';
         document.getElementById('reg').style='display: none';
      },
      profileInfClose(){
         document.getElementById('profile').style='display: none';
      },
      openProfile(){
         document.getElementById('profile').style='display: block';
      },
      exit(){
         localStorage.signIn = '';
         document.getElementById('loginBtns').style='display: block;';
         document.getElementById('signInUserProfile').style='display: none;';
      },
      loginMeth(){
         let count = 0;
         console.log(this.userList);
         for(let i = 0; i < this.userList.length; i++){
            if(this.login === this.userList[i].userPsevd){
               count++;
               if(this.password === this.userList[i].userPass){
                  count = 0;
                  localStorage.setItem('signIn', JSON.stringify(this.userList[i]));
                  console.log(localStorage);
                  break;
               } else {
                  count = 0;
                  document.getElementById('pass').style="border-color: red";
                  return 0;
               }
            }
         }
         if(count === 0){
            document.getElementById('user').style="border-color: red";
            document.getElementById('pass').style="border-color: red";
            return 0;
         }
         if(localStorage.signIn !== ''){
            document.getElementById('loginForm').style="display: none;";
            document.getElementById('loginBtns').style='display: none;';
            document.getElementById('signInUserProfile').style='display: block;';
            this.signInUser = JSON.parse(localStorage.signIn);
            console.log(this.signInUser);
         }
      },
      loginUser(){
         document.getElementById('loginForm').style="display: block;";
      },
      changeOption(event){
         this.tempTown = event.target.value;
      },
      getUserData(user){
        if(user.userPass !== user.userPassRep || user.userPsevd === '' || user.userEmail === '' || user.userPass === '' || user.userPassRep === ''){
          if(user.userPsevd === ''){
             document.getElementById(user.userId + "userLogin").style='border-color: red';
          } else {
             document.getElementById(user.userId + "userLogin").style='border-color: none';
          }

          if(user.userEmail === ''){
             document.getElementById(user.userId + "userEmail").style='border-color: red';
          }else{
             let count = 0;
             for(let i = 0; i < user.userEmail.length; i++){
                if(user.userEmail[i] === '@'){
                   count++;
                }
             }
             console.log(count);
             if(count === 1){
                count = 0;
                document.getElementById(user.userId + "userEmail").style='border-color: none';

                if(user.userEmail.endsWith('.com') || user.userEmail.endsWith('.ru')){
                   document.getElementById(user.userId + "userEmail").style='border-color: none';

                   if(user.userEmail[user.userEmail.length - 5] === '@'){
                      document.getElementById(user.userId + "userEmail").style='border-color: red';
                   }else{
                      document.getElementById(user.userId + "userEmail").style='border-color: none';
                   }
                }else{
                   document.getElementById(user.userId + "userEmail").style='border-color: red';
                }
             } else {
                count = 0;
                document.getElementById(user.userId + "userEmail").style='border-color: red';

                if(user.userEmail.endsWith('.com') || user.userEmail.endsWith('.ru')){
                   document.getElementById(user.userId + "userEmail").style='border-color: none';

                   if(user.userEmail[user.userEmail.length - 5] === '@'){
                      document.getElementById(user.userId + "userEmail").style='border-color: red';
                   }else{
                      document.getElementById(user.userId + "userEmail").style='border-color: none';
                   }
                }else{
                   document.getElementById(user.userId + "userEmail").style='border-color: red';
                }
             }
          }

          if(user.userPass === ''){
             document.getElementById(user.userId + "userPass").style='border-color: red';
          }else{
             document.getElementById(user.userId + "userPass").style='border-color: none';
          }

          if(user.userPass !== user.userPassRep || user.userPassRep === ''){
             document.getElementById(user.userId + "passRep").style='border-color: red';
          }else{
             document.getElementById(user.userId + "passRep").style='border-color: none';
          }

          return 0;
        } else {
          document.getElementById(user.userId + "passRep").style='border-color: none';
          document.getElementById(user.userId + "userLogin").style='border-color: none';
          document.getElementById(user.userId + "userEmail").style='border-color: none';
          document.getElementById(user.userId + "userPass").style='border-color: none';
        }


        if(user.userEmail === ''){
             document.getElementById(user.userId + "userEmail").style='border-color: red';
             return 0;
          }else{
             let count = 0;
             for(let i = 0; i < user.userEmail.length; i++){
                if(user.userEmail[i] === '@'){
                   count++;
                }
             }
             console.log(count);
             if(count === 1){
                count = 0;
                document.getElementById(user.userId + "userEmail").style='border-color: none';

                if(user.userEmail.endsWith('.com') || user.userEmail.endsWith('.ru')){
                   document.getElementById(user.userId + "userEmail").style='border-color: none';

                   if(user.userEmail[user.userEmail.length - 5] === '@'){
                      document.getElementById(user.userId + "userEmail").style='border-color: red';
                      return 0
                   }else{
                      document.getElementById(user.userId + "userEmail").style='border-color: none';
                   }
                }else{
                   document.getElementById(user.userId + "userEmail").style='border-color: red';
                   return 0;
                }
             } else {
                count = 0;
                document.getElementById(user.userId + "userEmail").style='border-color: red';

                if(user.userEmail.endsWith('.com') || user.userEmail.endsWith('.ru')){
                   document.getElementById(user.userId + "userEmail").style='border-color: none';

                   if(user.userEmail[user.userEmail.length - 5] === '@'){
                      document.getElementById(user.userId + "userEmail").style='border-color: red';
                      return 0;
                   }else{
                      document.getElementById(user.userId + "userEmail").style='border-color: none';
                   }
                }else{
                   document.getElementById(user.userId + "userEmail").style='border-color: red';
                   return 0;
                }
             }
          }

        for(let e = 0; e < this.userList.length; e++){
           if(user.userPsevd === this.userList[e].userPsevd){
              document.getElementById(user.userId + "userLogin").style='border-color: red';
              return 0;
           }
        }

         user.userTown = this.tempTown;

         user.userFullName = `${user.userName} ${user.userSecName}`;

         this.userList.push(this.userArray[0]);

         user.mainId = this.userList.findIndex(n => n.userId === user.userId);

         const db = getDatabase();
         set(fireRef(db, `users/`), this.userList);

         localStorage.setItem('signIn', JSON.stringify(this.userArray[0]));
         if(localStorage.signIn !== ''){
            document.getElementById('loginForm').style="display: none;";
            document.getElementById('loginBtns').style='display: none;';
            document.getElementById('signInUserProfile').style='display: block;';
            this.signInUser = JSON.parse(localStorage.signIn);
         }

         this.userArray = [];
         this.tempTown = '';

         setTimeout(() => {
          document.getElementById('reg').style="display: none;";
          document.getElementById('regS').style="top: 0%;";
          setTimeout(() => {
             document.getElementById('regS').style="top: -100%;";
          }, 3000);   
         }, 1);
      },
      regUser(){
         let fullDate = new Date();
         let day = fullDate.getDate();
         let month = fullDate.getMonth();
         let year = fullDate.getFullYear();

         let randomId = Date.now();

         setTimeout(() => {
         this.userArray.push({
            userId: randomId,
            userRegDate: `${day}.${month + 1}.${year}`,
            userName: '',
            userSecName: '',
            userPsevd: '',
            userEmail: '',
            userAdress: '',
            userPass: '',
            userPassRep: '',
            userBankNumb: '',
            userLang: '',
            userGender: '',
            userTelNumb: '',
            userBirthDate: '',
            userTown: ''
         });
         }, 1);

         setTimeout(() => {
          document.getElementById('reg').style="display: block;";
      }, 1);
      },
      searchFilm(){
         const dbRef = fireRef(getDatabase());
         get(child(dbRef, `banner_films/films_list/`)).then((snapshot) => {
            let tempArray = [];
            snapshot.forEach(element => {
              tempArray.push(element.val());
            });
            this.filmTempArray = tempArray;
            console.log(this.filmTempArray);  

            if(this.tempFilmName === ''){
               this.filmTempArray = [];
               return 0;
            }

            for(let i = 0; i < this.filmTempArray.length; i++){
              console.log(this.tempFilmName);
              console.log(i);
              console.log(this.filmTempArray[i].film_name.substr(0, this.tempFilmName.length));
              if(this.tempFilmName.toLowerCase() !== this.filmTempArray[i].film_name.substr(0, this.tempFilmName.length).toLowerCase()){
                 this.filmTempArray.splice(i, 1);
                 i -= 1;
                 console.log(this.filmTempArray);
              }
            }
         });
      },
       getData2(film){
         this.$router.push({name: 'Film', params:{data: JSON.stringify(film)} });
         console.log(this.$router);
       },
       swipeLeft(){
           this.counter3--;
           if(this.counter3 < 0){
               this.counter3 = this.vipHall.vipHallGalary.length - 1;
           }
           document.getElementById('filmSwiper').src=`${this.vipHall.vipHallGalary[this.counter3].img}`;
       },
       swipeRight(){
           this.counter3++;
           if(this.counter3 > this.vipHall.vipHallGalary.length - 1){
               this.counter3 = 0;
           }
           document.getElementById('filmSwiper').src=`${this.vipHall.vipHallGalary[this.counter3].img}`;
       },
       getUserFirstFunc(){
           const dbRef = fireRef(getDatabase());

                    get(child(dbRef, `banners/main_phot/`)).then((snapshot) => {
            var banners = [];
            snapshot.forEach(element => {
              banners.push(element.val());
            });
            this.mainImg = banners[0].img;
            console.log(this.mainImg);
         });
           
          get(child(dbRef, `users/`)).then((snapshot) => {
            var users = [];
            snapshot.forEach(element => {
              users.push(element.val());
            });
            this.userList = users;
          });
           get(child(dbRef, `vipHall/`)).then((snapshot) => {
              var banners = [];
              snapshot.forEach(element => {
              banners.push(element.val());
              });
              this.vipHall = banners[0];
              document.getElementById('filmSwiper').src=`${this.vipHall.vipHallGalary[this.counter3].img}`;
           });   

           setTimeout(() => {
           if(localStorage.signIn !== ''){
              document.getElementById('loginBtns').style='display: none;';
              document.getElementById('signInUserProfile').style='display: block;';
              this.signInUser = JSON.parse(localStorage.signIn);
              console.log(this.signInUser);
           }
           }, 1); 
       }
   },
   beforeMount(){
      this.getUserFirstFunc()
  },
}

</script>



<style scoped>

/* Film List */
   .filmList{
      position: absolute;
      z-index: 1;
      color: black;
      display: flex;
      flex-direction: column;
      background: white;
      top: 4.3%;
      left: 30.72%;
      border: 1px solid black;
   }

   .filmList>a{
      padding-left: 5px;
      padding-right: 5px;
      width: 258px;
   }

   .filmList>a{
      cursor: pointer;
   }


/* Form ----------- */

.reg{
     position: fixed;
     z-index: 10;
     width: 100%;
     height: 100%;
     background-color: rgba(0,0,0,0.8);
     top: 0;
     left: 0;
     color: black;
     display: none;
}

.form{
    display: flex;
    flex-direction: column;
    background-color: white;
    border-radius: 6px;
    width: 31%;
    padding: 40px;
    position: absolute;
    top: 15%;
    left: 35.5%;
}

.form2{
    display: flex;
    flex-direction: column;
    background-color: white;
    border-radius: 6px;
    width: 66%;
    padding: 60px;
    position: absolute;
    top: 15%;
    left: 17%;
}

.third_td{
  padding-left: 35px;
  background-color: white;
}

.colums{
  display:flex;
}

.colums>div:nth-child(2){
  margin-left: 100px;
}

.colums>div:nth-child(2)>.simple_text{
  margin-bottom: 23px;
}

.simple_text{
  display:flex;
  flex-wrap: nowrap;
  margin-bottom: 20px;
}

.simple_text>input{
  width: 300px;
}

.simple_text>div{
  width: 140px;
}

.simple_text>div:nth-child(2){
  display: flex;
  align-items: center;
}

.simple_text>div:nth-child(2)>input:nth-child(2){
  margin-left: 35px;
}

.simple_text>div:nth-child(2)>input{
  margin-right: 10px;
}

.save_btn{
   margin-top: 30px;
   text-align: center;
}

.save_btn>button:first-child{
   margin-right: 5px;
   background: #82BD01;
}

.save_btn>button:last-child{
   background: #FE0000;
}

/* Menu */

.menu{
   flex-direction: column;
   background: white;
   position: absolute;
   z-index: 20;
   right: 17.6%;
   width: 175px;
   border: 1px solid black;
   display: none;
}

.menu>div{
   border: 1px solid black;
   background: white;
}

.menu>div:first-child{
   border-top: 0;
}

.menu>div>a{
   color: black;
   padding-left: 5px;
}

/* */

.signInUserStyle>button{
   background: #FE0000;
}

.signInUserStyle>span{
   font-weight: bold;
   color: blue;
   margin-right: 10px;
   cursor: pointer;
}

/* Login Form */

.loginForm{
    position: fixed;
    z-index: 10;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.8);
    top: 0;
    left: 0;
    color: black;
    display: none;
}

.loginFormBlock{
    padding: 20px;
    background-color: white;
    display: flex;
    flex-direction: column;
    font-weight: bold;
    
    border-radius: 3px;
    position: absolute;
    top: 34%;
    left: 43%;
}

.loginFormBlock>div:nth-child(2)>input{
   margin-left: 5px;
   margin-top: 5px;
   margin-bottom: 15px;
}

.loginFormBlock>div:nth-child(1)>input{
   margin-left: 14px;
}

.loginFormBlock>div:nth-child(3)>div:nth-child(1)>button{
   margin-right: 5px;
   background: #82BD01;
}

.loginFormBlock>div:nth-child(3)>div:nth-child(2)>button{
   margin-right: 5px;
   background: #FE0000;
}

.loginFormBtns{
   display: flex;
   justify-content: center;
}

/* */

   .regS{
      transition: all 0.3s ease 0s;
      background: green;
      text-align: center;
      padding-top: 5px;
      padding-bottom: 5px;
      position: fixed;
      z-index: 10;
      width: 100%;
      top: -100%;
   }

/* ---------------- 0 */

.content__films>.container{
       width: 900px;
       background: #252F3A;
       padding-left: 45px;
       padding-right: 45px;
   }


   .content__films-banners{
       display: flex;
       align-items: center;
   }

   .content__films-banners>button{
       font-weight: bold;
       font-size: 20px;
       border-radius: 50%;
       background: #92D36E;
       border: 0;
       color: #252F3A;
   }

   .content__films-banners>img{
       width: 700px;
       height: 500px;
       display: block;
       margin: 0 auto;
   }

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
      width: 32%;
      height: 300px;
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

   /* Header 1 */

   .login>.container{
      background: white;
      padding-top: 10px;
      padding-bottom: 10px;
      display: flex;
      justify-content: flex-end;
   }

   .login>.container>.loginBtns>button:nth-child(2){
      margin-left: 5px;
   }

   .header__main>.container{
      background: white;
   }

   .header__nav>.container{
      background: white;
   }

   .header__banner{
      background-color: #1C1C1C;
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
   }

   .header__logo>a>img{
      width: 100%;
      height: 100%;
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
      width: 260px;
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

   .header__pages>li:nth-child(6){
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