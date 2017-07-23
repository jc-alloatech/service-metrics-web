import { Component, OnInit } from '@angular/core';

import { GraphService } from './graph.service';
import { Controls } from './controls';

@Component({
    selector: 'controls',
    template: require('./controls.html'),
})
export class ControlsComponent {
    controls = new Controls();
    constructor(private service: GraphService) {
        service.getControls().subscribe(controls => { this.controls = controls; this.handleNewControls(); }, error => console.log(error));
        console.log('controls.component::data:: ' + this.controls);
    }

    private handleNewControls(): void {
        console.log('controls.component::handleNewControls()');
    }

    private onCGChange(event): void {
        console.log("onCGChange::event - " + event);
        console.log('controls::sCG - before-' + this.controls.showCapabilityGroups);
        this.controls.showCapabilityGroups = event;
        console.log('controls::sCG - after-' + this.controls.showCapabilityGroups);
        this.service.updateOnControlChange(this.controls).subscribe(controls => { this.controls = controls; this.handleNewControls(); }, error => console.log(error));
    }

    private onCapChange(event): void {
        console.log("onCapChange::event - " + event);
        console.log('controls::Cap - before-' + this.controls.showCapabilities);
        this.controls.showCapabilities = event;
        console.log('controls::Cap - after-' + this.controls.showCapabilities);
        this.service.updateOnControlChange(this.controls).subscribe(controls => { this.controls = controls; this.handleNewControls(); }, error => console.log(error));
    }

    private onCompChange(event): void {
        console.log("onCompChange::event - " + event);
        console.log('controls::Cap - before-' + this.controls.showComponents);
        this.controls.showComponents = event;
        console.log('controls::Cap - after-' + this.controls.showComponents);
        this.service.updateOnControlChange(this.controls).subscribe(controls => { this.controls = controls; this.handleNewControls(); }, error => console.log(error));
    }

    private onIntChange(event): void {
        console.log("onIntChange::event - " + event);
        console.log('controls::Int - before-' + this.controls.showInterfaces);
        this.controls.showInterfaces = event;
        console.log('controls::int - after-' + this.controls.showInterfaces);
        this.service.updateOnControlChange(this.controls).subscribe(controls => { this.controls = controls; this.handleNewControls(); }, error => console.log(error));
    }

    private onConsumerChange(event): void {
        console.log("onConsumerChange::event - " + event);
        console.log('controls::consumer - before-' + this.controls.showConsumers);
        this.controls.showConsumers = event;
        console.log('controls::consumer - after-' + this.controls.showConsumers);
        this.service.updateOnControlChange(this.controls).subscribe(controls => { this.controls = controls; this.handleNewControls(); }, error => console.log(error));
    }


} 