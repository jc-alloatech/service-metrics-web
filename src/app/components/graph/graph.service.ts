import {Injectable} from '@angular/core';
import {Http, HttpModule} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import { DataSet, DataView } from 'vis';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Controls } from './controls';

@Injectable()
export class GraphService {

    private data: any;
    private dataSetNodes: DataSet;
    private dataSetEdges: DataSet;
    private dataView: DataView;
    private controls: Controls;


    constructor(private http: Http) {
        this.controls = new Controls(); 
    }

    getData(): Observable<any> {
        return this.http
            .get('../assets/graph_data.json')
            .map((response: any) => {
                console.log("mock data" + response.json());
                this.handleNewData(response.json());
                return response.json();
            }
            )
            .catch((error: any) => { console.log(error); return "{}" });
    }

    getControls(): Observable<Controls> {
        return this.updateOnControlChange(this.controls);
    }

    updateOnControlChange(controls: Controls): Observable<Controls> {
        console.log('graph.service::updateOnControlChange' + JSON.stringify(controls));
        var nodes = [];
        var origNodes = this.data.nodes;
        if (controls.showCapabilityGroups) {
           var capGroupNodes = origNodes.filter(function(item) {
               return item.group === 'Capability Group';
           })
           if(capGroupNodes.length > 0) {
               nodes = nodes.concat(capGroupNodes);
           }
           controls.capabilityGroupCount = capGroupNodes.length;
        }  else {
            controls.capabilityGroupCount = '0';
        }
        if (controls.showCapabilities) {
           var capabilityNodes = origNodes.filter(function(item) {
               return item.group === 'Capability';
           })
           if(capabilityNodes.length > 0) {
               nodes = nodes.concat(capabilityNodes);
           }
           controls.capabilityCount = capabilityNodes.length;
        } else {
           controls.capabilityCount = '0';
        }
        if (controls.showComponents) {
           var componentNodes = origNodes.filter(function(item) {
               return item.group === 'Component';
           })
           if(componentNodes.length > 0) {
               nodes = nodes.concat(componentNodes);
           }
           controls.componentCount = componentNodes.length;
        }  else {
            controls.componentCount = '0';
        }
        if (controls.showInterfaces) {
           var interfaceNodes = origNodes.filter(function(item) {
               return item.group === 'Interface';
           })
           if(interfaceNodes.length > 0) {
               nodes = nodes.concat(interfaceNodes);
           }
           controls.interfaceCount = interfaceNodes.length;
        } else {
            controls.interfaceCount = '0';
        }
        if (controls.showConsumers) {
           var consumerNodes = origNodes.filter(function(item) {
               return item.group === 'Consumers';
           })
           if(consumerNodes.length > 0) {
               nodes = nodes.concat(consumerNodes);
           }
           controls.consumerCount = consumerNodes.length;
        }  else {
            controls.consumerCount = '0';
        }
        this.controls = controls;
        return Observable.of(controls);
    }
    
    private handleNewData(data) {
        this.data = data;
        this.dataSetNodes = new DataSet(this.data.nodes);
        this.dataSetEdges = new DataSet(this.data.edges);
        var whereClause = 'item.group === "Interface"';
        this.dataView = new DataView(this.dataSetNodes, {
            //(item.group == 'Interface' || item.group == 'Component' || item.group == 'Capability' || item.group == 'Capability Group' || item.group == 'Service Calls' || item.group == 'Consumers');
            filter: function(item) {
                return whereClause;
            }
        });
    }


}
