<template>

<div>

<div class='film_ban' style=''>
<div class='film' v-for='banner in banner_film' :key='banner.id' style='margin-right: 55px;'>
<input v-bind:value='banner.id' style='display: none;' id='example'>
<div class='film_banner' >
<img src='assets/dist/img/cross.png' style="width: 25px; heigth: 25px; margin-left: 187px; margin-top: -28px;"
        @click='bannerDelete(banner)'>
<img v-bind:src='banner.img' style='width: 190px; height: 220px; margin-top: -20px;' v-bind:id='banner.id + "-main_img"'
@click='editFilm(banner)'>
</div>
<a href='#'><input type='text' v-bind:value='banner.film_name' style='border: none; color: black; text-align: center' disabled></a>

<form class='form' style='display: none;' v-bind:id='banner.id' @submit.prevent>
<img src='assets/dist/img/cross.png' style=" width: 30px; heigth: 30px; margin-left: 1072px; margin-top: -147px;"
@click='close(banner)'>
    <div class='filmInfo'>  
        <button @click='addInfo(banner)'>Добавить</button>
        <div>
        <div class='filmInfos' v-for='info in banner.filmInfo' :key='info.id'>
           <input type="datetime-local" id='startTime' name='time-start' :value='info.filmTime'
           @input='info.filmTime = $event.target.value'>
           <input type='number' :value='info.filmHall' @input='info.filmHall = $event.target.value' placeholder='Зал'>
           <input type='number' :value='info.filmPrice' @input='info.filmPrice = $event.target.value' placeholder='Цена'>
        </div>
        </div>
    </div>
<div class='film1'>
<div> 
Название фильма <input type='text' placeholder='Название фильма'
v-bind:value='banner.film_name' @input='banner.film_name = $event.target.value'>
</div>
<div> 
Описание фильма <textarea placeholder='Текст...'
v-bind:value='banner.film_descr' @input='banner.film_descr = $event.target.value'></textarea>
</div>
</div>

<div class='film2'> 
Главная картинка
<img src='assets/dist/img/cross.png' 
               style="position: absolute; width: 25px; heigth: 25px; margin-left: 323px; margin-top: -105px;"
               @click='deleteBanner(banner)'
               v-bind:id='banner.id + "-img_del2"'
>
<button class='square' @click='inputAct2(banner)'>
          <input type="file" accept="image/*" :id='banner.id + "-some_int2"' style='width: 127px; margin-bottom: 6px; display: none;' @change="onFileSelected"
          :ref="banner.id + 'fileDialog'"/>
          <img src=''  v-bind:id='banner.id + "-form_img"' style="display: none;">
          <img v-bind:src='banner.img'  style="width: 150px; height: 110px; margin-left: 0px; margin-top: -1px;" v-bind:id='banner.id + "-myimg"' alt=" ">
</button>
</div>

<div>
<div style='margin-bottom: -17px; margin-left: -899px;'>Галерея картинок:</div>
<div class='film3'>
Размер: 1000х190
<div v-for='ban in banner.img_list' :key='ban.id' class='square square_two' >
<img src='assets/dist/img/cross.png' 
               style="position: absolute; width: 25px; heigth: 25px; margin-left: 80px; margin-top: -14px;"
               @click='deletePhot(ban)'
               v-bind:id='banner.id + "-img_del2"'
>
    <img src='' v-bind:id='ban.id + "-form_img2"' style="display: none;">
    <img v-bind:src='ban.img'  style="width: 150px; height: 110px; margin-left: 0px; margin-top: 2.5px;" v-bind:id='ban.id + "-myimg2"' alt=" ">
</div>
<button class='square2' @click='inputAct(banner)' style='margin-left: 29px;'>
    <input type="file" accept="image/*" :id='banner.id + "-some_int"' style='width: 127px; margin-bottom: 6px; display: none;'
          ref="file" @change='photoOnLoad'/>
          Добавить фото
</button>
</div>
</div>

