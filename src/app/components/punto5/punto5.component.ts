import { Component, OnInit } from '@angular/core';
import { PruebasService } from 'src/app/services/pruebas.service';

@Component({
  selector: 'app-punto5',
  templateUrl: './punto5.component.html',
  styleUrls: ['./punto5.component.css', './fonts2/iconos2.css'],
})
export class Punto5Component implements OnInit {
  a: any;
  busqueda: any;
  a2: any;
  a3: any;
  a4: any;
  a5: any;
  q: string;
  palabra: string;
  image: boolean;
  busq: boolean;

  constructor(private pruebas: PruebasService) {
    this.image = false;
    this.busq = false;
  }

  public buscarImagen(q: string) {
    this.q = q;
    this.pruebas.buscarImagenes(q).subscribe(
      (res) => {
        this.a = res['value'];
        this.a2 = res['value'];
        this.a3 = res['value'];
        this.a4 = res['value'];
        this.a5 = res['value'];
        console.log(this.a);
      },
      (err) => {
        console.log('error', err);
      }
    );
  }
  public buscarWebs(busqueda: string) {
    this.palabra = busqueda;
    this.pruebas.buscarPaginas(busqueda).subscribe(
      (res) => {
        this.busqueda = res['organic'];
        console.log(this.busqueda);
      },
      (err) => {
        console.log('error', err);
      }
    );
  }
  public cambiarDeLado() {
    this.busq = true;
    this.image = false;
  }
  public cambiarDeLado2() {
    this.busq = false;
    this.image = true;
  }
  public setOnFalse() {
    this.busq = false;
    this.image = false;
  }
  /*  public seleccionarHoroscopo(sign, fecha: string) {
    this.fecha = fecha;
    this.pruebas.filtrarHoroscopo(sign, fecha).subscribe(
      (res) => {
        this.a = res;
        console.log(this.a);
      },
      (err) => {
        console.log('error', err);
      }
    );
  }*/

  ngOnInit(): void {}
}
