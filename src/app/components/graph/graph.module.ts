import { NgModule }      from '@angular/core';
import { routing }       from './graph.routing';
import { NetworkGraphComponent } from './graph.component';
import { GraphService } from './graph.service';
import { CommonModule } from '@angular/common';  
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { ControlsComponent } from './controls.component';

@NgModule({
  imports: [
    routing,
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [
    NetworkGraphComponent,
      ControlsComponent
  ],
  providers: [
    GraphService
  ]
})
export class GraphModule {}
