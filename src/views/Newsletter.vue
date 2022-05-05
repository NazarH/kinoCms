<template>
<div class="wrapper">
<!-- Navbar -->
<nav class="main-header navbar navbar-expand navbar-white navbar-light">
    <!-- Left navbar links -->
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" data-widget="pushmenu" href="#" role="button"><i class="fas fa-bars"></i></a>
      </li>
    </ul>
    <!-- SEARCH FORM -->
    <form class="form-inline ml-3">
      <div class="input-group input-group-sm">
        <input class="form-control form-control-navbar" type="search" placeholder="Search" aria-label="Search">
        <div class="input-group-append">
          <button class="btn btn-navbar" type="submit">
            <i class="fas fa-search"></i>
          </button>
        </div>
      </div>
    </form>
    <!-- Right navbar links -->
  </nav>
  <!-- /.navbar -->
  <!-- Main Sidebar Container -->
  <aside class="main-sidebar sidebar-dark-primary elevation-4" style="min-height: 1080px;">
    <!-- Brand Logo -->

    <!-- Sidebar -->
    <div class="sidebar">
      <!-- Sidebar user panel (optional) -->
      <router-link to="/"><div class="user-panel mt-3 pb-3 mb-3 d-flex">
        <div class="image">
          <img src="assets/dist/img/user2-160x160.jpg" class="img-circle elevation-2" alt="User Image">
        </div>
        <div class="info">
          <a href="#" class="d-block">Admin</a>
        </div>
        <button class='userButton'><router-link to="/main">Main page</router-link></button>
      </div></router-link>
      <!-- Sidebar Menu -->
      <nav class="mt-2">
        <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
          <!-- Add icons to the links using the .nav-icon class
               with font-awesome or any other icon font library -->
               
          <li class="nav-item">
            <ul class="nav nav-treeview" style="display: block;">
              <li class="nav-item">
                <a href="#" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <router-link to="/statistic"><p>Статистика</p></router-link>
                </a>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <router-link to="/banners"><p>Баннера / Слайдеры</p></router-link>
                </a>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <router-link to="/films"><p>Фильмы</p></router-link>
                </a>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <router-link to="/cinemas"><p>Кинотеатры</p></router-link>
                </a>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <router-link to="/news"><p>Новости</p></router-link>
                </a>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <router-link to="/stock"><p>Акции</p></router-link>
                </a>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <router-link to="/pages"><p>Страницы</p></router-link>
                </a>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <router-link to="/users"><p>Пользователи</p></router-link>
                </a>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <router-link to="/newsletter"><p>Рассылка</p></router-link>
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
      <!-- /.sidebar-menu -->
    </div>
    <!-- /.sidebar -->
  </aside>
  <!-- Content Wrapper. Contains page content -->
  <div class="content-wrapper" style='min-height: 1020px;'>

<div class='user-list' id='one'>
  <div class='top_page'>
    <div></div>
    <h3></h3>
    <div>
    <input type='text' v-bind:value='tempText' @input='tempText = $event.target.value'>
    <button @click='findUser'>Поиск</button>
    </div>
  </div>


  <div class='firstBlock'>

  <div class='top_block'>
  <div class='pagin'>
     <button @click='leftPagin()' id='leftPagin'>{{leftBut}}</button>
     <div>
     <button v-for='page in pugination' :key='page.id' @click='pagePagin(page, pagination)' :id='page'>{{page}}</button>
     </div>
     <button @click='rightPagin()' id='rightPagin'>{{rightBut}}</button>
  </div>

  </div>

  <table>
      <tr>
        <td>▼</td>
        <td>▼ ID</td>
        <td>▼ Дата регистрации</td>
        <td>▼ День рождения</td>
        <td>▼ Email</td>
        <td>▼ Телефон</td>
        <td>▼ ФИО</td>
        <td>▼ Псевдоним</td>
        <td>▼ Город</td>
      </tr>
      <tr v-for='user in userCheckList' :key='user.userId'>
        <td class='checkbox'><input type='checkbox' @click='addUserArr(user)' v-model="user.checked"></td>
        <td><input type='text' v-bind:value='user.mainId' style='border: none; color: black;' readonly></td>
        <td><input type='text' v-bind:value='user.userRegDate' style='border: none; color: black;' readonly></td>
        <td><input type='text' v-bind:value='user.userBirthDate' style='border: none; color: black;' readonly></td>
        <td><input type='text' v-bind:value='user.userEmail' style='border: none; color: black;' readonly></td>
        <td><input type='text' v-bind:value='user.userTelNumb' style='border: none; color: black;' readonly></td>
        <td><input type='text' v-bind:value='user.userName + " " + user.userSecName' style='border: none; color: black;' readonly></td>
        <td><input type='text' v-bind:value='user.userPsevd' style='border: none; color: black;' readonly></td>
        <td><input type='text' v-bind:value='user.userTown' style='border: none; color: black;' readonly></td>
      </tr>
  </table>

  <div class="create_news"><button @click='saveSmsUsers'>Отправить выбранным</button></div>
  </div>