<div class='film4' style='margin-bottom: 15px;'>
Ссылка на трейлер <input type="text" placeholder='Ссылка на видео в youtube'
v-bind:value='banner.scr_yt' @input='banner.scr_yt = $event.target.value'>
</div>

<div class='film5'>
Тип кино <input type="checkbox" name="complete" value="back"> 3D
         <input type="checkbox" name="complete" value="simple_back"> 2D
         <input type="checkbox" name="complete" value="simple_back"> IMAX
</div>

<div class='seo'>
<div>SEO блок:</div>
<div style="margin-left: 82px;" class='seo_urls'>
<div>URL: <input type='text' style='margin-left: 54px;' placeholder='URL'
v-bind:value='banner.url' @input='banner.url = $event.target.value'></div>
<div>Title: <input type='text' style='margin-left: 51px;' placeholder='Title'
v-bind:value='banner.title' @input='banner.title = $event.target.value'></div>
<div>Keywords: <input type='text' style='margin-left: 15px;' placeholder='Word'
v-bind:value='banner.keywords' @input='banner.keywords = $event.target.value'></div>
<div>Description: <textarea style='margin-left: 8px;' placeholder='Description'
v-bind:value='banner.descr' @input='banner.descr = $event.target.value'></textarea> </div>
</div>
</div>

<div class='btns'>
<div class="save_btn"><button @click='getData'>Сохранить</button></div>
<div class="save_btn"><button @click='returnData(banner)'>Вернуть базовую версию</button></div>
</div>

</form>
</div>
<div class="btn_save"><button @click='createFilm'>Добавить <br/> фильм</button></div>

</div>


</div>

</template>

<script>
import { getDatabase, ref as fireRef, set, child, get, onValue } from "firebase/database";
import { getStorage, ref, uploadBytes, deleteObject, getDownloadURL } from "firebase/storage";

