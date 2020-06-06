export class Covid {
  activos: string;
  country: string;
  update: Date;
  newCases: string;
  newDeaths: string;
  totalCases: string;
  totalDeaths: string;
  totalRecovered: string;

  Covid(
    activos?: string,
    country?: string,
    update?: Date,
    newCases?: string,
    newDeaths?: string,
    totalCases?: string,
    totalDeaths?: string,
    totalRecovered?: string
  ) {
    this.activos = activos;
    this.country = country;
    this.update = update;
    this.newCases = newCases;
    this.newDeaths = newDeaths;
    this.totalCases = totalCases;
    this.totalDeaths = totalDeaths;
    this.totalRecovered = totalRecovered;
  }
}