</div>
  
  <div class='newslett' id='mainBlock'>
    <div class='sms'>
       <h2>
       SMS
       </h2>
       <div class='first_block'>
          Выбрать пользователей кому слать: 
          <input type='radio' name='sms' @click='allUsers'> Все пользователи
          <input type='radio' name='sms' @click='returnUserList'> Выборочно
          <button @click='returnUserList'>Выбрать пользователей</button>
       </div>
       <div class='two_blocks'>
       <div class='second_block'>
           <div>
              <div>
               Текст SMS
              </div>
              <div>
               Символов: {{textArea.length}}
              </div>
           </div>
           <textarea v-bind:value='textArea'
                     @input='textArea = $event.target.value'>
           
           </textarea>
       </div>
       
       <div class='third_block'>
       <div>
          Кол-во SMS: {{calcSms}}
       </div>
       <div>
          Рассылка выполнена на: {{smsPers}}% {{}}
       </div>
       </div>
       
       </div>
       <div class='some_btn'>
       <button @click='getSmsData'>Начать рассылку</button>
       </div>
    </div>

    <div class='e-mail'>
       <h2>
          E-mail
       </h2>
       <div class='first_block'>
          Выбрать email кому слать: 
          <input type='radio' name='e-mail' @click='allUsers2' v-model='check'> Все пользователи
          <input type='radio' name='e-mail' @click='returnUserList2' v-model='check'> Выборочно
          <button @click='returnUserList2'>Выбрать пользователей</button>
       </div>
       
       <div style='display: flex;'>
       <div class='f-block'>
       <div class='second_block_email'>
          Загрузить HTML-письмо
          <button @click='inputAct()'>
             Загрузить
             <input type="file" id="logo_input" class='logo_input'
              @change="onFileSelected()" ref="fileDialog" name="input_1" />
          </button>
       </div>
       <div class='third_block_email'>
          Загружен файл: <span>{{tempDataName}}</span>
       </div>
       <div class='four_block_email'>
          Шаблон используемый в текущей рассылке: <span>{{tempDataName}}</span>
       </div>
       <div class='five_block_email'>
          <div>Кол-во писем: <span>{{calcSms2}}</span></div>
          <div>Рассылка выполнена на: <span>{{emailPers}}%</span></div>
       </div>
       </div>

       <div class='s-block'>
            <span>Список последних загруженных шаблонов</span>
            <div v-for='sample in sampleArray' :key='sample.id' class='sample'>
               <div @click='useSample(sample)'>
                  {{sample.fileName}}
               </div>
               <div @click='sampleDel(sample)'>
                  Удалить
               </div>
            </div>
            </div>
       </div>
       
       <div class='some_btn'>
       <button @click='getSmsData'>Начать рассылку</button>
       </div>
    </div>
  </div>
     
  </div>


</div>
<!-- ./wrapper -->
</template>

<script scoped>
  import { getDatabase, ref as fireRef, set, child, get, onValue } from "firebase/database";
  import { getStorage, ref, uploadBytes, deleteObject, getDownloadURL } from "firebase/storage";