export default {
    data(){
        return{
            banner_film:{},
            film_name: '',
            film_descr: '',
            img: '',
            img_list:{},
            scr_yt: '',
            url: '',
            title: '',
            keywords: '',
            descr: '',
            temp_id: null,
            imgData: null,
            imgData2: null,
            imgData2Storage: {},
            storage: null,
            ref: '',
            img_id: null,
        }
    },
    methods:{
        addInfo(banner){
            banner.filmInfo.push({
                filmTime: null,
                filmHall: null,
                filmPrice: null
            })
        },
        createFilm(){
            const name = Date.now();
            this.ref = name;
            this.banner_film[name] = {
                id: name,
                film_name: '',
                film_descr: '',
                img: '',
                img_list: {},
                scr_yt: '',
                url: '',
                title: '',
                keywords: '',
                descr: '',
                imgData: null,
                filmInfo: [],
                ticketBook: 0,

                Row1: [
                    {
                        id: 1,
                        place: false
                    },
                    {
                        id: 2,
                        place: false
                    },
                    {
                        id: 3,
                        place: false
                    },
                    {
                        id: 4,
                        place: false
                    },
                    {
                        id: 5,
                        place: false
                    },
                    {
                        id: 6,
                        place: false
                    },
                    {
                        id: 7,
                        place: false
                    },
                    {
                        id: 8,
                        place: false
                    },
                    {
                        id: 9,
                        place: false
                    },
                    {
                        id: 10,
                        place: false
                    },
                    {
                        id: 11,
                        place: false
                    },
                    {
                        id: 12,
                        place: false
                    }
                ],
                Row2: [
                    {
                        id: 13,
                        place: false
                    },
                    {
                        id: 14,
                        place: false
                    },
                    {
                        id: 15,
                        place: false
                    },
                    {
                        id: 16,
                        place: false
                    },
                    {
                        id: 17,
                        place: false
                    },
                    {
                        id: 18,
                        place: false
                    },
                    {
                        id: 19,
                        place: false
                    },
                    {
                        id: 20,
                        place: false
                    },
                    {
                        id: 21,
                        place: false
                    },
                    {
                        id: 22,
                        place: false
                    },
                    {
                        id: 23,
                        place: false
                    },
                    {
                        id: 24,
                        place: false
                    },
                    {
                        id: 25,
                        place: false
                    },
                    {
                        id: 26,
                        place: false
                    },
                ],
                Row3: [
                    {
                        id: 27,
                        place: false
                    },
                    {
                        id: 28,
                        place: false
                    },
                    {
                        id: 29,
                        place: false
                    },
                    {
                        id: 30,
                        place: false
                    },
                    {
                        id: 31,
                        place: false
                    },
                    {
                        id: 32,
                        place: false
                    },
                    {
                        id: 33,
                        place: false
                    },
                    {
                        id: 34,
                        place: false
                    },
                    {
                        id: 35,
                        place: false
                    },
                    {
                        id: 36,
                        place: false
                    },
                    {
                        id: 37,
                        place: false
                    },
                    {
                        id: 38,
                        place: false
                    },
                    {
                        id: 39,
                        place: false
                    },
                    {
                        id: 40,
                        place: false
                    },
                    {
                        id: 41,
                        place: false
                    }
                ],

                Row4: [
                    {
                        id: 42,
                        place: false
                    },
                    {
                        id: 43,
                        place: false
                    },
                    {
                        id: 44,
                        place: false
                    },
                    {
                        id: 45,
                        place: false
                    },
                    {
                        id: 46,
                        place: false
                    },
                    {
                        id: 47,
                        place: false
                    },
                    {
                        id: 48,
                        place: false
                    },
                    {
                        id: 49,
                        place: false
                    },
                    {
                        id: 50,
                        place: false
                    },
                    {
                        id: 51,
                        place: false
                    },
                    {
                        id: 52,
                        place: false
                    },
                    {
                        id: 53,
                        place: false
                    },
                    {
                        id: 54,
                        place: false
                    },
                ],
                Row5: [
                    {
                        id: 55,
                        place: false
                    },
                    {
                        id: 56,
                        place: false
                    },
                    {
                        id: 57,
                        place: false
                    },
                    {
                        id: 58,
                        place: false
                    },
                    {
                        id: 59,
                        place: false
                    },
                    {
                        id: 60,
                        place: false
                    },
                    {
                        id: 61,
                        place: false
                    },
                    {
                        id: 62,
                        place: false
                    },
                    {
                        id: 63,
                        place: false
                    },
                    {
                        id: 64,
                        place: false
                    },
                    {
                        id: 65,
                        place: false
                    },
                    {
                        id: 66,
                        place: false
                    },
                    {
                        id: 67,
                        place: false
                    },
                ],
                Row6: [
                    {
                        id: 68,
                        place: false
                    },
                    {
                        id: 69,
                        place: false
                    },
                    {
                        id: 70,
                        place: false
                    },
                    {
                        id: 71,
                        place: false
                    },
                    {
                        id: 72,
                        place: false
                    },
                    {
                        id: 73,
                        place: false
                    },
                    {
                        id: 74,
                        place: false
                    },
                    {
                        id: 75,
                        place: false
                    },
                    {
                        id: 76,
                        place: false
                    },
                    {
                        id: 77,
                        place: false
                    },
                    {
                        id: 78,
                        place: false
                    },
                    {
                        id: 79,
                        place: false
                    },
                    {
                        id: 80,
                        place: false
                    },
                ],
                Row7: [
                    {
                        id: 81,
                        place: false
                    },
                    {
                        id: 82,
                        place: false
                    },
                    {
                        id: 83,
                        place: false
                    },
                    {
                        id: 84,
                        place: false
                    },
                    {
                        id: 85,
                        place: false
                    },
                    {
                        id: 86,
                        place: false
                    },
                    {
                        id: 87,
                        place: false
                    },
                    {
                        id: 88,
                        place: false
                    },
                    {
                        id: 89,
                        place: false
                    },
                    {
                        id: 90,
                        place: false
                    },
                    {
                        id: 91,
                        place: false
                    },
                    {
                        id: 92,
                        place: false
                    },
                    {
                        id: 93,
                        place: false
                    }
                ],
                Row8: [
                    {
                        id: 94,
                        place: false
                    },
                    {
                        id: 95,
                        place: false
                    },
                    {
                        id: 96,
                        place: false
                    },
                    {
                        id: 97,
                        place: false
                    },
                    {
                        id: 98,
                        place: false
                    },
                    {
                        id: 99,
                        place: false
                    },
                    {
                        id: 100,
                        place: false
                    },
                    {
                        id: 101,
                        place: false
                    },
                    {
                        id: 102,
                        place: false
                    },
                    {
                        id: 103,
                        place: false
                    },
                    {
                        id: 104,
                        place: false
                    },
                    {
                        id: 105,
                        place: false
                    },
                    {
                        id: 106,
                        place: false
                    }
                ],
                Row9: [
                    {
                        id: 107,
                        place: false
                    },
                    {
                        id: 108,
                        place: false
                    },
                    {
                        id: 109,
                        place: false
                    },
                    {
                        id: 110,
                        place: false
                    },
                    {
                        id: 111,
                        place: false
                    },
                    {
                        id: 112,
                        place: false
                    },
                    {
                        id: 113,
                        place: false
                    },
                    {
                        id: 114,
                        place: false
                    },
                    {
                        id: 115,
                        place: false
                    },
                    {
                        id: 116,
                        place: false
                    },
                    {
                        id: 117,
                        place: false
                    },
                    {
                        id: 118,
                        place: false
                    },
                    {
                        id: 119,
                        place: false
                    },
                ],
                Row10: [
                    {
                        id: 120,
                        place: false
                    },
                    {
                        id: 121,
                        place: false
                    },
                    {
                        id: 122,
                        place: false
                    },
                    {
                        id: 123,
                        place: false
                    },
                    {
                        id: 124,
                        place: false
                    },
                    {
                        id: 125,
                        place: false
                    },
                    {
                        id: 126,
                        place: false
                    },
                    {
                        id: 127,
                        place: false
                    },
                    {
                        id: 128,
                        place: false
                    },
                    {
                        id: 129,
                        place: false
                    },
                    {
                        id: 130,
                        place: false
                    },
                    {
                        id: 131,
                        place: false
                    },
                    {
                        id: 132,
                        place: false
                    },
                    {
                        id: 133,
                        place: false
                    },
                    {
                        id: 134,
                        place: false
                    },
                    {
                        id: 135,
                        place: false
                    },
                    {
                        id: 136,
                        place: false
                    },
                    {
                        id: 137,
                        place: false
                    },
                    {
                        id: 138,
                        place: false
                    },
                    {
                        id: 139,
                        place: false
                    }
                ]
            }
        },
        editFilm(banner){
            document.getElementById(banner.id).style="display: block;";
            this.temp_id = banner.id;
            console.log(this.temp_id);
        },
        getData(banner){
            let some_id = this.temp_id;
            console.log(some_id);
            let ident = Date.now();
            if(this.imgData !== null){ 
                const storageRef = ref(this.storage, `banner-film-images/` + ident + this.imgData.name);
                uploadBytes(storageRef, this.imgData).then((snapshot) => {
                console.log('Файл завантажено');
            });
            }

            if(this.imgData2Storage !== null){
                for(let element in this.imgData2Storage){
                    const storageRef = ref(this.storage, `banner-film-images-2/` + this.imgData2Storage[element].id + this.imgData2Storage[element].name);
                    uploadBytes(storageRef, this.imgData2Storage[element].im_g).then((snapshot) => {
                    console.log('Файл завантажено');
                    });
                }
                
            }

            console.log(this.imgData);

            setTimeout(() => {
                if(this.imgData !== null){
                    getDownloadURL(ref(this.storage, `banner-film-images/` + ident + this.imgData.name)).then((url) => {
                    this.banner_film[some_id].img = url;
                    const db = getDatabase();
                    set(fireRef(db, `banner_films/films_list/`), this.banner_film);
                    });
                    this.temp_id = '';
                }
                
                if(this.imgData2Storage !== null){
                    for(let element in this.imgData2Storage){
                    getDownloadURL(ref(this.storage, `banner-film-images-2/` + this.imgData2Storage[element].id + this.imgData2Storage[element].name)).then((url) => {
                    console.log(this.banner_film[some_id]);
                    this.banner_film[some_id].img_list[this.imgData2Storage[element].id2].img = url;
                    const db = getDatabase();
                    set(fireRef(db, `banner_films/films_list/`), this.banner_film);
                    });
                    this.temp_id = '';
                    }
                } else {
                    const db = getDatabase();
                    set(fireRef(db, `banner_films/films_list/`), this.banner_film);
                }
                const db = getDatabase();

                for(let element in this.banner_film){
                    let tempDate = this.banner_film[element].id;
                    for(let i = 0; i < this.banner_film[element].filmInfo.length; i++){
                            let date = '';
                            for(let e = 0; e < this.banner_film[element].filmInfo[i].filmTime.length; e++){
                                if(this.banner_film[element].filmInfo[i].filmTime[e] !== 'T'){
                                    date += this.banner_film[element].filmInfo[i].filmTime[e];
                                    console.log(date);
                                } else {
                                    break;
                                }
                            }
                            set(fireRef(db, `banner_films/films_posters/${date}/${tempDate}/0`), this.banner_film[element].filmInfo[i]);
                            set(fireRef(db, `banner_films/films_posters/${date}/${tempDate}/1`), this.banner_film[element]);
                    }
                }

                set(fireRef(db, `banner_films/films_list/`), this.banner_film);

                
                
            }, 1000);
        },
        close(banner){
            document.getElementById(banner.id).style="display: none;";
            console.log(banner.id);
        },
        onFileSelected(event){
          let banner = this.banner_film[this.temp_id];  

          console.log(banner.id);
          var s_img = document.getElementById(banner.id + "-form_img");
          
          this.imgData = event.target.files[0];
          console.log(this.imgData)

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
          document.getElementById(banner.id + "-form_img").style='width: 150px; height: 115px; display: block; margin: 0 auto;';

          this.storage = getStorage();

          const mountainsRef = ref(this.storage, this.imgData.name);

          const mountainImagesRef = ref(this.storage, `banner-images/` + ident + this.imgData.name);

          mountainsRef.name === mountainImagesRef.name;           
          mountainsRef.fullPath === mountainImagesRef.fullPath;

          this.imgData = null;   
        },
        photoOnLoad(event){
        let banner = this.banner_film[this.temp_id]; 

        this.img_id = Date.now();
        console.log(banner);
        banner.img_list[this.img_id] = {
            id: this.img_id,
            img: '',
        };
        setTimeout(() => {
        var s_img = document.getElementById(this.img_id + "-form_img2");
        let imgDataS = Date.now();
          
        this.imgData2 = event.target.files[0];
        this.imgData2Storage[imgDataS] = {
            im_g: this.imgData2,
            name: this.imgData2.name,
            id: imgDataS,
            id2: banner.img_list[this.img_id].id,
            src: 'src',
        }; 

        console.log(this.imgData2Storage);

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

        reader.readAsDataURL(this.imgData2);
          
        document.getElementById(this.img_id + "-form_img2").style='width: 150px; height: 115px; display: block; margin: 0 auto;';

        this.imgData2 = null;
        this.storage = getStorage();
        }, 1000);
        },
        deleteBanner(banner){
          this.banner_film[banner.id].img = '';
          document.getElementById(banner.id + "-form_img").src="";
          document.getElementById('f').value='';
        },
        bannerDelete(banner){
           delete this.banner_film[banner.id];
           const db = getDatabase();
           set(fireRef(db, `banner_films/films_list/`), this.banner_film);
        },
        deletePhot(ban){
           delete this.banner_film[this.temp_id].img_list[ban.id];
        },
        returnData(banner){
            this.first_func();
        },
        inputAct(banner){
            document.getElementById(banner.id + "-some_int").click();
        },
        inputAct2(banner){
            document.getElementById(banner.id + "-some_int2").click();
        },
        first_func(){
          const dbRef = fireRef(getDatabase());
          get(child(dbRef, `banner_films/films_list/`)).then((snapshot) => {
            var banners = [];
            snapshot.forEach(element => {
              banners.push(element.val());
            });
            for(let i = 0; i < banners.length; i++){
              this.banner_film[banners[i].id] = banners[i]; 
            }
          });
        }
    },
    mounted(){
      this.first_func()
    }
}
</script>

