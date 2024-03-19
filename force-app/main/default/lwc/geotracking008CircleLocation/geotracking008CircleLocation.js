import { LightningElement } from 'lwc';

export default class Geotracking008CircleLocation extends LightningElement {
    mapMarkers = [
        {
            location: {
                City: 'San Francisco',
                Country: 'USA',
                PostalCode: '94105',
                State: 'CA',
                Street: '50 Fremont St',
            },
            type: 'Circle',
            radius: 200,
            strokeColor: '#FFF000',
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: '#FFF000',
            fillOpacity: 0.35,
        },
    ];
}