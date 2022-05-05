import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

createApp(App).use(store).use(router).mount('#app')

import { initializeApp } from "firebase/app"
import { getStorage } from "firebase/storage"
import { getDatabase } from "firebase/database"

const firebaseConfig = {
  apiKey: "AIzaSyAvkOzrk17JwWjoYTiP6oTXVkSgqUFEeDg",
  authDomain: "kino-cms-49141.firebaseapp.com",
  databaseURL: "https://kino-cms-49141-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "kino-cms-49141",
  storageBucket: "kino-cms-49141.appspot.com",
  messagingSenderId: "726906398995",
  appId: "1:726906398995:web:3779c1d7642e98c572d2e6"
};

const firebaseApp = initializeApp(firebaseConfig);
const storage = getStorage(firebaseApp);
const database = getDatabase(firebaseApp);



