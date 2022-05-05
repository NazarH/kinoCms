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
  <aside class="main-sidebar sidebar-dark-primary elevation-4" style="min-height: 1558px;">
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
  <div class="content-wrapper" style="min-height: 1500px;">

    <h3>Логотип сайта</h3>

    <main-img></main-img>

    <h3>На главной верх</h3>

    <add-banners></add-banners>

    <h3 style="margin-top: 40px;">Сквозной банер на заднем фоне</h3>

    <banner-photo></banner-photo>

    <h3 style="margin-top: 40px;">На главной Новости Акции</h3>

    <main-news></main-news>

  </div>
</div>
</template>

<style scoped>

.userButton{
  color: black;
  background: #343A40;
  border: 1px solid #4F5962;
  margin-left: 35px;
}

.content-wrapper{
  background-color: #DCDCDC;
  min-height: 100%;
}

/* Block #1 */

.add_banners{
  background-color: white;
  margin: 0 auto;
  width:1160px;
  padding-top: 30px;
  padding-bottom: 32px;
  border: 1px solid #E8E8E8;
  border-radius: 5px;
}

.some_text{
  margin-left: 44px;
}

.content-wrapper>h3{
  text-align: center;
  padding-top: 25px;
  padding-bottom: 15px;
}

.banners{
    width: 1100px;
    height: 250px;
    display: flex;
    overflow: scroll;
    overflow-y: hidden;
    padding: 15px 0px 0px 0px;
    margin: 0 auto;
}

.banners::-webkit-scrollbar{
    height: 5px;
    background-color: white;
}

.banners::-webkit-scrollbar-thumb{
    background-color: #E6E6E6;
}

.banner{
    margin: 0px 5px 5px 10px;
    min-width: 225px;
}

.banner>div:last-child{
    margin-top: 15px;
}

form[name="myform"]{
    display: flex;
    flex-direction: column;
    margin-right: 5px;
    margin-left: 10px;
    margin-bottom: 10px;
    min-width: 240px;
    height: 238px;
}

.square{
    width: 185px;
    height: 120px;
    margin-left: 45px;
    margin-bottom: 10px;
    margin-top: 15px;
    background-color: #D2D6DE;
    border: 1px solid #A9A9A9;
    overflow: hidden;
}

.square>input[type='file']{
    margin-left: 54px;
    margin-top: 5px;
}

.square>button{
  background-color:#EFEFEF;
  border: 1px solid #A9A9A9;
  padding: 5px 30px;
  border-radius: 5px;
  margin-top: 40px;
  margin-left: 28px;
}

.square2{
    width: 185px;
    height: 120px;
    margin-bottom: 11px;
    margin-top: 10px;
    background-color: #D2D6DE;
    border: 1px solid #A9A9A9;
    margin-left: 35px;
}

.save_btn{
    text-align: center;
    margin-top: 20px;
}

.save_btn>button{
  background-color:#EFEFEF;
  border: 1px solid #A9A9A9;
  padding: 5px 30px;
  border-radius: 5px;
}

input[placeholder="URL"]{
    margin-left: 10.5px;
    margin-bottom: 10px;
    border: 1px solid #A9A9A9;
}

input[placeholder="text"]{
  border: 1px solid #A9A9A9;
}

.add_block_photo{
  background-color:#EFEFEF;
  border: 1px solid #A9A9A9;
  padding: 0px 10px;
  border-radius: 5px;
  height: 50px;
  width: 110px;
  align-self: center;
  margin-left: 20px;
  margin-right: 20px;
}

/* Block #2 */

.back_bann{
  background-color: white;
  margin: 0 auto;
  width:1160px;
  padding-top: 30px;
  padding-bottom: 32px;
  border: 1px solid #E8E8E8;
  border-radius: 5px;
}

.bann_add{
  display: flex;
}

.buttons{
  display: flex;
  flex-direction: column;
  align-self: center;
  margin-left: 20px;
}

.buttons>button{
  background-color:#EFEFEF;
  border: 1px solid #A9A9A9;
  padding: 5px 30px;
  border-radius: 5px;
}

.buttons>button:first-child{
  margin-bottom: 8px;
}

.radio_btns{
  display: flex;
  flex-direction: column;
  align-self: center;
  margin-left: 45px;
}

.radio_btns>div:first-child{
  margin-bottom: 25px;
}

</style>

<script scoped>
import { getStorage, ref, uploadBytes, deleteObject, getDownloadURL } from "firebase/storage"
import AddBanners from '../components/add_banners.vue'
import BannerPhoto from '../components/banner_photo.vue'
import MainNews from '../components/main_news.vue'
import MainImg from '../components/main_img.vue'


export default {
    components:{
       AddBanners,
       BannerPhoto,
       MainNews,
       MainImg
    },
}
</script>