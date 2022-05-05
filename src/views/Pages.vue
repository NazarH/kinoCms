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

  <h3>Список страниц</h3>

  <div class='firstBlock'>

  <table>
      <tr>
        <td>Название</td>
        <td>Дата создания</td>
        <td>Статус</td>
      </tr>
      <tr v-for='mainP in mainPage' :key='mainP.id'>
        <td><input type='text' value='Главная страница' style='border: none; color: black;' disabled></td>
        <td><input type='text' v-bind:value='mainP.mainPageCreateDate' style='border: none; color: black;' disabled></td>
        <td><input type='text' v-bind:value='mainP.mainPageRadio' style='border: none; color: black;' disabled></td>
        <td class='third_td'>
        <img src='assets/dist/img/pan.png' @click='mainPageEdit(mainP)'>
        </td>
      </tr>
      <tr v-for='abSinema in abSinemaList' :key='abSinema.id'>
        <td><input type='text' v-bind:value='abSinema.abSinemaName' style='border: none; color: black;' disabled></td>
        <td><input type='text' v-bind:value='abSinema.abSinemaCreateDate' style='border: none; color: black;' disabled></td>
        <td><input type='text' v-bind:value='abSinema.abSinemaRadio' style='border: none; color: black;' disabled></td>
        <td class='third_td'>
        <img src='assets/dist/img/pan.png' @click='abSinemaEdit(abSinema)'>
        </td>
      </tr>
      <tr v-for='cafeBar in cafeBarList' :key='cafeBar.id'>
        <td><input type='text' v-bind:value='cafeBar.cafeBarName' style='border: none; color: black;' disabled></td>
        <td><input type='text' v-bind:value='cafeBar.cafeBarCreateDate' style='border: none; color: black;' disabled></td>
        <td><input type='text' v-bind:value='cafeBar.cafeBarRadio' style='border: none; color: black;' disabled></td>
        <td class='third_td'>
        <img src='assets/dist/img/pan.png' @click='cafeBarEdit(cafeBar)'>
        </td>
      </tr>
      <tr v-for='vipHall in vipHallList' :key='vipHall.id'>
        <td><input type='text' v-bind:value='vipHall.vipHallName' style='border: none; color: black;' disabled></td>
        <td><input type='text' v-bind:value='vipHall.vipHallCreateDate' style='border: none; color: black;' disabled></td>
        <td><input type='text' v-bind:value='vipHall.vipHallRadio' style='border: none; color: black;' disabled></td>
        <td class='third_td'>
        <img src='assets/dist/img/pan.png' @click='vipHallEdit(vipHall)'>
        </td>
      </tr>
      <tr v-for='pageAdv in pageAdvList' :key='pageAdv.id'>
        <td><input type='text' v-bind:value='pageAdv.pageAdvName' style='border: none; color: black;' disabled></td>
        <td><input type='text' v-bind:value='pageAdv.pageAdvCreateDate' style='border: none; color: black;' disabled></td>
        <td><input type='text' v-bind:value='pageAdv.pageAdvRadio' style='border: none; color: black;' disabled></td>
        <td class='third_td'>
        <img src='assets/dist/img/pan.png' @click='pageAdvEdit(pageAdv)'>
        </td>
      </tr>
      <tr v-for='childRoom in childRoomList' :key='childRoom.id'>
        <td><input type='text' v-bind:value='childRoom.childRoomName' style='border: none; color: black;' disabled></td>
        <td><input type='text' v-bind:value='childRoom.childRoomCreateDate' style='border: none; color: black;' disabled></td>
        <td><input type='text' v-bind:value='childRoom.childRoomRadio' style='border: none; color: black;' disabled></td>
        <td class='third_td'>
        <img src='assets/dist/img/pan.png' @click='childRoomEdit(childRoom)'>
        </td>
      </tr>
      <tr v-for='pageContact in pageContactList' :key='pageContact.id'>
        <td><input type='text' value='Контакты' style='border: none; color: black;' disabled></td>
        <td><input type='text' v-bind:value='pageContact.pageContactCreateDate' style='border: none; color: black;' disabled></td>
        <td><input type='text' v-bind:value='pageContact.pageContactRadio' style='border: none; color: black;' disabled></td>
        <td class='third_td'>
        <img src='assets/dist/img/pan.png' @click='pageContactEdit(pageContact)'>
        </td>
      </tr>
      <tr v-for='newPage in newPageList' :key='newPage.id'>
        <td><input type='text' v-bind:value='newPage.newPageName' style='border: none; color: black;' disabled></td>
        <td><input type='text' v-bind:value='newPage.newPageCreateDate' style='border: none; color: black;' disabled></td>
        <td><input type='text' v-bind:value='newPage.newPageRadio' style='border: none; color: black;' disabled></td>
        <td class='third_td'>
        <img src='assets/dist/img/pan.png' @click='newPageEdit(newPage)'>
        <img src='assets/dist/img/basket.png' @click='newPageDelete(newPage)' :id='newPage.newPageId + "basket"'>
        </td>
      </tr>
  </table>

  <main-page></main-page>
  <about-sinema></about-sinema>
  <cafe-bar></cafe-bar>
  <vip-hall></vip-hall>
  <page-advert></page-advert>
  <child-room></child-room>
  <page-contact></page-contact>

  <form :id='newPage.newPageId' @submit.prevent style='display: none;' v-for='newPage in newPageList' :key='newPage.id' class='form'>
      <img src='assets/dist/img/cross.png' @click='newPageClose(newPage)' class='close1'>
      <div class='on-off'>
         <div>
            ВКЛ <input name="rad" type="radio" value="ВКЛ" @input='newPage.newPageRadio = $event.target.value'>
            <input name="rad" type="radio" value="ВЫКЛ" @input='newPage.newPageRadio = $event.target.value'> ВЫКЛ
         </div>
      </div>
      <div class='cinema_name'>
          Название новости: <input type='text' placeholder='Название новости'
          v-bind:value='newPage.newPageName' @input='newPage.newPageName = $event.target.value'>
      </div>
      <div class='descr'>
          Описание: <textarea placeholder='Текст' v-bind:value='newPage.newPageDescr'
          @input='newPage.newPageDescr = $event.target.value'></textarea>
      </div>
      <div class='logo'>
          <img src='assets/dist/img/cross.png' class='logo_del' @click='newPageDeleteImg(newPage)'
               v-bind:id='newPage.newPageId + "-logo"'>
          Главная картинка 
          <button class='square' @click='newPageInputAct(newPage)'>
              <input type="file" accept="image/*" :id='newPage.newPageId + "-logo_input"' class='logo_input'
              @change="pageOnFileSelected(newPage)" :ref="newPage.newPageId + 'fileDialog'" :name='newPage.newPageId + "-input_1"' />
              <img src=''  v-bind:id='newPage.newPageId + "-temp_logo_img"' class='temp_logo_img'>
              <img v-bind:src='newPage.newPageMainImg' class='logo_img' v-bind:id='newPage.newPageId + "-logo_img"' alt=" ">
          </button>
      </div>
      Галерея картинок
      <div class='galary'>
          Размер: 1000х190
            <div v-for='image in newPage.newPageGalary' :key='image.id' class='square2'>
                <img src='assets/dist/img/cross.png' 
                     class='galaryDeletePhot'
                     @click='newPageDeletePhot(image, newPage)'
                     v-bind:id='image.id + "-img_del2"'
                >
                <img src=''  v-bind:id='image.id + "-temp_logo_img2"' class='temp_logo_img'>
                <img v-bind:src='image.img' class='galaryImg' v-bind:id='image.id + "-logo_img2"' alt=" ">
            </div>
            <button @click='newPageInputAct2(newPage)'>
                <input type="file" accept="image/*" :id='newPage.newPageId + "-some_int"' 
                       class='galaryInput' ref="file" 
                       @change='pageGalaryPhotLoad(newPage)'/>
                       Добавить <br> фото
            </button>
      </div>
      <div class='cinema_name2'>
          Ссылка на видео: <input type='text' placeholder='Ссылка на видео в YouTube'
          v-bind:value='newPage.newPageLink' @input='newPage.newPageLink = $event.target.value'>
      </div>
      <div class='seo'>
          <div>
            SEO блок:
          </div>
          <div>
            <div>
              URL: <input type='text' placeholder='Text' v-bind:value='newPage.newPageUrl'
              @input='newPage.newPageUrl = $event.target.value'>
            </div>
            <div>
              Title: <input type='text' placeholder='Title' v-bind:value='newPage.newPageTitle'
              @input='newPage.newPageTitle = $event.target.value'>
            </div>
            <div>
              Keywords: <input type='text' placeholder='Word' v-bind:value='newPage.newPageKeywords'
              @input='newPage.newPageKeywords = $event.target.value'>
            </div>
            <div>
              Description: <textarea placeholder='Description' v-bind:value='newPage.newPageDescription'
              @input='newPage.newPageDescription = $event.target.value'></textarea>
            </div>
          </div>
    </div>
    <div class="save_btn"><button @click='newPageGetData(newPage)'>Сохранить</button></div>
  </form>


  <div class="create_news"><button @click='createnewPage'>Создать новую</button></div>

  </div>
     
  </div>


