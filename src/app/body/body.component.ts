import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  categorias: any = [{
    codigo:1, texto:"Politica"
  },{
    codigo:2, texto:"Educación"
  },{
    codigo:3, texto:"Seguridad"
  }];

  temporal:any;

  noticias:any = [{
    categoria:{
      codigo:1, 
      texto:"Politica"
    },
    titulo:"C1Lorem ipsum dolor sit amet, consectetur adipiscing eli",
    texto:"sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    imagen: "https://i.picsum.photos/id/199/200/300.jpg"
  },{
    categoria:{
      codigo:2, 
      texto:"Politica"
    },
    titulo:"C2Lorem ipsum dolor sit amet, consectetur adipiscing eli",
    texto:"sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    imagen: "https://i.picsum.photos/id/199/200/300.jpg"
  },{
    categoria:{
      codigo:3, 
      texto:"Politica"
    },
    titulo:"C3Lorem ipsum dolor sit amet, consectetur adipiscing eli",
    texto:"sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    imagen: "https://i.picsum.photos/id/199/200/300.jpg"
  }];

  constructor() { 

    this.temporal = this.noticias;

  }

  ngOnInit(): void {
  }

  eventoControl(evento){
    if(evento.target.value == 0){
      this.noticias = this.temporal;
    }else{
      this.noticias = this.temporal.filter((item) =>
      item.categoria.codigo == evento.target.value);
    }
  }

}
