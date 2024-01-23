import { Component } from '@angular/core';
import { Meta, MetaDefinition } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  title = 'test';
  text = "";
  img = "";
  bg = "";
  company = "";
  constructor(private metaService: Meta,private route: ActivatedRoute, ){
    this.company = this.route.snapshot.params['id'];
    console.log(this.company)
    this.setData();
  }

  setData(){
    if(this.company === 'movistar'){
      this.text = "HOLA SOY MOVISTAR";
      this.img = "https://movistarhogar.pe/assets/images/logo-blue.png";
      this.bg = "#fff";
      // Metaetiquetas en Facebook o Pinterest, Open Graph
      this.metaService.addTag({ property: 'og:type', content: 'article' });
      this.metaService.addTag({ property: 'og:title', content: 'MOVISTAR' });
      this.metaService.addTag({ property: 'og:description', content: 'Hola soy movistar en ssr' });
      this.metaService.addTag({ property: 'og:image', content: this.img });
    }else if(this.company === 'claro'){
      this.text = "HOLA SOY CLARO";
      this.img = "https://www.claro.com.pe/portal/pe/recursos_tema/assets/vector/logo-claro-blanco.svg";
      this.bg = "#DA291C";

      this.metaService.addTag({ property: 'og:type', content: 'article' });
      this.metaService.addTag({ property: 'og:title', content: 'CLARO' });
      this.metaService.addTag({ property: 'og:description', content: 'Hola soy claro en ssr' });
      this.metaService.addTag({ property: 'og:image', content: this.img });
    }else{
      this.text = "HOLA SOY ENTEL";
      this.img = "https://www.entel.pe/wp-content/uploads/2022/11/Logo-entel.png";
      this.bg = "#fff";

      this.metaService.addTag({ property: 'og:type', content: 'article' });
      this.metaService.addTag({ property: 'og:title', content: 'ENTEL' });
      this.metaService.addTag({ property: 'og:description', content: 'Hola soy entel en ssr' });
      this.metaService.addTag({ property: 'og:image', content: this.img });
    }
  }
}
