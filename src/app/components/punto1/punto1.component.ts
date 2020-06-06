import { Component, OnInit } from '@angular/core';
import { Noticias } from 'src/app/models/noticias';
import { NoticiaService } from 'src/app/services/noticia.service';
import { element } from 'protractor';

@Component({
  selector: 'app-punto1',
  templateUrl: './punto1.component.html',
  styleUrls: ['./punto1.component.css'],
})
export class Punto1Component implements OnInit {
  categoria: string;
  noticia: Noticias;
  noticia2: Noticias;
  noticias: Array<Noticias>;
  noticias2: Array<Noticias>;
  constructor(private noticiaServices: NoticiaService) {
    this.noticia = new Noticias();
    this.noticias = new Array<Noticias>();
    this.noticia2 = new Noticias();
    this.noticias2 = new Array<Noticias>();
  }

  ngOnInit(): void {
    this.noticiaServices.listarNoticias(this.categoria).subscribe(
      (result) => {
        this.noticias = Array<Noticias>();
        result['arts'].forEach((element) => {
          this.noticia = new Noticias();
          Object.assign(this.noticia, element);
          this.noticias.push(this.noticia);
        });
        console.log(this.noticias);
      },
      (error) => {
        alert('Error en la peticion');
      }
    );
  }
  public cargarNoticias() {
    this.noticiaServices.listarNoticias(this.categoria).subscribe(
      (result) => {
        this.noticias = Array<Noticias>();
        result['arts'].forEach((element) => {
          this.noticia = new Noticias();
          Object.assign(this.noticia, element);
          this.noticias.push(this.noticia);
        });
        console.log(this.noticias);
      },
      (error) => {
        alert('Error en la peticion');
      }
    );
  }
  public cargarNoticias2() {
    this.noticiaServices.listarNoticias(this.categoria).subscribe(
      (result) => {
        this.noticias2 = Array<Noticias>();
        result['arts'].forEach((element) => {
          this.noticia2 = new Noticias();
          Object.assign(this.noticia2, element);
          this.noticias2.reverse().push(this.noticia2);
        });
        console.log(this.noticias2);
      },
      (error) => {
        alert('Error en la peticion');
      }
    );
  }
}
