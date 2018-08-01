import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StopperComponent } from './stopper/stopper.component'
const routes: Routes =  [{
        path: '',
        redirectTo: 'stopper',
        pathMatch: 'full'
      },
      {
        path: 'stopper',
        component: StopperComponent,
        pathMatch: 'full',
      },
      ];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}