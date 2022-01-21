import { Component } from "@angular/core";

@Component({
selector:'app-heroe',
templateUrl:'heroe.component.html'
})

export class HeroeComponent{
    nombreHeroe:string = 'Iroman';
    edadHeroe:number = 45;

    get nombreCapitalizado():string{
        return this.nombreHeroe.toUpperCase();
    }

    obtenerNombreConEdad():string{
        return `${this.nombreHeroe} - ${this.edadHeroe}`
    }

    cambiarNombre():void{
     this.nombreHeroe = "Spiderman";
    }

    cambiarEdad():void{
      console.log("hey!!")  
      this.edadHeroe = 35;
    }
}