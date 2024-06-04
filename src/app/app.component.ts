import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgClass } from '@angular/common';
import {AboutComponent} from './about/about.component';
import {ContactComponent} from './contact/contact.component';
import {CardComponent} from './card/card.component';
import { PortfolioComponent } from './portfolio/portfolio.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NgClass,AboutComponent,ContactComponent,CardComponent,PortfolioComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angularpro';
  a : number =800;
  c:boolean=true;
  b:string="john";
  
}
