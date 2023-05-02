import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllHotelsComponent } from './components/all-hotels/all-hotels.component';

const routes: Routes = [
  {
    path: 'home', component: AllHotelsComponent,
    children: [
      { path: 'all-hotels', component: AllHotelsComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
