<template>
            <ul class='header__list'>
               <li><a href=''><img src='assets/dist/img/facebook.png'></a></li>
               <li><a href=''><img src='assets/dist/img/vk.png'></a></li>
               <li><a href=''><img src='assets/dist/img/telegram.png'></a></li>
               <li><a href=''><img src='assets/dist/img/twitter.png'></a></li>
               <li><a href=''><img src='assets/dist/img/odnok.png'></a></li>
               <li><a href=''><img src='assets/dist/img/g.png'></a></li>
               <li><a href=''><img src='assets/dist/img/redcirc.png'></a></li>
            </ul>
</template>

<style scoped>
   .header__list>li{
      display: inline;
   }

   .header__list>li>a>img{
       height: 50px;
       width: 50px;
   }

   .header__list>li:nth-child(1)>a>img{
      height: 47px;
      width: 47px;
      margin-right: 2px;
   }

   .header__list>li:nth-child(3)>a>img{
      height: 53px;
      width: 52px;
   }

   .header__list>li:nth-child(4)>a>img{
      height: 58px;
      width: 58px;
      margin-left: -7px;
      margin-right: -7px;
   }

   .header__list>li:nth-child(5)>a>img{
      height: 52px;
      width: 52px;
      margin-right: -2px;
      margin-left: 1px;
   }

   .header__list>li:nth-child(7)>a>img{
      height: 44px;
      width: 44px;
      margin-right: -3px;
   }
</style>