export default {
  data(){
    return{
      check: true,
      check2: false,

      newsList: [],
      userList: [],
      userCheckList: [],
      imgData: null,
      imgData2: null,
      imgDataStorage: [],
      createPage: 0,
      tempTown: '',
      tempText: '',
      pugination: [],
      tempArray: [],
      leftBut: "<<",
      rightBut: ">>",
      tempNumb: 1,

      emailOrSmsArray: [],

      textArea: '',
      calcSms: 0,
      smsPers: 0,
      smsArray: [],
      tempNumb: 1,
      smsUserList: [],

      calcSms2: 0,
      emailUserList: [],
      emailPers: 0,
      someCount: 0,
      tempData: null,
      tempDataName: '',

      sampleArray: [],
      revSampleArray: [],
      all2Users: 0,
      someUsers: 0
    }
  },
  methods:{
    nullAllData(){
      this.emailOrSmsArray = [];

      this.textArea = '';
      this.calcSms = 0;
      this.smsPers = 0;
      this.smsArray = [];
      this.tempNumb = 1;
      this.smsUserList = [];

      this.calcSms2 = 0;
      this.emailUserList = [];
      this.emailPers = 0;
      this.someCount = 0;
      this.tempData = null;
      this.tempDataName = '';

      this.sampleArray = [];
      this.revSampleArray = [];
      this.all2Users = 0;
      this.someUsers = 0; 
      
      this.getUserFirstFunc();
    },

    sampleDel(sample){
      let tempDel = this.sampleArray.findIndex(n => n.fileUrl === sample.fileUrl);
      this.sampleArray.splice(tempDel, 1);

      const db = getDatabase();
      set(fireRef(db, `newsletter/emails/1-Sample/`), this.sampleArray);
    },
    useSample(sample){
      this.someCount = 0;
      this.emailUserList = [];

      if(sample.countUsers === 1){
        this.tempDataName = sample.fileName;
        const dbRef = fireRef(getDatabase());
        get(child(dbRef, `users/`)).then((snapshot) => {

            var users = [];
            snapshot.forEach(element => {
              users.push(element.val());
            });
            this.userCheckList = users;

            for(let i = 0; i < this.userCheckList.length; i++){
              this.emailUserList.push({
                id: this.userCheckList[i].mainId,
                email: this.userCheckList[i].userEmail,
                link: sample.fileUrl
              });
            }

            this.calcSms2 = this.emailUserList.length;

            this.check = true;
            console.log(this.emailUserList);

        });
      } else if(sample.countUsers !== 1){
        this.tempDataName = sample.fileName;

        const dbRef = fireRef(getDatabase());
        get(child(dbRef, `users/`)).then((snapshot) => {

            var users = [];
            snapshot.forEach(element => {
              users.push(element.val());
            });
            this.userCheckList = users;

        for(let i = 0; i < sample.countUsers.length; i++){
          for(let u = 0; u < this.userCheckList.length; u++){
            if(sample.countUsers[i] === this.userCheckList[u].mainId){
              this.emailUserList.push({
                id: this.userCheckList[u].mainId,
                email: this.userCheckList[u].userEmail,
                link: sample.fileUrl
              });
            }
          }
        }

        this.calcSms2 = this.emailUserList.length;

        console.log(this.emailUserList);
        });
      }
    },
    saveSmsUsers(){
      document.getElementById('one').style='display: none;';
      document.getElementById('mainBlock').style='display: block;';
      console.log(this.smsUserList);
      console.log(this.emailUserList);
    },
    addUserArr(user){
      console.log(this.someCount);
      if(this.someCount === 1){
        console.log(this.someCount);

        if(user.checked === true){
          console.log(1);
          user.checked = false;
          console.log(user);
          console.log(this.smsUserList);
          for(let i = 0; i < this.smsUserList.length; i++){
            console.log(this.smsUserList[i]);
            if(user.mainId === this.smsUserList[i].id){
              this.smsUserList.splice(i, 1);
              console.log(this.smsUserList);
              break;
            }
          }

          const db = getDatabase();
          set(fireRef(db, `newsletter/checked-list/${user.mainId}`), user);

          this.calcSms = this.smsUserList.length;
        } else {
          user.checked = true;
          console.log(user);
          this.smsUserList.push({
          id: user.mainId,
          email: user.userEmail,
          sms: this.textArea
          });

          const db = getDatabase();
          set(fireRef(db, `newsletter/checked-list/${user.mainId}`), user);

          console.log(this.smsUserList);

          this.calcSms = this.smsUserList.length;
        }
      } else if(this.someCount === 2){
        if(user.checked === true){
          user.checked = false;
          for(let i = 0; i < this.emailUserList.length; i++){
            if(user.mainId === this.emailUserList[i].id){
              this.emailUserList.splice(i, 1);
              console.log(this.smsUserList);
              break;
            }
          }

          const db = getDatabase();
          set(fireRef(db, `newsletter/checked-list/${user.mainId}`), user);

          this.calcSms2 = this.emailUserList.length;
        } else {
          user.checked = true;

          this.emailUserList.push({
          id: user.mainId,
          email: user.userEmail,
          link: this.textArea
          });

          const db = getDatabase();
          set(fireRef(db, `newsletter/checked-list/${user.mainId}`), user);

          this.calcSms2 = this.emailUserList.length;
        }
      }
    },

    returnUserList(){
      this.someCount = 1;
      console.log(this.textArea);
      document.getElementById('one').style='display: block';
      document.getElementById('mainBlock').style='display: none;';

      document.getElementById('leftPagin').click();
    },
    close(){
      document.getElementById('one').style='display: none;';
      document.getElementById('mainBlock').style='display: block;';
    },

    getSmsData(){
       console.log(this.someCount);
       if(this.someCount === 0){
         let timerId = setInterval(() => this.emailPers++, 10);
         setTimeout(() => { clearInterval(timerId); }, 1000);

         let fullDate = new Date();
         let day = fullDate.getDate();
         let month = fullDate.getMonth();
         let year = fullDate.getFullYear();
         let hours = fullDate.getHours();
         let minutes = fullDate.getMinutes();
         let seconds = fullDate.getSeconds(); 

         let string = `${day}${month + 1}${year}-${hours}:${minutes}:${seconds}`;

         const db = getDatabase();
         set(fireRef(db, `newsletter/emails/${string}/`), this.emailUserList);
       } else if(this.someCount === 1){
        if(this.smsPers === 100){
         return 0;
        }

        let fullDate = new Date();
        let day = fullDate.getDate();
        let month = fullDate.getMonth();
        let year = fullDate.getFullYear();
        let hours = fullDate.getHours();
        let minutes = fullDate.getMinutes();
        let seconds = fullDate.getSeconds(); 

        let string = `${day}${month + 1}${year}-${hours}:${minutes}:${seconds}`;
        console.log(string);

        const db = getDatabase();
        set(fireRef(db, `newsletter/sms/${string}/`), this.smsUserList);

        let timerId = setInterval(() => this.smsPers++, 10);
        setTimeout(() => { clearInterval(timerId); this.nullAllData(); }, 1000);
        
       } else if(this.someCount === 2){
         let ident = Date.now();
         let storage = getStorage();

         if(this.emailPers === 100){
         return 0;
         }
         let timerId = setInterval(() => this.emailPers++, 10);
         setTimeout(() => { clearInterval(timerId); }, 1000);

         let fullDate = new Date();
         let day = fullDate.getDate();
         let month = fullDate.getMonth();
         let year = fullDate.getFullYear();
         let hours = fullDate.getHours();
         let minutes = fullDate.getMinutes();
         let seconds = fullDate.getSeconds(); 

         let string = `${day}${month + 1}${year}-${hours}:${minutes}:${seconds}`;

         
         if(this.tempData !== null && this.tempData !== undefined){
                const storageRef = ref(storage, `files/email-files/` + this.tempData.name);
                uploadBytes(storageRef, this.tempData).then((snapshot) => {
                console.log('Файл завантажено');
                });
         };

         setTimeout(() => {
             getDownloadURL(ref(storage, `files/email-files/` + this.tempData.name)).then((url) => {
               for(let i = 0; i < this.emailUserList.length; i++){
                 this.emailUserList[i].link = url;
               }

               if(this.all2Users === 1){
                  this.sampleArray.push({
                  countUsers: this.all2Users,
                  fileName: this.tempData.name,
                  fileUrl: url
                  });
               } else if(this.someUsers === 1){
                  this.sampleArray.push({
                  countUsers: this.emailOrSmsArray,
                  fileName: this.tempData.name,
                  fileUrl: url
                  });
               }
               
               if(this.sampleArray.length === 6){
                 this.sampleArray.splice(0, 1);
               }
             });
             setTimeout(() => {
             const db = getDatabase();
             set(fireRef(db, `newsletter/emails/${string}/`), this.emailUserList);
             set(fireRef(db, `newsletter/emails/1-Sample/`), this.sampleArray);

             this.nullAllData();
             }, 1000);
         }, 1000);  
       }

    },

    allUsers(){
      this.someCount = 1;
      const dbRef = fireRef(getDatabase());
      get(child(dbRef, `newsletter/checked-list/`)).then((snapshot) => {
            this.smsUserList = [];
            var users = [];
            snapshot.forEach(element => {
              users.push(element.val());
            });
            this.userCheckList = users;
            
            for(let i = 0; i < this.userCheckList.length; i++){
              this.userCheckList[i].checked = true;
              this.smsUserList.push({
                id: this.userCheckList[i].mainId,
                email: this.userCheckList[i].userEmail,
                sms: this.textArea
              });
            }

            const db = getDatabase();
            set(fireRef(db, `newsletter/checked-list/`), this.userCheckList);
            
            this.calcSms = this.smsUserList.length;
      });
    },

    allUsers2(){
      this.someCount = 2;
      this.all2Users = 1;
      const dbRef = fireRef(getDatabase());
      get(child(dbRef, `newsletter/checked-list/`)).then((snapshot) => {
            this.emailUserList = [];
            var users = [];
            snapshot.forEach(element => {
              users.push(element.val());
            });
            this.userCheckList = users;

            console.log(this.userCheckList);
            
            for(let i = 0; i < this.userCheckList.length; i++){
              this.userCheckList[i].checked = true;
              this.emailUserList.push({
                id: this.userCheckList[i].mainId,
                email: this.userCheckList[i].userEmail,
                link: this.textArea
              });
            }

            const db = getDatabase();
            set(fireRef(db, `newsletter/checked-list/`), this.userCheckList);

            console.log(this.userCheckList);
            this.calcSms2 = this.emailUserList.length;
      });
    },

    leftPagin(){
        this.tempNumb -= 5;
        if(this.tempNumb < 1){
          this.tempNumb = 1;
        }
        window.location.hash = this.tempNumb;
        setTimeout(() => {
        document.getElementById(this.tempNumb).click();
        }, 1);
    },
    rightPagin(){
        this.tempNumb += 5;
        if(this.tempNumb > this.pugination.length){
          this.tempNumb = this.pugination.length;
        }
        window.location.hash = this.tempNumb;
        setTimeout(() => {
        document.getElementById(this.tempNumb).click();
        }, 1);

    },
    pagePagin(page){
      const dbRef = fireRef(getDatabase());
      get(child(dbRef, `newsletter/checked-list/`)).then((snapshot) => {
          var users = [];
          snapshot.forEach(element => {
          users.push(element.val());
          });
          this.userCheckList = users;
          
          let count = 1;
          for(let i = 0; i <= page - 2; i++){
            count = count + 5;
          }

          if(page === 1){
            this.userCheckList = this.userCheckList.slice(0, page * 5);
          } else {
            console.log(this.userCheckList);
            this.userCheckList = this.userCheckList.slice(count - 1, page * 5);
          } 
      });
    },
    findUser(){
      if(this.tempText === ''){
          this.getUserFirstFunc();
      } else {
        const dbRef = fireRef(getDatabase());
        get(child(dbRef, `newsletter/checked-list/`)).then((snapshot) => {
            var users = [];
            this.userCheckList = [];
            snapshot.forEach(element => {
              users.push(element.val());
            });
            this.userCheckList = users;

          for(let i = 0; i < this.userCheckList.length; i++){
          for(let elem in this.userCheckList[i]){
          console.log(this.userCheckList[i][elem]);
          console.log(this.tempText);
            if(this.tempText === this.userCheckList[i][elem]){
              break;
            } else if(elem === 'userTown'){
              this.userCheckList.splice(i, 1);
              i--;
            }
          }
          }
        });
      }
    },

    returnUserList2(){
      this.someCount = 2;
      this.someUsers = 1;
      console.log(this.textArea);
      document.getElementById('one').style='display: block';
      document.getElementById('mainBlock').style='display: none;';

      document.getElementById('leftPagin').click();
    },
    inputAct(){
      document.getElementById("logo_input").click();
    },
    onFileSelected(){
          this.tempData = this.$refs.fileDialog.files[0];
          this.tempDataName = this.tempData.name;
    },


    getUserFirstFunc(){
          const dbRef = fireRef(getDatabase());
          get(child(dbRef, `users/`)).then((snapshot) => {
            var users = [];
            snapshot.forEach(element => {
              users.push(element.val());
            });
            this.userCheckList = users;

            for(let i = 0; i < this.userCheckList.length; i++){
              this.userCheckList[i].checked = false;
            }

            this.userCheckList = this.userCheckList;

            const db = getDatabase();
            set(fireRef(db, `newsletter/checked-list/`), this.userCheckList);
          });

          get(child(dbRef, `newsletter/emails/1-Sample/`)).then((snapshot) => {
            var samples = [];
            snapshot.forEach(element => {
              samples.push(element.val());
            });
            this.sampleArray = samples;
            console.log(this.sampleArray);
          });

          setTimeout(() => {
          let someNumb = this.userCheckList.length % 5;
          console.log(someNumb);
          let numb = this.userCheckList.length - someNumb;
          console.log(numb);

          for(let i = 1; i <= numb / 5; i++){
            this.pugination.push(i);
            console.log(this.pugination);
          }

          if(someNumb !== 0 && this.userCheckList.length >= 5){
            this.pugination.push(this.pugination[this.pugination.length - 1] + 1);
            console.log(this.pugination);
          }
          this.userCheckList = this.userCheckList.slice(0, 5);
          }, 500);
    },
  },
  mounted(){
      this.getUserFirstFunc()
  }
}
</script>

