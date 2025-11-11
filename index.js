import {createInterface} from "node:readline"
import moment from 'moment';

import minitask1 from "./src/file.js"

minitask1.greeting();

const rl =createInterface({
  input: process.stdin,
  output: process.stdout
});

function validate(){
   rl.question('Input date :', (answer) => {
      const formats = ['DD-MM-YYYY', 'DD/MM/YYYY'];
      const dateValidated = moment(answer, formats, true);
      if (dateValidated.isValid()){
         console.log("convert form: "+ dateValidated.format('DD/MM/YYYY'));
      } else {
        console.log( "Format input tanggal salah "); 
      }
      rl.close();
   })
}
validate();

