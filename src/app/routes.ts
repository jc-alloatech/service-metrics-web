import {Component} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HelloComponent} from './hello';
import {NetworkGraphComponent} from './components/graph/graph.component';

@Component({
    selector: 'fountain-root',
    template: '<router-outlet></router-outlet>'
})
export class RootComponent { }

export const routes: Routes = [
    {
        path: '',
        component: HelloComponent
    },
    { path: 'graph', component: NetworkGraphComponent }
];

export const routing = RouterModule.forRoot(routes);
