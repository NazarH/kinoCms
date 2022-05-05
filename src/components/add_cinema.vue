<template>
<div class='add_cinema'>
<div class='cinema_sort'>
   <div v-for='cinema in cinemas' :key='cinema.id' class='cinema_block'>
      <img src='assets/dist/img/cross.png' class='cinema_delete' @click='cinemaDelete(cinema, cinemas)' :id='cinema.id + "cinemDel"'>
      <div class='square' @click='cinemaEdit(cinema)'>
        <img v-bind:src='cinema.logo' class='main_logo' v-bind:id='cinema.logo + "-main_logo"'
        @click='cinemaEdit(cinema)' alt=' '> 
      </div>
      <input type='text' v-bind:value='cinema.cinemaName' class='cineName' disabled>

      <form class='form' @submit.prevent style='display: none;' v-bind:id='cinema.id'>
          <img src='assets/dist/img/cross.png' @click='close(cinema)' class='close1'>

          <div class='cinema_name'>
          Название кинотеатра <input type='text' placeholder='Название кинотеатра'
          v-bind:value='cinema.cinemaName' @input='cinema.cinemaName = $event.target.value'>
          </div>

          <div class='descr'>
          Описание <textarea placeholder='Текст' v-bind:value='cinema.descr'
          @input='cinema.descr = $event.target.value'></textarea>
          </div>

          <div class='condition'>
          Условия <textarea placeholder='Текст'  v-bind:value='cinema.conditions'
          @input='cinema.conditions = $event.target.value'></textarea>
          </div>

          <div class='logo'>
          <img src='assets/dist/img/cross.png' class='logo_del' @click='deleteImg1(cinema)'
               v-bind:id='cinema.id + "-logo"'>
          Логотип 
          <button class='square' @click='inputAct(cinema)'>
              <input type="file" accept="image/*" :id='cinema.id + "-logo_input"' class='logo_input'
              @change="onFileSelected" :ref="cinema.id + 'fileDialog'" :name='cinema.id + "-input_1"' />
              <img src=''  v-bind:id='cinema.id + "-temp_logo_img"' class='temp_logo_img'>
              <img v-bind:src='cinema.logo' class='logo_img' v-bind:id='cinema.id + "-logo_img"' alt=" ">
          </button>

          </div>
          <div class='top_back_bann'>
               <img src='assets/dist/img/cross.png' class='logo_del2' @click='deleteImg2(cinema)'
               v-bind:id='cinema.id + "-logo2"'>
               Фото верхнего <br> баннера 
               <button class='square2' @click='inputAct2(cinema)'>
                   <input type="file" accept="image/*" :id='cinema.id + "-logo_input2"' class='logo_input2'
                   @change="onFileSelected2" :ref="cinema.id + 'fileDialog2'" :name='cinema.id + "-input_2"'/>
                   <img src=''  v-bind:id='cinema.id + "-temp_logo_img2"' class='temp_logo_img'>
                   <img v-bind:src='cinema.topBackPhot' class='logo_img' v-bind:id='cinema.id + "-logo_img2"' alt=" ">
               </button>
          </div>

          Галерея картинок
          <div class='galary'>
          Размер: 1000х190
            <div v-for='image in cinema.galary' :key='image.id' class='square3'>
                <img src='assets/dist/img/cross.png' 
                     class='galaryDeletePhot'
                     @click='deletePhot(image, cinema)'
                     v-bind:id='image.id + "-img_del2"'
                >
                <img src=''  v-bind:id='image.id + "-temp_logo_img2"' class='temp_logo_img'>
                <img v-bind:src='image.img' class='galaryImg' v-bind:id='image.id + "-logo_img2"' alt=" ">
            </div>
            <button @click='inputAct5(cinema)'>
                <input type="file" accept="image/*" :id='cinema.id + "-some_int"' 
                       class='galaryInput' ref="file" 
                       @change='galaryPhotLoad'/>
                       Добавить <br> фото
            </button>
          </div>

          <h4 class='hall_list_h4'>Список Залов</h4>
          
          <div :id='cinema.id + "hidden2"'>
            <table>
               <tr>
                 <td>Название</td>
                 <td>Дата создания</td>
                 <td class='third'></td>
               </tr>
               <tr v-for='hall in cinema.halls' :key='hall.id'>
                 <td><input type='text' v-bind:value='hall.hallNumb' style='border: none; color: black;' disabled></td>
                 <td><input type='text' v-bind:value='hall.hallDate' style='border: none; color: black;' disabled></td>
                 <td class='third_td'>
                 <img src='assets/dist/img/pan.png' @click='hallEdit(hall, cinema)'>
                 <img src='assets/dist/img/basket.png' @click='hallDelete(hall, cinema)' :id='hall.hallId2 + "basket"'>
                 </td>
               </tr>
            </table>
            <div class="save_btn"><button @click='hallCreate(cinema)'>Создать зал</button></div>
          </div>

    
    <form class='form2' v-bind:id='hall.hallId' @submit.prevent style='display: none;' v-for='hall in cinema.halls' :key='hall.id'>
    <img src='assets/dist/img/cross.png' @click='close2(hall, cinema)' class='close1'>
          <div class='hall_numb'>
          Номер зала <input type='text' placeholder='Зал №' v-bind:value='hall.hallNumb'
          @input='hall.hallNumb = $event.target.value'>
          </div>
          <div class='hall_descr'>
          Описание зала <textarea placeholder='Текст' v-bind:value='hall.hallDescr'
          @input='hall.hallDescr = $event.target.value'></textarea>
          </div>
          <div class='hall_sch'>
               <img src='assets/dist/img/cross.png' class='logo_del3' @click='deleteImg3(hall)'
               v-bind:id='hall.hallId + "-logo3"'>
          Схема зала
               <button class='square2' @click='inputAct3(hall)'>
                   <input type="file" accept="image/*" :id='hall.hallId + "-logo_input3"' class='logo_input2'
                   @change="onFileSelected3" :ref="hall.hallTempRef" :name='hall.hallId + "-input_3"'/>
                   <img src=''  v-bind:id='hall.hallId + "-temp_logo_img3"' class='temp_logo_img'>
                   <img v-bind:src='hall.hallLayout' class='logo_img' v-bind:id='hall.hallId + "-logo_img3"' alt=" ">
               </button>
          </div>
          <div class='top_banner'>
                <img src='assets/dist/img/cross.png' class='logo_del4' @click='deleteImg4(hall)'
                v-bind:id='hall.hallId + "-logo4"'>
          Верхний баннер 
                <button class='square2' @click='inputAct4(hall)'>
                   <input type="file" accept="image/*" :id='hall.hallId + "-logo_input4"' class='logo_input2'
                   @change="onFileSelected4" :ref="hall.hallTempRef2" :name='hall.hallId + "-input_4"'/>
                   <img src=''  v-bind:id='hall.hallId + "-temp_logo_img4"' class='temp_logo_img'>
                   <img v-bind:src='hall.hallTopBackPhot' class='logo_img' v-bind:id='hall.hallId + "-logo_img4"' alt=" ">
               </button>
          </div>
          Галерея картинок
          <div class='galary'>
          Размер: 1000х190
            <div v-for='image2 in hall.hallGallary' :key='image2.id' class='square3'>
                <img src='assets/dist/img/cross.png' 
                     class='galaryDeletePhot'
                     @click='deletePhot2(image2, hall)'
                     v-bind:id='image2.id + "-img_del2"'
                >
                <img src=''  v-bind:id='image2.id + "-temp_logo_img2"' class='temp_logo_img'>
                <img v-bind:src='image2.img' class='galaryImg' v-bind:id='image2.id + "-logo_img2"' alt=" ">
            </div>
            <button @click='inputAct6(hall)'>
                <input type="file" accept="image/*" :id='hall.hallId + "-some_int"' 
                       class='galaryInput' ref="file" 
                       @change='galaryPhotLoad2'/>
                       Добавить <br> фото
            </button>
          </div>

          <div class='seo'>
            <div>
               SEO блок:
            </div>
            <div>
            <div>
               URL: <input type='text' placeholder='Text' v-bind:value='hall.hallUrl'
          @input='hall.hallUrl = $event.target.value'>
            </div>
            <div>
              Title: <input type='text' placeholder='Title' v-bind:value='hall.hallTitle'
          @input='hall.hallTitle = $event.target.value'>
            </div>
            <div>
              Keywords: <input type='text' placeholder='Word' v-bind:value='hall.hallKeywords'
          @input='hall.hallKeywords = $event.target.value'>
            </div>
            <div>
              Description: <textarea placeholder='Description' v-bind:value='hall.hallDescription'
          @input='hall.hallDescription = $event.target.value'></textarea>
            </div>
          </div>
          </div>

          <div class="save_btn" style='display: none;'><button @click='getData(cinema, cinemas, hall, halls)'
          :id="cinema.id + 'getDataBtn'">Сохранить</button></div>
          <div class="save_btn"><button @click='close3(hall, cinema)'>Сохранить</button></div>
      </form>

          <div class='seo' :id='cinema.id + "hidden"'>
            <div>
               SEO блок:
            </div>
            <div>
            <div>
               URL: <input type='text' placeholder='Text' v-bind:value='cinema.url'
          @input='cinema.url = $event.target.value'>
            </div>
            <div>
              Title: <input type='text' placeholder='Title' v-bind:value='cinema.title'
          @input='cinema.title = $event.target.value'>
            </div>
            <div>
              Keywords: <input type='text' placeholder='Word' v-bind:value='cinema.keywords'
          @input='cinema.keywords = $event.target.value'>
            </div>
            <div>
              Description: <textarea placeholder='Description' v-bind:value='cinema.description'
          @input='cinema.description = $event.target.value'></textarea>
            </div>
          </div>
          </div>

          <div class="save_btn"><button @click='saveData(cinema)'>Сохранить</button></div>
      </form>

      
   </div>
