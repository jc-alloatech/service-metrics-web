import { NgModule }      from '@angular/core';
import { routing }       from './graph.routing';
import { NetworkGraphComponent } from './graph.component';
import { GraphService } from './graph.service';
import { CommonModule } from '@angular/common';  
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [
    routing,
    CommonModule
  ],
  declarations: [
    NetworkGraphComponent
  ],
  providers: [
    GraphService
  ]
})
export class GraphModule {}
