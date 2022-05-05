import { getDatabase, ref, set } from "firebase/database";

function getData(){
    const db = getDatabase();
    set(ref(db, this.text), {
        id: Date.now(),
        img: this.img,
        url: this.url,
        text: this.text,
    });

    const newBanner = {
        id: Date.now(),
        url: this.url,
        text: this.text,
    }       
    if(this.url !== '' && this.text !== ''){
      this.banners.push(newBanner);
      this.url = '',
      this.text = '',
      this.blocks.length = 0
    } else {
      this.blocks.length = 0;
      this.url = '',
      this.text = ''
    }
} 