import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ProcessComponent } from './components/process/process.component';
import { ContactComponent } from './components/contact/contact.component';


const routes: Routes = [ 
  {path:'',component:HomeComponent, pathMatch: 'full'},
  {path:'בית',component:HomeComponent},
  {path:'אודות',component:AboutComponent},
  {path:'תהליך',component:ProcessComponent},
  {path:'צור קשר',component:ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