<style scoped>

.userButton{
  color: black;
  background: #343A40;
  border: 1px solid #4F5962;
  margin-left: 35px;
}

.sample{
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
}

.sample>div:first-child{
  margin-right: 25px;
  margin-left: 90px;
  width: 90px;
  cursor: pointer;
  overflow: hidden;
}

.sample>div:nth-child(2){
  color: red;
  cursor: pointer;
}

.logo_input{
  display: none;
}

.user-list{
  display: none;
}

.content-wrapper{
  background-color: #DCDCDC;
  min-height: 100%;
  padding-top: 25px;
}

/*SMS*/

.sms{
  position: relative;
  z-index: 0;
  background-color: white;
  width: 90%;
  padding: 25px;
  margin: 0 auto;
  padding-left: 80px;
  padding-right: 80px;
}

.sms>h2{
  font-weight: bold;
  text-align: center;
}

.two_blocks{
  display: flex;
}

.first_block{
  display: flex;
  align-items: center;
  margin-top: 40px;
  margin-bottom: 20px;
}

.first_block>input:first-child{
  margin-left: 50px;
  margin-right: 5px;
}

.first_block>input:nth-child(2){
  margin-left: 60px;
  margin-right: 5px;
}

.first_block>button{
  margin-left: 325px;
  padding-left: 15px;
  padding-right: 15px;
}

