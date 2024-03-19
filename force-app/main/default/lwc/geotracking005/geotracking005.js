import { LightningElement } from 'lwc';

export default class LightningMapExample extends LightningElement {
    mapMarkers = [
        {
            location: {
                Street: '1000 5th Ave',
                City: 'New York',
                State: 'NY',
                           },

            title: 'Museum of Fine Arts',
            description:
                'A grand setting for one of the greatest collections of art, from ancient to contemporary.',
                
        },
    ];
    zoomLevel = 15;
    listView = 'visible';
}