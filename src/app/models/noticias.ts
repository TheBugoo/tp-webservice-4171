export class Noticias {
  id: number;
  seo: string;
  tit: string;
  des: string;
  img: string;

  noticia(id?: number, seo?: string, tit?: string, des?: string, img?: string) {
    this.id = id;
    this.seo = seo;
    this.tit = tit;
    this.des = des;
    this.img = img;
  }
}
