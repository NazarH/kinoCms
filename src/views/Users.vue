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
  <div class="content-wrapper" style='min-height: 1800px;'>

  <div class='top_page'>
    <div></div>
    <h3>Пользователи</h3>
    <div>
    <input type='text' v-bind:value='tempText' @input='tempText = $event.target.value'>
    <button @click='findUser'>Поиск</button>
    </div>
  </div>


  <div class='firstBlock'>

  <div class='pagin'>
     <button @click='leftPagin()' id='leftPagin'>{{leftBut}}</button>
     <div>
     <button v-for='page in pugination' :key='page.id' @click='pagePagin(page, pagination)' :id='page'>{{page}}</button>
     </div>
     <button @click='rightPagin()' id='rightPagin'>{{rightBut}}</button>
  </div>
  
  <table>
      <tr>
        <td>▼ ID</td>
        <td>▼ Дата регистрации</td>
        <td>▼ День рождения</td>
        <td>▼ Email</td>
        <td>▼ Телефон</td>
        <td>▼ ФИО</td>
        <td>▼ Псевдоним</td>
        <td>▼ Город</td>
      </tr>
      <tr v-for='user in userList' :key='user.userId'>
        <td><input type='text' v-bind:value='user.mainId' style='border: none; color: black;' readonly></td>
        <td><input type='text' v-bind:value='user.userRegDate' style='border: none; color: black;' readonly></td>
        <td><input type='text' v-bind:value='user.userBirthDate' style='border: none; color: black;' readonly></td>
        <td><input type='text' v-bind:value='user.userEmail' style='border: none; color: black;' readonly></td>
        <td><input type='text' v-bind:value='user.userTelNumb' style='border: none; color: black;' readonly></td>
        <td><input type='text' v-bind:value='user.userName + " " + user.userSecName' style='border: none; color: black;' readonly></td>
        <td><input type='text' v-bind:value='user.userPsevd' style='border: none; color: black;' readonly></td>
        <td><input type='text' v-bind:value='user.userTown' style='border: none; color: black;' readonly></td>
        <td class='third_td'>
        <img src='assets/dist/img/pan.png' @click='userEdit(user)'>
        <img src='assets/dist/img/basket.png' @click='userDelete(user)' :id='user.userId + "basket"'>
        </td>
      </tr>
  </table>

  <form :id='user.userId' @submit.prevent style='display: none;' v-for='user in userList' :key='user.userId' class='form'>
      <img src='assets/dist/img/cross.png' @click='closeUser(user)' class='close1'>
      <div class='colums'>
      <div>
      <div class='simple_text'>
          <div>Имя</div> <input type='text' v-bind:value='user.userName' @input='user.userName = $event.target.value'>
      </div>
      <div class='simple_text'>
          <div>Фамилия</div> <input type='text' v-bind:value='user.userSecName' @input='user.userSecName = $event.target.value'>
      </div>
      <div class='simple_text'>
          <div>Псевдоним</div> <input type='text' v-bind:value='user.userPsevd' @input='user.userPsevd = $event.target.value'>
      </div>
      <div class='simple_text'>
          <div>E-mail</div> <input type='text' v-bind:value='user.userEmail' @input='user.userEmail = $event.target.value'>
      </div>
      <div class='simple_text'>
          <div>Адресс</div> <input type='text' placeholder='г.Киев. улица Такаято, 1'
          v-bind:value='user.userAdress' @input='user.userAdress = $event.target.value'>
      </div>
      <div class='simple_text'>
          <div>Пароль</div> <input type='password' v-bind:value='user.userPass' @input='user.userPass = $event.target.value'>
      </div>
      <div class='simple_text'>
          <div>Номер карты</div> <input type='text' v-bind:value='user.userBankNumb' @input='user.userBankNumb = $event.target.value'>
      </div>
      </div>
      
      <div>
        <div class='simple_text'>
          <div>Язык</div>
          <div>
            <input name="lang" type="radio" value="Русский" @input='user.userLang = $event.target.value'> Русский 
            <input name="lang" type="radio" value="Украинский" @input='user.userLang = $event.target.value'> Украинский
          </div>
        </div>
        <div class='simple_text'>
          <div>Пол</div>
          <div>
            <input name="gend" type="radio" value="Мужской" @input='user.userGender = $event.target.value'> Мужской 
            <input name="gend" type="radio" value="Женский" @input='user.userGender = $event.target.value'> Женский
          </div>
        </div>
        <div class='simple_text'>
          <div>Телефон</div> <input type='text' v-bind:value='user.userTelNumb' @input='user.userTelNumb = $event.target.value'>
        </div>
        <div class='simple_text'>
          <div>Дата рождения</div>
          <input type="date" id="start" name="trip-start"
                 :value="user.userBirthDate"
                 @input='user.userBirthDate = $event.target.value'
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
          <div>Повторить пароль</div> <input type='password' v-bind:value='user.userPassRep' @input='user.userPassRep = $event.target.value'
          :id='user.userId + "passRep"'>
        </div>
      </div>
      </div>
      <div class="save_btn"><button @click='getUserData(user)'>Сохранить</button></div>
  </form>

  <div class="create_news"><button @click='createUser'>Создать юзера</button></div>

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
      newsList: [],
      userList: [],
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

      tempNumb: 1
    }
  },
  methods:{
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
      get(child(dbRef, `users/`)).then((snapshot) => {
          var users = [];
          snapshot.forEach(element => {
          users.push(element.val());
          });
          this.userList = users;
          
          let count = 1;
          for(let i = 0; i <= page - 2; i++){
            count = count + 5;
          }

          if(page === 1){
            this.userList = this.userList.slice(0, page * 5);
          } else {
            console.log(this.userList);
            this.userList = this.userList.slice(count - 1, page * 5);
          } 
      });
    },
    findUser(){
      if(this.tempText === ''){
          this.getUserFirstFunc();
      } else {
        const dbRef = fireRef(getDatabase());
        get(child(dbRef, `users/`)).then((snapshot) => {
            var users = [];
            this.userList = [];
            snapshot.forEach(element => {
              users.push(element.val());
            });
            this.userList = users;

          for(let i = 0; i < this.userList.length; i++){
          for(let elem in this.userList[i]){
          console.log(this.userList[i][elem]);
          console.log(this.tempText);
            if(this.tempText === this.userList[i][elem]){
              break;
            } else if(elem === 'userTown'){
              this.userList.splice(i, 1);
              i--;
            }
          }
          }
        });
      }
    },
    changeOption(event){
      this.tempTown = event.target.value;
    },
    createUser(){
      let fullDate = new Date();
      let day = fullDate.getDate();
      let month = fullDate.getMonth();
      let year = fullDate.getFullYear();

      let randomId = Date.now();

      setTimeout(() => {
      this.userList.push({
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
          document.getElementById(randomId).style="display: block;";
      }, 1);

      this.createPage = 1;
    },
    userEdit(user){
        document.getElementById(user.userId).style="display: block;";
    },
    userDelete(user){
      const dbRef = fireRef(getDatabase());
      get(child(dbRef, `users/`)).then((snapshot) => {
          var users = [];
          snapshot.forEach(element => {
          users.push(element.val());
          });
          this.userList = users;
          
          let tempDel = this.userList.findIndex(n => n.mainId === user.mainId);
          this.userList.splice(tempDel, 1);
          console.log(tempDel)

          const db = getDatabase();
          set(fireRef(db, `users/`), this.userList);
      });
    },
    closeUser(user){
        document.getElementById(user.userId).style="display: none;";

        
        if(this.createPage === 0){

        }else if(this.createPage === 1){
                let tempDel = this.userList.findIndex(n => n.userId === user.userId);
                this.userList.splice(tempDel, 1);
                this.createPage = 0;
        } else if (this.createPage === 2){
          this.createPage = 0;
        };
    },
    getUserData(user){
      if(user.userPass !== user.userPassRep){
        document.getElementById(user.userId + "passRep").style='border-color: red';
        return 0;
      } else {
        document.getElementById(user.userId + "passRep").style='border-color: black';
      }

      user.userTown = this.tempTown;

      user.userFullName = `${user.userName} ${user.userSecName}`;

      user.mainId = this.userList.findIndex(n => n.userId === user.userId);

      this.tempArray.push(user);

      const dbRef = fireRef(getDatabase());
      get(child(dbRef, `users/`)).then((snapshot) => {
            var users = [];
            this.userList = [];
            snapshot.forEach(element => {
              users.push(element.val());
            });
            this.userList = users;
            this.userList.push(this.tempArray[0]);
            console.log(this.userList);

            for(let i = 0; i < this.userList.length; i++){
              if(this.userList[i].mainId >= 5){
                if(this.userList[i].mainId <= this.userList[i - 1].mainId){
                  this.userList[i].mainId = this.userList[i - 1].mainId + 1;
                  console.log(this.userList[i - 1].mainId);
                  console.log(this.userList[i].mainId);
                }
              }
            }

            const db = getDatabase();
            set(fireRef(db, `users/`), this.userList);
            this.createPage = 2;
            this.tempTown = '';
            location.reload();
      });
    },
    getUserFirstFunc(){
          const dbRef = fireRef(getDatabase());
          get(child(dbRef, `users/`)).then((snapshot) => {
            var users = [];
            snapshot.forEach(element => {
              users.push(element.val());
            });
            this.userList = users;
          });

          setTimeout(() => {
          let someNumb = this.userList.length % 5;
          console.log(someNumb);
          let numb = this.userList.length - someNumb;
          console.log(numb);

          for(let i = 1; i <= numb / 5; i++){
            this.pugination.push(i);
            console.log(this.pugination);
          }

          if(someNumb !== 0 && this.userList.length >= 5){
            this.pugination.push(this.pugination[this.pugination.length - 1] + 1);
            console.log(this.pugination);
          }
          this.userList = this.userList.slice(0, 5);
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

.content-wrapper>.top_page>h3{
  text-align: center;
  padding-top: 25px;
  padding-bottom: 15px;
  margin-left: 240px;
  text-align: center
}

.content-wrapper>.top_page{
  display:flex;
  align-items: center;
  justify-content: space-between;
}

.content-wrapper>.top_page>div{
  margin-right: 241px;
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
  width: 58px;
}

table>tr:first-child>td:nth-child(2){
  width: 173px;
}

table>tr:first-child>td:nth-child(3){
  width: 148px;
}

table>tr:first-child>td:nth-child(4){
  width: 133px;
}

table>tr:first-child>td:nth-child(5){
  width: 133px;
}

table>tr:first-child>td:nth-child(6){
  width: 173px;
}

table>tr:first-child>td:nth-child(7){
  width: 133px;
}

table>tr:first-child>td:nth-child(8){
  width: 103px;
}

table>tr>td{
  border: 1px solid black;
}

table>tr>td:nth-child(9){
  border: 0px;
}


table>tr>td>input{
  outline:none;
  width: 10px;
}

table>tr>td:first-child>input{
  outline:none;
  width: 30px;
  margin-right: 15px;
  margin-left: 10px;
}

table>tr>td:nth-child(2)>input{
  outline:none;
  margin-left:10px;
  width: 160px;
}

table>tr>td:nth-child(3)>input{
  outline:none;
  margin-left:10px;
  width: 135px;
}

table>tr>td:nth-child(4)>input{
  outline:none;
  margin-left:10px;
  width: 120px;
}

table>tr>td:nth-child(5)>input{
  outline:none;
  margin-left:10px;
  width: 120px;
}

table>tr>td:nth-child(6)>input{
  outline:none;
  margin-left:10px;
  width: 160px;
}

table>tr>td:nth-child(7)>input{
  outline:none;
  margin-left:10px;
  width: 120px;
}

table>tr>td:nth-child(8)>input{
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

/* Form */

.form{
    position: absolute;
    display: flex;
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

.colums{
  display:flex;
  margin-left: 94px;
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

select{
  padding-top: 3px;
  padding-bottom: 3px;
  width: 300px;
}

.save_btn{
  text-align: center;
}

</style>

