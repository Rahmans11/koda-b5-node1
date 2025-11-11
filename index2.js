import {createInterface} from "node:readline"
//import moment from 'moment';

import minitask1 from "./src/file.js"

minitask1.greeting();

const rl =createInterface({
  input: process.stdin,
  output: process.stdout
});

function isValidDate(dateString) {
    const date = new Date(dateString);
    return Object.prototype.toString.call(date) === '[object Date]' && !isNaN(date.getTime());
}

function validate(){
   rl.question('Input date :', (answer) => {
    let check = isValidDate(answer);
      if (check === true){
         console.log("convert form: "+ `${answer[0]}${answer[1]}/${answer[3]}${answer[4]}/${answer[6]}${answer[7]}${answer[8]}${answer[9]}`);
      }else {
        console.log( "Format input tanggal salah "); 
      }
      rl.close();
   })
}
validate();