<style>

.filmInfo{
    display: flex;
    margin-bottom: 25px;
}

.filmInfo>button{
    margin-right: 20px;
    height: 30px;
}

.filmInfos>input{
    margin-right: 10px;
}

/* Film banner */

.film_ban{
    width: 90%;
    margin: 0 auto;
    background-color: white;
    margin-bottom: 45px;
    border-radius: 6px;
    padding: 60px;
    min-height: 385px; 
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
}

.film{
    max-width: 200px;
    text-align: center;
}

.film>a{
    color: black;
}

.film_banner{
    width: 200px;
    height: 230px;
    background-color: #D2D6DE;
    margin-bottom: 7px;
}

.form{
    position: absolute;
    display: flex;
    flex-direction: column;
    background-color: white;
    padding: 60px;
    border-radius: 6px;
    width: 75.5%;
    margin: 0 auto;
    top: 85px;
    left: 313px;
}

/* block - 1 */

.film1>div{
    display: flex;
}

.film1>div>input{
    margin-left: 25px;
    width: 400px;
    margin-bottom: 25px;
}

.film1>div>textarea{
    margin-left: 23px;
    width: 865px;
    height: 150px;
}

/* block - 2 */

.film2{
    display: flex;
    align-items: center;
}

.film2>button{
    margin-left: 26px;
    margin-top: 25px;
}

