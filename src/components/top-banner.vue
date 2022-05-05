<template>
       
</template>

<style scoped>
   .header__banner{
      background-color: #083159;
   }

   .header__banner>img{
      display: block;
      margin: 0 auto;
   }
</style>

<script scoped>

import { getDatabase, ref as fireRef, set, child, get, onValue } from "firebase/database";
import { getStorage, ref, uploadBytes, deleteObject, getDownloadURL } from "firebase/storage";

export default {
   data(){
      return{
         banner: ''
      }
   },
   methods:{
      getSomeFirstFunc(){
         const dbRef = fireRef(getDatabase());

         get(child(dbRef, `banners/block/`)).then((snapshot) => {
            var banners = [];
            snapshot.forEach(element => {
              banners.push(element.val());
            });
            this.banner = banners[0].img;
            console.log(this.banner);
         });
      }
   },
   mounted(){
      this.getSomeFirstFunc()
  }
}

</script>