</div>
<!-- ./wrapper -->
</template>

<script scoped>
import { getDatabase, ref as fireRef, set, child, get, onValue } from "firebase/database";
import { getStorage, ref, uploadBytes, deleteObject, getDownloadURL } from "firebase/storage";

import MainPage from '../components/pages-main-page.vue';
import AboutSinema from '../components/pages_about_sinema.vue';
import CafeBar from '../components/pages_cafe_bar.vue';
import VipHall from '../components/pages_vip_hall.vue';
import PageAdvert from '../components/pages-advertising.vue';
import ChildRoom from '../components/pages-children-room.vue';
import PageContact from '../components/pages-contacts.vue';

export default {
  data(){
    return{
      newPageList: [],
      pageContactList: [],
      childRoomList: [],
      pageAdvList: [],
      vipHallList: [],
      cafeBarList: [],
      mainPage: [],
      abSinemaList: [],
      imgData: null,
      imgData2: null,
      imgDataStorage: [],

      sinemaTempId: '',
      createPage: 0
    }
  },
  components:{
      MainPage,
      AboutSinema,
      CafeBar,
      VipHall,
      PageAdvert,
      ChildRoom,
      PageContact
  },
  methods:{
    cafeBarEdit(cafeBar){
        document.getElementById(cafeBar.cafeBarId).style="display: block;";
    },
    pageContactEdit(pageContact){
        document.getElementById(pageContact.pageContactId).style="display: block;";
    },
    childRoomEdit(childRoom){
        document.getElementById(childRoom.childRoomId).style="display: block;";
    },
    pageAdvEdit(pageAdv){
        document.getElementById(pageAdv.pageAdvId).style="display: block;";
    },
    vipHallEdit(vipHall){
        document.getElementById(vipHall.vipHallId).style="display: block;";
    },
    mainPageEdit(mainP){
        document.getElementById(mainP.mainPageId).style="display: block;";
    },
    abSinemaEdit(abSinema){
        document.getElementById(abSinema.abSinemaId).style="display: block;";
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
    abSinemaFirstFunc(){
          const dbRef = fireRef(getDatabase());
          get(child(dbRef, `abSinema/`)).then((snapshot) => {
            var abSinema = [];
            snapshot.forEach(element => {
              abSinema.push(element.val());
            });
            this.abSinemaList = abSinema;
          });
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
    vipHallFirstFunc(){
          const dbRef = fireRef(getDatabase());
          get(child(dbRef, `vipHall/`)).then((snapshot) => {
            var vipHall = [];
            snapshot.forEach(element => {
              vipHall.push(element.val());
            });
            this.vipHallList = vipHall;
          });
    },
    pageAdvFirstFunc(){
          const dbRef = fireRef(getDatabase());
          get(child(dbRef, `pageAdv/`)).then((snapshot) => {
            var pageAdv = [];
            snapshot.forEach(element => {
              pageAdv.push(element.val());
            });
            this.pageAdvList = pageAdv;
          });
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



    createnewPage(){
      let fullDate = new Date();
      let day = fullDate.getDate();
      let month = fullDate.getMonth();
      let year = fullDate.getFullYear();

      let randomId = Date.now();

      setTimeout(() => {
      this.newPageList.push({
        newPageId: randomId,
        newPageCreateDate: `${day}.${month + 1}.${year}`,
        newPageRadio: '',
        newPageStatus: null,
        newPageName: '',
        newPageDate: `${day}-${month + 1}-${year}`,
        newPageDescr: '',
        newPageMainImg: null,
        newPageGalary: [],
        newPageLink: '',
        newPageUrl: '',
        newPageTitle: '',
        newPageKeywords: '',
        newPageDescr2: ''
      });
      }, 1);

      setTimeout(() => {
          document.getElementById(randomId).style="display: block;";
      }, 1);

      this.createPage = 1;
    },
    newPageEdit(newPage){
        document.getElementById(newPage.newPageId).style="display: block;";
    },
    newPageDelete(newPage){
        let tempDel = this.newPageList.findIndex(n => n.newPageId === newPage.newPageId);
        this.newPageList.splice(tempDel, 1);

        const db = getDatabase();
        set(fireRef(db, `pages/newPage/`), this.newPageList);
    },
    newPageClose(newPage){
        document.getElementById(newPage.newPageId).style="display: none;";

        if(this.createPage === 0){

        }else if(this.createPage === 1){
                let tempDel = this.newPageList.findIndex(n => n.newPageId === newPage.newPageId);
                this.newPageList.splice(tempDel, 1);
                this.createPage = 0;
        } else if (this.createPage === 2){
          this.createPage = 0;
        };
    },
    newPageInputAct(newPage){
      document.getElementById(newPage.newPageId + "-logo_input").click();
    },
    pageOnFileSelected(newPage){
          var s_img = document.getElementById(newPage.newPageId + "-temp_logo_img");
          
          this.imgData = this.$refs[newPage.newPageId + 'fileDialog'].files[0];
          
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

          document.getElementById(newPage.newPageId + "-logo_img").style='display: none;';
          document.getElementById(newPage.newPageId + "-temp_logo_img").style='width: 150px; height: 115px; display: block; margin: 0 auto;';
    },
    newPageDeleteImg(newPage){
        newPage.newPageMainImg = '';
        document.getElementById(newPage.newPageId + "-temp_logo_img").src="";
    },
    newPageInputAct2(newPage){
      document.getElementById(newPage.newPageId + "-some_int").click();
    },
    pageGalaryPhotLoad(newPage){
      let galaryTempId = Date.now();
      newPage.newPageGalary.push({
          id: galaryTempId,
          img: ''
      });
      console.log(newPage);
      setTimeout(() => {
          var sImg = document.getElementById(galaryTempId + "-temp_logo_img2");

          let imgDataS = Date.now();

          this.imgData2 = this.$refs.file.files[0];
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
    newPageDeletePhot(image, newPage){
        let imageTempId = newPage.newPageGalary.findIndex(n => n.id === image.id);
        newPage.newPageGalary.splice(imageTempId, 1);
    },
    newPageGetData(newPage){
      let ident = Date.now();
      let storage = getStorage();

      if(this.imgData !== null && this.imgData !== undefined){
                const storageRef = ref(storage, `newPage-logo/` + ident + this.imgData.name);
                uploadBytes(storageRef, this.imgData).then((snapshot) => {
                console.log('Файл завантажено');
                });
      };
      if(this.imgDataStorage !== null && this.imgDataStorage !== undefined){
                for(let element in this.imgDataStorage){
                    const storageRef = ref(storage, `newPage-galary/` + this.imgDataStorage[element].id + this.imgDataStorage[element].name);
                    uploadBytes(storageRef, this.imgDataStorage[element].im_g).then((snapshot) => {
                    console.log('Файл завантажено');
                    });
                }
      }
      setTimeout(() => {
                let tempId = this.newPageList.findIndex(n => n.newPageId === newPage.newPageId);
                
                if(this.imgData !== null && this.imgData !== undefined){
                    getDownloadURL(ref(storage, `newPage-logo/` + ident + this.imgData.name)).then((url) => {
                        console.log(1);
                       document.getElementById(newPage.newPageId + "-temp_logo_img").style='display: none;';
                       this.newPageList[tempId].newPageMainImg = url;
                       const db = getDatabase();
                       set(fireRef(db, `pages/newPage/`), this.newPageList);
                       console.log(this.cinemas);
                    });
                    setTimeout(() => {
                    this.imgData = null;
                    console.log(this.imgData);
                    }, 1000);  
                };

                if(this.imgDataStorage !== null  && this.imgDataStorage !== undefined){
                    for(let element in this.imgDataStorage){
                    getDownloadURL(ref(storage, `newPage-galary/` + this.imgDataStorage[element].id + this.imgDataStorage[element].name)).then((url) => {
                    this.newPageList[tempId].newPageGalary[element].img = url;
                    const db = getDatabase();
                    set(fireRef(db, `pages/newPage/`), this.newPageList);
                    });
                    }
                    setTimeout(() => {
                    this.imgDataStorage = [];
                    }, 1000);  
                };
      }, 1000);
      
      const db = getDatabase();
      set(fireRef(db, `pages/newPage/`), this.newPageList);

      this.createPage = 2;
    },
    newPageFirstFunc(){
          const dbRef = fireRef(getDatabase());
          get(child(dbRef, `pages/newPage/`)).then((snapshot) => {
            var newPage = [];
            snapshot.forEach(element => {
              newPage.push(element.val());
            });
            this.newPageList = newPage;
          });
    },
  },
  mounted(){
      this.mainPageFirstFunc(),
      this.abSinemaFirstFunc(),
      this.cafeBarFirstFunc(),
      this.vipHallFirstFunc(),
      this.pageAdvFirstFunc(),
      this.childRoomFirstFunc(),
      this.pageContactFirstFunc(),
      this.newPageFirstFunc()
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

.content-wrapper{
  background-color: #DCDCDC;
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