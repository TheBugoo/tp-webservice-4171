import { Component, OnInit } from '@angular/core';
import { HoroscoService } from 'src/app/services/horoscopos.service';

@Component({
  selector: 'app-punto3',
  templateUrl: './punto3.component.html',
  styleUrls: ['./punto3.component.css'],
})
export class Punto3Component implements OnInit {
  sign: string;
  a: any;
  fecha: string;
  constructor(private horoscoService: HoroscoService) {}

  public seleccionarHoroscopo(sign: HTMLSelectElement, fecha: string) {
    this.fecha = fecha;
    this.horoscoService.filtrarHoroscopo(sign.value, fecha).subscribe(
      (res) => {
        this.a = res;
        console.log(this.a);
      },
      (err) => {
        console.log('error', err);
      }
    );
  }
  ngOnInit() {}
}
