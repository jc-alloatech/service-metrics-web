import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {Http, HttpModule} from '@angular/http';
import {routing, RootComponent} from './routes';

import {HelloComponent} from './hello';
import {NetworkGraphComponent} from './components/graph/graph.component';
import {GraphService} from './components/graph/graph.service';
import {GraphModule} from './components/graph/graph.module';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    GraphModule,
    routing
  ],
  declarations: [
    RootComponent,
    HelloComponent,
  ],
  providers: [
    GraphService
  ],
  bootstrap: [RootComponent]
})
export class AppModule {}