</div>
<div class='cinem_butt'>
   <div class=""><button @click='createCinema'>Добавить</button></div>
</div>

</div>
</template>

<script scoped>
import { getDatabase, ref as fireRef, set, child, get, onValue } from "firebase/database";
import { getStorage, ref, uploadBytes, deleteObject, getDownloadURL } from "firebase/storage";
export default {
    data(){
        return{
            cinemas: [],
            cinemaName: '',
            descr: '',
            conditions: '',
            logo: null,
            topBackPhot: null,
            galary: {},
            halls:[],
            temp_id: null,
            temp_id2: null,
            temp_cinema: [],
            temp_hall: [],

            imgData3Storage: [],
            imgData4Storage: [],
            imgData5Storage: [],
            imgData6Storage: [],

            createPage: 0,
            createHall: 0
        }
    },
    methods:{
        createCinema(){
            let randomId = Date.now();
            this.temp_id = randomId;

            setTimeout(() => {
            this.cinemas.push({
                id: randomId,
                cinemaName: '',
                descr: '',
                conditions: '',
                logo: null,
                topBackPhot: null,
                galary: [],
                halls: [],

                url: '',
                title: '',
                keywords: '',
                description: '',

                imgData: null,
                imgData2: null,
                imgData3: null,
                imgData4: null,
                imgData5: null,

                storage: null
            });
            console.log(this.cinemas);
            let cinema = this.cinemas.find(el => el.id === this.temp_id);
            this.temp_cinema = cinema;
            }, 1);

            setTimeout(() => {
            document.getElementById(randomId).style="display: block;";
            }, 1);

            this.createPage = 1;
        },
        cinemaEdit(cinema){
            document.getElementById(cinema.id).style="display: block;";
            this.temp_id = cinema.id;
            console.log(this.temp_id);

            if(cinema.halls.length === 1){
              document.getElementById(cinema.halls[0].hallId2 + "basket").style='display: none;';
            }
        },
        close(cinema){
            document.getElementById(cinema.id).style="display: none;";
            if(this.createPage === 0){

            }else if(this.createPage === 1){
                let tempDel2 = this.cinemas.findIndex(n => n.id === cinema.id);
                this.cinemas.splice(tempDel2, 1);
                this.createPage = 0;
            } else if (this.createPage === 2){
            this.createPage = 0;
            };
        },
        hallCreate(cinema){
            let fullDate = new Date();
            let day = fullDate.getDate();
            let month = fullDate.getMonth();
            let year = fullDate.getFullYear();
            let text = '';
            let possible = "abcdefghijklmnopqrstuvwxyz";
            let someTempId = Date.now() + 1;

            this.temp_id2 = someTempId;

            for (var i = 0; i < 4; i++){
                 text += possible.charAt(Math.floor(Math.random() * possible.length));
            };

            setTimeout(() => {
            cinema.halls.push({
                hallId2: Date.now(),
                hallDate: `${day}.${month + 1}.${year}`,
                hallId: someTempId,
                hallNumb: '',
                hallDescr: '',
                hallLayout: null,
                hallTopBackPhot: null,
                hallGallary: [],
                hallUrl: '',
                hallTitle: '',
                hallKeywords: '',
                hallDescription: '',
                hallTempRef: text + 'FileDialog',
                hallTempRef2: text + '2FileDialog'
            });

            let hall = this.temp_cinema.halls.find(el => el.hallId === this.temp_id2);
            this.temp_hall = hall;
            }, 1);

            setTimeout(() => {
            document.getElementById(someTempId).style="display: block;";
            document.getElementById(cinema.id + 'hidden').style="display: none;";
            document.getElementById(cinema.id + 'hidden2').style="display: none;";
            }, 1);

            console.log(cinema.halls);

            if(cinema.halls.length === 1){
                setTimeout(() => {
                document.getElementById(cinema.halls[0].hallId2 + "basket").style='display: none;';
                }, 100);
            } else {
                setTimeout(() => {
                document.getElementById(cinema.halls[0].hallId2 + "basket").style='display: block;';
                 }, 100);
            }
            
            this.createHall = 1;
        },
        hallDelete(hall, cinema){
            let tempDel = cinema.halls.findIndex(n => n.hallId === hall.hallId);
            cinema.halls.splice(tempDel, 1);

            if(cinema.halls.length === 1){
                    document.getElementById(cinema.halls[0].hallId2 + "basket").style='display: none;';
            }else{
                    document.getElementById(cinema.halls[0].hallId2 + "basket").style='display: block;';
            }
        },
        hallEdit(hall, cinema){
            document.getElementById(hall.hallId).style="display: block;";
            document.getElementById(cinema.id + 'hidden').style="display: none;";
            document.getElementById(cinema.id + 'hidden2').style="display: none;";

            this.temp_id2 = hall.hallId;
        },
        close2(hall, cinema){
            document.getElementById(hall.hallId).style="display: none;";
            document.getElementById(cinema.id + 'hidden').style="display: flex;";
            document.getElementById(cinema.id + 'hidden2').style="display: block;";

            if(this.createHall === 0){
                if(cinema.halls.length === 1){
                    document.getElementById(cinema.halls[0].hallId2 + "basket").style='display: none;';
                }else{
                    document.getElementById(cinema.halls[0].hallId2 + "basket").style='display: block;';
                }
            }else if(this.createHall === 1){
                let tempDel2 = cinema.halls.findIndex(n => n.hallId === hall.hallId);
                cinema.halls.splice(tempDel2, 1);
                this.createHall = 0;
            } else if (this.createHall === 2){
            this.createHall = 0;

                if(cinema.halls.length === 1){
                    document.getElementById(cinema.halls[0].hallId2 + "basket").style='display: none;';
                }else{
                    document.getElementById(cinema.halls[0].hallId2 + "basket").style='display: block;';
                }
            };
        },
        close3(hall, cinema){
            this.createHall = 2;

            document.getElementById(hall.hallId).style="display: none;";
            document.getElementById(cinema.id + 'hidden').style="display: flex;";
            document.getElementById(cinema.id + 'hidden2').style="display: block;";

                if(cinema.halls.length === 1){
                    document.getElementById(cinema.halls[0].hallId2 + "basket").style='display: none;';
                }else{
                    document.getElementById(cinema.halls[0].hallId2 + "basket").style='display: block;';
                }
        },
        cinemaDelete(cinema, cinemas){
            let tempDel2 = cinemas.findIndex(n => n.id === cinema.id);
            cinemas.splice(tempDel2, 1);
            const db = getDatabase();
            set(fireRef(db, `cinemas/`), this.cinemas);

            setTimeout(() => {
            console.log(this.cinemas);
            document.getElementById(this.cinemas[0].id + "cinemDel").style='display: none;';
            }, 100);
        },
        inputAct(cinema){
            document.getElementById(cinema.id + "-logo_input").click();
            console.log(1);
        },
        inputAct2(cinema){
            document.getElementById(cinema.id + "-logo_input2").click();
            console.log(2);
        },
        inputAct3(hall){
            document.getElementById(hall.hallId + "-logo_input3").click();
            console.log(3);
        },
        inputAct4(hall){
            document.getElementById(hall.hallId + "-logo_input4").click();
            console.log(4);
        },
        inputAct5(cinema){
            document.getElementById(cinema.id + "-some_int").click();
        },
        inputAct6(hall){
            document.getElementById(hall.hallId + "-some_int").click();
        },
        onFileSelected(event){
          let cinema = this.cinemas.find(el => el.id === this.temp_id);
          this.temp_cinema = cinema;

          console.log(1)
          var s_img = document.getElementById(cinema.id + "-temp_logo_img");
          
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

          document.getElementById(cinema.id + "-logo_img").style='display: none;';
          document.getElementById(cinema.id + "-temp_logo_img").style='width: 150px; height: 115px; display: block; margin: 0 auto;';

          this.storage = getStorage();
        },
        onFileSelected2(event){
          let cinema = this.cinemas.find(el => el.id === this.temp_id);
          this.temp_cinema = cinema;

          console.log(2);
          var s_img = document.getElementById(cinema.id + "-temp_logo_img2");
          
          this.imgData2 = event.target.files[0];

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
          document.getElementById(cinema.id + "-logo_img2").style='display: none;';
          document.getElementById(cinema.id + "-temp_logo_img2").style='width: 150px; height: 115px; display: block; margin: 0 auto;';

          this.storage = getStorage();
        },
        onFileSelected3(event){
          let hall = this.temp_cinema.halls.find(el => el.hallId === this.temp_id2); 

          console.log(3);
          var s_img = document.getElementById(hall.hallId + "-temp_logo_img3");
          console.log(hall.hallId + "-temp_logo_img3");
          
          this.imgData3 = event.target.files[0];
          console.log(hall.hallTempRef);

          this.imgData3Storage.push({
            imgData: this.imgData3,
            name: this.imgData3.name,
            id: hall.hallId,
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
            s_img.src = result;
            this.temp_src = s_img.src;
            //this.banner_films = s_img.src;
          }
          reader.readAsDataURL(this.imgData3);
          document.getElementById(hall.hallId + "-logo_img3").style='display: none;';
          console.log(hall.hallId + "-logo_img3");
          document.getElementById(hall.hallId + "-temp_logo_img3").style='width: 150px; height: 115px; display: block; margin: 0 auto;';
          console.log(hall.hallId + "-temp_logo_img3");
          this.storage = getStorage();
        },
        onFileSelected4(event){
          let hall = this.temp_cinema.halls.find(el => el.hallId === this.temp_id2);
          console.log(4);
          var s_img = document.getElementById(hall.hallId + "-temp_logo_img4");
          
          this.imgData4 = event.target.files[0];

          this.imgData4Storage.push({
            imgData: this.imgData4,
            name: this.imgData4.name,
            id: hall.hallId,
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
            s_img.src = result;
            this.temp_src = s_img.src;
            //this.banner_films = s_img.src;
          }
          reader.readAsDataURL(this.imgData4);
          document.getElementById(hall.hallId + "-logo_img4").style='display: none;';
          document.getElementById(hall.hallId + "-temp_logo_img4").style='width: 150px; height: 115px; display: block; margin: 0 auto;';

          this.storage = getStorage();
        },
        getData(cinema, cinemas, hall, halls){
            let tempId = cinemas.findIndex(n => n.id === cinema.id);
            let hallTempId = cinema.halls.findIndex(n => n.id === hall.id);
            console.log(hallTempId);
            let ident = Date.now();

            console.log(this.imgData);
            console.log(this.imgData2);
            console.log(this.imgData3);
            console.log(this.imgData4);

            if(this.imgData !== null && this.imgData !== undefined){
                const storageRef = ref(this.storage, `cinema-logo/` + ident + this.imgData.name);
                uploadBytes(storageRef, this.imgData).then((snapshot) => {
                console.log('Файл завантажено');
            });
            }

            if(this.imgData2 !== null && this.imgData2 !== undefined){
                const storageRef = ref(this.storage, `img-top-banner/` + ident + this.imgData2.name);
                uploadBytes(storageRef, this.imgData2).then((snapshot) => {
                console.log('Файл завантажено');
            });
            }

            if(this.imgData3 !== null && this.imgData3 !== undefined){
                const storageRef = ref(this.storage, `hall-layout/` + ident + this.imgData3.name);
                uploadBytes(storageRef, this.imgData3).then((snapshot) => {
                console.log('Файл завантажено');
            });
            }

            if(this.imgData4 !== null && this.imgData4 !== undefined){
                const storageRef = ref(this.storage, `hall-top-banner/` + ident + this.imgData4.name);
                uploadBytes(storageRef, this.imgData4).then((snapshot) => {
                console.log('Файл завантажено');
            });
            }

            if(this.imgData5Storage !== null && this.imgData5Storage !== undefined){
                for(let element in this.imgData5Storage){
                    const storageRef = ref(this.storage, `cinema-galary/` + this.imgData5Storage[element].id + this.imgData5Storage[element].name);
                    uploadBytes(storageRef, this.imgData5Storage[element].im_g).then((snapshot) => {
                    console.log('Файл завантажено');
                    });
                }
            }

            
            if(this.imgData6Storage !== null && this.imgData6Storage !== undefined){
                for(let element in this.imgData6Storage){
                    const storageRef = ref(this.storage, `hall-galary/` + this.imgData6Storage[element].id + this.imgData6Storage[element].name);
                    uploadBytes(storageRef, this.imgData6Storage[element].im_g).then((snapshot) => {
                    console.log('Файл завантажено');
                    });
                }
            }

            setTimeout(() => {
                if(this.imgData !== null && this.imgData !== undefined){
                    getDownloadURL(ref(this.storage, `cinema-logo/` + ident + this.imgData.name)).then((url) => {
                        console.log(1);
                       document.getElementById(cinema.id + "-temp_logo_img").style='display: none;';
                       this.cinemas[tempId].logo = url;
                       const db = getDatabase();
                       set(fireRef(db, `cinemas/`), this.cinemas);
                       console.log(this.cinemas);
                    });
                    this.temp_id = '';

                    setTimeout(() => {
                    this.imgData = null;
                    console.log(this.imgData);
                    }, 1000);  
                }

                if(this.imgData2 !== null && this.imgData2 !== undefined){
                    getDownloadURL(ref(this.storage, `img-top-banner/` + ident + this.imgData2.name)).then((url) => {
                        console.log(2);
                       document.getElementById(cinema.id + "-logo_img2").style='display: block;';
                       document.getElementById(cinema.id + "-temp_logo_img2").style='display: none;';
                       this.cinemas[tempId].topBackPhot = url;
                       const db = getDatabase();
                       set(fireRef(db, `cinemas/`), this.cinemas);
                    });
                    this.temp_id = '';
                    setTimeout(() => {
                    this.imgData2 = null;
                    console.log(this.imgData2);
                    }, 1000);  
                }

                if(this.imgData3 !== null && this.imgData3 !== undefined){
                    getDownloadURL(ref(this.storage, `hall-layout/` + ident + this.imgData3.name)).then((url) => {
                        console.log(3);
                        console.log(hall.hallId);
                       document.getElementById(hall.hallId + "-logo_img3").style='display: block;';
                       document.getElementById(hall.hallId + "-temp_logo_img3").style='display: none;';

                       for(let i = 0; i < cinema.halls.length; i++){
                           if(this.imgData3Storage[0].id === cinema.halls[i].hallId &&
                              this.imgData3Storage[0].name === this.imgData3.name){
                               let hallTempId = i;
                               cinema.halls[hallTempId].hallLayout = url;
                               const db = getDatabase();
                               set(fireRef(db, `cinemas/`), this.cinemas);
                           }
                       }
                    });
                    this.temp_id = '';
                    setTimeout(() => {
                    this.imgData3 = null;
                    this.imgData3Storage = [];
                    console.log(this.imgData3);
                    }, 1000);  
                }

                if(this.imgData4 !== null && this.imgData4 !== undefined){
                    getDownloadURL(ref(this.storage, `hall-top-banner/` + ident + this.imgData4.name)).then((url) => {
                        console.log(4);
                       document.getElementById(hall.hallId + "-logo_img4").style='display: block;';
                       document.getElementById(hall.hallId + "-temp_logo_img4").style='display: none;';

                       for(let i = 0; i < cinema.halls.length; i++){
                           if(this.imgData4Storage[0].id === cinema.halls[i].hallId &&
                              this.imgData4Storage[0].name === this.imgData4.name){
                               let hallTempId = i;
                               cinema.halls[hallTempId].hallTopBackPhot = url;
                               const db = getDatabase();
                               set(fireRef(db, `cinemas/`), this.cinemas);
                           }
                       }
                    });
                    this.temp_id = '';

                    setTimeout(() => {
                    this.imgData4 = null;
                    this.imgData4Storage = [];
                    console.log(this.imgData4);
                    }, 1000);

                }

                if(this.imgData5Storage !== null  && this.imgData5Storage !== undefined){
                    for(let element in this.imgData5Storage){
                    getDownloadURL(ref(this.storage, `cinema-galary/` + this.imgData5Storage[element].id + this.imgData5Storage[element].name)).then((url) => {
                    this.cinemas[tempId].galary[element].img = url;
                    const db = getDatabase();
                    set(fireRef(db, `cinemas/`), this.cinemas);
                    });
                    this.temp_id = '';
                    }
                }

                if(this.imgData6Storage !== null  && this.imgData6Storage !== undefined){
                    for(let element in this.imgData6Storage){
                    getDownloadURL(ref(this.storage, `hall-galary/` + this.imgData6Storage[element].id + this.imgData6Storage[element].name)).then((url) => {
                    
                    let tempStorageId = this.imgData6Storage[element].id3;
                    let hallTempId;

                    for(let i = 0; i < cinema.halls.length; i++){
                        if(cinema.halls[i].hallId === tempStorageId){
                                hallTempId = i;
                                break;
                        }
                    };
                    
                    console.log(hallTempId);
                    console.log(element);
                    cinema.halls[hallTempId].hallGallary[element].img = url;
                    const db = getDatabase();
                    set(fireRef(db, `cinemas/`), this.cinemas);
                    
                    });
                    this.temp_id = '';
                    }
                }
                
                const db = getDatabase();
                set(fireRef(db, `cinemas/`), this.cinemas);

                this.createPage = 2;
                this.createHall = 2;

                setTimeout(() => {
                    this.imgData6Storage = [];
                    console.log(this.imgData6Storage);
                }, 1000);  

            }, 1000);
        },
        saveData(cinema){
                document.getElementById(cinema.id + 'getDataBtn').click();
        },
        galaryPhotLoad(event){
            let cinema = this.cinemas.find(el => el.id === this.temp_id);

            let galaryTempId = Date.now();
            cinema.galary.push({
                id: galaryTempId,
                img: ''
            });
            setTimeout(() => {
                var sImg = document.getElementById(galaryTempId + "-temp_logo_img2");

                let imgDataS = Date.now();

                this.imgData5 = event.target.files[0];

                this.imgData5Storage.push({
                    im_g: this.imgData5,
                    name: this.imgData5.name,
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
                
                reader.readAsDataURL(this.imgData5);

                document.getElementById(galaryTempId + "-temp_logo_img2")
                .style='width: 150px; height: 115px; display: block; margin: 0 auto;';
                document.getElementById(galaryTempId + "-logo_img2").style='display: none;';

                this.imgData5 = null;
                this.storage = getStorage();
            }, 1000);
        },
        galaryPhotLoad2(event){
            let hall = this.temp_cinema.halls.find(el => el.hallId === this.temp_id2);

            console.log(hall.hallId);
            let galaryTempId = Date.now();
            hall.hallGallary.push({
                id: galaryTempId,
                id2: hall.hallId,
                img: ''
            });
            setTimeout(() => {
                var sImg = document.getElementById(galaryTempId + "-temp_logo_img2");

                let imgDataS = Date.now();

                this.imgData6 = event.target.files[0];

                this.imgData6Storage.push({
                    im_g: this.imgData6,
                    name: this.imgData6.name,
                    id: imgDataS,
                    id2: galaryTempId,
                    id3: hall.hallId,
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
                
                reader.readAsDataURL(this.imgData6);

                document.getElementById(galaryTempId + "-temp_logo_img2")
                .style='width: 150px; height: 115px; display: block; margin: 0 auto;';
                document.getElementById(galaryTempId + "-logo_img2").style='display: none;';

                this.imgData6 = null;
                this.storage = getStorage();
            }, 1000);
        },
        first_func(){
          const dbRef = fireRef(getDatabase());
          get(child(dbRef, `cinemas/`)).then((snapshot) => {
            var banners = [];
            snapshot.forEach(element => {
              banners.push(element.val());
            });
            this.cinemas = banners;
            if(this.cinemas.length === 1){
              setTimeout(() => {
              console.log(this.cinemas);
              document.getElementById(this.cinemas[0].id + "cinemDel").style='display: none;';
            }, 500);
            }
          });
        },
        deleteImg1(cinema){
          cinema.logo = '';
          document.getElementById(cinema.id + "-temp_logo_img").src="";
        },
        deleteImg2(cinema){
          cinema.topBackPhot = '';
          document.getElementById(cinema.id + "-temp_logo_img2").src="";
        },
        deleteImg3(hall){
          hall.hallLayout = '';
          document.getElementById(hall.hallId + "-temp_logo_img3").src="";
        },
        deleteImg4(hall){
          hall.hallTopBackPhot = '';
          document.getElementById(hall.hallId + "-temp_logo_img4").src="";
        },
        deletePhot(image, cinema){
            let imageTempId = cinema.galary.findIndex(n => n.id === image.id);
            cinema.galary.splice(imageTempId, 1);
        },
        deletePhot2(image2, hall){
            let imageTempId = hall.hallGallary.findIndex(n => n.id === image2.id);
            hall.hallGallary.splice(imageTempId, 1);
        },
    },
    mounted(){
      this.first_func()
    }
}
</script>

<style scoped>

/* Main block */

.main_logo{
     width: 165px; 
     height: 110px; 
     margin-top: 4px;
     margin-left: 9px;
}

.add_cinema{
    position: relative;
    z-index: 0;
    display: flex;
    background-color: white;
    width: 90%;
    padding: 25px;
    margin: 0 auto;
}

.cinema_sort{
    display: flex;
}

.cinema_block{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 25px;
}

.cinema_delete{
    position: absolute;
    width: 25px; 
    height: 25px; 
    margin-left: 187px;
    top: 22px;
}
/* Cinema banner */

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
    margin-bottom: 11px;
    margin-top: 10px;
    background-color: #D2D6DE;
    border: 1px solid #A9A9A9;
}

.square3{
    width: 185px;
    height: 120px;
    margin-bottom: 11px;
    margin-top: 10px;
    margin-left: 37px;
    background-color: #D2D6DE;
    border: 1px solid #A9A9A9;
}

.cineName{
    border: none; 
    color: black; 
    text-align: center
}

/* Form 1 */

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

.logo_img{
     width: 150px; 
     height: 110px; 
     margin-left: 0px; 
     margin-top: -1px;
}

.temp_logo_img{
    display: none;
}

.logo_input{
    width: 127px; 
    margin-bottom: 6px; 
    display: none;
}

.logo_input2{
    width: 127px; 
    margin-bottom: 6px; 
    display: none;
}

.logo_del{
    position: absolute; 
    width: 25px; 
    height: 25px; 
    margin-left: 266px;
    margin-top: -124px; 
}

.logo_del2{
    position: absolute; 
    width: 25px; 
    height: 25px; 
    margin-left: 330px;
    margin-top: -124px; 
}

.logo_del3{
    position: absolute; 
    width: 25px; 
    height: 25px; 
    margin-left: 326px;
    margin-top: -3px;
}

.logo_del4{
    position: absolute; 
    width: 25px; 
    height: 25px; 
    margin-left: 328px;
    margin-top: -124px;
}

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

.form2{
    position: absolute;
    display: flex;
    flex-direction: column;
    background-color: white;
    padding: 60px;
    border-radius: 6px;
    width: 100%;
    left: 0px;
    top: 0px;
    margin: 0 auto;
    z-index: 2;
}

.cinema_name{
    display: flex;
}

.cinema_name>input{
    width: 400px;
    margin-left: 25px;
    margin-bottom: 15px;
}

.descr{
    display: flex;
}

.descr>textarea{
    width: 800px;
    height: 150px;
    margin-left: 25px;
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

.hall_list_h4{
    margin-top: 45px;
    text-align: center;
    font-weight: bold;
    margin-bottom: 20px;
}

table{
    margin-bottom: 25px; 
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
    width: 350px;
    padding-left: 15px;
}

tr>td:nth-child(2){
    border: 1px solid black;
    width: 500px;
    height: 40px;
    padding-left: 15px;
}

.save_btn{
    text-align: center;
}

.seo{
    display: flex;
    margin-top: 65px;
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

.close1{
    width: 30px; 
    height: 30px; 
    margin-left: 1219px; 
    margin-top: -147px;
}

.third{
    background-color: white;
}

.third_td{
    display: flex;
    align-items: center;
    background-color: white;
    border: white;
    padding-bottom:2.5px;
    padding-right: 0.5px;
}

.third_td>img{
    margin-top: 6px;
    margin-right: 5px;
    width: 30px;
    height: 30px;
}

.third_td>img:first-child{
    margin-left: 30px;
    margin-right: 10px;
}

.galary>button{
    margin-left: 36px;
}

/* Form 2 */

.hall_numb{
    display: flex;
}

.hall_numb>input{
    width: 400px;
    margin-left: 48px;
    margin-bottom: 15px;
}

.hall_descr{
    display: flex;
}

.hall_descr>textarea{
    width: 800px;
    height: 150px;
    margin-left: 25px;
    margin-bottom: 15px;
}

.hall_sch{
    display: flex;
}

.hall_sch>button{
    margin-left: 76px;
    margin-bottom: 15px;
}

.top_banner{
    display: flex;
    align-items: center;
}

.top_banner>button{
    margin-left: 40px;
    margin-bottom: 15px;
}

</style>