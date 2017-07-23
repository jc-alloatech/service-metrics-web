import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Network, DataSet, Node, Edge, IdType, DataView } from 'vis';
import { GraphService } from './graph.service';

@Component({
    selector: 'network-graph',
    styles: [`
    .graph {            
        margin: 0;
        height: 100%;
        min-height: 100%;
        background-color: lightblue;
    }
  `],
    template: require('./graph.html')
})
export class NetworkGraphComponent implements OnInit {
    private data: any;
    private network: Network;
    private curNode: Node;
    private curNodeTemplate: Node;

    constructor(service: GraphService) {
        service.getData().subscribe(data => { this.data = data; this.handleNewData(); }, error => console.log(error));
        console.log('Boostrapped Data:: ' + this.data);
    }

    public ngOnInit(): void { }


    private handleClick(properties): void {
        console.log('Clicked Node::' + properties);
        if (properties.nodes.length === 1) {
            var id = properties.nodes[0];
            var dataResult = this.data.nodes.filter(function(obj) {
                return obj.id === id;
            });
            if (dataResult.length === 1) {
                this.curNodeTemplate = dataResult[0];
                console.log('Set curNodeTempalte id:' + this.curNodeTemplate.id + ', label:' + this.curNodeTemplate.label);
            }
            var liveResult = this.network.body.nodes[id];
            if (liveResult) {
                this.curNode = liveResult;
                console.log('(' + this.curNode.x + ', ' + this.curNode.y);
            }
        }
    }

    private handleNewData(): void {
        // create a network
        var container = document.getElementById('mynetwork');
        var options = {
            'layout': {
                'randomSeed': undefined,
                'improvedLayout': true,
                'hierarchical': {
                    'enabled': false,
                    'levelSeparation': 1750,
                    'nodeSpacing': 1500,
                    'treeSpacing': 1300,
                    'blockShifting': true,
                    'edgeMinimization': true,
                    'parentCentralization': true,
                    'direction': 'UD',        // uD, DU, LR, RL
                    'sortMethod': 'hubsize'   // hubsize, directed
                }
            },
            'physics': {
                'forceAtlas2Based': {
                    'gravitationalConstant': -4500,
                    'centralGravity': 0.001,
                    'springLength': 15500
                },
                'repulsion': {
                    'centralGravity': 0.001,
                    'springLength': 14500,
                    'springConstant': 0.05,
                    'nodeDistance': 14500,
                    'damping': 0.09
                },
                'hierarchicalRepulsion': {
                    'centralGravity': 0.001,
                    'springLength': 15600,
                    'springConstant': 0.01,
                    'nodeDistance': 15600,
                    'damping': 0.09
                },
                'minVelocity': 0.1,
                'solver': 'forceAtlas2Based',
            }
        };
        console.log("Creating Network from Data:: " + this.data);
        this.network = new Network(container, this.data, options);
        this.network.on('click', (properties) => this.handleClick(properties));
    }
}


