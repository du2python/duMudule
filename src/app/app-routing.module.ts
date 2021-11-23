import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DuTestComponent } from './du-test/du-test.component'

const routes: Routes = [
  {path: 'dutest', component : DuTestComponent},
  {path: '', component : DuTestComponent},
  {path: '**', component : DuTestComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
