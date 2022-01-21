import { Component} from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent  {

  heroes:string[] = ['Spiderman','Superman','Venom','Hulk','Profesor'];
  heroeQuitado:String= '';
  bandera = false;
  borrarHeroe(){
    this.heroeQuitado = this.heroes.shift() || '';
    if(this.heroeQuitado.length>0){
      this.bandera=true;
    }else{
      this.bandera=false;
    }
    //this.heroeQuitado= this.heroes[indice]; 
  //this.heroes.splice(indice,1);
 // console.log("Se elimino el heroe: ",this.heroeQuitado)
}
 

}