.second_block>div:first-child{
  display: flex;
}

.second_block>div:first-child>div:first-child{
  margin-right: 430px;
}

.second_block>textarea{
  margin-top: 10px;
  width: 605px;
  height: 200px;
}

.third_block{
  margin-top: 28px;
  margin-left: 35px;
}

.third_block>div:nth-child(2){
  margin-top:5px;
}

.some_btn{
  text-align: center;
  margin-top: 30px;
}

.top_block{
  display: flex;
}

.users{
  margin-left: 54px;
}

.checkbox>input{
  margin-left: 5px;
  font-weight: bold;
  cursor: pointer;
}

.pagin{
  display: flex;
  flex-wrap: nowrap;
  margin-left: 43px;
  margin-bottom: 15px;
}

.pagin>div>button{
  margin-left: 2px;
}

.pagin>div>button:first-child{
  margin-left: 0px;
}

.pagin>button:first-child{
  margin-right: 4px;
}

.pagin>button:last-child{
  margin-left: 4px;
}

.pagin>div{
  display: flex;
  width: 130px;
  overflow: hidden;
}

.pagin>div>button{
  margin-left: 2px;
}

.content-wrapper{
  background-color: #DCDCDC;
}

.top_page{
  display:flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
}

.top_page>div{
  margin-right: 217px;
  margin-top: 20px;
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
    margin-left: 45px;
}

