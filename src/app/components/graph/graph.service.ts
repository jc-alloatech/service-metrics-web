import {Injectable} from '@angular/core';
import {Http, HttpModule} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class GraphService {

    constructor(private http: Http) {
    }

    getData(): Observable<any> {
        return this.http
            .get('../assets/graph_data.json')
            .map((response: any) => {
                console.log("mock data" + response.json());
                return response.json();
            }
            ) 
            .catch((error:any) => { console.log(error); return "{}" });
    }
}
