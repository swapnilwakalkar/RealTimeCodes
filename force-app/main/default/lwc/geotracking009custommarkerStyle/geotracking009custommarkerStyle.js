import { LightningElement } from 'lwc';

export default class Geotracking009custommarkerStyle extends LightningElement {

    mapMarkers = [
        {
            location: {
                City: 'San Francisco',
                Country: 'USA',
                PostalCode: '94105',
                State: 'CA',
                Street: '415 Mission St',
            },
            mapIcon: {
            path: 'M 125,5 155,90 245,90 175,145 200,230 125,180 50,230 75,145 5,90 95,90 z',
            fillColor: 'gold',
            fillOpacity: 0.8,
            strokeWeight: 0,
            scale: 0.10,
            anchor: {x: 122.5, y: 115}
            },
        }
        ];
    }