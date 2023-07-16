import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrutasComponent } from './components/frutas/frutas.component';

const routes: Routes = [
  {path: 'fruta/:id',component: FrutasComponent},
  {path: 'fruta/index', component: FrutasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
