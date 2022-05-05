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

  <h3>Список акций</h3>

  <div class='firstBlock'>

  <table>
      <tr>
        <td>Название</td>
        <td>Дата создания</td>
        <td>Статус</td>
      </tr>
      <tr v-for='news in newsList' :key='news.id'>
        <td><input type='text' v-bind:value='news.newsName' style='border: none; color: black;' disabled></td>
        <td><input type='text' v-bind:value='news.newsCreateDate' style='border: none; color: black;' disabled></td>
        <td><input type='text' v-bind:value='news.newsRadio' style='border: none; color: black;' disabled></td>
        <td class='third_td'>
        <img src='assets/dist/img/pan.png' @click='newsEdit(news)'>
        <img src='assets/dist/img/basket.png' @click='newsDelete(news)' :id='news.newsId + "basket"'>
        </td>
      </tr>
  </table>

  <form :id='news.newsId' @submit.prevent style='display: none;' v-for='news in newsList' :key='news.id' class='form'>
      <img src='assets/dist/img/cross.png' @click='close(news)' class='close1'>
      <div class='on-off'>
         <div>
            ВКЛ <input name="rad" type="radio" value="ВКЛ" @input='news.newsRadio = $event.target.value'>
            <input name="rad" type="radio" value="ВЫКЛ" @input='news.newsRadio = $event.target.value'> ВЫКЛ
         </div>
      </div>
      <div class='cinema_name'>
          Название новости: <input type='text' placeholder='Название новости'
          v-bind:value='news.newsName' @input='news.newsName = $event.target.value'>
          Дата публикации: 
          <input type="date" id="start" name="trip-start"
                 :value="news.newsDate"
                 @input='news.newsDate = $event.target.value'
          >
      </div>
      <div class='descr'>
          Описание: <textarea placeholder='Текст' v-bind:value='news.newsDescr'
          @input='news.newsDescr = $event.target.value'></textarea>
      </div>
      <div class='logo'>
          <img src='assets/dist/img/cross.png' class='logo_del' @click='deleteImg(news)'
               v-bind:id='news.newsId + "-logo"'>
          Главная картинка 
          <button class='square' @click='inputAct(news)'>
              <input type="file" accept="image/*" :id='news.newsId + "-logo_input"' class='logo_input'
              @change="onFileSelected" :ref="news.newsId + 'fileDialog'" :name='news.newsId + "-input_1"' />
              <img src=''  v-bind:id='news.newsId + "-temp_logo_img"' class='temp_logo_img'>
              <img v-bind:src='news.newsMainImg' class='logo_img' v-bind:id='news.newsId + "-logo_img"' alt=" ">
          </button>
      </div>
      Галерея картинок
      <div class='galary'>
          Размер: 1000х190
            <div v-for='image in news.newsGalary' :key='image.id' class='square2'>
                <img src='assets/dist/img/cross.png' 
                     class='galaryDeletePhot'
                     @click='deletePhot(image, news)'
                     v-bind:id='image.id + "-img_del2"'
                >
                <img src=''  v-bind:id='image.id + "-temp_logo_img2"' class='temp_logo_img'>
                <img v-bind:src='image.img' class='galaryImg' v-bind:id='image.id + "-logo_img2"' alt=" ">
            </div>
            <button @click='inputAct2(news)'>
                <input type="file" accept="image/*" :id='news.newsId + "-some_int"' 
                       class='galaryInput' ref="file" 
                       @change='galaryPhotLoad'/>
                       Добавить <br> фото
            </button>
      </div>
      <div class='cinema_name2'>
          Ссылка на видео: <input type='text' placeholder='Ссылка на видео в YouTube'
          v-bind:value='news.newsLink' @input='news.newsLink = $event.target.value'>
      </div>
      <div class='seo'>
          <div>
            SEO блок:
          </div>
          <div>
            <div>
              URL: <input type='text' placeholder='Text' v-bind:value='news.newsUrl'
              @input='news.newsUrl = $event.target.value'>
            </div>
            <div>
              Title: <input type='text' placeholder='Title' v-bind:value='news.newsTitle'
              @input='news.newsTitle = $event.target.value'>
            </div>
            <div>
              Keywords: <input type='text' placeholder='Word' v-bind:value='news.newsKeywords'
              @input='news.newsKeywords = $event.target.value'>
            </div>
            <div>
              Description: <textarea placeholder='Description' v-bind:value='news.newsDescription'
              @input='news.newsDescription = $event.target.value'></textarea>
            </div>
          </div>
    </div>
    <div class="save_btn"><button @click='getData(news)'>Сохранить</button></div>
  </form>

  <div class="create_news"><button @click='createNews'>Создать новость</button></div>

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
      imgData: null,
      imgData2: null,
      imgDataStorage: [],
      temp_id: null,

      createPage: 0
    }
  },
  methods:{
    createNews(){
      let fullDate = new Date();
      let day = fullDate.getDate();
      let month = fullDate.getMonth();
      let year = fullDate.getFullYear();

      let randomId = Date.now();

      this.temp_id = randomId;

      setTimeout(() => {
      this.newsList.push({
        newsId: randomId,
        newsCreateDate: `${day}.${month + 1}.${year}`,
        newsRadio: '',
        newsStatus: null,
        newsName: '',
        newsDate: `${day}-${month + 1}-${year}`,
        newsDescr: '',
        newsMainImg: null,
        newsGalary: [],
        newsLink: '',
        newsUrl: '',
        newsTitle: '',
        newsKeywords: '',
        newsDescr2: ''
      });
      }, 1);

      setTimeout(() => {
          document.getElementById(randomId).style="display: block;";
      }, 1);

      this.createPage = 1;
    },
    newsEdit(news){
        document.getElementById(news.newsId).style="display: block;";

        this.temp_id = news.newsId;
    },
    newsDelete(news){
        let tempDel = this.newsList.findIndex(n => n.newsId === news.newsId);
        this.newsList.splice(tempDel, 1);

        const db = getDatabase();
        set(fireRef(db, `stock/`), this.newsList);
    },
    close(news){
        document.getElementById(news.newsId).style="display: none;";

        if(this.createPage === 0){

        }else if(this.createPage === 1){
                let tempDel = this.newsList.findIndex(n => n.newsId === news.newsId);
                this.newsList.splice(tempDel, 1);
                this.createPage = 0;
        } else if (this.createPage === 2){
          this.createPage = 0;
        };
    },
    inputAct(news){
      document.getElementById(news.newsId + "-logo_input").click();
    },
    onFileSelected(event){
          let news = this.newsList.find(el => el.newsId === this.temp_id);
                
          var s_img = document.getElementById(news.newsId + "-temp_logo_img");
          
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

          document.getElementById(news.newsId + "-logo_img").style='display: none;';
          document.getElementById(news.newsId + "-temp_logo_img").style='width: 150px; height: 115px; display: block; margin: 0 auto;';
    },
    deleteImg(news){
        news.newsMainImg = '';
        document.getElementById(news.newsId + "-temp_logo_img").src="";
    },
    inputAct2(news){
      document.getElementById(news.newsId + "-some_int").click();
    },
    galaryPhotLoad(event){
      let news = this.newsList.find(el => el.newsId === this.temp_id);
      let galaryTempId = Date.now();
      news.newsGalary.push({
          id: galaryTempId,
          img: ''
      });
      console.log(news);
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
    deletePhot(image, news){
        let imageTempId = news.newsGalary.findIndex(n => n.id === image.id);
        news.newsGalary.splice(imageTempId, 1);
    },
    getData(news){
      let ident = Date.now();
      let storage = getStorage();

      if(this.imgData !== null && this.imgData !== undefined){
                const storageRef = ref(storage, `stock-logo/` + ident + this.imgData.name);
                uploadBytes(storageRef, this.imgData).then((snapshot) => {
                console.log('Файл завантажено');
                });
      };
      if(this.imgDataStorage !== null && this.imgDataStorage !== undefined){
                for(let element in this.imgDataStorage){
                    const storageRef = ref(storage, `stock-galary/` + this.imgDataStorage[element].id + this.imgDataStorage[element].name);
                    uploadBytes(storageRef, this.imgDataStorage[element].im_g).then((snapshot) => {
                    console.log('Файл завантажено');
                    });
                }
      }
      setTimeout(() => {
                let tempId = this.newsList.findIndex(n => n.newsId === news.newsId);
                
                if(this.imgData !== null && this.imgData !== undefined){
                    getDownloadURL(ref(storage, `stock-logo/` + ident + this.imgData.name)).then((url) => {
                        console.log(1);
                       document.getElementById(news.newsId + "-temp_logo_img").style='display: none;';
                       this.newsList[tempId].newsMainImg = url;
                       const db = getDatabase();
                       set(fireRef(db, `stock/`), this.newsList);
                       console.log(this.cinemas);
                    });
                    setTimeout(() => {
                    this.imgData = null;
                    console.log(this.imgData);
                    }, 1000);  
                };

                if(this.imgDataStorage !== null  && this.imgDataStorage !== undefined){
                    for(let element in this.imgDataStorage){
                    getDownloadURL(ref(storage, `stock-galary/` + this.imgDataStorage[element].id + this.imgDataStorage[element].name)).then((url) => {
                    this.newsList[tempId].newsGalary[element].img = url;
                    const db = getDatabase();
                    set(fireRef(db, `stock/`), this.newsList);
                    });
                    }
                    setTimeout(() => {
                    this.imgDataStorage = [];
                    }, 1000);  
                };
      }, 1000);
      
      const db = getDatabase();
      set(fireRef(db, `stock/`), this.newsList);

      this.createPage = 2;
    },
    first_func(){
          const dbRef = fireRef(getDatabase());
          get(child(dbRef, `stock/`)).then((snapshot) => {
            var news = [];
            snapshot.forEach(element => {
              news.push(element.val());
            });
            this.newsList = news;
          });
    },
  },
  mounted(){
      this.first_func()
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