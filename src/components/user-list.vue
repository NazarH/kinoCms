<template>

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

      tempNumb: 1,
      smsUsersArray: [],
      smsUserList: []
    }
  },
  methods:{
    saveSmsUsers(){
      document.getElementById('one').style='display: none;';
      document.getElementById('mainBlock').style='display: block;';
      console.log(this.smsUserList);
    },
    addUserArr(user){
      let count = 0;
      if(this.smsUsersArray.length === 0){
        this.smsUsersArray.push(user.mainId);
        this.smsUserList.push({
          id: user.mainId,
          email: user.userEmail,
          sms: this.textArea
        });
      }
      for(let i = 0; i <= this.smsUsersArray.length; i++){
        if(this.smsUsersArray[i] === user.mainId){
          count++;
        }
        if(i === this.smsUsersArray.length - 1 && count === 0){
          this.smsUsersArray.push(user.mainId);
          this.smsUserList.push({
          id: user.mainId,
          email: user.userEmail,
          sms: this.textArea
          });
          count = 0;
        } 
      }
      count = 0;
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

.top_block{
  display: flex;
}

.users{
  margin-left: 54px;
}

.users>span{
  font-weight: bold;
}

.checkbox>span{
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

select{
  padding-top: 3px;
  padding-bottom: 3px;
  width: 300px;
}

.save_btn{
  text-align: center;
}

</style>

