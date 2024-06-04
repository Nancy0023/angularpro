import { Routes } from '@angular/router';
import {AppComponent} from './app.component';
import {AboutComponent} from './about/about.component';
import {ContactComponent} from './contact/contact.component';
import {CardComponent} from './card/card.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import path from 'path';
import { MyloginpageComponent } from './modules/auth/myloginpage/myloginpage.component';
import { LandingpageComponent } from './modules/dashboard/landingpage/landingpage.component';



export const routes: Routes = [
    {
        path:"",
        component:AppComponent,
        children:[
            {
                path:"",
                component:MyloginpageComponent
            },
            {
                path:"about",
                component:AboutComponent
            },
            {
                path:"contact",
                component:ContactComponent
            },
            {
                path:"card",
                component:CardComponent
            }
        ]
    },
    {
        path:'dashboard',
        component:AppComponent,
        children:[
            {
            path:'dashboard',
            component:LandingpageComponent
            }
        ]

  
    },
    

   /* {
        path:"about",
        component:AboutComponent
    },
    {
        path:"contact",
        component:ContactComponent
    },
    {
        path:"card",
        component:CardComponent
    },*/
    {
        path:"portfolio",
        component:PortfolioComponent
    }
];