/* block - 3 */

.film3{
    display: flex;
    align-items: center;
}

.film3>div{
    margin-left: 30px;
    margin-top: 25px;
}

/* block - 4 */

.film4{
    display: flex;
    align-items: center;
}

.film4>input{
    margin-top: 12px;
    margin-left: 16px;
    width: 400px;
}

/* block - 5 */

.film5{
    display: flex;
    align-items: center;
    margin-bottom: 25px;
    margin-top: 5px;
}

.film5>input:nth-child(1){
    margin-left: 85px;
}

.film5>input{
    margin-left: 15px;
}

/* block - 6 */

.seo_urls>div>input{
    width: 400px;
    margin-bottom: 10px;
}

.seo_urls>div>textarea{
    width: 400px;
}

.seo_urls>div:last-child{
    display: flex;
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

.square2{
    width: 90px;
    height: 60px;
    margin-left: 45px;
    margin-bottom: 10px;
    margin-top: 15px;
    background-color: #D2D6DE;
    border: 1px solid #A9A9A9;
    overflow: hidden;
}

.seo{
    display: flex;
    flex-direction: row;
}

/* buttons */

.btns{
    display: flex;
    margin: 0 auto;
    margin-top: 35px;
    justify-content: center;
}

.save_btn{
    text-align: center;
    margin-top: 20px;
}

.save_btn:first-child{
    margin-right: 30px;
}

.save_btn>button{
  background-color:#EFEFEF;
  border: 1px solid #A9A9A9;
  padding: 5px 30px;
  border-radius: 5px;
}

.btn_save{
    margin-top: 20px;
    margin-left: -30px;
}

.btn_save>button{
  background-color:#EFEFEF;
  border: 1px solid #A9A9A9;
  padding-left: 20px;
  padding-right: 20px;
  border-radius: 5px;
  margin-left: 25px;
  margin-bottom: 40px;
}

</style>