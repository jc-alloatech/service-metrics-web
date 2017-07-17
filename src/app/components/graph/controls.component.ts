import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { GraphService } from './graph.service';
import { Controls } from './controls';

@Component({
    selector: 'controls',
    template: require('./controls.html'),
})
export class ControlsComponent {
    private data: any;
    isValidFormSubmitted: boolean = null;
    controlFormGroup = new FormGroup({
        showCapabilityGroups: new FormControl(true),
        showCapabilities: new FormControl(true),
        showComponents: new FormControl(true),
        showInterfaces: new FormControl(true),
        showOperations: new FormControl(true),
        showConsumers: new FormControl(true)
    });
    controls = new Controls();
    constructor(private service: GraphService) {
        service.getData().subscribe(data => { this.data = data; this.handleNewData(); }, error => console.log(error));
        console.log('controls.component::data:: ' + this.data);
 
    }

    onFormSubmit() {
        this.isValidFormSubmitted = false;
        if (this.controlFormGroup.invalid) {
            return;
        }
        this.isValidFormSubmitted = true;
        console.log(this.controlFormGroup.valid);
        this.controls.showCapabilityGroups = this.controlFormGroup.get('showCapabilityGroups').value;
        this.controls.showCapabilities = this.controlFormGroup.get('showCapabilities').value;
        this.controls.showComponents = this.controlFormGroup.get('showComponents').value;
        this.controls.showInterfaces = this.controlFormGroup.get('showInterfaces').value;
        this.controls.showOperations = this.controlFormGroup.get('showOperations').value;
        this.controls.showConsumers = this.controlFormGroup.get('showConsumers').value;
        this.reset();
    }
    reset() {
        this.controlFormGroup.reset();
        this.controlFormGroup.get('married').setValue(false);
    }
    setDefaultValues() {
        this.controlFormGroup.patchValue({ showCapabilityGroups: true, showCapabilities: true, showComponents: true, showInterfaces: true, showOperations: true, showConsumers: true });
    }
    
    private handleNewData(): void {
    }
    
} 