table>tr:first-child>td{
  border: 1px solid black;
  max-width: 175px;
  height: 65px;
  padding-left: 10px;
  overflow: hidden;
}

table>tr:first-child>td:first-child{
  padding-left: 5px;
  padding-right: 5px;
}


table>tr:first-child>td:nth-child(2){
  width: 58px;
}

table>tr:first-child>td:nth-child(3){
  width: 173px;
}

table>tr:first-child>td:nth-child(4){
  width: 148px;
}

table>tr:first-child>td:nth-child(5){
  width: 133px;
}

table>tr:first-child>td:nth-child(6){
  width: 133px;
}

table>tr:first-child>td:nth-child(7){
  width: 173px;
}

table>tr:first-child>td:nth-child(8){
  width: 133px;
}

table>tr:first-child>td:nth-child(9){
  width: 103px;
}

table>tr>td{
  border: 1px solid black;
}

table>tr>td>input{
  outline:none;
  width: 10px;
}

table>tr>td:nth-child(2)>input{
  outline:none;
  width: 30px;
  margin-right: 15px;
  margin-left: 10px;
}

table>tr>td:nth-child(3)>input{
  outline:none;
  margin-left:10px;
  width: 160px;
}

table>tr>td:nth-child(4)>input{
  outline:none;
  margin-left:10px;
  width: 135px;
}

