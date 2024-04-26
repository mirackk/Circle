import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { ProductsComponent } from '../products/products.component';
import { ParentComponent } from '../parent/parent.component';
import { AssignmentComponent } from './assignment.component';

const routes: Routes = [
  {path:'assignment', component: AssignmentComponent},
  {path:'home', component: HomeComponent},
  {path:'products', component: ProductsComponent},
  {path:'parent', component: ParentComponent},
  {path:'', component: HomeComponent},
  {path:'**', component: ProductsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
