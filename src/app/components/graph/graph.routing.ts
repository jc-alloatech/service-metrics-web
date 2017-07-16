import { Routes, RouterModule }  from '@angular/router';

import { NetworkGraphComponent } from './graph.component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: 'graph',
    component: NetworkGraphComponent,
    children: [
    ]
  }
];

export const routing = RouterModule.forChild(routes);
