import { Component } from '@angular/core';
import { StorageService } from './services/storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private storageService:StorageService){

  }
  imagenes:any [] = [];
  cargarImagen(event:any){
    let archivos = event.target.files
    let reader =new FileReader();
    let nombre ="jonathan";

    reader.readAsDataURL(archivos[0]);
    reader.onloadend = () => {

      console.log(reader.result);
      this.imagenes.push(reader.result);
      this.storageService.subirImagen(nombre+"_"+Date.now(), reader.result).then(urlImagen=>{
        console.log(urlImagen);
      });
    }
    //console.log(event.target.files);

  }
 


  
}