table>tr>td:nth-child(5)>input{
  outline:none;
  margin-left:10px;
  width: 120px;
}

table>tr>td:nth-child(6)>input{
  outline:none;
  margin-left:10px;
  width: 120px;
}

table>tr>td:nth-child(7)>input{
  outline:none;
  margin-left:10px;
  width: 160px;
}

table>tr>td:nth-child(8)>input{
  outline:none;
  margin-left:10px;
  width: 120px;
}

table>tr>td:nth-child(9)>input{
  outline:none;
  margin-left:10px;
  width: 90px;
}

tr:nth-child(2n + 1){
    background-color: #ECECEC;
}

tr:nth-child(2n + 1)>td>input{
    background-color: #ECECEC;
}

tr:first-child{
    background-color: #CCCCCC;
}

tr>td:nth-child(4){
    
}

tr>td:nth-child(6){
    
}

/* E-mail */

.e-mail{
  position: relative;
  z-index: 0;
  background-color: white;
  width: 90%;
  padding: 25px;
  margin: 0 auto;
  padding-left: 80px;
  padding-right: 80px;
  margin-top: 25px;
}

.e-mail>.first_block>button{
  margin-left: 394px;
}

.e-mail>h2{
  font-weight: bold;
  text-align: center;
}

.second_block_email>button{
  padding-left: 40px;
  padding-right: 40px;
  margin-left: 50px;
}

.second_block_email{
  margin-bottom: 25px;
}

.third_block_email{
  margin-bottom: 25px;
}

.third_block_email>span{
  color: blue;
  margin-left: 10px;
}

.four_block_email>span{
  color: blue;
  margin-left: 10px;
}

.five_block_email{
  margin-top: 25px;
  display: flex;
}

.five_block_email>div:first-child{
  width: 170px
}

.five_block_email>div:nth-child(2){
  width: 220px
}

.f-block{
  padding-right: 50px;
  width: 800px;
}

.s-block{
  border: 1px solid black;
  width: 390px;
  height: 173px;
  display: flex;
  flex-direction: column;
}

.s-block>span{
  margin-top: 10px;
  margin-left: 20px;
}

</style>

