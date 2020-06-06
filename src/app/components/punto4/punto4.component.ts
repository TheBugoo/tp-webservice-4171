import { Component, OnInit } from '@angular/core';
import { Covid } from 'src/app/models/covid';
import { CovidsService } from 'src/app/services/covids.service';

@Component({
  selector: 'app-punto4',
  templateUrl: './punto4.component.html',
  styleUrls: ['./punto4.component.css'],
})
export class Punto4Component implements OnInit {
  paises: Array<Covid>;
  fallecidos: boolean = false;
  confirmados: boolean = false;
  recuperados: boolean = false;
  filtrado: boolean = false;
  filtradof: boolean = false;
  filtradoc: boolean = false;
  filtrador: boolean = false;
  a: any;
  constructor(private coviService: CovidsService) {
    this.paises = new Array<Covid>();
  }
  /* public obtenerDatos(pais) {
    let fecha = '2020-06-02';
    this.covitService.listarPaises(pais, fecha).subscribe(
      (result) => {
        this.resultados = result;
        this.paiss.nombre = this.resultados[0].country;
        this.paiss.confirmados = this.resultados[0].provinces[0].confirmed;
        this.paiss.recuperados = this.resultados[0].provinces[0].recovered;
        this.paiss.fallecidos = this.resultados[0].provinces[0].deaths;

        console.log(this.resultados);
      },
      (error) => {
        console.log(error);
      }
    );
  }*/
  public consulta = (country: HTMLSelectElement) => {
    this.filtrado = true;
    this.coviService.filtrarPorPais(country.value).subscribe(
      (res) => {
        this.a = res;
        this.filtradoFallecido();
        this.filtradoRecuperado();
        this.filtradoCasos();
        console.log(this.a);
      },
      (err) => {
        console.log('error', err);
      }
    );
  };

  public change = () => {
    this.fallecidos == false
      ? (this.fallecidos = true)
      : (this.fallecidos = false);
  };
  public changeRecuperados = () => {
    this.recuperados == false
      ? (this.recuperados = true)
      : (this.recuperados = false);
  };
  public changeCasos = () => {
    this.confirmados == false
      ? (this.confirmados = true)
      : (this.confirmados = false);
  };
  public filtradoFallecido = () => {
    this.fallecidos == true
      ? (this.filtradof = true)
      : (this.filtradof = false);
  };
  public filtradoRecuperado = () => {
    this.recuperados == true
      ? (this.filtrador = true)
      : (this.filtrador = false);
  };
  public filtradoCasos = () => {
    this.confirmados == true
      ? (this.filtradoc = true)
      : (this.filtradoc = false);
  };

  ngOnInit(): void {
    this.filtrado = false;
    this.coviService.listarPaises().subscribe(
      (res) => {
        this.paises = res;
        console.log(res);
      },
      (err) => {
        console.log('error', err);
      }
    );
  }
}
