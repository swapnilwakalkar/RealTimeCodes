import { LightningElement } from 'lwc';

export default class Geotracking001 extends LightningElement {
    mapMarkers = [
        {
            location: {
                Street: 'Charminar',
                City: 'hyderabad',
                Country: 'India',
                state:'telangana'
            },
            title: 'The Landmark',
            description:
                'Your Searched Location is Here',
            
            },
    ];
    zoomLevel = 15;
    listView = 'visible';
}