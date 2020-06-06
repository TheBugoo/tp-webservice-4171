import { Component, OnInit } from '@angular/core';
import { ConversorService } from 'src/app/services/conversors.service';
import { element } from 'protractor';

@Component({
  selector: 'app-punto2',
  templateUrl: './punto2.component.html',
  styleUrls: ['./punto2.component.css', './fonts2/iconos2.css'],
})
export class Punto2Component implements OnInit {
  from: string;
  to: string;
  a: any;
  constructor(private conversorServices: ConversorService) {}
  public ejecutarConversion(
    from: string,
    to: string,
    amount: HTMLInputElement
  ) {
    return this.conversorServices
      .getConversor(this.from, this.to, amount.valueAsNumber)
      .subscribe(
        (res) => {
          console.log(res);
          this.a = res;
        },
        (err) => {
          console.log(err);
        }
      );
  }
  // public convertirMoney() {
  //   this.conversorServices
  //    .listarMoneda(this.amonto, this.demonto, this.valor)
  //   .subscribe(
  //     (result) => {
  //       this.resultados = result;
  //       this.Monedass.amonto = this.resultados[0].amonto;
  //       this.Monedass.demonto = this.resultados[0].demonto;
  //      this.Monedass.valor = this.resultados[0].valor;
  //
  //         console.log(this.resultados);
  //      },
  //     (error) => {
  //      console.log(error);
  //   }
  //  );
  //}
  ngOnInit(): void {}
}
